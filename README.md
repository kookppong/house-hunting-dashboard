# 🏠 수도권 내집마련 실황 체크 현황판 (House Hunting Dashboard)

> 서울·경기 핵심 아파트 실거래가 및 매물 시세 확인과 내 자산 기반 예산 적합도(녹색/적색 바)를 실시간으로 진단하는 인터랙티브 대시보드

![Dashboard Preview](https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80)

---

## ✨ 핵심 기능

1. **드래그 조절 가능한 좌우 분할 화면**
   - 기본 6:4 비율 제공 및 마우스 드래그를 통한 25% ~ 80% 자유 비율 조절
   - `5:5`, `6:4`, `7:3` 원클릭 프리셋 및 더블클릭 기본값 복원 기능
   - 화면 리사이즈 시 `ResizeObserver`를 통한 지도 자동 보정

2. **서울·경기 전역 인터랙티브 지도 (Leaflet)**
   - 별도 유료 API 키 없이 전세계 오픈스트리트맵(OSM) 및 CartoDB 고해상도 타일 즉시 동작
   - 지도 스타일 3종 선택 지원 (`OSM 표준`, `Carto Voyager`, `Carto Light`)
   - 수도권 주요 랜드마크 단지(반포, 개포, 송파, 마용성, 노원, 분당, 판교, 과천, 광교, 동탄, 하남, 일산 등) 커스텀 마커 핀 제공

3. **직전 실거래가 vs 실제 등록 매물 분리 조회**
   - **직전 실거래가 모드**: 국토교통부 최근 실거래 기준 시세 확인
   - **실제 등록 매물 모드**: 포털 호가 기준 매물 목록 확인 (동, 층, 향, 특징 등)
   - **동시 비교 모드**: 실거래가와 매물 호가 격차를 한눈에 대조

4. **실시간 내 예산 적합도 진단 바**
   - **녹색 체크바 (`✓ 예산 내 구매 가능`)**: 가용 자금 범위 내 안전 진입 및 여유 자금액 표시
   - **황색 바 (`▲ 예산 근접`)**: 예산 한계 근접 시 주의 알림
   - **붉은색 바 (`! 예산 초과`)**: 자금 부족 시 빨간 경고 바와 함께 부족 자금액 및 대출 증액 가이드 산출

5. **자금 조달 & 대출 시뮬레이터**
   - 보유 현금, 전세보증금 회수액, LTV(40%~70%), 신용대출 슬라이더 조절
   - 취득세(구간별 누진세율), 중개보수(상한요율+VAT), 법무사/채권할인, 이사/인테리어 예비비 자동 산출
   - 원리금균등분할상환 공식 기반 월 예상 상환액 계산

---

## 🛠️ 기술 스택

- **Frontend**: React 19, Vite 8, Tailwind CSS v4
- **Map Engine**: Leaflet 1.9 (OpenStreetMap / CartoDB Voyager Tile)
- **Icons**: Lucide React
- **Typography**: Pretendard WebFont

---

## 🚀 로컬 실행 방법

```bash
# 1. 저장소 클론
git clone https://github.com/<your-username>/<your-repo-name>.git
cd house-hunting-dashboard

# 2. 패키지 설치
npm install

# 3. 개발 서버 실행
npm run dev

# 4. 브라우저 접속
# http://localhost:5173/
```

---

## 📄 라이선스
MIT License
