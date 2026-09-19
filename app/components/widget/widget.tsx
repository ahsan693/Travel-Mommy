"use client";

import {
  ArrowRightLeft,
  Briefcase,
  Calendar,
  ChevronDown,
  Plane,
  Users,
} from "lucide-react";
import { widgetData, type WidgetData } from "../../../lib/data/widgetData";

export default function Widget({ data = widgetData }: { data?: WidgetData }) {
  return (
    <div className="flex w-full max-w-[1216px] flex-col gap-[10px] rounded-[24px] bg-white p-[24px] shadow-2xl">
      <div className="flex items-center gap-[10px]">
        {data.dropdowns.map((dropdown, index) => (
          <button
            key={dropdown}
            className="flex h-[40px] items-center gap-2 rounded-full border border-[#E6E6E6] px-4 py-2 text-[14px] font-medium transition-colors hover:bg-gray-50"
          >
            {index === 0 ? <Plane size={16} /> : <Briefcase size={16} />}
            {dropdown}
            <ChevronDown size={16} className="text-gray-500" />
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-[11px] lg:flex-row lg:items-center">
        <div className="flex h-[75px] flex-1 cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-[#F9FBF5] px-5 transition-colors hover:border-[#E6E6E6] hover:bg-[#f2f5ec]">
          <Plane size={24} className="text-gray-600" />
          <div className="flex flex-col">
            <span className="text-[13px] text-gray-500">{data.departure.label}</span>
            <span className="text-[16px] font-semibold text-black">{data.departure.value}</span>
          </div>
        </div>

        <button className="hidden shrink-0 items-center justify-center p-2 text-gray-400 transition-colors hover:text-black lg:flex">
          <ArrowRightLeft size={20} />
        </button>

        <div className="flex h-[75px] flex-1 cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-[#F9FBF5] px-5 transition-colors hover:border-[#E6E6E6] hover:bg-[#f2f5ec]">
          <Plane size={24} className="text-gray-600" />
          <div className="flex flex-col">
            <span className="text-[13px] text-gray-500">{data.destination.label}</span>
            <span className="text-[16px] font-medium text-gray-400">{data.destination.placeholder}</span>
          </div>
        </div>

        <div className="flex h-[75px] flex-1 cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-[#F9FBF5] px-5 transition-colors hover:border-[#E6E6E6] hover:bg-[#f2f5ec]">
          <Calendar size={24} className="text-gray-600" />
          <div className="flex flex-col">
            <span className="text-[13px] text-gray-500">{data.departDate.label}</span>
            <span className="text-[16px] font-semibold text-black">{data.departDate.value}</span>
          </div>
        </div>

        <div className="flex h-[75px] flex-1 cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-[#F9FBF5] px-5 transition-colors hover:border-[#E6E6E6] hover:bg-[#f2f5ec]">
          <Calendar size={24} className="text-gray-600" />
          <div className="flex flex-col">
            <span className="text-[13px] text-gray-500">{data.returnDate.label}</span>
            <span className="text-[16px] font-semibold text-black">{data.returnDate.value}</span>
          </div>
        </div>

        <div className="flex h-[75px] flex-1 cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-[#F9FBF5] px-5 transition-colors hover:border-[#E6E6E6] hover:bg-[#f2f5ec]">
          <Users size={24} className="text-gray-600" />
          <div className="flex flex-col">
            <span className="text-[13px] text-gray-500">{data.travellers.label}</span>
            <span className="text-[16px] font-semibold text-black">{data.travellers.value}</span>
          </div>
        </div>

        <button className="flex h-[75px] items-center justify-center rounded-2xl bg-[#FDDB32] px-8 text-[18px] font-medium text-black transition-colors hover:bg-[#f0cf2e]">
          {data.buttonText}
        </button>
      </div>

      <div className="flex items-center gap-6 pb-2 pt-1">
        {data.checkboxes.map((checkbox, index) => (
          <label key={`${checkbox}-${index}`} className="flex cursor-pointer items-center gap-2 text-[14px] font-medium text-black">
            <input type="checkbox" defaultChecked={index === 1} className="size-4 rounded border-gray-300 accent-[#FDDB32]" />
            {checkbox}
          </label>
        ))}
      </div>
    </div>
  );
}