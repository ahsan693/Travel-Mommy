'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ChevronDown,
  Clock,
  GitCompare,
  MapPin,
  Plane,
  Search,
  SlidersHorizontal,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

import Header from "../header/header";
import Footer from "../footer/footer";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";
import { routesData, type RoutesIconName, type RoutesPageData, type RouteResult } from "../../../lib/data/routesData";

const routesIcons: Record<RoutesIconName, LucideIcon> = {
  Calendar,
  ChevronDown,
  Clock,
  GitCompare,
  MapPin,
  Plane,
  Search,
  SlidersHorizontal,
  ArrowUpRight,
};

function RoutesIcon({ name, ...props }: { name: RoutesIconName } & React.ComponentProps<LucideIcon>) {
  const Icon = routesIcons[name];
  return <Icon {...props} />;
}

/* ----------------------------------------------------------------
   HERO & FILTER WIDGET
---------------------------------------------------------------- */

function FilterWidget({ data }: { data: RoutesPageData["hero"]["filter"] }) {
  return (
    <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-[16px] rounded-[24px] border border-[#E6E6E6] bg-[#F9FBF5] p-[20px] shadow-lg md:h-[136px] md:flex-row md:items-center md:gap-[24px] md:p-[32px]">
      <div className="flex w-full flex-1 flex-col gap-[16px] md:flex-row md:items-center md:gap-[24px]">
        {data.fields.map((field) => (
          <div key={field.id} className="flex flex-1 flex-col gap-[8px] justify-center md:h-[72px]">
            <label htmlFor={field.id} className="font-sans text-[12px] font-semibold text-[#111111]">
              {field.label}
            </label>
            <input
              id={field.id}
              type="text"
              defaultValue={field.defaultValue}
              placeholder={field.placeholder}
              className="mt-[4px] h-[48px] w-full rounded-[12px] border border-[#E6E6E6] bg-[#FFFFFF] px-[16px] font-sans text-[14px] font-medium text-[#000000] placeholder:text-[#7D7D7D] outline-none transition-colors focus:border-[#FDDB32]"
            />
          </div>
        ))}
      </div>
      <div className="mt-[8px] flex shrink-0 justify-end md:mt-0 md:self-end md:pb-[2px]">
        <button 
          type="button" 
          aria-label={data.buttonLabel} 
          className="flex h-[48px] items-center justify-center rounded-[12px] bg-[#fddb32] px-[24px] font-sans text-[14px] font-semibold text-[#000000] transition-colors hover:bg-[#e5c52c]"
        >
          {data.buttonLabel}
        </button>
      </div>
    </div>
  );
}

function Hero({ data }: { data: RoutesPageData["hero"] }) {
  return (
    <section className="relative flex w-full flex-col items-center bg-[#000000] md:h-[615px]">
      <div className="absolute left-0 right-0 top-0 z-20">
        <Header data={headerData} />
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src={data.image}
          alt={data.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col justify-center gap-[32px] px-[20px] pb-[40px] pt-[120px] md:gap-[48px] md:px-[80px] md:pb-[80px] md:pt-[96px]">
        <div className="mt-[40px] flex w-full flex-col items-center justify-center text-center md:mt-[80px]">
          <h1 className="font-sans text-[48px] font-medium leading-[1] tracking-[-0.03em] text-[#FFFFFF] md:text-[72px]">
            {data.title}
            <span className="underline decoration-solid decoration-[#FFFFFF] underline-offset-8">
              {data.titleHighlight}
            </span>
          </h1>
          <p className="mt-[16px] max-w-[804px] font-sans text-[14px] font-normal leading-[1.5] text-[#FFFFFF] md:mt-[24px] md:text-[16px] md:leading-[24px]">
            {data.description}
          </p>
        </div>
        <div className="w-full">
          <FilterWidget data={data.filter} />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   COMBINED CONTAINER FOR STATE (FILTERS + RESULTS)
---------------------------------------------------------------- */

function RoutesContainer({ data }: { data: RoutesPageData }) {
  // Filter States
  const [stops, setStops] = useState<string>("any");
  const [budget, setBudget] = useState<number>(1200);
  const [tripStyles, setTripStyles] = useState<string[]>([]);
  const [continent, setContinent] = useState<string>("everywhere");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Sorting and Pagination State
  const [activePage, setActivePage] = useState("1");
  const [sortOption, setSortOption] = useState<"recommended" | "lowest-price">("lowest-price");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);

  const toggleDropdown = (id: string) => {
    setOpenDropdown(prev => prev === id ? null : id);
  };

  const toggleTripStyle = (val: string) => {
    setTripStyles(prev => 
      prev.includes(val) ? prev.filter(s => s !== val) : [...prev, val]
    );
  };

  const clearFilters = () => {
    setStops("any");
    setBudget(1200);
    setTripStyles([]);
    setContinent("everywhere");
    setOpenDropdown(null);
  };

  // Filter Logic
  const filteredRoutes = data.routeResults.filter(r => {
    const priceNum = Number(r.price.replace(/,/g, ""));
    if (priceNum > budget) return false;
    if (stops !== "any" && r.stops !== stops) return false;
    if (continent !== "everywhere" && r.continent !== continent) return false;
    if (tripStyles.length > 0 && !tripStyles.some(s => r.styles.includes(s))) return false;
    return true;
  });

  // Sort Logic
  const displayedRoutes = sortOption === "lowest-price"
    ? [...filteredRoutes].sort((a, b) => Number(a.price.replace(/,/g, "")) - Number(b.price.replace(/,/g, "")))
    : filteredRoutes;

  return (
    <div className="flex w-full flex-col bg-[#0A0A0A]">
      
      {/* SECONDARY FILTER BAR */}
      <div className="mx-auto flex min-h-[80px] w-full max-w-[1440px] items-start justify-between px-[20px] py-[16px] md:items-center md:px-[80px] md:py-0">
        
        <div className="flex flex-wrap items-center gap-[12px] relative w-full">
          
          {data.hero.secondaryFilters.pills.map((pill) => {
            const isOpen = openDropdown === pill.id;
            const isFiltersPill = pill.id === "filters";
            return (
              <div key={pill.id} className="relative">
                <button
                  onClick={() => toggleDropdown(pill.id)}
                  className={`flex h-[40px] shrink-0 items-center justify-center gap-[8px] rounded-[100px] border border-white/20 px-[14px] py-[10px] font-sans text-[14px] font-medium transition-colors ${
                    isOpen ? 'bg-white/20 text-[#FFFFFF]' : 'bg-white/10 text-[#FFFFFF] hover:bg-white/20'
                  }`}
                >
                  {isFiltersPill && <RoutesIcon name={pill.icon} size={16} strokeWidth={2} className="text-[#FFFFFF]" />}
                  {pill.label}
                  {!isFiltersPill && <RoutesIcon name={pill.icon} size={16} strokeWidth={2} className="text-[#FFFFFF]" />}
                </button>

                {/* Master Filters Dropdown */}
                {isOpen && isFiltersPill && (
                  <div className="absolute left-0 top-[calc(100%+12px)] z-[100] flex w-[300px] md:w-[390px] max-h-[80vh] flex-col rounded-[20px] border border-[#E6E6E6] bg-[#FFFFFF] shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between p-[24px] pb-[16px]">
                      <h3 className="font-sans text-[20px] font-bold text-[#111111]">Filters</h3>
                      <button onClick={() => setOpenDropdown(null)} className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#E6E6E6] hover:bg-gray-50 transition-colors">
                        <RoutesIcon name="ArrowUpRight" size={16} className="text-[#111111]" />
                      </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex flex-1 flex-col gap-[24px] overflow-y-auto px-[24px] pb-[24px] hide-scrollbar">
                      
                      {/* Stops */}
                      <div className="flex flex-col gap-[16px]">
                        <div className="flex items-center justify-between">
                          <h4 className="font-sans text-[16px] font-bold text-[#111111]">Stops</h4>
                          <ChevronDown size={16} className="text-[#111111] rotate-180" />
                        </div>
                        <div className="flex flex-col gap-[16px]">
                          {data.hero.secondaryFilters.stopsOptions.map(opt => (
                            <label key={opt.value} className="flex cursor-pointer items-center gap-[12px]" onClick={() => setStops(opt.value)}>
                              <div className={`flex h-[20px] w-[20px] items-center justify-center rounded-full border ${stops === opt.value ? 'border-[#111111]' : 'border-[#CCCCCC]'}`}>
                                {stops === opt.value && <div className="h-[10px] w-[10px] rounded-full bg-[#111111]" />}
                              </div>
                              <span className="font-sans text-[14px] font-medium text-[#111111]">{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="h-[1px] w-full bg-[#E6E6E6]" />

                      {/* Flight Budget */}
                      <div className="flex flex-col gap-[16px]">
                        <div className="flex items-center justify-between">
                          <h4 className="font-sans text-[16px] font-bold text-[#111111]">Flight budget</h4>
                          <ChevronDown size={16} className="text-[#111111] rotate-180" />
                        </div>
                        <span className="font-sans text-[14px] text-[#767676]">Any budget</span>
                        <input 
                          type="range" min="100" max="1500" step="50" 
                          value={budget} onChange={(e) => setBudget(Number(e.target.value))}
                          className="w-full accent-[#111111]" 
                        />
                      </div>

                      <div className="h-[1px] w-full bg-[#E6E6E6]" />

                      {/* Trip Style */}
                      <div className="flex flex-col gap-[16px]">
                        <div className="flex items-center justify-between">
                          <h4 className="font-sans text-[16px] font-bold text-[#111111]">Trip style</h4>
                          <ChevronDown size={16} className="text-[#111111] rotate-180" />
                        </div>
                        <div className="flex flex-wrap gap-[12px]">
                          {data.hero.secondaryFilters.tripStyleOptions.map(opt => {
                            const isSelected = tripStyles.includes(opt.value);
                            return (
                              <button 
                                key={opt.value} onClick={() => toggleTripStyle(opt.value)}
                                className={`rounded-[100px] border border-[#E6E6E6] px-[16px] py-[8px] font-sans text-[14px] transition-colors ${isSelected ? 'bg-[#111111] font-bold border-transparent text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#111111] hover:bg-gray-50'}`}
                              >
                                {opt.label}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      <div className="h-[1px] w-full bg-[#E6E6E6]" />

                      {/* Continents */}
                      <div className="flex flex-col gap-[16px]">
                        <div className="flex items-center justify-between">
                          <h4 className="font-sans text-[16px] font-bold text-[#111111]">Choose where to explore</h4>
                          <ChevronDown size={16} className="text-[#111111] rotate-180" />
                        </div>
                        <div className="flex flex-wrap gap-[12px]">
                          {data.hero.secondaryFilters.continentsOptions.map(opt => {
                            const isSelected = continent === opt.value;
                            return (
                              <button 
                                key={opt.value} onClick={() => setContinent(opt.value)}
                                className={`rounded-[100px] border border-[#E6E6E6] px-[16px] py-[8px] font-sans text-[14px] transition-colors ${isSelected ? 'bg-[#FDDB32] font-bold border-transparent text-[#111111]' : 'bg-[#FFFFFF] text-[#111111] hover:bg-gray-50'}`}
                              >
                                {opt.label}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-[#E6E6E6] p-[24px]">
                      <button onClick={clearFilters} className="font-sans text-[14px] font-medium text-[#767676] hover:underline">
                        Clear filters
                      </button>
                      <button onClick={() => setOpenDropdown(null)} className="flex h-[40px] items-center justify-center rounded-[12px] bg-[#FDDB32] px-[24px] font-sans text-[14px] font-bold text-[#111111] hover:bg-[#e5c52c] transition-colors">
                        Show {displayedRoutes.length} results
                      </button>
                    </div>
                  </div>
                )}

                {/* Individual Dropdowns */}
                {isOpen && pill.id === "stops" && (
                  <div className="absolute left-0 top-[calc(100%+12px)] z-[100] flex w-[300px] md:w-[380px] flex-col gap-[24px] rounded-[20px] border border-[#E6E6E6] bg-[#FFFFFF] p-[24px] shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[8px]">
                        <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#E6E6E6]">
                          <RoutesIcon name="ArrowUpRight" size={16} className="text-[#111111]" />
                        </div>
                        <h3 className="font-sans text-[20px] font-bold text-[#111111]">Stops</h3>
                      </div>
                      <button onClick={() => setStops("any")} className="font-sans text-[14px] text-[#767676] hover:underline">Clear</button>
                    </div>
                    <div className="flex flex-col gap-[16px]">
                      {data.hero.secondaryFilters.stopsOptions.map(opt => (
                        <label key={opt.value} className="flex cursor-pointer items-center gap-[12px]" onClick={() => setStops(opt.value)}>
                          <div className={`flex h-[20px] w-[20px] items-center justify-center rounded-full border ${stops === opt.value ? 'border-[#111111]' : 'border-[#CCCCCC]'}`}>
                            {stops === opt.value && <div className="h-[10px] w-[10px] rounded-full bg-[#111111]" />}
                          </div>
                          <span className="font-sans text-[14px] font-medium text-[#111111]">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                    <button onClick={() => setOpenDropdown(null)} className="h-[48px] w-full rounded-[12px] bg-[#FDDB32] font-sans text-[14px] font-bold text-[#111111]">
                      Show {displayedRoutes.length} results
                    </button>
                  </div>
                )}

                {isOpen && pill.id === "flight-budget" && (
                  <div className="absolute left-0 top-[calc(100%+12px)] z-[100] flex w-[300px] md:w-[380px] flex-col gap-[24px] rounded-[20px] border border-[#E6E6E6] bg-[#FFFFFF] p-[24px] shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[8px]">
                        <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#E6E6E6]">
                          <RoutesIcon name="ArrowUpRight" size={16} className="text-[#111111]" />
                        </div>
                        <h3 className="font-sans text-[20px] font-bold text-[#111111]">Flight budget</h3>
                      </div>
                      <button onClick={() => setBudget(1200)} className="font-sans text-[14px] text-[#767676] hover:underline">Clear</button>
                    </div>
                    <div className="flex flex-col gap-[16px]">
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-[14px] text-[#767676]">Any budget</span>
                        <span className="font-sans text-[18px] font-bold text-[#111111]">${budget} max</span>
                      </div>
                      <input 
                        type="range" min="100" max="1500" step="50" 
                        value={budget} onChange={(e) => setBudget(Number(e.target.value))}
                        className="w-full accent-[#111111]" 
                      />
                    </div>
                    <button onClick={() => setOpenDropdown(null)} className="h-[48px] w-full rounded-[12px] bg-[#FDDB32] font-sans text-[14px] font-bold text-[#111111]">
                      Show {displayedRoutes.length} results
                    </button>
                  </div>
                )}

                {isOpen && pill.id === "trip-style" && (
                  <div className="absolute left-0 top-[calc(100%+12px)] z-[100] flex w-[300px] md:w-[380px] flex-col gap-[24px] rounded-[20px] border border-[#E6E6E6] bg-[#FFFFFF] p-[24px] shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[8px]">
                        <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#E6E6E6]">
                          <RoutesIcon name="ArrowUpRight" size={16} className="text-[#111111]" />
                        </div>
                        <h3 className="font-sans text-[20px] font-bold text-[#111111]">Trip style</h3>
                      </div>
                      <button onClick={() => setTripStyles([])} className="font-sans text-[14px] text-[#767676] hover:underline">Clear</button>
                    </div>
                    <div className="flex flex-wrap gap-[12px]">
                      {data.hero.secondaryFilters.tripStyleOptions.map(opt => {
                        const isSelected = tripStyles.includes(opt.value);
                        return (
                          <button 
                            key={opt.value} onClick={() => toggleTripStyle(opt.value)}
                            className={`rounded-[100px] border border-[#E6E6E6] px-[16px] py-[8px] font-sans text-[14px] transition-colors ${isSelected ? 'bg-[#111111] font-bold border-transparent text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#111111] hover:bg-gray-50'}`}
                          >
                            {opt.label}
                          </button>
                        )
                      })}
                    </div>
                    <button onClick={() => setOpenDropdown(null)} className="h-[48px] w-full rounded-[12px] bg-[#FDDB32] font-sans text-[14px] font-bold text-[#111111]">
                      Show {displayedRoutes.length} results
                    </button>
                  </div>
                )}

                {isOpen && pill.id === "continents" && (
                  <div className="absolute left-0 top-[calc(100%+12px)] z-[100] flex w-[300px] md:w-[380px] flex-col gap-[24px] rounded-[20px] border border-[#E6E6E6] bg-[#FFFFFF] p-[24px] shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[8px]">
                        <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#E6E6E6]">
                          <RoutesIcon name="ArrowUpRight" size={16} className="text-[#111111]" />
                        </div>
                        <h3 className="font-sans text-[20px] font-bold text-[#111111]">Continents</h3>
                      </div>
                      <button onClick={() => setContinent("everywhere")} className="font-sans text-[14px] text-[#767676] hover:underline">Clear</button>
                    </div>
                    <div className="flex flex-wrap gap-[12px]">
                      {data.hero.secondaryFilters.continentsOptions.map(opt => {
                        const isSelected = continent === opt.value;
                        return (
                          <button 
                            key={opt.value} onClick={() => setContinent(opt.value)}
                            className={`rounded-[100px] border border-[#E6E6E6] px-[16px] py-[8px] font-sans text-[14px] transition-colors ${isSelected ? 'bg-[#FDDB32] font-bold border-transparent text-[#111111]' : 'bg-[#FFFFFF] text-[#111111] hover:bg-gray-50'}`}
                          >
                            {opt.label}
                          </button>
                        )
                      })}
                    </div>
                    <button onClick={() => setOpenDropdown(null)} className="h-[48px] w-full rounded-[12px] bg-[#FDDB32] font-sans text-[14px] font-bold text-[#111111]">
                      Show {displayedRoutes.length} results
                    </button>
                  </div>
                )}

              </div>
            );
          })}
        </div>
        <button onClick={clearFilters} className="hidden shrink-0 font-sans text-[14px] font-medium text-[#fddb32] hover:underline md:block ml-[16px]">
          {data.hero.secondaryFilters.clearLabel}
        </button>
      </div>

      {/* ROUTES RESULTS GRID */}
      <div className="mx-auto w-full max-w-[1440px] px-[20px] py-[40px] md:px-[80px] md:py-[64px]">
        
        {/* Results Header */}
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-[16px] md:flex-row md:items-center">
          <div className="flex flex-col gap-[4px]">
            <h2 className="font-sans text-[20px] font-medium leading-[1] text-[#FFFFFF] md:text-[24px]">
              <span className="text-[#FDDB32] font-bold">{displayedRoutes.length}</span> {data.results.title.replace(/^[0-9]+\s/, '')}
            </h2>
            <p className="font-sans text-[14px] font-normal leading-[1.5] text-[#FFFFFF]/70 md:text-[16px]">
              {data.results.description}
            </p>
          </div>

          <div className="flex items-center gap-[8px]">
            <span className="font-sans text-[13px] font-normal text-[#FFFFFF]/70">
              {data.results.sortLabel}
            </span>
            <div className="relative z-50">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isSortMenuOpen}
                onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}
                className="flex h-[36px] items-center justify-between gap-[12px] rounded-[8px] border border-white/20 bg-transparent px-[12px] font-sans text-[14px] font-medium text-[#FFFFFF] transition-colors hover:bg-white/10"
              >
                {sortOption === "lowest-price" ? data.results.sortValue : data.results.sortOptions[0].label}
                <ChevronDown size={14} className="text-white/70" />
              </button>
              {isSortMenuOpen && (
                <div role="listbox" className="absolute right-0 top-[calc(100%+8px)] z-[100] min-w-[160px] rounded-[12px] bg-[#1a1a1a] p-1 shadow-lg border border-white/10">
                  {data.results.sortOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      role="option"
                      aria-selected={sortOption === option.value}
                      onClick={() => {
                        setSortOption(option.value as "recommended" | "lowest-price");
                        setIsSortMenuOpen(false);
                      }}
                      className="block w-full rounded-[8px] px-3 py-2 text-left font-sans text-[14px] text-white hover:bg-white/10"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Route Cards Grid */}
        <div className="mx-auto mt-[32px] grid w-full max-w-[1280px] grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
          {displayedRoutes.length > 0 ? (
            displayedRoutes.map((route, i) => (
              <RouteCard key={`${route.originCode}-${route.destCode}-${i}`} route={route} content={data.results} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-white/70">
              No flights found matching your criteria. Try clearing your filters.
            </div>
          )}
        </div>

        {/* Pagination */}
        {displayedRoutes.length > 0 && (
          <div className="mt-[48px] flex items-center justify-center gap-[8px]">
            {data.paginationPages.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => page !== "..." && setActivePage(page)}
                disabled={page === "..."}
                className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[8px] font-sans text-[14px] font-semibold transition-colors ${
                  activePage === page
                    ? "bg-[#fddb32] text-black"
                    : "border border-white/20 bg-transparent text-white hover:bg-white/10"
                } ${page === "..." ? "cursor-default border-transparent text-white/40 hover:bg-transparent" : ""}`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function RouteCard({ route, content }: { route: RouteResult; content: RoutesPageData["results"] }) {
  return (
    <div className="flex flex-col rounded-[20px] border border-[#E6E6E6] bg-[#FFFFFF] p-6 transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col items-start">
          <span className="font-sans text-[22px] font-bold leading-none text-[#1A1A19]">
            {route.originCode}
          </span>
          <span className="mt-[6px] flex items-center gap-[4px] font-sans text-[13px] font-normal leading-[1.43] text-[#777777]">
            <span aria-hidden="true" className="inline-flex h-[16px] w-[20px] items-center justify-center text-[14px] leading-none">
              {route.originFlag}
            </span>
            <span>{route.originCity}</span>
          </span>
        </div>

        <div className="flex flex-1 items-center px-3">
          <span className="h-px flex-1 bg-[#E6E6E6]" />
          <RoutesIcon name={content.routeIcon as RoutesIconName} size={16} className="mx-2 shrink-0 text-[#E6E6E6]" />
          <span className="h-px flex-1 bg-[#E6E6E6]" />
        </div>

        <div className="flex flex-col items-end">
          <span className="font-sans text-[22px] font-bold leading-none text-[#1A1A19]">
            {route.destCode}
          </span>
          <span className="mt-[6px] flex items-center justify-end gap-[4px] font-sans text-[13px] font-normal leading-[1.43] text-[#777777]">
            <span>{route.destCity}</span>
            <span aria-hidden="true" className="inline-flex h-[16px] w-[20px] items-center justify-center text-[14px] leading-none">
              {route.destFlag}
            </span>
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[#E6E6E6] pt-4">
        <div className="flex flex-col gap-[6px]">
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2px] text-[#777777]">
            {content.airlineLabel}
          </span>
          <div className="flex items-center gap-[8px]">
            <span
              className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
              style={{ backgroundColor: route.airlineColor }}
            >
              {route.airlineCode}
            </span>
            <span className="font-sans text-[13px] font-bold text-[#1A1A19]">
              {route.airlineName}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-[6px]">
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2px] text-[#777777]">
            {content.durationLabel}
          </span>
          <span className="font-sans text-[13px] font-bold text-[#1A1A19]">
            {route.duration}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between border-t border-[#E6E6E6] pt-4">
        <div className="flex flex-col">
          <span className="font-sans text-[12px] font-normal text-[#777777]">
            {content.priceLabel}
          </span>
          <span className="font-sans text-[22px] font-bold leading-[1] text-[#1A1A19]">
            ${route.price}
          </span>
        </div>
        <Link
          href="#"
          className="flex h-[36px] items-center justify-center rounded-[8px] bg-[#fddb32] px-[16px] font-sans text-[13px] font-bold text-black transition-colors hover:bg-[#e5c52c]"
        >
          {content.bookButtonLabel}
        </Link>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
   TIPS SECTION
---------------------------------------------------------------- */

function TipsSection({ tips }: { tips: RoutesPageData["tips"] }) {
  return (
    <section className="flex w-full flex-col bg-[#F9FBF5] px-[20px] py-[64px] md:px-[80px] md:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[24px] md:gap-[32px]">
        
        <h2 className="font-sans text-[20px] font-medium leading-[1] text-[#1A1A19] md:text-[24px]">
          {tips.title}
        </h2>

        <div className="flex w-full snap-x snap-mandatory flex-nowrap gap-[16px] overflow-x-auto pb-[8px] hide-scrollbar md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
          {tips.items.map((tip, idx) => {
            return (
              <div 
                key={idx}
                className="flex h-[170px] min-w-[200px] snap-start flex-col items-center justify-start rounded-[16px] border border-[#E6E6E6] bg-[#FFFFFF] p-[20px] pt-[28px] text-center shadow-sm"
              >
                <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#FDDB32] mb-[12px]">
                  <RoutesIcon name={tip.icon as RoutesIconName} size={18} className="text-[#1A1A19]" strokeWidth={2} />
                </div>
                <div className="flex flex-col items-center gap-[4px] w-full">
                  <span className="font-sans text-[11px] font-medium uppercase tracking-[0.5px] text-[#7D7D7D]">
                    {tip.label}
                  </span>
                  <p className="font-sans text-[13px] font-medium leading-[1.4] text-[#1A1A19]">
                    {tip.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   MAIN PAGE EXPORT
---------------------------------------------------------------- */

export default function RoutesPage({ data = routesData }: { data?: RoutesPageData }) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#FFFFFF]">
      <Hero data={data.hero} />
      <RoutesContainer data={data} />
      <TipsSection tips={data.tips} />
      <Footer data={footerData} />
    </main>
  );
}