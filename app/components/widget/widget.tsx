"use client";

import { ChevronDown, Plane, Briefcase } from "lucide-react";
import { widgetData, type WidgetData } from "../../../lib/data/widgetData";

export default function Widget({ data = widgetData }: { data?: WidgetData }) {
  return (
    <div className="mx-auto flex w-full max-w-[1216px] flex-col gap-[10px] rounded-[24px] bg-[#FFFFFF] p-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      
      {/* Dropdowns Row */}
      <div className="flex items-center gap-[10px]">
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
      <div className="flex w-full flex-col gap-[11px] lg:flex-row lg:items-center">
        
        {/* Departure Field */}
        <div className="flex h-[75px] min-w-0 flex-1 cursor-pointer items-center gap-[10px] rounded-[20px] border border-transparent bg-[#F9FBF5] pl-[10px] pr-[16px] transition-colors hover:border-[#E6E6E6]">
          <div className="flex h-[28px] w-[30px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#FFED91]">
            <img src={encodeURI(data.departure.icon)} alt="Departure Icon" className="h-[16px] w-[16px] object-contain" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-[13px] font-normal text-[#767676]">{data.departure.label}</span>
            <span className="truncate text-[16px] font-semibold text-[#111111]">{data.departure.value}</span>
          </div>
        </div>

        {/* Swap Icon */}
        <button className="hidden h-[30px] w-[30px] shrink-0 items-center justify-center transition-transform hover:scale-110 lg:flex">
          <img src={encodeURI(data.swapIcon)} alt="Swap" className="h-[30px] w-[30px] object-contain" />
        </button>

        {/* Destination Field */}
        <div className="flex h-[75px] min-w-0 flex-1 cursor-pointer items-center gap-[10px] rounded-[20px] border border-transparent bg-[#F9FBF5] pl-[10px] pr-[16px] transition-colors hover:border-[#E6E6E6]">
          <div className="flex h-[28px] w-[30px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#FFED91]">
            <img src={encodeURI(data.destination.icon)} alt="Destination Icon" className="h-[16px] w-[16px] object-contain" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-[13px] font-normal text-[#767676]">{data.destination.label}</span>
            <span className="truncate text-[16px] font-medium text-[#9999AA]">{data.destination.placeholder}</span>
          </div>
        </div>

        {/* Depart Date Field */}
        <div className="flex h-[75px] min-w-0 flex-1 cursor-pointer items-center gap-[10px] rounded-[20px] border border-transparent bg-[#F9FBF5] pl-[10px] pr-[16px] transition-colors hover:border-[#E6E6E6]">
          <div className="flex h-[28px] w-[30px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#FFED91]">
            <img src={encodeURI(data.departDate.icon)} alt="Depart Date Icon" className="h-[16px] w-[16px] object-contain" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-[13px] font-normal text-[#767676]">{data.departDate.label}</span>
            <span className="truncate text-[16px] font-semibold text-[#111111]">{data.departDate.value}</span>
          </div>
        </div>

        {/* Return Date Field */}
        <div className="flex h-[75px] min-w-0 flex-1 cursor-pointer items-center gap-[10px] rounded-[20px] border border-transparent bg-[#F9FBF5] pl-[10px] pr-[16px] transition-colors hover:border-[#E6E6E6]">
          <div className="flex h-[28px] w-[30px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#FFED91]">
            <img src={encodeURI(data.returnDate.icon)} alt="Return Date Icon" className="h-[16px] w-[16px] object-contain" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-[13px] font-normal text-[#767676]">{data.returnDate.label}</span>
            <span className="truncate text-[16px] font-semibold text-[#111111]">{data.returnDate.value}</span>
          </div>
        </div>

        {/* Travellers Field */}
        <div className="flex h-[75px] min-w-0 flex-1 cursor-pointer items-center gap-[10px] rounded-[20px] border border-transparent bg-[#F9FBF5] pl-[10px] pr-[16px] transition-colors hover:border-[#E6E6E6] lg:flex-none lg:w-[248px]">
          <div className="flex h-[28px] w-[30px] shrink-0 items-center justify-center rounded-[7.4px] bg-[#FFED91]">
            <img src={encodeURI(data.travellers.icon)} alt="Travellers Icon" className="h-[16px] w-[16px] object-contain" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-[13px] font-normal text-[#767676]">{data.travellers.label}</span>
            <span className="truncate text-[16px] font-semibold text-[#111111]">{data.travellers.value}</span>
          </div>
        </div>

        {/* Search Button */}
        <button className="flex h-[75px] w-full shrink-0 items-center justify-center rounded-[12px] bg-[#FDDB32] text-[16px] font-medium text-[#111111] transition-colors hover:bg-[#f0cf2e] lg:w-[79px]">
          {data.buttonText}
        </button>
      </div>

      {/* Checkboxes Row */}
      <div className="flex w-full flex-wrap items-center gap-[16px] pt-[2px]">
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
  );
}