import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import Header from './components/Header';
import MapView from './components/MapView';
import BudgetSimulator from './components/BudgetSimulator';
import { APARTMENT_DATA } from './data/apartmentsData';
import { GripVertical } from 'lucide-react';

export default function App() {
  // Filtering & View Mode State
  const [viewMode, setViewMode] = useState('both'); // 'recent' | 'listing' | 'both'
  const [filters, setFilters] = useState({
    keyword: '',
    region: 'all',
    priceRange: 'all',
    builtYear: 'all',
    households: 'all'
  });

  // Selected complex & listing state
  const [selectedApartmentId, setSelectedApartmentId] = useState('apt-4'); // Default: 마포래미안푸르지오
  const [selectedListing, setSelectedListing] = useState(null);

  // User Financial Profile (in 만원)
  const [userBudget, setUserBudget] = useState({
    cash: 50000,           // 5억원
    jeonseReturn: 40000,   // 4억원
    creditLoan: 5000,      // 5,000만원
    ltvRate: 50,           // 50%
    interestRate: 3.8,     // 3.8%
    loanTermYears: 30,     // 30년
    movingCost: 1500       // 1,500만원
  });

  // Draggable Split Ratio (Default 60% Left, 40% Right)
  const [splitRatio, setSplitRatio] = useState(60);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Mouse drag handlers for smooth resizing
  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const rawPercent = ((e.clientX - rect.left) / rect.width) * 100;
      // Clamp between 25% and 75%
      const clamped = Math.min(80, Math.max(25, rawPercent));
      setSplitRatio(clamped);
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
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
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging]);

  // Reset filters helper
  const handleResetFilters = () => {
    setFilters({
      keyword: '',
      region: 'all',
      priceRange: 'all',
      builtYear: 'all',
      households: 'all'
    });
  };

  // Find currently selected apartment object
  const selectedApartment = useMemo(() => {
    return APARTMENT_DATA.find(apt => apt.id === selectedApartmentId) || APARTMENT_DATA[0];
  }, [selectedApartmentId]);

  // Compute active price of selected apartment for mortgage loan calculation
  const currentBasePrice = useMemo(() => {
    if (selectedListing) return selectedListing.price;
    if (viewMode === 'listing' && selectedApartment.actualListings.length > 0) {
      return Math.min(...selectedApartment.actualListings.map(l => l.price));
    }
    return selectedApartment.recentTransaction.price;
  }, [selectedApartment, selectedListing, viewMode]);

  // Total available user budget (Cash + Jeonse + Credit + LTV Mortgage Loan)
  const userTotalBudgetManwon = useMemo(() => {
    const mortgageCap = Math.round(currentBasePrice * (userBudget.ltvRate / 100));
    return userBudget.cash + userBudget.jeonseReturn + userBudget.creditLoan + mortgageCap;
  }, [userBudget, currentBasePrice]);

  // Filter apartment list based on user selections
  const filteredApartments = useMemo(() => {
    return APARTMENT_DATA.filter(apt => {
      // 1. Keyword search (Name, Dong, District, Station)
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

      // 2. Region filter
      if (filters.region !== 'all') {
        if (filters.region === 'gangnam') {
          if (!['강남구', '서초구', '송파구'].some(d => apt.district.includes(d))) return false;
        } else if (filters.region === 'mayong') {
          if (!['마포구', '용산구', '성동구'].some(d => apt.district.includes(d))) return false;
        } else if (filters.region === 'seoul_etc') {
          if (apt.city !== '서울' || ['강남구', '서초구', '송파구', '마포구', '용산구', '성동구'].some(d => apt.district.includes(d))) {
            return false;
          }
        } else if (filters.region === 'bundang_pangyo') {
          if (!apt.district.includes('분당') && !apt.district.includes('과천')) return false;
        } else if (filters.region === 'newtown') {
          if (!['수원', '화성', '하남', '고양', '안양'].some(c => apt.district.includes(c))) return false;
        }
      }

      // 3. Price Range (based on recent transaction)
      const price = apt.recentTransaction.price;
      if (filters.priceRange === 'under10' && price > 100000) return false;
      if (filters.priceRange === '10to15' && (price < 100000 || price > 150000)) return false;
      if (filters.priceRange === '15to20' && (price < 150000 || price > 200000)) return false;
      if (filters.priceRange === 'over20' && price <= 200000) return false;

      // 4. Built Year
      const year = apt.builtYear;
      if (filters.builtYear === 'new5' && year < 2019) return false;
      if (filters.builtYear === 'under10' && year < 2014) return false;
      if (filters.builtYear === 'over20' && year > 2004) return false;

      // 5. Households
      if (filters.households !== 'all') {
        const minH = parseInt(filters.households, 10);
        if (apt.totalHouseholds < minH) return false;
      }

      return true;
    });
  }, [filters]);

  // Handler when user clicks an apartment
  const handleSelectApartment = (apt) => {
    setSelectedApartmentId(apt.id);
    setSelectedListing(null);
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-900 select-none">
      {/* Top Header & Filters */}
      <Header
        filters={filters}
        setFilters={setFilters}
        viewMode={viewMode}
        setViewMode={setViewMode}
        totalCount={APARTMENT_DATA.length}
        filteredCount={filteredApartments.length}
        onResetFilters={handleResetFilters}
      />

      {/* Main Draggable Split Screen */}
      <div 
        ref={containerRef}
        className="flex-1 flex flex-col md:flex-row overflow-hidden relative"
      >
        {/* Left Side: Map View (Dynamic Width via splitRatio) */}
        <div 
          style={{ width: `${splitRatio}%` }}
          className="h-[50vh] md:h-full relative overflow-hidden transition-[width] duration-75"
        >
          <MapView
            apartments={filteredApartments}
            selectedApartment={selectedApartment}
            onSelectApartment={handleSelectApartment}
            viewMode={viewMode}
            userTotalBudgetManwon={userTotalBudgetManwon}
            splitRatio={splitRatio}
          />
        </div>

        {/* Draggable Divider Handle (Desktop) */}
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

          {/* Quick Preset Buttons on Hover */}
          <div className="absolute top-2 -translate-x-1/2 left-1/2 flex items-center gap-1 bg-slate-900/90 text-white text-[10px] px-2 py-0.5 rounded-full shadow-md border border-slate-700 opacity-0 hover:opacity-100 transition pointer-events-auto">
            <button onClick={() => setSplitRatio(50)} className="hover:text-emerald-400 font-bold px-1">5:5</button>
            <span className="text-slate-600">|</span>
            <button onClick={() => setSplitRatio(60)} className="hover:text-emerald-400 font-bold px-1">6:4</button>
            <span className="text-slate-600">|</span>
            <button onClick={() => setSplitRatio(70)} className="hover:text-emerald-400 font-bold px-1">7:3</button>
          </div>
        </div>

        {/* Right Side: Budget & Financial Dashboard (Remaining Width) */}
        <div 
          style={{ width: `${100 - splitRatio}%` }}
          className="h-[50vh] md:h-full relative z-10 shadow-xl overflow-hidden transition-[width] duration-75"
        >
          <BudgetSimulator
            selectedApartment={selectedApartment}
            userBudget={userBudget}
            setUserBudget={setUserBudget}
            viewMode={viewMode}
            selectedListing={selectedListing}
            onSelectListing={setSelectedListing}
          />
        </div>
      </div>
    </div>
  );
}
