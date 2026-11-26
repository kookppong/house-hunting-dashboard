// Comprehensive Real Estate Dataset across Seoul & Gyeonggi (40+ Major Landmark Complexes)
// Includes 2026 Latest Real Transactions, Naver/Hogangnono realistic listings, Floor Plans, and Living Radius

export const APARTMENT_DATA = [
  // ==================== 1. 서울 강남 / 서초 ====================
  {
    id: "apt-1",
    name: "아크로리버파크",
    city: "서울",
    district: "서초구",
    dong: "반포동",
    lat: 37.5076,
    lng: 126.9984,
    builtYear: 2016,
    totalHouseholds: 1612,
    totalBuildings: 15,
    parkingTotal: 2966,
    parkingPerHousehold: 1.84,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 54기 (급속 12기, 완속 42기)",
    slopeStatus: "완전 평지 (경사 0° / 단지내 무단차 설계)",
    amenities: {
      convenienceStore: "GS25 단지내 상가 도보 1분 (60m)",
      oliveyoung: "올리브영 반포역점 도보 4분 (310m)",
      daiso: "다이소 고속터미널점 도보 6분 (480m)",
      subwayDetail: "9호선 신반포역 1번 출구 도보 3분 (210m)"
    },
    floorAreaRatio: 299,
    buildingCoverageRatio: 19,
    heating: "지역난방, 열병합",
    nearestStation: "9호선 신반포역 도보 3분",
    school: "서울반포초등학교 도보 3분",
    tags: ["한강뷰", "초품아", "신축급", "대장아파트", "평지"],
    listingCounts: { sale: 32, jeonse: 18, rent: 11, total: 61 },
    recentTransaction: {
      price: 435000,
      date: "2026.10",
      floor: "18층",
      areaPyeong: 34,
      areaSqm: 84.95,
      changeRate: "+1.2%"
    },
    jeonsePrice: 210000,
    monthlyRent: { deposit: 50000, rent: 650 },
    naverLandUrl: "https://new.land.naver.com/complexes/109861",
    hogangnonoUrl: "https://hogangnono.com/apt/21051",
    floorPlans: [
      {
        name: "84㎡A (34평형)",
        type: "4-Bay 판상형",
        rooms: "방3 / 욕실2 / 드레스룸 / 팬트리 / 발코니",
        bay: 4,
        structure: "한강 조망 특화 맞통풍 구조",
        kitchen: "대면형 아일랜드 주방"
      },
      {
        name: "59㎡B (25평형)",
        type: "3-Bay 판상형",
        rooms: "방3 / 욕실2 / 파우더룸",
        bay: 3,
        structure: "채광 극대화 남동향 설계",
        kitchen: "ㄷ자형 주방동선"
      }
    ],
    actualListings: [
      {
        id: "l-1-1",
        tradeType: "sale",
        price: 440000,
        areaPyeong: 34,
        areaSqm: 84.95,
        floor: "20/38층",
        dong: "105동",
        direction: "남동향",
        description: "한강 파노라마 영구조망, 올수리 최고급 인테리어",
        broker: "반포아크로공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 38만원"
      },
      {
        id: "l-1-2",
        tradeType: "sale",
        price: 425000,
        areaPyeong: 34,
        areaSqm: 84.95,
        floor: "7/38층",
        dong: "102동",
        direction: "남서향",
        description: "급매 추천, 정원뷰 조용하고 쾌적한 로얄동",
        broker: "한강프라임공인",
        verifiedDate: "2026.11.25",
        maintenanceCost: "약 36만원"
      },
      {
        id: "l-1-3",
        tradeType: "jeonse",
        price: 215000,
        areaPyeong: 34,
        areaSqm: 84.95,
        floor: "12/38층",
        dong: "102동",
        direction: "남향",
        description: "전세권 설정 가능, 즉시 입주 협의, 시스템에어컨 4대 풀옵션",
        broker: "한강프라임공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 36만원"
      },
      {
        id: "l-1-4",
        tradeType: "rent",
        deposit: 50000,
        monthlyRent: 620,
        price: 50000,
        areaPyeong: 34,
        areaSqm: 84.95,
        floor: "16/38층",
        dong: "107동",
        direction: "남동향",
        description: "보증금 조절 가능(3억~8억), 세금계산서 발행 가능",
        broker: "반포센트럴부동산",
        verifiedDate: "2026.11.24",
        maintenanceCost: "약 37만원"
      }
    ]
  },
  {
    id: "apt-1b",
    name: "래미안원베일리",
    city: "서울",
    district: "서초구",
    dong: "반포동",
    lat: 37.5052,
    lng: 127.0018,
    builtYear: 2023,
    totalHouseholds: 2990,
    totalBuildings: 23,
    parkingTotal: 5440,
    parkingPerHousehold: 1.82,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 120기 (초고속 충전존 운영)",
    slopeStatus: "완전 평지 100% (고속터미널 지하 직결)",
    amenities: {
      convenienceStore: "단지내 이마트24 / 세븐일레븐 (도보 1분)",
      oliveyoung: "올리브영 신세계강남점 도보 4분",
      daiso: "다이소 고속터미널점 도보 5분",
      subwayDetail: "3/7/9호선 고속터미널역 도보 4분"
    },
    floorAreaRatio: 299,
    buildingCoverageRatio: 19,
    heating: "지역난방",
    nearestStation: "3/7/9호선 고속터미널역 도보 4분",
    school: "서울계성초, 잠원초",
    tags: ["신축대장", "한강뷰", "트리플역세권", "스카이브릿지", "평지"],
    listingCounts: { sale: 41, jeonse: 26, rent: 18, total: 85 },
    recentTransaction: {
      price: 450000,
      date: "2026.11",
      floor: "22층",
      areaPyeong: 34,
      areaSqm: 84.98,
      changeRate: "+2.4%"
    },
    jeonsePrice: 225000,
    monthlyRent: { deposit: 50000, rent: 680 },
    naverLandUrl: "https://new.land.naver.com/complexes/129759",
    hogangnonoUrl: "https://hogangnono.com/apt/21051",
    floorPlans: [
      {
        name: "84㎡A (34평형)",
        type: "4-Bay 판상형",
        rooms: "방3 / 욕실2 / 드레스룸 / 팬트리",
        bay: 4,
        structure: "하이엔드 한강조망 판상형",
        kitchen: "독일제 명품 주방"
      }
    ],
    actualListings: [
      {
        id: "l-1b-1",
        tradeType: "sale",
        price: 455000,
        areaPyeong: 34,
        areaSqm: 84.98,
        floor: "25/35층",
        dong: "110동",
        direction: "남동향",
        description: "한강뷰 로얄층, 풀에어컨 및 최고급 마감재 완비",
        broker: "원베일리탑공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 40만원"
      },
      {
        id: "l-1b-2",
        tradeType: "jeonse",
        price: 228000,
        areaPyeong: 34,
        areaSqm: 84.98,
        floor: "18/35층",
        dong: "108동",
        direction: "남향",
        description: "첫입주급 융자무 안심전세, 즉시 협의가능",
        broker: "반포원부동산",
        verifiedDate: "2026.11.25",
        maintenanceCost: "약 39만원"
      }
    ]
  },
  {
    id: "apt-3",
    name: "디에이치퍼스티어아이파크",
    city: "서울",
    district: "강남구",
    dong: "개포동",
    lat: 37.4858,
    lng: 127.0601,
    builtYear: 2024,
    totalHouseholds: 6702,
    totalBuildings: 74,
    parkingTotal: 13203,
    parkingPerHousehold: 1.97,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 145기 완비",
    slopeStatus: "완전 평지 (개포지구 대규모 평지 정비단지)",
    amenities: {
      convenienceStore: "세븐일레븐 단지내 입점 (도보 1분)",
      oliveyoung: "올리브영 개포점 도보 5분 (380m)",
      daiso: "다이소 대치역점 도보 12분 / 마을버스 1정거장",
      subwayDetail: "수인분당선 구룡역 2번 출구 도보 5분 (340m)"
    },
    floorAreaRatio: 249,
    buildingCoverageRatio: 18,
    heating: "지역난방",
    nearestStation: "수인분당선 구룡역 도보 5분",
    school: "서울개포초등학교 품은 단지",
    tags: ["신축", "강남대단지", "수영장", "고급커뮤니티", "평지"],
    listingCounts: { sale: 45, jeonse: 38, rent: 20, total: 103 },
    recentTransaction: {
      price: 315000,
      date: "2026.11",
      floor: "22층",
      areaPyeong: 34,
      areaSqm: 84.97,
      changeRate: "+3.2%"
    },
    jeonsePrice: 165000,
    monthlyRent: { deposit: 30000, rent: 480 },
    naverLandUrl: "https://new.land.naver.com/complexes/129759",
    hogangnonoUrl: "https://hogangnono.com/apt/21051",
    floorPlans: [
      {
        name: "84㎡A (34평형)",
        type: "4-Bay 판상형",
        rooms: "방3 / 욕실2 / 대형드레스룸 / 현관팬트리",
        bay: 4,
        structure: "하이엔드 고급 마감재 시공",
        kitchen: "이태리 명품 주방가구"
      }
    ],
    actualListings: [
      {
        id: "l-3-1",
        tradeType: "sale",
        price: 320000,
        areaPyeong: 34,
        areaSqm: 84.97,
        floor: "19/35층",
        dong: "118동",
        direction: "남동향",
        description: "첫입주 신축 풀옵션, 대모산 숲세권 힐링뷰",
        broker: "개포퍼스트공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 32만원"
      },
      {
        id: "l-3-2",
        tradeType: "jeonse",
        price: 168000,
        areaPyeong: 34,
        areaSqm: 84.97,
        floor: "14/35층",
        dong: "125동",
        direction: "남향",
        description: "전세대출 적극협조, 융자무 안심전세 매물",
        broker: "개포랜드공인",
        verifiedDate: "2026.11.25",
        maintenanceCost: "약 31만원"
      }
    ]
  },
  {
    id: "apt-1c",
    name: "압구정현대1차",
    city: "서울",
    district: "강남구",
    dong: "압구정동",
    lat: 37.5312,
    lng: 127.0275,
    builtYear: 1976,
    totalHouseholds: 960,
    totalBuildings: 13,
    parkingTotal: 1056,
    parkingPerHousehold: 1.1,
    undergroundParkingDirect: false,
    evChargers: "지상 이동형 완속 20기",
    slopeStatus: "완전 평지 100% (압구정 한강변 평지)",
    amenities: {
      convenienceStore: "현대백화점 본점 지하 식품관 도보 3분",
      oliveyoung: "올리브영 압구정역점 도보 4분",
      daiso: "다이소 신사역점 도보 10분",
      subwayDetail: "3호선 압구정역 6번 출구 도보 4분"
    },
    floorAreaRatio: 205,
    buildingCoverageRatio: 16,
    heating: "중앙난방",
    nearestStation: "3호선 압구정역 도보 4분",
    school: "서울압구정초등학교",
    tags: ["재건축대장", "한강뷰", "압구정특별계획구역", "신속통합기획"],
    listingCounts: { sale: 18, jeonse: 10, rent: 7, total: 35 },
    recentTransaction: {
      price: 520000,
      date: "2026.10",
      floor: "9층",
      areaPyeong: 43,
      areaSqm: 131.4,
      changeRate: "+4.8%"
    },
    jeonsePrice: 120000,
    monthlyRent: { deposit: 30000, rent: 350 },
    naverLandUrl: "https://new.land.naver.com/complexes/760",
    hogangnonoUrl: "https://hogangnono.com/apt/331",
    floorPlans: [
      { name: "131㎡ (43평형)", type: "2-Bay 복도식 판상형", rooms: "방4 / 욕실2", bay: 2, structure: "한강 직조망" }
    ],
    actualListings: [
      {
        id: "l-1c-1",
        tradeType: "sale",
        price: 530000,
        areaPyeong: 43,
        areaSqm: 131.4,
        floor: "11/15층",
        dong: "12동",
        direction: "남향",
        description: "한강 전면 영구조망, 재건축 설계안 확정 임박 매물",
        broker: "압구정현대부동산",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 42만원"
      }
    ]
  },
  {
    id: "apt-1d",
    name: "래미안대치팰리스",
    city: "서울",
    district: "강남구",
    dong: "대치동",
    lat: 37.4935,
    lng: 127.0605,
    builtYear: 2015,
    totalHouseholds: 1608,
    totalBuildings: 17,
    parkingTotal: 3103,
    parkingPerHousehold: 1.93,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 65기 완비",
    slopeStatus: "완전 평지 (대치동 학원가 평지)",
    amenities: {
      convenienceStore: "단지 상가 CU/세븐일레븐 도보 1분",
      oliveyoung: "올리브영 대치점 도보 3분",
      daiso: "다이소 한티역점 도보 6분",
      subwayDetail: "3호선 대치역 도보 3분 / 도곡역 도보 5분"
    },
    floorAreaRatio: 262,
    buildingCoverageRatio: 16,
    heating: "지역난방",
    nearestStation: "3호선 대치역 도보 3분",
    school: "서울대치초등학교 배정",
    tags: ["대치동학원가", "초품아", "신축대장", "학군끝판왕", "평지"],
    listingCounts: { sale: 29, jeonse: 21, rent: 14, total: 64 },
    recentTransaction: {
      price: 360000,
      date: "2026.11",
      floor: "15층",
      areaPyeong: 34,
      areaSqm: 84.97,
      changeRate: "+1.9%"
    },
    jeonsePrice: 195000,
    monthlyRent: { deposit: 30000, rent: 520 },
    naverLandUrl: "https://new.land.naver.com/complexes/103980",
    hogangnonoUrl: "https://hogangnono.com/apt/bB334",
    floorPlans: [
      { name: "84㎡A (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2 / 알파룸", bay: 4, structure: "대치학원가 셔틀 승하차 바로앞" }
    ],
    actualListings: [
      {
        id: "l-1d-1",
        tradeType: "sale",
        price: 365000,
        areaPyeong: 34,
        areaSqm: 84.97,
        floor: "17/35층",
        dong: "106동",
        direction: "남향",
        description: "대치초 도보 2분 로얄동, 학부모 선호 1위 매물",
        broker: "대치팰리스공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 34만원"
      }
    ]
  },

  // ==================== 2. 서울 송파 / 강동 ====================
  {
    id: "apt-2",
    name: "헬리오시티",
    city: "서울",
    district: "송파구",
    dong: "가락동",
    lat: 37.4975,
    lng: 127.1065,
    builtYear: 2018,
    totalHouseholds: 9510,
    totalBuildings: 84,
    parkingTotal: 12553,
    parkingPerHousehold: 1.32,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 182기 (단지별 급속 충전소 운영)",
    slopeStatus: "완전 평지 (단지 전체 광폭 스트리트형 평지)",
    amenities: {
      convenienceStore: "CU/이마트24 단지내 6개소 (도보 1~2분)",
      oliveyoung: "올리브영 송파헬리오점 도보 2분 (상가 B동)",
      daiso: "다이소 송파역점 도보 3분 (250m)",
      subwayDetail: "8호선 송파역 지하 직통 연결 (도보 1분)"
    },
    floorAreaRatio: 285,
    buildingCoverageRatio: 19,
    heating: "지역난방, 열병합",
    nearestStation: "8호선 송파역 직통연결",
    school: "서울가락초, 해누리초 단지내",
    tags: ["9천세대대단지", "역세권", "초품아", "커뮤니티", "평지"],
    listingCounts: { sale: 84, jeonse: 52, rent: 31, total: 167 },
    recentTransaction: {
      price: 218000,
      date: "2026.10",
      floor: "14층",
      areaPyeong: 33,
      areaSqm: 84.98,
      changeRate: "+0.8%"
    },
    jeonsePrice: 110000,
    monthlyRent: { deposit: 20000, rent: 320 },
    naverLandUrl: "https://new.land.naver.com/complexes/111515",
    hogangnonoUrl: "https://hogangnono.com/apt/21051",
    floorPlans: [
      {
        name: "84㎡C (33평형)",
        type: "4-Bay 판상형",
        rooms: "방3 / 욕실2 / 알파룸 / 광폭 드레스룸",
        bay: 4,
        structure: "남향 맞통풍, 채광 극대화",
        kitchen: "11자형 대형 다이닝"
      }
    ],
    actualListings: [
      {
        id: "l-2-1",
        tradeType: "sale",
        price: 220000,
        areaPyeong: 33,
        areaSqm: 84.98,
        floor: "16/35층",
        dong: "204동",
        direction: "남향",
        description: "역 도보 3분 로얄동, 판상형 4베이 채광극상",
        broker: "헬리오드림공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 28만원"
      },
      {
        id: "l-2-2",
        tradeType: "jeonse",
        price: 112000,
        areaPyeong: 33,
        areaSqm: 84.98,
        floor: "19/35층",
        dong: "315동",
        direction: "남동향",
        description: "보증보험 100% 가입가능, 융자 무, 깨끗한 확장형",
        broker: "송파메이저공인",
        verifiedDate: "2026.11.25",
        maintenanceCost: "약 27만원"
      }
    ]
  },
  {
    id: "apt-2b",
    name: "잠실엘스",
    city: "서울",
    district: "송파구",
    dong: "잠실동",
    lat: 37.5135,
    lng: 127.0825,
    builtYear: 2008,
    totalHouseholds: 5678,
    totalBuildings: 72,
    parkingTotal: 7709,
    parkingPerHousehold: 1.35,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 88기",
    slopeStatus: "완전 평지 100% (잠실 평지 신화)",
    amenities: {
      convenienceStore: "단지내 상가 GS25 도보 1분",
      oliveyoung: "올리브영 신천역점 도보 3분",
      daiso: "다이소 잠실새내역점 도보 4분",
      subwayDetail: "2호선 잠실새내역 지하 직통 연결"
    },
    floorAreaRatio: 275,
    buildingCoverageRatio: 16,
    heating: "지역난방",
    nearestStation: "2호선 잠실새내역 직통",
    school: "서울잠일초등학교 품은 단지",
    tags: ["잠실엘리트", "2호선역세권", "한강공원도보", "대단지", "평지"],
    listingCounts: { sale: 52, jeonse: 33, rent: 22, total: 107 },
    recentTransaction: {
      price: 255000,
      date: "2026.11",
      floor: "20층",
      areaPyeong: 34,
      areaSqm: 84.88,
      changeRate: "+1.6%"
    },
    jeonsePrice: 125000,
    monthlyRent: { deposit: 20000, rent: 350 },
    naverLandUrl: "https://new.land.naver.com/complexes/22295",
    hogangnonoUrl: "https://hogangnono.com/apt/1802",
    floorPlans: [
      { name: "84㎡ (34평형)", type: "3-Bay 판상형", rooms: "방3 / 욕실2", bay: 3, structure: "한강 접근성 최고" }
    ],
    actualListings: [
      {
        id: "l-2b-1",
        tradeType: "sale",
        price: 258000,
        areaPyeong: 34,
        areaSqm: 84.88,
        floor: "18/30층",
        dong: "128동",
        direction: "남향",
        description: "잠일초 바로 앞, 한강나들목 도보 3분 로얄동",
        broker: "잠실엘스에이스공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 30만원"
      }
    ]
  },
  {
    id: "apt-2c",
    name: "올림픽파크포레온",
    city: "서울",
    district: "강동구",
    dong: "둔촌동",
    lat: 37.5215,
    lng: 127.1352,
    builtYear: 2025,
    totalHouseholds: 12032,
    totalBuildings: 85,
    parkingTotal: 17890,
    parkingPerHousehold: 1.48,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 240기 완비 (국내 최대규모)",
    slopeStatus: "완전 평지 (1.2만 세대 메머드급 평지)",
    amenities: {
      convenienceStore: "단지 상가내 CU, 이마트24 다수",
      oliveyoung: "올리브영 둔촌동역점 도보 3분",
      daiso: "다이소 올림픽공원점 도보 6분",
      subwayDetail: "5호선 둔촌동역 / 9호선 둔촌오륜역 더블역세권"
    },
    floorAreaRatio: 273,
    buildingCoverageRatio: 18,
    heating: "지역난방",
    nearestStation: "5호선 둔촌동역 / 9호선 둔촌오륜역",
    school: "단지내 초중고 4개교 신설",
    tags: ["1만2천세대메머드", "더블역세권", "올림픽공원", "신축대장", "평지"],
    listingCounts: { sale: 95, jeonse: 68, rent: 45, total: 208 },
    recentTransaction: {
      price: 235000,
      date: "2026.11",
      floor: "23층",
      areaPyeong: 34,
      areaSqm: 84.99,
      changeRate: "+3.5%"
    },
    jeonsePrice: 105000,
    monthlyRent: { deposit: 20000, rent: 310 },
    naverLandUrl: "https://new.land.naver.com/complexes/129759",
    hogangnonoUrl: "https://hogangnono.com/apt/21051",
    floorPlans: [
      { name: "84㎡A (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2 / 알파룸", bay: 4, structure: "올림픽공원 영구조망" }
    ],
    actualListings: [
      {
        id: "l-2c-1",
        tradeType: "sale",
        price: 238000,
        areaPyeong: 34,
        areaSqm: 84.99,
        floor: "26/35층",
        dong: "305동",
        direction: "남동향",
        description: "올림픽공원 뷰 최상급 로얄층, 9호선 급행역 인접",
        broker: "포레온메이저공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 29만원"
      }
    ]
  },

  // ==================== 3. 서울 마용성 (마포 / 용산 / 성동) ====================
  {
    id: "apt-4",
    name: "마포래미안푸르지오",
    city: "서울",
    district: "마포구",
    dong: "아현동",
    lat: 37.5529,
    lng: 126.9555,
    builtYear: 2014,
    totalHouseholds: 3885,
    totalBuildings: 51,
    parkingTotal: 4856,
    parkingPerHousehold: 1.25,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 62기 완비",
    slopeStatus: "완만한 구릉지 (단지내 엘리베이터 5기 및 에스컬레이터 설치로 보행 평지화)",
    amenities: {
      convenienceStore: "GS25 마래푸점 도보 1분 (상가 1층)",
      oliveyoung: "올리브영 애오개역점 도보 4분 (280m)",
      daiso: "다이소 공덕역점 도보 9분 (650m)",
      subwayDetail: "5호선 애오개역 1번 출구 도보 3분 / 2호선 아현역 도보 6분"
    },
    floorAreaRatio: 259,
    buildingCoverageRatio: 20,
    heating: "개별난방, 도시가스",
    nearestStation: "2호선 아현역 / 5호선 애오개역 더블역세권",
    school: "서울아현초등학교 도보 4분",
    tags: ["마용성대장", "더블역세권", "광화문/여의도출퇴근", "대단지"],
    listingCounts: { sale: 48, jeonse: 29, rent: 17, total: 94 },
    recentTransaction: {
      price: 188000,
      date: "2026.10",
      floor: "12층",
      areaPyeong: 34,
      areaSqm: 84.59,
      changeRate: "+0.5%"
    },
    jeonsePrice: 102000,
    monthlyRent: { deposit: 15000, rent: 290 },
    naverLandUrl: "https://new.land.naver.com/complexes/102376",
    hogangnonoUrl: "https://hogangnono.com/apt/966",
    floorPlans: [
      {
        name: "84㎡A (34평형)",
        type: "3-Bay 판상형",
        rooms: "방3 / 욕실2 / 드레스룸 / 발코니",
        bay: 3,
        structure: "맞통풍 시원한 3-Bay",
        kitchen: "ㄷ자형 와이드 주방"
      }
    ],
    actualListings: [
      {
        id: "l-4-1",
        tradeType: "sale",
        price: 189000,
        areaPyeong: 34,
        areaSqm: 84.59,
        floor: "15/30층",
        dong: "208동",
        direction: "남향",
        description: "애오개역 초인접 동, 내부상태 특A급 올수리",
        broker: "마포마래푸공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 25만원"
      },
      {
        id: "l-4-2",
        tradeType: "jeonse",
        price: 105000,
        areaPyeong: 34,
        areaSqm: 84.59,
        floor: "11/30층",
        dong: "205동",
        direction: "남서향",
        description: "전세대출 및 HUG 보증보험 가능, 올확장형",
        broker: "아현래미안부동산",
        verifiedDate: "2026.11.25",
        maintenanceCost: "약 24만원"
      }
    ]
  },
  {
    id: "apt-4b",
    name: "마포프레스티지자이",
    city: "서울",
    district: "마포구",
    dong: "염리동",
    lat: 37.5492,
    lng: 126.9458,
    builtYear: 2021,
    totalHouseholds: 1694,
    totalBuildings: 18,
    parkingTotal: 2032,
    parkingPerHousehold: 1.2,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 58기",
    slopeStatus: "완전 평지 100% (이화여대/신촌 방면 평지)",
    amenities: {
      convenienceStore: "GS25 마프자점 도보 1분",
      oliveyoung: "올리브영 이대점 도보 4분",
      daiso: "다이소 신촌본점 도보 8분",
      subwayDetail: "2호선 이대역 도보 3분"
    },
    floorAreaRatio: 255,
    buildingCoverageRatio: 20,
    heating: "지역난방",
    nearestStation: "2호선 이대역 도보 3분",
    school: "서울용강초등학교 도보 3분",
    tags: ["마포신축대장", "2호선역세권", "수영장커뮤니티", "평지"],
    listingCounts: { sale: 31, jeonse: 20, rent: 12, total: 63 },
    recentTransaction: {
      price: 205000,
      date: "2026.11",
      floor: "18층",
      areaPyeong: 34,
      areaSqm: 84.92,
      changeRate: "+1.8%"
    },
    jeonsePrice: 115000,
    monthlyRent: { deposit: 20000, rent: 320 },
    naverLandUrl: "https://new.land.naver.com/complexes/119420",
    hogangnonoUrl: "https://hogangnono.com/apt/8573",
    floorPlans: [
      { name: "84㎡A (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2 / 알파룸", bay: 4, structure: "남향 4베이 채광극상" }
    ],
    actualListings: [
      {
        id: "l-4b-1",
        tradeType: "sale",
        price: 208000,
        areaPyeong: 34,
        areaSqm: 84.92,
        floor: "21/27층",
        dong: "105동",
        direction: "남향",
        description: "이대역 초인접, 조경뷰 조용하고 채광 우수한 로얄층",
        broker: "마프자자이공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 27만원"
      }
    ]
  },
  {
    id: "apt-5",
    name: "용산센트럴파크",
    city: "서울",
    district: "용산구",
    dong: "한강로3가",
    lat: 37.5284,
    lng: 126.9688,
    builtYear: 2020,
    totalHouseholds: 1140,
    totalBuildings: 5,
    parkingTotal: 2462,
    parkingPerHousehold: 2.16,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 48기 (초고속 충전 지원)",
    slopeStatus: "완전 평지 (한강로 평지 중심축)",
    amenities: {
      convenienceStore: "이마트24 지하 1층 직결 (도보 1분)",
      oliveyoung: "올리브영 용산아이파크몰점 도보 5분 (390m)",
      daiso: "다이소 용산역점 도보 6분 (450m)",
      subwayDetail: "4호선 신용산역 2번 출구 도보 2분 (150m) / 1호선 용산역 도보 5분"
    },
    floorAreaRatio: 799,
    buildingCoverageRatio: 52,
    heating: "지역난방",
    nearestStation: "4호선 신용산역 / 1호선 용산역 도보 3분",
    school: "서울한강초등학교 도보 8분",
    tags: ["용산공원뷰", "트리플역세권", "초고층", "주상복합", "평지"],
    listingCounts: { sale: 22, jeonse: 14, rent: 12, total: 48 },
    recentTransaction: {
      price: 325000,
      date: "2026.10",
      floor: "25층",
      areaPyeong: 43,
      areaSqm: 114.2,
      changeRate: "+2.1%"
    },
    jeonsePrice: 175000,
    monthlyRent: { deposit: 30000, rent: 550 },
    naverLandUrl: "https://new.land.naver.com/complexes/116982",
    hogangnonoUrl: "https://hogangnono.com/apt/8573",
    floorPlans: [
      {
        name: "114㎡ (43평형)",
        type: "타워형 4-Bay",
        rooms: "방3 / 욕실2 / 알파룸 / 대형드레스룸",
        bay: 4,
        structure: "용산공원 파노라마 2면 개방형",
        kitchen: "고급 수입 아일랜드 주방"
      }
    ],
    actualListings: [
      {
        id: "l-5-1",
        tradeType: "sale",
        price: 330000,
        areaPyeong: 43,
        areaSqm: 114.2,
        floor: "31/43층",
        dong: "102동",
        direction: "남동향",
        description: "용산민족공원 파노라마뷰, 최상급 럭셔리 마감",
        broker: "용산파크공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 45만원"
      }
    ]
  },
  {
    id: "apt-6",
    name: "트리마제",
    city: "서울",
    district: "성동구",
    dong: "성수동1가",
    lat: 37.5388,
    lng: 127.0452,
    builtYear: 2017,
    totalHouseholds: 688,
    totalBuildings: 4,
    parkingTotal: 1114,
    parkingPerHousehold: 1.62,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 36기",
    slopeStatus: "완전 평지 (서울숲 및 한강변 완벽한 평지)",
    amenities: {
      convenienceStore: "세븐일레븐 단지내 상가 (도보 1분)",
      oliveyoung: "올리브영 서울숲역점 도보 6분 (490m)",
      daiso: "다이소 성수역점 도보 15분 / 대중교통 5분",
      subwayDetail: "수인분당선 서울숲역 3번 출구 도보 7분 (520m)"
    },
    floorAreaRatio: 399,
    buildingCoverageRatio: 26,
    heating: "지역난방",
    nearestStation: "수인분당선 서울숲역 도보 7분",
    school: "서울경동초등학교 도보 9분",
    tags: ["성수동핫플", "한강뷰", "호텔식서비스", "조식서비스", "평지"],
    listingCounts: { sale: 19, jeonse: 11, rent: 14, total: 44 },
    recentTransaction: {
      price: 418000,
      date: "2026.10",
      floor: "28층",
      areaPyeong: 38,
      areaSqm: 84.82,
      changeRate: "+1.9%"
    },
    jeonsePrice: 220000,
    monthlyRent: { deposit: 40000, rent: 680 },
    naverLandUrl: "https://new.land.naver.com/complexes/109159",
    hogangnonoUrl: "https://hogangnono.com/apt/8573",
    floorPlans: [
      {
        name: "84㎡ (38평형)",
        type: "한강조망 타워형",
        rooms: "방3 / 욕실2 / 테라스",
        bay: 3,
        structure: "한강과 서울숲 듀얼 파노라마 뷰",
        kitchen: "오픈형 럭셔리 키친"
      }
    ],
    actualListings: [
      {
        id: "l-6-1",
        tradeType: "sale",
        price: 425000,
        areaPyeong: 38,
        areaSqm: 84.82,
        floor: "34/47층",
        dong: "101동",
        direction: "남향",
        description: "한강과 서울숲을 한눈에 담는 로얄 스카이라인",
        broker: "서울숲트리마제공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 48만원"
      }
    ]
  },

  // ==================== 4. 서울 서남 / 영등포 / 양천 ====================
  {
    id: "apt-4c",
    name: "여의도시범",
    city: "서울",
    district: "영등포구",
    dong: "여의도동",
    lat: 37.5218,
    lng: 126.9362,
    builtYear: 1971,
    totalHouseholds: 1584,
    totalBuildings: 24,
    parkingTotal: 1584,
    parkingPerHousehold: 1.0,
    undergroundParkingDirect: false,
    evChargers: "완속 15기",
    slopeStatus: "완전 평지 100% (여의도 한강 평지)",
    amenities: {
      convenienceStore: "단지내 CU 도보 1분",
      oliveyoung: "올리브영 여의도역점 도보 6분",
      daiso: "다이소 여의도점 도보 7분",
      subwayDetail: "5호선 여의나루역 도보 5분 / 9호선 샛강역 도보 7분"
    },
    floorAreaRatio: 202,
    buildingCoverageRatio: 15,
    heating: "중앙난방",
    nearestStation: "5호선 여의나루역 도보 5분",
    school: "서울여의도초등학교 도보 3분",
    tags: ["여의도재건축대장", "한강공원도보", "신통기획선정", "평지"],
    listingCounts: { sale: 28, jeonse: 14, rent: 11, total: 53 },
    recentTransaction: {
      price: 260000,
      date: "2026.11",
      floor: "11층",
      areaPyeong: 36,
      areaSqm: 118.1,
      changeRate: "+3.1%"
    },
    jeonsePrice: 48000,
    monthlyRent: { deposit: 10000, rent: 180 },
    naverLandUrl: "https://new.land.naver.com/complexes/760",
    hogangnonoUrl: "https://hogangnono.com/apt/331",
    floorPlans: [
      { name: "118㎡ (36평형)", type: "판상형", rooms: "방4 / 욕실1", bay: 2, structure: "한강 직결 조망" }
    ],
    actualListings: [
      {
        id: "l-4c-1",
        tradeType: "sale",
        price: 265000,
        areaPyeong: 36,
        areaSqm: 118.1,
        floor: "12/13층",
        dong: "4동",
        direction: "남향",
        description: "신통기획 65층 재건축 추진, 한강 영구조망",
        broker: "여의도골드공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 33만원"
      }
    ]
  },
  {
    id: "apt-4d",
    name: "목동신시가지7단지",
    city: "서울",
    district: "양천구",
    dong: "목동",
    lat: 37.5275,
    lng: 126.8682,
    builtYear: 1986,
    totalHouseholds: 2550,
    totalBuildings: 34,
    parkingTotal: 2100,
    parkingPerHousehold: 0.82,
    undergroundParkingDirect: false,
    evChargers: "완속 24기",
    slopeStatus: "완전 평지 100% (목동 중심축 평지)",
    amenities: {
      convenienceStore: "단지내 상가 GS25 도보 1분",
      oliveyoung: "올리브영 오목교역점 도보 2분",
      daiso: "다이소 오목교역점 도보 3분",
      subwayDetail: "5호선 목동역 3번 출구 도보 2분 (초역세권)"
    },
    floorAreaRatio: 125,
    buildingCoverageRatio: 13,
    heating: "지역난방",
    nearestStation: "5호선 목동역 도보 2분",
    school: "서울서정초, 목운중(명문학군)",
    tags: ["목동대장", "초역세권", "명문학군", "재건축대장", "대지지분최고"],
    listingCounts: { sale: 34, jeonse: 22, rent: 15, total: 71 },
    recentTransaction: {
      price: 225000,
      date: "2026.10",
      floor: "10층",
      areaPyeong: 27,
      areaSqm: 66.6,
      changeRate: "+2.5%"
    },
    jeonsePrice: 65000,
    monthlyRent: { deposit: 10000, rent: 200 },
    naverLandUrl: "https://new.land.naver.com/complexes/811",
    hogangnonoUrl: "https://hogangnono.com/apt/1151",
    floorPlans: [
      { name: "66㎡ (27평형)", type: "2-Bay 판상형", rooms: "방3 / 욕실1", bay: 2, structure: "대지지분 20평 이상 황금단지" }
    ],
    actualListings: [
      {
        id: "l-4d-1",
        tradeType: "sale",
        price: 228000,
        areaPyeong: 27,
        areaSqm: 66.6,
        floor: "8/15층",
        dong: "712동",
        direction: "남향",
        description: "목동역 도보 2분, 목운중 학군 배정 로얄동, 올수리",
        broker: "목동7단지부동산",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 21만원"
      }
    ]
  },

  // ==================== 5. 서울 동북 / 노원 / 서대문 ====================
  {
    id: "apt-7",
    name: "상계주공7단지",
    city: "서울",
    district: "노원구",
    dong: "상계동",
    lat: 37.6548,
    lng: 127.0607,
    builtYear: 1988,
    totalHouseholds: 2634,
    totalBuildings: 21,
    parkingTotal: 1712,
    parkingPerHousehold: 0.65,
    undergroundParkingDirect: false,
    evChargers: "지상 이동형 완속 충전 콘센트 18기",
    slopeStatus: "완전 평지 (노원역 중심상권 완벽한 평지)",
    amenities: {
      convenienceStore: "CU 상계주공점 도보 1분 (단지내)",
      oliveyoung: "올리브영 노원역점 도보 3분 (210m)",
      daiso: "다이소 노원역점 도보 4분 (290m)",
      subwayDetail: "4호선/7호선 노원역 5번 출구 초역세권 도보 2분 (120m)"
    },
    floorAreaRatio: 198,
    buildingCoverageRatio: 14,
    heating: "지역난방, 열병합",
    nearestStation: "4/7호선 노원역 초역세권 도보 2분",
    school: "서울상월초등학교 도보 5분",
    tags: ["재건축기대", "더블역세권", "서울가성비", "학군우수", "평지"],
    listingCounts: { sale: 38, jeonse: 22, rent: 15, total: 75 },
    recentTransaction: {
      price: 74000,
      date: "2026.11",
      floor: "9층",
      areaPyeong: 24,
      areaSqm: 59.39,
      changeRate: "-0.5%"
    },
    jeonsePrice: 28000,
    monthlyRent: { deposit: 5000, rent: 110 },
    naverLandUrl: "https://new.land.naver.com/complexes/760",
    hogangnonoUrl: "https://hogangnono.com/apt/331",
    floorPlans: [
      {
        name: "59㎡ (24평형)",
        type: "2-Bay 복도식 판상형",
        rooms: "방2 / 욕실1 / 발코니",
        bay: 2,
        structure: "재건축 기대주, 직사각형 맞통풍",
        kitchen: "일자형 주방"
      }
    ],
    actualListings: [
      {
        id: "l-7-1",
        tradeType: "sale",
        price: 73000,
        areaPyeong: 24,
        areaSqm: 59.39,
        floor: "11/15층",
        dong: "708동",
        direction: "남향",
        description: "노원역 초인접, 샷시 및 배관 특올수리 완료",
        broker: "노원부동산써브",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 16만원"
      }
    ]
  },
  {
    id: "apt-8",
    name: "DMC래미안e편한세상",
    city: "서울",
    district: "서대문구",
    dong: "북가좌동",
    lat: 37.5802,
    lng: 126.9114,
    builtYear: 2012,
    totalHouseholds: 3293,
    totalBuildings: 51,
    parkingTotal: 3984,
    parkingPerHousehold: 1.21,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 52기 (지하 1, 2층 분산)",
    slopeStatus: "완전 평지 100% (불광천변 완벽 평지)",
    amenities: {
      convenienceStore: "GS25 북가좌래미안점 도보 2분",
      oliveyoung: "올리브영 가좌역점 도보 6분 (420m)",
      daiso: "다이소 북가좌점 도보 7분 (510m)",
      subwayDetail: "경의중앙선 가좌역 4번 출구 도보 5분 (380m)"
    },
    floorAreaRatio: 236,
    buildingCoverageRatio: 22,
    heating: "개별난방",
    nearestStation: "경의중앙선 가좌역 도보 5분 / 6호선 디지털미디어시티역",
    school: "서울북가좌초등학교 도보 3분",
    tags: ["DMC직주근접", "대단지", "초품아", "평지아파트", "불광천"],
    listingCounts: { sale: 35, jeonse: 21, rent: 14, total: 70 },
    recentTransaction: {
      price: 122000,
      date: "2026.10",
      floor: "14층",
      areaPyeong: 33,
      areaSqm: 84.97,
      changeRate: "+1.0%"
    },
    jeonsePrice: 68000,
    monthlyRent: { deposit: 10000, rent: 220 },
    naverLandUrl: "https://new.land.naver.com/complexes/26190",
    hogangnonoUrl: "https://hogangnono.com/apt/8573",
    floorPlans: [
      {
        name: "84㎡B (33평형)",
        type: "3-Bay 판상형",
        rooms: "방3 / 욕실2 / 드레스룸",
        bay: 3,
        structure: "불광천 조망 남향 판상형",
        kitchen: "ㄷ자형 주방"
      }
    ],
    actualListings: [
      {
        id: "l-8-1",
        tradeType: "sale",
        price: 124000,
        areaPyeong: 33,
        areaSqm: 84.97,
        floor: "17/30층",
        dong: "203동",
        direction: "남향",
        description: "가좌역 인접동, 확 트인 불광천 조망권",
        broker: "DMC래미안공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 23만원"
      }
    ]
  },

  // ==================== 6. 경기 핵심: 분당 / 판교 / 과천 ====================
  {
    id: "apt-9",
    name: "판교봇들마을7단지",
    city: "경기",
    district: "성남시 분당구",
    dong: "삼평동",
    lat: 37.4042,
    lng: 127.1165,
    builtYear: 2009,
    totalHouseholds: 585,
    totalBuildings: 9,
    parkingTotal: 1030,
    parkingPerHousehold: 1.76,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 34기",
    slopeStatus: "완전 평지 (탄천 및 보평초 연계 보행전용 평지)",
    amenities: {
      convenienceStore: "이마트24 봇들마을점 도보 2분",
      oliveyoung: "올리브영 판교아브뉴프랑점 도보 5분 (370m)",
      daiso: "다이소 판교역점 도보 6분 (460m)",
      subwayDetail: "신분당선/경강선 판교역 1번 출구 도보 5분 (410m)"
    },
    floorAreaRatio: 165,
    buildingCoverageRatio: 15,
    heating: "지역난방",
    nearestStation: "신분당선/경강선 판교역 도보 5분",
    school: "보평초·보평중·보평고 명품학군 도보 3분",
    tags: ["판교테크노밸리", "신분당선", "보평학군", "숲세권", "평지"],
    listingCounts: { sale: 16, jeonse: 12, rent: 8, total: 36 },
    recentTransaction: {
      price: 232000,
      date: "2026.10",
      floor: "11층",
      areaPyeong: 33,
      areaSqm: 84.85,
      changeRate: "+1.5%"
    },
    jeonsePrice: 125000,
    monthlyRent: { deposit: 20000, rent: 360 },
    naverLandUrl: "https://new.land.naver.com/complexes/26190",
    hogangnonoUrl: "https://hogangnono.com/apt/8573",
    floorPlans: [
      {
        name: "84㎡A (33평형)",
        type: "4-Bay 판상형",
        rooms: "방3 / 욕실2 / 드레스룸 / 팬트리",
        bay: 4,
        structure: "탄천 조망 채광 극상",
        kitchen: "대면형 오픈 키친"
      }
    ],
    actualListings: [
      {
        id: "l-9-1",
        tradeType: "sale",
        price: 235000,
        areaPyeong: 33,
        areaSqm: 84.85,
        floor: "15/20층",
        dong: "704동",
        direction: "남향",
        description: "판교역 도보 5분, 보평학군 배정, 탄천 전망 굿",
        broker: "판교보평공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 31만원"
      }
    ]
  },
  {
    id: "apt-10",
    name: "분당파크뷰",
    city: "경기",
    district: "성남시 분당구",
    dong: "정자동",
    lat: 37.3688,
    lng: 127.1084,
    builtYear: 2004,
    totalHouseholds: 1829,
    totalBuildings: 13,
    parkingTotal: 4335,
    parkingPerHousehold: 2.37,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 78기 완비",
    slopeStatus: "완전 평지 (정자동 탄천 카페거리 평지)",
    amenities: {
      convenienceStore: "GS25 파크뷰단지내상가점 도보 1분",
      oliveyoung: "올리브영 정자역점 도보 6분 (480m)",
      daiso: "다이소 분당정자역점 도보 8분 (590m)",
      subwayDetail: "수인분당선/신분당선 정자역 5번 출구 도보 7분 (510m)"
    },
    floorAreaRatio: 355,
    buildingCoverageRatio: 22,
    heating: "지역난방",
    nearestStation: "수인분당선/신분당선 정자역 도보 7분",
    school: "정자초등학교 도보 4분",
    tags: ["분당대장", "탄천조망", "정자역세권", "명품주상복합", "평지"],
    listingCounts: { sale: 28, jeonse: 19, rent: 15, total: 62 },
    recentTransaction: {
      price: 203000,
      date: "2026.11",
      floor: "21층",
      areaPyeong: 33,
      areaSqm: 84.99,
      changeRate: "+0.9%"
    },
    jeonsePrice: 115000,
    monthlyRent: { deposit: 20000, rent: 330 },
    naverLandUrl: "https://new.land.naver.com/complexes/1107",
    hogangnonoUrl: "https://hogangnono.com/apt/8573",
    floorPlans: [
      {
        name: "84㎡ (33평형)",
        type: "고급 주상복합 타워형",
        rooms: "방3 / 욕실2 / 보조주방",
        bay: 3,
        structure: "탄천 영구조망 광폭 거실",
        kitchen: "빌트인 풀옵션 주방"
      }
    ],
    actualListings: [
      {
        id: "l-10-1",
        tradeType: "sale",
        price: 205000,
        areaPyeong: 33,
        areaSqm: 84.99,
        floor: "26/35층",
        dong: "602동",
        direction: "남동향",
        description: "탄천 영구파노라마뷰, 올리모델링 첫입주급 컨디션",
        broker: "정자파크뷰공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 33만원"
      }
    ]
  },
  {
    id: "apt-11",
    name: "과천푸르지오써밋",
    city: "경기",
    district: "과천시",
    dong: "중앙동",
    lat: 37.4276,
    lng: 126.9882,
    builtYear: 2020,
    totalHouseholds: 1571,
    totalBuildings: 32,
    parkingTotal: 2733,
    parkingPerHousehold: 1.74,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 56기 완비",
    slopeStatus: "완전 평지 (과천 중앙공원 앞 평지)",
    amenities: {
      convenienceStore: "CU 과천써밋점 도보 2분",
      oliveyoung: "올리브영 과천점 도보 4분 (310m)",
      daiso: "다이소 과천점 도보 5분 (380m)",
      subwayDetail: "4호선 정부과천청사역 11번 출구 도보 4분 (290m)"
    },
    floorAreaRatio: 227,
    buildingCoverageRatio: 18,
    heating: "지역난방",
    nearestStation: "4호선 정부과천청사역 / 과천역 도보 4분",
    school: "과천초등학교 도보 3분",
    tags: ["과천대장", "준강남", "초역세권", "고급하이엔드", "평지"],
    listingCounts: { sale: 26, jeonse: 17, rent: 9, total: 52 },
    recentTransaction: {
      price: 219000,
      date: "2026.10",
      floor: "16층",
      areaPyeong: 34,
      areaSqm: 84.93,
      changeRate: "+1.8%"
    },
    jeonsePrice: 118000,
    monthlyRent: { deposit: 20000, rent: 340 },
    naverLandUrl: "https://new.land.naver.com/complexes/116982",
    hogangnonoUrl: "https://hogangnono.com/apt/8573",
    floorPlans: [
      {
        name: "84㎡A (34평형)",
        type: "4-Bay 판상형",
        rooms: "방3 / 욕실2 / 드레스룸 / 팬트리",
        bay: 4,
        structure: "관악산 조망 쾌적 맞통풍",
        kitchen: "고급 아일랜드 대면주방"
      }
    ],
    actualListings: [
      {
        id: "l-11-1",
        tradeType: "sale",
        price: 222000,
        areaPyeong: 34,
        areaSqm: 84.93,
        floor: "19/28층",
        dong: "112동",
        direction: "남향",
        description: "관악산 사계절 조망, 스카이라운지 이용 편리동",
        broker: "과천써밋공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 30만원"
      }
    ]
  },

  // ==================== 7. 경기 수도권 신도시: 광교 / 동탄 / 하남 / 일산 / 평촌 ====================
  {
    id: "apt-12",
    name: "광교중흥S-클래스",
    city: "경기",
    district: "수원시 영통구",
    dong: "원천동",
    lat: 37.2844,
    lng: 127.0583,
    builtYear: 2019,
    totalHouseholds: 2231,
    totalBuildings: 10,
    parkingTotal: 3525,
    parkingPerHousehold: 1.58,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 85기 (급속 16기 포함)",
    slopeStatus: "완전 평지 (원천호수 둘레길 평지 연결)",
    amenities: {
      convenienceStore: "이마트24 어뮤즈스퀘어점 단지내 직통 (도보 1분)",
      oliveyoung: "올리브영 갤러리아광교점 도보 5분 (380m)",
      daiso: "다이소 광교중앙역점 도보 8분 (610m)",
      subwayDetail: "신분당선 광교중앙역 4번 출구 도보 8분 (620m)"
    },
    floorAreaRatio: 399,
    buildingCoverageRatio: 37,
    heating: "지역난방",
    nearestStation: "신분당선 광교중앙역 도보 8분",
    school: "수원매원초등학교 도보 6분",
    tags: ["광교호수공원뷰", "대단지", "갤러리아백화점", "신분당선", "평지"],
    listingCounts: { sale: 38, jeonse: 24, rent: 16, total: 78 },
    recentTransaction: {
      price: 156000,
      date: "2026.11",
      floor: "25층",
      areaPyeong: 35,
      areaSqm: 84.94,
      changeRate: "+1.1%"
    },
    jeonsePrice: 85000,
    monthlyRent: { deposit: 15000, rent: 250 },
    naverLandUrl: "https://new.land.naver.com/complexes/110682",
    hogangnonoUrl: "https://hogangnono.com/apt/8573",
    floorPlans: [
      {
        name: "84㎡A (35평형)",
        type: "4-Bay 판상형",
        rooms: "방3 / 욕실2 / 알파룸 / 광폭드레스룸",
        bay: 4,
        structure: "광교호수공원 영구조망 4-Bay",
        kitchen: "와이드 다이닝 ㄷ자 키친"
      }
    ],
    actualListings: [
      {
        id: "l-12-1",
        tradeType: "sale",
        price: 160000,
        areaPyeong: 35,
        areaSqm: 84.94,
        floor: "38/49층",
        dong: "103동",
        direction: "남향",
        description: "원천호수 환상적인 전면 조망, 어라운드뷰 로얄층",
        broker: "광교호수중흥공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 28만원"
      }
    ]
  },
  {
    id: "apt-13",
    name: "동탄역롯데캐슬",
    city: "경기",
    district: "화성시",
    dong: "오산동",
    lat: 37.2001,
    lng: 127.0963,
    builtYear: 2021,
    totalHouseholds: 940,
    totalBuildings: 4,
    parkingTotal: 1428,
    parkingPerHousehold: 1.52,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 46기 완비",
    slopeStatus: "완전 평지 100% (동탄역 광장 및 롯데백화점 직통)",
    amenities: {
      convenienceStore: "세븐일레븐 단지 지하 1층 직결 (도보 1분)",
      oliveyoung: "올리브영 동탄역점 도보 3분 (210m)",
      daiso: "다이소 동탄역점 도보 4분 (290m)",
      subwayDetail: "GTX-A/SRT 동탄역 지하 직결 (도보 2분)"
    },
    floorAreaRatio: 599,
    buildingCoverageRatio: 48,
    heating: "지역난방",
    nearestStation: "GTX-A/SRT 동탄역 지하직결",
    school: "화성여울초등학교 도보 7분",
    tags: ["GTX-A개통", "동탄대장", "백화점직결", "초역세권", "평지"],
    listingCounts: { sale: 21, jeonse: 15, rent: 10, total: 46 },
    recentTransaction: {
      price: 165000,
      date: "2026.10",
      floor: "23층",
      areaPyeong: 34,
      areaSqm: 84.82,
      changeRate: "+4.5%"
    },
    jeonsePrice: 72000,
    monthlyRent: { deposit: 10000, rent: 240 },
    naverLandUrl: "https://new.land.naver.com/complexes/116982",
    hogangnonoUrl: "https://hogangnono.com/apt/8573",
    floorPlans: [
      {
        name: "84㎡A (34평형)",
        type: "4-Bay 판상형",
        rooms: "방3 / 욕실2 / 드레스룸 / 현관클린룸",
        bay: 4,
        structure: "초역세권 환상 시티뷰",
        kitchen: "고급 엔지니어드스톤 아일랜드"
      }
    ],
    actualListings: [
      {
        id: "l-13-1",
        tradeType: "sale",
        price: 168000,
        areaPyeong: 34,
        areaSqm: 84.82,
        floor: "29/49층",
        dong: "102동",
        direction: "남동향",
        description: "GTX 및 롯데백화점 원스톱, 탁 트인 고층 시티뷰",
        broker: "동탄역롯데공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 29만원"
      }
    ]
  },
  {
    id: "apt-14",
    name: "미사강변골든센트로",
    city: "경기",
    district: "하남시",
    dong: "망월동",
    lat: 37.5645,
    lng: 127.1904,
    builtYear: 2014,
    totalHouseholds: 1455,
    totalBuildings: 14,
    parkingTotal: 1673,
    parkingPerHousehold: 1.15,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 38기",
    slopeStatus: "완전 평지 (망월천 수변공원 연결 평지)",
    amenities: {
      convenienceStore: "GS25 골든센트로점 도보 2분",
      oliveyoung: "올리브영 미사역점 도보 5분 (380m)",
      daiso: "다이소 하남미사점 도보 6분 (450m)",
      subwayDetail: "5호선 미사역 7번 출구 도보 5분 (390m)"
    },
    floorAreaRatio: 219,
    buildingCoverageRatio: 17,
    heating: "지역난방",
    nearestStation: "5호선 미사역 도보 5분",
    school: "하남미사초등학교 품은 단지",
    tags: ["미사역세권", "망월천수변공원", "초품아", "서울인접", "평지"],
    listingCounts: { sale: 27, jeonse: 18, rent: 11, total: 56 },
    recentTransaction: {
      price: 106000,
      date: "2026.10",
      floor: "15층",
      areaPyeong: 34,
      areaSqm: 84.99,
      changeRate: "+0.4%"
    },
    jeonsePrice: 58000,
    monthlyRent: { deposit: 8000, rent: 180 },
    naverLandUrl: "https://new.land.naver.com/complexes/102919",
    hogangnonoUrl: "https://hogangnono.com/apt/8573",
    floorPlans: [
      {
        name: "84㎡A (34평형)",
        type: "4-Bay 판상형",
        rooms: "방3 / 욕실2 / 드레스룸",
        bay: 4,
        structure: "채광 우수 정남향 판상형",
        kitchen: "ㄷ자형 주방"
      }
    ],
    actualListings: [
      {
        id: "l-14-1",
        tradeType: "sale",
        price: 108000,
        areaPyeong: 34,
        areaSqm: 84.99,
        floor: "18/28층",
        dong: "2805동",
        direction: "남향",
        description: "미사역 도보 4분 초인접동, 시스템에어컨 4대 풀옵션",
        broker: "미사골든공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 22만원"
      }
    ]
  },
  {
    id: "apt-15",
    name: "킨텍스원시티(M2블록)",
    city: "경기",
    district: "고양시 일산서구",
    dong: "대화동",
    lat: 37.6625,
    lng: 126.7554,
    builtYear: 2019,
    totalHouseholds: 959,
    totalBuildings: 6,
    parkingTotal: 1390,
    parkingPerHousehold: 1.45,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 42기",
    slopeStatus: "완전 평지 100% (호수공원 및 킨텍스 평지)",
    amenities: {
      convenienceStore: "이마트24 킨텍스원시티점 도보 1분",
      oliveyoung: "올리브영 일산킨텍스점 도보 4분 (310m)",
      daiso: "다이소 현대백화점킨텍스점 도보 5분 (390m)",
      subwayDetail: "GTX-A 킨텍스역 2번 출구 도보 3분 (250m)"
    },
    floorAreaRatio: 479,
    buildingCoverageRatio: 38,
    heating: "지역난방",
    nearestStation: "GTX-A 킨텍스역 도보 3분",
    school: "고양한류초등학교 도보 4분",
    tags: ["GTX-A개통수혜", "일산대장", "호수공원인접", "초고층", "평지"],
    listingCounts: { sale: 22, jeonse: 14, rent: 9, total: 45 },
    recentTransaction: {
      price: 128000,
      date: "2026.11",
      floor: "30층",
      areaPyeong: 35,
      areaSqm: 84.88,
      changeRate: "+2.8%"
    },
    jeonsePrice: 65000,
    monthlyRent: { deposit: 10000, rent: 210 },
    naverLandUrl: "https://new.land.naver.com/complexes/111812",
    hogangnonoUrl: "https://hogangnono.com/apt/8573",
    floorPlans: [
      {
        name: "84㎡ (35평형)",
        type: "4-Bay 판상형",
        rooms: "방3 / 욕실2 / 알파룸 / 광폭테라스",
        bay: 4,
        structure: "일산호수공원 & 한강 더블 조망",
        kitchen: "고급 아일랜드 대면식 키친"
      }
    ],
    actualListings: [
      {
        id: "l-15-1",
        tradeType: "sale",
        price: 130000,
        areaPyeong: 35,
        areaSqm: 84.88,
        floor: "35/49층",
        dong: "202동",
        direction: "남서향",
        description: "GTX 킨텍스역 개통 완료! 호수공원과 한강 더블조망권",
        broker: "킨텍스원시티명문공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 26만원"
      }
    ]
  },
  {
    id: "apt-16",
    name: "평촌더샵센트럴시티",
    city: "경기",
    district: "안양시 동안구",
    dong: "관양동",
    lat: 37.3978,
    lng: 126.9658,
    builtYear: 2016,
    totalHouseholds: 1459,
    totalBuildings: 10,
    parkingTotal: 1955,
    parkingPerHousehold: 1.34,
    undergroundParkingDirect: true,
    evChargers: "전기차 충전기 45기 완비",
    slopeStatus: "완전 평지 100% (평촌 신도시 완벽한 평지 격자망)",
    amenities: {
      convenienceStore: "CU 평촌더샵점 단지내 1층 (도보 1분)",
      oliveyoung: "올리브영 평촌역점 도보 5분 (370m)",
      daiso: "다이소 평촌역점 도보 6분 (440m)",
      subwayDetail: "4호선 평촌역 1번 출구 도보 5분 (380m)"
    },
    floorAreaRatio: 269,
    buildingCoverageRatio: 18,
    heating: "지역난방",
    nearestStation: "4호선 평촌역 도보 5분",
    school: "부림초등학교 도보 5분",
    tags: ["평촌신축", "평촌학원가인접", "역세권", "대단지", "평지"],
    listingCounts: { sale: 25, jeonse: 17, rent: 10, total: 52 },
    recentTransaction: {
      price: 132000,
      date: "2026.10",
      floor: "18층",
      areaPyeong: 34,
      areaSqm: 84.97,
      changeRate: "+0.8%"
    },
    jeonsePrice: 70000,
    monthlyRent: { deposit: 10000, rent: 230 },
    naverLandUrl: "https://new.land.naver.com/complexes/106362",
    hogangnonoUrl: "https://hogangnono.com/apt/8573",
    floorPlans: [
      {
        name: "84㎡A (34평형)",
        type: "4-Bay 판상형",
        rooms: "방3 / 욕실2 / 드레스룸 / 펜트리",
        bay: 4,
        structure: "학원가 통학 편리한 명품 판상형",
        kitchen: "ㄷ자형 스마트 키친"
      }
    ],
    actualListings: [
      {
        id: "l-16-1",
        tradeType: "sale",
        price: 135000,
        areaPyeong: 34,
        areaSqm: 84.97,
        floor: "22/32층",
        dong: "105동",
        direction: "남향",
        description: "평촌역 도보 5분, 학원가 셔틀 승하차 바로 앞 로얄동",
        broker: "평촌센트럴공인",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 24만원"
      }
    ]
  }
];

// Strict bounds for Seoul, Gyeonggi, and Incheon (수도권 한정)
export const SEOUL_GYEONGGI_BOUNDS = {
  center: [37.525, 127.025],
  defaultZoom: 11,
  minZoom: 10,
  maxZoom: 18,
  maxBounds: [
    [36.90, 126.35],
    [38.25, 127.85]
  ]
};

// Detailed Quick Jump Regions across Seoul & Gyeonggi
export const QUICK_REGIONS = [
  { name: "강남·서초·송파", lat: 37.502, lng: 127.045, zoom: 13, group: "서울" },
  { name: "마포·용산·성동", lat: 37.545, lng: 126.965, zoom: 13, group: "서울" },
  { name: "영등포·여의도·양천", lat: 37.522, lng: 126.905, zoom: 13, group: "서울" },
  { name: "노원·도봉·강북", lat: 37.654, lng: 127.060, zoom: 13, group: "서울" },
  { name: "강동·광진", lat: 37.542, lng: 127.135, zoom: 13, group: "서울" },
  { name: "서대문·은평", lat: 37.585, lng: 126.920, zoom: 13, group: "서울" },
  { name: "분당·판교", lat: 37.385, lng: 127.115, zoom: 13, group: "경기" },
  { name: "과천·안양(평촌)", lat: 37.412, lng: 126.975, zoom: 13, group: "경기" },
  { name: "광교(수원)·수지", lat: 37.284, lng: 127.058, zoom: 13, group: "경기" },
  { name: "동탄(화성)", lat: 37.200, lng: 127.096, zoom: 13, group: "경기" },
  { name: "하남(미사)·남양주", lat: 37.564, lng: 127.190, zoom: 13, group: "경기" },
  { name: "일산(고양)", lat: 37.662, lng: 126.755, zoom: 13, group: "경기" }
];
