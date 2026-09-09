'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftRight,
  Clock,
  Minus,
  Plus,
  Mail,
} from "lucide-react";

import Header from "../header/header";
import Footer from "../footer/footer";
import HomeSearchWidget from "./HomeSearchWidget";
import { flightData, type FlightPageData } from "../../../lib/data/flightData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";

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
   HERO SECTIONS
---------------------------------------------------------------- */

function HeroDesktop({ data }: { data: FlightPageData }) {
  return (
    <section className="relative hidden min-h-[820px] flex-col items-center overflow-hidden pt-[100px] lg:flex">
      <div className="absolute inset-0 z-0">
        <Image
          src={data.hero.image}
          alt={data.hero.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#000000]/[0.27]" />
      </div>

      <div className="relative z-10 flex w-full max-w-[1280px] flex-col px-8 pb-[48px] pt-[28px]">
        
        <h1 className="text-page-h1 w-full max-w-[1400px] font-sans text-white">
          {data.hero.desktopTitleLines.map((line, idx) => (
            <span key={idx} className="block">{line}</span>
          ))}
        </h1>

        <div className="mt-[28px] flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="flex max-w-[500px] flex-col items-start gap-[18px]">
            <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-white">
              {data.hero.description}
            </p>
          </div>
        </div>

        <div className="mt-[64px] w-full">
          <SearchWidget data={data} />
        </div>
        
      </div>
    </section>
  );
}

function HeroMobile({ data }: { data: FlightPageData }) {
  return (
    <section className="relative flex flex-col overflow-hidden pb-[32px] pt-[120px] lg:hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={data.hero.image}
          alt={data.hero.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#000000]/[0.27]" />
      </div>

      <div className="relative z-10 flex flex-col px-[20px]">
        <h1 className="text-page-h1 w-full max-w-full font-sans text-white">
          {(data.hero.mobileTitleLines ?? data.hero.desktopTitleLines).map((line, idx) => (
            <span key={idx} className="block">{line}</span>
          ))}
        </h1>

        <p className="mt-[16px] max-w-[300px] font-sans text-[14px] font-normal leading-[1.43] text-white/90">
          {data.hero.description}
        </p>

        <div className="mt-[32px]">
          <SearchWidget data={data} />
        </div>
      </div>
    </section>
  );
}

function Hero({ data }: { data: FlightPageData }) {
  return (
    <>
      <HeroMobile data={data} />
      <HeroDesktop data={data} />
    </>
  );
}

/* ----------------------------------------------------------------
   SEARCH WIDGET SECTIONS
---------------------------------------------------------------- */

function DesktopCheckbox({ checked, onChange, label, data }: any) {
  return (
    <label className="flex cursor-pointer items-center gap-[8px]">
      <span
        className={`flex size-[16px] shrink-0 items-center justify-center rounded-[5px] border transition-colors ${
          checked ? "border-[#fddb32] bg-[#fddb32]" : "border-[#e6e6e6] bg-[#f9fbf5]"
        }`}
      >
        {checked && (
          <Image
            src={data.icons.check}
            alt="Check"
            width={11}
            height={11}
            className="object-contain"
          />
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="hidden" />
      <span className="whitespace-nowrap font-sans text-[14px] font-medium leading-[1.43] text-black">
        {label}
      </span>
    </label>
  );
}

function SearchWidgetDesktop() {
  return (
    <div className="w-full max-w-[1300px]">
      <HomeSearchWidget />
    </div>
  );
}

function MobileFieldBox({ iconSrc, label, value, className = "" }: any) {
  return (
    <div className={`flex h-[64px] w-full items-center gap-[12px] rounded-[18px] border border-[#e6e6e6] bg-[#f9fbf5] pl-[14px] pr-[14px] ${className}`}>
      <div className="flex size-[28px] shrink-0 items-center justify-center rounded-[8px] bg-[#ffed91]">
        <Image src={iconSrc} alt={label} width={14} height={14} className="object-contain" />
      </div>
      <div className="flex min-w-0 flex-col font-sans">
        <span className="truncate text-[12px] font-medium leading-[1.33] text-[#7d7d7d]">{label}</span>
        <span className="truncate text-[14px] font-medium leading-[1.43] text-black">{value}</span>
      </div>
    </div>
  );
}

function SearchWidgetMobile() {
  return (
    <div className="w-full">
      <HomeSearchWidget />
    </div>
  );
}

function SearchWidget({ data }: { data: FlightPageData }) {
  return (
    <>
      <div className="lg:hidden">
        <SearchWidgetMobile />
      </div>
      <div className="hidden lg:block">
        <SearchWidgetDesktop />
      </div>
    </>
  );
}

/* ----------------------------------------------------------------
   CHEAP FLIGHTS FROM DUBLIN SECTION
---------------------------------------------------------------- */

function CheapFlightsFromDublinSection({ data }: { data: FlightPageData }) {
  return (
    <section className="w-full bg-[#ffffff] py-[80px] text-[#000000]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-[32px] max-[430px]:px-4">

        <div className="mb-[48px] flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="flex max-w-[700px] flex-col gap-[10px]">
            <h2 className="font-sans text-[48px] font-medium leading-[100%] tracking-[0px] text-[#000000]">
              {data.copy.cheapFlightsTitleStart} <span className="text-[#000000]">{data.copy.cheapFlightsTitleHighlight}</span>
            </h2>
            <p className="font-sans text-[14px] font-normal leading-[143%] text-[#555555]">
              {data.copy.cheapFlightsDescription}
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

        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
            {data.cheapFlights.map((flight, i) => (
            <div
              key={i}
              className="group flex h-[364px] flex-col overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-[#FFFFFF] shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[140px] w-full shrink-0 overflow-hidden bg-neutral-100">
                <Image
                  src={flight.image}
                  alt={flight.city}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex w-full flex-col gap-[12px] p-[20px]">
                
                <div className="flex w-full flex-col gap-[4px]">
                  <h3 className="font-sans text-[24px] font-medium leading-[24px] text-[#000000]">
                    {flight.city}
                  </h3>
                  <p className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">
                    {flight.route}
                  </p>
                </div>

                <div className="flex h-[24px] w-full items-center justify-between">
                  <p className="font-sans text-[24px] font-medium leading-[24px] text-[#212121]">
                    {flight.price}
                  </p>
                  <div className="flex items-center gap-[4px] rounded-[6px] border border-[#E6E6E6] bg-[#F9FBF5] px-[8px] py-[4px]">
                    <Image 
                      src={data.icons.airlineLogoPlaceholder} 
                      alt={`${flight.airline} logo`} 
                      width={16} 
                      height={16} 
                      className="object-contain" 
                    />
                    <span className="font-sans text-[12px] font-medium leading-[16px] tracking-[0px] text-[#000000]">
                      {flight.airline}
                    </span>
                  </div>
                </div>

                <div className="flex h-[20px] items-center gap-[6px]">
                  <Clock size={14} className="text-[#7D7D7D]" />
                  <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">
                    {flight.isDirect ? "Direct" : ""} &bull; {flight.duration}
                  </span>
                </div>
              </div>

              <div className="mt-auto px-[20px] pb-[20px] pt-0">
                <Link href="/flights/search" className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[12px] border border-[#E6E6E6] bg-[#FFFFFF] transition-colors hover:bg-[#FDDB32] hover:border-[#FDDB32]">
                  <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[0px] text-[#000000]">
                    {data.copy.viewFlightsCta}
                  </span>
                  <Image 
                    src={data.icons.arrowRight} 
                    alt="Arrow Right" 
                    width={14} 
                    height={14} 
                    className="object-contain" 
                  />
                </Link>
              </div>

            </div>
          ))}
        </div>

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
          <div className="flex flex-col items-center gap-[24px]">
            <span className="flex h-[28px] items-center justify-center rounded-full border border-[#E6E6E6] bg-[#F9FBF5] px-[12px] py-[4px] font-sans text-[14px] font-medium leading-[20px] tracking-[0px] text-[#000000]">
              {data.copy.whyComparePill}
            </span>
            <div className="flex w-full max-w-[876px] flex-col items-center gap-[15px] text-center">
              <h2 className="w-full font-sans font-medium text-[#000000] tracking-[0px] text-[32px] leading-[40px] lg:whitespace-nowrap lg:text-[48px] lg:leading-[48px]">
                {data.copy.whyCompareTitle}
              </h2>
              <p className="w-full font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
                {data.copy.whyCompareDescription}
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-[15px] lg:grid-cols-3">
            {data.whyCompareFeatures.map((feature) => (
              <div key={feature.title}>
                <div className="flex h-[276px] w-full flex-col items-center rounded-[20px] border border-[#E6E6E6] bg-[#F9FBF5] p-[15px]">
                  <div className="flex h-full w-full flex-col items-center gap-[20px] p-[10px] text-center">
                    <span className="flex h-[61px] w-[61px] shrink-0 items-center justify-center rounded-full bg-[#FFED91]">
                      <Image src={feature.iconSrc} alt={feature.title} width={24} height={24} className="object-contain" />
                    </span>
                    <div className="flex flex-col items-center gap-[10px]">
                      <h3 className="w-full font-sans text-[24px] font-medium leading-[24px] tracking-[0px] text-[#000000]">
                        {feature.title}
                      </h3>
                      <p className="w-full font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
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
                  <p className="mt-4 max-w-[680px] font-sans text-[14px] font-normal leading-[1.55] text-[#555555]">
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
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1216px] px-6 pb-24 lg:px-10">
        <div className="flex flex-col items-center rounded-[32px] bg-[#FDDB32] px-6 py-16 text-center lg:py-20">
          <span className="w-fit rounded-full bg-white px-[16px] py-[8px] font-sans text-[14px] font-medium leading-[1.43] text-black">
            {data.copy.newsletterPill}
          </span>
          
          <h2 className="mt-[20px] max-w-2xl font-sans text-[36px] font-medium leading-none text-black lg:text-[48px]">
            {data.copy.newsletterTitle}
          </h2>
          
          <p className="mt-[16px] max-w-xl font-sans text-[16px] font-normal leading-[1.5] text-black/70">
            {data.copy.newsletterDescription}
          </p>

          <form className="mt-[32px] flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-[20px] py-[14px]">
              <input
                type="email"
                placeholder={data.copy.newsletterPlaceholder}
                className="w-full bg-transparent font-sans text-[14px] font-normal leading-[1.43] text-black placeholder:text-black/40 focus:outline-none"
              />
              <Mail className="h-[16px] w-[16px] shrink-0 text-black/30" />
            </div>
            
            <button
              type="submit"
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-black px-[24px] py-[14px] font-sans text-[14px] font-medium leading-[1.43] text-white transition-colors hover:bg-black/80"
            >
              {data.copy.newsletterCta}
              <Image 
                src={data.icons.arrowRight} 
                alt="Arrow Right" 
                width={16} 
                height={16} 
                className="object-contain invert" // inverted so it is white on black bg
              />
            </button>
          </form>
          
          <p className="mt-[12px] font-sans text-[12px] font-normal leading-[1.33] text-black/50">
            {data.copy.newsletterFooter}
          </p>
        </div>
      </div>
    </section>
  );
}