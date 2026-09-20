"use client";

import { ChevronDown, Plane, Briefcase, Search } from "lucide-react";
import { widgetData, type WidgetData } from "../../../lib/data/widgetData";

export default function Widget({ data = widgetData }: { data?: WidgetData }) {
  return (
    <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center justify-center rounded-[24px] bg-[#FFFFFF] p-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:p-[24px]">
      
      {/* Inner Content Wrapper */}
      <div className="flex w-full max-w-[1160.78px] flex-col gap-[12px] lg:gap-[10px]">
        
        {/* Dropdowns Row */}
        <div className="flex items-center gap-[8px] pb-[12px] lg:gap-[10px] lg:pb-0">
          {data.dropdowns.map((dropdown, index) => (
            <button
              key={dropdown}
              className="flex h-[40px] items-center gap-[8px] rounded-full border border-[#E6E6E6] px-[16px] text-[14px] font-medium text-[#111111] transition-colors hover:bg-gray-50"
            >
              {index === 0 ? <Plane size={16} /> : <Briefcase size={16} />}
              {dropdown}
              <ChevronDown size={16} className="text-[#767676]" />
            </button>
          ))}
        </div>

        {/* Main Inputs Row */}
        <div className="relative flex w-full flex-col gap-[12px] lg:flex-row lg:items-center lg:gap-[11px]">
          
          {/* Departure Field */}
          <div className="flex h-[75px] min-w-0 flex-1 cursor-pointer items-center gap-[10px] rounded-[20px] border border-[#E6E6E6] bg-[#F9FBF5] pl-[10px] pr-[16px] transition-colors hover:border-[#CCCCCC] lg:w-[194.7px] lg:flex-none">
            <div className="flex h-[28.2px] w-[29.59px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#FFED91] pl-[3px] pr-[2px]">
              <img src={encodeURI(data.departure.icon)} alt="Departure Icon" className="h-[16px] w-[16px] object-contain" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="truncate text-[13px] font-normal text-[#767676]">{data.departure.label}</span>
              <span className="truncate text-[16px] font-semibold text-[#111111]">{data.departure.value}</span>
            </div>
          </div>

          {/* Swap Icon (Absolute on Desktop to bridge the two pills) */}
          <button className="hidden lg:flex absolute left-[180px] z-10 h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[#E6E6E6] transition-transform hover:scale-110">
            <img src={encodeURI(data.swapIcon)} alt="Swap" className="h-[16px] w-[16px] object-contain" />
          </button>

          {/* Destination Field */}
          <div className="flex h-[75px] min-w-0 flex-1 cursor-pointer items-center gap-[10px] rounded-[20px] border border-[#E6E6E6] bg-[#F9FBF5] pl-[10px] pr-[16px] transition-colors hover:border-[#CCCCCC] lg:w-[194.7px] lg:flex-none lg:pl-[24px]">
            <div className="flex h-[28.2px] w-[29.59px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#FFED91] pl-[3px] pr-[2px]">
              <img src={encodeURI(data.destination.icon)} alt="Destination Icon" className="h-[16px] w-[16px] object-contain" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="truncate text-[13px] font-normal text-[#767676]">{data.destination.label}</span>
              <span className="truncate text-[16px] font-medium text-[#9999AA]">{data.destination.placeholder}</span>
            </div>
          </div>

          {/* Dates Row (Side-by-side on mobile, inline on desktop) */}
          <div className="flex w-full flex-row gap-[12px] lg:w-auto lg:gap-[11px]">
            {/* Depart Date Field */}
            <div className="flex h-[75px] min-w-0 flex-1 cursor-pointer items-center gap-[10px] rounded-[20px] border border-[#E6E6E6] bg-[#F9FBF5] pl-[10px] pr-[16px] transition-colors hover:border-[#CCCCCC] lg:w-[194.7px] lg:flex-none">
              <div className="flex h-[28.2px] w-[29.59px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#FFED91] pl-[3px] pr-[2px]">
                <img src={encodeURI(data.departDate.icon)} alt="Depart Date Icon" className="h-[16px] w-[16px] object-contain" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="truncate text-[13px] font-normal text-[#767676]">{data.departDate.label}</span>
                <span className="truncate text-[16px] font-semibold text-[#111111]">{data.departDate.value}</span>
              </div>
            </div>

            {/* Return Date Field */}
            <div className="flex h-[75px] min-w-0 flex-1 cursor-pointer items-center gap-[10px] rounded-[20px] border border-[#E6E6E6] bg-[#F9FBF5] pl-[10px] pr-[16px] transition-colors hover:border-[#CCCCCC] lg:w-[194.7px] lg:flex-none">
              <div className="flex h-[28.2px] w-[29.59px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#FFED91] pl-[3px] pr-[2px]">
                <img src={encodeURI(data.returnDate.icon)} alt="Return Date Icon" className="h-[16px] w-[16px] object-contain" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="truncate text-[13px] font-normal text-[#767676]">{data.returnDate.label}</span>
                <span className="truncate text-[16px] font-semibold text-[#111111]">{data.returnDate.value}</span>
              </div>
            </div>
          </div>

          {/* Travellers Field */}
          <div className="flex h-[75px] min-w-0 flex-1 cursor-pointer items-center gap-[10px] rounded-[20px] border border-[#E6E6E6] bg-[#F9FBF5] pl-[10px] pr-[16px] transition-colors hover:border-[#CCCCCC] lg:w-[248px] lg:flex-none">
            <div className="flex h-[28.2px] w-[29.59px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#FFED91] pl-[3px] pr-[2px]">
              <img src={encodeURI(data.travellers.icon)} alt="Travellers Icon" className="h-[16px] w-[16px] object-contain" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="truncate text-[13px] font-normal text-[#767676]">{data.travellers.label}</span>
              <span className="truncate text-[16px] font-semibold text-[#111111]">{data.travellers.value}</span>
            </div>
          </div>

          {/* Search Button */}
          <button className="flex h-[52px] w-full shrink-0 items-center justify-center gap-[8px] rounded-[16px] bg-[#FDDB32] font-sans text-[16px] font-medium text-[#111111] transition-colors hover:bg-[#f0cf2e] lg:h-[75px] lg:w-[79px] lg:rounded-[12px]">
            <span className="lg:hidden">Search Flights</span>
            <span className="hidden lg:inline">{data.buttonText}</span>
            <Search size={20} className="lg:hidden" />
          </button>
        </div>

        {/* Checkboxes Row (Hidden on mobile) */}
        <div className="hidden w-full flex-wrap items-center gap-[16px] pt-[2px] lg:flex">
          {data.checkboxes.map((checkbox, index) => (
            <label key={index} className="flex cursor-pointer items-center gap-[8px] text-[14px] font-medium text-[#111111]">
              <div 
                className={`flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-[4px] border ${
                  checkbox.checked ? 'border-[#FDDB32] bg-[#FDDB32]' : 'border-[#E6E6E6] bg-white'
                }`}
              >
                {checkbox.checked && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4L3.5 6.5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              {checkbox.label}
            </label>
          ))}
        </div>
      </div>
      
    </div>
  );
}