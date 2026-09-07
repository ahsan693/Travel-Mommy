'use client';

import { useState } from "react";
import Link from "next/link";
import {
  Plane,
  Search,
  ChevronDown,
} from "lucide-react";

// ============================================================================
// IMPORTANT: Adjust these import paths to match your project's folder structure
// ============================================================================
import Header from "../header/header";
import Footer from "../footer/footer";
import { routesData, type RoutesPageData } from "../../../lib/data/routesData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";

/* ----------------------------------------------------------------
   STATIC DATA
---------------------------------------------------------------- */

const routeResults = [
  {
    originCode: "LHR",
    originFlag: "🇬🇧",
    originCity: "London",
    destCode: "JFK",
    destFlag: "🇺🇸",
    destCity: "New York",
    airlineCode: "BA",
    airlineName: "British Airways",
    airlineColor: "#1F3B73",
    duration: "7h 55m",
    price: "540",
  },
  {
    originCode: "DXB",
    originFlag: "🇦🇪",
    originCity: "Dubai",
    destCode: "SIN",
    destFlag: "🇸🇬",
    destCity: "Singapore",
    airlineCode: "EK",
    airlineName: "Emirates",
    airlineColor: "#B7202E",
    duration: "7h 30m",
    price: "620",
  },
  {
    originCode: "CDG",
    originFlag: "🇫🇷",
    originCity: "Paris",
    destCode: "NRT",
    destFlag: "🇯🇵",
    destCity: "Tokyo",
    airlineCode: "AF",
    airlineName: "Air France",
    airlineColor: "#002157",
    duration: "13h 15m",
    price: "890",
  },
  {
    originCode: "DUB",
    originFlag: "🇮🇪",
    originCity: "Dublin",
    destCode: "BER",
    destFlag: "🇩🇪",
    destCity: "Berlin",
    airlineCode: "FR",
    airlineName: "Ryanair",
    airlineColor: "#073590",
    duration: "2h 15m",
    price: "45",
  },
  {
    originCode: "IST",
    originFlag: "🇹🇷",
    originCity: "Istanbul",
    destCode: "LHR",
    destFlag: "🇬🇧",
    destCity: "London",
    airlineCode: "TK",
    airlineName: "Turkish Airlines",
    airlineColor: "#C8102E",
    duration: "4h 10m",
    price: "210",
  },
  {
    originCode: "LAX",
    originFlag: "🇺🇸",
    originCity: "Los Angeles",
    destCode: "SYD",
    destFlag: "🇦🇺",
    destCity: "Sydney",
    airlineCode: "AA",
    airlineName: "American Airlines",
    airlineColor: "#003468",
    duration: "15h 05m",
    price: "1,100",
  },
  {
    originCode: "FRA",
    originFlag: "🇩🇪",
    originCity: "Frankfurt",
    destCode: "BOM",
    destFlag: "🇮🇳",
    destCity: "Mumbai",
    airlineCode: "LH",
    airlineName: "Lufthansa",
    airlineColor: "#05164D",
    duration: "8h 20m",
    price: "730",
  },
  {
    originCode: "DOH",
    originFlag: "🇶🇦",
    originCity: "Doha",
    destCode: "CPT",
    destFlag: "🇿🇦",
    destCity: "Cape Town",
    airlineCode: "QR",
    airlineName: "Qatar Airways",
    airlineColor: "#5C0F3E",
    duration: "10h 40m",
    price: "810",
  },
  {
    originCode: "AMS",
    originFlag: "🇳🇱",
    originCity: "Amsterdam",
    destCode: "NBO",
    destFlag: "🇰🇪",
    destCity: "Nairobi",
    airlineCode: "KL",
    airlineName: "KLM",
    airlineColor: "#00A1DE",
    duration: "8h 50m",
    price: "670",
  },
  {
    originCode: "AUH",
    originFlag: "🇦🇪",
    originCity: "Abu Dhabi",
    destCode: "FCO",
    destFlag: "🇮🇹",
    destCity: "Rome",
    airlineCode: "EY",
    airlineName: "Etihad",
    airlineColor: "#B08D57",
    duration: "6h 25m",
    price: "440",
  },
  {
    originCode: "ZRH",
    originFlag: "🇨🇭",
    originCity: "Zurich",
    destCode: "YUL",
    destFlag: "🇨🇦",
    destCity: "Montreal",
    airlineCode: "LX",
    airlineName: "SWISS",
    airlineColor: "#E4032E",
    duration: "8h 35m",
    price: "590",
  },
  {
    originCode: "MAD",
    originFlag: "🇪🇸",
    originCity: "Madrid",
    destCode: "MEX",
    destFlag: "🇲🇽",
    destCity: "Mexico City",
    airlineCode: "IB",
    airlineName: "Iberia",
    airlineColor: "#D8112D",
    duration: "11h 45m",
    price: "780",
  },
];

const paginationPages = routesData.paginationPages;

/* ----------------------------------------------------------------
   MAIN PAGE COMPONENT
---------------------------------------------------------------- */

export default function RoutesPage({ data = routesData }: { data?: RoutesPageData }) {
  return (
    <main className="bg-[#0A0A0A]">
      <Header data={headerData} />
      <Hero />
      <RoutesResultsSection routes={data.routeResults} pages={data.paginationPages} />
      <Footer data={footerData} />
    </main>
  );
}

/* ----------------------------------------------------------------
   HERO & FILTER WIDGET
---------------------------------------------------------------- */

function FilterWidget() {
  return (
    <div className="w-full rounded-[24px] bg-[#f9fbf5] p-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-[28px]">
      <div className="flex flex-col gap-[20px] lg:flex-row lg:items-end lg:gap-[16px]">
        {/* Origin */}
        <div className="flex flex-1 flex-col gap-[8px]">
          {/* Title S */}
          <label className="font-sans text-[14px] font-medium leading-[1.43] text-black">
            Origin
          </label>
          <input
            type="text"
            defaultValue="London LHR"
            placeholder="Where from?"
            className="h-[52px] w-full rounded-[14px] border border-[#e6e6e6] bg-white px-[16px] font-sans text-[14px] font-normal leading-[1.43] text-black placeholder:text-[#7d7d7d] focus:outline-none"
          />
        </div>

        {/* Destination */}
        <div className="flex flex-1 flex-col gap-[8px]">
          {/* Title S */}
          <label className="font-sans text-[14px] font-medium leading-[1.43] text-black">
            Destination
          </label>
          <input
            type="text"
            placeholder="Where to?"
            className="h-[52px] w-full rounded-[14px] border border-[#e6e6e6] bg-white px-[16px] font-sans text-[14px] font-normal leading-[1.43] text-black placeholder:text-[#7d7d7d] focus:outline-none"
          />
        </div>

        {/* Airline */}
        <div className="flex flex-1 flex-col gap-[8px]">
          {/* Title S */}
          <label className="font-sans text-[14px] font-medium leading-[1.43] text-black">
            Airline
          </label>
          <input
            type="text"
            placeholder="All Carriers"
            className="h-[52px] w-full rounded-[14px] border border-[#e6e6e6] bg-white px-[16px] font-sans text-[14px] font-normal leading-[1.43] text-black placeholder:text-[#7d7d7d] focus:outline-none"
          />
        </div>

        {/* Filter Button */}
        {/* Title S */}
        <button className="flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-[14px] bg-[#fddb32] px-[24px] font-sans text-[14px] font-medium leading-[1.43] text-black transition-transform hover:scale-[1.02]">
          <Search size={16} className="text-black" />
          Filter Routes
        </button>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden pb-[64px] pt-[130px] lg:pb-[80px] lg:pt-[160px]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&w=1920&q=80"
          alt="Clouds at sunset seen from above"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#0A0A0A]" />
      </div>

      <div className="relative z-10 flex w-full max-w-[900px] flex-col items-center px-6 text-center lg:px-8">
        {/* Display XL */}
        <h1 className="font-sans text-[44px] font-medium leading-[1.05] text-white sm:text-[64px] sm:leading-[1.02]">
          Compare Flight Routes Worldwide
        </h1>

        {/* Body M */}
        <p className="mt-[20px] max-w-[620px] font-sans text-[14px] font-normal leading-[1.6] text-white/85 sm:text-[16px]">
          Search routes by departure airport, destination or airline. Compare prices from hundreds of airlines and book with trusted travel partners.
        </p>

        <div className="mt-[40px] w-full max-w-[900px]">
          <FilterWidget />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   ROUTE RESULT CARD
---------------------------------------------------------------- */

function RouteCard({ route }: { route: (typeof routeResults)[number] }) {
  return (
    <div className="flex flex-col rounded-[20px] border border-white/10 bg-[#f9fbf5] p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
      {/* Route header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col items-start">
          {/* Title L */}
          <span className="font-sans text-[22px] font-medium leading-none text-black">
            {route.originCode}
          </span>
          {/* Body M */}
          <span className="mt-[6px] font-sans text-[13px] font-normal leading-[1.43] text-[#777777]">
            {route.originFlag} {route.originCity}
          </span>
        </div>

        <div className="flex flex-1 items-center px-3">
          <span className="h-px flex-1 bg-[#d9d9d9]" />
          <Plane size={16} className="mx-2 shrink-0 -rotate-0 text-[#7d7d7d]" />
          <span className="h-px flex-1 bg-[#d9d9d9]" />
        </div>

        <div className="flex flex-col items-end">
          {/* Title L */}
          <span className="font-sans text-[22px] font-medium leading-none text-black">
            {route.destCode}
          </span>
          {/* Body M */}
          <span className="mt-[6px] font-sans text-[13px] font-normal leading-[1.43] text-[#777777]">
            {route.destFlag} {route.destCity}
          </span>
        </div>
      </div>

      {/* Airline / Duration */}
      <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
        <div className="flex flex-col gap-[6px]">
          {/* Body M */}
          <span className="font-sans text-[12px] font-normal leading-[1.43] text-[#777777]">
            Airline
          </span>
          <div className="flex items-center gap-[8px]">
            <span
              className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full text-[9px] font-medium text-white"
              style={{ backgroundColor: route.airlineColor }}
            >
              {route.airlineCode}
            </span>
            {/* Title S */}
            <span className="font-sans text-[14px] font-medium leading-[1.43] text-black">
              {route.airlineName}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-[6px]">
          {/* Body M */}
          <span className="font-sans text-[12px] font-normal leading-[1.43] text-[#777777]">
            Duration
          </span>
          {/* Title S */}
          <span className="font-sans text-[14px] font-medium leading-[1.43] text-black">
            {route.duration}
          </span>
        </div>
      </div>

      {/* Price / CTA */}
      <div className="mt-6 flex items-end justify-between border-t border-black/10 pt-4">
        <div>
          {/* Body M */}
          <span className="block font-sans text-[13px] font-normal leading-[1.43] text-[#777777]">
            From
          </span>
          {/* Display S */}
          <span className="font-sans text-[26px] font-medium leading-none text-black">
            ${route.price}
          </span>
        </div>
        {/* Title S */}
        <Link
          href="#"
          className="rounded-full bg-[#fddb32] px-6 py-2.5 font-sans text-[14px] font-medium leading-[1.43] text-black transition-colors hover:bg-[#e5c52c]"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
   ROUTES RESULTS SECTION
---------------------------------------------------------------- */

function RoutesResultsSection({ routes = routeResults, pages = paginationPages }: { routes?: typeof routeResults; pages?: string[] }) {
  const [activePage, setActivePage] = useState("1");

  return (
    <section className="bg-[#0A0A0A] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            {/* Title L */}
            <h2 className="font-sans text-[24px] font-medium leading-none text-white">
              124 Routes Found
            </h2>
            {/* Body M */}
            <p className="mt-[8px] font-sans text-[14px] font-normal leading-[1.43] text-white/60">
              Showing top results for international connections
            </p>
          </div>

          <div className="flex items-center gap-[10px]">
            {/* Body M */}
            <span className="font-sans text-[14px] font-normal leading-[1.43] text-white/60">
              Sort by:
            </span>
            <button className="flex items-center gap-2 rounded-full bg-[#1a1a1a] px-4 py-2 font-sans text-[14px] font-medium leading-[1.43] text-white">
              Lowest Price
              <ChevronDown size={14} />
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route, i) => (
            <RouteCard key={`${route.originCode}-${route.destCode}-${i}`} route={route} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center gap-3">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => page !== "..." && setActivePage(page)}
              disabled={page === "..."}
              // Title S
              className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
                activePage === page
                  ? "bg-[#fddb32] text-black"
                  : "border border-white/15 bg-transparent text-white hover:border-white/40"
              } ${page === "..." ? "cursor-default border-transparent text-white/40 hover:border-transparent" : ""}`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}