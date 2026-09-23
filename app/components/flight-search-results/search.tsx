'use client';

import { useState } from "react";
import Image from "next/image";

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
    <main className="min-h-screen bg-white pt-[104px] lg:pt-[112px]">
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
    <section className="border-b border-[#E6E6E6] bg-[#FAFAFA] px-4 py-5 sm:px-6 lg:px-20 lg:py-6">
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
        <span className="text-[16px] font-medium text-black">{filters.title}</span>
        <button type="button" className="text-[13px] text-[#7d7d7d] hover:text-black">{filters.resetLabel}</button>
      </div>

      <div className="flex flex-col gap-[16px] pb-[24px] border-b border-[#F0F0F0]">
        <span className="text-[14px] font-medium text-black">{filters.stopsLabel}</span>
        {filters.stops.map((stop) => (
          <label key={stop.label} className="flex cursor-pointer items-center justify-between text-[14px]">
            <div className="flex items-center gap-[12px]">
              <input type="checkbox" defaultChecked={stop.checked} className="h-[18px] w-[18px] accent-[#fddb32]" />
              <span className="text-black">{stop.label}</span>
            </div>
            <span className="text-[#7d7d7d]">${stop.price}</span>
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-[16px] pb-[24px] border-b border-[#F0F0F0]">
        <span className="text-[14px] font-medium text-black">{filters.airlinesLabel}</span>
        {filters.airlines.map((airline) => (
          <label key={airline.label} className="flex cursor-pointer items-center gap-[12px] text-[14px] text-black">
            <input type="checkbox" defaultChecked={airline.checked} className="h-[18px] w-[18px] accent-[#fddb32]" />
            {airline.label}
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-[16px] pb-[24px] border-b border-[#F0F0F0]">
        <span className="text-[14px] font-medium text-black">{filters.priceRangeLabel}</span>
        <div className="px-2 pt-2">
          <input type="range" min="0" max="2000" defaultValue="1200" className="h-[4px] w-full appearance-none rounded-full bg-[#E6E6E6] accent-[#fddb32]" />
        </div>
        <div className="flex gap-[16px] pt-[8px]">
          <div className="flex h-[40px] flex-1 items-center justify-center rounded-[8px] border border-[#E6E6E6] bg-[#FAFAFA] text-[14px] font-medium text-black">${filters.priceRange.min}</div>
          <div className="flex h-[40px] flex-1 items-center justify-center rounded-[8px] border border-[#E6E6E6] bg-[#FAFAFA] text-[14px] font-medium text-black">${filters.priceRange.max}</div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px] pb-[24px]">
        <span className="text-[14px] font-medium text-black">{filters.departureTimeLabel}</span>
        <div className="flex flex-wrap gap-[10px]">
          {filters.departureTimes.map((time) => (
            <button type="button" key={time} className="rounded-[8px] border border-[#E6E6E6] bg-white px-[16px] py-[10px] text-[13px] text-black hover:border-black">{time}</button>
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
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-20 lg:py-14">
      {/* 1440px total layout, Gap between sidebar and results is 48px to distribute properly */}
      <div className="mx-auto flex w-full max-w-[1280px] flex-col justify-between gap-8 lg:flex-row lg:gap-12">
        
        <FiltersSidebar filters={data.filters} />

        {/* ResultsContainer: 932px width, 24px gap */}
        <div className="flex w-full max-w-[932px] min-w-0 flex-col gap-6">
          
          {/* Top Bar */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[14px] font-medium text-black">{data.resultsHeader.count} {data.resultsHeader.countLabel}</span>
            <div className="flex max-w-full overflow-x-auto rounded-full bg-[#F9F9F9] p-1">
              {data.resultsHeader.tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-[100px] px-[24px] py-[8px] text-[13px] font-medium transition-colors ${activeTab === tab ? "bg-white text-black shadow-sm" : "text-[#7d7d7d] hover:text-black"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Flights List */}
          <div className="flex flex-col gap-[24px]">
            {data.flights.map((flight) => (
              <div key={flight.id} className="flex flex-col rounded-[16px] border border-[#F0F0F0] bg-[#FAFAFA] p-[24px] sm:flex-row sm:items-center sm:justify-between">
                
                {/* Airline Info */}
                <div className="flex w-[180px] flex-col gap-[8px]">
                  <div className="flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-[8px] bg-white border border-[#E6E6E6]">
                    <Image src={flight.logoUrl} alt={flight.airline} width={24} height={24} className="object-contain" />
                  </div>
                  <span className="text-[13px] font-medium text-black">{flight.airline}</span>
                </div>

                {/* Times & Stops */}
                  <div className="flex flex-1 items-center justify-center gap-[40px]">
                  <div className="flex flex-col items-end">
                    <span className="text-[16px] font-medium text-black">{flight.departureTime}</span>
                    <span className="text-[13px] text-[#7d7d7d]">{flight.departureAirport}</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-[4px]">
                    <span className="text-[12px] text-[#7d7d7d]">{flight.duration}</span>
                    <div className="h-[1px] w-[80px] bg-[#E6E6E6] relative">
                        <div className="absolute top-1/2 left-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/20"></div>
                    </div>
                    <span className="text-[12px] font-medium text-black">{flight.stops}</span>
                  </div>
                  
                  <div className="flex flex-col items-start">
                    <span className="text-[16px] font-medium text-black">{flight.arrivalTime}</span>
                    <span className="text-[13px] text-[#7d7d7d]">{flight.arrivalAirport}</span>
                  </div>
                </div>

                {/* Vertical Divider (Desktop only) */}
                <div className="hidden h-[60px] w-[1px] bg-[#E6E6E6] sm:block mx-[24px]"></div>

                {/* Price & CTA */}
                <div className="flex w-[140px] flex-col items-end gap-[4px] mt-[16px] sm:mt-0 border-t border-[#E6E6E6] pt-[16px] sm:border-0 sm:pt-0">
                  <span className="text-[12px] text-[#7d7d7d]">{data.resultsHeader.sitesLabel.replace("{count}", String(flight.sitesCount))}</span>
                  <span className="text-[24px] font-semibold text-black">${flight.price}</span>
                  <button type="button" className="mt-[4px] w-full rounded-full bg-[#fddb32] px-[24px] py-[10px] text-[14px] font-medium text-black transition-colors hover:bg-[#e5c52c]">
                    {data.resultsHeader.dealLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-[16px] flex justify-center">
            <button type="button" className="rounded-[100px] border border-black bg-white px-[32px] py-[12px] text-[14px] font-medium text-black transition-colors hover:bg-black hover:text-white">
              {data.resultsHeader.loadMoreLabel}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
