'use client';

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Coins,
  MessageCircle,
  Clock,
  Calendar,
  CircleCheck,
  CircleHelp,
  UsersRound,
  Landmark,
  Umbrella,
  Utensils,
  Plane,
  Building2,
  ArrowUpRight,
  ArrowRight,
  Star,
  Check,
  Plus,
  Minus,
  Leaf,
  Sun,
  Cloud,
  Snowflake,
  Thermometer
} from "lucide-react";

import Header from "../header/header";
import Footer from "../footer/footer";
import {
  travelData,
  type NearbyCountry,
  type TravelDestination,
  type TravelFlight,
  type TravelPageData,
  type BestTimeSeason,
  type WeatherMonth,
  type AirportItem,
} from "../../../lib/data/travelData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";

/* =====================================================================
   LUCIDE ICON MAP & HELPER
===================================================================== */

const LucideIconMap: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number; color?: string }>> = {
  "map-pin": MapPin,
  "coins": Coins,
  "message-circle": MessageCircle,
  "clock": Clock,
  "calendar": Calendar,
  "circle-check": CircleCheck,
  "circle-help": CircleHelp,
  "users-round": UsersRound,
  "landmark": Landmark,
  "umbrella": Umbrella,
  "utensils": Utensils,
  "check": Check,
  "plane": Plane,
  "building-2": Building2,
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  "star": Star,
  "leaf": Leaf,
  "sun": Sun,
  "cloud": Cloud,
  "snowflake": Snowflake,
  "thermometer": Thermometer,
};

/* =====================================================================
   CUSTOM WEATHER SVGS (REPLACES BROKEN IMAGE PATHS)
===================================================================== */

const ColoredSun = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="14" fill="#FFD700" />
    <g stroke="#FFD700" strokeWidth="4" strokeLinecap="round">
      <line x1="32" y1="4" x2="32" y2="12" />
      <line x1="32" y1="52" x2="32" y2="60" />
      <line x1="4" y1="32" x2="12" y2="32" />
      <line x1="52" y1="32" x2="60" y2="32" />
      <line x1="12" y1="12" x2="17" y2="17" />
      <line x1="47" y1="47" x2="52" y2="52" />
      <line x1="12" y1="52" x2="17" y2="47" />
      <line x1="47" y1="17" x2="52" y2="12" />
    </g>
  </svg>
);

const ColoredCloud = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M48 44C53.5228 44 58 39.5228 58 34C58 28.4772 53.5228 24 48 24C47.3039 24 46.6247 24.071 45.9686 24.206C44.0298 18.4801 38.5684 14 32 14C23.7157 14 17 20.7157 17 29C17 29.5224 17.0267 30.0385 17.0784 30.5475C12.5369 31.8058 9 35.9576 9 41C9 46.5228 13.4772 51 19 51H48C51.866 51 55 47.866 55 44C55 44 48 44 48 44Z" fill="#F9FAFB" />
  </svg>
);

const ColoredCloudSun = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="44" cy="24" r="10" fill="#FFD700" />
    <g stroke="#FFD700" strokeWidth="3" strokeLinecap="round">
      <line x1="44" y1="6" x2="44" y2="10" />
      <line x1="44" y1="38" x2="44" y2="42" />
      <line x1="26" y1="24" x2="30" y2="24" />
      <line x1="58" y1="24" x2="62" y2="24" />
      <line x1="30" y1="10" x2="33" y2="13" />
      <line x1="55" y1="35" x2="58" y2="38" />
      <line x1="30" y1="38" x2="33" y2="35" />
      <line x1="55" y1="13" x2="58" y2="10" />
    </g>
    <path d="M38 46C42.4183 46 46 42.4183 46 38C46 33.5817 42.4183 30 38 30C37.4431 30 36.9001 30.0568 36.3751 30.1648C34.8239 25.5841 30.4547 22 25 22C18.3726 22 13 27.3726 13 34C13 34.4179 13.0213 34.8308 13.0627 35.238C9.42953 36.2447 6.6 39.5661 6.6 43.6C6.6 48.0183 10.1817 51.6 14.6 51.6H38Z" fill="#F9FAFB" />
  </svg>
);

const CustomWeatherIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "sun": ColoredSun,
  "cloud": ColoredCloud,
  "cloud-sun": ColoredCloudSun,
};


/* =====================================================================
   HERO SECTION
===================================================================== */

const DEFAULT_ABOUT_SECTION: TravelPageData["aboutSection"] = {
  title: "About Greece",
  paragraphs: [],
  features: [],
  featureIcon: "check",
  image: "/Country Details/Section 2/Images/Rectangle.png",
  imageAlt: "Greece Coastline",
};

const aboutFeatureIconClasses: Record<string, string> = {
  landmark: "text-[#7A6B35]",
  umbrella: "text-[#E59500]",
  utensils: "text-[#8BA2AA]",
};

function HeroSection({ hero }: { hero: TravelPageData["hero"] }) {
  return (
    <section className="relative mx-auto flex h-[681px] max-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#000000]">
      <Header data={headerData} />
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 1440px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />
      </div>
      <div className="relative z-10 mt-[104px] mx-auto flex w-full max-w-[1440px] flex-col items-center px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px] text-center">
        <div className="mb-[12px] flex items-center justify-center rounded-full bg-[#FDDB32] px-[12px] py-[4px]">
          <span className="font-sans text-[12px] font-medium leading-[16px] tracking-[-0.12px] text-[#000000]">
            {hero.badge}
          </span>
        </div>
        <h1 className="text-page-h1 mb-[12px] font-sans text-[#FFFFFF]">
          {hero.title}
        </h1>
        <p className="max-w-[700px] font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#FFFFFF] max-[768px]:text-[14px]">
          {hero.description}
        </p>
      </div>
    </section>
  );
}

/* =====================================================================
   INFO BAR SECTION
===================================================================== */

function InfoBarSection({ infoBarData }: { infoBarData: TravelPageData["infoBarData"] }) {
  return (
    <section className="w-full bg-[#F9FBF5]">
      <div className="mx-auto flex min-h-[120px] w-full max-w-[1440px] flex-wrap items-center justify-between gap-x-[32px] gap-y-[20px] px-[80px] py-[40px] max-[1024px]:px-[40px] max-[768px]:min-h-0 max-[768px]:justify-start max-[768px]:px-[20px]">
        {infoBarData.map((info, i) => {
          const IconComponent = LucideIconMap[info.icon] || MapPin;
          return (
            <div key={i} className="flex min-w-[96px] items-center gap-[12px]">
              <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#FDDB32]">
                <IconComponent size={16} strokeWidth={1.8} className="text-[#000000]" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[12px] font-semibold leading-[16px] tracking-[0px] text-[#000000]">
                  {info.label}
                </span>
                <span className="font-sans text-[14px] font-semibold leading-[20px] tracking-[0px] text-[#000000]">
                  {info.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* =====================================================================
   ABOUT SECTION
===================================================================== */

function AboutSection({ about }: { about?: TravelPageData["aboutSection"] }) {
  const aboutData = about ?? DEFAULT_ABOUT_SECTION;

  return (
    <section className="w-full bg-[#FFFFFF] py-[80px] max-[1024px]:py-[72px]">
      <div className="mx-auto w-full max-w-[1440px] px-[80px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <div className="flex flex-col items-center justify-between gap-[72px] lg:flex-row">
          <div className="flex w-full max-w-[540px] flex-col gap-[32px]">
            <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#000000] max-[768px]:text-[38px] max-[768px]:leading-[40px]">
              {aboutData.title}
            </h2>
            <div className="flex min-h-[120px] flex-col justify-start">
              <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
                {aboutData.paragraphs.join(" ")}
              </p>
            </div>
            <div className="flex w-full max-w-[545px] flex-nowrap items-center gap-[16px] max-[640px]:overflow-x-auto">
              {aboutData.features.map((feat) => {
                const FeatureIcon = LucideIconMap[feat.icon] || Check;
                return (
                  <div key={feat.label} className="flex h-[48px] shrink-0 items-center justify-center gap-[12px] rounded-[20px] bg-[#F9FBF5] px-[22px]">
                    <FeatureIcon size={18} strokeWidth={1.8} className={aboutFeatureIconClasses[feat.icon] ?? "text-[#000000]"} />
                    <span className="whitespace-nowrap font-sans text-[15px] font-semibold leading-[22px] tracking-[0px] text-[#000000]">
                      {feat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-[42px] max-[1024px]:max-w-[540px]">
            <Image
              src={aboutData.image}
              alt={aboutData.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 500px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   DESTINATIONS SECTION
===================================================================== */

function DestinationCard({ item, sectionData }: { item: TravelDestination; sectionData: TravelPageData["destinationsSection"] }) {
  const FlightIcon = LucideIconMap[sectionData.flightsIcon] || Plane;
  const BookIcon = LucideIconMap[sectionData.bookNowIcon] || ArrowRight;

  return (
    <div className="flex flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-[#FFFFFF] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-[220px] w-full shrink-0 overflow-hidden bg-neutral-100">
        <Image 
          src={item.image} 
          alt={item.city} 
          fill 
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 282px"
          className="object-cover transition-transform duration-700 hover:scale-105" 
        />
      </div>

      <div className="flex h-[260px] w-full flex-col gap-[16px] bg-gradient-to-b from-[#FFFFFF] to-[#F9FBF5] p-[24px]">
        <div className="flex h-[24px] w-full items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <h3 className="font-sans text-[24px] font-medium leading-[24px] tracking-[-0.48px] text-[#000000]">
              {item.city}
            </h3>
            {item.icon && (
              <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-100 bg-white">
                <img src={item.icon} alt={`${item.city} flag`} className="h-full w-full object-cover" />
              </div>
            )}
          </div>
        </div>

        <p className="h-[60px] w-full max-w-[234px] font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#000000] opacity-85">
          {item.desc}
        </p>

        <div className="flex items-start">
          {item.flightsFrom && (
            <div className="flex h-[32px] items-center gap-[8px] rounded-full border border-[#E6BD00] bg-[#FFED91] pb-[6px] pl-[8px] pr-[10px] pt-[6px]">
              <FlightIcon size={16} strokeWidth={1.8} className="text-[#000000]" />
              <span className="whitespace-nowrap font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000]">
                {sectionData.flightsPrefix} Dublin from {item.flightsFrom}
              </span>
            </div>
          )}
        </div>

        <div className="mt-auto">
          <button className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[12px] bg-[#000000] font-sans text-[16px] font-medium leading-[24px] tracking-[0px] text-[#FFFFFF] transition-colors hover:bg-neutral-800">
            {sectionData.bookNowText} <BookIcon size={20} strokeWidth={2} className="text-[#FFFFFF]" />
          </button>
        </div>
      </div>
    </div>
  );
}

function DestinationsSection({ destinations }: { destinations: TravelPageData["destinationsSection"] }) {
  return (
    <section className="w-full bg-[#000000] py-[96px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <div className="mb-[56px] flex flex-col gap-[12px]">
          <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#FFFFFF] max-[768px]:text-[32px]">
            {destinations.title}
          </h2>
          <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#D1D5DB]">
            {destinations.description}
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {destinations.items.map((dest, i) => (
            <DestinationCard key={i} item={dest} sectionData={destinations} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   POPULAR FLIGHTS SECTION
===================================================================== */

function FlightCard({ flight, sectionData }: { flight: TravelFlight; sectionData: TravelPageData["popularFlightsSection"] }) {
  const DurationIcon = LucideIconMap[sectionData.durationIcon] || Clock;
  const ViewIcon = LucideIconMap[sectionData.viewFlightsIcon] || ArrowUpRight;

  return (
    <div className="group flex h-[364px] flex-col overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-[#FFFFFF] shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden bg-neutral-100">
        <Image
          src={flight.image}
          alt={flight.city}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 282px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-[16px] top-[16px] flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-full bg-[#FFFFFF] p-[6px] shadow-sm z-10">
          <img src={flight.flag} alt={`${flight.city} flag`} className="h-full w-full object-contain" />
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col p-[20px]">
        <div className="mb-[24px] flex w-full flex-col gap-[4px]">
          <h3 className="font-sans text-[20px] font-medium leading-[24px] text-[#000000]">{flight.city}</h3>
          <p className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">{flight.route}</p>
        </div>
        <div className="mb-[12px] flex w-full items-center justify-between">
          <p className="font-sans text-[24px] font-semibold leading-[24px] text-[#212121]">{flight.price}</p>
          <div className="flex items-center gap-[4px] rounded-[6px] border border-[#E6E6E6] bg-[#F9FBF5] px-[8px] py-[4px]">
            <Image src={sectionData.airlineLogoFallback} alt={`${flight.airline} logo`} width={14} height={14} className="object-contain" />
            <span className="font-sans text-[12px] font-medium leading-[16px] text-[#000000]">{flight.airline}</span>
          </div>
        </div>
        <div className="flex items-center gap-[6px]">
          <DurationIcon size={14} className="text-[#7D7D7D]" />
          <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">{flight.duration}</span>
        </div>
      </div>
      <div className="mt-auto px-[20px] pb-[20px] pt-0">
        <button className="flex h-[44px] w-full items-center justify-center gap-[8px] rounded-[12px] border border-[#E6E6E6] bg-[#FFFFFF] transition-colors duration-300 hover:border-[#FDDB32] hover:bg-[#FDDB32]">
          <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[0px] text-[#000000]">
            {sectionData.viewFlightsText}
          </span>
          <ViewIcon size={16} className="text-[#000000]" />
        </button>
      </div>
    </div>
  );
}

function PopularFlightsSection({ popularFlights }: { popularFlights: TravelPageData["popularFlightsSection"] }) {
  const BrowseIcon = LucideIconMap[popularFlights.browseCtaIcon] || ArrowUpRight;

  return (
    <section className="w-full bg-[#FFFFFF] py-[120px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <div className="mb-[48px] flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#000000] max-[768px]:text-[32px]">
            {popularFlights.titlePart1} <span className="text-[#333333]">{popularFlights.titleHighlight}</span>
          </h2>
          <button className="flex h-[44px] items-center gap-[6px] rounded-[12px] bg-[#FDDB32] px-[20px] py-[10px] font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000] transition-colors hover:bg-[#e5c52c]">
            {popularFlights.browseCtaText} <BrowseIcon size={14} />
          </button>
        </div>
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {popularFlights.items.map((flight, i) => (
            <FlightCard key={i} flight={flight} sectionData={popularFlights} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   THINGS TO DO SECTION
===================================================================== */

function TopThingsToDoSection({ thingsToDo }: { thingsToDo: TravelPageData["thingsToDoSection"] }) {
  return (
    <section className="w-full bg-[#000000] py-[120px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <h2 className="mb-[48px] font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#FFFFFF] max-[768px]:text-[32px]">
          {thingsToDo.title}
        </h2>
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {thingsToDo.items.map((item, i) => (
            <div key={i} className="flex h-[292px] flex-col rounded-[24px] bg-[#FFFFFF] p-[6px] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-[20px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 282px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between px-[12px] pb-[12px] pt-[12px]">
                <h3 className="truncate font-sans text-[16px] font-medium leading-[24px] tracking-[-0.32px] text-[#000000]">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#000000]">{item.duration}</span>
                  <span className="font-sans text-[16px] font-medium leading-[24px] tracking-[-0.32px] text-[#000000]">{item.price}</span>
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
   BEST TIME TO VISIT SECTION
===================================================================== */

function BestTimeCard({ item }: { item: BestTimeSeason }) {
  const IconComponent = LucideIconMap[item.icon] || Cloud;
  const ThermometerIcon = LucideIconMap["thermometer"] || Thermometer;

  return (
    <div className="flex flex-col overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-[#FDFCF9] transition-transform duration-300 hover:-translate-y-1 h-[346px]">
      <div className="relative h-[180px] w-full shrink-0 overflow-hidden bg-neutral-100">
        <Image 
          src={item.image} 
          alt={item.season} 
          fill 
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 262px"
          className="object-cover transition-transform duration-700 hover:scale-105" 
        />
      </div>

      <div className="flex h-[166px] w-full flex-col gap-[16px] p-[20px]">
        <div className="flex items-center gap-[12px]">
          <div 
            className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[18px]" 
            style={{ backgroundColor: item.iconBg }}
          >
            <IconComponent size={18} strokeWidth={2} color={item.iconColor} />
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="font-sans text-[16px] font-medium leading-[20px] text-[#000000]">
              {item.season}
            </span>
            <span className="font-sans text-[12px] font-normal leading-[16px] text-[#767676]">
              {item.months}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-[6px]">
          <ThermometerIcon size={16} strokeWidth={1.8} className="text-[#000000]" />
          <span className="font-sans text-[14px] font-medium leading-[20px] text-[#000000]">
            {item.temp}
          </span>
        </div>

        <p className="font-sans text-[13px] font-normal leading-[18px] text-[#4B5563]">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

function BestTimeSection({ data }: { data: TravelPageData["bestTimeSection"] }) {
  return (
    <section className="w-full bg-[#FFFFFF] py-[100px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[48px] px-[160px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <h2 className="font-sans text-[48px] font-medium leading-[1] tracking-[0px] text-[#000000] max-[768px]:text-[32px]">
          {data.title}
        </h2>
        
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, i) => (
            <BestTimeCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   GREECE WEATHER SECTION
===================================================================== */

function WeatherMonthCard({ item }: { item: WeatherMonth }) {
  const isHighlight = item.isHighlight;
  const WeatherSVGComponent = CustomWeatherIconMap[item.icon] || ColoredSun;

  return (
    <div
      className={`flex h-[193px] w-full flex-col justify-between rounded-[14px] px-[12px] py-[20px] text-center transition-transform duration-300 hover:-translate-y-1 ${
        isHighlight ? "bg-[#FDDB32]" : "bg-[#19191A]"
      }`}
    >
      <span
        className={`font-sans text-[16px] font-medium leading-[20px] tracking-[0px] ${
          isHighlight ? "text-[#000000]" : "text-[#FFFFFF]"
        }`}
      >
        {item.month}
      </span>

      <div className="flex h-[34px] w-full items-center justify-center">
        <WeatherSVGComponent className="h-[34px] w-[34px]" />
      </div>

      <span
        className={`font-sans text-[32px] font-medium leading-[32px] tracking-[0px] ${
          isHighlight ? "text-[#000000]" : "text-[#FFFFFF]"
        }`}
      >
        {item.temp}
      </span>

      <span
        className={`font-sans text-[13px] font-normal leading-[16px] tracking-[0px] ${
          isHighlight ? "text-[#333333]" : "text-[#E6E6E6]"
        }`}
      >
        {item.desc}
      </span>
    </div>
  );
}

function WeatherSection({ data }: { data: TravelPageData["weatherSection"] }) {
  return (
    <section className="w-full bg-[#000000] py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[60px] px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[12px] max-w-[1200px] mx-auto w-full">
          <h2 className="font-sans text-[52px] font-medium leading-[1] tracking-[0px] text-[#FFFFFF] max-[768px]:text-[36px]">
            {data.title}
          </h2>
          <p className="font-sans text-[16px] font-normal leading-[1.6] tracking-[0px] text-[#9999AA]">
            {data.description}
          </p>
        </div>

        {/* Cards Row */}
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[24px]">
          <div className="grid w-full grid-cols-2 gap-[16px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-12">
            {data.items.map((item, i) => (
              <WeatherMonthCard key={i} item={item} />
            ))}
          </div>

          {/* Legend */}
          <div className="flex w-full justify-center">
            <div className="flex items-center gap-[8px] rounded-full bg-[#19191A] px-[16px] py-[8px]">
              <div className="h-[12px] w-[12px] rounded-full bg-[#FDDB32]" />
              <span className="font-sans text-[14px] font-normal text-[#9999AA]">
                {data.legendText}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* =====================================================================
   MAJOR AIRPORTS IN GREECE SECTION
===================================================================== */

function AirportCard({ item }: { item: AirportItem }) {
  return (
    <div className="flex h-[320px] w-full flex-col overflow-hidden rounded-[20px] border border-[#E5E5E0] bg-[#FDFCF9] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-[220px] w-full shrink-0 overflow-hidden bg-neutral-100">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 360px"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute bottom-[16px] left-[16px] flex h-[32px] items-center justify-center rounded-[8px] bg-[#FDDB32] px-[12px] py-[4px] shadow-sm">
          <span className="font-sans text-[14px] font-bold leading-none text-[#000000]">
            {item.code}
          </span>
        </div>
      </div>

      <div className="flex h-[100px] w-full flex-col gap-[6px] p-[16px]">
        <h3 className="truncate font-sans text-[22px] font-semibold leading-[25px] tracking-[0px] text-[#111111]">
          {item.name}
        </h3>
        <p className="line-clamp-2 font-sans text-[14px] font-normal leading-[1.4] tracking-[0px] text-[#4D4D4D]">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

function AirportsSection({ data }: { data: TravelPageData["airportsSection"] }) {
  return (
    <section className="w-full bg-[#FFFFFF] py-[100px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[48px] px-[160px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <h2 className="font-sans text-[48px] font-medium leading-[1] tracking-[0px] text-[#000000] max-[768px]:text-[32px]">
          {data.title}
        </h2>

        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, i) => (
            <AirportCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   TRAVEL HELP (FAQ) SECTION
===================================================================== */

function TravelHelpSection({ faqs }: { faqs: TravelPageData["travelHelpSection"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#F9F8F5] py-[120px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row px-[160px] gap-[80px] max-[1024px]:px-[40px] max-[768px]:px-[20px] max-[1024px]:gap-[40px]">
        
        {/* Left Col (Header Text) */}
        <div className="flex w-full lg:max-w-[400px] flex-col gap-[24px] shrink-0">
          <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#000000] max-[768px]:text-[36px]">
            {faqs.title}
          </h2>
          <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
            {faqs.description}
          </p>
        </div>

        {/* Right Col (FAQ Cards) */}
        <div className="flex w-full lg:max-w-[640px] flex-col gap-[12px]">
          {faqs.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="flex flex-col rounded-[24px] bg-[#FFFFFF] p-[32px] transition-colors duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left outline-none"
                >
                  <span className="font-sans text-[16px] font-medium leading-[24px] tracking-[-0.32px] text-[#000000]">
                    {faq.q}
                  </span>
                  <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center text-[#000000]">
                    {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                  </span>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] mt-[16px] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#7D7D7D]">
                      {faq.a}
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

/* =====================================================================
   NEARBY COUNTRIES SECTION
===================================================================== */

function NearbyCountryCard({ item, sectionData }: { item: NearbyCountry; sectionData: TravelPageData["nearbyCountriesSection"] }) {
  const BookIcon = LucideIconMap[sectionData.bookNowIcon] || ArrowRight;

  return (
    <div className="group flex flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-[#FFFFFF] shadow-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden bg-neutral-100">
        <Image 
          src={item.image} 
          alt={item.city} 
          fill 
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 282px"
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>

      <div className="flex flex-1 flex-col p-[24px]">
        <div className="mb-[16px] flex items-center gap-[8px]">
          <h3 className="font-sans text-[20px] font-medium leading-[28px] tracking-[-0.4px] text-[#000000]">
            {item.city}
          </h3>
          <div className="flex h-[20px] w-[20px] items-center justify-center overflow-hidden rounded-full bg-[#FFFFFF] shadow-sm border border-[#E5E7EB] p-[2px]">
            <img 
               src={item.flag} 
               alt={`${item.city} flag`} 
               className="h-full w-full object-cover rounded-full" 
            />
          </div>
        </div>

        <p className="mb-[24px] min-h-[60px] font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#4B5563]">
          {item.desc}
        </p>

        <div className="mt-auto pt-[8px]">
          <button className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-full bg-[#000000] font-sans text-[16px] font-medium leading-[24px] tracking-[0px] text-[#FFFFFF] transition-colors duration-300 hover:bg-[#FDDB32] hover:text-[#000000]">
            {sectionData.bookNowText}
            <BookIcon size={18} className="text-current" />
          </button>
        </div>
      </div>
    </div>
  );
}

function NearbyCountriesSection({ nearbyCountries }: { nearbyCountries: TravelPageData["nearbyCountriesSection"] }) {
  return (
    <section className="w-full bg-[#000000] py-[96px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <div className="mb-[56px] flex flex-col gap-[12px]">
          <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#FFFFFF] max-[768px]:text-[32px]">
            {nearbyCountries.title}
          </h2>
          <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#D1D5DB] max-w-[700px]">
            {nearbyCountries.description}
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {nearbyCountries.items.map((dest, i) => (
            <NearbyCountryCard key={i} item={dest} sectionData={nearbyCountries} />
          ))}
        </div>
      </div>
    </section>
  );
}


/* =====================================================================
   NEWSLETTER SECTION
===================================================================== */

 function NewsletterSection({ newsletter }: { newsletter: TravelPageData["newsletterSection"] }) {
  return (
    <section className="w-full bg-[#FFFFFF] py-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <div className="mx-auto flex w-full flex-col items-center justify-center rounded-[42px] bg-[#FDDB32] py-[64px] px-[64px] text-center max-[768px]:rounded-[32px] max-[768px]:py-[48px] max-[768px]:px-[24px]">
          <h2 className="font-sans text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#000000] max-[768px]:text-[32px]">
            {newsletter.title}
          </h2>
          <p className="mt-[16px] max-w-[680px] font-sans text-[16px] font-normal leading-[24px] text-[#000000]">
            {newsletter.description}
          </p>
          <form className="mt-[36px] flex w-full max-w-[547px] flex-col gap-[12px] sm:flex-row">
            <input
              type="email"
              placeholder={newsletter.inputPlaceholder}
              aria-label="Email address"
              className="bg-[#FFFFFF] h-[56px] flex-1 rounded-[16px] px-[24px] font-sans text-[16px] font-normal text-[#000000] placeholder:text-[#767676]"
            />
            <button
              type="submit"
              className="flex h-[56px] shrink-0 items-center justify-center rounded-[16px] bg-[#000000] px-[32px] font-sans text-[16px] font-medium text-[#FFFFFF] transition-all hover:bg-neutral-800 active:scale-95"
            >
              {newsletter.buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   PAGE EXPORT
===================================================================== */

export default function DiscoverGreecePage({ data = travelData }: { data?: TravelPageData }) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#FFFFFF]">
      <HeroSection hero={data.hero} />
      <InfoBarSection infoBarData={data.infoBarData} />
      <AboutSection about={data.aboutSection} />
      <DestinationsSection destinations={data.destinationsSection} />
      <PopularFlightsSection popularFlights={data.popularFlightsSection} />
      <TopThingsToDoSection thingsToDo={data.thingsToDoSection} />
      <BestTimeSection data={data.bestTimeSection} />
      <WeatherSection data={data.weatherSection} />
      <AirportsSection data={data.airportsSection} />
      <TravelHelpSection faqs={data.travelHelpSection} />
      <NearbyCountriesSection nearbyCountries={data.nearbyCountriesSection} />
      <NewsletterSection newsletter={data.newsletterSection} />
      <Footer data={footerData} />
    </main>
  );
}