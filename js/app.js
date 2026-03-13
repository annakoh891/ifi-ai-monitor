// ═══════════════════════════════════════════
//  IFI AI Monitor — App Logic
// ═══════════════════════════════════════════

(function () {
  "use strict";

  // ── State ──────────────────────────────────
  let state = {
    view: "all",           // all | tc | project | loan
    search: "",
    institutions: new Set(["all"]),
    regions: new Set(["all"]),
    statuses: new Set(["all"]),
    sort: "date-desc",
    layout: "grid",        // grid | list
  };

  // ── DOM refs ──────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];

  // changelog-specific refs (set after DOMContentLoaded)
  let clColumns, changelogView, mainLayout, updateStrip;

  const cardGrid      = $("#cardGrid");
  const noResults     = $("#noResults");
  const searchInput   = $("#searchInput");
  const sortSelect    = $("#sortSelect");
  const resultCount   = $("#resultCount");
  const gridViewBtn   = $("#gridViewBtn");
  const listViewBtn   = $("#listViewBtn");
  const resetBtn      = $("#resetFilters");
  const modal         = $("#modal");
  const modalClose    = $("#modalClose");
  const modalContent  = $("#modalContent");
  const lastUpdated   = $("#lastUpdated");

  // ── Init ──────────────────────────────────
  function init() {
    clColumns      = $("#clColumns");
    changelogView  = $("#changelogView");
    mainLayout     = $(".main-layout");
    updateStrip    = $("#updateStrip");

    renderLastUpdated();
    renderStats();
    buildInstitutionFilters();
    buildRegionFilters();
    attachNavListeners();
    attachFilterListeners();
    attachSortListener();
    attachLayoutListeners();
    attachSearchListener();
    attachResetListener();
    attachModalListeners();
    renderCards();
    renderUpdateStrip();

    // "자세히 보기" in strip → jump to changelog
    $("#stripDetailBtn").addEventListener("click", () => {
      activateChangelog();
    });
  }

  // ── Last Updated ──────────────────────────
  function renderLastUpdated() {
    const dt = new Date(METADATA.lastUpdated);
    const fmt = dt.toLocaleDateString("ko-KR", { month: "short", day: "numeric" })
              + " " + dt.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" });
    lastUpdated.textContent = `${fmt} 업데이트`;
  }

  // ── Stats ─────────────────────────────────
  function renderStats() {
    const total    = IFI_DATA.length;
    const tcCount  = IFI_DATA.filter(d => d.type === "tc").length;
    const projCount= IFI_DATA.filter(d => d.type === "project").length;
    const loanCount= IFI_DATA.filter(d => d.type === "loan").length;

    animateCount("statTotal",   total);
    animateCount("statTC",      tcCount);
    animateCount("statProject", projCount);
    animateCount("statLoan",    loanCount);
  }

  function animateCount(id, target) {
    const el = document.getElementById(id);
    let cur = 0;
    const step = Math.ceil(target / 30);
    const timer = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = cur;
      if (cur >= target) clearInterval(timer);
    }, 30);
  }

  // ── Build Filters ─────────────────────────
  function buildInstitutionFilters() {
    const container = $("#institutionFilters");
    container.innerHTML = `<label class="filter-chip active"><input type="checkbox" value="all" checked /> 전체</label>`;
    INSTITUTION_SHORTS.forEach(short => {
      const full = IFI_DATA.find(d => d.institutionShort === short)?.institution || short;
      const label = document.createElement("label");
      label.className = "filter-chip";
      label.innerHTML = `<input type="checkbox" value="${short}" /><span class="inst-short">${short}</span>`;
      label.title = full;
      container.appendChild(label);
    });
    container.querySelectorAll("input").forEach(cb => {
      cb.addEventListener("change", () => handleSetFilter("institutions", cb.value, cb.checked, container));
    });
  }

  function buildRegionFilters() {
    const container = $("#regionFilters");
    container.innerHTML = `<label class="filter-chip active"><input type="checkbox" value="all" checked /> 전체</label>`;
    REGIONS.forEach(region => {
      const label = document.createElement("label");
      label.className = "filter-chip";
      label.innerHTML = `<input type="checkbox" value="${region}" /> ${region}`;
      container.appendChild(label);
    });
    container.querySelectorAll("input").forEach(cb => {
      cb.addEventListener("change", () => handleSetFilter("regions", cb.value, cb.checked, container));
    });
  }

  // Generic set filter handler (all/specific)
  function handleSetFilter(key, value, checked, container) {
    if (value === "all") {
      state[key] = new Set(["all"]);
      container.querySelectorAll("input").forEach(c => {
        c.checked = c.value === "all";
        c.parentElement.classList.toggle("active", c.value === "all");
      });
    } else {
      state[key].delete("all");
      container.querySelector('input[value="all"]').checked = false;
      container.querySelector('input[value="all"]').parentElement.classList.remove("active");
      if (checked) {
        state[key].add(value);
      } else {
        state[key].delete(value);
      }
      if (state[key].size === 0) {
        state[key].add("all");
        container.querySelector('input[value="all"]').checked = true;
        container.querySelector('input[value="all"]').parentElement.classList.add("active");
      }
    }
    container.querySelectorAll("input:not([value='all'])").forEach(c => {
      c.parentElement.classList.toggle("active", c.checked);
    });
    renderCards();
  }

  // ── Nav Listeners ─────────────────────────
  function attachNavListeners() {
    $$(".nav-link").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        $$(".nav-link").forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        state.view = link.dataset.view;
        if (state.view === "changelog") {
          activateChangelog();
        } else {
          deactivateChangelog();
          renderCards();
        }
      });
    });
  }

  function activateChangelog() {
    // 네비 표시 업데이트
    $$(".nav-link").forEach(l => l.classList.toggle("active", l.dataset.view === "changelog"));
    state.view = "changelog";
    mainLayout.classList.add("hidden");
    changelogView.classList.remove("hidden");
    updateStrip.style.display = "none";
    renderChangelog();
  }

  function deactivateChangelog() {
    mainLayout.classList.remove("hidden");
    changelogView.classList.add("hidden");
    updateStrip.style.display = "";
  }

  // ── Status Filter Listeners ───────────────
  function attachFilterListeners() {
    const container = $("#statusFilters");
    container.querySelectorAll("input").forEach(cb => {
      cb.addEventListener("change", () => handleSetFilter("statuses", cb.value, cb.checked, container));
    });
  }

  // ── Sort ──────────────────────────────────
  function attachSortListener() {
    sortSelect.addEventListener("change", () => {
      state.sort = sortSelect.value;
      renderCards();
    });
  }

  // ── Layout ────────────────────────────────
  function attachLayoutListeners() {
    gridViewBtn.addEventListener("click", () => {
      state.layout = "grid";
      cardGrid.classList.remove("list-view");
      gridViewBtn.classList.add("active");
      listViewBtn.classList.remove("active");
    });
    listViewBtn.addEventListener("click", () => {
      state.layout = "list";
      cardGrid.classList.add("list-view");
      listViewBtn.classList.add("active");
      gridViewBtn.classList.remove("active");
    });
  }

  // ── Search ────────────────────────────────
  function attachSearchListener() {
    let timer;
    searchInput.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        state.search = searchInput.value.trim().toLowerCase();
        renderCards();
      }, 200);
    });
  }

  // ── Reset ─────────────────────────────────
  function attachResetListener() {
    resetBtn.addEventListener("click", () => {
      state.view = "all";
      state.search = "";
      state.institutions = new Set(["all"]);
      state.regions = new Set(["all"]);
      state.statuses = new Set(["all"]);
      state.sort = "date-desc";
      searchInput.value = "";
      sortSelect.value = "date-desc";
      deactivateChangelog();
      $$(".nav-link").forEach(l => l.classList.toggle("active", l.dataset.view === "all"));
      // Reset all checkboxes
      ["#institutionFilters", "#regionFilters", "#statusFilters"].forEach(sel => {
        const cont = $(sel);
        cont.querySelectorAll("input").forEach(cb => {
          cb.checked = cb.value === "all";
          cb.parentElement.classList.toggle("active", cb.value === "all");
        });
      });
      renderCards();
    });
  }

  // ── Modal ─────────────────────────────────
  function attachModalListeners() {
    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
  }

  function openModal(item) {
    modalContent.innerHTML = buildModalHTML(item);
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  // ── Filter & Sort Data ────────────────────
  function getFiltered() {
    let data = [...IFI_DATA];

    // Type/view filter
    if (state.view !== "all") data = data.filter(d => d.type === state.view);

    // Institution filter
    if (!state.institutions.has("all")) {
      data = data.filter(d => state.institutions.has(d.institutionShort));
    }

    // Region filter
    if (!state.regions.has("all")) {
      data = data.filter(d => state.regions.has(d.region));
    }

    // Status filter
    if (!state.statuses.has("all")) {
      data = data.filter(d => state.statuses.has(d.status));
    }

    // Search
    if (state.search) {
      const q = state.search;
      data = data.filter(d =>
        d.title.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.institution.toLowerCase().includes(q) ||
        d.institutionShort.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.tags.some(t => t.toLowerCase().includes(q)) ||
        d.region.toLowerCase().includes(q) ||
        d.sector.toLowerCase().includes(q)
      );
    }

    // Sort
    data.sort((a, b) => {
      switch (state.sort) {
        case "date-desc": return new Date(b.addedDate) - new Date(a.addedDate);
        case "date-asc":  return new Date(a.addedDate) - new Date(b.addedDate);
        case "amount-desc": return (b.amount || 0) - (a.amount || 0);
        case "amount-asc":  return (a.amount || 0) - (b.amount || 0);
        case "name-asc":   return a.title.localeCompare(b.title, "ko");
        default: return 0;
      }
    });

    return data;
  }

  // ── Render Cards ──────────────────────────
  function renderCards() {
    const data = getFiltered();
    resultCount.textContent = `${data.length}개 사업 표시중`;

    if (data.length === 0) {
      cardGrid.innerHTML = "";
      noResults.classList.remove("hidden");
      return;
    }
    noResults.classList.add("hidden");

    cardGrid.innerHTML = data.map((item, i) => buildCardHTML(item, i)).join("");

    // Attach click listeners
    cardGrid.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.dataset.id;
        const item = IFI_DATA.find(d => d.id === id);
        if (item) openModal(item);
      });
    });
  }

  // ── Card HTML Builder ─────────────────────
  function buildCardHTML(item, idx) {
    const delay = Math.min(idx * 40, 400);
    const typeBadge = {
      tc:      '<span class="badge badge-tc">TC</span>',
      project: '<span class="badge badge-project">프로젝트</span>',
      loan:    '<span class="badge badge-loan">대출</span>',
    }[item.type];

    const statusBadge = {
      active:    '<span class="badge badge-status badge-active">진행중</span>',
      pipeline:  '<span class="badge badge-status badge-pipeline">파이프라인</span>',
      completed: '<span class="badge badge-status badge-completed">완료</span>',
    }[item.status] || "";

    const newBadge = item.isNew ? '<span class="badge badge-new">NEW</span>' : "";
    const amtStr   = item.amount
      ? `<span class="card-amount"><span class="currency">${item.currency} </span>${item.amount.toLocaleString()}<span class="currency"> ${item.unit}</span></span>`
      : `<span class="card-amount" style="color:var(--text3);font-size:13px">금액 미정</span>`;

    const tags = item.tags.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join("");

    return `
    <div class="card type-${item.type}" data-id="${item.id}" style="animation-delay:${delay}ms" role="button" tabindex="0" aria-label="${item.title}">
      <div class="card-top">
        <div class="card-badges">
          ${typeBadge} ${statusBadge} ${newBadge}
          <span class="institution-tag">${item.institutionShort}</span>
        </div>
        <span class="card-date">${formatDate(item.approvalDate || item.addedDate)}</span>
      </div>
      <div class="card-title">${item.title}</div>
      <div class="card-meta">
        <div class="meta-item">
          <span class="meta-label">국가·지역</span>
          <span class="meta-val">${truncate(item.country, 28)}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">부문</span>
          <span class="meta-val">${truncate(item.sector, 22)}</span>
        </div>
      </div>
      ${amtStr}
      <div class="card-tags">${tags}</div>
      <div class="card-footer">
        <span class="card-region">📍 ${item.region}</span>
        <button class="card-link-btn">자세히 보기 →</button>
      </div>
    </div>`;
  }

  // ── Modal HTML Builder ────────────────────
  function buildModalHTML(item) {
    const typeName = { tc: "기술협력 (TC)", project: "프로젝트", loan: "대출 (Loan)" }[item.type] || item.type;
    const statusName = { active: "진행중", pipeline: "파이프라인", completed: "완료" }[item.status] || item.status;
    const statusClass = { active: "badge-active", pipeline: "badge-pipeline", completed: "badge-completed" }[item.status] || "";

    const typeBadge = {
      tc:      '<span class="badge badge-tc">기술협력</span>',
      project: '<span class="badge badge-project">프로젝트</span>',
      loan:    '<span class="badge badge-loan">대출</span>',
    }[item.type];

    const amtDisplay = item.amount
      ? `${item.currency} ${item.amount.toLocaleString()} ${item.unit}`
      : "금액 미정";

    const objectives = item.objectives
      ? item.objectives.map(o => `<div class="timeline-item"><div class="tl-dot done"></div><div class="tl-text">${o}</div></div>`).join("")
      : "";

    const timeline = item.timeline
      ? item.timeline.map(t => `
          <div class="timeline-item">
            <div class="tl-dot ${t.done ? "done" : (isCurrentTimeline(t, item) ? "current" : "")}"></div>
            <div>
              <div class="tl-text">${t.event}</div>
              <div class="tl-date">${t.date}</div>
            </div>
          </div>`).join("")
      : "";

    const tags = item.tags.map(t => `<span class="modal-tag">${t}</span>`).join("");
    const aiTopics = item.aiSubtopics
      ? item.aiSubtopics.map(t => `<span class="modal-tag" style="color:var(--accent);border-color:rgba(47,129,247,0.3)">${t}</span>`).join("")
      : "";

    return `
    <div class="modal-header">
      <div class="modal-type-row">
        ${typeBadge}
        <span class="badge badge-status ${statusClass}">${statusName}</span>
        ${item.isNew ? '<span class="badge badge-new">NEW</span>' : ""}
        <span class="institution-tag">${item.institutionShort}</span>
      </div>
      <div class="modal-title">${item.title}</div>
      <div class="modal-institution">${item.institution} · ${item.id}</div>
    </div>

    <div class="modal-grid">
      <div class="modal-kv"><div class="key">유형</div><div class="val">${typeName}</div></div>
      <div class="modal-kv"><div class="key">금액</div><div class="val">${amtDisplay}</div></div>
      <div class="modal-kv"><div class="key">국가·지역</div><div class="val">${truncate(item.country, 30)}</div></div>
      <div class="modal-kv"><div class="key">지역 분류</div><div class="val">${item.region}</div></div>
      <div class="modal-kv"><div class="key">부문</div><div class="val">${item.sector}</div></div>
      <div class="modal-kv"><div class="key">차주(Borrower)</div><div class="val">${item.borrower || "—"}</div></div>
      <div class="modal-kv"><div class="key">승인일</div><div class="val">${item.approvalDate || "미정"}</div></div>
      <div class="modal-kv"><div class="key">종료 예정</div><div class="val">${item.closingDate || "미정"}</div></div>
    </div>

    <hr class="modal-divider" />

    <div class="modal-section">
      <div class="modal-section-title">사업 개요</div>
      <p>${item.description}</p>
    </div>

    ${item.aiSubtopics ? `
    <div class="modal-section">
      <div class="modal-section-title">AI 세부 분야</div>
      <div class="modal-tags">${aiTopics}</div>
    </div>` : ""}

    ${item.objectives ? `
    <div class="modal-section">
      <div class="modal-section-title">주요 목표</div>
      <div class="timeline">${objectives}</div>
    </div>` : ""}

    ${item.timeline ? `
    <div class="modal-section">
      <div class="modal-section-title">진행 일정</div>
      <div class="timeline">${timeline}</div>
    </div>` : ""}

    <div class="modal-section">
      <div class="modal-section-title">키워드</div>
      <div class="modal-tags">${tags}</div>
    </div>

    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="modal-link">
      공식 사이트 방문 ↗
    </a>`;
  }

  // ── Helpers ───────────────────────────────
  function truncate(str, len) {
    return str && str.length > len ? str.slice(0, len) + "…" : str;
  }

  function formatDate(dateStr) {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    return d.toLocaleDateString("ko-KR", { year: "numeric", month: "short", day: "numeric" });
  }

  function isCurrentTimeline(t, item) {
    const now = new Date();
    const tDate = new Date(t.date);
    const futureItems = item.timeline.filter(x => !x.done && new Date(x.date) > now);
    if (futureItems.length === 0) return false;
    return t.date === futureItems[0].date;
  }

  // ── Update Strip ──────────────────────────
  function renderUpdateStrip() {
    const today     = CHANGELOG[0]; // 오늘
    const yesterday = CHANGELOG[1]; // 어제
    if (!today || !yesterday) return;

    $("#stripTodaySummary").textContent =
      `신규 ${today.added.length}건` +
      (today.statusChanged.length ? ` · 상태변경 ${today.statusChanged.length}건` : "") +
      (today.amountChanged.length ? ` · 금액변경 ${today.amountChanged.length}건` : "");

    $("#stripYesterdaySummary").textContent =
      `신규 ${yesterday.added.length}건` +
      (yesterday.statusChanged.length ? ` · 상태변경 ${yesterday.statusChanged.length}건` : "") +
      (yesterday.amountChanged.length ? ` · 금액변경 ${yesterday.amountChanged.length}건` : "");
  }

  // ── Changelog Dashboard ────────────────────
  function renderChangelog() {
    clColumns.innerHTML = CHANGELOG.map((day, idx) =>
      buildDiffColHTML(day, idx === 0 ? "today" : "yesterday")
    ).join("");

    // 클릭 이벤트 — 카드 클릭 시 모달 오픈
    clColumns.querySelectorAll(".diff-item[data-id]").forEach(el => {
      el.addEventListener("click", () => {
        const item = IFI_DATA.find(d => d.id === el.dataset.id);
        if (item) openModal(item);
      });
    });
  }

  function buildDiffColHTML(day, cls) {
    const totalChanges = day.added.length + day.statusChanged.length +
                         day.amountChanged.length + day.descUpdated.length;

    // ── 요약 칩
    const chips = [
      day.added.length
        ? `<span class="cl-chip added"><span class="cl-chip-num">${day.added.length}</span> 신규 추가</span>` : "",
      day.statusChanged.length
        ? `<span class="cl-chip changed"><span class="cl-chip-num">${day.statusChanged.length}</span> 상태변경</span>` : "",
      day.amountChanged.length
        ? `<span class="cl-chip amount"><span class="cl-chip-num">${day.amountChanged.length}</span> 금액변경</span>` : "",
      day.descUpdated.length
        ? `<span class="cl-chip desc"><span class="cl-chip-num">${day.descUpdated.length}</span> 내용수정</span>` : "",
      totalChanges === 0
        ? `<span class="cl-chip">변경 없음</span>` : ""
    ].filter(Boolean).join("");

    // ── 신규 추가 아이템
    const addedHTML = day.added.length
      ? day.added.map(id => {
          const item = IFI_DATA.find(d => d.id === id);
          if (!item) return "";
          const typeName = { tc: "TC", project: "프로젝트", loan: "대출" }[item.type] || item.type;
          const typeColor = { tc: "badge-tc", project: "badge-project", loan: "badge-loan" }[item.type];
          const amt = item.amount
            ? `${item.currency} ${item.amount.toLocaleString()} ${item.unit}`
            : "금액 미정";
          return `
            <div class="diff-item" data-id="${item.id}">
              <div class="diff-item-top">
                <span class="badge ${typeColor}" style="font-size:10px;padding:2px 7px">${typeName}</span>
                <span class="institution-tag" style="font-size:11px">${item.institutionShort}</span>
              </div>
              <div class="diff-item-title">${item.title}</div>
              <div class="diff-item-meta">
                <span>📍 ${item.region}</span>
                <span>${item.sector}</span>
                <span class="diff-item-amount">${amt}</span>
              </div>
            </div>`;
        }).join("")
      : `<p class="cl-empty">신규 추가 없음</p>`;

    // ── 상태 변경
    const statusHTML = day.statusChanged.length
      ? day.statusChanged.map(ch => {
          const item = IFI_DATA.find(d => d.id === ch.id);
          if (!item) return "";
          return `
            <div class="diff-item" data-id="${item.id}">
              <div class="diff-item-title">${item.title}</div>
              <div class="diff-item-meta">
                <span class="institution-tag" style="font-size:11px">${item.institutionShort}</span>
                <span>📍 ${item.region}</span>
              </div>
              <div class="diff-status-change">
                <span class="diff-status-from">${ch.fromLabel}</span>
                <span class="diff-status-arrow">▶</span>
                <span class="diff-status-to">${ch.toLabel}</span>
              </div>
            </div>`;
        }).join("")
      : `<p class="cl-empty">변경 없음</p>`;

    // ── 금액 변경
    const amountHTML = day.amountChanged.length
      ? day.amountChanged.map(ch => {
          const item = IFI_DATA.find(d => d.id === ch.id);
          if (!item) return "";
          const diff = ch.toAmount - ch.fromAmount;
          const sign = diff > 0 ? "▲" : "▼";
          return `
            <div class="diff-item" data-id="${item.id}">
              <div class="diff-item-title">${item.title}</div>
              <div class="diff-item-meta">
                <span class="institution-tag" style="font-size:11px">${item.institutionShort}</span>
                <span>📍 ${item.region}</span>
              </div>
              <div class="diff-amount-change">
                <span class="diff-amt-from">${ch.currency} ${ch.fromAmount.toLocaleString()}${ch.unit}</span>
                <span class="diff-amt-arrow">▶</span>
                <span class="diff-amt-to">${ch.currency} ${ch.toAmount.toLocaleString()}${ch.unit}</span>
                <span class="diff-amt-badge">${sign} ${Math.abs(diff).toLocaleString()}${ch.unit}</span>
              </div>
            </div>`;
        }).join("")
      : `<p class="cl-empty">변경 없음</p>`;

    // ── 내용 수정
    const descHTML = day.descUpdated.length
      ? day.descUpdated.map(ch => {
          const item = IFI_DATA.find(d => d.id === ch.id);
          if (!item) return "";
          return `
            <div class="diff-item" data-id="${item.id}">
              <div class="diff-item-title">${item.title}</div>
              <div class="diff-desc-change">✏️ ${ch.label}</div>
            </div>`;
        }).join("")
      : "";

    const dateFormatted = new Date(day.date).toLocaleDateString("ko-KR",
      { month: "long", day: "numeric", weekday: "short" });

    return `
      <div class="cl-col ${cls}">
        <div class="cl-col-head">
          <div class="cl-day-dot"></div>
          <div class="cl-day-label">${day.dateLabel}</div>
          <div class="cl-day-date">${dateFormatted}</div>
        </div>
        <div class="cl-summary-row">${chips}</div>

        <div class="cl-section">
          <div class="cl-section-title">➕ 신규 추가</div>
          ${addedHTML}
        </div>

        <div class="cl-section">
          <div class="cl-section-title">🔄 상태 변경</div>
          ${statusHTML}
        </div>

        <div class="cl-section">
          <div class="cl-section-title">💰 금액 변경</div>
          ${amountHTML}
        </div>

        ${day.descUpdated.length ? `
        <div class="cl-section">
          <div class="cl-section-title">✏️ 내용 수정</div>
          ${descHTML}
        </div>` : ""}

        <div class="cl-col-note">📌 ${day.summary}</div>
      </div>`;
  }

  // ── Keyboard nav ──────────────────────────
  document.addEventListener("keydown", e => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") return;
    if (e.key === "/") { e.preventDefault(); searchInput.focus(); }
  });

  // ── Run ───────────────────────────────────
  document.addEventListener("DOMContentLoaded", init);

})();
