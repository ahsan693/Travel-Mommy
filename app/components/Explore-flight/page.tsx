'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GR, HR, ES, FR, IE, IT, PT, TR } from "country-flag-icons/react/3x2";
import {
  MapPin,
  Globe,
  Map as MapIcon,
  Plane,
  Search,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Award,
  CircleHelp,
  Star,
  Tag,
  Clock,
  Sun,
  TrendingUp,
  ShieldCheck,
  Heart,
  type LucideIcon
} from "lucide-react";

import Header from "../header/header";
import Footer from "../footer/footer";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";
import exploreFlightsData, { type ExploreIconName } from "../../../lib/data/explore-flightsdata";

const countryFlags: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  GR,
  HR,
  ES,
  FR,
  IE,
  IT,
  PT,
  TR,
};

/* =====================================================================
   ICON RENDERER
===================================================================== */
const exploreIcons: Record<ExploreIconName, LucideIcon> = {
  MapPin,
  Globe,
  MapIcon,
  Plane,
  Search,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  CircleHelp,
  Star,
  Tag,
  Clock,
  Sun,
  TrendingUp,
  ShieldCheck,
  Heart
};

function ExploreIcon({ name, ...props }: { name: ExploreIconName } & React.ComponentProps<LucideIcon>) {
  const Icon = exploreIcons[name];
  return <Icon {...props} />;
}

/* =====================================================================
   COMPONENTS
===================================================================== */

function SearchInput({ label, placeholder, icon, hasDropdown }: { label: string; placeholder: string; icon: ExploreIconName; hasDropdown?: boolean }) {
  return (
    <div className="flex w-full flex-col gap-[8px] md:w-[214px] md:h-[64px]">
      <label className="font-sans text-[12px] font-semibold leading-[1.33] text-[#111111]">
        {label}
      </label>
      <div className="flex h-[40px] w-full items-center gap-[8px] border-b border-transparent pb-[4px] transition-colors focus-within:border-[#FDDB32]">
        <ExploreIcon name={icon} size={18} strokeWidth={2} className="text-[#7D7D7D] shrink-0" />
        <input 
          type="text"
          placeholder={placeholder}
          className="w-full flex-1 bg-transparent font-sans text-[14px] font-medium text-[#000000] placeholder:text-[#7D7D7D] outline-none"
        />
        {hasDropdown && <ExploreIcon name="ChevronDown" size={16} strokeWidth={2} className="text-[#7D7D7D] shrink-0" />}
      </div>
    </div>
  );
}

function ExploreFlightHero({ data }: { data: typeof exploreFlightsData.hero }) {
  const searchFields = data.searchFields ?? [
    { label: "Origin", placeholder: "Where are you flying from?", icon: "MapPin" as const },
    { label: "Region", placeholder: "Europe", icon: "Globe" as const, hasDropdown: true },
    { label: "Country", placeholder: "Select a country", icon: "MapIcon" as const, hasDropdown: true },
    { label: "Airline", placeholder: "All Airlines", icon: "Plane" as const, hasDropdown: true },
  ];

  return (
    <section className="relative flex w-full flex-col overflow-hidden bg-[#000000] md:h-[600px]">
      <div className="absolute left-0 right-0 top-0 z-20">
        <Header data={headerData} />
      </div>
      <div className="absolute inset-0 z-0">
        <Image src={data.image} alt="Hero Image" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
      </div>
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col items-center justify-center gap-[32px] px-[20px] pb-[80px] pt-[120px] md:gap-[48px] md:px-[80px] md:pb-[120px] md:pt-[180px]">
        <div className="flex w-full max-w-[1280px] flex-col items-center justify-center gap-[16px] text-center">
          <h1 className="font-sans text-[40px] font-medium leading-[1] tracking-[-0.03em] text-[#FFFFFF] md:text-[72px]">{data.title}</h1>
          <p className="max-w-[680px] font-sans text-[16px] font-normal leading-[1.5] text-[#FFFFFF]/90 md:text-[18px]">{data.subtitle}</p>
        </div>
        <div className="flex w-full max-w-[1120px] flex-col items-center gap-[16px] rounded-[16px] bg-[#FFFFFF] p-[20px] shadow-[0_12px_24px_rgba(0,0,0,0.0824)] md:h-[104px] md:flex-row md:justify-between">
          
          {searchFields.map((field, index) => (
            <React.Fragment key={field.label}>
              <SearchInput 
                label={field.label} 
                placeholder={field.placeholder} 
                icon={field.icon} 
                hasDropdown={field.hasDropdown} 
              />
              {index < searchFields.length - 1 && (
                <div className="hidden h-[40px] w-[1px] bg-[#E6E6E6] md:block mt-[24px]" />
              )}
            </React.Fragment>
          ))}

          <div className="mt-[8px] flex w-full flex-col justify-end md:mt-0 md:h-[64px] md:w-[160px] shrink-0">
            <button className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[12px] bg-[#FDDB32] px-[16px] font-sans text-[14px] font-semibold text-[#000000] transition-colors hover:bg-[#e5c52c] md:h-[44px]">
              {data.searchButton.text} 
              <ExploreIcon name={data.searchButton.icon} size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrowseByRegion({ data }: { data: typeof exploreFlightsData.browseRegion }) {
  return (
    <section className="flex w-full flex-col items-center bg-[#FBFBFA] px-[20px] py-[64px] md:px-[80px] md:py-[96px]">
      <div className="flex w-full max-w-[1280px] flex-col gap-[32px] md:gap-[48px]">
        <div className="flex flex-col items-center gap-[12px] text-center">
          <h2 className="font-sans text-[28px] font-bold tracking-[-0.02em] text-[#1A1A19] md:text-[36px]">{data.title}</h2>
          <p className="font-sans text-[14px] font-normal text-[#6E6E6A] md:text-[16px]">{data.subtitle}</p>
        </div>
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {data.regions.map((region) => (
            <div key={region.name} className="group flex flex-col gap-[12px]">
              <div className="relative h-[160px] w-full shrink-0 overflow-hidden rounded-[16px] bg-neutral-100">
                <Image src={region.image} alt={region.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col gap-[6px] px-[4px]">
                <h3 className="font-sans text-[16px] font-bold leading-[1] text-[#1A1A19]">{region.name}</h3>
                <p className="font-sans text-[13px] font-normal leading-[1.4] text-[#6E6E6A]">{region.description}</p>
                <Link href="#" className="mt-[4px] flex items-center gap-[6px] font-sans text-[14px] font-bold text-[#1A1A19] hover:underline">
                  {data.viewFlightsText} 
                  <ExploreIcon name={data.viewFlightsIcon} size={16} strokeWidth={2.5} className="text-[#FDDB32]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExploreCountries({ data }: { data: typeof exploreFlightsData.exploreCountries }) {
  const [activeCountry, setActiveCountry] = useState(data.countries[0]?.name || "");

  return (
    <section className="flex w-full flex-col items-center border-t border-[#E6E6E6] bg-[#FFFFFF] px-[20px] py-[48px] md:px-[80px] md:py-[64px]">
      <div className="flex w-full max-w-[1280px] flex-col gap-[32px]">
        <div className="flex flex-col items-start justify-between gap-[16px] md:flex-row md:items-center">
          <div className="flex items-center gap-[16px]">
            <button className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-[#E6E6E6] bg-[#FFFFFF] transition-colors hover:bg-gray-50">
              <ExploreIcon name={data.backIcon} size={20} className="text-[#1A1A19]" />
            </button>
            <div className="flex flex-col gap-[4px]">
              <h2 className="font-sans text-[20px] font-bold text-[#1A1A19] md:text-[24px]">{data.title}</h2>
              <p className="font-sans text-[13px] font-normal text-[#6E6E6A] md:text-[14px]">{data.subtitle}</p>
            </div>
          </div>
          <button className="flex h-[40px] shrink-0 items-center justify-center gap-[6px] rounded-full bg-[#FDDB32] px-[20px] font-sans text-[14px] font-semibold text-[#000000] transition-colors hover:bg-[#e5c52c]">
            {data.buttonText}
            <ExploreIcon name={data.buttonIcon} size={16} strokeWidth={2.5} className="text-[#000000]" />
          </button>
        </div>
        <div className="flex w-full flex-nowrap items-center gap-[12px] overflow-x-auto pb-[8px] hide-scrollbar">
          {data.countries.map((country) => {
            const isActive = activeCountry === country.name;
            const Flag = countryFlags[country.flag];
            return (
              <button
                key={country.name}
                onClick={() => setActiveCountry(country.name)}
                className={`flex h-[56px] shrink-0 items-center gap-[11px] rounded-full border-[1.5px] px-[22px] py-[14px] transition-colors ${
                  isActive ? 'border-[#FDDB32] bg-[#FFFBEB]' : 'border-[#E6E6E6] bg-[#FFFFFF] hover:bg-gray-50'
                }`}
              >
                <div
                  className="flex h-[24px] w-[24px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E6E6E6] bg-[#F5F5F5]"
                >
                  <Flag className="h-full w-full object-cover" aria-label={`${country.name} flag`} role="img" />
                </div>
                <span className="font-sans text-[16px] font-semibold text-[#1A1A19]">{country.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FlightDealsWorkspace({ data }: { data: typeof exploreFlightsData.flightDealsWorkspace }) {
  return (
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] px-[20px] pb-[64px] pt-[24px] md:px-[80px] md:pb-[96px] md:pt-[32px]">
      <div className="flex w-full max-w-[1440px] flex-col gap-[24px]">
        <div className="flex w-full flex-col items-start justify-between gap-[16px] border-b border-[#E6E6E6] pb-[16px] md:flex-row md:items-center md:border-none md:pb-0">
          <div className="flex flex-col gap-[4px]">
            <h2 className="font-sans text-[20px] font-bold text-[#1A1A19] md:text-[24px]">
              {data.header.title}
            </h2>
            <p className="font-sans text-[13px] font-normal text-[#6E6E6A] md:text-[14px]">
              {data.header.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="font-sans text-[13px] font-normal text-[#7D7D7D]">{data.header.sortLabel}</span>
            <button className="flex h-[36px] items-center justify-between gap-[12px] rounded-[8px] border border-[#E6E6E6] bg-[#FFFFFF] px-[12px] font-sans text-[14px] font-medium text-[#1A1A19] transition-colors hover:bg-gray-50">
              {data.header.sortDefault}
              <ExploreIcon name={data.header.sortIcon} size={14} className="text-[#7D7D7D]" />
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[32px] lg:flex-row lg:justify-between">
          <div className="flex flex-col flex-1 lg:max-w-[928px]">
            <div className="grid w-full grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              {data.deals.map((deal, idx) => (
                <div key={idx} className="flex flex-col justify-between gap-[16px] rounded-[16px] border border-[#E6E6E6] bg-[#FFFFFF] p-[18px] transition-shadow hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-sans text-[18px] font-bold text-[#1A1A19]">{deal.origin}</span>
                      <span className="font-sans text-[13px] font-normal text-[#7D7D7D]">{deal.originCity}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center px-[8px]">
                      <div className="flex w-[64px] items-center justify-center gap-[10px] pt-[4px]">
                        <div className="h-[2px] w-[24px] bg-[#E6E6E6]" />
                        <Plane size={26} strokeWidth={2.8} className="text-[#5F5F5F]" aria-hidden="true" />
                        <div className="h-[2px] w-[24px] bg-[#E6E6E6]" />
                      </div>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="font-sans text-[18px] font-bold text-[#1A1A19]">{deal.dest}</span>
                      <span className="font-sans text-[13px] font-normal text-[#7D7D7D]">{deal.destCity}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px]">
                      <Award size={26} strokeWidth={2.2} className="text-[#6E6E6A]" aria-hidden="true" />
                       <span className="font-sans text-[13px] font-medium text-[#1A1A19]">{deal.airline}</span>
                    </div>
                    <div className="flex flex-col text-right">
                       <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2px] text-[#7D7D7D]">{data.cardLabels.duration}</span>
                       <span className="font-sans text-[13px] font-bold text-[#1A1A19]">{deal.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-end justify-between pt-[4px]">
                     <div className="flex flex-col">
                        <span className="font-sans text-[12px] font-normal text-[#7D7D7D]">{data.cardLabels.from}</span>
                        <span className="font-sans text-[22px] font-bold leading-[1] text-[#1A1A19]">{deal.price}</span>
                     </div>
                     <button className="flex h-[36px] items-center justify-center rounded-[8px] bg-[#FDDB32] px-[16px] font-sans text-[13px] font-bold text-[#000000] hover:bg-[#e5c52c]">
                       {data.cardLabels.bookButton}
                     </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-[24px] flex w-full justify-start gap-[8px]">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`flex h-[40px] w-[40px] items-center justify-center rounded-[8px] font-sans text-[14px] font-semibold transition-colors ${
                    page === 1 ? 'bg-[#FDDB32] text-[#000000]' : 'border border-[#E6E6E6] bg-[#FFFFFF] text-[#1A1A19] hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] border border-[#E6E6E6] bg-[#FFFFFF] text-[#1A1A19] transition-colors hover:bg-gray-50">
                <ExploreIcon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col gap-[24px] lg:w-[320px] shrink-0">
            <div className="flex flex-col gap-[16px] rounded-[16px] border border-[#E6E6E3] bg-[#FFFFFF] p-[16px] shadow-sm">
              <div className="relative h-[160px] w-full shrink-0 overflow-hidden rounded-[8px]">
                <Image src={data.sidebarDiscover.image} alt={data.sidebarDiscover.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <h3 className="font-sans text-[18px] font-bold text-[#1A1A19]">{data.sidebarDiscover.title}</h3>
                <p className="font-sans text-[13px] font-normal leading-[1.4] text-[#6E6E6A]">
                  {data.sidebarDiscover.description}
                </p>
              </div>
              <div className="flex flex-col gap-[8px]">
                {data.sidebarDiscover.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-[8px]">
                    <ExploreIcon name={bullet.icon} size={14} className="mt-[2px] shrink-0 text-[#F59E0B]" />
                    <span className="font-sans text-[13px] font-medium text-[#1A1A19]">{bullet.text}</span>
                  </div>
                ))}
              </div>
              <button className="mt-[4px] flex h-[44px] w-full items-center justify-center rounded-[8px] bg-[#FDDB32] font-sans text-[14px] font-bold text-[#000000] hover:bg-[#e5c52c]">
                {data.sidebarDiscover.buttonText}
              </button>
            </div>

            <div className="flex flex-col items-start gap-[12px] rounded-[16px] bg-[#F9F8F5] p-[20px] border border-[#E6E6E6]">
               <div className="flex items-center gap-[8px]">
                 <ExploreIcon name={data.sidebarHelp.icon} size={18} className="text-[#1A1A19]" />
                 <h3 className="font-sans text-[16px] font-bold text-[#1A1A19]">{data.sidebarHelp.title}</h3>
               </div>
               <p className="font-sans text-[13px] font-normal leading-[1.4] text-[#6E6E6A]">
                 {data.sidebarHelp.description}
               </p>
               <button className="mt-[4px] flex h-[36px] items-center justify-center rounded-[8px] border border-[#CCCCCC] bg-[#FFFFFF] px-[16px] font-sans text-[13px] font-semibold text-[#1A1A19] hover:bg-gray-50">
                 {data.sidebarHelp.buttonText}
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyBookGrid({ data }: { data: typeof exploreFlightsData.whyBook }) {
  return (
    <section className="flex w-full flex-col items-center bg-[#FBFBFA] px-[20px] py-[64px] md:px-[80px] md:py-[96px]">
      <div className="flex w-full max-w-[1280px] flex-col gap-[32px] md:gap-[48px]">
        
        <div className="flex flex-col items-center text-center gap-[12px] mx-auto w-full max-w-[603px]">
          <h2 className="font-sans text-[28px] font-bold tracking-[-0.02em] text-[#1A1A19] md:text-[36px]">
            {data.title}
          </h2>
          <p className="font-sans text-[14px] font-normal text-[#6E6E6A] md:text-[16px]">
            {data.subtitle}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {data.benefits.map((benefit, idx) => {
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center gap-[14px] rounded-[16px] bg-[#FFFFFF] p-[24px] border border-[#E6E6E6] shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#FDDB32]">
                  <ExploreIcon name={benefit.icon} size={20} strokeWidth={2} className="text-[#000000]" />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <h3 className="font-sans text-[16px] font-bold text-[#1A1A19]">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-[13px] font-normal leading-[1.4] text-[#6E6E6A]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* =====================================================================
   EXPORT
===================================================================== */

export default function ExploreFlightsClient() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#F9F8F5]">
      <ExploreFlightHero data={exploreFlightsData.hero} />
      <BrowseByRegion data={exploreFlightsData.browseRegion} />
      <ExploreCountries data={exploreFlightsData.exploreCountries} />
      <FlightDealsWorkspace data={exploreFlightsData.flightDealsWorkspace} />
      <WhyBookGrid data={exploreFlightsData.whyBook} />
      <Footer data={footerData} />
    </main>
  );
}