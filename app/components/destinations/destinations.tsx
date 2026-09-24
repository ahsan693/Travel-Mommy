'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ArrowUpRight,
  Star,
  ArrowRight,
  ChevronRight,
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
  const activeChips = data.countryChips.filter((chip) => chip.region === activeRegion);

  return (
    <section className="relative flex h-auto min-h-[664px] w-full flex-col items-center overflow-hidden bg-[#000000] md:h-[700px]">
      <div className="absolute inset-0 z-0">
        <Image
          src={data.hero.image}
          alt={data.hero.imageAlt}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/55 md:bg-transparent md:bg-gradient-to-t md:from-black/80 md:via-black/20 md:to-black/60" />
      </div>

      <div className="relative z-10 flex h-full w-full max-w-[1440px] flex-col px-[16px] pb-[32px] pt-[12px] md:px-[112px] md:pb-[80px] md:pt-[24px]">
        <Header data={headerData} />

        <div className="mt-[120px] flex w-full max-w-[1198px] flex-col gap-[10px] md:mt-auto md:gap-[26px]">
          
          <div className="flex flex-col items-start gap-[20px] text-left md:gap-[12px]">
            <h1 className="font-sans text-[2.625rem] font-medium leading-[2.75rem] tracking-[-1.5px] text-[#FFFFFF] sm:text-[2.625rem] sm:leading-[2.75rem] sm:tracking-[-1.5px] md:text-[4.5rem] md:font-medium md:leading-[1.05] md:tracking-normal">
              <span className="flex flex-col gap-0 md:hidden">
                {data.hero.mobileTitle.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </span>
              {/* Desktop three-line rendering */}
              <span className="hidden flex-col gap-[2px] md:flex">
                {data.hero.mobileTitle.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </span>
            </h1>
            <p className="max-w-[700px] font-sans text-[14px] font-[400] leading-[20px] tracking-[0px] text-[#FFFFFF] md:text-[16px] md:font-normal md:leading-[1.5] md:text-[rgba(255,255,255,0.8)]">
              <span className="md:hidden">
                {data.hero.mobileDescription}
              </span>
              <span className="hidden md:inline">
                {data.hero.description}
              </span>
            </p>
          </div>

          <div className="flex flex-col items-start gap-[12px] text-left md:gap-[19px]">
            <p className="font-sans text-[13px] font-normal leading-[18px] tracking-[0px] text-[#F9FBF5] md:text-[#FFFFFF]">
              {data.hero.prompt}
            </p>

            <div className="flex flex-wrap gap-[8px]">
              {data.regions.map((region) => (
                <button
                  key={region}
                  type="button"
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

            <p className="font-sans text-[13px] font-normal leading-[18px] tracking-[0px] text-[#F9FBF5] md:hidden">
              {data.hero.popularLabel}
            </p>

            <div className="flex flex-wrap gap-[8px] md:mt-[4px]">
              {activeChips.map((chip) => (
                <button
                  key={chip.name}
                  type="button"
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
                {activeChips.length === 0 && <span className="mt-2 text-[14px] leading-[1.43] text-white/60">{data.hero.emptyMessage}</span>}
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

export function FeaturedCountriesSection({ data }: { data: DestinationsPageData }) {
  return (
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] px-[16px] py-[40px] md:px-[80px] md:py-[96px]">
      <div className="flex w-full max-w-[1440px] flex-col md:px-[0px]">
        
        <div className="mb-[24px] flex flex-col items-center text-center md:mb-[40px] md:items-center md:text-center">
          <h2 className="font-sans text-[32px] font-medium leading-[38px] tracking-[0px] text-[#000000] md:text-[48px]">
            {data.copy.featuredTitle || "Featured Countries"}
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-[16px] md:grid-cols-3 md:gap-[24px]">
          {data.featuredCountries.map((country) => (
            <div
              key={country.name}
              className="group flex h-[490px] w-full flex-col overflow-hidden rounded-[20px] border border-[rgba(0,0,0,0.16)] bg-[#FFFFFF] pb-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 md:h-[527px] md:p-[14px]"
            >
              <div className="relative h-[180px] w-full shrink-0 overflow-hidden bg-[#F3F4F6] p-[12px] md:h-[220px] md:rounded-[12px] md:p-0">
                <Image
                  src={country.image}
                  alt="Destination"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute left-[12px] top-[12px] rounded-full border border-[#FFFFFF] bg-white/30 px-[10px] py-[4px] backdrop-blur-[4px] shadow-sm md:border-none md:bg-[#FFFFFF] md:px-[12px]">
                  <span className="font-sans text-[13px] font-medium leading-[18px] tracking-[0px] text-[#000000] md:text-[14px] md:leading-[20px]">
                    Popular
                  </span>
                </div>
                
                <div className="absolute right-[12px] top-[12px] flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#FFFFFF] bg-white/30 backdrop-blur-[3px] shadow-md transition-transform group-hover:scale-110 md:h-[36px] md:w-[36px] md:border-none md:bg-[#FDDB32]">
                  <ArrowUpRight size={16} strokeWidth={2.5} className="text-[#000000]" />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-[12px] p-[14px] md:gap-[16px] md:px-[2px] md:pt-[18px]">
                
                <div className="flex items-center gap-[8px]">
                  <div className="flex gap-[2px]">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} className="fill-[#000000] text-[#000000]" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="font-sans text-[14px] font-medium leading-[1.43] text-[#F59E0B]">
                    {country.rating}/5
                  </span>
                </div>

                <div className="flex flex-col gap-[2px]">
                  <h3 className="font-sans text-[15px] font-medium leading-[22px] tracking-[0px] text-[#000000] md:text-[16px] md:leading-[24px]">
                    {country.name}
                  </h3>
                  <div className="flex items-center gap-[4px] md:gap-[6px]">
                    <MapPin size={12} className="text-[#7D7D7D] md:h-[14px] md:w-[14px]" />
                    <span className="font-sans text-[13px] font-normal leading-[18px] tracking-[0px] text-[#7D7D7D] md:text-[14px] md:leading-[20px]">
                      {country.desc}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-[8px]">
                  {country.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#FBBDEA] bg-[#FFF0F8] px-[12px] py-[2px] font-sans text-[12px] font-medium leading-[1.33] tracking-[0px] text-[#C050A0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="h-[1px] w-full bg-[#F3F4F6] md:bg-[#E6E6E6]" />

                <div className="flex flex-col gap-[8px] font-sans text-[13px] font-normal leading-[18px] text-[#7D7D7D] md:text-[14px] md:leading-[20px]">
                  <div className="flex items-center gap-[8px]">
                    <Plane size={14} className="text-[#7D7D7D]" />
                    <span>{data.copy.flightsLabel} {country.flightsFrom}</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Building2 size={14} className="text-[#7D7D7D]" />
                    <span>{data.copy.hotelsLabel} {country.hotelsFrom}</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <Umbrella size={14} className="text-[#7D7D7D]" />
                    <span>{country.perk}</span>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-[#F3F4F6] md:bg-[#E6E6E6]" />

                <div className="mt-auto flex items-end justify-between pt-[4px]">
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-sans text-[13px] font-normal leading-[18px] text-[#7D7D7D] md:text-[14px] md:leading-[20px]">
                      {data.copy.featuredPriceLabel}
                    </span>
                    <div className="flex items-baseline gap-[4px]">
                      <span className="font-sans text-[20px] font-medium leading-[24px] text-[#000000] md:text-[22px] md:leading-[1]">
                        {country.price}
                      </span>
                      <span className="font-sans text-[13px] font-normal leading-[18px] text-[#7D7D7D] md:text-[14px] md:leading-[20px]">
                        {data.copy.featuredPriceSuffix}
                      </span>
                    </div>
                  </div>
                  <button className="flex h-[38px] items-center justify-center gap-[4px] rounded-full bg-[#FDDB32] px-[18px] font-sans text-[13px] font-medium leading-[18px] text-[#000000] transition-colors duration-200 hover:bg-[#e5c52c] md:h-[40px] md:gap-[6px] md:px-[16px] md:text-[14px] md:leading-[20px]">
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
   EXPLORE COUNTRIES BY REGION SECTION
===================================================================== */

function ExploreByRegionSection({ data }: { data: DestinationsPageData }) {
  return (
    <section className="flex w-full flex-col items-center bg-[#F9F8F5] px-[20px] py-[64px] md:bg-[#FFFFFF] md:pb-[160px] md:pt-[0px]">
      
      {/* Header */}
      <div className="mb-[32px] flex w-full max-w-[860px] flex-col items-center text-center md:mb-[40px] md:items-center md:text-center">
        <h2 className="font-sans text-[2.625rem] font-medium leading-[2.75rem] tracking-[-1.5px] text-[#000000] md:text-[48px] md:tracking-[-0.03em]">
          {data.exploreByRegion.title}
        </h2>
        <p className="mt-[12px] max-w-[680px] font-sans text-[20px] font-normal leading-[26px] text-[#555555] md:mt-[16px] md:text-[16px] md:leading-[1.5]">
          {data.exploreByRegion.subtitle}
        </p>
      </div>

      {/* Grid of Regions */}
      <div className="grid w-full max-w-[1280px] grid-cols-1 gap-[24px] md:grid-cols-2 md:gap-[32px] lg:grid-cols-3">
        {data.exploreByRegion.regions.map((region) => (
          <div 
            key={region.name} 
            className="flex h-[420px] flex-col rounded-[20px] border border-[#E6E6E6] bg-[#FFFFFF] p-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Card Header (Image + Title + Desc) */}
            <div className="mb-[20px] flex items-center gap-[16px]">
              <Image 
                src={region.image} 
                alt={region.name} 
                width={64} 
                height={64} 
                className="h-[64px] w-[64px] shrink-0 rounded-full object-cover" 
              />
              <div className="flex flex-col items-start text-left">
                <h3 className="font-sans text-[20px] font-medium leading-[1.2] text-[#000000] md:text-[24px]">
                  {region.name}
                </h3>
                <p className="mt-[4px] font-sans text-[14px] font-normal leading-[1.43] text-[#7D7D7D]">
                  {region.description}
                </p>
              </div>
            </div>

            {/* List of Countries */}
            <ul className="flex flex-1 flex-col justify-between">
              {region.countries.map((country, idx) => (
                <li key={idx} className="flex items-center justify-between border-b border-[#F3F4F6] py-[10px] last:border-0">
                  <span className="font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">
                    {country}
                  </span>
                  <ArrowRight size={14} className="text-[#000000]" />
                </li>
              ))}
            </ul>

            {/* View All Link */}
            <div className="mt-[16px] pt-[8px]">
              <Link href="#" className="group flex w-fit items-center gap-[8px]">
                <span className="font-sans text-[14px] font-medium leading-[1.43] text-[#000000] underline decoration-[#000000]/30 decoration-1 underline-offset-2 transition-colors group-hover:decoration-[#000000]">
                  {region.viewAllText}
                </span>
                <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#FDDB32] transition-transform group-hover:scale-110">
                  <ChevronRight size={12} strokeWidth={3} className="text-[#000000]" />
                </span>
              </Link>
            </div>
          </div>
        ))}

        {/* CTA Card (The 9th item in the grid) */}
        <div className="flex h-[420px] flex-col items-start rounded-[20px] border border-[#E6E6E6] bg-[#FFFFFF] p-[24px] text-left shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#FDDB32]">
            <MapPin size={24} className="text-[#000000]" />
          </div>
          
          <div className="mt-[32px] flex flex-col">
            <span className="font-sans text-[12px] font-medium leading-[1.33] uppercase tracking-[0.5px] text-[#7D7D7D]">
              {data.exploreByRegion.ctaCard.eyebrow}
            </span>
            <h3 className="mt-[8px] font-sans text-[24px] font-medium leading-[1] tracking-[-1px] text-[#000000] md:text-[48px]">
              {data.exploreByRegion.ctaCard.title.split("\n").map((line, idx) => (
                <span key={idx} className="block">{line}</span>
              ))}
            </h3>
            <p className="mt-[16px] font-sans text-[20px] font-normal leading-[26px] text-[#7D7D7D] md:text-[14px] md:leading-[1.43]">
              {data.exploreByRegion.ctaCard.description}
            </p>
          </div>

          <div className="mt-auto pt-[16px] w-full">
            <Link 
              href="#" 
              className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[12px] bg-[#FDDB32] font-sans text-[14px] font-medium leading-[1.43] text-[#000000] transition-colors hover:bg-[#e5c52c]"
            >
              {data.exploreByRegion.ctaCard.buttonText}
              <ChevronRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
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
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] px-[16px] py-[48px] md:px-[32px] md:py-[80px]">
      <div className="flex w-full max-w-[1280px] flex-col items-center md:px-[0px]">
        
        <div className="mb-[32px] flex w-full max-w-[1216px] flex-col items-center gap-[12px] text-center md:mb-[48px] md:gap-[24px]">
          <h2 className="w-full max-w-[358px] font-sans text-[30px] font-medium leading-[36px] tracking-[-0.5px] text-[#000000] md:text-[48px] md:leading-[1]">
            <span className="block md:hidden">
              <span className="block">Why Plan Your Trip with</span>
              <span className="block">TravelMommy?</span>
            </span>
            <span className="hidden md:inline">
              {data.copy.whyTitle}
            </span>
          </h2>
                <p className="max-w-[700px] font-sans text-[20px] font-normal leading-[26px] tracking-[0px] text-[#000000] md:text-[16px] md:leading-[1.5]">
            {data.copy.whyDescription}
          </p>
        </div>

        <div className="grid w-full max-w-[1216px] grid-cols-1 gap-[16px] md:gap-[15px] md:grid-cols-3">
          {data.whyCompare.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-[16px] rounded-[20px] border-[1.5px] border-[#E6E6E6] bg-[#F9FBF5] p-[24px] text-center md:gap-0 md:p-[30px]"
            >
              <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#FFED91] md:mb-[15px] md:h-[56px] md:w-[56px]">
                <Image src={feature.icon} alt={feature.title} width={24} height={24} className="object-contain md:w-[28px] md:h-[28px]" />
              </div>
              <div className="flex flex-col items-center gap-[8px] md:gap-[15px]">
                <h3 className="font-sans text-[20px] font-medium leading-[26px] tracking-[0px] text-[#000000] md:text-[24px] md:leading-[1]">
                  {feature.title}
                </h3>
                <p className="font-sans text-[15px] font-normal leading-[22px] tracking-[0px] text-[#000000] md:text-[16px] md:leading-[1.5]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[16px] w-full md:mt-[48px] md:w-auto">
          <button className="flex h-[44px] w-full items-center justify-center gap-[8px] rounded-[14px] bg-[#FDDB32] px-[20px] font-sans text-[13px] font-medium leading-[18px] tracking-[0px] text-[#000000] transition-colors duration-200 hover:bg-[#e5c52c] md:w-auto md:gap-[6px] md:rounded-full md:px-[24px] md:text-[14px] md:leading-[20px]">
            {data.copy.whyCta}
            <ArrowUpRight size={16} className="md:w-[16px] md:h-[16px]" />
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
    <section className="flex w-full flex-col items-center bg-[#F9F8F5] px-[24px] py-[64px] md:bg-[#FFFFFF] md:px-[80px] md:pb-[160px] md:pt-[80px]">
      <div className="flex w-full max-w-[800px] flex-col items-center">
        
        <h2 className="mb-[32px] w-full max-w-[342px] text-center font-sans text-[20px] font-medium leading-[26px] tracking-[-0.2px] text-[#000000] md:mb-[48px] md:text-[48px] md:leading-[48px]">
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
                <span className="font-sans text-[20px] font-medium leading-[26px] tracking-[0px] text-[#000000] md:text-[16px] md:leading-[24px]">
                  {faq.q}
                </span>
                <span className="flex shrink-0 text-[#000000]">
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              {isOpen && (
                <p className="font-sans text-[20px] font-normal leading-[26px] tracking-[0px] text-[#7D7D7D] md:text-[16px] md:leading-[24px]">
                  {faq.a}
                </p>
              )}
              <div className="block h-[1px] w-full bg-transparent md:hidden" />
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
      <ExploreByRegionSection data={data} />
      <WhyPlanSection data={data} />
      <FaqSection data={data} />
      <Footer data={footerData} />
    </main>
  );
} 