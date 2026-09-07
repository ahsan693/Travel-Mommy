'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  BarChart2,
  ShieldCheck,
  Compass
} from "lucide-react";

import Header from "../header/header";
import Footer from "../footer/footer";
import { destinationsData, type DestinationsPageData } from "../../../lib/data/destinationsData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";

/* =====================================================================
   TYPES & INTERFACES
===================================================================== */

interface CountryChip {
  name: string;
  region: string;
  img: string;
  swatch?: string;
}

interface DestinationItem {
  city?: string;
  name?: string;
  desc: string;
  badge?: string;
  badgeStyles?: string;
  flightsFrom?: string;
  hotelsFrom?: string;
  image: string;
  tags?: string[];
  perk?: string;
  price?: string;
  rating?: string;
}

/* =====================================================================
   STATIC DATA
===================================================================== */

const REGIONS = [
  "Europe",
  "Asia",
  "North America",
  "Middle East",
  "Africa",
  "Oceania"
];

const COUNTRY_CHIPS: CountryChip[] = [
  // Europe
  { name: "Greece", region: "Europe", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&w=100&q=80" },
  { name: "Italy", region: "Europe", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&w=100&q=80" },
  { name: "Spain", region: "Europe", img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&w=100&q=80" },
  { name: "France", region: "Europe", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&w=100&q=80" },
  { name: "Portugal", region: "Europe", img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&w=100&q=80" },
  { name: "Croatia", region: "Europe", img: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&w=100&q=80" },
  
  // Asia
  { name: "Japan", region: "Asia", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&w=100&q=80" },
  { name: "Thailand", region: "Asia", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&w=100&q=80" },
  { name: "Indonesia", region: "Asia", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&w=100&q=80" },
  { name: "Vietnam", region: "Asia", img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&w=100&q=80" },
  
  // North America
  { name: "USA", region: "North America", img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&w=100&q=80" },
  { name: "Canada", region: "North America", img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&w=100&q=80" },
  { name: "Mexico", region: "North America", img: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&w=100&q=80" },
  
  // Middle East
  { name: "UAE", region: "Middle East", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&w=100&q=80" },
  { name: "Turkey", region: "Middle East", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&w=100&q=80" },
  
  // Africa
  { name: "Morocco", region: "Africa", img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&w=100&q=80" },
  { name: "South Africa", region: "Africa", img: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&w=100&q=80" },
  
  // Oceania
  { name: "Australia", region: "Oceania", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&w=100&q=80" },
  { name: "New Zealand", region: "Oceania", img: "https://images.unsplash.com/photo-1556878516-61356c874f03?auto=format&w=100&q=80" },
];

const FEATURED_COUNTRIES: DestinationItem[] = [
  {
    name: "Greece",
    desc: "Beautiful islands, ancient history",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&w=800&q=80",
    tags: ["Islands", "History", "Beach"],
    flightsFrom: "€50",
    hotelsFrom: "€65",
    perk: "Mediterranean beaches",
    price: "€49",
  },
  {
    name: "Spain",
    desc: "Sun-soaked beaches, vibrant culture",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&w=800&q=80",
    tags: ["Culture", "Beaches", "Tapas"],
    flightsFrom: "€35",
    hotelsFrom: "€55",
    perk: "Incredible tapas & nightlife",
    price: "€39",
  },
  {
    name: "Italy",
    desc: "Ancient ruins, rolling vineyards",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&w=800&q=80",
    tags: ["Art", "History", "Wine"],
    flightsFrom: "€40",
    hotelsFrom: "€70",
    perk: "World-class cuisine & art",
    price: "€55",
  },
];

const WHY_COMPARE = [
  {
    icon: BarChart2,
    title: "Compare Prices",
    description: "Compare flights and hotels from hundreds of trusted travel providers.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Partners",
    description: "Book securely through leading airlines and hotel booking platforms.",
  },
  {
    icon: Compass,
    title: "Travel Inspiration",
    description: "Discover destinations, travel guides and tips to help plan your next adventure.",
  },
];

const FAQS = [
  {
    q: "Is TravelMommy free to use?",
    a: "Yes. You can compare flights and hotels for free and book directly with trusted travel partners.",
  },
  {
    q: "Can I compare flights and hotels?",
    a: "Yes. Compare prices from hundreds of airlines, hotels and booking websites in one place.",
  },
  {
    q: "Which countries are most popular?",
    a: "Some of our most searched destinations include Greece, Spain, Italy, France, Thailand and Japan.",
  },
  {
    q: "How do I find cheap flights?",
    a: "Use our flight search to compare prices across multiple travel providers and book when you find the best deal.",
  },
  {
    q: "When is the best time to travel?",
    a: "It depends on your destination. Each country guide includes seasonal travel tips and the best times to visit.",
  },
];

/* =====================================================================
   HERO SECTION
===================================================================== */

function HeroSection({ data }: { data: DestinationsPageData }) {
  const [activeRegion, setActiveRegion] = useState("Europe");

  // Filter chips based on the selected active region
  const activeChips = data.countryChips.filter((chip) => chip.region === activeRegion);

  return (
    <section className="relative flex h-auto min-h-[664px] w-full flex-col items-center overflow-hidden bg-[#000000] md:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Featured Countries/Section 1/Images/neom-wTmGtmGQCjQ-unsplash.jpg"
          alt="Desert canyon arch at sunset"
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
                Discover<br />
                Your Next<br />
                Destination
              </span>
              {/* Desktop View: Single line */}
              <span className="hidden md:inline">
                Discover Your Next Destination
              </span>
            </h1>
            {/* Subtitle */}
            <p className="max-w-[700px] font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#FFFFFF] md:text-[16px] md:leading-[1.5] md:text-[rgba(255,255,255,0.8)]">
              {/* Mobile Text */}
              <span className="md:hidden">
                Explore countries across Europe, Asia, the Americas, Africa and Oceania. Compare flights and hotels, and plan your next adventure.
              </span>
              {/* Desktop Text */}
              <span className="hidden md:inline">
                Explore countries across Europe, Asia, the Americas, Africa and Oceania. Compare flights and
                hotels, explore travel guides, and plan your next adventure with TravelMommy.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-[12px] md:gap-[19px]">
            <p className="font-sans text-[13px] font-normal leading-[18px] tracking-[0px] text-[#F9FBF5] md:font-medium md:text-[14px] md:leading-[1.43] md:text-[#FFFFFF]">
              Browse by Region
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
              Popular Destinations
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
              {activeChips.length === 0 && (
                 <span className="mt-2 text-sm text-white/60">No destinations currently listed for this region.</span>
              )}
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
            Featured Countries
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
                    Popular
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
                    {country.rating}/5
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
                    <span>✈ Flights from {country.flightsFrom}</span>
                  </div>
                  <div className="flex items-center gap-[8px] font-sans text-[13px] leading-[18px] md:text-[14px] font-normal md:leading-[20px] tracking-[0px] md:tracking-[0px] text-[#7D7D7D]">
                    <Building2 size={14} className="text-[#7D7D7D]" />
                    <span>🏨 Hotels from {country.hotelsFrom}</span>
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
                      Explore
                    </span>
                    <div className="flex items-baseline gap-[2px]">
                      <span className="font-sans text-[20px] leading-[24px] tracking-[0px] md:text-[22px] font-medium md:leading-none md:tracking-[0px] text-[#000000]">
                        {country.price}
                      </span>
                      <span className="font-sans text-[13px] leading-[18px] md:text-[14px] font-normal md:leading-[20px] tracking-[0px] md:tracking-[0px] text-[#7D7D7D]">
                        / flight
                      </span>
                    </div>
                  </div>
                  <button className="flex h-[38px] md:h-[40px] items-center justify-center gap-[4px] md:gap-[6px] rounded-full bg-[#FDDB32] px-[18px] py-[10px] md:px-[16px] font-sans text-[13px] leading-[18px] md:text-[14px] font-medium md:leading-[20px] tracking-[0px] md:tracking-[0px] text-[#000000] transition-colors duration-200 hover:bg-[#e5c52c]">
                    Explore →
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
            Why Plan Your Trip with TravelMommy?
          </h2>
          <p className="max-w-[700px] font-sans text-[15px] leading-[22px] opacity-80 md:opacity-100 font-normal md:text-[16px] md:leading-[24px] tracking-[0px] text-[#000000]">
            Search and compare cheap flights from multiple airlines and trusted booking
            partners to find the best fare for your trip.
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
            Explore tours
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
          Frequently Asked Questions
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