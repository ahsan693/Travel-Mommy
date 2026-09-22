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
      <div className="relative z-10 mt-[104px] mx-auto flex w-full max-w-[1440px] flex-col items-center px-[20px] text-center md:px-[120px] max-[1024px]:px-[40px]">
        <div className="mb-[12px] flex items-center justify-center rounded-full bg-[#FDDB32] px-[12px] py-[4px]">
          <span className="font-sans text-[12px] font-medium leading-[1.33] tracking-[-0.12px] text-[#000000]">
            {hero.badge}
          </span>
        </div>
        <h1 className="mb-[12px] font-sans text-[48px] font-medium leading-[1] text-[#FFFFFF] md:text-[72px]">
          {hero.title}
        </h1>
        <p className="max-w-[700px] font-sans text-[14px] font-normal leading-[1.43] tracking-[0px] text-[#FFFFFF] md:text-[16px] md:leading-[1.5]">
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
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-y-[24px] gap-x-[16px] px-[20px] py-[32px] md:flex md:min-h-[120px] md:flex-wrap md:items-center md:justify-between md:gap-x-[32px] md:gap-y-[20px] md:px-[80px] md:py-[40px] max-[1024px]:px-[40px]">
        {infoBarData.map((info, i) => {
          const IconComponent = LucideIconMap[info.icon] || MapPin;
          return (
            <div key={i} className="flex items-center gap-[12px] md:min-w-[96px]">
              <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#FDDB32]">
                <IconComponent size={16} strokeWidth={1.8} className="text-[#000000]" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[12px] font-medium leading-[1.33] tracking-[0px] text-[#000000]">
                  {info.label}
                </span>
                <span className="font-sans text-[14px] font-medium leading-[1.43] tracking-[0px] text-[#000000]">
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
    <section className="w-full bg-[#FFFFFF] py-[64px] md:py-[80px] max-[1024px]:py-[72px]">
      <div className="mx-auto w-full max-w-[1440px] px-[20px] md:px-[80px] max-[1024px]:px-[40px]">
        <div className="flex flex-col items-center justify-between gap-[40px] md:gap-[72px] lg:flex-row">
          <div className="flex w-full max-w-[540px] flex-col gap-[24px] md:gap-[32px]">
            <h2 className="font-sans text-[24px] font-medium leading-[1] tracking-[0px] text-[#000000] md:text-[48px] md:tracking-[-1px]">
              {aboutData.title}
            </h2>
            <div className="flex flex-col justify-start md:min-h-[120px]">
              <p className="font-sans text-[14px] font-normal leading-[1.43] tracking-[0px] text-[#000000] md:text-[16px] md:leading-[1.5]">
                {aboutData.paragraphs.join(" ")}
              </p>
            </div>
            <div className="grid w-full max-w-[545px] grid-cols-3 items-center gap-[8px] md:gap-[16px]">
              {aboutData.features.map((feat) => {
                const FeatureIcon = LucideIconMap[feat.icon] || Check;
                return (
                  <div key={feat.label} className="flex min-w-0 h-[40px] items-center justify-center gap-[6px] rounded-[20px] bg-[#F9FBF5] px-[8px] md:h-[48px] md:gap-[12px] md:px-[12px]">
                    <FeatureIcon size={16} strokeWidth={1.8} className={aboutFeatureIconClasses[feat.icon] ?? "text-[#000000]"} />
                    <span className="min-w-0 text-center font-sans text-[12px] font-medium leading-[1.2] tracking-[0px] text-[#000000] md:text-[15px] md:leading-[22px]">
                      {feat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative h-[240px] w-full max-w-[500px] overflow-hidden rounded-[24px] md:h-[400px] md:rounded-[42px] max-[1024px]:max-w-[540px]">
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

      <div className="flex h-auto min-h-[260px] w-full flex-col gap-[16px] bg-gradient-to-b from-[#FFFFFF] to-[#F9FBF5] p-[20px] md:p-[24px]">
        <div className="flex h-[24px] w-full items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <h3 className="font-sans text-[24px] font-medium leading-[1] tracking-[0px] text-[#000000] md:tracking-[-0.48px]">
              {item.city}
            </h3>
            {item.icon && (
              <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-100 bg-white">
                <img src={encodeURI(item.icon)} alt={`${item.city} flag`} className="h-full w-full object-cover" />
              </div>
            )}
          </div>
        </div>

        <p className="w-full font-sans text-[14px] font-normal leading-[1.43] tracking-[0px] text-[#000000] opacity-85 md:h-[60px] md:max-w-[234px] md:leading-[20px] md:tracking-[-0.28px]">
          {item.desc}
        </p>

        <div className="flex items-start">
          {item.flightsFrom && (
            <div className="flex h-[32px] items-center gap-[8px] rounded-full border border-[#E6BD00] bg-[#FFED91] px-[10px] py-[6px]">
              <FlightIcon size={14} strokeWidth={1.8} className="text-[#000000] md:w-[16px] md:h-[16px]" />
              <span className="whitespace-nowrap font-sans text-[12px] font-medium leading-[1.33] tracking-[0px] text-[#000000] md:text-[14px] md:leading-[20px] md:tracking-[-0.28px]">
                {sectionData.flightsPrefix} Dublin from {item.flightsFrom}
              </span>
            </div>
          )}
        </div>

        <div className="mt-[16px] md:mt-auto">
          <button className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[12px] bg-[#000000] font-sans text-[16px] font-medium leading-[1.5] tracking-[0px] text-[#FFFFFF] transition-colors hover:bg-neutral-800">
            {sectionData.bookNowText} <BookIcon size={18} strokeWidth={2} className="text-[#FFFFFF] md:w-[20px] md:h-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

function DestinationsSection({ destinations }: { destinations: TravelPageData["destinationsSection"] }) {
  return (
    <section className="w-full bg-[#000000] py-[64px] md:py-[96px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[20px] md:px-[120px] max-[1024px]:px-[40px]">
        <div className="mb-[32px] flex flex-col gap-[12px] md:mb-[56px]">
          <h2 className="font-sans text-[24px] font-medium leading-[1] tracking-[0px] text-[#FFFFFF] md:text-[48px] md:tracking-[-1px]">
            {destinations.title}
          </h2>
          <p className="font-sans text-[14px] font-normal leading-[1.43] tracking-[0px] text-[#D1D5DB] md:text-[16px] md:leading-[1.5]">
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
        <div className="absolute left-[16px] top-[16px] z-10 flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-full bg-[#FFFFFF] p-[6px] shadow-sm">
          <img src={encodeURI(flight.flag)} alt={`${flight.city} flag`} className="h-full w-full object-contain" />
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col p-[20px]">
        <div className="mb-[24px] flex w-full flex-col gap-[4px]">
          <h3 className="font-sans text-[16px] font-medium leading-[1.5] text-[#000000] md:text-[20px] md:leading-[24px]">{flight.city}</h3>
          <p className="font-sans text-[14px] font-normal leading-[1.43] tracking-[0px] text-[#7D7D7D] md:leading-[20px]">{flight.route}</p>
        </div>
        <div className="mb-[12px] flex w-full items-center justify-between">
          <p className="font-sans text-[24px] font-medium leading-[1] text-[#212121] md:font-semibold">{flight.price}</p>
          <div className="flex items-center gap-[4px] rounded-[6px] border border-[#E6E6E6] bg-[#F9FBF5] px-[8px] py-[4px]">
            <Image src={encodeURI(sectionData.airlineLogoFallback)} alt={`${flight.airline} logo`} width={14} height={14} className="object-contain" />
            <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#000000] md:leading-[16px]">{flight.airline}</span>
          </div>
        </div>
        <div className="flex items-center gap-[6px]">
          <DurationIcon size={14} className="text-[#7D7D7D]" />
          <span className="font-sans text-[14px] font-normal leading-[1.43] tracking-[0px] text-[#7D7D7D] md:leading-[20px]">{flight.duration}</span>
        </div>
      </div>
      <div className="mt-auto px-[20px] pb-[20px] pt-0">
        <button className="flex h-[44px] w-full items-center justify-center gap-[8px] rounded-[12px] border border-[#E6E6E6] bg-[#FFFFFF] transition-colors duration-300 hover:border-[#FDDB32] hover:bg-[#FDDB32]">
          <span className="font-sans text-[14px] font-medium leading-[1.43] tracking-[0px] text-[#000000] md:leading-[20px]">
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
    <section className="w-full bg-[#FFFFFF] py-[64px] md:py-[120px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[20px] md:px-[120px] max-[1024px]:px-[40px]">
        <div className="mb-[32px] flex flex-col items-start justify-between gap-[16px] md:mb-[48px] md:flex-row md:items-end md:gap-6">
          <h2 className="font-sans text-[24px] font-medium leading-[1] tracking-[0px] text-[#000000] md:text-[48px] md:tracking-[-1px]">
            {popularFlights.titlePart1} <span className="text-[#333333]">{popularFlights.titleHighlight}</span>
          </h2>
          <button className="flex h-[44px] w-full items-center justify-center gap-[6px] rounded-[12px] bg-[#FDDB32] px-[20px] py-[10px] font-sans text-[14px] font-medium leading-[1.43] tracking-[0px] text-[#000000] transition-colors hover:bg-[#e5c52c] md:w-auto md:leading-[20px] md:tracking-[-0.28px]">
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
    <section className="w-full bg-[#000000] py-[64px] md:py-[120px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[20px] md:px-[120px] max-[1024px]:px-[40px]">
        <h2 className="mb-[32px] font-sans text-[24px] font-medium leading-[1] tracking-[0px] text-[#FFFFFF] md:mb-[48px] md:text-[48px] md:tracking-[-1px]">
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
                <h3 className="truncate font-sans text-[16px] font-medium leading-[1.5] tracking-[0px] text-[#000000] md:tracking-[-0.32px]">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[14px] font-normal leading-[1.43] tracking-[0px] text-[#000000] md:leading-[20px] md:tracking-[-0.28px]">{item.duration}</span>
                  <span className="font-sans text-[14px] font-medium leading-[1.43] tracking-[0px] text-[#000000] md:text-[16px] md:leading-[24px] md:tracking-[-0.32px]">{item.price}</span>
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
    <div className="flex flex-col overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-[#FDFCF9] transition-transform duration-300 hover:-translate-y-1 h-auto md:h-[346px]">
      <div className="relative h-[180px] w-full shrink-0 overflow-hidden bg-neutral-100">
        <Image 
          src={item.image} 
          alt={item.season} 
          fill 
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 262px"
          className="object-cover transition-transform duration-700 hover:scale-105" 
        />
      </div>

      <div className="flex w-full flex-col gap-[12px] p-[20px] md:h-[166px] md:gap-[16px]">
        <div className="flex items-center gap-[12px]">
          <div 
            className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[18px]" 
            style={{ backgroundColor: item.iconBg }}
          >
            <IconComponent size={18} strokeWidth={2} color={item.iconColor} />
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="font-sans text-[16px] font-medium leading-[1.5] text-[#000000]">
              {item.season}
            </span>
            <span className="font-sans text-[12px] font-normal leading-[1.33] text-[#767676] md:leading-[16px]">
              {item.months}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-[6px]">
          <ThermometerIcon size={16} strokeWidth={1.8} className="text-[#000000]" />
          <span className="font-sans text-[14px] font-medium leading-[1.43] text-[#000000] md:leading-[20px]">
            {item.temp}
          </span>
        </div>

        <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#4B5563] md:text-[13px] md:leading-[18px]">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

function BestTimeSection({ data }: { data: TravelPageData["bestTimeSection"] }) {
  return (
    <section className="w-full bg-[#FFFFFF] py-[64px] md:py-[100px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[32px] px-[20px] md:gap-[48px] md:px-[160px] max-[1024px]:px-[40px]">
        <h2 className="font-sans text-[24px] font-medium leading-[1] tracking-[0px] text-[#000000] md:text-[48px]">
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

  return (
    <div
      className={`flex h-[170px] w-full flex-col justify-between rounded-[14px] px-[12px] py-[16px] text-center transition-transform duration-300 hover:-translate-y-1 md:h-[193px] md:py-[20px] ${
        isHighlight ? "bg-[#FDDB32]" : "bg-[#19191A]"
      }`}
    >
      <span
        className={`font-sans text-[14px] font-medium leading-[1.43] tracking-[0px] md:text-[16px] md:leading-[20px] ${
          isHighlight ? "text-[#000000]" : "text-[#FFFFFF]"
        }`}
      >
        {item.month}
      </span>

      <div className="flex h-[34px] w-full items-center justify-center">
        <img
          src={encodeURI(item.icon)}
          alt={`${item.month} weather icon`}
          className="h-[30px] w-[30px] object-contain md:h-[34px] md:w-[34px]"
        />
      </div>

      <span
        className={`font-sans text-[24px] font-medium leading-[1] tracking-[0px] md:text-[32px] md:leading-[32px] ${
          isHighlight ? "text-[#000000]" : "text-[#FFFFFF]"
        }`}
      >
        {item.temp}
      </span>

      <span
        className={`font-sans text-[12px] font-normal leading-[1.33] tracking-[0px] md:text-[13px] md:leading-[16px] ${
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
    <section className="w-full bg-[#000000] py-[64px] md:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[40px] px-[20px] md:gap-[60px] md:px-[120px] max-[1024px]:px-[40px]">
        
        {/* Header */}
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[12px]">
          <h2 className="font-sans text-[24px] font-medium leading-[1] tracking-[0px] text-[#FFFFFF] md:text-[52px]">
            {data.title}
          </h2>
          <p className="font-sans text-[14px] font-normal leading-[1.43] tracking-[0px] text-[#9999AA] md:text-[16px] md:leading-[1.6]">
            {data.description}
          </p>
        </div>

        {/* Cards Row */}
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[24px]">
          <div className="grid w-full grid-cols-3 gap-[12px] sm:grid-cols-4 md:gap-[16px] lg:grid-cols-12">
            {data.items.map((item, i) => (
              <WeatherMonthCard key={i} item={item} />
            ))}
          </div>

          {/* Legend */}
          <div className="flex w-full justify-center">
            <div className="flex items-center gap-[8px] rounded-full bg-[#19191A] px-[16px] py-[8px]">
              <div className="h-[12px] w-[12px] rounded-full bg-[#FDDB32]" />
              <span className="font-sans text-[12px] font-normal leading-[1.33] text-[#9999AA] md:text-[14px]">
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
          <span className="font-sans text-[14px] font-medium leading-[1.43] text-[#000000] md:font-bold md:leading-none">
            {item.code}
          </span>
        </div>
      </div>

      <div className="flex h-[100px] w-full flex-col gap-[6px] p-[16px]">
        <h3 className="truncate font-sans text-[16px] font-medium leading-[1.5] tracking-[0px] text-[#111111] md:text-[22px] md:font-semibold md:leading-[25px]">
          {item.name}
        </h3>
        <p className="line-clamp-2 font-sans text-[14px] font-normal leading-[1.43] tracking-[0px] text-[#4D4D4D] md:leading-[1.4]">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

function AirportsSection({ data }: { data: TravelPageData["airportsSection"] }) {
  return (
    <section className="w-full bg-[#FFFFFF] py-[64px] md:py-[100px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[32px] px-[20px] md:gap-[48px] md:px-[160px] max-[1024px]:px-[40px]">
        <h2 className="font-sans text-[24px] font-medium leading-[1] tracking-[0px] text-[#000000] md:text-[48px]">
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
    <section className="w-full bg-[#F9F8F5] py-[64px] md:py-[120px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[40px] px-[20px] md:px-[160px] lg:flex-row lg:gap-[80px] max-[1024px]:px-[40px]">
        
        {/* Left Col (Header Text) */}
        <div className="flex w-full shrink-0 flex-col gap-[16px] lg:max-w-[400px] md:gap-[24px]">
          <h2 className="font-sans text-[24px] font-medium leading-[1] tracking-[0px] text-[#000000] md:text-[48px] md:tracking-[-1px]">
            {faqs.title}
          </h2>
          <p className="font-sans text-[14px] font-normal leading-[1.43] tracking-[0px] text-[#000000] md:text-[16px] md:leading-[24px]">
            {faqs.description}
          </p>
        </div>

        {/* Right Col (FAQ Cards) */}
        <div className="flex w-full flex-col gap-[12px] lg:max-w-[640px]">
          {faqs.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="flex flex-col rounded-[24px] bg-[#FFFFFF] p-[24px] transition-colors duration-300 md:p-[32px]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left outline-none gap-[16px]"
                >
                  <span className="font-sans text-[16px] font-medium leading-[1.5] tracking-[0px] text-[#000000] md:leading-[24px] md:tracking-[-0.32px]">
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
                    <p className="font-sans text-[14px] font-normal leading-[1.43] tracking-[0px] text-[#7D7D7D] md:text-[16px] md:leading-[24px]">
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

      <div className="flex flex-1 flex-col p-[20px] md:p-[24px]">
        <div className="mb-[16px] flex items-center gap-[8px]">
          <h3 className="font-sans text-[16px] font-medium leading-[1.5] tracking-[0px] text-[#000000] md:text-[20px] md:leading-[28px] md:tracking-[-0.4px]">
            {item.city}
          </h3>
          <div className="flex h-[20px] w-[20px] items-center justify-center overflow-hidden rounded-full bg-[#FFFFFF] p-[2px] shadow-sm border border-[#E5E7EB]">
            <img 
               src={encodeURI(item.flag)} 
               alt={`${item.city} flag`} 
               className="h-full w-full rounded-full object-cover" 
            />
          </div>
        </div>

        <p className="mb-[24px] min-h-[60px] font-sans text-[14px] font-normal leading-[1.43] tracking-[0px] text-[#4B5563] md:leading-[20px] md:tracking-[-0.28px]">
          {item.desc}
        </p>

        <div className="mt-auto pt-[8px]">
          <button className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-full bg-[#000000] font-sans text-[16px] font-medium leading-[1.5] tracking-[0px] text-[#FFFFFF] transition-colors duration-300 hover:bg-[#FDDB32] hover:text-[#000000] md:leading-[24px]">
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
    <section className="w-full bg-[#000000] py-[64px] md:py-[96px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[20px] md:px-[120px] max-[1024px]:px-[40px]">
        <div className="mb-[32px] flex flex-col gap-[12px] md:mb-[56px]">
          <h2 className="font-sans text-[24px] font-medium leading-[1] tracking-[0px] text-[#FFFFFF] md:text-[48px] md:tracking-[-1px]">
            {nearbyCountries.title}
          </h2>
          <p className="max-w-[700px] font-sans text-[14px] font-normal leading-[1.43] tracking-[0px] text-[#D1D5DB] md:text-[16px] md:leading-[24px]">
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
    <section className="w-full bg-[#FFFFFF] py-[64px] md:py-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-[20px] md:px-[120px] max-[1024px]:px-[40px]">
        <div className="mx-auto flex w-full flex-col items-center justify-center rounded-[32px] bg-[#FDDB32] px-[24px] py-[48px] text-center md:rounded-[42px] md:px-[64px] md:py-[64px]">
          <h2 className="font-sans text-[24px] font-medium leading-[1] tracking-[0px] text-[#000000] md:text-[48px] md:font-bold md:leading-[1.1] md:tracking-[-0.02em]">
            {newsletter.title}
          </h2>
          <p className="mt-[16px] max-w-[680px] font-sans text-[14px] font-normal leading-[1.43] text-[#000000] md:text-[16px] md:leading-[24px]">
            {newsletter.description}
          </p>
          <form className="mt-[36px] flex w-full max-w-[547px] flex-col gap-[12px] sm:flex-row">
            <input
              type="email"
              placeholder={newsletter.inputPlaceholder}
              aria-label="Email address"
              className="h-[56px] flex-1 rounded-[16px] bg-[#FFFFFF] px-[24px] font-sans text-[14px] font-normal leading-[1.43] text-[#000000] placeholder:text-[#767676] md:text-[16px]"
            />
            <button
              type="submit"
              className="flex h-[56px] shrink-0 items-center justify-center rounded-[16px] bg-[#000000] px-[32px] font-sans text-[16px] font-medium leading-[1.5] text-[#FFFFFF] transition-all hover:bg-neutral-800 active:scale-95"
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