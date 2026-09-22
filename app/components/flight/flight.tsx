'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, CircleHelp, ArrowUpRight, Clock } from "lucide-react";

import Header from "../header/header";
import Footer from "../footer/footer";
import { flightData, type FlightPageData } from "../../../lib/data/flightData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";
import Widget from "../widget/widget";

/* ----------------------------------------------------------------
   MAIN PAGE COMPONENT
---------------------------------------------------------------- */

export default function FlightPage({ data = flightData }: { data?: FlightPageData }) {
  return (
    <main className="bg-[#FFFFFF]">
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
  return (
    <section className="relative z-20 flex w-full flex-col items-center justify-center overflow-visible bg-black pb-[40px] pt-[120px] lg:min-h-[650px] lg:pb-[72px] lg:pt-[140px]">
      
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

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col justify-between px-[20px] lg:px-[32px] pt-[20px] lg:pt-[40px]">
        
        {/* Mobile Aligned Text Content */}
        <div className="flex w-full flex-col text-white lg:hidden">
          <h1 className="max-w-[976px] text-left font-sans text-[42px] font-[570] leading-[44px] tracking-[-1.5px]">
            {data.hero.title.replace('\n', ' ')}
          </h1>
          <p className="mt-[16px] max-w-[330px] text-left font-sans text-[16px] font-normal leading-[24px]">
            {data.hero.description}
          </p>
        </div>

        {/* Desktop Aligned Text Content */}
        <div className="hidden w-full flex-col text-white lg:flex">
          <h1 className="max-w-[976px] text-left font-sans text-[72px] font-medium leading-[100%] tracking-[-0.03em]">
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

        <div className="relative z-50 mt-[24px] w-full lg:mt-[60px]">
          <Widget />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   CHEAP FLIGHTS FROM DUBLIN SECTION
---------------------------------------------------------------- */

function CheapFlightsFromDublinSection({ data }: { data: FlightPageData }) {
  return (
    <section className="w-full bg-[#FFFFFF] px-[16px] py-[80px] text-[#000000] lg:px-[32px] lg:py-[96px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[32px] lg:gap-[48px]">

        <div className="flex flex-col items-start justify-between gap-[16px] lg:flex-row lg:items-end">
          <div className="flex flex-col">
            <h2 className="font-sans text-[42px] font-[500] leading-[44px] tracking-[-1.5px] text-[#000000] lg:text-[48px] lg:leading-[48px] lg:tracking-[-1px]">
              {data.copy.cheapFlightsTitleStart}{" "}
              <span className="underline decoration-solid decoration-1 underline-offset-4">
                {data.copy.cheapFlightsTitleHighlight}
              </span>
            </h2>
            <p className="mt-[16px] max-w-[358px] font-sans text-[16px] font-[380] leading-[24px] tracking-[0px] text-[#333333] lg:max-w-[668px]">
              {data.copy.cheapFlightsDescription}
            </p>
          </div>

          <Link href="/flights/routes" className="hidden h-[48px] shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[28px] font-sans text-[14px] font-medium leading-[143%] text-[#000000] transition-colors hover:bg-[#e5c52c] lg:inline-flex">
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
          {data.cheapFlights.map((flight) => (
            <div
              key={`${flight.city}-${flight.route}`}
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
                    Direct &bull; {flight.duration}
                  </span>
                </div>
              </div>

              <div className="mt-auto px-[20px] pb-[20px] pt-0">
                <button className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[12px] border border-[#E6E6E6] bg-[#FFFFFF] transition-colors hover:border-[#FDDB32] hover:bg-[#FDDB32]">
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
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Bottom CTA */}
        <button className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[14px] bg-[#FDDB32] font-sans text-[16px] font-medium text-[#111827] transition-colors hover:bg-[#e5c52c] lg:hidden">
          {data.copy.cheapFlightsCta} <ArrowUpRight size={18} />
        </button>

      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   WHY COMPARE SECTION
---------------------------------------------------------------- */

function WhyCompareFlightsSection({ data }: { data: FlightPageData }) {
  return (
    <section className="w-full bg-[#FFFFFF] px-[24px] py-[64px] lg:bg-[#F9FBF5] lg:px-[80px] lg:py-[160px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-[16px] lg:gap-[24px]">
          <span className="flex h-[28px] items-center justify-center rounded-full border border-[#E6E6E6] bg-[#FFFFFF] px-[12px] py-[4px] font-sans text-[14px] font-medium leading-[20px] tracking-[0px] text-[#000000]">
            {data.copy.whyComparePill}
          </span>
          <div className="flex w-full max-w-[876px] flex-col items-center gap-[16px] text-center lg:gap-[15px]">
            <h2 className="w-full font-sans text-[42px] font-[500] leading-[44px] tracking-[-1.5px] text-[#000000] lg:text-[48px] lg:leading-[48px] lg:tracking-[0px]">
              {data.copy.whyCompareTitle}
            </h2>
            <p className="w-full max-w-[660px] font-sans text-[16px] font-[380] leading-[24px] tracking-[0px] text-[#333333] lg:text-[#555555]">
              {data.copy.whyCompareDescription}
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-[32px] grid w-full grid-cols-1 gap-[16px] lg:mt-[48px] lg:grid-cols-3 lg:gap-[24px]">
          {data.whyCompareFeatures.map((feature) => (
            <div 
              key={feature.title} 
              className="flex w-full flex-col items-center rounded-[24px] border border-[#E6E6E6] bg-[#FFFFFF] px-[24px] py-[32px] shadow-sm lg:h-full lg:bg-[#F9FBF5] lg:py-[40px]"
            >
              <span className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#FFED91]">
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
    </section>
  );
}

/* ----------------------------------------------------------------
   POPULAR AIRLINES SECTION
---------------------------------------------------------------- */

function PopularAirlinesSection({ data }: { data: FlightPageData }) {
  return (
     <section className="w-full bg-black py-[64px] lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-[20px] lg:px-[32px]">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col items-start gap-[16px] lg:flex-row lg:items-center lg:justify-between lg:gap-6">
              <h2 className="font-sans text-[36px] font-medium leading-[40px] tracking-[-1.5px] text-white lg:text-[48px] lg:font-semibold lg:leading-[52px] lg:tracking-[-0.01em]">
                {data.copy.popularAirlinesTitle}
              </h2>
              <Link
                href="/flights/airlines"
                className="hidden shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[24px] py-[12px] font-sans text-[14px] font-medium leading-[20px] text-black transition-colors hover:bg-[#e5c52c] lg:flex"
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

            <p className="max-w-[800px] font-sans text-[16px] font-[380] leading-[24px] text-white/80">
              {data.copy.popularAirlinesDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[10px] sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-[6.39px] lg:gap-y-[6.39px]">
            {data.popularAirlines.map((airline) => (
              <div
                key={airline.name}
                className="flex aspect-[174/86] w-full items-center justify-center rounded-[12px] border border-[#E6E6E6] bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md lg:aspect-[238/152] lg:rounded-2xl lg:bg-[#F9FBF5] lg:p-5"
              >
                <div className="relative h-full w-full max-w-[100px] lg:max-w-[140px]">
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
    <section className="w-full bg-[#FFFFFF] px-[20px] py-[64px] lg:px-[80px] lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[32px] lg:gap-[48px]">
        
        <div className="flex flex-col items-center gap-[16px] text-center lg:gap-3">
          <h2 className="font-sans text-[42px] font-[500] leading-[44px] tracking-[-1.5px] text-[#000000] lg:text-[48px] lg:font-semibold lg:leading-[1.1] lg:tracking-[-0.01em]">
            {data.copy.popularAirportsTitle}
          </h2>
          <p className="max-w-[640px] font-sans text-[16px] font-[380] leading-[24px] tracking-[0px] text-[#333333] lg:text-black/60">
            {data.copy.popularAirportsDescription}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[12px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[24px]">
          {data.popularAirports.map((airport) => (
            <div
              key={airport.code}
              className="flex w-full items-center justify-between rounded-[16px] border border-[#E6E6E6] bg-white p-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md lg:rounded-2xl lg:px-6 lg:py-5"
            >
              <div className="flex items-center gap-[12px] lg:gap-4">
                
                <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[12px] bg-[#FFED91] lg:h-11 lg:w-11 lg:rounded-xl lg:bg-[#FDDB32]">
                  <Image 
                    src={data.icons.airportIcon} 
                    alt="Airport" 
                    width={20} 
                    height={20} 
                    className="object-contain" 
                  />
                </div>
                
                <div className="flex flex-col gap-[2px] lg:gap-0">
                  <span className="font-sans text-[16px] font-medium leading-[22px] tracking-[-0.32px] text-[#000000] lg:font-semibold lg:leading-[24px]">
                    {airport.name}
                  </span>
                  <span className="font-sans text-[14px] font-[380] leading-[20px] tracking-[0px] text-[#6E6E6E] lg:font-normal lg:text-black/50">
                    {airport.location}
                  </span>
                </div>
              </div>
              
              <span className="font-sans text-[14px] font-[380] leading-[20px] tracking-[0px] text-[#000000] lg:font-medium lg:text-black/60">
                {airport.code}
              </span>
            </div>
          ))}
        </div>

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
     <section className="bg-[#FFFFFF] lg:bg-white">
      <div className="mx-auto w-full max-w-[820px] px-[20px] py-[64px] lg:px-10 lg:py-24">
        <h2 className="text-center font-sans text-[36px] font-medium leading-[40px] tracking-[-1.5px] text-[#000000] lg:text-[48px] lg:leading-none lg:tracking-[0px]">
          {data.copy.faqTitle}
        </h2>

        <div className="mt-[32px] flex flex-col gap-[24px] lg:mt-12 lg:gap-8">
          {data.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="border-b border-[#E6E6E6] pb-[24px]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`flight-faq-answer-${i}`}
                  className="flex w-full items-center justify-between gap-6 text-left outline-none"
                >
                  <span className="font-sans text-[16px] font-medium leading-[24px] text-black">
                    {faq.question}
                  </span>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-black">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] mt-[16px] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p id={`flight-faq-answer-${i}`} className="font-sans text-[14px] font-[380] leading-[22px] text-[#555555] lg:max-w-[680px] lg:leading-[1.55]">
                      {faq.answer}
                    </p>
                  </div>
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
   NEWSLETTER SECTION
---------------------------------------------------------------- */

function NewsletterSection({ data }: { data: FlightPageData }) {
  return (
    <section className="w-full bg-[#FFFFFF] px-[20px] py-[40px] lg:px-[32px] lg:pb-[160px] lg:pt-[40px]">
      <div className="mx-auto flex w-full max-w-[1280px] justify-center">
        
        {/* Yellow Inner Container */}
        <div className="flex w-full max-w-[1216px] flex-col items-center justify-center gap-[32px] rounded-[24px] bg-[#FDDB32] px-[24px] py-[48px] text-center lg:gap-[24px] lg:px-[20px] lg:py-[50px]">
          
          <div className="flex flex-col items-center gap-[16px]">
            {/* Top Pill */}
            <span className="w-fit rounded-full bg-white px-[16px] py-[8px] font-sans text-[14px] font-medium leading-[20px] text-[#000000]">
              {data.copy.newsletterPill}
            </span>
            
            {/* Main Title */}
            <h2 className="max-w-[350px] font-sans text-[42px] font-[500] leading-[44px] tracking-[-1.5px] text-[#000000] lg:max-w-2xl lg:text-[48px] lg:leading-[48px] lg:tracking-[-1px]">
              {data.copy.newsletterTitle}
            </h2>
            
            {/* Subtitle / Description */}
            <p className="max-w-[320px] font-sans text-[16px] font-[380] leading-[24px] text-[#000000] lg:max-w-xl lg:font-normal lg:leading-[1.5]">
              {data.copy.newsletterDescription}
            </p>
          </div>

          {/* Form & Disclaimer Wrapper */}
          <div className="flex w-full max-w-[393px] flex-col items-center lg:max-w-none">
            
            <form className="flex w-full flex-col gap-[12px] sm:flex-row sm:items-center justify-center lg:gap-[10px]">
              
              {/* Input Field */}
              <div className="flex h-[56px] w-full flex-1 items-center justify-between rounded-[16px] bg-white px-[20px] lg:h-[44px] lg:max-w-[393px] lg:rounded-[14px] lg:px-[18px]">
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder={data.copy.newsletterPlaceholder}
                  className="w-full bg-transparent font-sans text-[16px] font-normal text-[#000000] placeholder:text-[#767676] outline-none lg:text-[14px]"
                />
                <CircleHelp className="h-[20px] w-[20px] shrink-0 text-[#000000] lg:h-[16px] lg:w-[16px]" />
              </div>
              
              {/* Mobile Disclaimer */}
              <p className="font-sans text-[14px] font-[380] leading-[20px] text-[#716216] sm:hidden lg:hidden">
                {data.copy.newsletterFooter}
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex h-[56px] w-full shrink-0 items-center justify-center gap-2 rounded-[16px] bg-black font-sans text-[16px] font-medium text-white shadow-lg transition-colors hover:bg-black/80 lg:h-[44px] lg:w-[122px] lg:rounded-[14px] lg:text-[14px]"
              >
                {data.copy.newsletterCta}
                <ArrowUpRight size={18} className="lg:hidden" />
                <Image 
                  src={data.icons.arrowRight} 
                  alt="" 
                  aria-hidden="true"
                  width={16} 
                  height={16} 
                  className="hidden object-contain invert lg:block"
                />
              </button>

            </form>
            
            {/* Footer Disclaimer Text (Desktop Only) */}
            <p className="hidden mt-[16px] font-sans text-[14px] font-normal leading-[20px] text-black/50 lg:block">
              {data.copy.newsletterFooter}
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}