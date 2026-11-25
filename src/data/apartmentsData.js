// Real coordinates and comprehensive information for Seoul & Gyeonggi landmark complexes
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
    parkingPerHousehold: 1.84,
    floorAreaRatio: 299,
    buildingCoverageRatio: 19,
    heating: "지역난방, 열병합",
    nearestStation: "9호선 신반포역 도보 5분",
    school: "서울반포초등학교 도보 3분",
    tags: ["한강뷰", "초품아", "신축급", "대장아파트"],
    recentTransaction: {
      price: 430000, // 43억
      date: "2024.10",
      floor: "18층",
      areaPyeong: 34,
      areaSqm: 84.95,
      changeRate: "+1.2%"
    },
    actualListings: [
      {
        id: "l-1-1",
        price: 440000,
        areaPyeong: 34,
        areaSqm: 84.95,
        floor: "20/38층",
        dong: "105동",
        direction: "남동향",
        description: "한강 파노라마 영구조망, 올수리 최고급 인테리어",
        broker: "반포아크로공인",
        verifiedDate: "2024.11.18",
        maintenanceCost: "약 38만원"
      },
      {
        id: "l-1-2",
        price: 425000,
        areaPyeong: 34,
        areaSqm: 84.95,
        floor: "7/38층",
        dong: "102동",
        direction: "남서향",
        description: "급매 추천, 정원뷰 조용하고 쾌적한 로얄동",
        broker: "한강프라임공인",
        verifiedDate: "2024.11.21",
        maintenanceCost: "약 36만원"
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
    parkingPerHousehold: 1.32,
    floorAreaRatio: 285,
    buildingCoverageRatio: 19,
    heating: "지역난방, 열병합",
    nearestStation: "8호선 송파역 직통연결",
    school: "서울가락초, 해누리초 단지내",
    tags: ["9천세대대단지", "역세권", "초품아", "커뮤니티"],
    recentTransaction: {
      price: 215000, // 21.5억
      date: "2024.10",
      floor: "14층",
      areaPyeong: 33,
      areaSqm: 84.98,
      changeRate: "+0.8%"
    },
    actualListings: [
      {
        id: "l-2-1",
        price: 218000,
        areaPyeong: 33,
        areaSqm: 84.98,
        floor: "16/35층",
        dong: "204동",
        direction: "남향",
        description: "역 도보 3분 로얄동, 판상형 4베이 채광극상",
        broker: "헬리오드림공인",
        verifiedDate: "2024.11.23",
        maintenanceCost: "약 28만원"
      },
      {
        id: "l-2-2",
        price: 210000,
        areaPyeong: 33,
        areaSqm: 84.98,
        floor: "9/35층",
        dong: "412동",
        direction: "남동향",
        description: "입주협의가능, 단지 중앙공원 바로 앞 조망",
        broker: "송파메이저공인",
        verifiedDate: "2024.11.19",
        maintenanceCost: "약 27만원"
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
    parkingPerHousehold: 1.97,
    floorAreaRatio: 249,
    buildingCoverageRatio: 18,
    heating: "지역난방",
    nearestStation: "수인분당선 구룡역 도보 6분",
    school: "서울개포초등학교 품은 단지",
    tags: ["신축", "강남대단지", "수영장", "고급커뮤니티"],
    recentTransaction: {
      price: 310000, // 31억
      date: "2024.11",
      floor: "22층",
      areaPyeong: 34,
      areaSqm: 84.97,
      changeRate: "+3.2%"
    },
    actualListings: [
      {
        id: "l-3-1",
        price: 315000,
        areaPyeong: 34,
        areaSqm: 84.97,
        floor: "19/35층",
        dong: "118동",
        direction: "남동향",
        description: "첫입주 신축 풀옵션, 대모산 숲세권 힐링뷰",
        broker: "개포퍼스트공인",
        verifiedDate: "2024.11.24",
        maintenanceCost: "약 32만원"
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
    parkingPerHousehold: 1.25,
    floorAreaRatio: 259,
    buildingCoverageRatio: 20,
    heating: "개별난방, 도시가스",
    nearestStation: "2호선 아현역 / 5호선 애오개역 더블역세권",
    school: "서울아현초등학교 도보 4분",
    tags: ["마용성대장", "더블역세권", "광화문/여의도출퇴근", "대단지"],
    recentTransaction: {
      price: 185000, // 18.5억
      date: "2024.10",
      floor: "12층",
      areaPyeong: 34,
      areaSqm: 84.59,
      changeRate: "+0.5%"
    },
    actualListings: [
      {
        id: "l-4-1",
        price: 188000,
        areaPyeong: 34,
        areaSqm: 84.59,
        floor: "15/30층",
        dong: "208동",
        direction: "남향",
        description: "애오개역 초인접 동, 내부상태 특A급 올수리",
        broker: "마포마래푸공인",
        verifiedDate: "2024.11.22",
        maintenanceCost: "약 25만원"
      },
      {
        id: "l-4-2",
        price: 182000,
        areaPyeong: 34,
        areaSqm: 84.59,
        floor: "8/28층",
        dong: "310동",
        direction: "남서향",
        description: "조정가능 급매, 막힘없는 단지공원뷰",
        broker: "아현래미안부동산",
        verifiedDate: "2024.11.20",
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
    parkingPerHousehold: 2.16,
    floorAreaRatio: 799,
    buildingCoverageRatio: 52,
    heating: "지역난방",
    nearestStation: "4호선 신용산역 / 1호선 용산역 도보 3분",
    school: "서울한강초등학교 도보 8분",
    tags: ["용산공원뷰", "트리플역세권", "초고층", "주상복합"],
    recentTransaction: {
      price: 320000, // 32억
      date: "2024.09",
      floor: "25층",
      areaPyeong: 43,
      areaSqm: 114.2,
      changeRate: "+2.1%"
    },
    actualListings: [
      {
        id: "l-5-1",
        price: 330000,
        areaPyeong: 43,
        areaSqm: 114.2,
        floor: "31/43층",
        dong: "102동",
        direction: "남동향",
        description: "용산민족공원 파노라마뷰, 최상급 럭셔리 마감",
        broker: "용산파크공인",
        verifiedDate: "2024.11.21",
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
    parkingPerHousehold: 1.62,
    floorAreaRatio: 399,
    buildingCoverageRatio: 26,
    heating: "지역난방",
    nearestStation: "수인분당선 서울숲역 도보 7분",
    school: "서울경동초등학교 도보 9분",
    tags: ["성수동핫플", "한강뷰", "호텔식서비스", "조식서비스"],
    recentTransaction: {
      price: 410000, // 41억
      date: "2024.10",
      floor: "28층",
      areaPyeong: 38,
      areaSqm: 84.82,
      changeRate: "+1.9%"
    },
    actualListings: [
      {
        id: "l-6-1",
        price: 420000,
        areaPyeong: 38,
        areaSqm: 84.82,
        floor: "34/47층",
        dong: "101동",
        direction: "남향",
        description: "한강과 서울숲을 한눈에 담는 로얄 스카이라인",
        broker: "서울숲트리마제공인",
        verifiedDate: "2024.11.23",
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
    parkingPerHousehold: 0.65,
    floorAreaRatio: 198,
    buildingCoverageRatio: 14,
    heating: "지역난방, 열병합",
    nearestStation: "4/7호선 노원역 초역세권 도보 2분",
    school: "서울상월초등학교 도보 5분",
    tags: ["재건축기대", "더블역세권", "서울가성비", "학군우수"],
    recentTransaction: {
      price: 72000, // 7.2억
      date: "2024.11",
      floor: "9층",
      areaPyeong: 24,
      areaSqm: 59.39,
      changeRate: "-0.5%"
    },
    actualListings: [
      {
        id: "l-7-1",
        price: 71000,
        areaPyeong: 24,
        areaSqm: 59.39,
        floor: "11/15층",
        dong: "708동",
        direction: "남향",
        description: "노원역 초인접, 샷시 및 배관 특올수리 완료",
        broker: "노원부동산써브",
        verifiedDate: "2024.11.19",
        maintenanceCost: "약 16만원"
      },
      {
        id: "l-7-2",
        price: 74000,
        areaPyeong: 24,
        areaSqm: 59.39,
        floor: "14/15층",
        dong: "712동",
        direction: "남서향",
        description: "정밀안전진단 통과 완료, 재건축 투자 유망",
        broker: "상계으뜸공인",
        verifiedDate: "2024.11.24",
        maintenanceCost: "약 17만원"
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
    parkingPerHousehold: 1.21,
    floorAreaRatio: 236,
    buildingCoverageRatio: 22,
    heating: "개별난방",
    nearestStation: "경의중앙선 가좌역 도보 5분 / 6호선 디지털미디어시티역",
    school: "서울북가좌초등학교 도보 3분",
    tags: ["DMC직주근접", "대단지", "초품아", "평지아파트"],
    recentTransaction: {
      price: 118000, // 11.8억
      date: "2024.10",
      floor: "14층",
      areaPyeong: 33,
      areaSqm: 84.97,
      changeRate: "+1.0%"
    },
    actualListings: [
      {
        id: "l-8-1",
        price: 120000,
        areaPyeong: 33,
        areaSqm: 84.97,
        floor: "17/30층",
        dong: "203동",
        direction: "남향",
        description: "가좌역 인접동, 확 트인 불광천 조망권",
        broker: "DMC래미안공인",
        verifiedDate: "2024.11.20",
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
    parkingPerHousehold: 1.76,
    floorAreaRatio: 165,
    buildingCoverageRatio: 15,
    heating: "지역난방",
    nearestStation: "신분당선/경강선 판교역 도보 5분",
    school: "보평초·보평중·보평고 명품학군 도보 3분",
    tags: ["판교테크노밸리", "신분당선", "보평학군", "숲세권"],
    recentTransaction: {
      price: 228000, // 22.8억
      date: "2024.10",
      floor: "11층",
      areaPyeong: 33,
      areaSqm: 84.85,
      changeRate: "+1.5%"
    },
    actualListings: [
      {
        id: "l-9-1",
        price: 233000,
        areaPyeong: 33,
        areaSqm: 84.85,
        floor: "15/20층",
        dong: "704동",
        direction: "남향",
        description: "판교역 도보 5분, 보평학군 배정, 탄천 전망 굿",
        broker: "판교보평공인",
        verifiedDate: "2024.11.22",
        maintenanceCost: "약 31만원"
      },
      {
        id: "l-9-2",
        price: 225000,
        areaPyeong: 33,
        areaSqm: 84.85,
        floor: "6/18층",
        dong: "702동",
        direction: "남서향",
        description: "빠른 입주 협의, 판상형 채광 통풍 우수",
        broker: "테크노밸리부동산",
        verifiedDate: "2024.11.17",
        maintenanceCost: "약 29만원"
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
    parkingPerHousehold: 2.37,
    floorAreaRatio: 355,
    buildingCoverageRatio: 22,
    heating: "지역난방",
    nearestStation: "수인분당선/신분당선 정자역 도보 7분",
    school: "정자초등학교 도보 4분",
    tags: ["분당대장", "탄천조망", "정자역세권", "명품주상복합"],
    recentTransaction: {
      price: 198000, // 19.8억
      date: "2024.11",
      floor: "21층",
      areaPyeong: 33,
      areaSqm: 84.99,
      changeRate: "+0.9%"
    },
    actualListings: [
      {
        id: "l-10-1",
        price: 202000,
        areaPyeong: 33,
        areaSqm: 84.99,
        floor: "26/35층",
        dong: "602동",
        direction: "남동향",
        description: "탄천 영구파노라마뷰, 올리모델링 첫입주급 컨디션",
        broker: "정자파크뷰공인",
        verifiedDate: "2024.11.23",
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
    parkingPerHousehold: 1.74,
    floorAreaRatio: 227,
    buildingCoverageRatio: 18,
    heating: "지역난방",
    nearestStation: "4호선 정부과천청사역 / 과천역 도보 4분",
    school: "과천초등학교 도보 3분",
    tags: ["과천대장", "준강남", "초역세권", "고급하이엔드"],
    recentTransaction: {
      price: 215000, // 21.5억
      date: "2024.10",
      floor: "16층",
      areaPyeong: 34,
      areaSqm: 84.93,
      changeRate: "+1.8%"
    },
    actualListings: [
      {
        id: "l-11-1",
        price: 219000,
        areaPyeong: 34,
        areaSqm: 84.93,
        floor: "19/28층",
        dong: "112동",
        direction: "남향",
        description: "관악산 사계절 조망, 스카이라운지 이용 편리동",
        broker: "과천써밋공인",
        verifiedDate: "2024.11.24",
        maintenanceCost: "약 30만원"
      }
    ]
  },

  // --- 경기 수도권 핵심 신도시: 광교 / 동탄 / 하남 / 일산 ---
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
    parkingPerHousehold: 1.58,
    floorAreaRatio: 399,
    buildingCoverageRatio: 37,
    heating: "지역난방",
    nearestStation: "신분당선 광교중앙역 도보 8분",
    school: "수원매원초등학교 도보 6분",
    tags: ["광교호수공원뷰", "대단지", "갤러리아백화점", "신분당선"],
    recentTransaction: {
      price: 153000, // 15.3억
      date: "2024.11",
      floor: "25층",
      areaPyeong: 35,
      areaSqm: 84.94,
      changeRate: "+1.1%"
    },
    actualListings: [
      {
        id: "l-12-1",
        price: 158000,
        areaPyeong: 35,
        areaSqm: 84.94,
        floor: "38/49층",
        dong: "103동",
        direction: "남향",
        description: "원천호수 환상적인 전면 조망, 어라운드뷰 로얄층",
        broker: "광교호수중흥공인",
        verifiedDate: "2024.11.23",
        maintenanceCost: "약 28만원"
      },
      {
        id: "l-12-2",
        price: 150000,
        areaPyeong: 35,
        areaSqm: 84.94,
        floor: "12/49층",
        dong: "106동",
        direction: "남동향",
        description: "빠른 매매 가능, 광교중앙역 가깝고 상권 편리",
        broker: "스마트광교부동산",
        verifiedDate: "2024.11.18",
        maintenanceCost: "약 27만원"
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
    parkingPerHousehold: 1.52,
    floorAreaRatio: 599,
    buildingCoverageRatio: 48,
    heating: "지역난방",
    nearestStation: "GTX-A/SRT 동탄역 지하직결",
    school: "화성여울초등학교 도보 7분",
    tags: ["GTX-A개통", "동탄대장", "백화점직결", "초역세권"],
    recentTransaction: {
      price: 162000, // 16.2억
      date: "2024.10",
      floor: "23층",
      areaPyeong: 34,
      areaSqm: 84.82,
      changeRate: "+4.5%"
    },
    actualListings: [
      {
        id: "l-13-1",
        price: 165000,
        areaPyeong: 34,
        areaSqm: 84.82,
        floor: "29/49층",
        dong: "102동",
        direction: "남동향",
        description: "GTX 및 롯데백화점 원스톱, 탁 트인 고층 시티뷰",
        broker: "동탄역롯데공인",
        verifiedDate: "2024.11.24",
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
    parkingPerHousehold: 1.15,
    floorAreaRatio: 219,
    buildingCoverageRatio: 17,
    heating: "지역난방",
    nearestStation: "5호선 미사역 도보 5분",
    school: "하남미사초등학교 품은 단지",
    tags: ["미사역세권", "망월천수변공원", "초품아", "서울인접"],
    recentTransaction: {
      price: 104000, // 10.4억
      date: "2024.10",
      floor: "15층",
      areaPyeong: 34,
      areaSqm: 84.99,
      changeRate: "+0.4%"
    },
    actualListings: [
      {
        id: "l-14-1",
        price: 106000,
        areaPyeong: 34,
        areaSqm: 84.99,
        floor: "18/28층",
        dong: "2805동",
        direction: "남향",
        description: "미사역 도보 4분 초인접동, 시스템에어컨 4대 풀옵션",
        broker: "미사골든공인",
        verifiedDate: "2024.11.21",
        maintenanceCost: "약 22만원"
      },
      {
        id: "l-14-2",
        price: 102000,
        areaPyeong: 34,
        areaSqm: 84.99,
        floor: "7/28층",
        dong: "2809동",
        direction: "남서향",
        description: "가격절충 급매물, 단지 조경 뷰 우수",
        broker: "하남행복공인",
        verifiedDate: "2024.11.18",
        maintenanceCost: "약 21만원"
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
    parkingPerHousehold: 1.45,
    floorAreaRatio: 479,
    buildingCoverageRatio: 38,
    heating: "지역난방",
    nearestStation: "GTX-A 킨텍스역 도보 3분",
    school: "고양한류초등학교 도보 4분",
    tags: ["GTX-A개통수혜", "일산대장", "호수공원인접", "초고층"],
    recentTransaction: {
      price: 125000, // 12.5억
      date: "2024.11",
      floor: "30층",
      areaPyeong: 35,
      areaSqm: 84.88,
      changeRate: "+2.8%"
    },
    actualListings: [
      {
        id: "l-15-1",
        price: 128000,
        areaPyeong: 35,
        areaSqm: 84.88,
        floor: "35/49층",
        dong: "202동",
        direction: "남서향",
        description: "GTX 킨텍스역 개통 임박! 호수공원과 한강 더블조망권",
        broker: "킨텍스원시티명문공인",
        verifiedDate: "2024.11.24",
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
    parkingPerHousehold: 1.34,
    floorAreaRatio: 269,
    buildingCoverageRatio: 18,
    heating: "지역난방",
    nearestStation: "4호선 평촌역 도보 5분",
    school: "부림초등학교 도보 5분",
    tags: ["평촌신축", "평촌학원가인접", "역세권", "대단지"],
    recentTransaction: {
      price: 129000, // 12.9억
      date: "2024.10",
      floor: "18층",
      areaPyeong: 34,
      areaSqm: 84.97,
      changeRate: "+0.8%"
    },
    actualListings: [
      {
        id: "l-16-1",
        price: 132000,
        areaPyeong: 34,
        areaSqm: 84.97,
        floor: "22/32층",
        dong: "105동",
        direction: "남향",
        description: "평촌역 도보 5분, 학원가 셔틀 승하차 바로 앞 로얄동",
        broker: "평촌센트럴공인",
        verifiedDate: "2024.11.20",
        maintenanceCost: "약 24만원"
      }
    ]
  }
];

export const SEOUL_GYEONGGI_BOUNDS = {
  center: [37.525, 127.025],
  defaultZoom: 11,
  minZoom: 10,
  maxZoom: 18,
  maxBounds: [
    [37.05, 126.50], // 남서단 (경기 남부 및 인천 경계)
    [37.95, 127.65]  // 북동단 (경기 북부 및 양평 경계)
  ]
};
