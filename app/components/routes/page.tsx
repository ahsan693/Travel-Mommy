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
   MAIN PAGE COMPONENT
---------------------------------------------------------------- */

export default function RoutesPage({ data = routesData }: { data?: RoutesPageData }) {
  return (
    <main className="bg-[#0A0A0A]">
      <Header data={headerData} />
      <Hero data={data.hero} />
      <RoutesResultsSection routes={data.routeResults} pages={data.paginationPages} results={data.results} />
      <Footer data={footerData} />
    </main>
  );
}

/* ----------------------------------------------------------------
   HERO & FILTER WIDGET
---------------------------------------------------------------- */

function FilterWidget({ data }: { data: RoutesPageData["hero"]["filter"] }) {
  return (
    <div className="w-full rounded-[24px] bg-[#f9fbf5] p-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-[28px]">
      <div className="flex flex-col gap-[20px] lg:flex-row lg:items-end lg:gap-[16px]">
        {data.fields.map((field) => (
          <div key={field.id} className="flex flex-1 flex-col gap-[8px]">
            <label htmlFor={field.id} className="font-sans text-[14px] font-medium leading-[1.43] text-black">
              {field.label}
            </label>
            <input
              id={field.id}
              type="text"
              defaultValue={field.defaultValue}
              placeholder={field.placeholder}
              className="h-[52px] w-full rounded-[14px] border border-[#e6e6e6] bg-white px-[16px] font-sans text-[14px] font-normal leading-[1.43] text-black placeholder:text-[#767676]"
            />
          </div>
        ))}

        {/* Filter Button */}
        {/* Title S */}
        <button type="button" aria-label={data.buttonLabel} className="flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-[14px] bg-[#fddb32] px-[24px] font-sans text-[14px] font-medium leading-[1.43] text-black transition-transform hover:scale-[1.02]">
          {data.buttonIcon === "search" && <Search size={16} className="text-black" />}
          {data.buttonLabel}
        </button>
      </div>
    </div>
  );
}

function Hero({ data }: { data: RoutesPageData["hero"] }) {
  return (
    <section className="relative flex flex-col items-center overflow-hidden pb-[64px] pt-[130px] lg:pb-[80px] lg:pt-[160px]">
      <div className="absolute inset-0 z-0">
        <img
          src={data.image}
          alt={data.imageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#0A0A0A]" />
      </div>

      <div className="relative z-10 flex w-full max-w-[1280px] flex-col items-center px-6 text-center lg:px-8">
        {/* Display XL */}
        <h1 className="text-page-h1 font-sans text-white lg:whitespace-nowrap lg:text-[48px] lg:leading-[48px]">
          {data.title}
        </h1>

        {/* Body M */}
        <p className="mt-[20px] max-w-[920px] font-sans text-[14px] font-normal leading-[1.6] text-white/85 sm:text-[16px]">
          {data.description}
        </p>

        <div className="mt-[40px] w-full max-w-[900px]">
          <FilterWidget data={data.filter} />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   ROUTE RESULT CARD
---------------------------------------------------------------- */

function RouteCard({ route, content }: { route: RoutesPageData["routeResults"][number]; content: RoutesPageData["results"] }) {
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
          <span className="mt-[6px] flex items-center gap-[4px] font-sans text-[13px] font-normal leading-[1.43] text-[#777777]">
            <span aria-hidden="true" className="inline-flex h-[16px] w-[20px] items-center justify-center text-[14px] leading-none font-['Segoe_UI_Emoji','Apple_Color_Emoji',sans-serif]">
              {route.originFlag}
            </span>
            <span>{route.originCity}</span>
          </span>
        </div>

        <div className="flex flex-1 items-center px-3">
          <span className="h-px flex-1 bg-[#d9d9d9]" />
          {content.routeIcon === "plane" && <Plane size={16} className="mx-2 shrink-0 -rotate-0 text-[#7d7d7d]" />}
          <span className="h-px flex-1 bg-[#d9d9d9]" />
        </div>

        <div className="flex flex-col items-end">
          {/* Title L */}
          <span className="font-sans text-[22px] font-medium leading-none text-black">
            {route.destCode}
          </span>
          {/* Body M */}
          <span className="mt-[6px] flex items-center justify-end gap-[4px] font-sans text-[13px] font-normal leading-[1.43] text-[#777777]">
            <span>{route.destCity}</span>
            <span aria-hidden="true" className="inline-flex h-[16px] w-[20px] items-center justify-center text-[14px] leading-none font-['Segoe_UI_Emoji','Apple_Color_Emoji',sans-serif]">
              {route.destFlag}
            </span>
          </span>
        </div>
      </div>

      {/* Airline / Duration */}
      <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
        <div className="flex flex-col gap-[6px]">
          {/* Body M */}
          <span className="font-sans text-[12px] font-normal leading-[1.43] text-[#777777]">
            {content.airlineLabel}
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
            {content.durationLabel}
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
            {content.priceLabel}
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
          {content.bookButtonLabel}
        </Link>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
   ROUTES RESULTS SECTION
---------------------------------------------------------------- */

function RoutesResultsSection({ routes, pages, results }: { routes: RoutesPageData["routeResults"]; pages: string[]; results: RoutesPageData["results"] }) {
  const [activePage, setActivePage] = useState("1");
  const [sortOption, setSortOption] = useState<"recommended" | "lowest-price">("recommended");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const displayedRoutes = sortOption === "lowest-price"
    ? [...routes].sort((firstRoute, secondRoute) => (
        Number(firstRoute.price.replace(/,/g, "")) - Number(secondRoute.price.replace(/,/g, ""))
      ))
    : routes;

  return (
    <section className="bg-[#0A0A0A] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            {/* Title L */}
            <h2 className="font-sans text-[24px] font-medium leading-none text-white">
              {results.title}
            </h2>
            {/* Body M */}
            <p className="mt-[8px] font-sans text-[14px] font-normal leading-[1.43] text-white/60">
              {results.description}
            </p>
          </div>

          <div className="flex items-center gap-[10px]">
            {/* Body M */}
            <span className="font-sans text-[14px] font-normal leading-[1.43] text-white/60">
              {results.sortLabel}
            </span>
            <div className="relative">
              <button
                type="button"
                aria-label="Sort routes"
                aria-haspopup="listbox"
                aria-expanded={isSortMenuOpen}
                onClick={() => setIsSortMenuOpen((isOpen) => !isOpen)}
                className="flex items-center gap-2 rounded-full bg-[#1a1a1a] px-4 py-2 font-sans text-[14px] font-medium leading-[1.43] text-white"
              >
                {sortOption === "lowest-price" ? results.sortValue : results.sortOptions[0].label}
                <ChevronDown size={14} aria-hidden="true" />
              </button>
              {isSortMenuOpen && (
                <div role="listbox" aria-label="Sort routes by" className="absolute right-0 top-[calc(100%+8px)] z-20 min-w-[160px] rounded-[12px] bg-[#1a1a1a] p-1 shadow-lg">
                  {results.sortOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      role="option"
                      aria-selected={sortOption === option.value}
                      onClick={() => {
                        setSortOption(option.value);
                        setIsSortMenuOpen(false);
                      }}
                      className="block w-full rounded-[8px] px-3 py-2 text-left font-sans text-[14px] text-white hover:bg-white/10"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedRoutes.map((route, i) => (
            <RouteCard key={`${route.originCode}-${route.destCode}-${i}`} route={route} content={results} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center gap-3">
          {pages.map((page) => (
            <button
              key={page}
              type="button"
              aria-label={`Go to page ${page}`}
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