'use client';

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  CalendarDays,
  Users,
  Search,
  ChevronDown,
  ChevronUp,
  Star,
  Wifi,
  Coffee,
  Layers,
  Plus,
  Minus,
} from "lucide-react";

// ============================================================================
// IMPORTANT: Adjust these import paths to match your project's folder structure
// ============================================================================
import Header from "../header/header";
import Footer from "../footer/footer";
import { searchData, type SearchPageData } from "../../../lib/data/searchData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";

/* ----------------------------------------------------------------
   STATIC DATA
---------------------------------------------------------------- */

const hotelResults = [
  {
    name: "Hilton Jeddah",
    location: "Corniche Road, Jeddah",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&w=600&q=80",
    stars: 5,
    ratingLabel: "Excellent",
    rating: "4.8",
    price: "245",
    amenities: ["Free WiFi", "Breakfast"],
    popular: true,
  },
  {
    name: "Park Hyatt Jeddah",
    location: "Al Hamra District, Jeddah",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&w=600&q=80",
    stars: 5,
    ratingLabel: "Superb",
    rating: "4.9",
    price: "389",
    amenities: ["Free WiFi", "Breakfast"],
    popular: false,
  },
  {
    name: "Radisson Blu Hotel",
    location: "Al Salamah, Jeddah",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&w=600&q=80",
    stars: 5,
    ratingLabel: "Very Good",
    rating: "4.2",
    price: "156",
    amenities: ["Free WiFi", "Breakfast"],
    popular: false,
  },
  {
    name: "InterContinental Jeddah",
    location: "Corniche, Jeddah",
    image:
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&w=600&q=80",
    stars: 5,
    ratingLabel: "Excellent",
    rating: "4.6",
    price: "299",
    amenities: ["Free WiFi", "Breakfast"],
    popular: false,
  },
  {
    name: "Holiday Inn Jeddah Gateway",
    location: "An Nuzhah, Jeddah",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&w=600&q=80",
    stars: 5,
    ratingLabel: "Good",
    rating: "3.9",
    price: "112",
    amenities: ["Free WiFi", "Breakfast"],
    popular: false,
  },
  {
    name: "Movenpick Hotel Tahlia",
    location: "Jeddah",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&w=600&q=80",
    stars: 5,
    ratingLabel: "Very Good",
    rating: "4.4",
    price: "198",
    amenities: ["Free WiFi", "Breakfast"],
    popular: false,
  },
];

const sortOptions = ["Recommended", "Price (lowest)", "Guest Rating", "Stars"];

const paginationPages = ["1", "2", "3", "...", "25"];

const filterSections = [
  {
    title: "Star Rating",
    options: ["5-Star", "4-Star", "3-Star", "Budget"],
    defaultChecked: ["5-Star"],
  },
  {
    title: "Guest Rating",
    options: ["Excellent 4.5+", "Very Good 4+", "Good 3.5+", "Fair 3+"],
    defaultChecked: [] as string[],
  },
  {
    title: "Amenities",
    options: ["Free WiFi", "Swimming Pool", "Gym", "Parking", "Restaurant", "Pet Friendly"],
    defaultChecked: [] as string[],
  },
  {
    title: "Property Type",
    options: ["Hotel", "Apartment", "Resort", "Villa"],
    defaultChecked: [] as string[],
  },
  {
    title: "Where to Stay",
    options: ["City Center", "Beach", "Near Airport", "Downtown", "Suburbs"],
    defaultChecked: [] as string[],
  },
  {
    title: "Freebies",
    options: ["Free Cancellation", "Free Breakfast", "Free WiFi", "Free Parking"],
    defaultChecked: [] as string[],
  },
  {
    title: "Review Score",
    options: ["Wonderful 9+", "Very Good 8+", "Good 7+", "Pleasant 6+"],
    defaultChecked: [] as string[],
  },
];

/* ----------------------------------------------------------------
   MAIN PAGE COMPONENT
---------------------------------------------------------------- */

export default function SearchPage({ data = searchData }: { data?: SearchPageData }) {
  return (
    <main className="bg-[#F9F8F5]">
      <Header data={headerData} />
      <SearchBarSection data={data} />
      <MapPreviewSection data={data} />
      <ResultsSection data={data} />
      <Footer data={footerData} />
    </main>
  );
}

/* ----------------------------------------------------------------
   SEARCH BAR
---------------------------------------------------------------- */

function SearchBarSection({ data }: { data: SearchPageData }) {
  return (
    <section className="border-b border-black/5 bg-white pt-[100px]">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-[20px] lg:px-8">
        <div className="flex flex-col gap-[14px] rounded-[18px] border border-[#ececec] bg-white p-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] lg:flex-row lg:items-center lg:gap-0 lg:divide-x lg:divide-[#ececec] lg:p-[8px]">
          {/* Destination */}
          <div className="flex flex-1 items-center gap-[10px] px-[14px] py-[6px]">
            <MapPin size={18} className="shrink-0 text-[#7d7d7d]" />
            <div className="flex flex-col">
              {/* Body M */}
              <span className="font-sans text-[12px] font-normal leading-[1.4] text-[#7d7d7d]">
                Where are you going?
              </span>
              <input
                type="text"
                defaultValue="Jeddah, Saudi Arabia"
                className="font-sans text-[14px] font-medium leading-[1.43] text-black focus:outline-none"
              />
            </div>
          </div>

          {/* Check In */}
          <div className="flex flex-1 items-center gap-[10px] px-[14px] py-[6px]">
            <CalendarDays size={18} className="shrink-0 text-[#7d7d7d]" />
            <div className="flex flex-col">
              <span className="font-sans text-[12px] font-normal leading-[1.4] text-[#7d7d7d]">
                Check In date
              </span>
              <input
                type="text"
                defaultValue="08 Nov 2025"
                className="font-sans text-[14px] font-medium leading-[1.43] text-black focus:outline-none"
              />
            </div>
          </div>

          {/* Check Out */}
          <div className="flex flex-1 items-center gap-[10px] px-[14px] py-[6px]">
            <CalendarDays size={18} className="shrink-0 text-[#7d7d7d]" />
            <div className="flex flex-col">
              <span className="font-sans text-[12px] font-normal leading-[1.4] text-[#7d7d7d]">
                Check Out Date
              </span>
              <input
                type="text"
                defaultValue="08 Jan 2026"
                className="font-sans text-[14px] font-medium leading-[1.43] text-black focus:outline-none"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex flex-1 items-center gap-[10px] px-[14px] py-[6px]">
            <Users size={18} className="shrink-0 text-[#7d7d7d]" />
            <div className="flex flex-col">
              <span className="font-sans text-[12px] font-normal leading-[1.4] text-[#7d7d7d]">
                Guests and rooms
              </span>
              <input
                type="text"
                defaultValue="01 Adult 01 Child"
                className="font-sans text-[14px] font-medium leading-[1.43] text-black focus:outline-none"
              />
            </div>
          </div>

          {/* Search button */}
          <div className="flex items-center justify-center px-[8px] py-[6px] lg:pl-[16px]">
            <button className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#fddb32] transition-transform hover:scale-[1.05]">
              <Search size={18} className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   MAP PREVIEW
---------------------------------------------------------------- */

function MapPreviewSection({ data }: { data: SearchPageData }) {
  return (
    <section className="bg-white pb-[48px]">
      <div className="mx-auto flex w-full max-w-[1280px] justify-center px-6 lg:px-8">
        <div className="relative w-full max-w-[560px] overflow-hidden rounded-[28px] border-[6px] border-black bg-[#dceef2] shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          {/* Map surface */}
          <div className="relative h-[260px] w-full overflow-hidden">
            <svg viewBox="0 0 560 260" className="h-full w-full">
              <rect width="560" height="260" fill="#dceef2" />
              <path d="M0,0 L230,0 Q300,60 260,140 Q220,220 280,260 L0,260 Z" fill="#eef3e2" />
              <path d="M280,260 Q220,220 260,140 Q300,60 230,0 L560,0 L560,260 Z" fill="#bfe0e8" />
              {[
                [120, 70],
                [90, 150],
                [180, 190],
                [340, 60],
                [400, 120],
                [430, 200],
              ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="5" fill="#1F3B73" />
              ))}
              <circle cx="250" cy="120" r="9" fill="#fddb32" stroke="black" strokeWidth="2" />
            </svg>

            {/* Layers control */}
            <button className="absolute right-[14px] top-[14px] flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-white shadow-md">
              <Layers size={16} className="text-black" />
            </button>

            {/* Zoom controls */}
            <div className="absolute bottom-[14px] right-[14px] flex flex-col overflow-hidden rounded-[10px] bg-white shadow-md">
              <button className="flex h-[32px] w-[32px] items-center justify-center border-b border-black/10">
                <Plus size={14} className="text-black" />
              </button>
              <button className="flex h-[32px] w-[32px] items-center justify-center">
                <Minus size={14} className="text-black" />
              </button>
            </div>

            {/* Show on Map pill */}
            <button className="absolute bottom-[14px] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#1F3B73] px-[16px] py-[8px] font-sans text-[13px] font-medium text-white shadow-md">
              <MapPin size={14} />
              Show on Map
            </button>
          </div>

          {/* Selected hotel card */}
          <div className="absolute left-[14px] top-[14px] max-w-[220px] rounded-[14px] bg-white p-[12px] shadow-md">
            {/* Body M */}
            <span className="font-sans text-[11px] font-normal leading-[1.4] text-[#7d7d7d]">
              Selected hotel
            </span>
            {/* Title S */}
            <p className="mt-[2px] font-sans text-[14px] font-medium leading-[1.3] text-black">
              The Grand Plaza
            </p>
            <p className="mt-[2px] font-sans text-[11px] font-normal leading-[1.4] text-[#7d7d7d]">
              Downtown &bull; 0.8 mi from center
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   FILTERS SIDEBAR
---------------------------------------------------------------- */

function FilterSection({
  title,
  options,
  defaultChecked = [],
}: {
  title: string;
  options: string[];
  defaultChecked?: string[];
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-black/10 py-[18px]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between"
      >
        {/* Title S */}
        <span className="font-sans text-[15px] font-medium leading-[1.3] text-black">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-[#7d7d7d]" />
        ) : (
          <ChevronDown size={16} className="text-[#7d7d7d]" />
        )}
      </button>

      {open && (
        <div className="mt-[14px] flex flex-col gap-[10px]">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center gap-[10px] font-sans text-[13px] font-normal leading-[1.4] text-[#333333]"
            >
              <input
                type="checkbox"
                defaultChecked={defaultChecked.includes(option)}
                className="h-[16px] w-[16px] rounded-[4px] border-[#cccccc] text-[#fddb32] focus:ring-0"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function PriceRangeFilter() {
  const [value, setValue] = useState(1000);

  return (
    <div className="border-b border-black/10 py-[18px]">
      {/* Title S */}
      <span className="font-sans text-[15px] font-medium leading-[1.3] text-black">
        Price per night
      </span>

      <div className="mt-[16px]">
        <input
          type="range"
          min={0}
          max={1000}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="h-[4px] w-full appearance-none rounded-full bg-[#e6e6e6] accent-[#fddb32]"
        />
        <div className="mt-[10px] flex items-center justify-between font-sans text-[12px] font-normal leading-[1.4] text-[#7d7d7d]">
          <span>$0</span>
          <span>{value >= 1000 ? "$1,000+" : `$${value}`}</span>
        </div>
      </div>
    </div>
  );
}

function FiltersSidebar({ data }: { data: SearchPageData }) {
  return (
    <aside className="hidden w-[260px] shrink-0 lg:block">
      <PriceRangeFilter />
      {data.filterSections.map((section) => (
        <FilterSection
          key={section.title}
          title={section.title}
          options={section.options}
          defaultChecked={section.defaultChecked}
        />
      ))}
    </aside>
  );
}

/* ----------------------------------------------------------------
   HOTEL RESULT CARD
---------------------------------------------------------------- */

function HotelCard({ hotel }: { hotel: SearchPageData["hotelResults"][number] }) {
  return (
    <div className="flex flex-col gap-4 border-b border-black/10 py-6 sm:flex-row sm:items-center">
      {/* Image */}
      <div className="h-[160px] w-full shrink-0 overflow-hidden rounded-[16px] sm:h-[130px] sm:w-[190px]">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-[6px]">
        <div className="flex items-center gap-[2px]">
          {Array.from({ length: hotel.stars }).map((_, i) => (
            <Star key={i} size={13} className="fill-[#fddb32] text-[#fddb32]" />
          ))}
        </div>
        {/* Title L */}
        <h3 className="font-sans text-[18px] font-medium leading-[1.3] text-black">
          {hotel.name}
        </h3>
        <div className="flex items-center gap-[6px] font-sans text-[13px] font-normal leading-[1.4] text-[#777777]">
          <MapPin size={13} />
          {hotel.location}
        </div>
        <div className="mt-[6px] flex items-center gap-[14px]">
          {hotel.amenities.map((amenity) => (
            <span
              key={amenity}
              className="flex items-center gap-[6px] font-sans text-[12px] font-normal leading-[1.4] text-[#777777]"
            >
              {amenity === "Free WiFi" ? <Wifi size={13} /> : <Coffee size={13} />}
              {amenity}
            </span>
          ))}
        </div>
      </div>

      {/* Rating / Price / CTA */}
      <div className="flex shrink-0 flex-row items-center justify-between gap-4 sm:flex-col sm:items-end sm:justify-start sm:gap-[10px] sm:text-right">
        {hotel.popular && (
          <span className="font-sans text-[11px] font-medium uppercase tracking-wide text-[#7d7d7d]">
            Popular
          </span>
        )}
        <div className="flex flex-col items-end gap-[2px]">
          <span className="font-sans text-[12px] font-normal leading-[1.4] text-[#777777]">
            {hotel.ratingLabel}
          </span>
          <span className="rounded-[8px] bg-[#FFED91] px-[8px] py-[2px] font-sans text-[13px] font-medium leading-[1.4] text-black">
            {hotel.rating}
          </span>
        </div>
        <div className="flex flex-col items-end">
          {/* Display S */}
          <span className="font-sans text-[22px] font-medium leading-none text-black">
            ${hotel.price}
            <span className="text-[13px] font-normal text-[#777777]">/night</span>
          </span>
        </div>
        <Link
          href="#"
          className="flex items-center gap-1 rounded-full bg-[#fddb32] px-[18px] py-[9px] font-sans text-[13px] font-medium leading-[1.4] text-black transition-colors hover:bg-[#e5c52c]"
        >
          View Deal
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
   RESULTS SECTION
---------------------------------------------------------------- */

function ResultsSection({ data }: { data: SearchPageData }) {
  const [activeSort, setActiveSort] = useState("Recommended");
  const [activePage, setActivePage] = useState("1");

  return (
    <section className="bg-[#F9F8F5] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row">
              <FiltersSidebar data={data} />

          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex flex-col gap-4 border-b border-black/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-[18px]">
                {data.sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setActiveSort(option)}
                    className={`font-sans text-[14px] leading-[1.43] ${
                      activeSort === option
                        ? "font-medium text-black"
                        : "font-normal text-[#7d7d7d]"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <span className="font-sans text-[13px] font-normal leading-[1.4] text-[#7d7d7d]">
                Showing 248 hotels
              </span>
            </div>

            {/* Hotel list */}
            <div className="flex flex-col">
              {data.hotelResults.map((hotel, i) => (
                <HotelCard key={`${hotel.name}-${i}`} hotel={hotel} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex items-center justify-center gap-3">
              {data.paginationPages.map((page) => (
                <button
                  key={page}
                  onClick={() => page !== "..." && setActivePage(page)}
                  disabled={page === "..."}
                  className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] font-sans text-[14px] font-medium leading-[1.43] transition-colors ${
                    activePage === page
                      ? "bg-[#fddb32] text-black"
                      : "border border-black/10 bg-white text-black hover:border-black/30"
                  } ${page === "..." ? "cursor-default border-transparent bg-transparent text-black/40 hover:border-transparent" : ""}`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}