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
          <label key={stop.label} className="flex cursor-pointer items-center justify-between font-sans text-[14px]">
            <div className="flex items-center gap-[12px]">
              <input type="checkbox" defaultChecked={stop.checked} className="h-[18px] w-[18px] accent-[#fddb32]" />
              <span className="font-sans text-black">{stop.label}</span>
            </div>
            <span className="font-sans text-[#7d7d7d]">${stop.price}</span>
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-[16px] border-b border-[#F0F0F0] pb-[24px]">
        <span className="font-sans text-[14px] font-medium text-black">{filters.airlinesLabel}</span>
        {filters.airlines.map((airline) => (
          <label key={airline.label} className="flex cursor-pointer items-center gap-[12px] font-sans text-[14px] text-black">
            <input type="checkbox" defaultChecked={airline.checked} className="h-[18px] w-[18px] accent-[#fddb32]" />
            {airline.label}
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-[16px] border-b border-[#F0F0F0] pb-[24px]">
        <span className="font-sans text-[14px] font-medium text-black">{filters.priceRangeLabel}</span>
        <div className="px-2 pt-2">
          <input type="range" min="0" max="2000" defaultValue="1200" className="h-[4px] w-full appearance-none rounded-full bg-[#E6E6E6] accent-[#fddb32]" />
        </div>
        <div className="flex gap-[16px] pt-[8px]">
          <div className="flex h-[40px] flex-1 items-center justify-center rounded-[8px] border border-[#E6E6E6] bg-[#FAFAFA] font-sans text-[14px] font-medium text-black">${filters.priceRange.min}</div>
          <div className="flex h-[40px] flex-1 items-center justify-center rounded-[8px] border border-[#E6E6E6] bg-[#FAFAFA] font-sans text-[14px] font-medium text-black">${filters.priceRange.max}</div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px] pb-[24px]">
        <span className="font-sans text-[14px] font-medium text-black">{filters.departureTimeLabel}</span>
        <div className="flex flex-wrap gap-[10px]">
          {filters.departureTimes.map((time) => (
            <button type="button" key={time} className="rounded-[8px] border border-[#E6E6E6] bg-white px-[16px] py-[10px] font-sans text-[13px] text-black hover:border-black">{time}</button>
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
      {/* 1440px total layout, Gap between sidebar and results is 48px to distribute properly */}
      <div className="mx-auto flex w-full max-w-[1280px] flex-col justify-between gap-[24px] lg:flex-row lg:gap-12">
        
        <FiltersSidebar filters={data.filters} />

        {/* ResultsContainer: 932px width */}
        <div className="flex w-full max-w-[932px] min-w-0 flex-col gap-[24px]">
          
          {/* Top Bar Mobile */}
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
              <div className="flex shrink-0 gap-[8px] pt-[2px]">
                <button className="flex h-[36px] items-center justify-center rounded-[18px] border border-[#E6E6E6] bg-white px-[16px] font-sans text-[13px] font-medium text-[#111111] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors hover:bg-gray-50">
                  Filters <span className="ml-[4px] text-[#D9A000]">(2)</span>
                </button>
                <button className="flex h-[36px] items-center justify-center rounded-[18px] border border-[#E6E6E6] bg-white px-[16px] font-sans text-[13px] font-medium text-[#111111] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors hover:bg-gray-50">
                  Sort
                </button>
              </div>
            </div>

            {/* Mobile Segmented Control */}
            <div className="flex w-full overflow-x-auto rounded-[12px] border border-[#E6E6E6] bg-[#FFFFFF] p-[4px]">
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

          {/* Top Bar Desktop */}
          <div className="hidden flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between lg:flex">
            <div className="flex w-full max-w-[327px] flex-col gap-[4px]">
              <span className="font-sans text-[14px] font-medium text-black">
                {data.resultsHeader.count} {data.resultsHeader.countLabel}
              </span>
              <p className="font-sans text-[10px] font-normal leading-[1.4] text-[#808080]">
                Prices and availability can change. TravelMommy compares flight options and redirects you to the selected provider to complete your booking.
              </p>
            </div>
            
            <div className="flex max-w-full shrink-0 overflow-x-auto rounded-full bg-[#F9F9F9] p-1">
              {data.resultsHeader.tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-[100px] px-[24px] py-[8px] font-sans text-[13px] font-medium transition-colors ${
                    activeTab === tab ? "bg-white text-black shadow-sm" : "text-[#7d7d7d] hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Flights List */}
          <div className="flex flex-col gap-[16px]">
            {data.flights.map((flight) => (
              <div key={flight.id} className="flex flex-col gap-[20px] rounded-[16px] border border-[#E6E6E6] bg-[#FFFFFF] p-[16px] transition-colors hover:bg-[#F9FBF5] sm:flex-row sm:items-center sm:justify-between sm:gap-[24px] lg:rounded-[20px] lg:p-[20px]">
                
                {/* Mobile Top Row: Logo, Name, Sites */}
                <div className="flex items-center justify-between sm:hidden">
                  <div className="flex items-center gap-[12px]">
                    <div className="flex h-[24px] w-[24px] items-center justify-center overflow-hidden">
                      <Image src={flight.logoUrl} alt={flight.airline} width={24} height={24} className="object-contain" />
                    </div>
                    <span className="font-sans text-[14px] font-bold text-[#111111]">{flight.airline}</span>
                  </div>
                  <span className="font-sans text-[12px] font-normal text-[#7D7D7D]">
                    {data.resultsHeader.sitesLabel.replace("{count}", String(flight.sitesCount))}
                  </span>
                </div>

                {/* Desktop Airline Info */}
                <div className="hidden w-full shrink-0 flex-col gap-[8px] sm:flex sm:w-[140px]">
                  <div className="flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-[8px] border border-[#E6E6E6] bg-white">
                    <Image src={flight.logoUrl} alt={flight.airline} width={24} height={24} className="object-contain" />
                  </div>
                  <span className="font-sans text-[13px] font-medium text-black">{flight.airline}</span>
                </div>

                {/* Times & Stops - Works for both */}
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

                {/* Mobile Bottom Row: Price & View Deal */}
                <div className="mt-[4px] flex items-end justify-between border-t border-[#F0F0F0] pt-[16px] sm:hidden">
                  <div className="flex flex-col items-start gap-[2px]">
                    <span className="font-sans text-[12px] font-normal text-[#7D7D7D]">From</span>
                    <span className="font-sans text-[24px] font-bold leading-[28px] text-[#111111]">${flight.price}</span>
                  </div>
                  <button type="button" className="flex h-[36px] items-center justify-center rounded-[8px] bg-[#FDDB32] px-[24px] font-sans text-[14px] font-medium text-[#111111]">
                    {data.resultsHeader.dealLabel}
                  </button>
                </div>

                {/* Desktop Price & CTA */}
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

          {/* Load More Button */}
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