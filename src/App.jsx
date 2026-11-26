import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import Header from './components/Header';
import MapView from './components/MapView';
import BudgetSimulator from './components/BudgetSimulator';
import CustomPinManager, { PRESET_PINS } from './components/CustomPinManager';
import { APARTMENT_DATA } from './data/apartmentsData';
import { GripVertical } from 'lucide-react';

export default function App() {
  // Trade Type (02 요구사항: 매매 / 전세 / 월세)
  const [tradeType, setTradeType] = useState('sale'); // 'sale' | 'jeonse' | 'rent'

  // View Mode: 'recent' | 'listing' | 'both'
  const [viewMode, setViewMode] = useState('both');

  // Filter State
  const [filters, setFilters] = useState({
    keyword: '',
    region: 'all',
    priceRange: 'all',
    builtYear: 'all',
    households: 'all'
  });

  // Selected Complex & Listing State
  const [selectedApartmentId, setSelectedApartmentId] = useState('apt-4'); // Default: 마포래미안푸르지오
  const [selectedListing, setSelectedListing] = useState(null);

  // User Custom Pins State (07 요구사항: 집, 회사 위치 핀 여러개)
  const [customPins, setCustomPins] = useState([
    { id: 'pin-1', name: '강남역 테헤란로 (회사)', type: 'company', lat: 37.4979, lng: 127.0276 },
    { id: 'pin-2', name: '판교 테크노밸리 (연구소)', type: 'company', lat: 37.3948, lng: 127.1112 }
  ]);
  const [isPinManagerOpen, setIsPinManagerOpen] = useState(false);
  const [isDroppingPin, setIsDroppingPin] = useState(false);

  // Landmarks Toggle (08 요구사항: 대형몰, 백화점, 병원, 경찰서, 공원)
  const [showLandmarks, setShowLandmarks] = useState(true);

  // Financial Profile State (in 만원)
  const [userBudget, setUserBudget] = useState({
    cash: 50000,              // 보유 현금 5억원
    jeonseReturn: 40000,      // 기존 전세금 회수 4억원
    creditLoan: 5000,         // 신용대출 5,000만원
    ltvRate: 50,              // 주담대 LTV 50%
    interestRate: 3.8,        // 주담대 금리 3.8%
    loanTermYears: 30,        // 30년 만기
    jeonseLoanRate: 70,       // 전세대출 70% (05 요구사항)
    jeonseInterestRate: 3.5,  // 전세대출 금리 3.5%
    movingCost: 1500          // 이사/인테리어 1,500만원
  });

  // Draggable Split Ratio (Default 60% Left, 40% Right)
  const [splitRatio, setSplitRatio] = useState(60);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Dragging Handlers
  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const rawPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const clamped = Math.min(80, Math.max(25, rawPercent));
      setSplitRatio(clamped);
    };

    const handleMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Selected Apartment Object
  const selectedApartment = useMemo(() => {
    return APARTMENT_DATA.find(apt => apt.id === selectedApartmentId) || APARTMENT_DATA[0];
  }, [selectedApartmentId]);

  // User Total Budget calculation (매매 vs 전세 반영)
  const userTotalBudgetManwon = useMemo(() => {
    let loan = 0;
    if (tradeType === 'sale') {
      const price = selectedListing ? selectedListing.price : selectedApartment.recentTransaction.price;
      loan = Math.round(price * (userBudget.ltvRate / 100));
    } else if (tradeType === 'jeonse') {
      const jeonsePrice = selectedListing ? selectedListing.price : (selectedApartment.jeonsePrice || Math.round(selectedApartment.recentTransaction.price * 0.55));
      loan = Math.round(jeonsePrice * ((userBudget.jeonseLoanRate || 70) / 100));
    }
    return userBudget.cash + userBudget.jeonseReturn + userBudget.creditLoan + loan;
  }, [userBudget, selectedApartment, selectedListing, tradeType]);

  // Filter Apartments List
  const filteredApartments = useMemo(() => {
    return APARTMENT_DATA.filter(apt => {
      // 1. Keyword search
      if (filters.keyword.trim()) {
        const kw = filters.keyword.toLowerCase().trim();
        const matchesName = apt.name.toLowerCase().includes(kw);
        const matchesDong = apt.dong.toLowerCase().includes(kw);
        const matchesDistrict = apt.district.toLowerCase().includes(kw);
        const matchesStation = apt.nearestStation.toLowerCase().includes(kw);
        if (!matchesName && !matchesDong && !matchesDistrict && !matchesStation) {
          return false;
        }
      }

      // 2. Price Range (based on recent transaction or jeonse)
      const price = tradeType === 'jeonse' ? (apt.jeonsePrice || 80000) : apt.recentTransaction.price;
      if (filters.priceRange === 'under10' && price > 100000) return false;
      if (filters.priceRange === '10to15' && (price < 100000 || price > 150000)) return false;
      if (filters.priceRange === '15to20' && (price < 150000 || price > 200000)) return false;
      if (filters.priceRange === 'over20' && price <= 200000) return false;

      // 3. Built Year
      const year = apt.builtYear;
      if (filters.builtYear === 'new5' && year < 2021) return false;
      if (filters.builtYear === 'under10' && year < 2016) return false;
      if (filters.builtYear === 'over20' && year > 2006) return false;

      // 4. Households
      if (filters.households !== 'all') {
        const minH = parseInt(filters.households, 10);
        if (apt.totalHouseholds < minH) return false;
      }

      return true;
    });
  }, [filters, tradeType]);

  // Apartment selection handler
  const handleSelectApartment = (apt) => {
    setSelectedApartmentId(apt.id);
    setSelectedListing(null);
  };

  // Custom Pin handlers
  const handleAddCustomPin = (pin) => {
    setCustomPins(prev => [...prev, pin]);
  };

  const handleDeleteCustomPin = (pinId) => {
    setCustomPins(prev => prev.filter(p => p.id !== pinId));
  };

  // Quick Region Jump handler
  const handleJumpRegion = (lat, lng, zoom = 13) => {
    const aptInRegion = APARTMENT_DATA.find(a => 
      Math.abs(a.lat - lat) < 0.05 && Math.abs(a.lng - lng) < 0.05
    );
    if (aptInRegion) {
      setSelectedApartmentId(aptInRegion.id);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-900 select-none">
      {/* Top Header & Filters (02 매매/전월세 탭, 03 빠른이동 구 추가, 07/08 토글 포함) */}
      <Header
        filters={filters}
        setFilters={setFilters}
        viewMode={viewMode}
        setViewMode={setViewMode}
        tradeType={tradeType}
        setTradeType={setTradeType}
        totalCount={APARTMENT_DATA.length}
        filteredCount={filteredApartments.length}
        onResetFilters={() => setFilters({ keyword: '', region: 'all', priceRange: 'all', builtYear: 'all', households: 'all' })}
        onJumpRegion={handleJumpRegion}
        customPinsCount={customPins.length}
        onOpenPinManager={() => setIsPinManagerOpen(true)}
        showLandmarks={showLandmarks}
        setShowLandmarks={setShowLandmarks}
        isDroppingPin={isDroppingPin}
      />

      {/* Main Draggable Split Screen */}
      <div 
        ref={containerRef}
        className="flex-1 flex flex-col md:flex-row overflow-hidden relative"
      >
        {/* Left Side: Map View (01 타일 수정, 04 수도권 한정, 07 거점핀, 08 랜드마크) */}
        <div 
          style={{ width: `${splitRatio}%` }}
          className="h-[50vh] md:h-full relative overflow-hidden transition-[width] duration-75"
        >
          <MapView
            apartments={filteredApartments}
            selectedApartment={selectedApartment}
            onSelectApartment={handleSelectApartment}
            viewMode={viewMode}
            tradeType={tradeType}
            userTotalBudgetManwon={userTotalBudgetManwon}
            splitRatio={splitRatio}
            customPins={customPins}
            onAddCustomPin={handleAddCustomPin}
            isDroppingPin={isDroppingPin}
            setIsDroppingPin={setIsDroppingPin}
            showLandmarks={showLandmarks}
          />
        </div>

        {/* Draggable Divider Handle */}
        <div
          onMouseDown={handleMouseDown}
          onDoubleClick={() => setSplitRatio(60)}
          title="좌우 드래그하여 비율 조절 (더블클릭시 6:4 리셋)"
          className={`hidden md:flex w-2.5 items-center justify-center bg-slate-700/80 hover:bg-emerald-500 cursor-col-resize z-30 transition-colors resizer-divider relative ${
            isDragging ? 'bg-emerald-500 ring-2 ring-emerald-400' : ''
          }`}
        >
          <div className="w-4 h-10 bg-slate-800 text-slate-300 rounded-full flex items-center justify-center shadow-lg border border-slate-600 pointer-events-none">
            <GripVertical className="w-3 h-3" />
          </div>

          {/* Quick Preset Buttons */}
          <div className="absolute top-2 -translate-x-1/2 left-1/2 flex items-center gap-1 bg-slate-900/90 text-white text-[10px] px-2 py-0.5 rounded-full shadow-md border border-slate-700 opacity-0 hover:opacity-100 transition pointer-events-auto">
            <button onClick={() => setSplitRatio(50)} className="hover:text-emerald-400 font-bold px-1">5:5</button>
            <span className="text-slate-600">|</span>
            <button onClick={() => setSplitRatio(60)} className="hover:text-emerald-400 font-bold px-1">6:4</button>
            <span className="text-slate-600">|</span>
            <button onClick={() => setSplitRatio(70)} className="hover:text-emerald-400 font-bold px-1">7:3</button>
          </div>
        </div>

        {/* Right Side: Budget & Detailed Specs (05 전세대출, 06 평면도/인프라/2026매물) */}
        <div 
          style={{ width: `${100 - splitRatio}%` }}
          className="h-[50vh] md:h-full relative z-10 shadow-xl overflow-hidden transition-[width] duration-75"
        >
          <BudgetSimulator
            selectedApartment={selectedApartment}
            userBudget={userBudget}
            setUserBudget={setUserBudget}
            viewMode={viewMode}
            tradeType={tradeType}
            selectedListing={selectedListing}
            onSelectListing={setSelectedListing}
            customPins={customPins}
          />
        </div>
      </div>

      {/* Custom Pin Manager Modal (07 요구사항) */}
      <CustomPinManager
        customPins={customPins}
        onAddPin={handleAddCustomPin}
        onDeletePin={handleDeleteCustomPin}
        isDroppingPin={isDroppingPin}
        setIsDroppingPin={setIsDroppingPin}
        isOpen={isPinManagerOpen}
        onClose={() => setIsPinManagerOpen(false)}
      />
    </div>
  );
}
