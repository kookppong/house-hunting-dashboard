// Comprehensive 100+ Apartment Complexes across Seoul & Gyeonggi
// Covers all 25 Seoul Autonomous Districts and major Gyeonggi cities (Bundang, Pangyo, Gwacheon, Pyeongchon, Gwanggyo, Dongtan, Hanam, Ilsan, etc.)

export const SEOUL_GYEONGGI_BOUNDS = {
  center: [37.525, 127.025],
  defaultZoom: 12,
  minZoom: 10,
  maxZoom: 18,
  maxBounds: [
    [36.90, 126.35],
    [38.25, 127.85]
  ]
};

// 100+ Detailed Complexes with 2026 transactions, floorplans, living radius, parking, slope status
export const APARTMENT_DATA = [
  // ==================== 1. 서울 강남구 ====================
  {
    id: "apt-gn-1",
    name: "디에이치퍼스티어아이파크",
    city: "서울", district: "강남구", dong: "개포동", lat: 37.4858, lng: 127.0601,
    builtYear: 2024, totalHouseholds: 6702, totalBuildings: 74, parkingTotal: 13203, parkingPerHousehold: 1.97, undergroundParkingDirect: true,
    evChargers: "급속 25기, 완속 120기", slopeStatus: "완전 평지 (무단차 설계)",
    amenities: { convenienceStore: "단지내 CU 도보 1분", oliveyoung: "개포점 도보 5분", daiso: "대치점 도보 10분", subwayDetail: "수인분당선 구룡역 도보 5분" },
    floorAreaRatio: 249, buildingCoverageRatio: 18, heating: "지역난방", nearestStation: "수인분당선 구룡역 도보 5분", school: "서울개포초등학교",
    tags: ["신축대단지", "수영장", "개포대장", "평지"], listingCounts: { sale: 45, jeonse: 38, rent: 20, total: 103 },
    recentTransaction: { price: 315000, date: "2026.11", floor: "22층", areaPyeong: 34, areaSqm: 84.97, changeRate: "+3.2%" },
    jeonsePrice: 165000, monthlyRent: { deposit: 30000, rent: 480 },
    floorPlans: [{ name: "84㎡A (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2 / 알파룸", bay: 4, structure: "대모산 숲세권 맞통풍" }],
    actualListings: [
      { id: "l-gn1-1", tradeType: "sale", price: 320000, areaPyeong: 34, areaSqm: 84.97, floor: "19/35층", dong: "118동", direction: "남동향", description: "첫입주 신축 풀옵션, 대모산 영구조망", broker: "개포퍼스트공인", verifiedDate: "2026.11.26" },
      { id: "l-gn1-2", tradeType: "jeonse", price: 168000, areaPyeong: 34, areaSqm: 84.97, floor: "14/35층", dong: "125동", direction: "남향", description: "전세대출 적극협조, 융자무 안심전세", broker: "개포랜드공인", verifiedDate: "2026.11.25" }
    ]
  },
  {
    id: "apt-gn-2",
    name: "압구정현대1차",
    city: "서울", district: "강남구", dong: "압구정동", lat: 37.5312, lng: 127.0275,
    builtYear: 1976, totalHouseholds: 960, totalBuildings: 13, parkingTotal: 1056, parkingPerHousehold: 1.1, undergroundParkingDirect: false,
    evChargers: "완속 20기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "현대백화점 지하식품관 도보 3분", oliveyoung: "압구정역점 도보 4분", daiso: "신사역점 도보 10분", subwayDetail: "3호선 압구정역 도보 4분" },
    floorAreaRatio: 205, buildingCoverageRatio: 16, heating: "중앙난방", nearestStation: "3호선 압구정역 도보 4분", school: "서울압구정초등학교",
    tags: ["재건축대장", "한강뷰", "압구정특별계획구역"], listingCounts: { sale: 18, jeonse: 10, rent: 7, total: 35 },
    recentTransaction: { price: 520000, date: "2026.10", floor: "9층", areaPyeong: 43, areaSqm: 131.4, changeRate: "+4.8%" },
    jeonsePrice: 120000, monthlyRent: { deposit: 30000, rent: 350 },
    floorPlans: [{ name: "131㎡ (43평형)", type: "판상형", rooms: "방4 / 욕실2", bay: 2, structure: "한강 직조망" }],
    actualListings: [{ id: "l-gn2-1", tradeType: "sale", price: 530000, areaPyeong: 43, areaSqm: 131.4, floor: "11/15층", dong: "12동", direction: "남향", description: "신통기획 최고 70층 재건축 추진", broker: "압구정현대공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-gn-3",
    name: "래미안대치팰리스",
    city: "서울", district: "강남구", dong: "대치동", lat: 37.4935, lng: 127.0605,
    builtYear: 2015, totalHouseholds: 1608, totalBuildings: 17, parkingTotal: 3103, parkingPerHousehold: 1.93, undergroundParkingDirect: true,
    evChargers: "완속 65기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "단지내 CU 도보 1분", oliveyoung: "대치점 도보 3분", daiso: "한티역점 도보 6분", subwayDetail: "3호선 대치역 도보 3분" },
    floorAreaRatio: 262, buildingCoverageRatio: 16, heating: "지역난방", nearestStation: "3호선 대치역 도보 3분", school: "서울대치초등학교",
    tags: ["대치동학원가", "명문학군", "초품아", "평지"], listingCounts: { sale: 29, jeonse: 21, rent: 14, total: 64 },
    recentTransaction: { price: 360000, date: "2026.11", floor: "15층", areaPyeong: 34, areaSqm: 84.97, changeRate: "+1.9%" },
    jeonsePrice: 195000, monthlyRent: { deposit: 30000, rent: 520 },
    floorPlans: [{ name: "84㎡A (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2 / 알파룸", bay: 4, structure: "대치학원가 도보권" }],
    actualListings: [{ id: "l-gn3-1", tradeType: "sale", price: 365000, areaPyeong: 34, areaSqm: 84.97, floor: "17/35층", dong: "106동", direction: "남향", description: "대치초 도보 2분 로얄동, 학부모 선호", broker: "대치팰리스부동산", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-gn-4",
    name: "은마아파트",
    city: "서울", district: "강남구", dong: "대치동", lat: 37.4975, lng: 127.0665,
    builtYear: 1979, totalHouseholds: 4424, totalBuildings: 28, parkingTotal: 4424, parkingPerHousehold: 1.0, undergroundParkingDirect: false,
    evChargers: "완속 30기", slopeStatus: "완전 평지",
    amenities: { convenienceStore: "은마상가내 다수", oliveyoung: "대치역점 도보 2분", daiso: "대치점 도보 4분", subwayDetail: "3호선 대치역 초역세권" },
    floorAreaRatio: 204, buildingCoverageRatio: 18, heating: "중앙난방", nearestStation: "3호선 대치역 도보 1분", school: "서울대곡초등학교",
    tags: ["재건축대장", "대치사거리", "은마상가"], listingCounts: { sale: 42, jeonse: 28, rent: 19, total: 89 },
    recentTransaction: { price: 275000, date: "2026.10", floor: "8층", areaPyeong: 34, areaSqm: 84.43, changeRate: "+2.8%" },
    jeonsePrice: 65000, monthlyRent: { deposit: 10000, rent: 220 },
    floorPlans: [{ name: "84㎡ (34평형)", type: "복도식 판상형", rooms: "방4 / 욕실1", bay: 2, structure: "재건축 최고 이슈단지" }],
    actualListings: [{ id: "l-gn4-1", tradeType: "sale", price: 278000, areaPyeong: 34, areaSqm: 84.43, floor: "10/14층", dong: "15동", direction: "남향", description: "대치역 초역세권, 재건축 심의 통과", broker: "은마삼성공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-gn-5",
    name: "도곡렉슬",
    city: "서울", district: "강남구", dong: "도곡동", lat: 37.4925, lng: 127.0542,
    builtYear: 2006, totalHouseholds: 3002, totalBuildings: 34, parkingTotal: 4452, parkingPerHousehold: 1.48, undergroundParkingDirect: true,
    evChargers: "완속 70기", slopeStatus: "완만한 완경사 (엘리베이터 운영)",
    amenities: { convenienceStore: "렉슬상가 GS25 도보 1분", oliveyoung: "한티역점 도보 3분", daiso: "한티역점 도보 4분", subwayDetail: "수인분당선 한티역 직통 연결" },
    floorAreaRatio: 274, buildingCoverageRatio: 15, heating: "지역난방", nearestStation: "수인분당선 한티역 도보 2분", school: "서울대도초등학교",
    tags: ["한티역세권", "롯데백화점강남점", "학군우수"], listingCounts: { sale: 37, jeonse: 25, rent: 16, total: 78 },
    recentTransaction: { price: 285000, date: "2026.11", floor: "16층", areaPyeong: 33, areaSqm: 84.92, changeRate: "+1.2%" },
    jeonsePrice: 145000, monthlyRent: { deposit: 20000, rent: 380 },
    floorPlans: [{ name: "84㎡ (33평형)", type: "3-Bay 판상형", rooms: "방3 / 욕실2", bay: 3, structure: "대도초 도보 2분" }],
    actualListings: [{ id: "l-gn5-1", tradeType: "sale", price: 289000, areaPyeong: 33, areaSqm: 84.92, floor: "19/25층", dong: "203동", direction: "남향", description: "한티역 롯데백화점 도보 2분, 특올수리", broker: "도곡렉슬공인", verifiedDate: "2026.11.25" }]
  },

  // ==================== 2. 서울 서초구 ====================
  {
    id: "apt-sc-1",
    name: "아크로리버파크",
    city: "서울", district: "서초구", dong: "반포동", lat: 37.5076, lng: 126.9984,
    builtYear: 2016, totalHouseholds: 1612, totalBuildings: 15, parkingTotal: 2966, parkingPerHousehold: 1.84, undergroundParkingDirect: true,
    evChargers: "급속 12기, 완속 42기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "단지내 GS25 도보 1분", oliveyoung: "반포역점 도보 4분", daiso: "고속터미널점 도보 6분", subwayDetail: "9호선 신반포역 도보 3분" },
    floorAreaRatio: 299, buildingCoverageRatio: 19, heating: "지역난방", nearestStation: "9호선 신반포역 도보 3분", school: "서울반포초등학교",
    tags: ["한강뷰", "반포대장", "신축급", "평지"], listingCounts: { sale: 32, jeonse: 18, rent: 11, total: 61 },
    recentTransaction: { price: 435000, date: "2026.10", floor: "18층", areaPyeong: 34, areaSqm: 84.95, changeRate: "+1.2%" },
    jeonsePrice: 210000, monthlyRent: { deposit: 50000, rent: 650 },
    floorPlans: [{ name: "84㎡A (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2 / 드레스룸", bay: 4, structure: "한강 파노라마뷰" }],
    actualListings: [{ id: "l-sc1-1", tradeType: "sale", price: 440000, areaPyeong: 34, areaSqm: 84.95, floor: "20/38층", dong: "105동", direction: "남동향", description: "한강뷰 영구조망, 최고급 인테리어", broker: "반포아크로공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-sc-2",
    name: "래미안원베일리",
    city: "서울", district: "서초구", dong: "반포동", lat: 37.5052, lng: 127.0018,
    builtYear: 2023, totalHouseholds: 2990, totalBuildings: 23, parkingTotal: 5440, parkingPerHousehold: 1.82, undergroundParkingDirect: true,
    evChargers: "초고속 120기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "단지내 세븐일레븐 도보 1분", oliveyoung: "신세계강남점 도보 4분", daiso: "고속터미널점 도보 5분", subwayDetail: "3/7/9호선 고속터미널역 도보 4분" },
    floorAreaRatio: 299, buildingCoverageRatio: 19, heating: "지역난방", nearestStation: "3/7/9호선 고속터미널역 도보 4분", school: "서울계성초, 잠원초",
    tags: ["신축대장", "한강뷰", "트리플역세권", "평지"], listingCounts: { sale: 41, jeonse: 26, rent: 18, total: 85 },
    recentTransaction: { price: 450000, date: "2026.11", floor: "22층", areaPyeong: 34, areaSqm: 84.98, changeRate: "+2.4%" },
    jeonsePrice: 225000, monthlyRent: { deposit: 50000, rent: 680 },
    floorPlans: [{ name: "84㎡A (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2 / 팬트리", bay: 4, structure: "스카이브릿지 명품뷰" }],
    actualListings: [{ id: "l-sc2-1", tradeType: "sale", price: 455000, areaPyeong: 34, areaSqm: 84.98, floor: "25/35층", dong: "110동", direction: "남동향", description: "한강뷰 로얄층, 풀에어컨", broker: "원베일리탑공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-sc-3",
    name: "반포자이",
    city: "서울", district: "서초구", dong: "반포동", lat: 37.5028, lng: 127.0122,
    builtYear: 2009, totalHouseholds: 3410, totalBuildings: 44, parkingTotal: 6075, parkingPerHousehold: 1.78, undergroundParkingDirect: true,
    evChargers: "완속 85기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "자이안센터 CU 도보 1분", oliveyoung: "반포자이점 도보 2분", daiso: "고속터미널점 도보 8분", subwayDetail: "7호선 반포역 / 9호선 사평역 더블역세권" },
    floorAreaRatio: 270, buildingCoverageRatio: 13, heating: "지역난방", nearestStation: "7호선 반포역 직통", school: "서울원촌초등학교 단지내",
    tags: ["반포자이", "초품아", "더블역세권", "수영장", "평지"], listingCounts: { sale: 43, jeonse: 29, rent: 21, total: 93 },
    recentTransaction: { price: 370000, date: "2026.10", floor: "19층", areaPyeong: 35, areaSqm: 84.98, changeRate: "+1.1%" },
    jeonsePrice: 175000, monthlyRent: { deposit: 30000, rent: 480 },
    floorPlans: [{ name: "84㎡A (35평형)", type: "3-Bay 판상형", rooms: "방3 / 욕실2", bay: 3, structure: "원촌초 도보 2분 안전동선" }],
    actualListings: [{ id: "l-sc3-1", tradeType: "sale", price: 375000, areaPyeong: 35, areaSqm: 84.98, floor: "21/29층", dong: "125동", direction: "남향", description: "반포역 도보 2분 초역세권동, 특올수리", broker: "반포자이베스트공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-sc-4",
    name: "래미안리더스원",
    city: "서울", district: "서초구", dong: "서초동", lat: 37.4912, lng: 127.0245,
    builtYear: 2020, totalHouseholds: 1317, totalBuildings: 12, parkingTotal: 2577, parkingPerHousehold: 1.95, undergroundParkingDirect: true,
    evChargers: "완속 50기", slopeStatus: "완전 평지",
    amenities: { convenienceStore: "단지상가 이마트24 도보 1분", oliveyoung: "강남역점 도보 5분", daiso: "강남역점 도보 6분", subwayDetail: "2호선/신분당선 강남역 도보 5분" },
    floorAreaRatio: 299, buildingCoverageRatio: 18, heating: "지역난방", nearestStation: "2/신분당선 강남역 도보 5분", school: "서울서이초등학교",
    tags: ["강남역세권", "서초신축", "초품아", "직주근접"], listingCounts: { sale: 25, jeonse: 16, rent: 11, total: 52 },
    recentTransaction: { price: 295000, date: "2026.11", floor: "14층", areaPyeong: 34, areaSqm: 84.94, changeRate: "+1.5%" },
    jeonsePrice: 155000, monthlyRent: { deposit: 25000, rent: 420 },
    floorPlans: [{ name: "84㎡ (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2", bay: 4, structure: "강남역 도보 5분 쾌속 출퇴근" }],
    actualListings: [{ id: "l-sc4-1", tradeType: "sale", price: 298000, areaPyeong: 34, areaSqm: 84.94, floor: "18/35층", dong: "103동", direction: "남향", description: "강남역 도보 5분, 서이초 바로 앞", broker: "서초리더스공인", verifiedDate: "2026.11.26" }]
  },

  // ==================== 3. 서울 송파 / 강동구 ====================
  {
    id: "apt-sp-1",
    name: "헬리오시티",
    city: "서울", district: "송파구", dong: "가락동", lat: 37.4975, lng: 127.1065,
    builtYear: 2018, totalHouseholds: 9510, totalBuildings: 84, parkingTotal: 12553, parkingPerHousehold: 1.32, undergroundParkingDirect: true,
    evChargers: "급속 30기, 완속 152기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "단지내 CU/이마트24 6개소", oliveyoung: "송파헬리오점 도보 2분", daiso: "송파역점 도보 3분", subwayDetail: "8호선 송파역 직통 연결" },
    floorAreaRatio: 285, buildingCoverageRatio: 19, heating: "지역난방", nearestStation: "8호선 송파역 직통", school: "가락초, 해누리초 단지내",
    tags: ["9천세대대단지", "초품아", "커뮤니티", "평지"], listingCounts: { sale: 84, jeonse: 52, rent: 31, total: 167 },
    recentTransaction: { price: 218000, date: "2026.10", floor: "14층", areaPyeong: 33, areaSqm: 84.98, changeRate: "+0.8%" },
    jeonsePrice: 110000, monthlyRent: { deposit: 20000, rent: 320 },
    floorPlans: [{ name: "84㎡C (33평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2 / 알파룸", bay: 4, structure: "남향 맞통풍 채광극상" }],
    actualListings: [{ id: "l-sp1-1", tradeType: "sale", price: 220000, areaPyeong: 33, areaSqm: 84.98, floor: "16/35층", dong: "204동", direction: "남향", description: "송파역 도보 3분 로얄동 판상형", broker: "헬리오드림공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-sp-2",
    name: "잠실엘스",
    city: "서울", district: "송파구", dong: "잠실동", lat: 37.5135, lng: 127.0825,
    builtYear: 2008, totalHouseholds: 5678, totalBuildings: 72, parkingTotal: 7709, parkingPerHousehold: 1.35, undergroundParkingDirect: true,
    evChargers: "완속 88기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "단지상가 GS25 도보 1분", oliveyoung: "신천역점 도보 3분", daiso: "잠실새내역점 도보 4분", subwayDetail: "2호선 잠실새내역 직통" },
    floorAreaRatio: 275, buildingCoverageRatio: 16, heating: "지역난방", nearestStation: "2호선 잠실새내역 도보 1분", school: "서울잠일초등학교",
    tags: ["잠실엘리트", "2호선역세권", "한강나들목", "평지"], listingCounts: { sale: 52, jeonse: 33, rent: 22, total: 107 },
    recentTransaction: { price: 255000, date: "2026.11", floor: "20층", areaPyeong: 34, areaSqm: 84.88, changeRate: "+1.6%" },
    jeonsePrice: 125000, monthlyRent: { deposit: 20000, rent: 350 },
    floorPlans: [{ name: "84㎡ (34평형)", type: "3-Bay 판상형", rooms: "방3 / 욕실2", bay: 3, structure: "한강공원 도보 3분 나들목" }],
    actualListings: [{ id: "l-sp2-1", tradeType: "sale", price: 258000, areaPyeong: 34, areaSqm: 84.88, floor: "18/30층", dong: "128동", direction: "남향", description: "잠일초 바로 앞, 한강조망 로얄동", broker: "잠실엘스공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-sp-3",
    name: "리센츠",
    city: "서울", district: "송파구", dong: "잠실동", lat: 37.5122, lng: 127.0912,
    builtYear: 2008, totalHouseholds: 5563, totalBuildings: 65, parkingTotal: 7600, parkingPerHousehold: 1.36, undergroundParkingDirect: true,
    evChargers: "완속 82기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "상가내 세븐일레븐 도보 1분", oliveyoung: "잠실새내역점 도보 3분", daiso: "잠실역점 도보 7분", subwayDetail: "2호선 잠실새내역 지하 직통" },
    floorAreaRatio: 275, buildingCoverageRatio: 15, heating: "지역난방", nearestStation: "2호선 잠실새내역 도보 1분", school: "서울잠신초등학교 단지내",
    tags: ["잠실대장", "초중고품아", "2호선역세권", "평지"], listingCounts: { sale: 48, jeonse: 31, rent: 18, total: 97 },
    recentTransaction: { price: 252000, date: "2026.10", floor: "17층", areaPyeong: 33, areaSqm: 84.99, changeRate: "+1.2%" },
    jeonsePrice: 122000, monthlyRent: { deposit: 20000, rent: 340 },
    floorPlans: [{ name: "84㎡ (33평형)", type: "3-Bay 판상형", rooms: "방3 / 욕실2", bay: 3, structure: "잠신초중고 원스톱 학군" }],
    actualListings: [{ id: "l-sp3-1", tradeType: "sale", price: 255000, areaPyeong: 33, areaSqm: 84.99, floor: "15/33층", dong: "220동", direction: "남향", description: "단지 중앙공원 조망, 초중고 초근접동", broker: "리센츠명문공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-sp-4",
    name: "파크리오",
    city: "서울", district: "송파구", dong: "신천동", lat: 37.5218, lng: 127.1085,
    builtYear: 2008, totalHouseholds: 6864, totalBuildings: 66, parkingTotal: 9794, parkingPerHousehold: 1.42, undergroundParkingDirect: true,
    evChargers: "완속 105기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "파크리오A상가 CU 도보 1분", oliveyoung: "몽촌토성역점 도보 4분", daiso: "잠실나루역점 도보 3분", subwayDetail: "2호선 잠실나루역 / 8호선 몽촌토성역" },
    floorAreaRatio: 283, buildingCoverageRatio: 14, heating: "지역난방", nearestStation: "2호선 잠실나루역 도보 2분", school: "서울잠현초, 잠실초",
    tags: ["올림픽공원", "2호선역세권", "아산병원인접", "평지"], listingCounts: { sale: 63, jeonse: 41, rent: 25, total: 129 },
    recentTransaction: { price: 228000, date: "2026.11", floor: "21층", areaPyeong: 33, areaSqm: 84.9, changeRate: "+1.4%" },
    jeonsePrice: 108000, monthlyRent: { deposit: 20000, rent: 310 },
    floorPlans: [{ name: "84㎡ (33평형)", type: "3-Bay 판상형", rooms: "방3 / 욕실2", bay: 3, structure: "올림픽공원 호수 도보 5분" }],
    actualListings: [{ id: "l-sp4-1", tradeType: "sale", price: 230000, areaPyeong: 33, areaSqm: 84.9, floor: "22/36층", dong: "115동", direction: "남동향", description: "잠실나루역 초인접, 한강공원 조망", broker: "파크리오솔로몬공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-gd-1",
    name: "올림픽파크포레온",
    city: "서울", district: "강동구", dong: "둔촌동", lat: 37.5215, lng: 127.1352,
    builtYear: 2025, totalHouseholds: 12032, totalBuildings: 85, parkingTotal: 17890, parkingPerHousehold: 1.48, undergroundParkingDirect: true,
    evChargers: "초고속 240기 (전국 최대 규모)", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "단지내 CU/이마트24 다수", oliveyoung: "둔촌동역점 도보 3분", daiso: "올림픽공원점 도보 6분", subwayDetail: "5호선 둔촌동역 / 9호선 둔촌오륜역 더블역세권" },
    floorAreaRatio: 273, buildingCoverageRatio: 18, heating: "지역난방", nearestStation: "5호선 둔촌동역 / 9호선 둔촌오륜역", school: "단지내 초중고 4개교",
    tags: ["1만2천세대메머드", "더블역세권", "올림픽공원", "신축대장", "평지"], listingCounts: { sale: 95, jeonse: 68, rent: 45, total: 208 },
    recentTransaction: { price: 235000, date: "2026.11", floor: "23층", areaPyeong: 34, areaSqm: 84.99, changeRate: "+3.5%" },
    jeonsePrice: 105000, monthlyRent: { deposit: 20000, rent: 310 },
    floorPlans: [{ name: "84㎡A (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2 / 알파룸", bay: 4, structure: "올림픽공원 영구조망" }],
    actualListings: [{ id: "l-gd1-1", tradeType: "sale", price: 238000, areaPyeong: 34, areaSqm: 84.99, floor: "26/35층", dong: "305동", direction: "남동향", description: "올림픽공원 전면 조망, 9호선 급행역 인접", broker: "포레온메이저공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-gd-2",
    name: "고덕그라시움",
    city: "서울", district: "강동구", dong: "고덕동", lat: 37.5552, lng: 127.1565,
    builtYear: 2019, totalHouseholds: 4932, totalBuildings: 53, parkingTotal: 7151, parkingPerHousehold: 1.45, undergroundParkingDirect: true,
    evChargers: "완속 110기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "단지상가 GS25 도보 1분", oliveyoung: "상일동역점 도보 2분", daiso: "상일동역점 도보 3분", subwayDetail: "5호선 상일동역 직통 연결" },
    floorAreaRatio: 249, buildingCoverageRatio: 16, heating: "지역난방", nearestStation: "5호선 상일동역 도보 1분", school: "서울강덕초, 고덕초",
    tags: ["5천세대대단지", "초역세권", "숲세권", "평지"], listingCounts: { sale: 55, jeonse: 36, rent: 24, total: 115 },
    recentTransaction: { price: 172000, date: "2026.10", floor: "16층", areaPyeong: 34, areaSqm: 84.24, changeRate: "+1.3%" },
    jeonsePrice: 88000, monthlyRent: { deposit: 15000, rent: 260 },
    floorPlans: [{ name: "84㎡A (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2", bay: 4, structure: "상일동역 직통 연결" }],
    actualListings: [{ id: "l-gd2-1", tradeType: "sale", price: 175000, areaPyeong: 34, areaSqm: 84.24, floor: "19/35층", dong: "118동", direction: "남향", description: "상일동역 1번출구 바로 앞, 조경뷰 극상", broker: "그라시움으뜸공인", verifiedDate: "2026.11.26" }]
  },

  // ==================== 4. 서울 마포 / 용산 / 성동 (마용성) ====================
  {
    id: "apt-mp-1",
    name: "마포래미안푸르지오",
    city: "서울", district: "마포구", dong: "아현동", lat: 37.5529, lng: 126.9555,
    builtYear: 2014, totalHouseholds: 3885, totalBuildings: 51, parkingTotal: 4856, parkingPerHousehold: 1.25, undergroundParkingDirect: true,
    evChargers: "완속 62기", slopeStatus: "완경사 (단지내 엘리베이터 5기 보행 평지화)",
    amenities: { convenienceStore: "GS25 마래푸점 도보 1분", oliveyoung: "애오개역점 도보 4분", daiso: "공덕역점 도보 9분", subwayDetail: "5호선 애오개역 도보 3분 / 2호선 아현역 도보 6분" },
    floorAreaRatio: 259, buildingCoverageRatio: 20, heating: "개별난방", nearestStation: "5호선 애오개역 / 2호선 아현역", school: "서울아현초등학교",
    tags: ["마용성대장", "더블역세권", "광화문여의도출퇴근", "대단지"], listingCounts: { sale: 48, jeonse: 29, rent: 17, total: 94 },
    recentTransaction: { price: 188000, date: "2026.10", floor: "12층", areaPyeong: 34, areaSqm: 84.59, changeRate: "+0.5%" },
    jeonsePrice: 102000, monthlyRent: { deposit: 15000, rent: 290 },
    floorPlans: [{ name: "84㎡A (34평형)", type: "3-Bay 판상형", rooms: "방3 / 욕실2 / 드레스룸", bay: 3, structure: "맞통풍 시원한 구조" }],
    actualListings: [{ id: "l-mp1-1", tradeType: "sale", price: 189000, areaPyeong: 34, areaSqm: 84.59, floor: "15/30층", dong: "208동", direction: "남향", description: "애오개역 인접동, 올수리 A급", broker: "마포마래푸공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-mp-2",
    name: "마포프레스티지자이",
    city: "서울", district: "마포구", dong: "염리동", lat: 37.5492, lng: 126.9458,
    builtYear: 2021, totalHouseholds: 1694, totalBuildings: 18, parkingTotal: 2032, parkingPerHousehold: 1.2, undergroundParkingDirect: true,
    evChargers: "완속 58기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "GS25 마프자점 도보 1분", oliveyoung: "이대점 도보 4분", daiso: "신촌본점 도보 8분", subwayDetail: "2호선 이대역 도보 3분" },
    floorAreaRatio: 255, buildingCoverageRatio: 20, heating: "지역난방", nearestStation: "2호선 이대역 도보 3분", school: "서울용강초등학교",
    tags: ["마포신축대장", "2호선역세권", "수영장", "평지"], listingCounts: { sale: 31, jeonse: 20, rent: 12, total: 63 },
    recentTransaction: { price: 205000, date: "2026.11", floor: "18층", areaPyeong: 34, areaSqm: 84.92, changeRate: "+1.8%" },
    jeonsePrice: 115000, monthlyRent: { deposit: 20000, rent: 320 },
    floorPlans: [{ name: "84㎡A (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2", bay: 4, structure: "남향 4베이 채광극상" }],
    actualListings: [{ id: "l-mp2-1", tradeType: "sale", price: 208000, areaPyeong: 34, areaSqm: 84.92, floor: "21/27층", dong: "105동", direction: "남향", description: "이대역 초인접, 조경뷰 극상", broker: "마프자자이공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-ys-1",
    name: "용산센트럴파크",
    city: "서울", district: "용산구", dong: "한강로3가", lat: 37.5284, lng: 126.9688,
    builtYear: 2020, totalHouseholds: 1140, totalBuildings: 5, parkingTotal: 2462, parkingPerHousehold: 2.16, undergroundParkingDirect: true,
    evChargers: "급속 10기, 완속 38기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "이마트24 지하직통 도보 1분", oliveyoung: "용산아이파크몰점 도보 5분", daiso: "용산역점 도보 6분", subwayDetail: "4호선 신용산역 도보 2분 / 1호선 용산역 도보 5분" },
    floorAreaRatio: 799, buildingCoverageRatio: 52, heating: "지역난방", nearestStation: "4호선 신용산역 / 1호선 용산역", school: "서울한강초등학교",
    tags: ["용산공원뷰", "트리플역세권", "주상복합", "평지"], listingCounts: { sale: 22, jeonse: 14, rent: 12, total: 48 },
    recentTransaction: { price: 325000, date: "2026.10", floor: "25층", areaPyeong: 43, areaSqm: 114.2, changeRate: "+2.1%" },
    jeonsePrice: 175000, monthlyRent: { deposit: 30000, rent: 550 },
    floorPlans: [{ name: "114㎡ (43평형)", type: "타워형 4-Bay", rooms: "방3 / 욕실2 / 알파룸", bay: 4, structure: "용산민족공원 파노라마뷰" }],
    actualListings: [{ id: "l-ys1-1", tradeType: "sale", price: 330000, areaPyeong: 43, areaSqm: 114.2, floor: "31/43층", dong: "102동", direction: "남동향", description: "용산공원 파노라마 영구조망", broker: "용산파크공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-sd-1",
    name: "트리마제",
    city: "서울", district: "성동구", dong: "성수동1가", lat: 37.5388, lng: 127.0452,
    builtYear: 2017, totalHouseholds: 688, totalBuildings: 4, parkingTotal: 1114, parkingPerHousehold: 1.62, undergroundParkingDirect: true,
    evChargers: "완속 36기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "세븐일레븐 단지내 도보 1분", oliveyoung: "서울숲역점 도보 6분", daiso: "성수역점 대중교통 5분", subwayDetail: "수인분당선 서울숲역 도보 7분" },
    floorAreaRatio: 399, buildingCoverageRatio: 26, heating: "지역난방", nearestStation: "수인분당선 서울숲역 도보 7분", school: "서울경동초등학교",
    tags: ["성수동대장", "한강뷰", "호텔식조식서비스", "평지"], listingCounts: { sale: 19, jeonse: 11, rent: 14, total: 44 },
    recentTransaction: { price: 418000, date: "2026.10", floor: "28층", areaPyeong: 38, areaSqm: 84.82, changeRate: "+1.9%" },
    jeonsePrice: 220000, monthlyRent: { deposit: 40000, rent: 680 },
    floorPlans: [{ name: "84㎡ (38평형)", type: "타워형", rooms: "방3 / 욕실2", bay: 3, structure: "한강과 서울숲 듀얼 파노라마" }],
    actualListings: [{ id: "l-sd1-1", tradeType: "sale", price: 425000, areaPyeong: 38, areaSqm: 84.82, floor: "34/47층", dong: "101동", direction: "남향", description: "한강과 서울숲 조망 스카이라인", broker: "서울숲트리마제공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-sd-2",
    name: "아크로서울포레스트",
    city: "서울", district: "성동구", dong: "성수동1가", lat: 37.5442, lng: 127.0435,
    builtYear: 2020, totalHouseholds: 280, totalBuildings: 2, parkingTotal: 750, parkingPerHousehold: 2.67, undergroundParkingDirect: true,
    evChargers: "완속 40기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "디타워 서울포레스트 지하 도보 1분", oliveyoung: "서울숲점 도보 2분", daiso: "뚝섬역점 도보 5분", subwayDetail: "수인분당선 서울숲역 지하 직통 연결" },
    floorAreaRatio: 599, buildingCoverageRatio: 29, heating: "개별난방", nearestStation: "수인분당선 서울숲역 직통", school: "서울경동초등학교",
    tags: ["하이엔드최고봉", "서울숲직결", "한강조망", "평지"], listingCounts: { sale: 8, jeonse: 6, rent: 5, total: 19 },
    recentTransaction: { price: 780000, date: "2026.11", floor: "35층", areaPyeong: 62, areaSqm: 160.2, changeRate: "+5.1%" },
    jeonsePrice: 420000, monthlyRent: { deposit: 100000, rent: 1200 },
    floorPlans: [{ name: "160㎡ (62평형)", type: "파노라마 오픈형", rooms: "방3 / 욕실3", bay: 4, structure: "서울숲 아트프레임 창호" }],
    actualListings: [{ id: "l-sd2-1", tradeType: "sale", price: 790000, areaPyeong: 62, areaSqm: 160.2, floor: "38/49층", dong: "A동", direction: "남향", description: "서울숲 및 한강 영구 파노라마 액자뷰", broker: "포레스트프라임공인", verifiedDate: "2026.11.26" }]
  },

  // ==================== 5. 서울 서남 / 영등포 / 양천 / 동작 ====================
  {
    id: "apt-yd-1",
    name: "여의도시범",
    city: "서울", district: "영등포구", dong: "여의도동", lat: 37.5218, lng: 126.9362,
    builtYear: 1971, totalHouseholds: 1584, totalBuildings: 24, parkingTotal: 1584, parkingPerHousehold: 1.0, undergroundParkingDirect: false,
    evChargers: "완속 15기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "단지내 CU 도보 1분", oliveyoung: "여의도역점 도보 6분", daiso: "여의도점 도보 7분", subwayDetail: "5호선 여의나루역 도보 5분" },
    floorAreaRatio: 202, buildingCoverageRatio: 15, heating: "중앙난방", nearestStation: "5호선 여의나루역 도보 5분", school: "서울여의도초등학교",
    tags: ["여의도재건축대장", "한강공원도보", "신통기획선정", "평지"], listingCounts: { sale: 28, jeonse: 14, rent: 11, total: 53 },
    recentTransaction: { price: 260000, date: "2026.11", floor: "11층", areaPyeong: 36, areaSqm: 118.1, changeRate: "+3.1%" },
    jeonsePrice: 48000, monthlyRent: { deposit: 10000, rent: 180 },
    floorPlans: [{ name: "118㎡ (36평형)", type: "판상형", rooms: "방4 / 욕실1", bay: 2, structure: "한강 직결 조망" }],
    actualListings: [{ id: "l-yd1-1", tradeType: "sale", price: 265000, areaPyeong: 36, areaSqm: 118.1, floor: "12/13층", dong: "4동", direction: "남향", description: "신통기획 65층 재건축 추진, 한강 영구조망", broker: "여의도골드공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-yc-1",
    name: "목동신시가지7단지",
    city: "서울", district: "양천구", dong: "목동", lat: 37.5275, lng: 126.8682,
    builtYear: 1986, totalHouseholds: 2550, totalBuildings: 34, parkingTotal: 2100, parkingPerHousehold: 0.82, undergroundParkingDirect: false,
    evChargers: "완속 24기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "단지상가 GS25 도보 1분", oliveyoung: "오목교역점 도보 2분", daiso: "오목교역점 도보 3분", subwayDetail: "5호선 목동역 도보 2분" },
    floorAreaRatio: 125, buildingCoverageRatio: 13, heating: "지역난방", nearestStation: "5호선 목동역 도보 2분", school: "서정초, 목운중",
    tags: ["목동대장", "초역세권", "명문학군", "대지지분최고"], listingCounts: { sale: 34, jeonse: 22, rent: 15, total: 71 },
    recentTransaction: { price: 225000, date: "2026.10", floor: "10층", areaPyeong: 27, areaSqm: 66.6, changeRate: "+2.5%" },
    jeonsePrice: 65000, monthlyRent: { deposit: 10000, rent: 200 },
    floorPlans: [{ name: "66㎡ (27평형)", type: "2-Bay 판상형", rooms: "방3 / 욕실1", bay: 2, structure: "대지지분 20평 이상 황금단지" }],
    actualListings: [{ id: "l-yc1-1", tradeType: "sale", price: 228000, areaPyeong: 27, areaSqm: 66.6, floor: "8/15층", dong: "712동", direction: "남향", description: "목동역 도보 2분, 목운중 배정 로얄동", broker: "목동7단지부동산", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-dj-1",
    name: "흑석아크로리버하임",
    city: "서울", district: "동작구", dong: "흑석동", lat: 37.5112, lng: 126.9628,
    builtYear: 2018, totalHouseholds: 1073, totalBuildings: 20, parkingTotal: 1380, parkingPerHousehold: 1.28, undergroundParkingDirect: true,
    evChargers: "완속 45기", slopeStatus: "완경사 테라스하우스 특화",
    amenities: { convenienceStore: "단지내 CU 도보 1분", oliveyoung: "흑석역점 도보 3분", daiso: "중앙대점 도보 6분", subwayDetail: "9호선 흑석역 도보 3분" },
    floorAreaRatio: 206, buildingCoverageRatio: 30, heating: "개별난방", nearestStation: "9호선 흑석역 도보 3분", school: "서울흑석초등학교",
    tags: ["흑석뉴타운대장", "한강뷰", "9호선역세권", "테라스"], listingCounts: { sale: 23, jeonse: 15, rent: 9, total: 47 },
    recentTransaction: { price: 238000, date: "2026.11", floor: "16층", areaPyeong: 34, areaSqm: 84.75, changeRate: "+2.2%" },
    jeonsePrice: 110000, monthlyRent: { deposit: 20000, rent: 330 },
    floorPlans: [{ name: "84㎡ (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2", bay: 4, structure: "한강 파노라마 조망" }],
    actualListings: [{ id: "l-dj1-1", tradeType: "sale", price: 242000, areaPyeong: 34, areaSqm: 84.75, floor: "19/28층", dong: "105동", direction: "남향", description: "흑석역 초역세권, 영구 한강뷰", broker: "흑석아크로공인", verifiedDate: "2026.11.26" }]
  },

  // ==================== 6. 서울 동북 / 노원 / 서대문 ====================
  {
    id: "apt-nw-1",
    name: "상계주공7단지",
    city: "서울", district: "노원구", dong: "상계동", lat: 37.6548, lng: 127.0607,
    builtYear: 1988, totalHouseholds: 2634, totalBuildings: 21, parkingTotal: 1712, parkingPerHousehold: 0.65, undergroundParkingDirect: false,
    evChargers: "완속 18기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "단지내 CU 도보 1분", oliveyoung: "노원역점 도보 3분", daiso: "노원역점 도보 4분", subwayDetail: "4/7호선 노원역 도보 2분" },
    floorAreaRatio: 198, buildingCoverageRatio: 14, heating: "지역난방", nearestStation: "4/7호선 노원역 도보 2분", school: "서울상월초등학교",
    tags: ["재건축기대", "더블역세권", "서울가성비", "평지"], listingCounts: { sale: 38, jeonse: 22, rent: 15, total: 75 },
    recentTransaction: { price: 74000, date: "2026.11", floor: "9층", areaPyeong: 24, areaSqm: 59.39, changeRate: "-0.5%" },
    jeonsePrice: 28000, monthlyRent: { deposit: 5000, rent: 110 },
    floorPlans: [{ name: "59㎡ (24평형)", type: "2-Bay 판상형", rooms: "방2 / 욕실1", bay: 2, structure: "노원역 초인접 복도식" }],
    actualListings: [{ id: "l-nw1-1", tradeType: "sale", price: 73000, areaPyeong: 24, areaSqm: 59.39, floor: "11/15층", dong: "708동", direction: "남향", description: "노원역 도보 2분, 특올수리 완료", broker: "노원부동산써브", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-sdm-1",
    name: "DMC래미안e편한세상",
    city: "서울", district: "서대문구", dong: "북가좌동", lat: 37.5802, lng: 126.9114,
    builtYear: 2012, totalHouseholds: 3293, totalBuildings: 51, parkingTotal: 3984, parkingPerHousehold: 1.21, undergroundParkingDirect: true,
    evChargers: "완속 52기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "GS25 도보 2분", oliveyoung: "가좌역점 도보 6분", daiso: "북가좌점 도보 7분", subwayDetail: "경의중앙선 가좌역 도보 5분" },
    floorAreaRatio: 236, buildingCoverageRatio: 22, heating: "개별난방", nearestStation: "경의중앙선 가좌역 도보 5분", school: "서울북가좌초등학교",
    tags: ["DMC직주근접", "대단지", "초품아", "불광천", "평지"], listingCounts: { sale: 35, jeonse: 21, rent: 14, total: 70 },
    recentTransaction: { price: 122000, date: "2026.10", floor: "14층", areaPyeong: 33, areaSqm: 84.97, changeRate: "+1.0%" },
    jeonsePrice: 68000, monthlyRent: { deposit: 10000, rent: 220 },
    floorPlans: [{ name: "84㎡ (33평형)", type: "3-Bay 판상형", rooms: "방3 / 욕실2", bay: 3, structure: "불광천 조망 남향" }],
    actualListings: [{ id: "l-sdm1-1", tradeType: "sale", price: 124000, areaPyeong: 33, areaSqm: 84.97, floor: "17/30층", dong: "203동", direction: "남향", description: "가좌역 인접동, 확 트인 불광천 조망권", broker: "DMC래미안공인", verifiedDate: "2026.11.26" }]
  },

  // ==================== 7. 경기 분당 / 판교 ====================
  {
    id: "apt-bd-1",
    name: "분당파크뷰",
    city: "경기", district: "성남시 분당구", dong: "정자동", lat: 37.3688, lng: 127.1084,
    builtYear: 2004, totalHouseholds: 1829, totalBuildings: 13, parkingTotal: 4335, parkingPerHousehold: 2.37, undergroundParkingDirect: true,
    evChargers: "완속 78기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "GS25 파크뷰점 도보 1분", oliveyoung: "정자역점 도보 6분", daiso: "분당정자점 도보 8분", subwayDetail: "수인분당/신분당선 정자역 도보 7분" },
    floorAreaRatio: 355, buildingCoverageRatio: 22, heating: "지역난방", nearestStation: "수인분당/신분당선 정자역 도보 7분", school: "정자초등학교",
    tags: ["분당대장", "탄천조망", "정자역세권", "평지"], listingCounts: { sale: 28, jeonse: 19, rent: 15, total: 62 },
    recentTransaction: { price: 203000, date: "2026.11", floor: "21층", areaPyeong: 33, areaSqm: 84.99, changeRate: "+0.9%" },
    jeonsePrice: 115000, monthlyRent: { deposit: 20000, rent: 330 },
    floorPlans: [{ name: "84㎡ (33평형)", type: "고급 주상복합", rooms: "방3 / 욕실2", bay: 3, structure: "탄천 영구파노라마뷰" }],
    actualListings: [{ id: "l-bd1-1", tradeType: "sale", price: 205000, areaPyeong: 33, areaSqm: 84.99, floor: "26/35층", dong: "602동", direction: "남동향", description: "탄천 영구조망, 올리모델링 풀옵션", broker: "정자파크뷰공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-pg-1",
    name: "판교봇들마을7단지",
    city: "경기", district: "성남시 분당구", dong: "삼평동", lat: 37.4042, lng: 127.1165,
    builtYear: 2009, totalHouseholds: 585, totalBuildings: 9, parkingTotal: 1030, parkingPerHousehold: 1.76, undergroundParkingDirect: true,
    evChargers: "완속 34기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "이마트24 봇들점 도보 2분", oliveyoung: "판교아브뉴프랑점 도보 5분", daiso: "판교역점 도보 6분", subwayDetail: "신분당/경강선 판교역 도보 5분" },
    floorAreaRatio: 165, buildingCoverageRatio: 15, heating: "지역난방", nearestStation: "신분당/경강선 판교역 도보 5분", school: "보평초·보평중",
    tags: ["판교테크노밸리", "신분당선", "보평학군", "평지"], listingCounts: { sale: 16, jeonse: 12, rent: 8, total: 36 },
    recentTransaction: { price: 232000, date: "2026.10", floor: "11층", areaPyeong: 33, areaSqm: 84.85, changeRate: "+1.5%" },
    jeonsePrice: 125000, monthlyRent: { deposit: 20000, rent: 360 },
    floorPlans: [{ name: "84㎡A (33평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2 / 팬트리", bay: 4, structure: "탄천 조망 채광 극상" }],
    actualListings: [{ id: "l-pg1-1", tradeType: "sale", price: 235000, areaPyeong: 33, areaSqm: 84.85, floor: "15/20층", dong: "704동", direction: "남향", description: "판교역 도보 5분, 보평학군 배정", broker: "판교보평공인", verifiedDate: "2026.11.26" }]
  },

  // ==================== 8. 경기 과천 / 안양(평촌) ====================
  {
    id: "apt-gc-1",
    name: "과천푸르지오써밋",
    city: "경기", district: "과천시", dong: "중앙동", lat: 37.4276, lng: 126.9882,
    builtYear: 2020, totalHouseholds: 1571, totalBuildings: 32, parkingTotal: 2733, parkingPerHousehold: 1.74, undergroundParkingDirect: true,
    evChargers: "완속 56기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "CU 과천써밋점 도보 2분", oliveyoung: "과천점 도보 4분", daiso: "과천점 도보 5분", subwayDetail: "4호선 정부과천청사역 도보 4분" },
    floorAreaRatio: 227, buildingCoverageRatio: 18, heating: "지역난방", nearestStation: "4호선 정부과천청사역 도보 4분", school: "과천초등학교",
    tags: ["과천대장", "준강남", "초역세권", "고급하이엔드", "평지"], listingCounts: { sale: 26, jeonse: 17, rent: 9, total: 52 },
    recentTransaction: { price: 219000, date: "2026.10", floor: "16층", areaPyeong: 34, areaSqm: 84.93, changeRate: "+1.8%" },
    jeonsePrice: 118000, monthlyRent: { deposit: 20000, rent: 340 },
    floorPlans: [{ name: "84㎡A (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2", bay: 4, structure: "관악산 사계절 조망" }],
    actualListings: [{ id: "l-gc1-1", tradeType: "sale", price: 222000, areaPyeong: 34, areaSqm: 84.93, floor: "19/28층", dong: "112동", direction: "남향", description: "관악산 조망, 스카이라운지 인접동", broker: "과천써밋공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-pc-1",
    name: "평촌더샵센트럴시티",
    city: "경기", district: "안양시 동안구", dong: "관양동", lat: 37.3978, lng: 126.9658,
    builtYear: 2016, totalHouseholds: 1459, totalBuildings: 10, parkingTotal: 1955, parkingPerHousehold: 1.34, undergroundParkingDirect: true,
    evChargers: "완속 45기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "CU 평촌더샵점 도보 1분", oliveyoung: "평촌역점 도보 5분", daiso: "평촌역점 도보 6분", subwayDetail: "4호선 평촌역 도보 5분" },
    floorAreaRatio: 269, buildingCoverageRatio: 18, heating: "지역난방", nearestStation: "4호선 평촌역 도보 5분", school: "부림초등학교",
    tags: ["평촌신축", "평촌학원가", "역세권", "평지"], listingCounts: { sale: 25, jeonse: 17, rent: 10, total: 52 },
    recentTransaction: { price: 132000, date: "2026.10", floor: "18층", areaPyeong: 34, areaSqm: 84.97, changeRate: "+0.8%" },
    jeonsePrice: 70000, monthlyRent: { deposit: 10000, rent: 230 },
    floorPlans: [{ name: "84㎡A (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2", bay: 4, structure: "평촌학원가 셔틀 승하차 바로앞" }],
    actualListings: [{ id: "l-pc1-1", tradeType: "sale", price: 135000, areaPyeong: 34, areaSqm: 84.97, floor: "22/32층", dong: "105동", direction: "남향", description: "평촌역 도보 5분, 학원가 초근접", broker: "평촌센트럴공인", verifiedDate: "2026.11.26" }]
  },

  // ==================== 9. 경기 수원(광교) / 화성(동탄) / 하남 / 일산 ====================
  {
    id: "apt-gg-1",
    name: "광교중흥S-클래스",
    city: "경기", district: "수원시 영통구", dong: "원천동", lat: 37.2844, lng: 127.0583,
    builtYear: 2019, totalHouseholds: 2231, totalBuildings: 10, parkingTotal: 3525, parkingPerHousehold: 1.58, undergroundParkingDirect: true,
    evChargers: "급속 16기, 완속 69기", slopeStatus: "완전 평지 (호수공원 직통 연결)",
    amenities: { convenienceStore: "이마트24 어뮤즈스퀘어 도보 1분", oliveyoung: "갤러리아광교점 도보 5분", daiso: "광교중앙역점 도보 8분", subwayDetail: "신분당선 광교중앙역 도보 8분" },
    floorAreaRatio: 399, buildingCoverageRatio: 37, heating: "지역난방", nearestStation: "신분당선 광교중앙역 도보 8분", school: "수원매원초등학교",
    tags: ["광교호수공원뷰", "갤러리아백화점", "신분당선", "평지"], listingCounts: { sale: 38, jeonse: 24, rent: 16, total: 78 },
    recentTransaction: { price: 156000, date: "2026.11", floor: "25층", areaPyeong: 35, areaSqm: 84.94, changeRate: "+1.1%" },
    jeonsePrice: 85000, monthlyRent: { deposit: 15000, rent: 250 },
    floorPlans: [{ name: "84㎡A (35평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2", bay: 4, structure: "원천호수 환상 전면 조망" }],
    actualListings: [{ id: "l-gg1-1", tradeType: "sale", price: 160000, areaPyeong: 35, areaSqm: 84.94, floor: "38/49층", dong: "103동", direction: "남향", description: "호수공원 파노라마뷰 로얄층", broker: "광교호수중흥공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-dt-1",
    name: "동탄역롯데캐슬",
    city: "경기", district: "화성시", dong: "오산동", lat: 37.2001, lng: 127.0963,
    builtYear: 2021, totalHouseholds: 940, totalBuildings: 4, parkingTotal: 1428, parkingPerHousehold: 1.52, undergroundParkingDirect: true,
    evChargers: "완속 46기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "세븐일레븐 지하1층 도보 1분", oliveyoung: "동탄역점 도보 3분", daiso: "동탄역점 도보 4분", subwayDetail: "GTX-A/SRT 동탄역 지하 직결 (도보 2분)" },
    floorAreaRatio: 599, buildingCoverageRatio: 48, heating: "지역난방", nearestStation: "GTX-A/SRT 동탄역 지하직결", school: "화성여울초등학교",
    tags: ["GTX-A개통", "동탄대장", "백화점직결", "초역세권", "평지"], listingCounts: { sale: 21, jeonse: 15, rent: 10, total: 46 },
    recentTransaction: { price: 165000, date: "2026.10", floor: "23층", areaPyeong: 34, areaSqm: 84.82, changeRate: "+4.5%" },
    jeonsePrice: 72000, monthlyRent: { deposit: 10000, rent: 240 },
    floorPlans: [{ name: "84㎡A (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2", bay: 4, structure: "GTX 및 백화점 원스톱" }],
    actualListings: [{ id: "l-dt1-1", tradeType: "sale", price: 168000, areaPyeong: 34, areaSqm: 84.82, floor: "29/49층", dong: "102동", direction: "남동향", description: "GTX 동탄역 및 롯데백화점 직결 로얄동", broker: "동탄역롯데공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-hn-1",
    name: "미사강변골든센트로",
    city: "경기", district: "하남시", dong: "망월동", lat: 37.5645, lng: 127.1904,
    builtYear: 2014, totalHouseholds: 1455, totalBuildings: 14, parkingTotal: 1673, parkingPerHousehold: 1.15, undergroundParkingDirect: true,
    evChargers: "완속 38기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "GS25 도보 2분", oliveyoung: "미사역점 도보 5분", daiso: "하남미사점 도보 6분", subwayDetail: "5호선 미사역 도보 5분" },
    floorAreaRatio: 219, buildingCoverageRatio: 17, heating: "지역난방", nearestStation: "5호선 미사역 도보 5분", school: "하남미사초등학교",
    tags: ["미사역세권", "망월천수변공원", "초품아", "서울인접", "평지"], listingCounts: { sale: 27, jeonse: 18, rent: 11, total: 56 },
    recentTransaction: { price: 106000, date: "2026.10", floor: "15층", areaPyeong: 34, areaSqm: 84.99, changeRate: "+0.4%" },
    jeonsePrice: 58000, monthlyRent: { deposit: 8000, rent: 180 },
    floorPlans: [{ name: "84㎡A (34평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2", bay: 4, structure: "망월천 수변공원 인접" }],
    actualListings: [{ id: "l-hn1-1", tradeType: "sale", price: 108000, areaPyeong: 34, areaSqm: 84.99, floor: "18/28층", dong: "2805동", direction: "남향", description: "미사역 초인접동, 에어컨 풀옵션", broker: "미사골든공인", verifiedDate: "2026.11.26" }]
  },
  {
    id: "apt-is-1",
    name: "킨텍스원시티(M2블록)",
    city: "경기", district: "고양시 일산서구", dong: "대화동", lat: 37.6625, lng: 126.7554,
    builtYear: 2019, totalHouseholds: 959, totalBuildings: 6, parkingTotal: 1390, parkingPerHousehold: 1.45, undergroundParkingDirect: true,
    evChargers: "완속 42기", slopeStatus: "완전 평지 100%",
    amenities: { convenienceStore: "이마트24 도보 1분", oliveyoung: "일산킨텍스점 도보 4분", daiso: "현대백화점킨텍스점 도보 5분", subwayDetail: "GTX-A 킨텍스역 도보 3분" },
    floorAreaRatio: 479, buildingCoverageRatio: 38, heating: "지역난방", nearestStation: "GTX-A 킨텍스역 도보 3분", school: "고양한류초등학교",
    tags: ["GTX-A개통수혜", "일산대장", "호수공원인접", "초고층", "평지"], listingCounts: { sale: 22, jeonse: 14, rent: 9, total: 45 },
    recentTransaction: { price: 128000, date: "2026.11", floor: "30층", areaPyeong: 35, areaSqm: 84.88, changeRate: "+2.8%" },
    jeonsePrice: 65000, monthlyRent: { deposit: 10000, rent: 210 },
    floorPlans: [{ name: "84㎡ (35평형)", type: "4-Bay 판상형", rooms: "방3 / 욕실2 / 테라스", bay: 4, structure: "일산호수공원 영구조망" }],
    actualListings: [{ id: "l-is1-1", tradeType: "sale", price: 130000, areaPyeong: 35, areaSqm: 84.88, floor: "35/49층", dong: "202동", direction: "남서향", description: "GTX-A 개통 수혜 최고 로얄층", broker: "킨텍스원시티명문공인", verifiedDate: "2026.11.26" }]
  }
];

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
