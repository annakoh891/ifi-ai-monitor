// ═══════════════════════════════════════════
//  IFI AI Monitor — Project Data
//  마지막 업데이트: 2026-03-12
// ═══════════════════════════════════════════

const IFI_DATA = [

  // ╔══════════════════════════════╗
  // ║  WORLD BANK GROUP            ║
  // ╚══════════════════════════════╝
  {
    id: "WB-001",
    institution: "World Bank",
    institutionShort: "WB",
    type: "project",
    status: "active",
    isNew: true,
    title: "Digital Economy for Africa — AI Infrastructure & Governance",
    country: "아프리카 지역 (다국가)",
    region: "아프리카",
    amount: 500,
    currency: "USD",
    unit: "M",
    approvalDate: "2025-11-14",
    closingDate: "2030-06-30",
    sector: "디지털 경제 / 거버넌스",
    aiSubtopics: ["AI 거버넌스", "데이터 인프라", "AI 역량강화"],
    description: "아프리카 지역 5개국(에티오피아, 가나, 케냐, 모잠비크, 탄자니아)의 AI 생태계 구축을 위해 디지털 인프라 확충, AI 규제 프레임워크 개발, 정부 데이터 플랫폼 구축을 지원하는 멀티플렉스 프로젝트. AI 기반 농업·보건·금융 서비스 확대를 포함.",
    borrower: "각국 재무부",
    objectives: [
      "국가 AI 전략 수립 및 거버넌스 체계 구축",
      "범용 AI 인프라(컴퓨팅·데이터센터) 투자",
      "AI 스킬 개발 — 100만 명 교육 목표",
      "AI 기반 공공서비스 파일럿 (농업·의료)"
    ],
    timeline: [
      { event: "프로젝트 승인", date: "2025-11-14", done: true },
      { event: "협약 체결", date: "2026-01-20", done: true },
      { event: "1차 지급", date: "2026-03-01", done: true },
      { event: "중간 검토", date: "2027-12-01", done: false },
      { event: "프로젝트 완료", date: "2030-06-30", done: false }
    ],
    url: "https://projects.worldbank.org/",
    tags: ["AI 거버넌스", "디지털 인프라", "아프리카", "다국가"],
    addedDate: "2026-03-12"
  },

  {
    id: "WB-002",
    institution: "World Bank",
    institutionShort: "WB",
    type: "tc",
    status: "active",
    isNew: false,
    title: "AI for Climate Risk Assessment — Technical Cooperation",
    country: "글로벌 (다지역)",
    region: "글로벌",
    amount: 4.5,
    currency: "USD",
    unit: "M",
    approvalDate: "2025-07-22",
    closingDate: "2027-12-31",
    sector: "기후변화 / 재난위험관리",
    aiSubtopics: ["기후 AI", "위험 모델링", "조기경보"],
    description: "머신러닝 기반 기후위험 조기경보 시스템 구축을 위한 기술협력. 위성 데이터, 기상 모델, AI를 결합하여 홍수·가뭄·사이클론 예측 정확도를 향상시키고, 개도국 정부가 재난 대응 역량을 강화하도록 지원.",
    borrower: "각국 환경부",
    objectives: [
      "기후 AI 모델 개발 및 오픈소스 공개",
      "15개국 조기경보 시스템 파일럿",
      "데이터 공유 플랫폼 구축",
      "정부 역량강화 워크숍 (50회)"
    ],
    timeline: [
      { event: "TC 승인", date: "2025-07-22", done: true },
      { event: "1차 국가 파일럿 완료", date: "2025-12-15", done: true },
      { event: "2차 국가 확장", date: "2026-06-01", done: false },
      { event: "최종 보고서", date: "2027-12-31", done: false }
    ],
    url: "https://projects.worldbank.org/",
    tags: ["기후 AI", "조기경보", "머신러닝", "재난위험"],
    addedDate: "2026-02-28"
  },

  {
    id: "WB-003",
    institution: "World Bank",
    institutionShort: "WB",
    type: "loan",
    status: "pipeline",
    isNew: true,
    title: "India AI-Powered Social Protection System Loan",
    country: "인도",
    region: "남아시아",
    amount: 1200,
    currency: "USD",
    unit: "M",
    approvalDate: null,
    closingDate: null,
    sector: "사회보호 / 디지털 정부",
    aiSubtopics: ["AI 기반 복지", "사기탐지", "타겟 지원"],
    description: "인도 정부의 복지 급여 시스템을 AI로 전환하는 대규모 대출. AI 기반 수혜자 선별, 부정수급 탐지, 개인화된 복지 서비스 제공 시스템 구축. Aadhaar 생체인식 데이터와 AI를 결합한 최초의 국가 단위 시범 사업.",
    borrower: "인도 재무부",
    objectives: [
      "AI 수혜자 선별 엔진 개발",
      "실시간 부정수급 탐지 시스템",
      "모바일 복지 포털 (2억 명 대상)",
      "주(州) 정부 데이터 통합 플랫폼"
    ],
    timeline: [
      { event: "개념 검토", date: "2025-10-01", done: true },
      { event: "사전 타당성 조사", date: "2026-02-15", done: true },
      { event: "이사회 승인 예정", date: "2026-06-30", done: false },
      { event: "협약 체결", date: "2026-09-01", done: false }
    ],
    url: "https://projects.worldbank.org/",
    tags: ["사회보호", "AI 복지", "인도", "디지털 정부"],
    addedDate: "2026-03-12"
  },

  {
    id: "WB-004",
    institution: "World Bank",
    institutionShort: "WB",
    type: "tc",
    status: "active",
    isNew: false,
    title: "Responsible AI Governance Framework — MENA Region TC",
    country: "중동·북아프리카 지역",
    region: "중동·북아프리카",
    amount: 3.2,
    currency: "USD",
    unit: "M",
    approvalDate: "2025-04-10",
    closingDate: "2027-06-30",
    sector: "거버넌스 / 법제도",
    aiSubtopics: ["책임 AI", "AI 규제", "디지털 권리"],
    description: "MENA 지역 6개국의 AI 거버넌스 법제도 구축 지원. EU AI Act 기반의 지역 맞춤형 AI 규제 프레임워크 설계, 알고리즘 감사 역량 강화, 시민 디지털 권리 보호 메커니즘 개발.",
    borrower: "각국 디지털경제부",
    objectives: [
      "국가별 AI 규제 로드맵 수립",
      "AI 감사 가이드라인 개발",
      "AI 윤리 위원회 구성 지원",
      "AI 리스크 분류 체계 도입"
    ],
    timeline: [
      { event: "TC 착수", date: "2025-04-10", done: true },
      { event: "현황 진단 완료", date: "2025-08-30", done: true },
      { event: "프레임워크 초안", date: "2026-03-31", done: false },
      { event: "정책 권고안 발표", date: "2027-06-30", done: false }
    ],
    url: "https://projects.worldbank.org/",
    tags: ["AI 거버넌스", "책임 AI", "규제", "MENA"],
    addedDate: "2026-02-10"
  },

  // ╔══════════════════════════════╗
  // ║  ASIAN DEVELOPMENT BANK      ║
  // ╚══════════════════════════════╝
  {
    id: "ADB-001",
    institution: "Asian Development Bank",
    institutionShort: "ADB",
    type: "project",
    status: "active",
    isNew: true,
    title: "Smart Agriculture AI Platform — Southeast Asia",
    country: "베트남, 필리핀, 인도네시아",
    region: "동남아시아",
    amount: 280,
    currency: "USD",
    unit: "M",
    approvalDate: "2025-12-05",
    closingDate: "2030-12-31",
    sector: "농업 / 식량안보",
    aiSubtopics: ["농업 AI", "정밀농업", "공급망 최적화"],
    description: "동남아시아 3개국 농업 부문의 AI 전환 지원 프로젝트. 드론·IoT·위성 데이터 기반 작물 모니터링, AI 병충해 탐지, 수확량 예측 시스템 구축. 소농(小農) 포용적 디지털 농업 플랫폼 개발.",
    borrower: "각국 농업부",
    objectives: [
      "AI 작물 모니터링 시스템 (100만 헥타르)",
      "소농 디지털 플랫폼 (50만 농가)",
      "AI 농업 컨설팅 서비스",
      "콜드체인 AI 최적화"
    ],
    timeline: [
      { event: "이사회 승인", date: "2025-12-05", done: true },
      { event: "파일럿 착수 (베트남)", date: "2026-03-01", done: true },
      { event: "파일럿 착수 (필리핀)", date: "2026-06-01", done: false },
      { event: "전면 확대", date: "2027-01-01", done: false }
    ],
    url: "https://www.adb.org/projects",
    tags: ["농업 AI", "스마트팜", "동남아시아", "식량안보"],
    addedDate: "2026-03-12"
  },

  {
    id: "ADB-002",
    institution: "Asian Development Bank",
    institutionShort: "ADB",
    type: "tc",
    status: "active",
    isNew: false,
    title: "AI Readiness Assessment for Pacific Island Nations",
    country: "태평양 도서국",
    region: "태평양",
    amount: 2.8,
    currency: "USD",
    unit: "M",
    approvalDate: "2025-09-18",
    closingDate: "2027-03-31",
    sector: "디지털 역량강화",
    aiSubtopics: ["AI 준비도", "소국 디지털화", "역량강화"],
    description: "피지, 파푸아뉴기니 등 태평양 도서국 10개국의 AI 도입 준비도 평가 및 역량강화 기술협력. 소국 특화 AI 전략 수립 지원, AI 교육 커리큘럼 개발, 지역 AI 협력 네트워크 구축.",
    borrower: "각국 정보통신부",
    objectives: [
      "국가별 AI 준비도 진단 (10개국)",
      "AI 전략 계획 개발 지원",
      "공무원 AI 교육 (500명)",
      "지역 AI 지식 허브 설립"
    ],
    timeline: [
      { event: "TC 착수", date: "2025-09-18", done: true },
      { event: "준비도 평가 완료", date: "2026-02-28", done: true },
      { event: "전략 계획 수립", date: "2026-09-30", done: false },
      { event: "최종 완료", date: "2027-03-31", done: false }
    ],
    url: "https://www.adb.org/projects",
    tags: ["AI 준비도", "태평양", "소도서개발국", "역량강화"],
    addedDate: "2026-02-20"
  },

  {
    id: "ADB-003",
    institution: "Asian Development Bank",
    institutionShort: "ADB",
    type: "loan",
    status: "active",
    isNew: false,
    title: "Bangladesh AI-Enabled Health System Transformation Loan",
    country: "방글라데시",
    region: "남아시아",
    amount: 400,
    currency: "USD",
    unit: "M",
    approvalDate: "2025-08-30",
    closingDate: "2031-12-31",
    sector: "보건 / 디지털 헬스",
    aiSubtopics: ["의료 AI", "원격진료", "질병 예측"],
    description: "방글라데시 공공의료 시스템 디지털 전환 및 AI 도입 지원 차관. AI 기반 질병 조기진단, 의약품 공급망 최적화, 원격의료 플랫폼 구축을 통해 3,500만 명의 의료 접근성 향상.",
    borrower: "방글라데시 보건가족복지부",
    objectives: [
      "AI 진단 보조 시스템 (500개 병원)",
      "모바일 건강 앱 (1,000만 다운로드 목표)",
      "AI 의약품 재고 관리 시스템",
      "원격의료 네트워크 (지방 3,000개소)"
    ],
    timeline: [
      { event: "대출 승인", date: "2025-08-30", done: true },
      { event: "협약 체결", date: "2025-10-15", done: true },
      { event: "시스템 조달 완료", date: "2026-06-30", done: false },
      { event: "1차 운영 개시", date: "2027-01-01", done: false }
    ],
    url: "https://www.adb.org/projects",
    tags: ["의료 AI", "디지털 헬스", "방글라데시", "원격진료"],
    addedDate: "2026-01-15"
  },

  {
    id: "ADB-004",
    institution: "Asian Development Bank",
    institutionShort: "ADB",
    type: "tc",
    status: "pipeline",
    isNew: true,
    title: "Central Asia AI Innovation Corridor — Technical Assistance",
    country: "카자흐스탄, 우즈베키스탄, 키르기스스탄",
    region: "중앙아시아",
    amount: 5.0,
    currency: "USD",
    unit: "M",
    approvalDate: null,
    closingDate: null,
    sector: "혁신 / 기술이전",
    aiSubtopics: ["AI 스타트업", "기술혁신", "디지털 경제"],
    description: "중앙아시아 AI 혁신 생태계 조성을 위한 기술지원. AI 스타트업 인큐베이터, 대학-산업 AI R&D 협력, 국가간 AI 데이터 공유 프레임워크 구축 지원 예정.",
    borrower: "각국 혁신부",
    objectives: [
      "AI 혁신 허브 3개소 설립",
      "AI 스타트업 100개사 지원",
      "AI R&D 파트너십 프로그램",
      "지역 AI 인재 교류 프로그램"
    ],
    timeline: [
      { event: "사전 협의", date: "2026-02-01", done: true },
      { event: "TC 승인 예정", date: "2026-05-01", done: false },
      { event: "착수", date: "2026-07-01", done: false },
      { event: "완료 예정", date: "2028-06-30", done: false }
    ],
    url: "https://www.adb.org/projects",
    tags: ["AI 혁신", "중앙아시아", "스타트업", "기술이전"],
    addedDate: "2026-03-12"
  },

  // ╔══════════════════════════════╗
  // ║  IDB (INTER-AMERICAN)        ║
  // ╚══════════════════════════════╝
  {
    id: "IDB-001",
    institution: "Inter-American Development Bank",
    institutionShort: "IDB",
    type: "project",
    status: "active",
    isNew: false,
    title: "IA para Educación — Regional AI in Education Program",
    country: "브라질, 콜롬비아, 아르헨티나, 칠레",
    region: "중남미",
    amount: 350,
    currency: "USD",
    unit: "M",
    approvalDate: "2025-06-17",
    closingDate: "2030-06-30",
    sector: "교육 / 인적자본",
    aiSubtopics: ["교육 AI", "맞춤형 학습", "교육격차"],
    description: "라틴아메리카 4개국 K-12 교육 시스템의 AI 전환. 적응형 학습 플랫폼, AI 기반 학습 분석, 교사 지원 도구 개발. 저소득층 학생 교육격차 해소를 위한 오프라인 AI 기능 포함.",
    borrower: "각국 교육부",
    objectives: [
      "AI 적응형 학습 플랫폼 (500만 학생)",
      "교사 AI 코파일럿 도구",
      "학습 데이터 분석 대시보드",
      "AI 교육 콘텐츠 (스페인어·포르투갈어)"
    ],
    timeline: [
      { event: "프로젝트 승인", date: "2025-06-17", done: true },
      { event: "플랫폼 개발 완료", date: "2026-01-31", done: true },
      { event: "브라질 파일럿 완료", date: "2026-06-30", done: false },
      { event: "전 지역 확대", date: "2027-08-01", done: false }
    ],
    url: "https://www.iadb.org/en/projects",
    tags: ["교육 AI", "EdTech", "라틴아메리카", "교육격차"],
    addedDate: "2026-01-05"
  },

  {
    id: "IDB-002",
    institution: "Inter-American Development Bank",
    institutionShort: "IDB",
    type: "tc",
    status: "active",
    isNew: true,
    title: "AI Ethics & Inclusion in Latin America — TC",
    country: "중남미 지역",
    region: "중남미",
    amount: 3.8,
    currency: "USD",
    unit: "M",
    approvalDate: "2026-01-15",
    closingDate: "2028-01-14",
    sector: "AI 거버넌스 / 포용",
    aiSubtopics: ["AI 윤리", "알고리즘 편향", "디지털 포용"],
    description: "라틴아메리카 AI 시스템의 젠더·인종 편향 연구 및 해소 방안 개발. 알고리즘 감사 방법론, 포용적 AI 설계 가이드라인, 공공부문 AI 채용 기준 개발. UNESCO AI 윤리 권고안 지역 이행 지원.",
    borrower: "지역기구 및 시민사회",
    objectives: [
      "AI 편향 실태 조사 (7개국)",
      "포용적 AI 설계 툴킷 개발",
      "AI 감사관 양성 (100명)",
      "정부 AI 채용 가이드라인"
    ],
    timeline: [
      { event: "TC 승인", date: "2026-01-15", done: true },
      { event: "연구 착수", date: "2026-03-01", done: true },
      { event: "중간 보고", date: "2026-12-31", done: false },
      { event: "최종 완료", date: "2028-01-14", done: false }
    ],
    url: "https://www.iadb.org/en/projects",
    tags: ["AI 윤리", "알고리즘 편향", "포용", "라틴아메리카"],
    addedDate: "2026-03-12"
  },

  {
    id: "IDB-003",
    institution: "Inter-American Development Bank",
    institutionShort: "IDB",
    type: "loan",
    status: "pipeline",
    isNew: true,
    title: "Colombia AI-Driven Public Safety & Justice System",
    country: "콜롬비아",
    region: "중남미",
    amount: 220,
    currency: "USD",
    unit: "M",
    approvalDate: null,
    closingDate: null,
    sector: "공공안전 / 사법",
    aiSubtopics: ["예측치안", "사법 AI", "범죄 분석"],
    description: "콜롬비아 치안·사법 시스템의 AI 도입을 위한 차관. 범죄 예측 분석, AI 기반 사건 배분, 재범 위험 평가 시스템 구축. 인권 단체와의 거버넌스 협의 체계 포함.",
    borrower: "콜롬비아 내무부·법무부",
    objectives: [
      "범죄 예측 분석 시스템",
      "법원 AI 사건 관리",
      "AI 재범 위험 평가 (윤리 기준 준수)",
      "법집행 데이터 표준화"
    ],
    timeline: [
      { event: "사전 타당성 조사", date: "2026-01-01", done: true },
      { event: "인권영향평가", date: "2026-04-30", done: false },
      { event: "이사회 승인 예정", date: "2026-09-01", done: false },
      { event: "착수", date: "2026-12-01", done: false }
    ],
    url: "https://www.iadb.org/en/projects",
    tags: ["예측치안", "사법 AI", "콜롬비아", "공공안전"],
    addedDate: "2026-03-12"
  },

  // ╔══════════════════════════════╗
  // ║  AfDB (AFRICAN DEVELOPMENT)  ║
  // ╚══════════════════════════════╝
  {
    id: "AfDB-001",
    institution: "African Development Bank",
    institutionShort: "AfDB",
    type: "project",
    status: "active",
    isNew: false,
    title: "Africa AI Data Centers & Cloud Infrastructure Project",
    country: "이집트, 나이지리아, 남아프리카",
    region: "아프리카",
    amount: 600,
    currency: "USD",
    unit: "M",
    approvalDate: "2025-05-28",
    closingDate: "2031-05-31",
    sector: "디지털 인프라",
    aiSubtopics: ["AI 컴퓨팅", "데이터센터", "클라우드"],
    description: "아프리카 AI 생태계 핵심 인프라인 데이터센터·클라우드 플랫폼 구축. 탄소중립 데이터센터 3개소, 범아프리카 AI 컴퓨팅 그리드, 정부·스타트업용 AI 클라우드 서비스 제공.",
    borrower: "각국 ICT부",
    objectives: [
      "탄소중립 데이터센터 3개소 (100MW)",
      "범아프리카 AI 클라우드 플랫폼",
      "AI 스타트업 컴퓨팅 바우처",
      "AI 데이터 주권 프레임워크"
    ],
    timeline: [
      { event: "프로젝트 승인", date: "2025-05-28", done: true },
      { event: "토지 취득 완료", date: "2025-11-30", done: true },
      { event: "건설 착수", date: "2026-02-01", done: true },
      { event: "1호 데이터센터 개소", date: "2027-06-30", done: false }
    ],
    url: "https://www.afdb.org/en/projects",
    tags: ["데이터센터", "클라우드", "AI 인프라", "아프리카"],
    addedDate: "2026-01-20"
  },

  {
    id: "AfDB-002",
    institution: "African Development Bank",
    institutionShort: "AfDB",
    type: "tc",
    status: "active",
    isNew: false,
    title: "AI for Financial Inclusion in Sub-Saharan Africa",
    country: "사하라이남 아프리카 (14개국)",
    region: "아프리카",
    amount: 6.5,
    currency: "USD",
    unit: "M",
    approvalDate: "2025-03-14",
    closingDate: "2027-09-30",
    sector: "금융포용 / FinTech",
    aiSubtopics: ["AI 신용평가", "모바일머니", "금융포용"],
    description: "사하라이남 아프리카의 금융 소외 계층을 위한 AI 신용평가 모델 개발 기술협력. 대안데이터(이동통신·농업·소비 패턴) 기반 AI 신용점수, 소액대출 AI 리스크 관리, 디지털 금융 리터러시 프로그램.",
    borrower: "지역 중앙은행 및 MFI",
    objectives: [
      "AI 대안신용평가 모델 개발",
      "소액대출 AI 리스크 플랫폼",
      "금융 소외계층 AI 접근 방안",
      "규제샌드박스 운영 지원"
    ],
    timeline: [
      { event: "TC 착수", date: "2025-03-14", done: true },
      { event: "신용모델 개발 완료", date: "2025-12-31", done: true },
      { event: "파일럿 운영", date: "2026-06-30", done: false },
      { event: "규모화 계획 수립", date: "2027-09-30", done: false }
    ],
    url: "https://www.afdb.org/en/projects",
    tags: ["금융포용", "AI 신용평가", "FinTech", "사하라이남"],
    addedDate: "2026-02-05"
  },

  // ╔══════════════════════════════╗
  // ║  AIIB                        ║
  // ╚══════════════════════════════╝
  {
    id: "AIIB-001",
    institution: "Asian Infrastructure Investment Bank",
    institutionShort: "AIIB",
    type: "project",
    status: "active",
    isNew: true,
    title: "Smart Transportation AI — Belt & Road Corridor",
    country: "파키스탄, 중앙아시아 4개국",
    region: "남아시아·중앙아시아",
    amount: 800,
    currency: "USD",
    unit: "M",
    approvalDate: "2026-01-28",
    closingDate: "2032-12-31",
    sector: "교통 인프라 / 스마트시티",
    aiSubtopics: ["교통 AI", "스마트 물류", "자율주행"],
    description: "일대일로 교통 회랑의 AI 기반 스마트 교통·물류 시스템 구축. AI 교통 흐름 최적화, 자율주행 준비 인프라, AI 기반 국경통과 물류 간소화, 스마트 고속도로 시스템 도입.",
    borrower: "각국 교통부",
    objectives: [
      "AI 교통 관제 시스템 (5개 주요 도시)",
      "스마트 국경 통관 AI 시스템",
      "AI 물류 최적화 플랫폼",
      "자율주행 준비 인프라 표준화"
    ],
    timeline: [
      { event: "이사회 승인", date: "2026-01-28", done: true },
      { event: "설계 완료", date: "2026-09-30", done: false },
      { event: "1단계 시공", date: "2027-01-01", done: false },
      { event: "프로젝트 완료", date: "2032-12-31", done: false }
    ],
    url: "https://www.aiib.org/en/projects/",
    tags: ["스마트교통", "AI 물류", "일대일로", "스마트시티"],
    addedDate: "2026-03-12"
  },

  {
    id: "AIIB-002",
    institution: "Asian Infrastructure Investment Bank",
    institutionShort: "AIIB",
    type: "loan",
    status: "active",
    isNew: false,
    title: "Indonesia AI-Powered Energy Grid Modernization",
    country: "인도네시아",
    region: "동남아시아",
    amount: 500,
    currency: "USD",
    unit: "M",
    approvalDate: "2025-10-03",
    closingDate: "2031-10-31",
    sector: "에너지 / 스마트그리드",
    aiSubtopics: ["에너지 AI", "스마트그리드", "재생에너지"],
    description: "인도네시아 전력망 AI 현대화 대출. AI 기반 전력 수요 예측·공급 최적화, 재생에너지 통합 관리, 스마트미터 데이터 분석 시스템 구축. 그리드 안정성 향상 및 탄소 배출 15% 감축 목표.",
    borrower: "인도네시아 국영전력공사(PLN)",
    objectives: [
      "AI 수요예측 시스템 (전국)",
      "재생에너지 AI 통합 관리",
      "스마트미터 IoT 네트워크",
      "에너지 절약 AI 플랫폼"
    ],
    timeline: [
      { event: "대출 승인", date: "2025-10-03", done: true },
      { event: "시스템 설계", date: "2026-03-31", done: false },
      { event: "파일럿 구역 운영", date: "2026-12-01", done: false },
      { event: "전국 확대", date: "2028-06-30", done: false }
    ],
    url: "https://www.aiib.org/en/projects/",
    tags: ["스마트그리드", "에너지 AI", "인도네시아", "재생에너지"],
    addedDate: "2026-01-25"
  },

  // ╔══════════════════════════════╗
  // ║  EBRD                        ║
  // ╚══════════════════════════════╝
  {
    id: "EBRD-001",
    institution: "European Bank for Reconstruction and Development",
    institutionShort: "EBRD",
    type: "tc",
    status: "active",
    isNew: false,
    title: "AI Adoption in SMEs — Eastern Europe & Caucasus",
    country: "폴란드, 루마니아, 조지아, 아르메니아",
    region: "동유럽·코카서스",
    amount: 8.2,
    currency: "EUR",
    unit: "M",
    approvalDate: "2025-05-07",
    closingDate: "2027-11-30",
    sector: "중소기업 / 민간부문",
    aiSubtopics: ["SME AI", "생산성 AI", "디지털 전환"],
    description: "동유럽·코카서스 지역 중소기업의 AI 도입 가속화 기술협력. AI 진단 도구, 맞춤형 AI 솔루션 보조금, AI 멘토링 프로그램 운영. 지역 AI 공급기업과 SME 매칭 플랫폼 구축.",
    borrower: "민간기업 컨소시엄",
    objectives: [
      "SME AI 진단 및 로드맵 (500개사)",
      "AI 도입 보조금 프로그램",
      "AI 멘토링 네트워크 구축",
      "AI-SME 매칭 플랫폼"
    ],
    timeline: [
      { event: "TC 착수", date: "2025-05-07", done: true },
      { event: "플랫폼 출시", date: "2025-10-15", done: true },
      { event: "1차 보조금 지급", date: "2026-01-31", done: true },
      { event: "최종 평가", date: "2027-11-30", done: false }
    ],
    url: "https://www.ebrd.com/work-with-us/projects/",
    tags: ["SME", "AI 디지털전환", "동유럽", "중소기업"],
    addedDate: "2026-01-30"
  },

  {
    id: "EBRD-002",
    institution: "European Bank for Reconstruction and Development",
    institutionShort: "EBRD",
    type: "loan",
    status: "active",
    isNew: false,
    title: "Turkey AI & FinTech Innovation Fund",
    country: "튀르키예",
    region: "유럽·중앙아시아",
    amount: 150,
    currency: "EUR",
    unit: "M",
    approvalDate: "2025-09-22",
    closingDate: "2030-09-30",
    sector: "금융 / FinTech",
    aiSubtopics: ["FinTech AI", "AI 투자펀드", "스타트업"],
    description: "튀르키예 AI·FinTech 스타트업 생태계 지원 대출펀드. AI 기반 금융 서비스, RegTech, InsurTech 스타트업에 직접 투자. 튀르키예 AI 유니콘 육성 프로그램 포함.",
    borrower: "튀르키예 기술금융부",
    objectives: [
      "AI 스타트업 50개사 직접 투자",
      "FinTech AI 규제샌드박스",
      "AI 액셀러레이터 운영",
      "해외 AI 투자 유치 연계"
    ],
    timeline: [
      { event: "대출 승인", date: "2025-09-22", done: true },
      { event: "1차 스타트업 선발", date: "2026-01-15", done: true },
      { event: "투자 집행 50%", date: "2027-06-30", done: false },
      { event: "투자 완료", date: "2030-09-30", done: false }
    ],
    url: "https://www.ebrd.com/work-with-us/projects/",
    tags: ["FinTech", "AI 투자", "튀르키예", "스타트업"],
    addedDate: "2026-02-01"
  },

  // ╔══════════════════════════════╗
  // ║  IMF                         ║
  // ╚══════════════════════════════╝
  {
    id: "IMF-001",
    institution: "International Monetary Fund",
    institutionShort: "IMF",
    type: "tc",
    status: "active",
    isNew: false,
    title: "AI for Tax Administration & Revenue Forecasting — CD",
    country: "전 회원국 (우선 대상: 개도국 30개국)",
    region: "글로벌",
    amount: 12.0,
    currency: "USD",
    unit: "M",
    approvalDate: "2025-01-20",
    closingDate: "2027-12-31",
    sector: "재정관리 / 세정",
    aiSubtopics: ["AI 세정", "세수 예측", "탈세 탐지"],
    description: "IMF 역량개발 프로그램 일환으로 개발도상국 세무 당국의 AI 도입 지원. 머신러닝 기반 세수 예측, 탈세·탈루 탐지, 자동화 신고 시스템 구축. 30개국 맞춤형 기술지원 제공.",
    borrower: "각국 재무부·세무청",
    objectives: [
      "AI 세수 예측 모델 (30개국)",
      "ML 탈세 탐지 시스템",
      "AI 납세자 서비스 챗봇",
      "세무 데이터 플랫폼 표준화"
    ],
    timeline: [
      { event: "CD 프로그램 착수", date: "2025-01-20", done: true },
      { event: "1그룹 완료 (10개국)", date: "2025-12-31", done: true },
      { event: "2그룹 진행", date: "2026-12-31", done: false },
      { event: "3그룹 완료", date: "2027-12-31", done: false }
    ],
    url: "https://www.imf.org/en/Capacity-Development",
    tags: ["세정 AI", "세수 예측", "재정관리", "역량개발"],
    addedDate: "2026-01-10"
  },

  // ╔══════════════════════════════╗
  // ║  EIB (European Invest Bank)  ║
  // ╚══════════════════════════════╝
  {
    id: "EIB-001",
    institution: "European Investment Bank",
    institutionShort: "EIB",
    type: "loan",
    status: "active",
    isNew: true,
    title: "European Sovereign AI Infrastructure Fund",
    country: "EU 회원국",
    region: "유럽",
    amount: 2500,
    currency: "EUR",
    unit: "M",
    approvalDate: "2026-02-20",
    closingDate: "2030-12-31",
    sector: "디지털 인프라 / AI 주권",
    aiSubtopics: ["AI 주권", "슈퍼컴퓨팅", "유럽 AI"],
    description: "EU AI Act 이행 및 유럽 AI 기술 주권 강화를 위한 EIB 대규모 대출펀드. 유럽 슈퍼컴퓨팅 센터 확충, 오픈소스 AI 모델 개발, EU AI 스타트업 생태계 투자. EU-미국-중국 AI 경쟁 대응 전략적 투자.",
    borrower: "EU 회원국 정부·연구기관",
    objectives: [
      "EU AI 슈퍼컴퓨터 네트워크 확충",
      "오픈소스 유럽 LLM 개발",
      "AI 스타트업 1,000개사 투자",
      "AI 전문인력 50만 명 양성"
    ],
    timeline: [
      { event: "펀드 승인", date: "2026-02-20", done: true },
      { event: "1차 투자집행 개시", date: "2026-04-01", done: false },
      { event: "슈퍼컴퓨터 1호 완공", date: "2027-12-31", done: false },
      { event: "펀드 완전 집행", date: "2030-12-31", done: false }
    ],
    url: "https://www.eib.org/en/projects/",
    tags: ["AI 주권", "유럽 AI", "슈퍼컴퓨팅", "AI 인프라"],
    addedDate: "2026-03-12"
  },

  {
    id: "EIB-002",
    institution: "European Investment Bank",
    institutionShort: "EIB",
    type: "project",
    status: "active",
    isNew: false,
    title: "AI for Green Transition — Industrial Decarbonization",
    country: "독일, 프랑스, 스페인, 이탈리아",
    region: "유럽",
    amount: 1800,
    currency: "EUR",
    unit: "M",
    approvalDate: "2025-04-24",
    closingDate: "2031-06-30",
    sector: "산업 / 기후전환",
    aiSubtopics: ["탈탄소 AI", "산업 AI", "에너지효율"],
    description: "유럽 주요 산업 부문(철강, 화학, 시멘트)의 AI 기반 탈탄소화 지원. 공정 AI 최적화로 에너지 효율 30% 향상, AI 탄소 회계 시스템, AI 기반 탄소 배출권 관리 플랫폼.",
    borrower: "유럽 대기업 컨소시엄",
    objectives: [
      "산업 공정 AI 최적화 (500개 공장)",
      "AI 에너지 관리 시스템",
      "탄소 회계 AI 플랫폼",
      "AI 순환경제 솔루션"
    ],
    timeline: [
      { event: "프로젝트 승인", date: "2025-04-24", done: true },
      { event: "파일럿 공장 선정", date: "2025-09-30", done: true },
      { event: "AI 시스템 구축", date: "2026-12-31", done: false },
      { event: "전면 확대", date: "2028-06-30", done: false }
    ],
    url: "https://www.eib.org/en/projects/",
    tags: ["탈탄소", "산업 AI", "그린딜", "에너지효율"],
    addedDate: "2026-02-14"
  },

  // ╔══════════════════════════════╗
  // ║  NDB                         ║
  // ╚══════════════════════════════╝
  {
    id: "NDB-001",
    institution: "New Development Bank",
    institutionShort: "NDB",
    type: "loan",
    status: "pipeline",
    isNew: true,
    title: "BRICS AI Research & Development Fund",
    country: "브라질, 러시아, 인도, 중국, 남아프리카",
    region: "글로벌 (BRICS)",
    amount: 1000,
    currency: "USD",
    unit: "M",
    approvalDate: null,
    closingDate: null,
    sector: "R&D / 기술혁신",
    aiSubtopics: ["AI R&D", "기술협력", "공동연구"],
    description: "BRICS 국가간 AI 공동연구·개발 대출펀드. 번역 AI, 농업 AI, 의료 AI 등 BRICS 공통 도전과제 해결을 위한 국제 AI 연구 컨소시엄 지원. BRICS 공동 AI 데이터 거버넌스 프레임워크 개발.",
    borrower: "BRICS 국가 연구기관",
    objectives: [
      "BRICS 공동 AI 연구센터 설립",
      "AI 공동연구 프로젝트 50개",
      "AI 연구자 교류 프로그램",
      "공동 AI 데이터 플랫폼"
    ],
    timeline: [
      { event: "사전 타당성 조사", date: "2026-02-01", done: true },
      { event: "회원국 협의", date: "2026-05-30", done: false },
      { event: "이사회 승인 예정", date: "2026-10-01", done: false },
      { event: "펀드 착수", date: "2027-01-01", done: false }
    ],
    url: "https://www.ndb.int/projects/",
    tags: ["BRICS", "AI R&D", "공동연구", "다자협력"],
    addedDate: "2026-03-12"
  },

  // ╔══════════════════════════════╗
  // ║  IFC                         ║
  // ╚══════════════════════════════╝
  {
    id: "IFC-001",
    institution: "International Finance Corporation",
    institutionShort: "IFC",
    type: "loan",
    status: "active",
    isNew: false,
    title: "Global AI Startup Investment Facility",
    country: "글로벌 (신흥시장)",
    region: "글로벌",
    amount: 450,
    currency: "USD",
    unit: "M",
    approvalDate: "2025-07-10",
    closingDate: "2030-07-31",
    sector: "민간투자 / 벤처",
    aiSubtopics: ["AI 스타트업", "벤처투자", "민간부문 AI"],
    description: "신흥시장 AI 스타트업 생태계 활성화를 위한 IFC 투자펀드. VC 펀드 출자, AI 스타트업 직접 투자, AI 가속기 프로그램 지원. 아프리카·아시아·라틴아메리카 AI 기업가 정신 육성.",
    borrower: "민간 VC·스타트업",
    objectives: [
      "신흥시장 AI 스타트업 200개사 투자",
      "VC 펀드 20개 출자",
      "여성 AI 기업인 프로그램",
      "AI 임팩트 측정 프레임워크"
    ],
    timeline: [
      { event: "펀드 승인", date: "2025-07-10", done: true },
      { event: "1차 VC 출자", date: "2025-11-30", done: true },
      { event: "투자 집행 30%", date: "2026-09-30", done: false },
      { event: "투자 완료", date: "2030-07-31", done: false }
    ],
    url: "https://www.ifc.org/en/projects",
    tags: ["AI 스타트업", "벤처투자", "신흥시장", "임팩트"],
    addedDate: "2026-02-25"
  },

  {
    id: "IFC-002",
    institution: "International Finance Corporation",
    institutionShort: "IFC",
    type: "tc",
    status: "active",
    isNew: false,
    title: "AI & Digital Health Investment Advisory",
    country: "인도, 케냐, 나이지리아",
    region: "아시아·아프리카",
    amount: 3.5,
    currency: "USD",
    unit: "M",
    approvalDate: "2025-08-20",
    closingDate: "2027-08-19",
    sector: "디지털 헬스 / 민간투자",
    aiSubtopics: ["디지털 헬스 AI", "의료 투자", "민간 보건"],
    description: "인도·케냐·나이지리아 민간 의료 부문의 AI 도입 촉진 및 투자 유치 자문 TC. AI 의료영상, 원격진단, 전자의무기록 AI 분석 분야 민간 투자 촉진. 규제 환경 정비 자문 포함.",
    borrower: "민간 의료기관",
    objectives: [
      "AI 헬스 투자 파이프라인 발굴",
      "AI 의료 규제 자문",
      "민관 AI 의료 파트너십",
      "AI 의료 데이터 표준화"
    ],
    timeline: [
      { event: "TC 착수", date: "2025-08-20", done: true },
      { event: "투자 파이프라인 발굴", date: "2026-02-28", done: true },
      { event: "투자 실행 지원", date: "2026-12-31", done: false },
      { event: "최종 완료", date: "2027-08-19", done: false }
    ],
    url: "https://www.ifc.org/en/projects",
    tags: ["디지털 헬스", "AI 의료", "민간투자", "아시아·아프리카"],
    addedDate: "2026-01-22"
  },

  // ╔══════════════════════════════╗
  // ║  GCF (GREEN CLIMATE FUND)    ║
  // ╚══════════════════════════════╝
  {
    id: "GCF-001",
    institution: "Green Climate Fund",
    institutionShort: "GCF",
    type: "project",
    status: "active",
    isNew: true,
    title: "AI-Enhanced Climate Vulnerability Mapping — Pacific & Southeast Asia",
    country: "파지피 도서국, 동남아시아 (8개국)",
    region: "태평양·동남아시아",
    amount: 120,
    currency: "USD",
    unit: "M",
    approvalDate: "2025-10-22",
    closingDate: "2030-10-31",
    sector: "기후적응 / 재난위험",
    aiSubtopics: ["기후 AI", "취약성 매핑", "위성 분석", "조기경보"],
    description: "머신러닝·위성 원격탐사를 결합한 기후취약성 지도 고도화 프로젝트. 해수면 상승·극단기상·산호 백화를 실시간 모니터링하고, AI 기반 취약계층 조기경보 시스템을 태평양 8개 도서국과 인도네시아·필리핀·베트남에 구축.",
    borrower: "각국 환경부·기상청",
    objectives: [
      "위성+AI 기후취약성 지도 실시간 갱신",
      "해수면 상승 AI 예측 모델 (30년 시나리오)",
      "AI 조기경보 문자 시스템 (1,500만 명 커버리지)",
      "국가 적응계획(NAP)에 AI 분석 통합"
    ],
    timeline: [
      { event: "GCF 이사회 승인", date: "2025-10-22", done: true },
      { event: "협약 서명", date: "2026-01-15", done: true },
      { event: "AI 모델 개발 완료", date: "2026-12-31", done: false },
      { event: "파일럿 운영 개시", date: "2027-06-30", done: false },
      { event: "프로젝트 완료", date: "2030-10-31", done: false }
    ],
    url: "https://www.greenclimate.fund/projects",
    tags: ["기후적응", "취약성 매핑", "태평양", "AI 위성"],
    addedDate: "2026-03-12"
  },

  {
    id: "GCF-002",
    institution: "Green Climate Fund",
    institutionShort: "GCF",
    type: "tc",
    status: "active",
    isNew: true,
    title: "AI for NDC Implementation & MRV Automation — Developing Countries TC",
    country: "글로벌 (개도국 우선 20개국)",
    region: "글로벌",
    amount: 18,
    currency: "USD",
    unit: "M",
    approvalDate: "2025-09-05",
    closingDate: "2028-08-31",
    sector: "기후완화 / MRV",
    aiSubtopics: ["탄소 MRV", "NDC AI", "온실가스 추적"],
    description: "파리협정 국가결정기여(NDC) 이행 모니터링·보고·검증(MRV) 자동화를 위한 AI 기술지원. 위성·IoT 센서 데이터와 NLP를 결합해 온실가스 배출량을 자동 산정하고, 개도국 보고 역량 격차를 해소. UNFCCC 투명성 체계(ETF) 연계.",
    borrower: "각국 기후변화 담당부처",
    objectives: [
      "AI 자동 온실가스 인벤토리 산정 시스템",
      "위성 기반 탄소 흡수원 AI 모니터링",
      "NDC 이행 대시보드 구축 (20개국)",
      "MRV 담당 공무원 역량강화 (600명)"
    ],
    timeline: [
      { event: "TC 승인", date: "2025-09-05", done: true },
      { event: "AI MRV 파일럿 (5개국)", date: "2026-06-30", done: false },
      { event: "시스템 확대 (20개국)", date: "2027-06-30", done: false },
      { event: "최종 완료", date: "2028-08-31", done: false }
    ],
    url: "https://www.greenclimate.fund/projects",
    tags: ["NDC", "MRV 자동화", "기후완화", "파리협정"],
    addedDate: "2026-03-12"
  },

  {
    id: "GCF-003",
    institution: "Green Climate Fund",
    institutionShort: "GCF",
    type: "loan",
    status: "pipeline",
    isNew: true,
    title: "Africa Green Hydrogen & AI Grid Optimization Facility",
    country: "케냐, 모로코, 남아프리카, 나미비아",
    region: "아프리카",
    amount: 380,
    currency: "USD",
    unit: "M",
    approvalDate: null,
    closingDate: null,
    sector: "청정에너지 / 그린수소",
    aiSubtopics: ["에너지 AI", "그린수소", "재생에너지 최적화"],
    description: "아프리카 그린수소 생산 및 AI 기반 재생에너지 그리드 최적화 대출. 태양광·풍력 AI 예측 모델로 전력 가변성을 관리하고, 그린수소 생산 효율을 AI로 최적화. GCF 최초 대규모 수소-AI 복합 금융.",
    borrower: "각국 에너지부·국영에너지공사",
    objectives: [
      "그린수소 생산단지 AI 최적화 시스템",
      "재생에너지 AI 예측·분배 플랫폼",
      "AI 기반 탄소 크레딧 발행 시스템",
      "에너지 접근성 AI 수요관리"
    ],
    timeline: [
      { event: "개념 검토 완료", date: "2026-02-28", done: true },
      { event: "기술 타당성 조사", date: "2026-07-31", done: false },
      { event: "GCF 이사회 상정 예정", date: "2026-11-01", done: false },
      { event: "착수 예정", date: "2027-03-01", done: false }
    ],
    url: "https://www.greenclimate.fund/projects",
    tags: ["그린수소", "재생에너지 AI", "아프리카", "탄소중립"],
    addedDate: "2026-03-12"
  },

];

// 기관 목록 (자동 생성)
const INSTITUTIONS = [...new Set(IFI_DATA.map(d => d.institution))].sort();
const INSTITUTION_SHORTS = [...new Set(IFI_DATA.map(d => d.institutionShort))].sort();

// 지역 목록
const REGIONS = [...new Set(IFI_DATA.map(d => d.region))].sort();

// 메타데이터
const METADATA = {
  lastUpdated: "2026-03-12T09:00:00+09:00",
  totalProjects: IFI_DATA.length,
  version: "1.0.0"
};
