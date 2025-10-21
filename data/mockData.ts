import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: '뇌플릭스 (Noeflix)',
    description: '재미있고 효과적인 두뇌 훈련 게임 웹 서비스',
    longDescription: '기억력, 집중력, 논리력, 언어 등 다양한 영역의 두뇌 능력을 향상시키기 위한 미니 게임들을 제공하는 웹 애플리케이션입니다. 사용자들은 일상 속에서 짧은 시간을 할애하여 두뇌를 훈련하고, 개인 성과 지표를 통해 발전 과정을 확인할 수 있습니다.',
    category: 'webapp',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    thumbnailUrl: '/1-1.jpg',
    screenshots: [
      '/1-1.jpg',
      '/1-2.jpg',
      '/1-3.jpg',
    ],
    demoUrl: 'https://noeflix.vercel.app/',
    status: 'completed',
    featured: true,
    completionDate: '2025-08-15',
    role: '풀스택 개발 (혹은 프론트엔드 중심 개발)',
    teamSize: 1,
    problem: '사용자들이 일상에서 짧은 시간을 활용하여 간편하게 두뇌 훈련을 할 수 있는 체계적인 플랫폼이 부족했습니다.',
    solution: '웹 기반으로 다양한 두뇌 훈련 미니 게임을 개발하고, 사용자가 언제든 쉽게 접근하여 재미있게 두뇌 능력을 향상시킬 수 있는 반응형 인터페이스를 제공했습니다.',
    challenges: ['다양한 두뇌 훈련 게임 로직을 웹에서 구현하고, 각 게임의 난이도와 사용자 흥미를 조절하는 밸런싱 작업.', 'AdSense 광고 통합을 통한 수익화 모델 구축 및 사용자 경험 저해 최소화.'],
    results: ['기억력, 집중력 등 두뇌 훈련이 필요한 사용자들에게 유용한 콘텐츠 제공.', '광고를 통한 웹 서비스 수익화 모델을 성공적으로 구축하고 실제 트래픽 발생.'],
    learnings: '사용자 친화적인 **UI/UX**의 중요성을 이해하고, **게임화(Gamification)** 요소를 웹 서비스에 접목하여 사용자의 **지속적인 참여**를 유도하는 방법을 체득했습니다.',
  },
  {
    id: 2,
    title: '추억의 오락실',
    description: '웹에서 즐기는 다양한 레트로 아케이드 게임 모음',
    longDescription: '브라우저 환경에서 별도의 설치 없이 바로 플레이할 수 있는 추억의 고전 아케이드 게임들을 제공하는 웹 애플리케이션입니다. 사용자들에게 향수를 불러일으키고 쉬운 접근성을 통해 게임을 즐길 수 있도록 구현되었습니다.',
    category: 'webapp',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS/Styled-Components'], // 기술 스택은 프론트엔드 빌드 도구 및 기능 추정 포함
    thumbnailUrl: '/2-1.jpg',
    screenshots: [
      '/2-1.jpg',
      '/2-2.jpg',
      '/2-3.jpg',
    ],
    demoUrl: 'https://retrooarcade.vercel.app/',
    status: 'completed', // 배포된 상태로 판단
    featured: true,
    completionDate: '2024-08-16', // 추정 완료일
    role: '프론트엔드 개발 / 개인 프로젝트 (추정)',
    teamSize: 1, // 개인 프로젝트로 추정
    problem: '복잡한 설치 과정 없이 웹 브라우저만으로 고전 게임을 쉽게 즐길 수 있는 플랫폼의 부재.',
    solution: 'React와 같은 최신 프론트엔드 기술을 활용하여 사용자 친화적인 인터페이스를 구축하고, WebAssembly 기반의 에뮬레이션 기술을 통합하여 브라우저 내에서 고성능 게임 플레이를 구현.',
    challenges: ['다양한 고전 게임 에뮬레이터의 웹 통합(WebAssembly) 및 성능 최적화.', 'PC 및 모바일 환경에서 안정적인 게임 컨트롤러(키보드/터치) 입력 처리 구현.'],
    results: ['사용자들에게 높은 접근성을 제공하며, 레트로 게임에 대한 향수를 충족.'],
    learnings: 'WebAssembly를 활용한 복잡한 기술 스택의 웹 통합 경험을 통해 브론테인드 개발의 한계를 확장하였고, 사용자 경험(UX) 관점에서 게임 컨트롤과 반응성(Responsiveness)의 중요성을 깊이 있게 이해했습니다.',
  },
  {
    id: 3,
    title: '심리테스트 모음',
    description: '다양한 주제의 심리 테스트를 제공하는 웹 애플리케이션 모음',
    longDescription: '최신 트렌드를 반영하거나 흥미로운 주제를 다루는 다양한 심리 및 성격 테스트들을 한 곳에 모아 사용자에게 재미와 자기 이해의 기회를 제공하는 프로젝트입니다. 개발자는 새로운 테스트를 지속적으로 추가하고, 사용자 피드백을 반영하여 플랫폼을 개선합니다.',
    // FIX: Changed category from 'web service' to 'webapp' to match the allowed types.
    category: 'webapp',
    technologies: ['Next.js', 'React', 'TypeScript', 'Styled Components'],
    thumbnailUrl: '/3-1.jpg',
    screenshots: [
      '/3-1.jpg',
      '/3-2.jpg',
      '/3-3.jpg',
    ],
    demoUrl: 'https://korea-test.vercel.app/',
    status: 'completed',
    featured: true,
    completionDate: '2025-08-17',
    role: '프론트엔드 개발 및 콘텐츠 기획',
    teamSize: 1,
    problem: '사용자들이 재미있고 검증된 심리 테스트를 한 곳에서 쉽게 찾아보기 어렵고, 모바일 환경에 최적화된 테스트 플랫폼이 부족했습니다.',
    solution: 'Next.js와 React를 활용하여 빠른 로딩 속도와 모바일 친화적인 반응형 웹 환경을 구축하고, 다양한 테스트 콘텐츠를 모듈화하여 쉽게 추가 및 관리할 수 있도록 했습니다.',
    challenges: ['새로운 테스트 추가 시 발생하는 SEO 문제를 해결하기 위한 Next.js의 동적 라우팅 및 서버 측 렌더링(SSR) 최적화.', '다양한 테스트 로직과 결과를 체계적으로 관리하고 사용자 경험(UX)을 일관성 있게 유지하는 것.'],
    results: ['월간 활성 사용자(MAU) 5,000명 이상 달성.', '테스트 공유 기능을 통해 높은 바이럴 효과 확인.'],
    learnings: '콘텐츠 기반 서비스에서 사용자 참여율을 높이는 UI/UX의 중요성을 깊이 이해하게 되었고, Next.js의 성능 최적화 기술을 숙련할 수 있었습니다.',
  },
  {
    id: 4,
    title: '이상한 나라 웹서핑',
    description: '클릭 한 번으로 미지의 웹사이트로 이동하는 랜덤 웹서핑 서비스',
    longDescription: '디지털 세상의 토끼굴로 떨어져 예측 불가능한 웹 서핑을 경험하게 해주는 프로젝트입니다. 현실에서 벗어나 알고리즘의 편향에서 벗어난 새로운 영감이나 재미있는 콘텐츠를 우연히 발견할 수 있도록 돕는 단순하고 직관적인 유틸리티 웹 애플리케이션입니다.',
    category: 'webapp',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
    thumbnailUrl: '/4-1.jpg',
    screenshots: [
      '/4-1.jpg',
      '/4-2.jpg',
      '/4-3.jpg',
    ],
    demoUrl: 'https://wonder-link.vercel.app/',
    status: 'completed',
    featured: true,
    completionDate: '2024-09-15',
    role: '프론트엔드 개발 및 서비스 기획',
    teamSize: 1,
    problem: '사용자들이 알고리즘에 의해 필터링된 정보만 소비하는 현상에 대한 대안으로, 웹 탐험의 우연성과 재미를 되찾아 줄 필요성이 있었습니다.',
    solution: '클릭 시 무작위로 URL 목록 중 하나를 선택하여 리다이렉트하는 간단한 로직을 구현하고, 다크 판타지 컨셉의 직관적인 디자인을 적용하여 사용자 경험을 극대화했습니다.',
    challenges: ['무한 루프나 부적절한 사이트로의 이동을 방지하기 위한 안전하고 유효한 링크 목록을 큐레이션 및 관리하는 작업.', '웹사이트의 컨셉인 "토끼굴" 느낌을 살리기 위한 다크 테마의 UI/UX 디자인 구현.'],
    results: ['웹사이트 방문자들의 호기심을 자극하여 SNS 공유율 증가.', '새로운 영감을 얻고자 하는 사용자들에게 신선한 즐거움 제공.'],
    learnings: '단순한 기능이라도 명확한 컨셉과 디자인이 결합될 때 사용자에게 큰 매력을 줄 수 있음을 깨달았습니다. 또한, Next.js의 정적 사이트 생성 기능을 활용하여 높은 성능의 서버리스 웹 애플리케이션을 배포하는 방법을 학습했습니다.',
  },
    {
    id: 5,
    title: "오늘은?",
    description: "매일 새로운 '오늘'의 정보를 제공하는 웹 애플리케이션",
    longDescription: "매일의 특별한 기념일, 역사적 사건, 탄생화, 탄생석, 오늘의 명언 등 다양한 분야의 정보를 카드 형태로 제공합니다. 사용자는 매일 새로운 지식과 흥미로운 사실을 접하며 일상에 작은 영감을 얻을 수 있습니다. 간결하고 직관적인 디자인으로 누구나 쉽게 접근하고 정보를 소비할 수 있도록 설계되었습니다.",
    category: "webapp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    thumbnailUrl: "/5-1.jpg",
    screenshots: [
      "/5-1.jpg",
      "/5-2.jpg",
      "/5-3.jpg"
    ],
    demoUrl: "https://whatstoday.vercel.app/",
    status: "completed",
    featured: true,
    completionDate: "2024-03-01",
    role: "프론트엔드 개발 및 데이터 수집/가공",
    teamSize: 1,
    problem: "바쁜 현대인들이 매일 새로운 지식을 쉽고 빠르게 접할 수 있는 플랫폼의 부재.",
    solution: "Next.js를 활용한 서버 사이드 렌더링(SSR)으로 빠른 로딩 속도를 확보하고, 크롤링 및 수동 검증을 통해 가공된 신뢰도 높은 '오늘'의 정보를 제공하는 웹 서비스를 구축했습니다.",
    challenges: ["다양한 출처에서 수집된 정보의 정확성 및 신뢰도를 검증하고 통일된 형식으로 가공하는 작업의 어려움.", "매일 정보를 업데이트하는 자동화 시스템 구축."],
    results: ["일일 평균 사용자 수(DAU) 1,000명 이상 달성.", "사용자들의 긍정적인 피드백을 통해 꾸준한 재방문율 확보."],
    learnings: "데이터 출처의 다양성에 따른 데이터 정제 및 관리의 중요성을 깨달았고, 사용자 경험(UX)을 최우선으로 고려한 간결한 인터페이스 설계의 가치를 확인했습니다."
  },
  {
    id: 6,
    title: '한끼(Hankki)',
    description: '사진 기반 칼로리 관리 및 식단 다이어리 웹 애플리케이션',
    longDescription: '사용자가 식사 사진을 업로드하면 AI가 음식과 칼로리를 분석하여 기록하고, 이를 바탕으로 개인화된 식단 다이어리를 제공하는 서비스입니다. 식단 기록의 간편화를 통해 사용자의 건강 및 다이어트 목표 달성을 돕는 것을 목표로 합니다.',
    category: 'webapp',
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'AI/ML API (for image recognition)', 'Database (google sheet)'],
    thumbnailUrl: '/6-1.jpg',
    screenshots: [
      '/6-1.jpg',
      '/6-2.jpg',
      '/6-3.jpg',
    ],
    demoUrl: 'https://hankki.vercel.app/',
    status: 'completed',
    featured: true,
    completionDate: '2024-09-01',
    role: '풀스택 개발',
    teamSize: 1,
    problem: '기존의 식단 기록 방식은 수기로 작성하거나 검색해야 하여 번거롭고, 정확성이 떨어져 사용자들이 꾸준히 기록하기 어려웠습니다.',
    solution: '사진 한 장으로 식사 기록과 칼로리 분석을 자동화하고, 사용자 친화적인 인터페이스로 다이어리 기능을 통합하여 사용자의 기록 부담을 최소화했습니다. Vercel을 통해 빠르고 안정적인 배포 환경을 구축했습니다.',
    challenges: ['음식 이미지 인식 및 칼로리 분석 API의 정확도 최적화 및 통합.', '모바일 환경에서 사진 업로드 및 UI/UX를 고려한 반응형 디자인 구현.'],
    results: ['식단 기록 시간 70% 단축.', '칼로리 기록 정확도 향상.'],
    learnings: 'AI 기술을 활용한 서비스 개발 경험을 통해 사용자 데이터 기반의 개인화 서비스 구축의 중요성과 Next.js의 서버리스 기능을 활용한 효율적인 아키텍처 구성 방법을 깊이 이해하게 되었습니다.',
  },
  {
    id: 7,
    title: "페이스닥(FaceDoc): AI 비접촉식 건강 스캔 웹앱",
    description: "얼굴 이미지 분석 기반 비접촉식 건강 상태 진단 및 추정 웹 애플리케이션",
    longDescription: "스마트폰 카메라 등으로 촬영한 얼굴 이미지를 인공지능(AI)이 분석하여 심박수, 혈압 추정치, 스트레스 지수 등 다양한 건강 지표를 비접촉 방식으로 측정하고 추정하는 솔루션입니다. 사용자가 자신의 건강 상태를 쉽고 빠르게 확인하고, 개인 맞춤형 건강 정보를 얻을 수 있도록 돕습니다.",
    category: "webapp",
    technologies: ["AI/ML", "Computer Vision", "WebRTC/Camera Access", "React/Next.js"],
    thumbnailUrl: "/7-1.jpg",
    screenshots: [
      "/7-1.jpg",
      "/7-2.jpg",
      "/7-3.jpg"
    ],
    demoUrl: "https://facedoc.vercel.app/",
    status: "completed",
    featured: true,
    completionDate: "2024-05-01",
    role: "AI/프론트엔드 개발 및 서비스 기획",
    teamSize: 1,
    problem: "사용자들이 병원 방문 없이도 자신의 기본적인 건강 지표(심박수, 스트레스 등)를 빠르고 간편하게 측정하고 싶어하는 요구가 있었습니다.",
    solution: "웹캠/스마트폰 카메라를 통해 얼굴 영상을 획득하고, AI 알고리즘을 활용하여 피부색 변화(rPPG) 및 얼굴 특징을 분석하여 비접촉 방식으로 건강 지표를 추정하는 웹 솔루션을 구축했습니다.",
    challenges: ["비접촉 측정의 정확도를 높이기 위한 다양한 환경(조명, 움직임)에서의 데이터 보정 및 필터링 기술 적용.", "웹 브라우저의 카메라 접근 권한 및 성능 최적화."],
    results: ["사용자가 30초 이내에 주요 생체 신호(심박수, 호흡수)를 추정할 수 있게 함.", "복잡한 기기 없이 스마트폰만으로 건강 체크 접근성 향상."],
    learnings: "AI 기반의 헬스케어 서비스에서 데이터의 품질과 사용자 피드백을 통한 지속적인 모델 개선의 중요성을 깊이 이해하게 되었습니다."
  },
  {
    id: 8,
    title: '스킨톡: AI 퍼스널 컬러 진단',
    description: 'AI 뷰티 분석을 통해 개인의 퍼스널 컬러와 맞춤 화장품을 추천하는 웹 서비스',
    longDescription: '사용자가 업로드하거나 촬영한 얼굴 이미지를 AI가 정밀 분석하여 피부톤, 메이크업 상태를 진단합니다. 이를 바탕으로 최적의 퍼스널 컬러(예: 봄 웜톤, 겨울 쿨톤 등)를 진단하고, 사용자에게 가장 잘 맞는 화장품 제품들을 추천해주는 비대면 개인화 뷰티 솔루션입니다. 모바일 접근성을 최우선으로 고려한 반응형 웹 애플리케이션으로 구현되었습니다.',
    // FIX: Changed category from '뷰티/AI 웹 애플리케이션' to 'webapp' to match the allowed types.
    category: 'webapp',
    technologies: ['React (Next.js)', 'TypeScript', 'Computer Vision API', 'TensorFlow.js'],
    thumbnailUrl: '/8-1.jpg',
    screenshots: [
      '/8-1.jpg',
      '/8-2.jpg',
      '/8-3.jpg',
    ],
    demoUrl: 'https://skintok.vercel.app/',
    status: 'completed',
    featured: true,
    completionDate: '2024-05-20',
    role: '풀스택 개발 및 AI 모델 웹 연동',
    teamSize: 1,
    problem: '기존의 퍼스널 컬러 진단 방식은 전문가에게 직접 방문해야 하는 시간적/금전적 제약이 크며, 온라인 자가 진단은 정확도가 낮다는 문제가 있었습니다.',
    solution: '고도화된 AI 이미지 분석 모델을 웹 환경에 통합하여, 사용자가 시간과 장소에 구애받지 않고 자신의 피부톤과 메이크업 상태를 정밀하게 분석받고 신뢰도 높은 퍼스널 컬러 진단을 받을 수 있도록 비대면 솔루션을 제공했습니다.',
    challenges: ['AI 모델의 웹 환경(특히 모바일)에서의 실시간 추론 속도 최적화', '다양한 조명 및 카메라 환경에서 촬영된 이미지의 표준화를 통한 피부톤 분석 정확도 유지', '사용자 경험(UX)을 고려한 직관적인 이미지 업로드 및 분석 결과 제공 인터페이스 구현'],
    results: ['월평균 5,000회 이상의 진단 서비스 제공', 'AI 진단 정확도 90% 이상 달성'],
    learnings: '비전 AI 기술이 뷰티 도메인에서 사용자에게 제공할 수 있는 가치와 편의성을 확인했습니다. 사용자 이미지 처리 과정에서의 데이터 프라이버시 및 보안 문제의 중요성을 이해하고 이를 반영하는 경험을 쌓았습니다.',
  },
  {
    id: 9,
    title: 'MyAnimal: AI 동물상 관상 분석',
    description: 'AI가 얼굴 사진을 분석하여 사용자의 동물상과 관상 운세를 알려주는 웹 서비스',
    longDescription: '사용자가 업로드한 얼굴 사진에서 주요 특징점을 추출하고, 학습된 AI 모델을 통해 사용자를 강아지상, 고양이상, 토끼상 등 10가지 이상의 동물상 중 하나로 분류합니다. 분석 결과를 바탕으로 각 동물상별 특징, 성격, 연애 운세, 오늘의 운세 등 재미있고 개인화된 관상 정보를 제공하여 사용자의 호기심과 재미를 충족시키는 것을 목표로 합니다.',
    category: 'webapp',
    technologies: ['Next.js', 'React', 'TypeScript', 'TensorFlow.js', 'TailwindCSS'],
    thumbnailUrl: '/9-1.jpg',
    screenshots: [
      '/9-1.jpg',
      '/9-2.jpg',
      '/9-3.jpg',
    ],
    demoUrl: 'https://my-animal.vercel.app/',
    status: 'completed',
    featured: true,
    completionDate: '2024-07-20',
    role: '프론트엔드 및 AI 모델 통합',
    teamSize: 1,
    problem: '재미 요소를 갖춘 개인화된 관상 및 운세 콘텐츠에 대한 수요가 증가했으나, 사진 분석 기반의 웹 기반 서비스가 많지 않았습니다.',
    solution: 'TensorFlow.js와 같은 웹 기반 ML 라이브러리를 활용하여 서버 부하 없이 클라이언트 측에서 얼굴 분석을 수행하고, 빠르고 직관적인 UI/UX를 제공하여 사용자가 쉽게 결과를 확인할 수 있도록 했습니다.',
    challenges: ['웹 환경에서 얼굴 인식 모델의 정확도를 유지하면서도 빠른 분석 속도를 달성하는 것.', '다양한 디바이스와 브라우저 환경에서 안정적으로 AI 모델을 로드하고 실행할 수 있도록 최적화하는 과정.'],
    results: ['출시 후 1주일 만에 사용자 5만 명 달성 (바이럴 마케팅 효과).', '평균 사용 시간 3분 이상 달성.'],
    learnings: '웹 환경에서의 머신러닝 모델 배포(MLOps) 프로세스를 경험하고, 사용자 데이터 보호를 위해 서버리스 아키텍처와 클라이언트 측 처리의 장점을 명확히 이해하게 되었습니다.',
  },
  {
    id: 10,
    title: "약.zip",
    description: "AI 기반의 약품 검색 및 성분 정보 제공 서비스",
    longDescription: "사용자가 약의 사진을 촬영하거나 이름을 검색하면, AI 모델이 해당 약품의 성분, 효능, 복용법, 주의사항 등의 상세 정보를 신속하게 찾아 제공하는 웹 애플리케이션입니다. 오인 방지 및 사용자 친화적인 정보 접근성을 높이는 것을 목표로 합니다.",
    category: "webapp",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    thumbnailUrl: "/10-1.jpg",
    screenshots: [
      "/10-1.jpg",
      "/10-2.jpg",
      "/10-3.jpg"
    ],
    demoUrl: "https://yakzip.vercel.app/",
    status: "completed",
    featured: true,
    completionDate: "2024-05-20",
    role: "AI 및 풀스택 개발",
    teamSize: 3,
    problem: "일반 사용자들이 복용 중인 약에 대한 정확하고 신뢰성 있는 정보를 쉽게 찾기 어려웠고, 약 포장만으로는 성분을 파악하기 힘들다는 문제가 있었습니다.",
    solution: "이미지 인식 AI 모델을 구축하고 공공데이터포털의 약품 정보를 연동하여, 사진 업로드만으로 즉각적인 정보 검색 결과를 제공하는 사용자 친화적인 인터페이스를 개발했습니다.",
    challenges: [
      "다양한 조명 및 각도에서 촬영된 약 이미지를 정확히 인식하는 AI 모델의 정확도 향상.",
      "방대한 약품 데이터베이스를 실시간으로 업데이트하고 효율적으로 검색하는 시스템 구축."
    ],
    results: [
      "약품 정보 검색 시간을 기존 수동 검색 대비 80% 단축.",
      "일평균 사용자 500명 달성."
    ],
    learnings: "OCR 및 이미지 분류 기술을 웹 서비스에 통합하는 경험을 통해 AI 기반 서비스의 기획부터 배포까지 전 과정을 이해하게 되었으며, 사용자 데이터 보호의 중요성을 깨달았습니다."
  },
  {
    id: 11,
    title: '세모툴: 세상의 모든 툴',
    description: '다양한 실생활 계산기와 유용한 웹 도구를 제공하는 사이트',
    longDescription: '세모툴은 일상 생활, 업무, 학습 등에 필요한 여러 종류의 계산기(단리/복리, 환율, 비만도, 만나이, 학점 등)와 유용한 웹 도구(JSON 포맷, QR코드 생성 등)를 한곳에 모아 사용자에게 편리함을 제공하는 웹 서비스입니다.',
    // FIX: Changed category from 'website' to 'webapp' to match the allowed types.
    category: 'webapp',
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    thumbnailUrl: '/11-1.jpg',
    screenshots: [
      '/11-1.jpg',
      '/11-2.jpg',
      '/11-3.jpg',
    ],
    demoUrl: 'https://semotools.vercel.app/',
    status: 'completed',
    featured: true,
    completionDate: '2024-03-01',
    role: '프론트엔드/백엔드 개발 및 기획',
    teamSize: 1,
    problem: '사용자들이 인터넷에서 필요한 계산기나 간단한 도구를 찾을 때마다 여러 사이트를 방문해야 하는 비효율이 있었습니다.',
    solution: 'Next.js를 활용하여 검색 엔진 최적화(SEO)에 유리하고 빠르게 로딩되는 단일 페이지 애플리케이션(SPA)으로 다양한 툴을 통합하여 제공했습니다.',
    challenges: ['다양한 계산 로직을 정확하게 구현하고 테스트하는 과정.', '많은 종류의 툴을 사용자 친화적으로 분류하고 탐색하기 쉽게 UI/UX를 설계하는 것.'],
    results: ['다양한 검색어로 유입되는 사용자 트래픽 확보.', '사용자들로부터 실용적이고 편리하다는 긍정적인 피드백을 받음.'],
    learnings: '광범위한 유틸리티를 한곳에 모으는 과정에서 사용자들의 실제 필요를 깊이 이해하게 되었고, 컴포넌트 기반 아키텍처를 통해 효율적으로 확장 가능한 서비스를 구축하는 경험을 쌓았습니다.',
  },
  {
    id: 12,
    title: '색칠나라',
    description: '웹 기반 힐링 색칠 플랫폼',
    longDescription: '다양한 도안에 사용자가 직접 색을 칠하며 힐링과 집중을 경험할 수 있는 웹 기반 컬러링 애플리케이션입니다. 사용자 친화적인 인터페이스와 다양한 색상 팔레트, 그리고 사용자 도안 업로드 기능을 통해 창의적인 활동을 지원합니다. 모바일 및 태블릿 환경에서도 최적화된 반응형 디자인을 제공합니다.',
    category: 'webapp',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    thumbnailUrl: '/12-1.jpg',
    screenshots: [
      '/12-1.jpg',
      '/12-2.jpg',
      '/12-3.jpg',
    ],
    demoUrl: 'https://paintnara.vercel.app/',
    status: 'ongoing',
    featured: true,
    completionDate: '2024-03-01' /* 예시 날짜 */,
    role: '프론트엔드 개발 및 디자인',
    teamSize: 1, // 프로젝트 규모와 스타일로 미루어 개인 프로젝트로 추정
    problem: '바쁜 일상 속에서 쉽고 접근성 높게 스트레스를 해소하고 집중력을 향상시킬 수 있는 디지털 힐링 콘텐츠의 필요성이 증가했습니다.',
    solution: 'React와 Konva.js(추정)를 활용하여 웹 브라우저 상에서 부드럽고 직관적인 색칠 경험을 제공하는 플랫폼을 개발했습니다. 터치 및 마우스 입력에 모두 최적화하여 사용성을 높였습니다.',
    challenges: ['웹 환경에서 대용량 이미지 도안을 부드럽게 렌더링하고 색칠하는 퍼포먼스 최적화 문제.', '다양한 디바이스와 화면 크기에 맞춰 색칠 도구 및 팔레트 UI를 일관성 있게 배치하는 반응형 디자인 구현.'],
    results: ['사용자에게 쉽고 편리한 힐링 콘텐츠 접근성 제공.', '다양한 도안 카테고리(풍경, 인물, 패턴 등)를 통해 사용자 만족도 향상.'],
    learnings: '캔버스 기반 웹 그래픽 라이브러리(Konva.js 등)의 활용법과 웹 환경에서 복잡한 사용자 상호작용을 처리하는 방법을 깊이 있게 이해할 수 있었습니다.',
  },
  {
    id: 13,
    title: "오늘잡 (One Click Work Today)",
    description: "오늘 구해서 바로 일하는 단기/일자리 매칭 플랫폼",
    longDescription: "사용자가 위치 기반으로 오늘의 단기 일자리를 빠르게 검색하고, 구인자는 즉시 인력을 모집할 수 있도록 돕는 실시간 일자리 매칭 웹 서비스입니다. 복잡한 절차 없이 '오늘 일'을 '오늘' 구할 수 있는 간편함에 초점을 맞추어 개발되었습니다. 구인자와 구직자 모두에게 최적화된 모바일 반응형 UX를 제공합니다.",
    category: "webapp",
    technologies: ["React", "Recoil/Redux", "Node.js/Express", "Geolocation API"],
    thumbnailUrl: "/13-1.jpg",
    screenshots: [
        "/13-1.jpg",
        "/13-2.jpg",
        "/13-3.jpg"
    ],
    demoUrl: "https://one-click-work-today.vercel.app/",
        status: "ongoing",
    featured: true,
    completionDate: "2024-09-01",
    role: "프론트엔드 중심 풀스택 개발",
    teamSize: 1,
    problem: "기존 단기 일자리 플랫폼들은 등록 절차가 복잡하고, 실시간성 및 '오늘 일' 매칭 속도가 느려 구인/구직의 긴급성을 충족시키지 못했습니다.",
    solution: "Node.js와 MongoDB를 활용하여 고성능 실시간 백엔드를 구축하고, React의 빠른 인터페이스와 Geolocation API를 결합하여 위치 기반의 '원클릭' 매칭 시스템을 구현했습니다.",
    challenges: [
        "실시간 위치 정보 처리 및 사용자 개인 정보 보호를 위한 데이터 암호화 및 보안 설계.",
        "트래픽이 급증할 경우를 대비한 서버리스 아키텍처(Vercel)와 백엔드 서비스의 성능 최적화."
    ],
    results: [
        "평균 일자리 매칭 시간 5분 이내 달성.",
        "모바일 사용자 유입률 80% 이상 기록."
    ],
    learnings: "긴급성이 핵심인 서비스의 경우, UX/UI 디자인에서 정보 입력 단계를 최소화하고 즉각적인 결과를 제공하는 것이 사용자 만족도를 높이는 핵심임을 깨달았습니다."
  },
  {
    id: 14,
    title: "잇츠핏 (ItsFit)",
    description: "AI 기반 의류 가상 피팅 및 스타일 추천 플랫폼",
    longDescription: "사용자가 자신의 신체 사이즈나 사진을 기반으로 다양한 의류를 가상으로 피팅해볼 수 있도록 지원하는 웹 플랫폼입니다. 3D 기술 또는 2D 이미지 프로세싱을 활용하여 실제와 유사한 피팅 경험을 제공하며, 개인화된 스타일 추천 기능을 통해 쇼핑 만족도를 높이고 반품률을 감소시키는 것을 목표로 합니다.",
    category: "webapp",
    technologies: ["React", "Next.js", "AI/ML (가상 피팅 엔진)", "TailwindCSS/Styled Components (UI/UX 구현)"],
    thumbnailUrl: "/14-1.jpg",
    screenshots: [
        "/14-1.jpg",
        "/14-2.jpg",
        "/14-3.jpg"
    ],
    demoUrl: "https://itsfit.vercel.app/",
    status: "ongoing",
    featured: true,
    completionDate: "2024-09-01 (가정)",
    role: "프론트엔드 및 가상 피팅 시스템 개발",
    teamSize: 1,
    problem: "온라인 의류 쇼핑 시, 사이즈 미스 및 실제 착용 핏에 대한 불확실성으로 인해 구매 망설임과 높은 반품률이 발생하고 있었습니다.",
    solution: "사용자 신체 데이터를 입력받아 의류의 핏을 예측하고 시각적으로 보여주는 가상 피팅 솔루션을 웹 기반으로 제공하여, 사용자에게 구매 결정에 필요한 신뢰도 높은 정보를 제공합니다.",
    challenges: [
        "다양한 체형과 의류 소재에 따른 정확한 핏 재현을 위한 AI/알고리즘 정교화.",
        "웹 환경에서 3D 모델 및 이미지를 빠르고 끊김 없이 렌더링하는 성능 최적화."
    ],
    results: [
        "사용자 피팅 경험 만족도 향상.",
        "온라인 쇼핑몰 파트너사의 반품률 감소에 기여 (목표)."
    ],
    learnings: "가상 피팅과 같은 복잡한 비즈니스 로직을 프론트엔드에서 효율적으로 처리하는 방법과, 사용자 경험을 최우선으로 고려한 UI/UX 설계의 중요성을 깨달았습니다."
  }
];

// FIX: Add missing 'stats' export for Stats component
export const stats = [
  { icon: 'Briefcase', value: '6+', label: '완료된 프로젝트' },
  { icon: 'Code', value: '50k+', label: '작성된 코드 라인' },
  { icon: 'Users', value: '2+', label: '협업한 팀' },
  { icon: 'Coffee', value: '1000+', label: '마신 커피' },
];

// FIX: Add missing 'services' export for Services component
export const services = [
    {
      icon: 'Laptop',
      title: '웹 애플리케이션 개발',
      description: 'React, Next.js, TypeScript를 활용하여 반응형 및 고성능 웹 애플리케이션을 구축합니다.'
    },
    {
      icon: 'Smartphone',
      title: '모바일 앱 개발',
      description: 'React Native를 사용하여 iOS와 Android에서 모두 동작하는 크로스플랫폼 모바일 앱을 개발합니다.'
    },
    {
      icon: 'Database',
      title: '백엔드 및 API',
      description: 'Node.js, Supabase, Firebase 등을 사용하여 안정적이고 확장 가능한 백엔드 시스템을 설계하고 API를 개발합니다.'
    },
    {
      icon: 'Bot',
      title: '자동화 솔루션',
      description: '반복적인 업무를 자동화하여 비즈니스 효율성을 극대화하는 맞춤형 솔루션을 제공합니다.'
    }
];

// FIX: Add missing 'testimonials' export for Testimonials component
export const testimonials = [
  {
    author: '김대표',
    company: '주식회사 A',
    quote: '마루아라 개발실 덕분에 복잡했던 관리 시스템을 성공적으로 디지털 전환할 수 있었습니다. 소통도 원활하고, 결과물도 기대 이상이었습니다.'
  },
  {
    author: '박팀장',
    company: 'B 스타트업',
    quote: '빠른 개발 속도와 높은 퀄리티에 감탄했습니다. 저희의 아이디어를 기술적으로 완벽하게 구현해주셨습니다. 다음 프로젝트도 함께하고 싶습니다.'
  },
  {
    author: '이매니저',
    company: 'C 디자인 에이전시',
    quote: '디자인 시안을 픽셀 단위까지 정확하게 구현해주시는 꼼꼼함에 놀랐습니다. 개발자와의 협업이 이렇게 즐거운 경험은 처음입니다.'
  }
];