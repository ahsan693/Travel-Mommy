"use client";
import Header from "../header/header";
import Footer from "../footer/footer";
import { cityData, type CityPageData } from "../../../lib/data/cityData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Palette sampled directly from the source PDF (do not "round" these */
/*  to the nearest Tailwind default — they are intentionally custom)   */
/* ------------------------------------------------------------------ */
const YELLOW = "#FDDB32"; // page / accent yellow
const CREAM = "#F9F8F5"; // header pill + flight-card background
const PINK = "#FBBDEA"; // hotel card 1
const PEACH = "#FFC796"; // hotel card 2
const PALE_YELLOW = "#FFED91"; // hotel card 3

/* Static content for this page is provided by `lib/data/cityData.ts` and
   passed into the component via the `data` prop to avoid hardcoded copy
   and image links inside the component file. */

/* ------------------------------------------------------------------ */
/*  Icons (inline, no external icon package required)                  */
/* ------------------------------------------------------------------ */

const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const ChevronRight = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
  </svg>
);

const HomeIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 11.5 12 4l9 7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
  </svg>
);

const Star = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.5l2.9 6.06 6.6.77-4.86 4.5 1.28 6.6L12 17.06 6.08 20.4l1.28-6.6-4.86-4.5 6.6-.77L12 2.5z" />
  </svg>
);

const PlusMinus = ({ open, className = "" }: { open: boolean; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path strokeLinecap="round" d="M5 12h14" />
    {!open && <path strokeLinecap="round" d="M12 5v14" />}
  </svg>
);

const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M13.8 8.5h-1.4c-.7 0-1.2.5-1.2 1.2V11h2.5l-.3 2.2h-2.2V21" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M11.5 7v7.2a2 2 0 1 1-1.4-1.9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.5 7.2c.3 1.3 1.3 2.3 2.6 2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Small reusable bits                                                */
/* ------------------------------------------------------------------ */

function Logo({ color = "#111111", size = "text-2xl" }: { color?: string; size?: string }) {
  return (
    <div
      className={`leading-[0.8] ${size}`}
      style={{ color, fontFamily: "'Brush Script MT','Segoe Script',cursive" }}
    >
      <div>Travel</div>
      <div className="-mt-1">Mommy</div>
    </div>
  );
}

function SectionHeading({
  title,
  subtitle,
  action,
  dark,
}: {
  title: string;
  subtitle?: string;
  action?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-8 flex items-start justify-between gap-6">
      <div>
        <h2 className={`text-3xl font-medium tracking-[0px] sm:text-[2.25rem] ${dark ? "text-white" : "text-gray-900"}`}>
          {title}
        </h2>
        {subtitle && <p className={`mt-2 text-sm ${dark ? "text-gray-300" : "text-gray-500"}`}>{subtitle}</p>}
      </div>
      {action && (
        <button
          className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:brightness-95"
          style={{ backgroundColor: YELLOW }}
        >
          {action}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}

function ArrowBadge() {
  return (
    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm">
      <ArrowUpRight className="h-3.5 w-3.5 text-gray-700" />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function City({ data = cityData }: { data?: CityPageData }) {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set(data.faqs.map((_, i) => i)));

  const toggleFaq = (i: number) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      {/* ============================= HERO (full-bleed yellow band) ============================= */}
      <section style={{ backgroundColor: YELLOW }} className="pb-14">
        {/* header */}
        <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
          <div className="flex items-center justify-between rounded-full px-6 py-3.5" style={{ backgroundColor: CREAM }}>
            <Logo color="#111111" size="text-[1.6rem]" />
            <nav className="hidden items-center gap-8 text-[15px] font-medium text-gray-800 md:flex">
              {data.navLinks.map((link) => (
                <a key={link} href="#" className="transition-colors hover:text-gray-950">
                  {link}
                </a>
              ))}
            </nav>
            <button
              className="flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:brightness-95"
              style={{ backgroundColor: YELLOW }}
            >
              Search Deals
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* card + image row */}
        <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
          <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-center">
            {/* white info card */}
            <div className="order-2 rounded-[28px] bg-white p-8 shadow-sm md:order-1 md:w-[380px] md:shrink-0 md:p-10">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                <HomeIcon className="h-4 w-4 text-gray-700" />
                <ChevronRight className="h-3 w-3 text-gray-400" />
                <span className="font-medium text-gray-900">Destinations</span>
                <ChevronRight className="h-3 w-3 text-gray-400" />
                <span>Marseille, France</span>
              </div>

              <h1 className="mt-10 text-4xl font-medium text-gray-900 sm:text-[2.75rem]">Marseille, Spain</h1>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                Discover Marseille&apos;s historic Old Port, Mediterranean coastline, vibrant food scene and
                nearby beaches. Compare flights, hotels and travel deals before planning your trip.
              </p>
            </div>

            {/* hero image */}
            <div className="order-1 h-[280px] w-full overflow-hidden rounded-[28px] md:order-2 md:h-[420px] md:flex-1">
              <img
                src="https://images.unsplash.com/photo-1596395463695-8a0d9b1becd6?w=1600&q=80"
                alt="Marseille Old Port"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* stats row — plain text, no card, no dividers */}
        <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-gray-800">Flights from</p>
              <p className="mt-1 text-xl font-medium text-gray-900">€49/person</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Hotels from</p>
              <p className="mt-1 text-xl font-medium text-gray-900">€89/night</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Best time</p>
              <p className="mt-1 text-xl font-medium text-gray-900">May – September</p>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ===================== COMPARE FLIGHTS ===================== */}
        <section className="py-16">
          <SectionHeading
            title="Compare Flights to Marseille"
            subtitle="Find the best neighbourhood based on your travel style."
            action="View All Routes"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.flightRoutes.map((f, i) => {
              const featured = i === 0;
              return (
                <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: CREAM }}>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                    <span className="text-base leading-none">{f.flag}</span>
                    <span>{f.route}</span>
                  </div>
                  <p className="mt-5 text-2xl font-medium" style={{ color: "#C79A00" }}>
                    From {f.price}
                  </p>
                  <p className="mt-2 text-xs text-gray-500">Direct • {f.duration}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{f.airline}</p>
                  <button
                    className={`mt-5 w-full rounded-full py-2.5 text-xs font-medium transition-colors ${
                      featured ? "text-gray-900" : "border border-gray-300 bg-white text-gray-800 hover:border-gray-400"
                    }`}
                    style={featured ? { backgroundColor: YELLOW } : undefined}
                  >
                    Compare Prices
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== WHERE TO STAY ===================== */}
        <section className="py-16">
          <SectionHeading
            title="Where to Stay in Spain"
            subtitle="Find the best neighbourhood based on your travel style."
            action="Compare Hotels"
          />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {data.neighbourhoods.map((n) => (
              <div key={n.name} className="group cursor-pointer">
                <div className="relative h-40 overflow-hidden rounded-2xl bg-gray-100 sm:h-48">
                  <img
                    src={n.img}
                    alt={n.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <ArrowBadge />
                </div>
                <p className="mt-3 text-sm font-medium text-gray-900">{n.name}</p>
                <p className="mt-0.5 text-xs leading-snug text-gray-500">{n.caption}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ===================== THINGS TO DO (dark) ===================== */}
      <section className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Things to Do in Spain" action="Popular Attractions" dark />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {data.articles.map((a, i) => (
              <div key={i} className="cursor-pointer">
                <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-72">
                  <img src={a.img} alt={a.title} className="h-full w-full object-cover" />
                  <ArrowBadge />
                </div>
                <p className="mt-4 text-xs font-medium text-gray-400">{a.date}</p>
                <p className="mt-1 text-lg font-medium text-white">{a.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ===================== POPULAR HOTELS ===================== */}
        <section className="py-16">
          <SectionHeading title="Popular Hotels" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {data.hotels.map((h, i) => (
              <div key={i} className="overflow-hidden rounded-[24px] p-3" style={{ backgroundColor: h.bg }}>
                <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                  <img src={h.img} alt={h.name} className="h-full w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium text-gray-800 shadow-sm">
                    Popular
                  </span>
                  <ArrowBadge />
                </div>
                <div className="px-2 pb-2 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5" style={{ color: "#1a1a1a" }}>
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5" />
                      ))}
                    </div>
                    <a href="#" className="flex items-center gap-1 text-xs font-medium text-gray-900 hover:opacity-70">
                      {h.cta}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>

                  <p className="mt-3 text-base font-medium text-gray-900">{h.name}</p>
                  <p className="text-xs text-gray-600">{h.city}</p>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {h.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-medium text-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-lg font-medium text-gray-900">
                    From ${h.price} <span className="text-xs font-medium text-gray-600">/ night</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== NEARBY DESTINATIONS ===================== */}
        <section className="py-16">
          <SectionHeading title="Nearby Destinations" action="Compare Hotels" />
          <div className="grid grid-cols-3 gap-5">
            {data.nearby.map((n) => (
              <div key={n.name} className="group cursor-pointer">
                <div className="relative h-36 overflow-hidden rounded-2xl bg-gray-100 sm:h-44">
                  <img
                    src={n.img}
                    alt={n.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <ArrowBadge />
                </div>
                <p className="mt-3 text-sm font-medium text-gray-900">{n.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== WEATHER ===================== */}
        <section className="py-16">
          <h2 className="mb-8 text-3xl font-medium tracking-[0px] text-gray-900 sm:text-[2.25rem]">
            Weather In Spain
          </h2>
          <div className="rounded-[28px] p-8 sm:p-10" style={{ backgroundColor: YELLOW }}>
            {/* row 1 */}
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {data.weatherRow.map((w) => (
                <div key={`r1-${w.month}`} className="rounded-2xl px-3 py-4 text-center" style={{ backgroundColor: CREAM }}>
                  <p className="text-xs font-medium text-gray-500">{w.month}</p>
                  <p className="mt-1 text-base font-medium text-gray-900">{w.temp}</p>
                </div>
              ))}
            </div>
            {/* row 2 — duplicated exactly as it appears in the source PDF */}
            <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {data.weatherRow.map((w) => (
                <div key={`r2-${w.month}`} className="rounded-2xl px-3 py-4 text-center" style={{ backgroundColor: CREAM }}>
                  <p className="text-xs font-medium text-gray-500">{w.month}</p>
                  <p className="mt-1 text-base font-medium text-gray-900">{w.temp}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-black/10 pt-8">
              <p className="text-sm font-medium text-gray-900">
                Spain&apos;s a sunshine superstar, with something for every season:
              </p>

              <div className="mt-4 space-y-3">
                {data.seasons.map((s) => (
                  <p key={s.name} className="flex gap-2 text-sm leading-relaxed text-gray-800">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
                    <span>
                      <span className="font-medium">
                        {s.name} – {s.range}.
                      </span>{" "}
                      {s.text}
                    </span>
                  </p>
                ))}
              </div>

              <p className="mt-6 text-sm font-medium text-gray-900">
                ☀️ Top Tip: The Med coast = dry heat, the north west = breezier and cooler.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <section className="py-16">
          <h2 className="mb-10 text-center text-3xl font-medium tracking-[0px] text-gray-900 sm:text-[2.25rem]">
            Frequently Asked
            <br />
            Questions
          </h2>
          <div className="mx-auto max-w-3xl divide-y divide-gray-100 border-t border-b border-gray-100">
            {data.faqs.map((f, i) => {
              const open = openFaqs.has(i);
              return (
                <div key={i}>
                  <button onClick={() => toggleFaq(i)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
                    <span className="text-sm font-medium text-gray-900 sm:text-base">{f.q}</span>
                    <PlusMinus open={open} className="h-4 w-4 shrink-0 text-gray-500" />
                  </button>
                  {open && <p className="pb-5 text-sm leading-relaxed text-gray-500">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* ===================== NEWSLETTER CTA ===================== */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-[28px] px-8 py-14 text-center" style={{ backgroundColor: YELLOW }}>
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-medium text-gray-900">
            Let&apos;s go on a trip!
          </span>
          <h2 className="mt-4 text-3xl font-medium text-gray-900 sm:text-[2.25rem]">Never Miss a Travel Deal</h2>
          <p className="mt-2 text-sm text-gray-800">Receive flight deals, hotel offers and destination inspiration.</p>
          <form className="mx-auto mt-6 flex max-w-md items-center gap-2 rounded-full bg-white p-1.5 shadow-sm">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full flex-1 bg-transparent px-4 py-2 text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
            <button type="submit" className="shrink-0 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800">
              Get Deals
            </button>
          </form>
        </div>
      </section>

      <Footer data={footerData} />
    </div>
  );
}
