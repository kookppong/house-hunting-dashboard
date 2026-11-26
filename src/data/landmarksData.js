// Major landmarks across Seoul & Gyeonggi
export const LANDMARK_CATEGORIES = {
  shopping: { label: "쇼핑·백화점", icon: "🛍️", color: "#ec4899", bg: "bg-pink-600" },
  hospital: { label: "종합병원", icon: "🏥", color: "#ef4444", bg: "bg-rose-600" },
  police: { label: "경찰·치안", icon: "👮", color: "#3b82f6", bg: "bg-blue-600" },
  park: { label: "대형공원", icon: "🌳", color: "#10b981", bg: "bg-emerald-600" }
};

export const LANDMARKS = [
  // --- 쇼핑 & 백화점 ---
  { id: "lm-s1", name: "신세계백화점 강남점", category: "shopping", lat: 37.5048, lng: 127.0045, desc: "고속터미널역 직결, 전국 매출 1위 백화점" },
  { id: "lm-s2", name: "현대백화점 판교점", category: "shopping", lat: 37.3986, lng: 127.1118, desc: "판교역 초역세권 수도권 최대 규모 현대백화점" },
  { id: "lm-s3", name: "롯데월드타워 & 롯데월드몰", category: "shopping", lat: 37.5126, lng: 127.1025, desc: "잠실역 직결 대형 쇼핑몰 및 복합문화공간" },
  { id: "lm-s4", name: "더현대 서울 (여의도)", category: "shopping", lat: 37.5259, lng: 126.9284, desc: "여의도 파크원 복합쇼핑몰" },
  { id: "lm-s5", name: "스타필드 하남", category: "shopping", lat: 37.5455, lng: 127.2238, desc: "신세계 스타필드 1호점 및 트레이더스" },
  { id: "lm-s6", name: "스타필드 고양", category: "shopping", lat: 37.6469, lng: 126.8966, desc: "삼송역 인근 복합쇼핑 테마파크" },
  { id: "lm-s7", name: "스타필드 수원", category: "shopping", lat: 37.2982, lng: 126.9912, desc: "별마당도서관 입점 경기 남부 최대 쇼핑몰" },
  { id: "lm-s8", name: "갤러리아백화점 광교", category: "shopping", lat: 37.2882, lng: 127.0567, desc: "광교중앙역 및 광교호수공원 인접" },
  { id: "lm-s9", name: "현대백화점 무역센터점", category: "shopping", lat: 37.5085, lng: 127.0594, desc: "삼성역 코엑스 연결" },
  { id: "lm-s10", name: "이마트 마포점", category: "shopping", lat: 37.5435, lng: 126.9515, desc: "공덕역 직결 대형할인점" },

  // --- 종합병원 ---
  { id: "lm-h1", name: "서울아산병원", category: "hospital", lat: 37.5268, lng: 127.1086, desc: "국내 최대 병상수 상급종합병원 (송파구 풍납동)" },
  { id: "lm-h2", name: "삼성서울병원", category: "hospital", lat: 37.4882, lng: 127.0856, desc: "일원역 인근 상급종합병원 (강남구 일원동)" },
  { id: "lm-h3", name: "서울대학교병원 (본원)", category: "hospital", lat: 37.5796, lng: 126.9990, desc: "혜화동 국립 상급종합병원" },
  { id: "lm-h4", name: "신촌세브란스병원", category: "hospital", lat: 37.5623, lng: 126.9409, desc: "연세의료원 상급종합병원 (서대문구)" },
  { id: "lm-h5", name: "서울성모병원", category: "hospital", lat: 37.5022, lng: 127.0048, desc: "가톨릭의료원 상급종합병원 (서초구 반포동)" },
  { id: "lm-h6", name: "분당서울대학교병원", category: "hospital", lat: 37.3518, lng: 127.1232, desc: "성남 분당구 구미동 상급종합병원" },
  { id: "lm-h7", name: "아주대학교병원", category: "hospital", lat: 37.2804, lng: 127.0436, desc: "수원 영통구 경기남부 권역외상센터" },
  { id: "lm-h8", name: "국립암센터", category: "hospital", lat: 37.6655, lng: 126.7938, desc: "고양시 일산동구 마두동 암전문 종합병원" },

  // --- 경찰서 & 치안 관공서 ---
  { id: "lm-p1", name: "서울강남경찰서", category: "police", lat: 37.5093, lng: 127.0671, desc: "삼성역 인근 강남 치안본부" },
  { id: "lm-p2", name: "서울서초경찰서", category: "police", lat: 37.4952, lng: 127.0051, desc: "고속터미널/서초법원 인근" },
  { id: "lm-p3", name: "서울송파경찰서", category: "police", lat: 37.5019, lng: 127.1264, desc: "경찰병원역 인근 송파 치안본부" },
  { id: "lm-p4", name: "서울마포경찰서", category: "police", lat: 37.5508, lng: 126.9542, desc: "애오개역 마포래미안푸르지오 바로 앞 치안안심" },
  { id: "lm-p5", name: "서울용산경찰서", category: "police", lat: 37.5385, lng: 126.9678, desc: "원효로/남영역 인근" },
  { id: "lm-p6", name: "분당경찰서", category: "police", lat: 37.3697, lng: 127.1158, desc: "정자역 인근 분당구 치안총괄" },
  { id: "lm-p7", name: "과천경찰서", category: "police", lat: 37.4298, lng: 126.9877, desc: "정부과천청사역 앞" },
  { id: "lm-p8", name: "수원남부경찰서", category: "police", lat: 37.2762, lng: 127.0494, desc: "광교/영통 치안 총괄" },
  { id: "lm-p9", name: "화성동탄경찰서", category: "police", lat: 37.2052, lng: 127.0784, desc: "동탄2신도시 치안총괄" },

  // --- 대형공원 ---
  { id: "lm-g1", name: "반포한강공원", category: "park", lat: 37.5115, lng: 126.9965, desc: "달빛무지개분수, 세빛섬, 한강 잔디광장" },
  { id: "lm-g2", name: "올림픽공원", category: "park", lat: 37.5208, lng: 127.1215, desc: "송파구 43만평 대규모 호수 및 체육문화공원" },
  { id: "lm-g3", name: "서울숲", category: "park", lat: 37.5444, lng: 127.0374, desc: "성동구 15만평 생태숲과 잔디마당" },
  { id: "lm-g4", name: "용산민족공원(가족공원)", category: "park", lat: 37.5229, lng: 126.9798, desc: "국립중앙박물관 연계 생태 호수공원" },
  { id: "lm-g5", name: "광교호수공원", category: "park", lat: 37.2831, lng: 127.0628, desc: "국내 최대 도심 호수공원 (원천호수·신대호수)" },
  { id: "lm-g6", name: "일산호수공원", category: "park", lat: 37.6582, lng: 126.7634, desc: "동양 최대 인공호수공원" },
  { id: "lm-g7", name: "분당 율동공원", category: "park", lat: 37.3785, lng: 127.1508, desc: "분당 대형 호수공원과 책테마파크" },
  { id: "lm-g8", name: "동탄호수공원", category: "park", lat: 37.1712, lng: 127.1025, desc: "루나쇼 분수와 수변 카페거리" },
  { id: "lm-g9", name: "미사한강호수공원(망월천)", category: "park", lat: 37.5621, lng: 127.1895, desc: "미사강변도시 중심 수변생태공원" }
];
