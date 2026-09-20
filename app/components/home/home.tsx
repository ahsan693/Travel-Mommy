'use client';

import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  Plane,
  Search,
  SlidersHorizontal,
  Ticket
} from "lucide-react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { homeData, type HomePageData } from "../../../lib/data/homeData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";
import { FlightList, useFlightViewModel } from "../../../lib/features/flights";
import type { FlightAvailability } from "../../../lib/features/flights/types/flight";
import Widget from "../widget/widget";

function Hero({ data }: { data: HomePageData["hero"] }) {
  return (
    <section className="relative flex w-full min-h-[909px] flex-col items-center justify-center overflow-hidden bg-black pb-[40px] pt-[120px] lg:min-h-[796px] lg:pb-[72px] lg:pt-[160px]">
      <Image 
        src={data.image} 
        alt={data.imageAlt} 
        fill 
        priority 
        className="object-cover opacity-80" 
      />
      
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col justify-between px-[20px] lg:px-[32px]">
        
        {/* Mobile Text (Visible only on < lg) */}
        <div className="flex w-full flex-col text-white lg:hidden">
          <h1 className="text-left font-sans text-[42px] font-[570] leading-[44px] tracking-[-1.5px]">
            {data.title.replace('\n', ' ')} {data.rightHeading.join(' ')}
          </h1>
          <p className="mt-[16px] max-w-[330px] font-sans text-[16px] font-normal leading-[24px] tracking-[0px]">
            {data.description}
          </p>
        </div>

        {/* Desktop Text (Visible only on lg+) */}
        <div className="hidden lg:flex w-full max-w-[1216px] flex-col text-white">
          <h1 className="text-left font-sans text-[110px] font-medium leading-[98px] tracking-[-5px]">
            {data.title.split("\n").map((line, index) => (
              <span key={index} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </h1>
          
          <p className="mt-[20px] max-w-[330px] font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px]">
            {data.description}
          </p>

          <h2 className="mt-[-40px] text-right font-sans text-[110px] font-medium leading-[98px] tracking-[-5px]">
            {data.rightHeading.map((line, index) => (
              <span key={index} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </h2>
        </div>

        {/* Widget Container */}
        <div className="mt-[24px] w-full lg:mt-[60px]">
          <Widget />
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
    <section className="w-full bg-[#FFFFFF] px-[16px] py-[80px] lg:px-[32px] lg:py-[96px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[32px] lg:gap-[48px]">
        
        <div className="flex flex-col items-start justify-between gap-[16px] lg:flex-row lg:items-end">
          <div className="flex flex-col">
            <h2 className="font-sans text-[42px] font-medium leading-[44px] tracking-[-1.5px] text-[#000000] lg:text-[48px] lg:leading-[1.1] lg:tracking-[-1px]">
              {content.title} <span className="text-[#000000] underline decoration-1 underline-offset-4">{content.highlightedTitle}</span>
            </h2>
            <p className="mt-[16px] max-w-[358px] font-sans text-[16px] font-[380] leading-[24px] tracking-[0px] text-[#333333] lg:max-w-[700px]">
              {error ?? (loading ? "Finding cheapest flights..." : content.description)}
            </p>
          </div>
          
          {/* Desktop CTA Button (Hidden on Mobile) */}
          <button className="hidden h-[48px] shrink-0 items-center rounded-full bg-[#FDDB32] px-[28px] font-sans text-[14px] font-medium text-[#111827] transition-colors hover:bg-[#e5c52c] lg:flex">
            {content.cta} <ArrowUpRight className="ml-2 inline" size={16} />
          </button>
        </div>

        {/* Flight Cards Grid Wrapper */}
        <FlightList flights={flights} cta={content.cardCta} onViewFlights={openFlightSearch} />

        {/* Mobile CTA Button (Hidden on Desktop) */}
        <button className="mt-[8px] flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[14px] bg-[#FDDB32] px-[24px] font-sans text-[16px] font-medium text-[#000000] transition-colors hover:bg-[#e5c52c] lg:hidden">
          Explore Cheap Deals <ArrowUpRight size={18} />
        </button>

      </div>
    </section>
  );
}

function WhyCompare({ content }: { content: HomePageData["whyCompareSection"] }) {
  const iconMap: Record<string, any> = {
    search: Search,
    sliders: SlidersHorizontal,
    ticket: Ticket
  };

  return (
    <section className="w-full bg-[#FFFFFF] px-[24px] pb-[64px] pt-[56px] lg:px-[32px] lg:py-[96px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start lg:items-center">
        
        <h2 className="text-left font-sans text-[36px] font-medium leading-[40px] tracking-[-1.5px] text-[#000000] lg:text-center lg:text-[56px] lg:leading-[60px] lg:tracking-[-1.5px]">
          {content.title}
        </h2>
        
        <p className="mt-[16px] max-w-[760px] text-left font-sans text-[16px] font-normal leading-[24px] text-[#333333] lg:text-center">
          {content.description}
        </p>

        <div className="mt-[32px] grid w-full grid-cols-1 gap-[24px] lg:grid-cols-3">
          {content.features.map((feature, idx) => {
            const Icon = iconMap[feature.iconName];
            
            return (
              <div 
                key={idx} 
                className="flex h-auto min-h-[186px] flex-col gap-[20px] rounded-[24px] border border-[#E6EEF8] bg-[#FFFFFF] p-[24px] shadow-sm lg:h-[186px]"
              >
                <div className="flex items-center gap-[16px]">
                  <div className="flex size-[56px] shrink-0 items-center justify-center rounded-[18px] bg-[#FDDB32]">
                    {Icon && <Icon size={24} className="text-[#000000]" />}
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-sans text-[12px] font-medium leading-[18px] text-[#8E8E8E]">
                      {feature.featureNumber}
                    </span>
                    <h3 className="font-sans text-[20px] font-medium leading-[1.2] text-[#000000] lg:text-[24px] lg:leading-[24px]">
                      {feature.title.split('\n').map((line, i) => (
                        <span key={i} className="block">{line}</span>
                      ))}
                    </h3>
                  </div>
                </div>
                <p className="font-sans text-[14px] leading-[20px] text-[#6B7280]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function Destinations({ content }: { content: HomePageData["destinationsSection"] }) {
  return (
    <section className="w-full bg-[#000000] py-[80px] lg:py-[160px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[48px] px-[32px]">
        
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

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-4">
          {content.cards.map((dest) => (
            <div 
              key={dest.title} 
              className="group flex h-[434px] flex-col overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-[#ffffff] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
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

              <div className="flex h-[218px] flex-col justify-between p-[24px]">
                <div>
                  <h3 className="font-sans text-[24px] font-medium leading-none text-[#111827]">
                    {dest.title}
                  </h3>
                  <p className="mt-[6px] font-sans text-[14px] font-normal leading-[1.43] text-[#6B7280]">
                    {dest.tagline}
                  </p>
                </div>

                <div className="flex w-fit items-center gap-[6px] rounded-full border border-[#E6E6E6] bg-[#ffffff] px-[12px] py-[6px]">
                  <Plane size={14} className="text-[#6B7280]" />
                  <span className="font-sans text-[13px] font-medium text-[#111827]">
                    {dest.flightPrice}
                  </span>
                </div>

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

function CtaSection({ content }: { content: HomePageData["ctaSection"] }) {
  return (
    <section className="w-full bg-white pb-[80px] pt-[40px] px-[32px]">
      <div className="mx-auto flex w-full max-w-[1280px] justify-center">
        {/* Yellow Inner Container */}
        <div className="flex w-full max-w-[1216px] flex-col items-center justify-center rounded-[24px] bg-[#FDDB32] py-[50px] px-[20px]">
          
          <h2 className="text-center font-sans text-[32px] font-medium leading-none tracking-[-1px] text-[#000000] lg:text-[48px]">
            {content.title}
          </h2>
          
          <p className="mt-[16px] text-center font-sans text-[16px] font-normal leading-[24px] text-[#000000]">
            {content.subtitle}
          </p>
          
          <button className="mt-[32px] flex h-[44px] items-center gap-[10px] rounded-full bg-black px-[24px] font-sans text-[14px] font-medium tracking-[-0.28px] text-white shadow-xl transition-colors hover:bg-gray-800">
            {content.buttonText}
            <ArrowUpRight size={16} />
          </button>
          
        </div>
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
      <WhyCompare content={data.whyCompareSection} />
      <Destinations content={data.destinationsSection} />
      <TravelGuides guides={data.guides} content={data.guidesSection} />
      <CtaSection content={data.ctaSection} />
      <Footer data={footerData} />
    </main>
  );
}