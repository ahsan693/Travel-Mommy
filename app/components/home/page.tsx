'use client';

import Image from "next/image";
import { useState } from "react";
import { 
  ArrowUpRight, 
  ChevronDown, 
  Plane, 
  Briefcase, 
  ArrowRightLeft, 
  Calendar, 
  Users 
} from "lucide-react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { homeData, type HomePageData } from "../../../lib/data/homeData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";
import { FlightList, useFlightViewModel } from "../../../lib/features/flights";
import type { FlightAvailability } from "../../../lib/features/flights/types/flight";

function Hero({ data }: { data: HomePageData["hero"] }) {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black pb-[72px] pt-[120px] lg:min-h-[796px] lg:pt-[160px]">
      <Image 
        src={data.image} 
        alt={data.imageAlt} 
        fill 
        priority 
        className="object-cover opacity-80" 
      />
      
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col justify-between px-[32px]">
        
        <div className="flex w-full max-w-[1216px] flex-col text-white">
          <h1 className="text-left font-medium text-[56px] leading-[1.1] tracking-[-2px] lg:text-[110px] lg:leading-[98px] lg:tracking-[-5px]">
            {data.title.split("\n").map((line, index) => (
              <span key={index} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </h1>
          
          <p className="mt-[20px] max-w-[330px] text-[14px] font-medium leading-[20px] tracking-[-0.28px]">
            {data.description}
          </p>

          <h2 className="mt-[20px] text-right font-medium text-[56px] leading-[1.1] tracking-[-2px] lg:mt-[-40px] lg:text-[110px] lg:leading-[98px] lg:tracking-[-5px]">
            {data.rightHeading.map((line, index) => (
              <span key={index} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="mt-[60px] flex w-full max-w-[1216px] flex-col gap-[10px] rounded-[24px] bg-white p-[24px] shadow-2xl">
          
          <div className="flex items-center gap-[10px]">
            <button className="flex h-[40px] items-center gap-2 rounded-full border border-[#E6E6E6] px-4 py-2 text-[14px] font-medium transition-colors hover:bg-gray-50">
              <Plane size={16} /> One way <ChevronDown size={16} className="text-gray-500" />
            </button>
            <button className="flex h-[40px] items-center gap-2 rounded-full border border-[#E6E6E6] px-4 py-2 text-[14px] font-medium transition-colors hover:bg-gray-50">
              <Briefcase size={16} /> Bags <ChevronDown size={16} className="text-gray-500" />
            </button>
          </div>

          <div className="flex flex-col gap-[11px] lg:flex-row lg:items-center">
            
            <div className="flex h-[75px] flex-1 cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-[#F9FBF5] px-5 transition-colors hover:border-[#E6E6E6] hover:bg-[#f2f5ec]">
              <Plane size={24} className="text-gray-600" />
              <div className="flex flex-col">
                <span className="text-[13px] text-gray-500">Departure</span>
                <span className="text-[16px] font-semibold text-black">Dublin (DUB)</span>
              </div>
            </div>

            <button className="hidden shrink-0 items-center justify-center p-2 text-gray-400 transition-colors hover:text-black lg:flex">
              <ArrowRightLeft size={20} />
            </button>

            <div className="flex h-[75px] flex-1 cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-[#F9FBF5] px-5 transition-colors hover:border-[#E6E6E6] hover:bg-[#f2f5ec]">
              <Plane size={24} className="text-gray-600" />
              <div className="flex flex-col">
                <span className="text-[13px] text-gray-500">To</span>
                <span className="text-[16px] font-medium text-gray-400">Country, City or air...</span>
              </div>
            </div>

            <div className="flex h-[75px] flex-1 cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-[#F9FBF5] px-5 transition-colors hover:border-[#E6E6E6] hover:bg-[#f2f5ec]">
              <Calendar size={24} className="text-gray-600" />
              <div className="flex flex-col">
                <span className="text-[13px] text-gray-500">Depart</span>
                <span className="text-[16px] font-semibold text-black">08 Nov 2025</span>
              </div>
            </div>

            <div className="flex h-[75px] flex-1 cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-[#F9FBF5] px-5 transition-colors hover:border-[#E6E6E6] hover:bg-[#f2f5ec]">
              <Calendar size={24} className="text-gray-600" />
              <div className="flex flex-col">
                <span className="text-[13px] text-gray-500">Return</span>
                <span className="text-[16px] font-semibold text-black">08 Jan 2026</span>
              </div>
            </div>

            <div className="flex h-[75px] flex-1 cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-[#F9FBF5] px-5 transition-colors hover:border-[#E6E6E6] hover:bg-[#f2f5ec]">
              <Users size={24} className="text-gray-600" />
              <div className="flex flex-col">
                <span className="text-[13px] text-gray-500">Travellers and Cabin Class</span>
                <span className="text-[16px] font-semibold text-black">01 Adult 01 Child</span>
              </div>
            </div>

            <button className="flex h-[75px] items-center justify-center rounded-2xl bg-[#FDDB32] px-8 text-[18px] font-medium text-black transition-colors hover:bg-[#f0cf2e]">
              Search
            </button>
          </div>

          <div className="flex items-center gap-6 pb-2 pt-1">
            <label className="flex cursor-pointer items-center gap-2 text-[14px] font-medium text-black">
              <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#FDDB32]" />
              Add Nearby Airports
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-[14px] font-medium text-black">
              <input type="checkbox" defaultChecked className="size-4 rounded border-gray-300 accent-[#FDDB32]" />
              Add Nearby Airports
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-[14px] font-medium text-black">
              <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#FDDB32]" />
              Direct Flights
            </label>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function openFlightSearch(result: FlightAvailability) {
  if (result.status !== "available" || !result.flight.ticketLink) {
    return;
  }

  const ticketUrl = result.flight.ticketLink.startsWith("http")
    ? result.flight.ticketLink
    : `https://www.aviasales.com${result.flight.ticketLink}`;

  window.open(ticketUrl, "_blank", "noopener,noreferrer");
}

function CheapFlights({ content }: { content: HomePageData["flightsSection"] }) {
  const { flights, loading, error } = useFlightViewModel();

  return (
    <section className="bg-white px-4 py-20 text-black lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row">
          <div>
            <h2 className="text-4xl font-medium lg:text-5xl">
              {content.title} <span className="text-[#000000]">{content.highlightedTitle}</span>
            </h2>
            <p className="mt-3 max-w-[700px] text-sm text-[#555]">
              {error ?? (loading ? "Finding cheapest flights..." : content.description)}
            </p>
          </div>
          <button className="flex h-12 items-center rounded-full bg-[#FDDB32] px-7 text-sm">
            {content.cta} <ArrowUpRight className="ml-2 inline" size={15} />
          </button>
        </div>
        <FlightList flights={flights} cta={content.cardCta} onViewFlights={openFlightSearch} />
      </div>
    </section>
  );
}

function Destinations({ content }: { content: HomePageData["destinationsSection"] }) {
  return (
    <section className="w-full bg-[#000000] py-[80px] lg:py-[160px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[48px] px-[32px]">
        
        {/* Header Section */}
        <div className="flex items-start justify-between gap-8 max-[768px]:flex-col max-[768px]:items-stretch">
          <div className="flex flex-col gap-2">
            <h2 className="font-sans text-[32px] font-medium leading-none tracking-[-1px] text-[#FFFFFF] lg:text-[48px] lg:leading-[48px]">
              {content.title}
            </h2>
            <p className="font-sans text-[16px] font-[380] leading-[24px] text-[#FFFFFF]">
              {content.description}
            </p>
          </div>
          
          <button className="inline-flex h-[44px] shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[24px] font-sans text-[14px] font-medium leading-[1.43] text-[#111827] transition-colors hover:bg-[#e5c52c] max-[768px]:self-start">
            {content.cta}
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Cards Grid - 4 Columns */}
        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-4">
          {content.cards.map((dest) => (
            <div 
              key={dest.title} 
              className="group flex h-[434px] flex-col overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-[#ffffff] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image Header */}
              <div className="relative flex-1 w-full shrink-0 overflow-hidden bg-[#F3F4F6]">
                <Image 
                  src={dest.image} 
                  alt={dest.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute left-[16px] top-[16px] rounded-full bg-[#ffffff] px-[14px] py-[6px] font-sans text-[12px] font-medium leading-[1.33] text-[#111827] shadow-sm">
                  {content.cardBadge}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex h-[218px] flex-col justify-between p-[24px]">
                
                {/* Titles */}
                <div>
                  <h3 className="font-sans text-[24px] font-medium leading-none text-[#111827]">
                    {dest.title}
                  </h3>
                  <p className="mt-[6px] font-sans text-[14px] font-normal leading-[1.43] text-[#6B7280]">
                    {dest.tagline}
                  </p>
                </div>

                {/* Single Pill */}
                <div className="flex w-fit items-center gap-[6px] rounded-full border border-[#E6E6E6] bg-[#ffffff] px-[12px] py-[6px]">
                  <Plane size={14} className="text-[#6B7280]" />
                  <span className="font-sans text-[13px] font-medium text-[#111827]">
                    {dest.flightPrice}
                  </span>
                </div>

                {/* Explore Button */}
                <button className="flex h-[44px] w-full items-center justify-center gap-2 rounded-[14px] bg-[#FDDB32] font-sans text-[14px] font-medium text-[#111827] transition-colors duration-200 hover:bg-[#e5c52c]">
                  {dest.buttonText}
                  <ArrowUpRight size={16} />
                </button>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function TravelGuides({ guides, content }: { guides: HomePageData["guides"]; content: HomePageData["guidesSection"] }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="bg-white px-4 py-20 text-black lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mb-12 text-center text-4xl font-medium">{content.title}</h2>
        <div className="flex flex-col gap-6 md:flex-row">
          {guides.map(({ date, title, image }, index) => (
            <article 
              key={title} 
              onMouseEnter={() => setActive(index)} 
              onMouseLeave={() => setActive(null)} 
              className={`relative flex-1 overflow-hidden rounded-3xl transition-all duration-500 ${active === index ? "md:flex-[2]" : ""}`}
            >
              <div className="relative h-[430px]">
                <Image 
                  src={image} 
                  alt={title} 
                  fill 
                  sizes="(max-width: 767px) 100vw, 33vw" 
                  className={`scale-[1.04] object-cover transition-transform duration-500 ${active === index ? "scale-110" : ""}`} 
                />
              </div>
              <div className="py-5">
                <p className="text-xs text-neutral-500">{date}</p>
                <h3 className="mt-2 text-xl font-medium">{title}</h3>
              </div>
            </article>
          ))}
        </div>
        <button className="mx-auto mt-8 flex items-center rounded-full bg-[#FDDB32] px-8 py-3 text-sm">
          {content.cta} <ArrowUpRight className="ml-1 inline" size={14} />
        </button>
      </div>
    </section>
  );
}

export default function Home({ data = homeData }: { data?: HomePageData }) {
  return (
    <main className="flex min-h-screen flex-col">
      <Header data={headerData} />
      <Hero data={data.hero} />
      <CheapFlights content={data.flightsSection} />
      <Destinations content={data.destinationsSection} />
      <TravelGuides guides={data.guides} content={data.guidesSection} />
      <Footer data={footerData} />
    </main>
  );
}