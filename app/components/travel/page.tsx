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
  ChevronDown,
  Check,
  Plus,
  Minus
} from "lucide-react";

import Header from "../header/header";
import Footer from "../footer/footer";
import { travelData, type TravelPageData } from "../../../lib/data/travelData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";

/* =====================================================================
   STATIC DATA
===================================================================== */

const INFO_BAR_DATA = [
  { icon: MapPin, label: "Capital", value: "Athens" },
  { icon: Coins, label: "Currency", value: "Euro" },
  { icon: MessageCircle, label: "Language", value: "Greek" },
  { icon: Clock, label: "Timezone", value: "GMT+2" },
  { icon: Calendar, label: "Best Time", value: "May - Oct" },
];

const DESTINATIONS = [
  {
    city: "Santorini",
    desc: "Famous for its whitewashed houses, blue-domed churches, and breathtaking sunsets.",
    badge: "Popular",
    badgeStyles: "bg-[#EBF5FF] text-[#0066CC]",
    flightsFrom: "€120",
    hotelsFrom: "€180",
    image: "/Country Details/Section 3/Images/image.png",
    icon: "/Country Details/Section 3/Icons/Vector-1.png"
  },
  {
    city: "Athens",
    desc: "The cradle of Western civilization, home to the Acropolis and vibrant city life.",
    badge: "Best Value",
    badgeStyles: "bg-[#F3E8FF] text-[#7E22CE]",
    flightsFrom: "€120",
    hotelsFrom: "€180",
    image: "/Country Details/Section 3/Images/image-1.png",
    icon: "/Country Details/Section 3/Icons/Vector-1.png"
  },
  {
    city: "Mykonos",
    desc: "A vibrant party destination with beautiful beaches and a lively waterfront.",
    badge: "Trending",
    badgeStyles: "bg-[#FCE7F3] text-[#BE185D]",
    flightsFrom: "€120",
    hotelsFrom: "€180",
    image: "/Country Details/Section 3/Images/image-2.png",
    icon: "/Country Details/Section 3/Icons/Vector-1.png"
  },
  {
    city: "Crete",
    desc: "The largest island, offering ancient ruins, mountains, and long sandy beaches.",
    badge: "Hidden Gem",
    badgeStyles: "bg-[#DCFCE7] text-[#15803D]",
    flightsFrom: "€120",
    hotelsFrom: "€180",
    image: "/Country Details/Section 3/Images/image-3.png",
    icon: "/Country Details/Section 3/Icons/Vector-1.png"
  },
];

const POPULAR_FLIGHTS = [
  {
    city: "London",
    route: "LON → ATH",
    price: "€24",
    airline: "Ryanair",
    duration: "Direct • 3h 40m",
    flag: "https://flagcdn.com/w40/gb.png",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
  },
  {
    city: "Manchester",
    route: "MAN → ATH",
    price: "€29",
    airline: "easyJet",
    duration: "Direct • 3h 55m",
    flag: "https://flagcdn.com/w40/gb.png",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80"
  },
  {
    city: "Dublin",
    route: "DUB → ATH",
    price: "€34",
    airline: "Ryanair",
    duration: "Direct • 4h 20m",
    flag: "https://flagcdn.com/w40/ie.png",
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&w=1200&q=80"
  },
  {
    city: "New York",
    route: "NYC → ATH",
    price: "€329",
    airline: "Delta",
    duration: "Direct • 9h 15m",
    flag: "https://flagcdn.com/w40/us.png",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80"
  }
];

const THINGS_TO_DO = [
  {
    title: "Oia Sunset Catamaran Cruise",
    duration: "5 Hours",
    price: "From €95",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Acropolis Guided Tour",
    duration: "2 Hours",
    price: "From €35",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Delos & Rhenia Boat Trip",
    duration: "6 Hours",
    price: "From €80",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Knossos Palace Ticket",
    duration: "Flexible",
    price: "From €18",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80"
  },
];

const HOTELS = [
  {
    name: "Grace Santorini",
    location: "Imerovigli",
    rating: "4.9/5",
    price: "€450",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Cavo Tagoo",
    location: "Mykonos Town",
    rating: "4.8/5",
    price: "€520",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Katikies Hotel",
    location: "Oia",
    rating: "4.9/5",
    price: "€480",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
  },
];

const NEARBY_COUNTRIES = [
  {
    city: "Italy",
    desc: "Immerse yourself in centuries of history, regional culinary masterpieces, and the dramatic coastlines.",
    flag: "https://flagcdn.com/w40/it.png",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    city: "Croatia",
    desc: "Discover the walled city of Dubrovnik, sparkling Adriatic waters, and pristine cascading lakes.",
    flag: "https://flagcdn.com/w40/hr.png",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    city: "Turkey",
    desc: "Where East meets West. Experience vibrant spice bazaars, ancient ruins, and fairytale balloon rides.",
    flag: "https://flagcdn.com/w40/tr.png",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    city: "Cyprus",
    desc: "Bask on sun-drenched beaches, explore legendary archaeological sites, and enjoy rich culinary traditions.",
    flag: "https://flagcdn.com/w40/cy.png",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
  },
];

/* =====================================================================
   UPDATED FAQS DATA
===================================================================== */
const FAQS = [
  { q: "When is the best time to visit Santorini?", a: "The best time to visit is during the shoulder seasons (May-June and September-October) when the weather is pleasant and the crowds are thinner." },
  { q: "How do I get around the island?", a: "The most common way to get around is by renting an ATV, scooter, or taking the local buses." },
  { q: "Is Santorini expensive for tourists?", a: "Santorini caters to all budgets, but luxury hotspots like Oia can be on the pricier side compared to other destinations." },
  { q: "What should I pack for my trip?", a: "Pack light, breathable clothing for the summer, comfortable walking shoes for ruins, swimwear, a hat, and plenty of sunscreen." },
  { q: "Do I need a visa to visit Greece?", a: "Greece is part of the Schengen Area. If you are an EU citizen or from a visa-exempt country, you do not need a visa for up to 90 days." },
  { q: "Is Greece expensive?", a: "Greece offers excellent value for money. While luxury islands can be expensive, the mainland and lesser-known islands are very affordable." },
  { q: "Do I need a visa?", a: "Please check your local government's travel advisory for the most up-to-date visa requirements for traveling to Greece." },
  { q: "Which Greek islands are the best?", a: "Santorini, Mykonos, Crete, and Rhodes are among the most popular and highly rated islands depending on your travel style." },
  { q: "How many days should I spend in Greece?", a: "A minimum of 7-10 days is recommended to comfortably see Athens and explore one or two major islands." },
  { q: "Which are the best beaches in Greece?", a: "Navagio in Zakynthos, Elafonissi in Crete, and Myrtos in Kefalonia are consistently ranked as stunning options." },
  { q: "Which destinations are best for families?", a: "Crete, Naxos, and Rhodes are incredibly family-friendly, offering calm shallow beaches and large resorts." },
  { q: "Can I island-hop in Greece?", a: "Absolutely. Greece has an extensive and reliable ferry network making it very easy to travel seamlessly between islands." },
];

/* =====================================================================
   HERO SECTION
===================================================================== */

function HeroSection() {
  return (
    <section className="relative mx-auto flex h-[681px] max-h-screen w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden bg-[#000000]">
      <Header data={headerData} />
      <div className="absolute inset-0 z-0">
        <Image
          src="/Country Details/Section 1/Images/Hero.png"
          alt="Panoramic sunset view of Oia Santorini, featuring white caldera buildings and blue domes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />
      </div>
      <div className="relative z-10 mt-[104px] mx-auto flex w-full max-w-[1440px] flex-col items-center px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px] text-center">
        <div className="mb-[12px] flex items-center justify-center rounded-full bg-[#FDDB32] px-[12px] py-[4px]">
          <span className="font-sans text-[12px] font-medium leading-[16px] tracking-[-0.12px] text-[#000000]">
            GREECE
          </span>
        </div>
        <h1 className="mb-[12px] font-sans text-[72px] font-medium leading-[72px] tracking-[-0.03em] text-[#FFFFFF] max-[768px]:text-[48px]">
          Discover Greece
        </h1>
        <p className="max-w-[700px] font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#FFFFFF] max-[768px]:text-[14px]">
          Explore ancient ruins, pristine beaches, and world-class island hopping in one of Europe's most breathtaking destinations.
        </p>
      </div>
    </section>
  );
}

/* =====================================================================
   INFO BAR SECTION
===================================================================== */

function InfoBarSection() {
  return (
    <section className="w-full bg-[#F9FBFA]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-[24px] py-[40px] px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        {INFO_BAR_DATA.map((info, i) => (
          <div key={i} className="flex items-center gap-[12px]">
            <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#FDDB32]">
              <info.icon size={18} className="text-[#000000]" />
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
        ))}
      </div>
    </section>
  );
}

/* =====================================================================
   ABOUT SECTION
===================================================================== */

function AboutSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[120px] max-[1024px]:py-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <div className="flex flex-col items-center gap-[80px] lg:flex-row">
          <div className="flex w-full max-w-[540px] flex-col gap-[24px]">
            <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#000000] max-[768px]:text-[36px]">
              About Greece
            </h2>
            <div className="flex flex-col gap-[16px]">
              <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
                Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas. Influential in ancient times, it's often called the cradle of Western civilization.
              </p>
              <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
                Athens, its capital, retains landmarks including the 5th-century B.C. Acropolis citadel with the Parthenon temple. Beaches, black sands, and party resorts like Mykonos make it a premier destination.
              </p>
            </div>
            <div className="mt-[16px] flex flex-wrap gap-[16px]">
              {["Ancient History", "Island Hopping", "Mediterranean Cuisine"].map(feat => (
                <div key={feat} className="flex items-center gap-[8px]">
                  <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#F9FBFA] border border-[#E5E7EB]">
                     <Check size={14} className="text-[#000000]" />
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
              src="/Country Details/Section 2/Images/Rectangle.png" 
              alt="Greece Coastline" 
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

function DestinationCard({ item }: { item: any }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[24px] border border-[#F3F4F6] bg-[#FFFFFF] shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-[240px] w-full shrink-0 overflow-hidden bg-neutral-100">
        <Image src={item.image} alt={item.city || item.name} fill className="object-cover transition-transform duration-700 hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-[24px]">
        <div className="mb-[16px] flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <h3 className="font-sans text-[20px] font-medium leading-[28px] tracking-[-0.4px] text-[#000000]">
              {item.city || item.name}
            </h3>
            {item.icon && (
              <div className="relative flex h-[16px] w-[24px] shrink-0 items-center justify-center">
                 <Image src={item.icon} alt="flag" fill className="object-contain" />
              </div>
            )}
          </div>
          {item.badge && (
            <div className={`rounded-full px-[12px] py-[4px] font-sans text-[12px] font-medium leading-[16px] ${item.badgeStyles}`}>
              {item.badge}
            </div>
          )}
        </div>
        <p className="mb-[24px] min-h-[60px] font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#4B5563]">
          {item.desc}
        </p>
        <div className="mb-[24px] flex flex-col items-start gap-[12px]">
          {item.flightsFrom && (
            <div className="flex items-center gap-[8px] rounded-[8px] bg-[#FEF6D8] px-[12px] py-[8px]">
              <Plane size={16} className="text-[#000000]" />
              <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000]">Flights from {item.flightsFrom}</span>
            </div>
          )}
          {item.hotelsFrom && (
            <div className="flex items-center gap-[8px] rounded-[8px] bg-[#FEF6D8] px-[12px] py-[8px]">
              <Building2 size={16} className="text-[#000000]" />
              <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000]">Hotels from {item.hotelsFrom}</span>
            </div>
          )}
        </div>
        <div className="mt-auto pt-[8px]">
          <button className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-full bg-[#000000] font-sans text-[16px] font-medium leading-[24px] tracking-[0px] text-[#FFFFFF] transition-colors hover:bg-neutral-800">
            Book Now <ArrowRight size={18} className="text-[#FFFFFF]" />
          </button>
        </div>
      </div>
    </div>
  );
}

function DestinationsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[96px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <div className="mb-[56px] flex flex-col gap-[12px]">
          <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#000000] max-[768px]:text-[32px]">
            Explore Greece's Most Popular Destinations
          </h2>
          <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#4B5563]">
            Discover top-rated cities and islands for your Mediterranean adventure.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {DESTINATIONS.map((dest, i) => (
            <DestinationCard key={i} item={dest} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   POPULAR FLIGHTS SECTION
===================================================================== */

function FlightCard({ flight }: { flight: any }) {
  return (
    <div className="group flex h-[364px] flex-col overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-[#FFFFFF] shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden bg-neutral-100">
        <Image src={flight.image} alt={flight.city} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute left-[16px] top-[16px] flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-full bg-[#FFFFFF] p-[6px] shadow-sm z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
            <Image src="/Homepage/Section 3/Icon/Airline Logo.png" alt={`${flight.airline} logo`} width={14} height={14} className="object-contain" />
            <span className="font-sans text-[12px] font-medium leading-[16px] text-[#000000]">{flight.airline}</span>
          </div>
        </div>
        <div className="flex items-center gap-[6px]">
          <Clock size={14} className="text-[#7D7D7D]" />
          <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">{flight.duration}</span>
        </div>
      </div>
      <div className="mt-auto px-[20px] pb-[20px] pt-0">
        <button className="flex h-[44px] w-full items-center justify-center gap-[8px] rounded-[12px] border border-[#E6E6E6] bg-[#FFFFFF] transition-colors duration-300 hover:border-[#FDDB32] hover:bg-[#FDDB32]">
          <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[0px] text-[#000000]">View Flights</span>
          <ArrowUpRight size={16} className="text-[#000000]" />
        </button>
      </div>
    </div>
  );
}

function PopularFlightsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[120px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <div className="mb-[48px] flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#000000] max-[768px]:text-[32px]">
            Popular Flights to <span className="text-[#FDDB32]">Greece</span>
          </h2>
          <button className="flex h-[44px] items-center gap-[6px] rounded-[12px] bg-[#FDDB32] px-[20px] py-[10px] font-sans text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-[#000000] transition-colors hover:bg-[#e5c52c]">
            Browse All Greece Routes <ArrowUpRight size={14} />
          </button>
        </div>
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {POPULAR_FLIGHTS.map((flight, i) => (
            <FlightCard key={i} flight={flight} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   THINGS TO DO SECTION
===================================================================== */

function TopThingsToDoSection() {
  return (
    <section className="w-full bg-[#000000] py-[120px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <h2 className="mb-[48px] font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#FFFFFF] max-[768px]:text-[32px]">
          Top Things To Do
        </h2>
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {THINGS_TO_DO.map((item, i) => (
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

function WhereToStaySection() {
  return (
    <section className="w-full bg-[#F9FBFA] py-[120px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <h2 className="mb-[48px] font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#000000] max-[768px]:text-[32px]">
          Where To Stay
        </h2>
        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-3">
          {HOTELS.map((hotel, i) => (
            <div key={i} className="flex flex-col rounded-[32px] bg-[#FFFFFF] p-[6px] shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-[26px]">
                <Image src={hotel.image} alt={hotel.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-[16px] p-[20px]">
                <div className="flex items-center gap-[4px]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="fill-[#F59E0B] text-[#F59E0B]" strokeWidth={0} />
                  ))}
                  <span className="ml-[4px] font-sans text-[14px] font-medium text-[#F59E0B]">{hotel.rating}</span>
                </div>
                <h3 className="font-sans text-[16px] font-medium leading-[24px] tracking-[-0.32px] text-[#000000]">{hotel.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[16px] font-medium leading-[24px] tracking-[-0.32px] text-[#000000]">
                    {hotel.price} <span className="text-[14px] font-normal tracking-[0px] text-[#7D7D7D]">/ night</span>
                  </span>
                  <button className="rounded-full bg-[#000000] px-[16px] py-[8px] font-sans text-[12px] font-medium leading-[16px] tracking-[-0.12px] text-[#FFFFFF] transition-colors hover:bg-neutral-800">
                    View Details
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

function NearbyCountryCard({ item }: { item: any }) {
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
            Book Now
            <ArrowRight size={18} className="text-current" />
          </button>
        </div>
      </div>
    </div>
  );
}

function NearbyCountriesSection() {
  return (
    <section className="w-full bg-[#000000] py-[96px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <div className="mb-[56px] flex flex-col gap-[12px]">
          <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#FFFFFF] max-[768px]:text-[32px]">
            Explore Nearby Countries
          </h2>
          <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#D1D5DB] max-w-[700px]">
            Extend your journey beyond Greece with these spectacular nearby Mediterranean jewels.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {NEARBY_COUNTRIES.map((dest, i) => (
            <NearbyCountryCard key={i} item={dest} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   TRAVEL HELP (FAQ) SECTION
===================================================================== */

function TravelHelpSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#F9F8F5] py-[120px] max-[1024px]:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[64px] lg:flex-row lg:items-start px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        
        {/* Left Col */}
        <div className="flex w-full max-w-[400px] flex-col gap-[12px] shrink-0">
          <h2 className="font-sans text-[48px] font-medium leading-[48px] tracking-[-1px] text-[#000000] max-[768px]:text-[36px]">
            Travel Help
          </h2>
          <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
            Everything you need to know before you jet off to the islands.
          </p>
        </div>

        {/* Right Col */}
        <div className="flex w-full flex-col gap-[24px]">
          {FAQS.map((faq, i) => {
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

 function NewsletterSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[80px]">
      <div className="mx-auto w-full max-w-[1440px] px-[120px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
        <div className="mx-auto flex w-full flex-col items-center justify-center rounded-[42px] bg-[#FDDB32] py-[64px] px-[64px] text-center max-[768px]:rounded-[32px] max-[768px]:py-[48px] max-[768px]:px-[24px]">
          <h2 className="font-sans text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#000000] max-[768px]:text-[32px]">
            Get Greece Travel Deals
          </h2>
          <p className="mt-[16px] max-w-[680px] font-sans text-[16px] font-normal leading-[24px] text-[#000000]">
            Sign up for our exclusive newsletter and be the first to know about cheap flights and hotel price drops for your next Greek getaway.
          </p>
          <form className="mt-[36px] flex w-full max-w-[547px] flex-col gap-[12px] sm:flex-row">
           <input
  type="email"
  placeholder="Email Address"
  className="bg-[#FFFFFF] h-[56px] flex-1 rounded-[16px] px-[24px] font-sans text-[16px] font-normal text-[#000000] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-black/5"
/>
            <button
              type="submit"
              className="flex h-[56px] shrink-0 items-center justify-center rounded-[16px] bg-[#000000] px-[32px] font-sans text-[16px] font-medium text-[#FFFFFF] transition-all hover:bg-neutral-800 active:scale-95"
            >
              Subscribe
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
      <HeroSection />
      <InfoBarSection />
      <AboutSection />
      <DestinationsSection />
      <PopularFlightsSection />
      <TopThingsToDoSection />
      <WhereToStaySection />
      <NearbyCountriesSection />
      <TravelHelpSection />
      <NewsletterSection />
      <Footer data={footerData} />
    </main>
  );
}