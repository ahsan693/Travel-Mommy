'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ArrowUpRight,
  Star,
  Clock,
  Minus,
  Plus,
  ArrowRight,
  ChevronRight,
  MapPin,
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
          
          <div className="flex flex-col gap-[12px]">
            <h1 className="text-page-h1 font-sans text-[#FFFFFF]">
              <span className="block md:hidden">
                {data.hero.mobileTitle.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </span>
              <span className="hidden md:inline">
                {data.hero.title}
              </span>
            </h1>
            <p className="max-w-[700px] font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#FFFFFF] md:text-[16px] md:leading-[1.5] md:text-[rgba(255,255,255,0.8)]">
              <span className="md:hidden">
                {data.hero.mobileDescription}
              </span>
              <span className="hidden md:inline">
                {data.hero.description}
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-[12px] md:gap-[19px]">
            <p className="font-sans text-[13px] font-normal leading-[18px] tracking-[0px] text-[#F9FBF5] md:font-medium md:text-[14px] md:leading-[1.43] md:text-[#FFFFFF]">
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
                  <Image
                    src={chip.img}
                    alt={chip.name}
                    width={32}
                    height={32}
                    className="h-[28px] w-[28px] rounded-full object-cover md:h-[32px] md:w-[32px]"
                  />
                  {chip.name}
                </button>
              ))}
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

export function FeaturedCountriesSection({ data }: { data: DestinationsPageData }) {
  return (
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] px-[16px] py-[48px] md:px-[80px] md:py-[96px]">
      <div className="flex w-full max-w-[1440px] flex-col md:px-[0px]">
        
        <div className="mb-[28px] flex flex-col items-center text-center md:mb-[40px]">
          <h2 className="font-sans text-[32px] font-medium leading-[38px] tracking-[0px] text-[#000000] md:text-[48px] md:leading-[48px]">
            {data.copy.featuredTitle || "Featured Countries"}
          </h2>
        </div>

        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[24px]">
          {data.featuredCountries.map((country) => (
            <div
              key={country.name}
              className="group flex min-h-[440px] w-full flex-col overflow-hidden rounded-[16px] border border-[rgba(0,0,0,0.16)] bg-[#FFFFFF] p-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 md:rounded-[20px] md:p-[14px]"
            >
              <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-[10px] bg-[#F3F4F6] md:h-[220px] md:rounded-[12px]">
                <Image
                  src={country.image}
                  alt="Destination"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute left-[10px] top-[10px] rounded-full border border-[#FFFFFF] bg-white px-[12px] py-[4px] shadow-sm md:left-[12px] md:top-[12px]">
                  <span className="font-sans text-[13px] font-medium leading-[18px] tracking-[0px] text-[#000000] md:text-[14px] md:leading-[20px]">
                    Popular
                  </span>
                </div>
                
                <div className="absolute right-[10px] top-[10px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#FDDB32] shadow-md transition-transform group-hover:scale-110 md:right-[12px] md:top-[12px] md:h-[36px] md:w-[36px]">
                  <ArrowUpRight size={18} strokeWidth={2} className="text-[#000000]" />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-[14px] px-[4px] pb-[4px] pt-[16px] md:gap-[16px] md:px-[2px] md:pt-[18px]">
                
                <div className="flex items-center gap-[8px]">
                  <div className="flex gap-[2px]">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} className="fill-[#000000] text-[#000000]" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="font-sans text-[13px] font-medium text-[#F59E0B] md:text-[14px]">
                    {country.rating}/5
                  </span>
                </div>

                <div className="flex flex-wrap gap-[8px]">
                  {country.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#FBBDEA] bg-[#FFF0F8] px-[12px] py-[2px] font-sans text-[12px] font-normal leading-[20px] tracking-[0px] text-[#C050A0] md:text-[13px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="h-[1px] w-full bg-[#F3F4F6] md:bg-[#E6E6E6]" />

                <div className="flex items-center gap-[8px] font-sans text-[13px] font-normal text-[#7D7D7D] md:text-[14px]">
                  <Clock size={16} strokeWidth={1.5} className="text-[#7D7D7D]" />
                  <span>{country.perk}</span>
                </div>

                <div className="h-[1px] w-full bg-[#F3F4F6] md:bg-[#E6E6E6]" />

                <div className="mt-auto flex items-end justify-between pt-[4px]">
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-sans text-[13px] font-normal leading-[16px] text-[#7D7D7D] md:text-[14px]">
                      Explore
                    </span>
                    <div className="flex items-baseline gap-[4px]">
                      <span className="font-sans text-[22px] font-medium leading-[26px] text-[#000000] md:text-[24px] md:leading-[28px]">
                        {country.price}
                      </span>
                      <span className="font-sans text-[13px] font-normal text-[#7D7D7D] md:text-[14px]">
                        / flight
                      </span>
                    </div>
                  </div>
                  <button className="flex h-[40px] items-center justify-center rounded-full bg-[#FDDB32] px-[20px] font-sans text-[14px] font-medium text-[#000000] transition-colors duration-200 hover:bg-[#e5c52c]">
                    Explore &rarr;
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
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] px-[20px] pb-[80px] pt-[20px] md:pb-[160px] md:pt-[0px]">
      
      {/* Header */}
      <div className="mb-[40px] flex w-full max-w-[860px] flex-col items-center text-center">
        <h2 className="font-sans text-[40px] font-medium leading-[1] tracking-[-0.03em] text-[#000000] md:text-[72px]">
          {data.exploreByRegion.title}
        </h2>
        <p className="mt-[16px] max-w-[680px] font-sans text-[16px] font-normal leading-[24px] text-[#555555]">
          {data.exploreByRegion.subtitle}
        </p>
      </div>

      {/* Grid of Regions */}
      <div className="grid w-full max-w-[1280px] grid-cols-1 gap-[32px] md:grid-cols-2 lg:grid-cols-3">
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
              <div className="flex flex-col">
                <h3 className="font-sans text-[24px] font-medium leading-[1.2] text-[#000000]">
                  {region.name}
                </h3>
                <p className="mt-[4px] font-sans text-[12px] font-normal leading-[16px] text-[#7D7D7D] md:text-[14px] md:leading-[20px]">
                  {region.description}
                </p>
              </div>
            </div>

            {/* List of Countries */}
            <ul className="flex flex-1 flex-col justify-between">
              {region.countries.map((country, idx) => (
                <li key={idx} className="flex items-center justify-between border-b border-[#F3F4F6] py-[10px] last:border-0">
                  <span className="font-sans text-[14px] font-medium text-[#000000]">
                    {country}
                  </span>
                  <ArrowRight size={14} className="text-[#000000]" />
                </li>
              ))}
            </ul>

            {/* View All Link */}
            <div className="mt-[16px] pt-[8px]">
              <Link href="#" className="group flex w-fit items-center gap-[8px]">
                <span className="font-sans text-[14px] font-medium text-[#000000] underline decoration-[#000000]/30 decoration-1 underline-offset-2 transition-colors group-hover:decoration-[#000000]">
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
        <div className="flex h-[420px] flex-col rounded-[20px] border border-[#E6E6E6] bg-[#FFFFFF] p-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#FDDB32]">
            <MapPin size={24} className="text-[#000000]" />
          </div>
          
          <div className="mt-[32px] flex flex-col">
            <span className="font-sans text-[12px] font-medium uppercase tracking-[0.5px] text-[#7D7D7D]">
              {data.exploreByRegion.ctaCard.eyebrow}
            </span>
            <h3 className="mt-[8px] font-sans text-[40px] font-medium leading-[1.1] tracking-[-1px] text-[#000000]">
              {data.exploreByRegion.ctaCard.title.split("\n").map((line, idx) => (
                <span key={idx} className="block">{line}</span>
              ))}
            </h3>
            <p className="mt-[16px] font-sans text-[14px] font-normal leading-[22px] text-[#7D7D7D]">
              {data.exploreByRegion.ctaCard.description}
            </p>
          </div>

          <div className="mt-auto pt-[16px]">
            <Link 
              href="#" 
              className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[12px] bg-[#FDDB32] font-sans text-[14px] font-medium text-[#000000] transition-colors hover:bg-[#e5c52c]"
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
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] py-[48px] px-[16px] md:py-[80px] md:px-[32px]">
      <div className="flex w-full max-w-[1280px] flex-col items-center md:px-[0px]">
        
        <div className="mb-[32px] md:mb-[48px] flex w-full max-w-[1216px] flex-col items-center text-center gap-[12px] md:gap-[24px]">
          <h2 className="font-sans text-[32px] leading-[38px] tracking-[0px] md:text-[48px] font-medium md:leading-[48px] md:tracking-[0px] text-[#000000]">
            {data.copy.whyTitle}
          </h2>
          <p className="max-w-[700px] font-sans text-[15px] leading-[22px] opacity-80 md:opacity-100 font-normal md:text-[16px] md:leading-[24px] tracking-[0px] text-[#000000]">
            {data.copy.whyDescription}
          </p>
        </div>

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
      <ExploreByRegionSection data={data} />
      <WhyPlanSection data={data} />
      <FaqSection data={data} />
      <Footer data={footerData} />
    </main>
  );
}