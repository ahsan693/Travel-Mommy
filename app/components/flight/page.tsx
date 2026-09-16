'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Minus,
  Plus,
  CircleHelp,
  ChevronDown,
  Plane,
  Briefcase,
  ArrowRightLeft,
  Calendar,
  Users
} from "lucide-react";

import Header from "../header/header";
import Footer from "../footer/footer";
import { flightData, type FlightPageData } from "../../../lib/data/flightData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";
import { FlightList, useFlightViewModel } from "../../../lib/features/flights";
import type { FlightAvailability } from "../../../lib/features/flights/types/flight";

/* ----------------------------------------------------------------
   MAIN PAGE COMPONENT
---------------------------------------------------------------- */

export default function FlightPage({ data = flightData }: { data?: FlightPageData }) {
  return (
    <main className="bg-[#f9fbf5]">
      <Header data={headerData} />
      <Hero data={data} />
      <CheapFlightsFromDublinSection data={data} />
      <WhyCompareFlightsSection data={data} />
      <PopularAirlinesSection data={data} />
      <PopularAirportsSection data={data} />
      <FaqSection data={data} />
      <NewsletterSection data={data} />
      <Footer data={footerData} />
    </main>
  );
}

/* ----------------------------------------------------------------
   HERO SECTION
---------------------------------------------------------------- */

function Hero({ data }: { data: FlightPageData }) {
  const widget = data.hero.searchWidget;

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black pb-[72px] pt-[120px] lg:min-h-[650px] lg:pt-[140px]">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={data.hero.image} 
          alt={data.hero.imageAlt} 
          fill 
          priority 
          className="object-cover opacity-80" 
        />
        <div className="absolute inset-0 bg-[#000000]/[0.2]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col justify-between px-[32px] pt-[40px]">
        
        {/* Left Aligned Text Content */}
        <div className="flex w-full flex-col text-white">
          <h1 className="max-w-[976px] text-left font-sans text-[48px] font-medium leading-[1.1] tracking-[-0.03em] lg:text-[72px] lg:leading-[100%]">
            {data.hero.title.split("\n").map((line, index) => (
              <span key={index} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </h1>
          
          <p className="mt-[20px] max-w-[504px] text-left font-sans text-[16px] font-normal leading-[24px]">
            {data.hero.description}
          </p>
        </div>

        {/* Dynamic Search Widget - Identical to Homepage Layout */}
        <div className="mt-[40px] flex w-full max-w-[1216px] flex-col gap-[10px] rounded-[24px] bg-white p-[24px] shadow-2xl lg:mt-[60px]">
          
          {/* Top Row: Dropdowns */}
          <div className="flex items-center gap-[10px]">
            <button className="flex h-[40px] items-center gap-2 rounded-full border border-[#E6E6E6] px-4 py-2 text-[14px] font-medium transition-colors hover:bg-gray-50">
              <Plane size={16} /> {widget.dropdowns[0]} <ChevronDown size={16} className="text-gray-500" />
            </button>
            <button className="flex h-[40px] items-center gap-2 rounded-full border border-[#E6E6E6] px-4 py-2 text-[14px] font-medium transition-colors hover:bg-gray-50">
              <Briefcase size={16} /> {widget.dropdowns[1]} <ChevronDown size={16} className="text-gray-500" />
            </button>
          </div>

          {/* Middle Row: Inputs */}
          <div className="flex flex-col gap-[11px] lg:flex-row lg:items-center">
            
            <div className="flex h-[75px] flex-1 cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-[#F9FBF5] px-5 transition-colors hover:border-[#E6E6E6] hover:bg-[#f2f5ec]">
              <Plane size={24} className="text-gray-600" />
              <div className="flex flex-col">
                <span className="text-[13px] text-gray-500">{widget.departure.label}</span>
                <span className="text-[16px] font-semibold text-black">{widget.departure.value}</span>
              </div>
            </div>

            <button className="hidden shrink-0 items-center justify-center p-2 text-gray-400 transition-colors hover:text-black lg:flex">
              <ArrowRightLeft size={20} />
            </button>

            <div className="flex h-[75px] flex-1 cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-[#F9FBF5] px-5 transition-colors hover:border-[#E6E6E6] hover:bg-[#f2f5ec]">
              <Plane size={24} className="text-gray-600" />
              <div className="flex flex-col">
                <span className="text-[13px] text-gray-500">{widget.destination.label}</span>
                <span className="text-[16px] font-medium text-gray-400">{widget.destination.placeholder}</span>
              </div>
            </div>

            <div className="flex h-[75px] flex-1 cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-[#F9FBF5] px-5 transition-colors hover:border-[#E6E6E6] hover:bg-[#f2f5ec]">
              <Calendar size={24} className="text-gray-600" />
              <div className="flex flex-col">
                <span className="text-[13px] text-gray-500">{widget.departDate.label}</span>
                <span className="text-[16px] font-semibold text-black">{widget.departDate.value}</span>
              </div>
            </div>

            <div className="flex h-[75px] flex-1 cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-[#F9FBF5] px-5 transition-colors hover:border-[#E6E6E6] hover:bg-[#f2f5ec]">
              <Calendar size={24} className="text-gray-600" />
              <div className="flex flex-col">
                <span className="text-[13px] text-gray-500">{widget.returnDate.label}</span>
                <span className="text-[16px] font-semibold text-black">{widget.returnDate.value}</span>
              </div>
            </div>

            <div className="flex h-[75px] flex-1 cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-[#F9FBF5] px-5 transition-colors hover:border-[#E6E6E6] hover:bg-[#f2f5ec]">
              <Users size={24} className="text-gray-600" />
              <div className="flex flex-col">
                <span className="text-[13px] text-gray-500">{widget.travellers.label}</span>
                <span className="text-[16px] font-semibold text-black">{widget.travellers.value}</span>
              </div>
            </div>

            <button className="flex h-[75px] items-center justify-center rounded-2xl bg-[#FDDB32] px-8 text-[18px] font-medium text-black transition-colors hover:bg-[#f0cf2e]">
              {widget.buttonText}
            </button>
          </div>

          {/* Bottom Row: Checkboxes */}
          <div className="flex items-center gap-6 pb-2 pt-1">
            <label className="flex cursor-pointer items-center gap-2 text-[14px] font-medium text-black">
              <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#FDDB32]" />
              {widget.checkboxes[0]}
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-[14px] font-medium text-black">
              <input type="checkbox" defaultChecked className="size-4 rounded border-gray-300 accent-[#FDDB32]" />
              {widget.checkboxes[1]}
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-[14px] font-medium text-black">
              <input type="checkbox" className="size-4 rounded border-gray-300 accent-[#FDDB32]" />
              {widget.checkboxes[2]}
            </label>
          </div>
          
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   CHEAP FLIGHTS FROM DUBLIN SECTION
---------------------------------------------------------------- */

function CheapFlightsFromDublinSection({ data }: { data: FlightPageData }) {
  const { flights, loading, error } = useFlightViewModel();

  return (
    <section className="w-full bg-[#ffffff] py-[80px] text-[#000000]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-[32px] max-[430px]:px-4">

        <div className="mb-[48px] flex flex-col items-start justify-between gap-8 lg:flex-row">
          
          <div className="flex flex-col gap-[15px]">
            <h2 className="font-sans text-[32px] font-[570] leading-tight tracking-[-1px] text-[#000000] lg:text-[48px] lg:leading-[48px]">
              {data.copy.cheapFlightsTitleStart}{" "}
              <span className="underline decoration-solid decoration-1 underline-offset-auto">
                {data.copy.cheapFlightsTitleHighlight}
              </span>
            </h2>
            <p className="max-w-[668px] font-sans text-[16px] font-[380] leading-[24px] tracking-[0px] text-[#000000]">
              {error ?? (loading ? "Finding cheapest flights..." : data.copy.cheapFlightsDescription)}
            </p>
          </div>

          <Link href="/flights/routes" className="inline-flex h-[48px] shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[28px] font-sans text-[14px] font-medium leading-[143%] text-[#000000] transition-colors hover:bg-[#e5c52c]">
            {data.copy.cheapFlightsCta}
            <Image 
              src={data.icons.arrowRight} 
              alt="Arrow Right" 
              width={16} 
              height={16} 
              className="object-contain" 
            />
          </Link>
        </div>

        <FlightList flights={flights} cta={data.copy.viewFlightsCta} onViewFlights={openFlightSearch} />

      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   WHY COMPARE SECTION
---------------------------------------------------------------- */

function WhyCompareFlightsSection({ data }: { data: FlightPageData }) {
  return (
    <section className="w-full bg-[#FFFFFF] pt-[80px] pb-[160px] lg:px-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-6 lg:px-[32px]">
        <div className="flex w-full flex-col gap-[48px]">
          
          {/* Section Header */}
          <div className="flex flex-col items-center gap-[24px]">
            <span className="flex h-[28px] items-center justify-center rounded-full border border-[#E6E6E6] bg-[#FFFFFF] px-[12px] py-[4px] font-sans text-[14px] font-medium leading-[20px] tracking-[0px] text-[#000000]">
              {data.copy.whyComparePill}
            </span>
            <div className="flex w-full max-w-[876px] flex-col items-center gap-[15px] text-center">
              <h2 className="w-full font-sans font-medium text-[#000000] tracking-[0px] text-[32px] leading-[40px] lg:text-[48px] lg:leading-[48px]">
                {data.copy.whyCompareTitle}
              </h2>
              <p className="w-full max-w-[660px] font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#555555]">
                {data.copy.whyCompareDescription}
              </p>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid w-full grid-cols-1 gap-[24px] lg:grid-cols-3">
            {data.whyCompareFeatures.map((feature) => (
              <div 
                key={feature.title} 
                className="flex h-full w-full flex-col items-center rounded-[24px] border border-[#E6E6E6] bg-[#F9FBF5] px-[24px] py-[40px]"
              >
                <span className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#FDDB32]">
                  <Image 
                    src={feature.iconSrc} 
                    alt={feature.title} 
                    width={28} 
                    height={28} 
                    className="object-contain" 
                  />
                </span>
                
                <h3 className="mt-[24px] w-full text-center font-sans text-[20px] font-medium leading-[28px] text-[#000000] lg:text-[24px]">
                  {feature.title}
                </h3>
                
                <p className="mt-[12px] w-full text-center font-sans text-[14px] font-normal leading-[22px] text-[#555555] lg:text-[16px] lg:leading-[24px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   POPULAR AIRLINES SECTION
---------------------------------------------------------------- */

function PopularAirlinesSection({ data }: { data: FlightPageData }) {
  return (
     <section className="w-full bg-black py-[80px] lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-6 lg:px-[32px]">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="font-sans text-[36px] font-semibold leading-[1.1] tracking-[-0.01em] text-white lg:text-[48px] lg:leading-[52px]">
                {data.copy.popularAirlinesTitle}
              </h2>
              <Link
                href="/flights/airlines"
                className="flex shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[24px] py-[12px] font-sans text-[14px] font-medium leading-[20px] text-black transition-colors hover:bg-[#e5c52c]"
              >
                {data.copy.popularAirlinesCta}
                <Image 
                  src={data.icons.arrowRight} 
                  alt="Arrow Right" 
                  width={16} 
                  height={16} 
                  className="object-contain" 
                />
              </Link>
            </div>

            <p className="max-w-[800px] font-sans text-[16px] font-normal leading-[24px] text-white/80">
              {data.copy.popularAirlinesDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-[6.39px] gap-y-[6.39px] sm:grid-cols-3 lg:grid-cols-5">
            {data.popularAirlines.map((airline) => (
              <div
                key={airline.name}
                className="group flex aspect-[238/152] w-full items-center justify-center rounded-2xl border border-[#E6E6E6] bg-[#F9FBF5] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-full w-full max-w-[140px]">
                  <Image
                    src={airline.logo}
                    alt={`${airline.name} logo`}
                    fill
                    className="object-contain opacity-90 transition-opacity group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   POPULAR AIRPORTS SECTION
---------------------------------------------------------------- */

function PopularAirportsSection({ data }: { data: FlightPageData }) {
  return (
    <section className="w-full bg-[#FFFFFF] px-[20px] py-[56px] lg:px-[80px] lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[32px] lg:gap-[48px]">
        
        <div className="flex flex-col items-center gap-[12px] text-center lg:gap-3">
          <h2 className="font-sans text-[42px] font-medium leading-[44px] tracking-[-1.5px] text-[#000000] lg:text-[48px] lg:font-semibold lg:leading-[1.1] lg:tracking-[-0.01em]">
            {data.copy.popularAirportsTitle}
          </h2>
          <p className="max-w-[640px] font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000] lg:text-black/60">
            {data.copy.popularAirportsDescription}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[12px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {data.popularAirports.map((airport) => (
            <div
              key={airport.code}
              className="flex w-full items-center justify-between rounded-[16px] border border-[#E6E6E6] bg-white p-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md lg:rounded-2xl lg:px-6 lg:py-5"
            >
              <div className="flex items-center gap-[12px] lg:gap-4">
                
                <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[12px] bg-[#FEED91] p-[10px] lg:h-11 lg:w-11 lg:rounded-xl lg:bg-[#FDDB32] lg:p-0">
                  <Image 
                    src={data.icons.airportIcon} 
                    alt="Airport" 
                    width={20} 
                    height={20} 
                    className="object-contain" 
                  />
                </div>
                
                <div className="flex flex-col gap-[4px] lg:gap-0">
                  <span className="font-sans text-[16px] font-medium leading-[22px] tracking-[-0.32px] text-[#000000] lg:font-semibold lg:leading-[24px]">
                    {airport.name}
                  </span>
                  <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#6E6E6E] lg:text-black/50">
                    {airport.location}
                  </span>
                </div>
              </div>
              
              <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#000000] lg:font-medium lg:text-black/60">
                {airport.code}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/flights/airports"
          className="flex w-full shrink-0 items-center justify-center gap-[10px] rounded-[12px] bg-[#FDDB32] px-[24px] py-[12px] font-sans text-[16px] font-medium leading-[20px] text-[#000000] transition-colors hover:bg-[#e5c52c] lg:w-auto lg:gap-2 lg:rounded-full lg:text-[14px]"
        >
          {data.copy.popularAirportsCta}
          <Image 
            src={data.icons.arrowRight} 
            alt="Arrow Right" 
            width={16} 
            height={16} 
            className="object-contain" 
          />
        </Link>

      </div>
    </section>
  );
}   
  /* ----------------------------------------------------------------
   FAQ SECTION
---------------------------------------------------------------- */

function FaqSection({ data }: { data: FlightPageData }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
     <section className="bg-white">
      <div className="mx-auto w-full max-w-[820px] px-6 py-20 lg:px-10 lg:py-24">
        <h2 className="text-center font-sans text-[36px] font-medium leading-none text-[#000000] lg:text-[48px]">
          {data.copy.faqTitle}
        </h2>

        <div className="mt-12 flex flex-col gap-8">
          {data.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`flight-faq-answer-${i}`}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span className="font-sans text-[16px] font-medium leading-[1.5] text-black">
                    {faq.question}
                  </span>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-black">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p id={`flight-faq-answer-${i}`} className="mt-4 max-w-[680px] font-sans text-[14px] font-normal leading-[1.55] text-[#555555]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   NEWSLETTER SECTION
---------------------------------------------------------------- */

function NewsletterSection({ data }: { data: FlightPageData }) {
  return (
    <section className="w-full bg-white px-[32px] pb-[160px] pt-[40px]">
      <div className="mx-auto flex w-full max-w-[1280px] justify-center">
        
        {/* Yellow Inner Container */}
        <div className="flex w-full max-w-[1216px] flex-col items-center justify-center rounded-[24px] bg-[#FDDB32] px-[20px] py-[50px] text-center">
          
          {/* Top Pill */}
          <span className="w-fit rounded-full bg-white px-[16px] py-[8px] font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">
            {data.copy.newsletterPill}
          </span>
          
          {/* Main Title */}
          <h2 className="mt-[16px] max-w-2xl font-sans text-[36px] font-medium leading-none tracking-[-1px] text-[#000000] lg:text-[48px] lg:leading-[48px]">
            {data.copy.newsletterTitle}
          </h2>
          
          {/* Subtitle / Description */}
          <p className="mt-[16px] max-w-xl font-sans text-[16px] font-normal leading-[1.5] text-[#000000]">
            {data.copy.newsletterDescription}
          </p>

          {/* Form & Disclaimer Wrapper */}
          <div className="mt-[20px] flex flex-col items-center gap-[10px]">
            
            <form className="flex w-full flex-col gap-[10px] sm:flex-row sm:items-center">
              
              {/* Input Field */}
              <div className="flex h-[44px] w-full max-w-[393px] flex-1 items-center justify-between rounded-[14px] bg-white px-[18px]">
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder={data.copy.newsletterPlaceholder}
                  className="w-full bg-transparent font-sans text-[14px] font-normal text-[#000000] placeholder:text-[#767676] outline-none"
                />
                <CircleHelp className="h-[16px] w-[16px] shrink-0 text-[#000000]" />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="flex h-[44px] w-[122px] shrink-0 items-center justify-center gap-2 rounded-[14px] bg-black font-sans text-[14px] font-medium text-white shadow-lg transition-colors hover:bg-black/80"
              >
                {data.copy.newsletterCta}
                <Image 
                  src={data.icons.arrowRight} 
                  alt="" 
                  aria-hidden="true"
                  width={16} 
                  height={16} 
                  className="object-contain invert"
                />
              </button>

            </form>
            
            {/* Footer Disclaimer Text */}
            <p className="font-sans text-[14px] font-normal leading-[20px] text-black/50">
              {data.copy.newsletterFooter}
            </p>

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