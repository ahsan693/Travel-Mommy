'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Calendar,
  Thermometer,
  Banknote,
  Bell,
  Check,
  CircleHelp,
  Clock,
  Heart,
  Lightbulb,
  MessageSquare,
  Plus,
  Minus,
  ArrowRight,
  ArrowUpRight,
  Star,
  Sun,
  Tag,
  Waves,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

import Header from "../header/header";
import Footer from "../footer/footer";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";
import { type TravelGuideData, type TravelGuideIconName, guideData } from "../../../lib/data/travel-guide";

const travelGuideIcons: Record<TravelGuideIconName, LucideIcon> = {
  Banknote,
  Bell,
  Check,
  CircleHelp,
  Clock,
  Heart,
  Lightbulb,
  MessageSquare,
  Star,
  Sun,
  Tag,
  Waves,
};

function TravelGuideIcon({ name, ...props }: { name: TravelGuideIconName } & LucideProps) {
  const Icon = travelGuideIcons[name];
  return <Icon {...props} />;
}

/* =====================================================================
   COMPONENTS
===================================================================== */

function TableOfContents({ data }: { data: TravelGuideData["tableOfContents"] }) {
  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#E6E6E6] bg-[#FDFCF9] p-[24px]">
      <h3 className="font-sans text-[20px] font-medium leading-[1.2] text-[#000000]">
        {data.title}
      </h3>
      <nav className="flex flex-col gap-[16px]">
        {data.items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex items-center gap-[8px] font-sans text-[16px] font-medium leading-[1.5] text-[#000000] transition-colors hover:underline"
          >
            <ChevronRight size={18} className="text-[#000000]" strokeWidth={2} />
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

function SidebarFastFacts({ facts }: { facts: TravelGuideData["sidebarFastFacts"] }) {
  return (
    <>
      <div className="flex flex-col gap-[16px] rounded-[20px] border border-[#E6E6E6] bg-[#FFFFFF] p-[24px]">
        <h3 className="flex items-center gap-[8px] font-sans text-[16px] font-semibold leading-[1.5] text-[#000000]">
        <TravelGuideIcon name={facts.icon} size={20} className="text-[#000000]" />
        {facts.title}
        </h3>
      
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-col gap-[4px]">
            <span className="font-sans text-[10px] font-medium leading-[1.2] text-[#7D7D7D]">{facts.peakSeasonLabel}</span>
            <span className="font-sans text-[12px] font-semibold leading-[1.4] text-[#000000]">{facts.peakSeasonValue}</span>
          </div>
          <div className="h-[1px] w-full bg-[#E6E6E6]" />
        
          <div className="flex flex-col gap-[4px]">
            <span className="font-sans text-[10px] font-medium leading-[1.2] text-[#7D7D7D]">{facts.budgetMonthsLabel}</span>
            <span className="font-sans text-[12px] font-semibold leading-[1.4] text-[#000000]">{facts.budgetMonthsValue}</span>
          </div>
          <div className="h-[1px] w-full bg-[#E6E6E6]" />

          <div className="flex flex-col gap-[4px]">
            <span className="font-sans text-[10px] font-medium leading-[1.2] text-[#7D7D7D]">{facts.bestWeatherLabel}</span>
            <span className="font-sans text-[12px] font-semibold leading-[1.4] text-[#000000]">{facts.bestWeatherValue}</span>
          </div>
          <div className="h-[1px] w-full bg-[#E6E6E6]" />

          <div className="flex flex-col gap-[4px]">
            <span className="font-sans text-[10px] font-medium leading-[1.2] text-[#7D7D7D]">{facts.avgTempLabel}</span>
            <span className="font-sans text-[12px] font-semibold leading-[1.4] text-[#000000]">{facts.avgTempValue}</span>
          </div>
          <div className="h-[1px] w-full bg-[#E6E6E6]" />

          <div className="flex flex-col gap-[4px]">
            <span className="font-sans text-[10px] font-medium leading-[1.2] text-[#7D7D7D]">{facts.currencyLabel}</span>
            <span className="font-sans text-[12px] font-semibold leading-[1.4] text-[#000000]">{facts.currencyValue}</span>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-[12px] rounded-[16px] border border-[#E6E6E6] bg-[#FFFFFF] p-[16px]">
        <TravelGuideIcon name={facts.tipIcon} size={18} className="mt-[2px] shrink-0 text-[#000000]" />
        <div className="flex flex-col gap-[4px]">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3px] text-[#000000]">
            {facts.tipTitle}
          </span>
          <p className="font-sans text-[12px] font-normal leading-[1.4] text-[#6E6E6A]">
            {facts.tipText}
          </p>
        </div>
      </div>
    </>
  );
}

function ArticleSection({ id, title, children, gap = "20px" }: { id: string; title: string; children: React.ReactNode; gap?: string }) {
  return (
    <section id={id} className="mt-[48px] scroll-mt-[100px] md:mt-[64px]">
      <h2 className="mb-[20px] font-sans text-[20px] font-semibold leading-[1.2] text-[#000000] md:mb-[24px] md:text-[24px] md:leading-[1]">
        {title}
      </h2>
      <div className="flex flex-col" style={{ gap }}>
        {children}
      </div>
    </section>
  );
}

function FastFactsGrid({ facts }: { facts: TravelGuideData["fastFactsGrid"] }) {
  return (
    <div className="mt-[40px] grid grid-cols-1 gap-[16px] rounded-[16px] border border-[#E6E6E6] bg-[#FFFFFF] p-[20px] sm:grid-cols-2 md:p-[24px]">
      <div className="col-span-1 sm:col-span-2 mb-[8px]">
        <h3 className="font-sans text-[16px] font-medium leading-[1.5] text-[#000000]">
          {facts.title}
        </h3>
      </div>
      
      <div className="flex items-start gap-[12px]">
        <Calendar className="mt-[2px] h-[18px] w-[18px] shrink-0 text-[#FDDB32]" />
        <div className="flex flex-col">
          <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#7D7D7D]">{facts.highSeasonLabel}</span>
          <span className="font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">{facts.highSeasonValue}</span>
        </div>
      </div>
      
      <div className="flex items-start gap-[12px]">
        <Calendar className="mt-[2px] h-[18px] w-[18px] shrink-0 text-[#E6E6E6]" />
        <div className="flex flex-col">
          <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#7D7D7D]">{facts.shoulderSeasonLabel}</span>
          <span className="font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">{facts.shoulderSeasonValue}</span>
        </div>
      </div>

      <div className="flex items-start gap-[12px]">
        <Calendar className="mt-[2px] h-[18px] w-[18px] shrink-0 text-[#E6E6E6]" />
        <div className="flex flex-col">
          <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#7D7D7D]">{facts.lowSeasonLabel}</span>
          <span className="font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">{facts.lowSeasonValue}</span>
        </div>
      </div>

      <div className="flex items-start gap-[12px]">
        <Thermometer className="mt-[2px] h-[18px] w-[18px] shrink-0 text-[#F59E0B]" />
        <div className="flex flex-col">
          <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#7D7D7D]">{facts.avgTempLabel}</span>
          <span className="font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">{facts.avgTempValue}</span>
        </div>
      </div>

      <div className="flex items-start gap-[12px] sm:col-span-2">
        <Banknote className="mt-[2px] h-[18px] w-[18px] shrink-0 text-[#10B981]" />
        <div className="flex flex-col">
          <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#7D7D7D]">{facts.currencyLabel}</span>
          <span className="font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">{facts.currencyValue}</span>
        </div>
      </div>
    </div>
  );
}

/* =====================================================================
   PAGE COMPONENT
===================================================================== */

export default function TravelGuideDetail({ data = guideData }: { data?: TravelGuideData }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main className="flex min-h-screen w-full flex-col bg-[#FFFFFF]">
      
      {/* Hero Section */}
      <section className="relative flex h-auto min-h-[560px] w-full flex-col overflow-hidden bg-[#000000] md:h-[726px]">
        <div className="absolute top-0 left-0 right-0 z-20">
          <Header data={headerData} />
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#000000]/45" />
        </div>
        <div className="relative z-10 flex h-full w-full max-w-[1440px] mx-auto flex-col px-[20px] md:px-[80px]">
          <div className="mt-[120px] flex w-full max-w-[900px] flex-col items-start gap-[16px] md:mt-[232px] md:gap-[20px]">
            
            <div className="flex flex-wrap items-center gap-[8px]">
              {data.breadcrumbs.map((crumb, idx) => (
                <div key={idx} className="flex items-center gap-[8px]">
                  <span className={`font-sans text-[12px] font-medium leading-[1.33] md:text-[16px] cursor-pointer ${idx === 0 ? 'text-[#F0DB32]' : 'text-[#FFFFFF] hover:text-[#F0DB32]'}`}>
                    {crumb}
                  </span>
                  {idx < data.breadcrumbs.length - 1 && (
                    <ChevronRight size={16} strokeWidth={2.5} className="text-[#FFFFFF]" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center rounded-[30px] bg-[#F0DB32] px-[14px] py-[6px]">
              <span className="font-sans text-[12px] font-semibold leading-[1.33] text-[#000000] uppercase tracking-[0.5px]">
                {data.badge}
              </span>
            </div>
            
            <div className="flex flex-col gap-[12px] md:gap-[20px]">
              <h1 className="font-sans text-[48px] font-medium leading-[1] text-[#FFFFFF] md:text-[69px] md:leading-[68px] md:tracking-[-4px]">
                {data.title}
              </h1>
              <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#FFFFFF] md:text-[18px] md:leading-[1.5]">
                {data.heroDescription}
              </p>
            </div>
            
            <div className="mt-[4px] flex flex-wrap items-center gap-[16px] md:gap-[24px]">
              <div className="flex items-center gap-[8px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white/10 border border-white/30 backdrop-blur-sm">
                  <TravelGuideIcon name={data.authorIcon} size={12} strokeWidth={2.5} className="text-[#FFFFFF]" />
                </div>
                <span className="font-sans text-[12px] font-normal text-[#FFFFFF] md:text-[16px]">{data.author}</span>
              </div>
              <div className="h-[4px] w-[4px] rounded-full bg-[#FFFFFF]" />
              <span className="font-sans text-[12px] font-normal text-[#FFFFFF] md:text-[16px]">{data.date}</span>
              <div className="h-[4px] w-[4px] rounded-full bg-[#FFFFFF]" />
              <span className="font-sans text-[12px] font-normal text-[#FFFFFF] md:text-[16px]">{data.readTime}</span>
            </div>
            
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-[40px] px-[20px] pb-[80px] lg:flex-row lg:justify-center lg:gap-[64px] md:px-[80px] md:pb-[120px] pt-[40px] md:pt-[64px]">
        
        {/* Left / Main Article Column */}
        <article className="flex w-full flex-1 flex-col max-w-[852px]">
          
          <TableOfContents data={data.tableOfContents} />

          {/* Quick Answer Block */}
          <div className="mt-[48px] flex items-start gap-[16px] rounded-[16px] bg-[#FAF7EF] p-[20px] border border-[#E8E0CC]">
            <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#FDDB32]">
              <TravelGuideIcon name={data.quickAnswer.icon} size={18} className="text-[#000000]" />
            </div>
            <div className="flex flex-col gap-[8px]">
              <span className="font-sans text-[16px] font-semibold leading-[1.5] text-[#000000]">
                {data.quickAnswer.title}
              </span>
              <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#4B5563] md:text-[16px] md:leading-[1.5]">
                {data.quickAnswer.text}
              </p>
            </div>
          </div>

          <ArticleSection id="overview" title={data.sections.overview.title} gap="20px">
            {data.sections.overview.paragraphs.map((p, i) => (
              <p key={i} className="font-sans text-[14px] font-normal leading-[1.6] text-[#4B5563] md:text-[16px]">
                {p}
              </p>
            ))}
            
            <div className="relative mt-[16px] h-[360px] w-full max-w-[852px] overflow-hidden rounded-[16px]">
              <Image 
                src={data.sections.overview.image} 
                alt={data.sections.overview.imageAlt} 
                fill 
                className="object-cover" 
              />
            </div>
            <span className="text-[14px] italic text-[#7D7D7D]">
              {data.sections.overview.imageCaption}
            </span>
          </ArticleSection>

          <ArticleSection id="weather-by-month" title={data.sections.weatherByMonth.title} gap="20px">
            <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#4B5563] md:text-[16px] md:leading-[1.5]">
              {data.sections.weatherByMonth.description}
            </p>
            <div className="overflow-x-auto rounded-[16px] border border-[#E6E6E6]">
              <table className="w-full min-w-[500px] text-left border-collapse">
                <thead className="bg-[#F9FBF5]">
                  <tr>
                    {data.sections.weatherByMonth.tableHeaders.map((h, i) => (
                      <th key={i} className="px-[16px] py-[16px] font-sans text-[14px] font-semibold text-[#000000]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6E6E6]">
                  {data.sections.weatherByMonth.data.map((row, idx) => (
                    <tr key={idx}>
                      <td className="px-[16px] py-[16px] font-sans text-[14px] font-semibold text-[#000000]">{row.month}</td>
                      <td className="px-[16px] py-[16px] font-sans text-[14px] font-normal text-[#4B5563]">{row.temp}</td>
                      <td className="px-[16px] py-[16px] font-sans text-[14px] font-normal text-[#4B5563]">{row.rain}</td>
                      <td className="px-[16px] py-[16px] font-sans text-[14px] font-normal text-[#4B5563]">{row.conditions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-[16px] flex items-start gap-[16px] rounded-[16px] bg-[#EBF4FF] p-[20px] border border-[#C5DEFF]">
              <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#3B82F6]">
                <TravelGuideIcon name={data.sections.weatherByMonth.tipIcon} size={18} className="text-[#FFFFFF]" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="font-sans text-[16px] font-semibold leading-[1.5] text-[#000000]">
                  {data.sections.weatherByMonth.tipTitle}
                </span>
                <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#4B5563] md:text-[16px] md:leading-[1.5]">
                  {data.sections.weatherByMonth.tipText}
                </p>
              </div>
            </div>
          </ArticleSection>

          <ArticleSection id="travel-types" title={data.sections.travelTypes.title} gap="24px">
            <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 md:grid-cols-4">
              {data.sections.travelTypes.types.map((type, i) => {
                return (
                  <div key={i} className="flex flex-col gap-[12px] rounded-[16px] border border-[#E6E6E6] p-[20px]">
                    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-[#FFED91]">
                      <TravelGuideIcon name={type.icon} size={20} className="text-[#000000]" />
                    </div>
                    <div className="flex flex-col mt-[8px]">
                      <h3 className="font-sans text-[16px] font-semibold leading-[1.5] text-[#000000]">{type.title}</h3>
                      <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#7D7D7D] mt-[4px]">{type.period}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ArticleSection>

          <ArticleSection id="rainy-vs-dry" title={data.sections.rainyVsDry.title} gap="16px">
            <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#4B5563] md:text-[16px]">
              {data.sections.rainyVsDry.description}
            </p>
            <div className="relative mt-[16px] h-[360px] w-full max-w-[852px] overflow-hidden rounded-[16px]">
              <Image 
                src={data.sections.rainyVsDry.image} 
                alt={data.sections.rainyVsDry.imageAlt} 
                fill 
                className="object-cover" 
              />
            </div>
          </ArticleSection>

          <ArticleSection id="when-to-avoid" title={data.sections.whenToAvoid.title} gap="20px">
            <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#4B5563] md:text-[16px]">
              {data.sections.whenToAvoid.description}
            </p>
          </ArticleSection>

          <ArticleSection id="recommendation" title={data.sections.recommendation.title} gap="20px">
            <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#4B5563] md:text-[16px]">
              {data.sections.recommendation.description}
            </p>
          </ArticleSection>

          {/* FAQs */}
          <section className="mt-[64px] border-t border-[#E6E6E6] pt-[48px] md:mt-[80px]">
            <h2 className="mb-[32px] font-sans text-[20px] font-semibold leading-[1.2] text-[#000000] md:text-[24px] md:leading-[1]">
              {data.faqSection.title}
            </h2>
            <div className="flex w-full flex-col gap-[16px]">
              {data.faqSection.faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div key={i} className="flex flex-col border-b border-[#E6E6E6] pb-[20px]">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      className="flex w-full items-center justify-between text-left outline-none gap-[16px]"
                    >
                      <span className="font-sans text-[14px] font-semibold leading-[1.43] text-[#000000] md:text-[16px] md:leading-[1.5]">
                        {faq.q}
                      </span>
                      <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center text-[#000000]">
                        {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                      </span>
                    </button>
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-[12px] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#7D7D7D] md:text-[16px]">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="mt-[48px] flex flex-col items-start gap-[24px] rounded-[24px] bg-[#F9FBF5] p-[24px] border border-[#E6E6E6] md:flex-row md:items-center md:justify-between md:p-[32px]">
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-sans text-[20px] font-medium leading-[1.2] text-[#000000] md:text-[24px] md:leading-[1]">
                {data.bottomCta.title}
              </h3>
              <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#4B5563] md:text-[16px] md:leading-[1.5]">
                {data.bottomCta.description}
              </p>
            </div>
            <button className="flex h-[48px] w-full shrink-0 items-center justify-center gap-[8px] rounded-full bg-[#FDDB32] px-[32px] font-sans text-[14px] font-medium leading-[1.43] text-[#000000] transition-colors hover:bg-[#e5c52c] md:w-auto md:text-[16px] md:leading-[1.5]">
              {data.bottomCta.buttonText}
              <ArrowRight size={18} />
            </button>
          </div>

        </article>

        {/* Right Sidebar */}
        <aside className="flex w-full flex-col gap-[24px] lg:w-[380px] lg:shrink-0">
          
          <SidebarFastFacts facts={data.sidebarFastFacts} />

          {/* Discover Greece Ad Card */}
          <div className="overflow-hidden rounded-[20px] border border-[#E6E6E6] bg-[#FFFFFF]">
            <div className="relative h-[220px] w-full overflow-hidden">
              <Image src={data.sidebarAd.image} alt={data.sidebarAd.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-[20px] bottom-[20px] flex flex-col items-start gap-[8px]">
                <h3 className="font-sans text-[28px] font-semibold leading-[1.2] text-[#FFFFFF]">
                  {data.sidebarAd.title}
                </h3>
                <p className="max-w-[300px] font-sans text-[13px] font-normal leading-[1.35] text-[#FFFFFF]">
                  {data.sidebarAd.description}
                </p>
                <button className="mt-[4px] flex h-[40px] items-center justify-center rounded-full bg-[#FDDB32] px-[20px] font-sans text-[13px] font-semibold text-[#000000] hover:bg-[#e5c52c]">
                  {data.sidebarAd.buttonText}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] p-[20px]">
              {data.sidebarAd.bullets.map((b, i) => {
                return (
                  <div key={i} className="flex items-start gap-[8px]">
                    <TravelGuideIcon name={b.icon} size={14} className="mt-[2px] shrink-0 text-[#FDDB32]" />
                    <span className="font-sans text-[12px] font-medium leading-[1.4] text-[#1A1A19]">{b.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Help Centre Card */}
          <div className="flex flex-col items-start gap-[14px] rounded-[20px] border border-[#E6E6E6] bg-[#FFFBE6] p-[20px]">
             <div className="flex items-start gap-[10px]">
               <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#FDDB32]">
                 <TravelGuideIcon name={data.sidebarHelp.icon} size={17} className="text-[#000000]" />
               </div>
               <h3 className="pt-[4px] font-sans text-[16px] font-semibold leading-[1.35] text-[#1A1A19]">{data.sidebarHelp.title}</h3>
             </div>
             <p className="font-sans text-[13px] font-normal leading-[1.45] text-[#6E6E6A]">
               {data.sidebarHelp.description}
             </p>
             <button className="flex h-[40px] items-center justify-center rounded-full bg-[#FDDB32] px-[20px] font-sans text-[13px] font-semibold text-[#1A1A19] hover:bg-[#e5c52c]">
               {data.sidebarHelp.buttonText}
             </button>
          </div>

        </aside>

      </section>

      {/* Related Guides Section */}
      <section className="w-full border-t border-[#E6E6E6] bg-[#FFFFFF] py-[64px] md:py-[80px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[24px] px-[20px] md:gap-[40px] md:px-[80px]">
          <div className="flex items-center justify-between">
            <h2 className="font-sans text-[24px] font-medium leading-[1] text-[#000000] md:text-[32px]">
              {data.relatedGuidesSection.title}
            </h2>
            <Link href="#" className="hidden items-center gap-[6px] font-sans text-[14px] font-medium text-[#000000] hover:underline md:flex md:text-[16px]">
              {data.relatedGuidesSection.linkText}
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-[16px] sm:grid-cols-2 md:gap-[24px] lg:grid-cols-3">
            {data.relatedGuidesSection.guides.map((guide, idx) => (
              <Link href="#" key={idx} className="group flex w-full flex-col">
                <div className="relative h-[240px] w-full overflow-hidden rounded-[24px] md:h-[400px]">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute right-[16px] top-[16px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#FFFFFF] shadow-sm transition-transform group-hover:scale-110">
                    <ArrowUpRight size={18} className="text-[#000000]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] px-[12px] py-[16px]">
                  <span className="font-sans text-[12px] font-normal leading-[1.33] text-[#7D7D7D] md:text-[14px]">
                    {guide.date}
                  </span>
                  <h3 className="font-sans text-[16px] font-medium leading-[1.5] text-[#000000] md:text-[20px] md:leading-[1.2]">
                    {guide.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <button className="mt-[16px] flex h-[48px] w-full items-center justify-center gap-[8px] rounded-full border border-[#E6E6E6] bg-[#FFFFFF] font-sans text-[14px] font-medium leading-[1.43] text-[#000000] md:hidden">
            {data.relatedGuidesSection.linkText}
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      <Footer data={footerData} />
    </main>
  );
}   

