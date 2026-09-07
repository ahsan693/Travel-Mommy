'use client';

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ArrowUpRight,
  Star,
  MapPin,
  Plane,
  Building2,
  Umbrella,
  Minus,
  Plus,
} from "lucide-react";

import Header from "../header/header";
import Footer from "../footer/footer";
import { destinationsData, type DestinationsPageData } from "../../../lib/data/destinationsData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";

/* =====================================================================
   HERO SECTION
===================================================================== */

function HeroSection({ data }: { data: DestinationsPageData }) {
  const [activeRegion, setActiveRegion] = useState(data.hero.initialRegion);

  // Filter chips based on the selected active region
  const activeChips = data.countryChips.filter((chip) => chip.region === activeRegion);

  return (
    <section className="relative flex h-auto min-h-[664px] w-full flex-col items-center overflow-hidden bg-[#000000] md:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.hero.image}
          alt={data.hero.imageAlt}
          fill
          className="object-cover opacity-80"
          priority
        />
        {/* Mobile: 55% black overlay, Desktop: Gradient */}
        <div className="absolute inset-0 bg-black/55 md:bg-transparent md:bg-gradient-to-t md:from-black/80 md:via-black/20 md:to-black/60" />
      </div>

      <div className="relative z-10 flex h-full w-full max-w-[1440px] flex-col px-[16px] pb-[32px] pt-[12px] md:px-[112px] md:pb-[80px] md:pt-[24px]">
        <Header data={headerData} />

        {/* Added mt-[120px] for mobile to push content below header, kept md:mt-auto for desktop */}
        <div className="mt-[120px] flex w-full max-w-[1198px] flex-col gap-[10px] md:mt-auto md:gap-[26px]">
          
          <div className="flex flex-col gap-[12px]">
            {/* Title */}
            <h1 className="font-sans text-[42px] font-medium leading-[44px] tracking-[-1.5px] text-[#FFFFFF] md:text-[72px] md:leading-none md:tracking-[0px]">
              {/* Mobile View: 3 lines */}
              <span className="block md:hidden">
                {data.hero.mobileTitle.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </span>
              {/* Desktop View: Single line */}
              <span className="hidden md:inline">
                {data.hero.title}
              </span>
            </h1>
            {/* Subtitle */}
            <p className="max-w-[700px] font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#FFFFFF] md:text-[16px] md:leading-[1.5] md:text-[rgba(255,255,255,0.8)]">
              {/* Mobile Text */}
              <span className="md:hidden">
                {data.hero.mobileDescription}
              </span>
              {/* Desktop Text */}
              <span className="hidden md:inline">
                {data.hero.description}
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-[12px] md:gap-[19px]">
            <p className="font-sans text-[13px] font-normal leading-[18px] tracking-[0px] text-[#F9FBF5] md:font-medium md:text-[14px] md:leading-[1.43] md:text-[#FFFFFF]">
              {data.hero.prompt}
            </p>

            {/* Region pills */}
            <div className="flex flex-wrap gap-[8px]">
              {data.regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`flex h-[32px] items-center gap-[6px] rounded-full px-[14px] py-[8px] font-sans text-[12px] font-normal leading-[16px] tracking-[0.1px] transition-colors md:h-[40px] md:px-[20px] md:py-0 md:text-[14px] md:font-medium md:leading-[1.43] md:tracking-[0px] ${
                    activeRegion === region
                      ? "border border-[#000000] bg-[#FDDB32] text-[#000000] md:border-none"
                      : "bg-[#F9FBF5] text-[#000000] hover:bg-[#F9FBF5] md:bg-[#FFFFFF] md:border-none"
                  }`}
                >
                  {region}
                  {activeRegion === region && <ChevronDown className="h-[18px] w-[18px] stroke-[1.5px] md:h-[16px] md:w-[16px] md:stroke-2" />}
                </button>
              ))}
            </div>

            <div className="my-[12px] block h-[1px] w-full bg-[#E6E6E6] opacity-30 md:w-[358px]" />

            {/* Mobile Only: Popular Destinations Label */}
            <p className="font-sans text-[13px] font-normal leading-[18px] tracking-[0px] text-[#F9FBF5] md:hidden">
              {data.hero.popularLabel}
            </p>

            {/* Country chips (Filtered) */}
            <div className="flex flex-wrap gap-[8px] md:mt-[4px]">
              {activeChips.map((chip) => (
                <button
                  key={chip.name}
                  className="flex h-[40px] items-center gap-[8px] rounded-full bg-[#F9FBF5] py-[6px] pl-[6px] pr-[14px] font-sans text-[12px] font-normal leading-[16px] tracking-[0.1px] text-[#000000] transition-colors hover:bg-[#e8ece3] md:border md:border-white/20 md:bg-white/10 md:py-[4px] md:pl-[4px] md:pr-[16px] md:text-[14px] md:font-medium md:leading-[1.43] md:tracking-[0px] md:text-[#FFFFFF] md:backdrop-blur-sm md:hover:bg-white/20"
                >
                  {chip.swatch ? (
                    <span className="h-[28px] w-[28px] rounded-full md:h-[32px] md:w-[32px]" style={{ backgroundColor: chip.swatch }} />
                  ) : (
                    <Image
                      src={chip.img}
                      alt={chip.name}
                      width={32}
                      height={32}
                      className="h-[28px] w-[28px] rounded-full object-cover md:h-[32px] md:w-[32px]"
                    />
                  )}
                  {chip.name}
                </button>
              ))}
              
              {/* Show a placeholder if a region has no countries added yet */}
                {activeChips.length === 0 && <span className="mt-2 text-sm text-white/60">{data.hero.emptyMessage}</span>}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   FEATURED COUNTRIES SECTION
===================================================================== */

function FeaturedCountriesSection({ data }: { data: DestinationsPageData }) {
  return (
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] py-[40px] px-[16px] md:py-[80px] md:px-[80px]">
      <div className="flex w-full max-w-[1440px] flex-col md:px-[0px]">
        
        <div className="mb-[24px] md:mb-[32px] flex flex-col items-center text-center">
          {/* Section Title */}
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[0px] md:text-[48px] font-medium md:leading-none md:tracking-[0px] text-[#000000]">
            {data.copy.featuredTitle}
          </h2>
        </div>

        {/* Card Grid */}
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-[16px] md:grid-cols-3 md:gap-[24px]">
          {data.featuredCountries.map((country, idx) => (
            <div
              key={idx}
              className="group flex h-[490px] md:h-[527px] w-full flex-col overflow-hidden rounded-[20px] border border-[rgba(0,0,0,0.16)] bg-[#FFFFFF] pb-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-[180px] md:h-[200px] w-full shrink-0 overflow-hidden bg-[#F3F4F6] p-[12px] md:p-[14px]">
                <Image
                  src={country.image}
                  alt={country.name || ""}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Popular Badge */}
                <div className="absolute left-[12px] top-[12px] rounded-full bg-white/30 backdrop-blur-[4px] border border-[#FFFFFF] md:bg-[#FFFFFF] md:border-none px-[10px] py-[4px] md:px-[12px] shadow-sm">
                  <span className="font-sans text-[13px] leading-[18px] md:text-[14px] font-medium md:leading-[20px] tracking-[0px] md:tracking-[0px] text-[#000000]">
                    {data.copy.featuredBadge}
                  </span>
                </div>
                
                <div className="absolute right-[12px] top-[12px] flex h-[32px] w-[32px] md:h-[36px] md:w-[36px] items-center justify-center rounded-full bg-white/30 backdrop-blur-[3px] border border-[#FFFFFF] md:bg-[#FDDB32] md:border-none shadow-md transition-transform group-hover:scale-110">
                  <ArrowUpRight size={16} strokeWidth={2.5} className="text-[#000000]" />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col gap-[12px] p-[14px]">
                
                {/* Rating */}
                <div className="flex h-[18px] md:h-[20px] items-center gap-[6px]">
                  <div className="flex gap-[2px]">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={12} className="fill-[#000000] text-[#000000]" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="font-sans text-[13px] leading-[18px] md:text-[14px] font-medium md:leading-[20px] tracking-[0px] md:tracking-[0px] text-[#F59E0B]">
                    {country.rating}{data.copy.ratingSuffix}
                  </span>
                </div>

                {/* Country Name & Desc */}
                <div className="flex flex-col gap-[2px]">
                  <h3 className="font-sans text-[15px] leading-[22px] md:text-[16px] font-medium md:leading-[24px] tracking-[0px] md:tracking-[0px] text-[#000000]">
                    {country.name}
                  </h3>
                  <div className="flex items-center gap-[4px] md:gap-[6px]">
                    <MapPin size={12} className="text-[#7D7D7D] md:w-[14px] md:h-[14px]" />
                    <span className="font-sans text-[13px] leading-[18px] md:text-[14px] font-normal md:leading-[20px] tracking-[0px] md:tracking-[0px] text-[#7D7D7D]">
                      {country.desc}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-[6px]">
                  {country.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#FBBDEA] bg-[#FFF0F8] px-[8px] py-[3px] md:px-[10px] md:py-[2px] font-sans text-[13px] leading-[18px] md:text-[14px] font-normal md:leading-[20px] tracking-[0px] md:tracking-[0px] text-[#C050A0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="h-[1px] w-full bg-[#F3F4F6] md:bg-[#E6E6E6]" />

                {/* Details List */}
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px] font-sans text-[13px] leading-[18px] md:text-[14px] font-normal md:leading-[20px] tracking-[0px] md:tracking-[0px] text-[#7D7D7D]">
                    <Plane size={14} className="text-[#7D7D7D]" />
                      <span>{data.copy.flightsLabel} {country.flightsFrom}</span>
                  </div>
                  <div className="flex items-center gap-[8px] font-sans text-[13px] leading-[18px] md:text-[14px] font-normal md:leading-[20px] tracking-[0px] md:tracking-[0px] text-[#7D7D7D]">
                    <Building2 size={14} className="text-[#7D7D7D]" />
                      <span>{data.copy.hotelsLabel} {country.hotelsFrom}</span>
                  </div>
                  <div className="flex items-center gap-[8px] font-sans text-[13px] leading-[18px] md:text-[14px] font-normal md:leading-[20px] tracking-[0px] md:tracking-[0px] text-[#7D7D7D]">
                    <Umbrella size={14} className="text-[#7D7D7D]" />
                    <span>{country.perk}</span>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-[#F3F4F6] md:bg-[#E6E6E6]" />

                {/* Footer / Price & CTA */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-sans text-[13px] leading-[18px] md:text-[14px] font-normal md:leading-[20px] tracking-[0px] md:tracking-[0px] text-[#7D7D7D]">
                      {data.copy.featuredPriceLabel}
                    </span>
                    <div className="flex items-baseline gap-[2px]">
                      <span className="font-sans text-[20px] leading-[24px] tracking-[0px] md:text-[22px] font-medium md:leading-none md:tracking-[0px] text-[#000000]">
                        {country.price}
                      </span>
                      <span className="font-sans text-[13px] leading-[18px] md:text-[14px] font-normal md:leading-[20px] tracking-[0px] md:tracking-[0px] text-[#7D7D7D]">
                        {data.copy.featuredPriceSuffix}
                      </span>
                    </div>
                  </div>
                  <button className="flex h-[38px] md:h-[40px] items-center justify-center gap-[4px] md:gap-[6px] rounded-full bg-[#FDDB32] px-[18px] py-[10px] md:px-[16px] font-sans text-[13px] leading-[18px] md:text-[14px] font-medium md:leading-[20px] tracking-[0px] md:tracking-[0px] text-[#000000] transition-colors duration-200 hover:bg-[#e5c52c]">
                    {data.copy.featuredCta}
                  </button>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   WHY PLAN YOUR TRIP SECTION
===================================================================== */

function WhyPlanSection({ data }: { data: DestinationsPageData }) {
  return (
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] py-[48px] px-[16px] md:py-[80px] md:px-[32px]">
      <div className="flex w-full max-w-[1280px] flex-col items-center md:px-[0px]">
        
        {/* Heading Block */}
        <div className="mb-[32px] md:mb-[48px] flex w-full max-w-[1216px] flex-col items-center text-center gap-[12px] md:gap-[24px]">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[0px] md:text-[48px] font-medium md:leading-[48px] md:tracking-[0px] text-[#000000]">
            {data.copy.whyTitle}
          </h2>
          <p className="max-w-[700px] font-sans text-[15px] leading-[22px] opacity-80 md:opacity-100 font-normal md:text-[16px] md:leading-[24px] tracking-[0px] text-[#000000]">
            {data.copy.whyDescription}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid w-full max-w-[1216px] grid-cols-1 gap-[16px] md:gap-[15px] md:grid-cols-3">
          {data.whyCompare.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-[20px] border-[1.5px] border-[#E6E6E6] bg-[#F9FBF5] p-[24px] md:p-[30px] text-center gap-[16px] md:gap-[0px]"
            >
              <div className="flex h-[60px] w-[60px] md:h-[56px] md:w-[56px] md:mb-[15px] items-center justify-center rounded-full bg-[#FFED91]">
                <Image src={feature.icon} alt={feature.title} width={28} height={28} className="object-contain" />
              </div>
              <div className="flex flex-col items-center gap-[8px] md:gap-[15px]">
                <h3 className="font-sans text-[20px] leading-[26px] tracking-[0px] md:text-[24px] font-medium md:leading-[24px] md:tracking-[0px] text-[#000000]">
                  {feature.title}
                </h3>
                <p className="font-sans text-[15px] leading-[22px] opacity-80 md:opacity-100 font-normal md:text-[16px] md:leading-[24px] tracking-[0px] text-[#000000]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="mt-[16px] md:mt-[48px] w-full md:w-auto">
          <button className="flex w-full md:w-auto h-[44px] items-center justify-center gap-[8px] md:gap-[6px] rounded-[14px] md:rounded-full bg-[#FDDB32] px-[20px] md:px-[24px] font-sans text-[13px] leading-[18px] md:text-[14px] font-medium md:leading-[20px] tracking-[0px] md:tracking-[0px] text-[#000000] shadow-[0_1.5px_3px_rgba(31,31,31,0.078),0_1px_0_0.5px_#C29700,inset_0_1px_2px_rgba(255,255,255,0.12)] md:shadow-none transition-colors duration-200 hover:bg-[#e5c52c]">
            {data.copy.whyCta}
            <ArrowUpRight size={14} className="md:w-[16px] md:h-[16px]" />
          </button>
        </div>

      </div>
    </section>
  );
}

/* =====================================================================
   FAQ SECTION
===================================================================== */

function FaqSection({ data }: { data: DestinationsPageData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="flex w-full flex-col items-center bg-[#F9F8F5] md:bg-[#FFFFFF] py-[64px] px-[24px] md:pt-[80px] md:pb-[160px] md:px-[80px]">
      <div className="flex w-full max-w-[800px] flex-col items-center">
        
        <h2 className="mb-[32px] md:mb-[48px] text-center font-sans text-[20px] leading-[26px] tracking-[0px] md:text-[48px] font-medium md:leading-[48px] md:tracking-[0px] text-[#000000]">
          {data.copy.faqTitle}
        </h2>

        <div className="flex w-full flex-col gap-[24px]">
          {data.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="flex flex-col gap-[12px] md:border-b md:border-[#E6E6E6] md:pb-[24px]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="font-sans text-[15px] leading-[22px] md:text-[16px] font-medium md:leading-[24px] tracking-[0px] md:tracking-[0px] text-[#000000]">
                    {faq.q}
                  </span>
                  <span className="flex shrink-0 text-[#000000]">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="font-sans text-[15px] leading-[22px] md:text-[16px] font-normal md:leading-[24px] tracking-[0px] text-[#7D7D7D]">
                    {faq.a}
                  </p>
                )}
                <div className="block md:hidden w-full h-[1px] bg-transparent" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* =====================================================================
   PAGE
===================================================================== */

export default function Destinations({ data = destinationsData }: { data?: DestinationsPageData }) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#FFFFFF]">
      <HeroSection data={data} />
      <FeaturedCountriesSection data={data} />
      <WhyPlanSection data={data} />
      <FaqSection data={data} />
      <Footer data={footerData} />
    </main>
  );
}