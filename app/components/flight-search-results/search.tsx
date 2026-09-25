'use client';

import { useState } from "react";
import Image from "next/image";
import { Info } from "lucide-react";

import Header from "../header/header";
import Footer from "../footer/footer";
import Widget from "../widget/widget";
import { searchData, type SearchPageData } from "../../../lib/data/searchData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";

/* ----------------------------------------------------------------
   MAIN PAGE COMPONENT
---------------------------------------------------------------- */

export default function SearchPage({ data = searchData }: { data?: SearchPageData }) {
  return (
    <main className="min-h-screen bg-[#FFFFFF] pt-[104px] lg:pt-[112px]">
      <Header data={headerData} />
      <SearchBarSection />
      <ResultsSection data={data} />
      <Footer data={footerData} />
    </main>
  );
}

/* ----------------------------------------------------------------
   SEARCH BAR
---------------------------------------------------------------- */

function SearchBarSection() {
  return (
    <section className="border-b border-[#E6E6E6] bg-[#F9F9F9] px-[16px] py-[20px] sm:px-6 lg:bg-[#FAFAFA] lg:px-20 lg:py-6">
      <Widget />
    </section>
  );
}

/* ----------------------------------------------------------------
   FILTERS SIDEBAR (300px width)
---------------------------------------------------------------- */

function FiltersSidebar({ filters }: { filters: SearchPageData["filters"] }) {
  return (
    <aside className="hidden w-[300px] shrink-0 flex-col gap-[24px] lg:flex">
      <div className="flex items-center justify-between pb-[16px]">
        <span className="font-sans text-[16px] font-medium text-black">{filters.title}</span>
        <button type="button" className="font-sans text-[13px] text-[#7d7d7d] hover:text-black">{filters.resetLabel}</button>
      </div>

      <div className="flex flex-col gap-[16px] border-b border-[#F0F0F0] pb-[24px]">
        <span className="font-sans text-[14px] font-medium text-black">{filters.stopsLabel}</span>
        {filters.stops.map((stop) => (
          <label key={stop.label} className="flex cursor-pointer items-center justify-between font-sans text-[14px] group">
            <div className="flex items-center gap-[12px]">
              <div className="relative flex items-center justify-center">
                <input 
                  type="checkbox" 
                  defaultChecked={stop.checked} 
                  className="peer h-[20px] w-[20px] appearance-none rounded-[5px] border border-[#E6E6E6] bg-white cursor-pointer checked:border-[#FDDB32] checked:bg-[#FDDB32] transition-colors" 
                />
                <svg
                  className="pointer-events-none absolute hidden peer-checked:block"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 4.5L3.5 7L9 1" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-sans text-black">{stop.label}</span>
            </div>
            <span className="font-sans text-[#7d7d7d]">${stop.price}</span>
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-[16px] border-b border-[#F0F0F0] pb-[24px]">
        <span className="font-sans text-[14px] font-medium text-black">{filters.airlinesLabel}</span>
        {filters.airlines.map((airline) => (
          <label key={airline.label} className="flex cursor-pointer items-center gap-[12px] font-sans text-[14px] text-black group">
            <div className="relative flex items-center justify-center">
              <input 
                type="checkbox" 
                defaultChecked={airline.checked} 
                className="peer h-[20px] w-[20px] appearance-none rounded-[5px] border border-[#E6E6E6] bg-white cursor-pointer checked:border-[#FDDB32] checked:bg-[#FDDB32] transition-colors" 
              />
              <svg
                className="pointer-events-none absolute hidden peer-checked:block"
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 4.5L3.5 7L9 1" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {airline.label}
          </label>
        ))}
      </div>

      <div className="flex w-[300px] flex-col gap-[16px] border-b border-[#F0F0F0] pb-[24px]">
        <span className="font-sans text-[14px] font-medium text-black">{filters.priceRangeLabel}</span>
        
        <div className="flex w-full flex-col gap-[16px]">
          <div className="relative flex h-[40px] w-full items-center">
            <div className="absolute h-[4px] w-full rounded-full bg-[#E6E6E6]"></div>
            <div className="absolute left-[15%] right-[20%] h-[4px] rounded-full bg-[#FDDB32]"></div>
            
            <div className="absolute left-[15%] h-[20px] w-[20px] -translate-x-1/2 cursor-pointer rounded-full border border-[#E6E6E6] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.15)] transition-transform hover:scale-110"></div>
            <div className="absolute right-[20%] h-[20px] w-[20px] translate-x-1/2 cursor-pointer rounded-full border border-[#E6E6E6] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.15)] transition-transform hover:scale-110"></div>
          </div>

          <div className="flex h-[40px] w-full items-center justify-between">
            <div className="flex h-full w-[130px] items-center justify-center rounded-[8px] border border-[#E6E6E6] bg-[#FAFAFA] font-sans text-[14px] font-medium text-black">
              ${filters.priceRange.min}
            </div>
            <div className="h-[1px] w-[12px] bg-[#E6E6E6]"></div>
            <div className="flex h-full w-[130px] items-center justify-center rounded-[8px] border border-[#E6E6E6] bg-[#FAFAFA] font-sans text-[14px] font-medium text-black">
              ${filters.priceRange.max.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[300px] flex-col gap-[16px] border-b-2 border-[#F9FBF5] pb-[24px]">
        <span className="font-sans text-[14px] font-medium text-black">{filters.departureTimeLabel}</span>
        <div className="flex flex-wrap gap-[12px]">
          {filters.departureTimes.map((time) => (
            <button 
              type="button" 
              key={time} 
              className="flex h-[36px] items-center justify-center rounded-[10px] border border-[#F9FBF5] bg-white px-[12px] py-[8px] font-sans text-[13px] text-black transition-colors hover:border-[#d9d9d9] hover:bg-gray-50"
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

/* ----------------------------------------------------------------
   RESULTS SECTION (932px width)
---------------------------------------------------------------- */

function ResultsSection({ data }: { data: SearchPageData }) {
  const [activeTab, setActiveTab] = useState(data.resultsHeader.tabs[0]);

  return (
    <section className="bg-white px-[16px] py-[24px] sm:px-6 sm:py-10 lg:px-20 lg:py-14">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col justify-between gap-[24px] lg:flex-row lg:gap-12">
        
        <FiltersSidebar filters={data.filters} />

        <div className="flex w-full max-w-[932px] min-w-0 flex-col gap-[24px]">
          
          <div className="flex flex-col gap-[16px] lg:hidden">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-[4px] pr-[16px]">
                <span className="font-sans text-[20px] font-bold text-[#111111]">
                  {data.resultsHeader.count} {data.resultsHeader.countLabel}
                </span>
                <p className="font-sans text-[12px] font-normal leading-[18px] text-[#7D7D7D]">
                  Prices and availability can change. TravelMommy compares flight options and redirects you to the selected provider to complete your booking.
                </p>
              </div>
            </div>

            <div className="flex w-full rounded-[12px] border border-[#E6E6E6] bg-[#FFFFFF] p-[4px]">
              {data.resultsHeader.tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex flex-1 items-center justify-center rounded-[8px] px-[12px] py-[8px] font-sans text-[13px] font-medium transition-colors ${
                    activeTab === tab 
                    ? "bg-white text-[#111111] shadow-[0_1px_4px_rgba(0,0,0,0.1)]" 
                    : "text-[#7D7D7D] hover:text-[#111111]"
                  }`}
                >
                  {tab}
                  {tab === "Best" && <Info size={14} strokeWidth={2} className="ml-[4px] inline-block text-[#C4C4C4]" />}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between lg:flex">
            <div className="flex w-full max-w-[327px] flex-col gap-[4px]">
              <span className="font-sans text-[14px] font-medium text-black">
                {data.resultsHeader.count} {data.resultsHeader.countLabel}
              </span>
              <p className="font-sans text-[10px] font-normal leading-[1.4] text-[#808080]">
                Prices and availability can change. TravelMommy compares flight options and redirects you to the selected provider to complete your booking.
              </p>
            </div>
            
            <div className="flex shrink-0 rounded-full bg-[#F9F9F9] p-1">
              {data.resultsHeader.tabs.map((tab) => (
                <div key={tab} className="relative flex group" tabIndex={0}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center rounded-[100px] px-[24px] py-[8px] font-sans text-[13px] font-medium transition-colors ${
                      activeTab === tab ? "bg-white text-black shadow-sm" : "text-[#7d7d7d] hover:text-black"
                    }`}
                  >
                    {tab}
                    {tab === "Best" && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-[4px] inline-block">
                        <circle cx="6" cy="6" r="5.585" stroke="#999999" strokeWidth="0.83"/>
                        <path d="M6 5.5V8.5" stroke="#999999" strokeWidth="0.83" strokeLinecap="round"/>
                        <circle cx="6" cy="3.5" r="0.8" fill="#999999"/>
                      </svg>
                    )}
                  </button>
                  
                  {tab === "Best" && (
                    <div className="absolute left-1/2 top-full mt-[2px] hidden w-[234px] -translate-x-1/2 flex-col items-center z-50 opacity-0 transition-opacity group-hover:flex group-hover:opacity-100 group-focus-within:flex group-focus-within:opacity-100 group-focus:flex group-focus:opacity-100">
                      <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L12 0L6 6L0 0Z" fill="#26262B"/>
                      </svg>
                      <div className="flex h-[32px] w-full items-center justify-center rounded-[8px] bg-[#26262B] px-[12px] py-[8px] shadow-lg">
                        <span className="w-[210px] font-sans text-[12px] font-normal leading-[16px] text-[#FFFFFF] text-center">
                          Best balances price and journey time
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[16px]">
            {data.flights.map((flight) => (
              <div key={flight.id} className="flex flex-col gap-[20px] rounded-[16px] border border-[#E6E6E6] bg-[#F9FBF5] p-[16px] transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-[24px] lg:rounded-[20px] lg:p-[20px]">
                
                {/* MOBILE LOGO */}
                <div className="flex items-center justify-between sm:hidden">
                  <div className="flex items-center gap-[12px]">
                    <div className={`flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-[6px] ${flight.id === "1" || flight.id === "4" ? "border border-[#E6E6E6] bg-white p-[6px]" : ""}`}>
                      <Image src={flight.logoUrl} alt={flight.airline} width={32} height={32} className="h-full w-full object-contain" />
                    </div>
                    <span className="font-sans text-[14px] font-bold text-[#111111]">{flight.airline}</span>
                  </div>
                  <span className="font-sans text-[12px] font-normal text-[#7D7D7D]">
                    {data.resultsHeader.sitesLabel.replace("{count}", String(flight.sitesCount))}
                  </span>
                </div>

                {/* DESKTOP LOGO */}
                <div className="hidden w-full shrink-0 flex-col gap-[8px] sm:flex sm:w-[140px]">
                  <div className={`flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-[8px] ${flight.id === "1" || flight.id === "4" ? "border border-[#E6E6E6] bg-white p-[8px]" : ""}`}>
                    <Image src={flight.logoUrl} alt={flight.airline} width={40} height={40} className="h-full w-full object-contain" />
                  </div>
                  <span className="font-sans text-[13px] font-medium text-black">{flight.airline}</span>
                </div>

                <div className="flex flex-1 items-center justify-between sm:justify-center sm:gap-[40px] md:gap-[80px]">
                  <div className="flex flex-col items-start gap-[4px] sm:items-end sm:gap-[2px]">
                    <span className="font-sans text-[16px] font-bold text-[#111111] sm:font-medium">{flight.departureTime}</span>
                    <span className="font-sans text-[12px] font-normal text-[#7D7D7D] sm:text-[13px]">{flight.departureAirport}</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-[6px] sm:gap-[4px]">
                    <span className="font-sans text-[11px] font-normal text-[#7D7D7D] sm:text-[12px]">{flight.duration}</span>
                    <div className="relative flex h-[1px] w-[60px] items-center justify-center bg-[#E6E6E6] sm:w-[80px]">
                      <div className="h-[4px] w-[4px] rounded-full bg-[#E6E6E6]"></div>
                    </div>
                    <span className="font-sans text-[12px] font-medium text-[#111111]">{flight.stops}</span>
                  </div>
                  
                  <div className="flex flex-col items-end gap-[4px] sm:items-start sm:gap-[2px]">
                    <span className="font-sans text-[16px] font-bold text-[#111111] sm:font-medium">{flight.arrivalTime}</span>
                    <span className="font-sans text-[12px] font-normal text-[#7D7D7D] sm:text-[13px]">{flight.arrivalAirport}</span>
                  </div>
                </div>

                <div className="mt-[4px] flex items-end justify-between border-t border-[#E6E6E6] pt-[16px] sm:hidden">
                  <div className="flex flex-col items-start gap-[2px]">
                    <span className="font-sans text-[12px] font-normal text-[#7D7D7D]">From</span>
                    <span className="font-sans text-[24px] font-bold leading-[28px] text-[#111111]">${flight.price}</span>
                  </div>
                  <button type="button" className="flex h-[36px] items-center justify-center rounded-[8px] bg-[#FDDB32] px-[24px] font-sans text-[14px] font-medium text-[#111111]">
                    {data.resultsHeader.dealLabel}
                  </button>
                </div>

                <div className="hidden w-full shrink-0 flex-col items-end gap-[8px] sm:flex sm:w-[180px] sm:border-l sm:border-[#E6E6E6] sm:pl-[24px]">
                  <div className="flex flex-col items-end">
                    <span className="font-sans text-[24px] font-bold text-black">${flight.price}</span>
                    <span className="font-sans text-[12px] text-[#7d7d7d]">
                      {data.resultsHeader.sitesLabel.replace("{count}", String(flight.sitesCount))}
                    </span>
                  </div>
                  <button type="button" className="flex h-[40px] w-full items-center justify-center rounded-[8px] bg-[#fddb32] px-[24px] font-sans text-[14px] font-bold text-black transition-colors hover:bg-[#e5c52c]">
                    {data.resultsHeader.dealLabel}
                  </button>
                </div>
                
              </div>
            ))}
          </div>

          <div className="mt-[8px] flex justify-center lg:mt-[16px]">
            <button type="button" className="flex h-[48px] w-full items-center justify-center rounded-[12px] border border-[#111111] bg-white font-sans text-[14px] font-medium text-[#111111] transition-colors hover:bg-gray-50 sm:h-auto sm:w-auto sm:rounded-[100px] sm:border-[#E6E6E6] sm:px-[32px] sm:py-[12px]">
              {data.resultsHeader.loadMoreLabel}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}