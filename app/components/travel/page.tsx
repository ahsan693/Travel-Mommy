'use client';

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Coins,
  MessageCircle,
  Clock,
  Calendar,
  Plane,
  Building2,
  ArrowUpRight,
  ArrowRight,
  Star,
  Check,
  Plus,
  Minus
} from "lucide-react";

import Header from "../header/header";
import Footer from "../footer/footer";
import {
  travelData,
  type NearbyCountry,
  type TravelDestination,
  type TravelFlight,
  type TravelPageData,
} from "../../../lib/data/travelData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";

/* =====================================================================
   LUCIDE ICON MAP & HELPER
===================================================================== */

const LucideIconMap: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  "map-pin": MapPin,
  "coins": Coins,
  "message-circle": MessageCircle,
  "clock": Clock,
  "calendar": Calendar,
  "check": Check,
  "plane": Plane,
  "building-2": Building2,
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  "star": Star,
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

function HeroSection({ hero }: { hero: TravelPageData["hero"] }) {
  return (
    <section className="relative mx-auto flex h-[681px] max-h-screen w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden bg-[#000000]">
      <Header data={headerData} />
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
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
        <h1 className="mb-[12px] font-sans text-[72px] font-medium leading-[72px] tracking-[-0.03em] text-[#FFFFFF] max-[768px]:text-[48px]">
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
    <section className="w-full bg-[#F9FBFA]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-[24px] py-[40px] px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        {infoBarData.map((info, i) => {
          const IconComponent = LucideIconMap[info.icon] || MapPin;
          return (
            <div key={i} className="flex items-center gap-[12px]">
              <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#FDDB32]">
                <IconComponent size={18} className="text-[#000000]" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[12px] font-medium leading-[16px] tracking-[-0.12px] text-[#000000]">
                  {info.label}
                </span>
                <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000]">
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
  const FeatureIcon = LucideIconMap[aboutData.featureIcon] || Check;

  return (
    <section className="w-full bg-[#FFFFFF] py-[120px] max-[1024px]:py-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <div className="flex flex-col items-center gap-[80px] lg:flex-row">
          <div className="flex w-full max-w-[540px] flex-col gap-[24px]">
            <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#000000] max-[768px]:text-[36px]">
              {aboutData.title}
            </h2>
            <div className="flex flex-col gap-[16px]">
              {aboutData.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-[16px] flex flex-wrap gap-[16px]">
              {aboutData.features.map(feat => (
                <div key={feat} className="flex items-center gap-[8px]">
                  <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#F9FBFA] border border-[#E5E7EB]">
                     <FeatureIcon size={14} className="text-[#000000]" />
                  </div>
                  <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000]">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-[42px]">
            <Image 
              src={aboutData.image} 
              alt={aboutData.imageAlt} 
              fill 
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
    <div className="flex flex-col overflow-hidden rounded-[24px] border border-[#F3F4F6] bg-[#FFFFFF] shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-[240px] w-full shrink-0 overflow-hidden bg-neutral-100">
        <Image src={item.image} alt={item.city} fill className="object-cover transition-transform duration-700 hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-[24px]">
        <div className="mb-[16px] flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <h3 className="font-sans text-[20px] font-medium leading-[28px] tracking-[-0.4px] text-[#000000]">
              {item.city}
            </h3>
            {item.icon && (
              <div className="relative flex h-[16px] w-[24px] shrink-0 items-center justify-center">
                 <Image src={item.icon} alt="flag" fill className="object-contain" />
              </div>
            )}
          </div>
        </div>
        <p className="mb-[24px] min-h-[60px] font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#4B5563]">
          {item.desc}
        </p>
        <div className="mb-[24px] flex flex-col items-start gap-[12px]">
          {item.flightsFrom && (
            <div className="flex items-center gap-[6px] rounded-full border border-[#FDE047] bg-[#FEF6D8] px-[12px] py-[6px]">
              <FlightIcon size={14} className="text-[#000000]" />
              <span className="font-sans text-[13px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000]">
                {sectionData.flightsPrefix} {item.flightsFrom}
              </span>
            </div>
          )}
        </div>
        <div className="mt-auto pt-[8px]">
          <button className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[12px] bg-[#000000] font-sans text-[16px] font-medium leading-[24px] tracking-[0px] text-[#FFFFFF] transition-colors hover:bg-neutral-800">
            {sectionData.bookNowText} <BookIcon size={18} className="text-[#FFFFFF]" />
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
        <Image src={flight.image} alt={flight.city} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
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
            {popularFlights.titlePart1} <span className="text-[#FDDB32]">{popularFlights.titleHighlight}</span>
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
                <Image src={item.image} alt={item.title} fill className="object-cover" />
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
   WHERE TO STAY SECTION
===================================================================== */

function WhereToStaySection({ hotels }: { hotels: TravelPageData["whereToStaySection"] }) {
  const RatingIcon = LucideIconMap[hotels.ratingIcon] || Star;

  return (
    <section className="w-full bg-[#F9FBFA] py-[120px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <h2 className="mb-[48px] font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#000000] max-[768px]:text-[32px]">
          {hotels.title}
        </h2>
        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-3">
          {hotels.items.map((hotel, i) => (
            <div key={i} className="flex flex-col rounded-[32px] bg-[#FFFFFF] p-[6px] shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-[26px]">
                <Image src={hotel.image} alt={hotel.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-[16px] p-[20px]">
                <div className="flex items-center gap-[4px]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <RatingIcon key={j} size={14} className="fill-[#F59E0B] text-[#F59E0B]" strokeWidth={0} />
                  ))}
                  <span className="ml-[4px] font-sans text-[14px] font-medium text-[#F59E0B]">{hotel.rating}</span>
                </div>
                <h3 className="font-sans text-[16px] font-medium leading-[24px] tracking-[-0.32px] text-[#000000]">{hotel.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[16px] font-medium leading-[24px] tracking-[-0.32px] text-[#000000]">
                    {hotel.price} <span className="text-[14px] font-normal tracking-[0px] text-[#7D7D7D]">{hotels.perNightText}</span>
                  </span>
                  <button className="rounded-full bg-[#000000] px-[16px] py-[8px] font-sans text-[12px] font-medium leading-[16px] tracking-[-0.12px] text-[#FFFFFF] transition-colors hover:bg-neutral-800">
                    {hotels.viewDetailsText}
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
   TRAVEL HELP (FAQ) SECTION
===================================================================== */

function TravelHelpSection({ faqs }: { faqs: TravelPageData["travelHelpSection"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#F9F8F5] py-[120px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[64px] lg:flex-row lg:items-start px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        
        {/* Left Col */}
        <div className="flex w-full max-w-[400px] flex-col gap-[12px] shrink-0">
          <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#000000] max-[768px]:text-[36px]">
            {faqs.title}
          </h2>
          <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
            {faqs.description}
          </p>
        </div>

        {/* Right Col */}
        <div className="flex w-full flex-col gap-[24px]">
          {faqs.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="flex flex-col gap-[12px] border-b border-[#E5E7EB] pb-[24px]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="font-sans text-[16px] font-medium leading-[24px] tracking-[-0.32px] text-[#000000]">
                    {faq.q}
                  </span>
                  <span className="flex shrink-0 text-[#000000]">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#7D7D7D]">
                    {faq.a}
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
              className="bg-[#FFFFFF] h-[56px] flex-1 rounded-[16px] px-[24px] font-sans text-[16px] font-normal text-[#000000] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-black/5"
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
      <WhereToStaySection hotels={data.whereToStaySection} />
      <NearbyCountriesSection nearbyCountries={data.nearbyCountriesSection} />
      <TravelHelpSection faqs={data.travelHelpSection} />
      <NewsletterSection newsletter={data.newsletterSection} />
      <Footer data={footerData} />
    </main>
  );
}