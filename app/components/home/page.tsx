'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Clock, MapPin, Star } from "lucide-react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { homeData, type HomePageData } from "../../../lib/data/homeData";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";

function SearchWidget({ title, src }: { title: string; src: string }) {
  return <iframe title={title} src={src} className="min-h-[400px] w-full border-0 bg-transparent lg:min-h-[160px]" />;
}

function Hero({ data }: { data: HomePageData["hero"] }) {
  return (
    <section className="relative overflow-hidden bg-black py-24 lg:min-h-[820px] lg:py-32">
      <Image src={data.image} alt={data.imageAlt} fill priority className="object-cover opacity-75" />
      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-10 px-5 text-white lg:px-8">
        <div className="max-w-[900px]">
          <h1 className="text-5xl font-medium leading-none lg:text-8xl xl:text-[110px]">{data.title}</h1>
          <p className="mt-6 max-w-[360px] text-sm leading-5">{data.description}</p>
          <button className="mt-5 flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm text-black">{data.cta} <ArrowUpRight size={15} /></button>
        </div>
        <div className="mt-4 w-full"><SearchWidget title={data.widgetTitle} src={data.widgetSrc} /></div>
        <div className="flex items-center gap-3 text-sm"><div className="flex">{[1, 2, 3, 4].map((item) => <span key={item} className="-ml-2 size-8 rounded-full border-2 border-white bg-[#FDDB32] first:ml-0" />)}</div><span><span className="text-[#FDDB32]">★★★★★</span> 4.9 / 5<br /><span className="text-white/80">Trusted by 300+ travelers</span></span></div>
      </div>
    </section>
  );
}

function WhyCompare({ data }: { data: HomePageData["whyCompare"] }) {
  return (
    <section className="flex flex-col gap-[10px] bg-black px-5 py-16 text-white lg:px-[80px] lg:py-[160px]">
      <h2 className="text-3xl font-[570] lg:text-[48px] lg:leading-[48px] lg:tracking-[-1px]">
        {data.title} <span>{data.highlightedTitle}</span>
      </h2>
      <p className="max-w-[1216px] text-sm font-[380] leading-[24px] lg:text-[16px]">
        {data.description}
      </p>
    </section>
  );
}

function CheapFlights({ flights, content }: { flights: HomePageData["flights"]; content: HomePageData["flightsSection"] }) {
  return <section className="bg-white px-4 py-20 text-black lg:px-8"><div className="mx-auto max-w-[1280px]"><div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row"><div><h2 className="text-4xl font-medium lg:text-5xl">{content.title} <span className="text-[#000000]">{content.highlightedTitle}</span></h2><p className="mt-3 max-w-[700px] text-sm text-[#555]">{content.description}</p></div><button className="h-12 rounded-full bg-[#FDDB32] px-7 text-sm">{content.cta} <ArrowUpRight className="ml-2 inline" size={15} /></button></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{flights.map(({ city, route, price, duration, image }) => <article key={route} className="overflow-hidden rounded-3xl border border-[#E6E6E6] shadow-sm"><div className="relative h-36"><Image src={image} alt={city} fill className="object-cover" /></div><div className="p-5"><h3 className="text-2xl">{city}</h3><p className="text-sm text-[#7D7D7D]">{route}</p><p className="mt-4 text-2xl">{price}</p><p className="mt-3 text-sm text-[#7D7D7D]"><Clock size={14} className="mr-1 inline" />Direct - {duration}</p><button className="mt-5 h-12 w-full rounded-xl border border-[#E6E6E6] text-sm hover:bg-[#FDDB32]">{content.cardCta} <ArrowUpRight className="ml-1 inline" size={14} /></button></div></article>)}</div></div></section>;
}

function Destinations({ content }: { content: HomePageData["destinationsSection"] }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(900);
  useEffect(() => { const onMessage = (event: MessageEvent) => { if (event.data?.type === "destinations-widget-height" && event.data.height > 0) setHeight(event.data.height); }; window.addEventListener("message", onMessage); return () => window.removeEventListener("message", onMessage); }, []);
  return <section className="bg-white px-4 py-20 text-black lg:px-8"><div className="mx-auto max-w-[1280px]"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row"><div><h2 className="text-4xl font-medium">{content.title}</h2><p className="mt-3 text-[#6B7280]">{content.description}</p></div><button className="h-11 rounded-full bg-[#FDDB32] px-6 text-sm">{content.cta} <ArrowUpRight className="ml-1 inline" size={14} /></button></div><div className="overflow-hidden rounded-3xl border border-[#E5E7EB]"><iframe ref={iframeRef} title={content.widgetTitle} src="/destinations-widget.html" style={{ height }} className="w-full border-0" /></div></div></section>;
}

function TravelGuides({ guides, content }: { guides: HomePageData["guides"]; content: HomePageData["guidesSection"] }) {
  const [active, setActive] = useState<number | null>(null);
  return <section className="bg-white px-4 py-20 text-black lg:px-8"><div className="mx-auto max-w-[1280px]"><h2 className="mb-12 text-center text-4xl font-medium">{content.title}</h2><div className="flex flex-col gap-6 md:flex-row">{guides.map(({ date, title, image }, index) => <article key={title} onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive(null)} className={`relative flex-1 overflow-hidden rounded-3xl transition-all duration-500 ${active === index ? "md:flex-[2]" : ""}`}><div className="relative h-[430px]"><Image src={image} alt={title} fill className={`object-cover transition-transform duration-500 ${active === index ? "scale-110" : ""}`} /></div><div className="py-5"><p className="text-xs text-neutral-500">{date}</p><h3 className="mt-2 text-xl font-medium">{title}</h3></div></article>)}</div><button className="mx-auto mt-8 block rounded-full bg-[#FDDB32] px-8 py-3 text-sm">{content.cta} <ArrowUpRight className="ml-1 inline" size={14} /></button></div></section>;
}

export default function Home({ data = homeData }: { data?: HomePageData }) {
  return (
    <main className="flex min-h-screen flex-col">
      <Header data={headerData} />
      <Hero data={data.hero} />
      <WhyCompare data={data.whyCompare} />
      <CheapFlights flights={data.flights} content={data.flightsSection} />
      <Destinations content={data.destinationsSection} />
      <TravelGuides guides={data.guides} content={data.guidesSection} />
      <Footer data={footerData} />
    </main>
  );
}