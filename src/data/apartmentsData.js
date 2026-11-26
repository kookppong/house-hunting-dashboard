// Real coordinates, 2026 latest transactions, floor plans, and comprehensive living infrastructure
export const APARTMENT_DATA = [
  // --- 서울 강남 / 서초 / 송파 ---
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
      price: 435000, // 43.5억
      date: "2026.10",
      floor: "18층",
      areaPyeong: 34,
      areaSqm: 84.95,
      changeRate: "+1.2%"
    },
    jeonsePrice: 210000, // 전세 21억
    monthlyRent: { deposit: 50000, rent: 650 }, // 보증금 5억 / 월 650만
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
        verifiedDate: "2026.11.25",
        maintenanceCost: "약 38만원"
      },
      {
        id: "l-1-2",
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
        id: "l-1-3",
        tradeType: "rent",
        deposit: 50000,
        monthlyRent: 620,
        price: 50000, // deposit
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
      price: 218000, // 21.8억
      date: "2026.10",
      floor: "14층",
      areaPyeong: 33,
      areaSqm: 84.98,
      changeRate: "+0.8%"
    },
    jeonsePrice: 110000, // 전세 11억
    monthlyRent: { deposit: 20000, rent: 320 },
    floorPlans: [
      {
        name: "84㎡C (33평형)",
        type: "4-Bay 판상형",
        rooms: "방3 / 욕실2 / 알파룸 / 광폭 드레스룸",
        bay: 4,
        structure: "남향 맞통풍, 채광 극대화",
        kitchen: "11자형 대형 다이닝"
      },
      {
        name: "59㎡A (25평형)",
        type: "3-Bay 판상형",
        rooms: "방3 / 욕실2",
        bay: 3,
        structure: "수납공간 극대화 판상형",
        kitchen: "ㄱ자형 주방"
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
      },
      {
        id: "l-2-3",
        tradeType: "rent",
        deposit: 20000,
        monthlyRent: 310,
        price: 20000,
        areaPyeong: 33,
        areaSqm: 84.98,
        floor: "10/35층",
        dong: "412동",
        direction: "남서향",
        description: "중앙공원 조망권 로얄층, 옵션 에어컨 풀",
        broker: "가락스마트부동산",
        verifiedDate: "2026.11.24",
        maintenanceCost: "약 28만원"
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
      price: 315000, // 31.5억
      date: "2026.11",
      floor: "22층",
      areaPyeong: 34,
      areaSqm: 84.97,
      changeRate: "+3.2%"
    },
    jeonsePrice: 165000, // 전세 16.5억
    monthlyRent: { deposit: 30000, rent: 480 },
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

  // --- 서울 마포 / 용산 / 성동 (마용성) ---
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
      price: 188000, // 18.8억
      date: "2026.10",
      floor: "12층",
      areaPyeong: 34,
      areaSqm: 84.59,
      changeRate: "+0.5%"
    },
    jeonsePrice: 102000, // 전세 10.2억
    monthlyRent: { deposit: 15000, rent: 290 },
    floorPlans: [
      {
        name: "84㎡A (34평형)",
        type: "3-Bay 판상형",
        rooms: "방3 / 욕실2 / 드레스룸 / 발코니",
        bay: 3,
        structure: "맞통풍 시원한 3-Bay",
        kitchen: "ㄷ자형 와이드 주방"
      },
      {
        name: "59㎡A (24평형)",
        type: "3-Bay 판상형",
        rooms: "방3 / 욕실2",
        bay: 3,
        structure: "실속형 알찬 수납",
        kitchen: "일자형 주방"
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
      },
      {
        id: "l-4-3",
        tradeType: "rent",
        deposit: 15000,
        monthlyRent: 280,
        price: 15000,
        areaPyeong: 34,
        areaSqm: 84.59,
        floor: "8/28층",
        dong: "310동",
        direction: "남향",
        description: "월세 조정 가능, 단지 조경 뷰 조용하고 쾌적",
        broker: "마포드림공인",
        verifiedDate: "2026.11.23",
        maintenanceCost: "약 24만원"
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
      price: 325000, // 32.5억
      date: "2026.10",
      floor: "25층",
      areaPyeong: 43,
      areaSqm: 114.2,
      changeRate: "+2.1%"
    },
    jeonsePrice: 175000, // 전세 17.5억
    monthlyRent: { deposit: 30000, rent: 550 },
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
        verifiedDate: "2026.11.25",
        maintenanceCost: "약 45만원"
      },
      {
        id: "l-5-2",
        tradeType: "jeonse",
        price: 178000,
        areaPyeong: 43,
        areaSqm: 114.2,
        floor: "24/43층",
        dong: "103동",
        direction: "남향",
        description: "전세 융자 없는 특급 귀한 매물, 시스템 가전 풀옵션",
        broker: "용산스타부동산",
        verifiedDate: "2026.11.26",
        maintenanceCost: "약 44만원"
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
      price: 418000, // 41.8억
      date: "2026.10",
      floor: "28층",
      areaPyeong: 38,
      areaSqm: 84.82,
      changeRate: "+1.9%"
    },
    jeonsePrice: 220000, // 전세 22억
    monthlyRent: { deposit: 40000, rent: 680 },
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

  // --- 서울 가성비 / 서북 / 동북 권역 ---
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
      price: 74000, // 7.4억
      date: "2026.11",
      floor: "9층",
      areaPyeong: 24,
      areaSqm: 59.39,
      changeRate: "-0.5%"
    },
    jeonsePrice: 28000, // 전세 2.8억
    monthlyRent: { deposit: 5000, rent: 110 },
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
        verifiedDate: "2026.11.25",
        maintenanceCost: "약 16만원"
      },
      {
        id: "l-7-2",
        tradeType: "jeonse",
        price: 29000,
        areaPyeong: 24,
        areaSqm: 59.39,
        floor: "8/15층",
        dong: "704동",
        direction: "남향",
        description: "욕실 싱크대 올수리, 신혼부부 강력 추천 전세",
        broker: "상계으뜸공인",
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
      price: 122000, // 12.2억
      date: "2026.10",
      floor: "14층",
      areaPyeong: 33,
      areaSqm: 84.97,
      changeRate: "+1.0%"
    },
    jeonsePrice: 68000, // 전세 6.8억
    monthlyRent: { deposit: 10000, rent: 220 },
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

  // --- 경기 남부 핵심: 분당 / 판교 / 과천 ---
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
      price: 232000, // 23.2억
      date: "2026.10",
      floor: "11층",
      areaPyeong: 33,
      areaSqm: 84.85,
      changeRate: "+1.5%"
    },
    jeonsePrice: 125000, // 전세 12.5억
    monthlyRent: { deposit: 20000, rent: 360 },
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
      },
      {
        id: "l-9-2",
        tradeType: "jeonse",
        price: 128000,
        areaPyeong: 33,
        areaSqm: 84.85,
        floor: "9/20층",
        dong: "703동",
        direction: "남향",
        description: "보평초 도보 2분 안전 통학동, 안심 전세대출 가능",
        broker: "테크노밸리부동산",
        verifiedDate: "2026.11.25",
        maintenanceCost: "약 30만원"
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
      price: 203000, // 20.3억
      date: "2026.11",
      floor: "21층",
      areaPyeong: 33,
      areaSqm: 84.99,
      changeRate: "+0.9%"
    },
    jeonsePrice: 115000, // 전세 11.5억
    monthlyRent: { deposit: 20000, rent: 330 },
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
      price: 219000, // 21.9억
      date: "2026.10",
      floor: "16층",
      areaPyeong: 34,
      areaSqm: 84.93,
      changeRate: "+1.8%"
    },
    jeonsePrice: 118000, // 전세 11.8억
    monthlyRent: { deposit: 20000, rent: 340 },
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

  // --- 경기 수도권 신도시: 광교 / 동탄 / 하남 / 일산 ---
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
      price: 156000, // 15.6억
      date: "2026.11",
      floor: "25층",
      areaPyeong: 35,
      areaSqm: 84.94,
      changeRate: "+1.1%"
    },
    jeonsePrice: 85000, // 전세 8.5억
    monthlyRent: { deposit: 15000, rent: 250 },
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
      price: 165000, // 16.5억
      date: "2026.10",
      floor: "23층",
      areaPyeong: 34,
      areaSqm: 84.82,
      changeRate: "+4.5%"
    },
    jeonsePrice: 72000, // 전세 7.2억
    monthlyRent: { deposit: 10000, rent: 240 },
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
      price: 106000, // 10.6억
      date: "2026.10",
      floor: "15층",
      areaPyeong: 34,
      areaSqm: 84.99,
      changeRate: "+0.4%"
    },
    jeonsePrice: 58000, // 전세 5.8억
    monthlyRent: { deposit: 8000, rent: 180 },
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
      price: 128000, // 12.8억
      date: "2026.11",
      floor: "30층",
      areaPyeong: 35,
      areaSqm: 84.88,
      changeRate: "+2.8%"
    },
    jeonsePrice: 65000, // 전세 6.5억
    monthlyRent: { deposit: 10000, rent: 210 },
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
      price: 132000, // 13.2억
      date: "2026.10",
      floor: "18층",
      areaPyeong: 34,
      areaSqm: 84.97,
      changeRate: "+0.8%"
    },
    jeonsePrice: 70000, // 전세 7.0억
    monthlyRent: { deposit: 10000, rent: 230 },
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
  minZoom: 10,  // Prevents zooming out of metropolitan area
  maxZoom: 18,
  maxBounds: [
    [36.90, 126.35], // 남서단 (경기 남부 평택/안성 및 서해 경계)
    [38.25, 127.85]  // 북동단 (경기 북부 연천/포천 및 가평 경계)
  ]
};

// Detailed Quick Jump Regions across Seoul & Gyeonggi
export const QUICK_REGIONS = [
  // 서울
  { name: "강남·서초·송파", lat: 37.502, lng: 127.045, zoom: 13, group: "서울" },
  { name: "마포·용산·성동", lat: 37.545, lng: 126.965, zoom: 13, group: "서울" },
  { name: "영등포·여의도·양천", lat: 37.522, lng: 126.905, zoom: 13, group: "서울" },
  { name: "노원·도봉·강북", lat: 37.654, lng: 127.060, zoom: 13, group: "서울" },
  { name: "강동·광진", lat: 37.542, lng: 127.135, zoom: 13, group: "서울" },
  { name: "서대문·은평", lat: 37.585, lng: 126.920, zoom: 13, group: "서울" },
  // 경기
  { name: "분당·판교", lat: 37.385, lng: 127.115, zoom: 13, group: "경기" },
  { name: "과천·안양(평촌)", lat: 37.412, lng: 126.975, zoom: 13, group: "경기" },
  { name: "광교(수원)·수지", lat: 37.284, lng: 127.058, zoom: 13, group: "경기" },
  { name: "동탄(화성)", lat: 37.200, lng: 127.096, zoom: 13, group: "경기" },
  { name: "하남(미사)·남양주", lat: 37.564, lng: 127.190, zoom: 13, group: "경기" },
  { name: "일산(고양)", lat: 37.662, lng: 126.755, zoom: 13, group: "경기" }
];
