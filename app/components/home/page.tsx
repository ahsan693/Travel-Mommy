'use client';

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { homeData, type HomePageData } from "../../../lib/data/homeData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";
import { FlightList, useFlightViewModel } from "../../../lib/features/flights";
import type { FlightAvailability } from "../../../lib/features/flights/types/flight";

function Hero({ data }: { data: HomePageData["hero"] }) {
  return (
    <section className="relative overflow-hidden bg-black py-24 lg:min-h-[820px] lg:py-32">
      <Image src={data.image} alt={data.imageAlt} fill priority className="object-cover opacity-75" />
      <div className="relative mx-auto max-w-[1280px] px-5 text-white lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:items-end">
        <div className="flex min-w-0 flex-col gap-10">
          <div className="max-w-[900px]">
            <h1 className="text-page-h1">
              {data.title.split("\n").map((line) => <span key={line} className="block whitespace-nowrap">{line}</span>)}
            </h1>
            <p className="mt-6 max-w-[360px] text-sm leading-5">{data.description}</p>
            <button className="mt-5 flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm text-black">{data.cta} <ArrowUpRight size={15} /></button>
          </div>
        </div>
        <div className="flex min-w-0 flex-col items-start gap-[18px] lg:items-end">
          <div className="flex items-end gap-[14px]">
            <div className="flex shrink-0 items-center">
              {data.reviewerImages.map((src, index) => (
                <div key={src} className={`flex size-[36px] items-center justify-center rounded-full bg-white p-[2px] ${index > 0 ? "-ml-4" : ""}`} style={{ zIndex: 40 - index * 10 }}>
                  <Image src={src} alt={`Reviewer ${index + 1}`} width={32} height={32} className="size-[32px] shrink-0 rounded-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center text-left">
              <div className="flex items-center gap-[8px]">
                <div className="flex gap-px text-[#FDDB32]">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={11} fill="currentColor" strokeWidth={0} />)}
                </div>
                <div className="flex items-baseline gap-[4px]"><span className="text-[16px] font-medium leading-[1.5] text-white">4.9</span><span className="text-[14px] leading-[1.43] text-white/90">/ 5</span></div>
              </div>
              <p className="mt-[2px] w-[215px] text-[14px] font-medium leading-[1.43] text-white">{data.reviewText}</p>
            </div>
          </div>
          <h2 className="text-page-h1 text-white lg:text-right">
            {data.rightHeading.map((line) => <span key={line} className="block">{line}</span>)}
          </h2>
        </div>
        </div>
      </div>
    </section>
  );
}

function WhyCompare({ data }: { data: HomePageData["whyCompare"] }) {
  return (
    <section className="flex flex-col bg-black px-5 py-16 text-white lg:px-[80px] lg:py-[160px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[24px] lg:px-[32px]">
        <h2 className="text-3xl font-[570] lg:text-[48px] lg:leading-[48px] lg:tracking-[-1px]">
          {data.title} <span>{data.highlightedTitle}</span>
        </h2>
        <p className="max-w-[1216px] text-sm font-[380] leading-[24px] lg:text-[16px]">
          {data.description}
        </p>
      </div>
    </section>
  );
}

function openFlightSearch(result: FlightAvailability) {
  if (result.status !== "available" || !result.flight.ticketLink) {
    return;
  }

  const ticketUrl = result.flight.ticketLink.startsWith("http")
    ? result.flight.ticketLink
    : `https://www.aviasales.com${result.flight.ticketLink}`;

  window.open(ticketUrl, "_blank", "noopener,noreferrer");
}

function CheapFlights({ content }: { content: HomePageData["flightsSection"] }) {
  const { flights, loading, error } = useFlightViewModel();

  return <section className="bg-white px-4 py-20 text-black lg:px-8"><div className="mx-auto max-w-[1280px]"><div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row"><div><h2 className="text-4xl font-medium lg:text-5xl">{content.title} <span className="text-[#000000]">{content.highlightedTitle}</span></h2><p className="mt-3 max-w-[700px] text-sm text-[#555]">{error ?? (loading ? "Finding cheapest flights..." : content.description)}</p></div><button className="h-12 rounded-full bg-[#FDDB32] px-7 text-sm">{content.cta} <ArrowUpRight className="ml-2 inline" size={15} /></button></div><FlightList flights={flights} cta={content.cardCta} onViewFlights={openFlightSearch} /></div></section>;
}

function TravelGuides({ guides, content }: { guides: HomePageData["guides"]; content: HomePageData["guidesSection"] }) {
  const [active, setActive] = useState<number | null>(null);
  return <section className="bg-white px-4 py-20 text-black lg:px-8"><div className="mx-auto max-w-[1280px]"><h2 className="mb-12 text-center text-4xl font-medium">{content.title}</h2><div className="flex flex-col gap-6 md:flex-row">{guides.map(({ date, title, image }, index) => <article key={title} onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive(null)} className={`relative flex-1 overflow-hidden rounded-3xl transition-all duration-500 ${active === index ? "md:flex-[2]" : ""}`}><div className="relative h-[430px]"><Image src={image} alt={title} fill sizes="(max-width: 767px) 100vw, 33vw" className={`scale-[1.04] object-cover transition-transform duration-500 ${active === index ? "scale-110" : ""}`} /></div><div className="py-5"><p className="text-xs text-neutral-500">{date}</p><h3 className="mt-2 text-xl font-medium">{title}</h3></div></article>)}</div><button className="mx-auto mt-8 block rounded-full bg-[#FDDB32] px-8 py-3 text-sm">{content.cta} <ArrowUpRight className="ml-1 inline" size={14} /></button></div></section>;
}

export default function Home({ data = homeData }: { data?: HomePageData }) {
  return (
    <main className="flex min-h-screen flex-col">
      <Header data={headerData} />
      <Hero data={data.hero} />
      <WhyCompare data={data.whyCompare} />
      <CheapFlights content={data.flightsSection} />
      <TravelGuides guides={data.guides} content={data.guidesSection} />
      <Footer data={footerData} />
    </main>
  );
}