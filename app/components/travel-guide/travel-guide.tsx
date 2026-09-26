'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
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

// Fallback imports for icons not explicitly in the original import list but typed in your data
import { MapPin, Plane, Info } from "lucide-react";

const travelGuideIcons: Record<TravelGuideIconName, LucideIcon> = {
  Award,
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
  MapPin: MapPin as LucideIcon, 
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Plane: Plane as LucideIcon,
  Plus,
  Minus,
  Thermometer,
  Info: Info as LucideIcon,
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
    <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#E6E6E6] bg-[#FDFCF9] p-[20px] md:p-[24px]">
      <h3 className="font-sans text-[20px] font-medium leading-[1.2] text-[#000000] lg:text-[24px]">
        {data.title}
      </h3>
      <nav className="flex flex-col gap-[12px] md:gap-[16px]">
        {data.items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex items-start gap-[8px] font-sans text-[14px] font-[380] leading-[1.43] text-[#000000] underline decoration-[#000000] underline-offset-[2px] transition-colors hover:text-[#5F5F5F] md:items-center md:text-[16px] md:leading-[1.5]"
          >
            <ChevronRight size={18} className="mt-[2px] shrink-0 text-[#000000] md:mt-0" strokeWidth={2} />
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
      <div className="flex flex-col gap-[16px] rounded-[20px] border border-[#E6E6E6] bg-[#FFFFFF] p-[20px] md:p-[24px]">
        <h3 className="flex items-center gap-[8px] font-sans text-[20px] font-medium leading-[1.2] text-[#000000]">
          <TravelGuideIcon name={facts.icon} size={16} strokeWidth={2.5} className="text-[#000000]" />
          {facts.title}
        </h3>
      
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-col gap-[4px]">
            <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#7D7D7D]">{facts.peakSeasonLabel}</span>
            <span className="font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">{facts.peakSeasonValue}</span>
          </div>
          <div className="h-[1px] w-full bg-[#E6E6E6]" />
        
          <div className="flex flex-col gap-[4px]">
            <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#7D7D7D]">{facts.budgetMonthsLabel}</span>
            <span className="font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">{facts.budgetMonthsValue}</span>
          </div>
          <div className="h-[1px] w-full bg-[#E6E6E6]" />

          <div className="flex flex-col gap-[4px]">
            <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#7D7D7D]">{facts.bestWeatherLabel}</span>
            <span className="font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">{facts.bestWeatherValue}</span>
          </div>
          <div className="h-[1px] w-full bg-[#E6E6E6]" />

          <div className="flex flex-col gap-[4px]">
            <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#7D7D7D]">{facts.avgTempLabel}</span>
            <span className="font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">{facts.avgTempValue}</span>
          </div>
          <div className="h-[1px] w-full bg-[#E6E6E6]" />

          <div className="flex flex-col gap-[4px]">
            <span className="font-sans text-[12px] font-medium leading-[1.33] text-[#7D7D7D]">{facts.currencyLabel}</span>
            <span className="font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">{facts.currencyValue}</span>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-[12px] rounded-[16px] border border-[#E6E6E6] bg-[#FFFFFF] p-[20px]">
        <TravelGuideIcon name={facts.tipIcon} size={16} strokeWidth={2.5} className="mt-[2px] shrink-0 text-[#000000]" />
        <div className="flex flex-col gap-[6px]">
          <span className="font-sans text-[12px] font-bold uppercase tracking-[0.5px] leading-[1.33] text-[#000000]">
            {facts.tipTitle}
          </span>
          <p className="font-sans text-[14px] font-[380] leading-[1.43] text-[#6E6E6A]">
            {facts.tipText}
          </p>
        </div>
      </div>
    </>
  );
}

function SidebarAdCard({ ad }: { ad: TravelGuideData["sidebarAd"] }) {
  return (
    <div className="group relative hidden h-[220px] w-full overflow-hidden rounded-[20px] lg:block">
      <Image
        src={ad.image}
        alt={ad.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[#000000]/45" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-[12px] p-[20px]">
        <div className="flex flex-col gap-[4px] text-[#FFFFFF]">
          <h3 className="font-sans text-[28px] font-semibold leading-[34px]">{ad.title}</h3>
          <p className="max-w-[229px] font-sans text-[13px] font-normal leading-[18px] text-[#FFFFFF]/80">
            {ad.description}
          </p>
        </div>
        <button className="flex h-[40px] items-center justify-center gap-[4px] rounded-full bg-[#FDDB32] px-[20px] py-[10px] font-sans text-[14px] font-semibold leading-[20px] text-[#000000] transition-colors hover:bg-[#e5c52c]">
          {ad.buttonText}
          <ArrowRight size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

function ArticleSection({ id, title, children, gap = "16px" }: { id: string; title: string; children: React.ReactNode; gap?: string }) {
  return (
    <section id={id} className="mt-[40px] scroll-mt-[100px] lg:mt-[56px]">
      <h2 className="mb-[16px] font-sans text-[24px] font-medium leading-[1] text-[#000000] lg:mb-[24px] lg:text-[36px] lg:leading-[40px] lg:tracking-[-1.5px]">
        {title}
      </h2>
      <div className="flex flex-col" style={{ gap }}>
        {children}
      </div>
    </section>
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
      <section className="relative flex h-auto min-h-[500px] w-full flex-col overflow-hidden bg-[#000000] lg:h-[726px]">
        <div className="absolute top-0 left-0 right-0 z-20">
          <Header data={headerData} />
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            className="object-cover opacity-[0.45]"
            priority
          />
        </div>
        <div className="relative z-10 flex h-full w-full max-w-[1440px] mx-auto flex-col px-[20px] lg:px-[80px]">
          <div className="mt-[140px] flex w-full max-w-[900px] flex-col items-start gap-[16px] pb-[40px] lg:mt-[232px] lg:gap-[20px]">
            
            {/* Breadcrumbs */}
            <div className="flex flex-wrap items-center gap-[8px]">
              {data.breadcrumbs.map((crumb, idx) => (
                <div key={idx} className="flex items-center gap-[8px]">
                  <span className={`font-sans text-[12px] font-medium leading-[1.33] md:text-[14px] md:leading-[1.43] cursor-pointer hover:underline transition-all ${idx === 0 ? 'text-[#FDDB32]' : 'text-[#FFFFFF]'}`}>
                    {crumb}
                  </span>
                  {idx < data.breadcrumbs.length - 1 && (
                    <ChevronRight size={14} strokeWidth={2.5} className="text-[#FFFFFF]" />
                  )}
                </div>
              ))}
            </div>
            
            {/* Badge */}
            <div className="flex items-center justify-center rounded-[30px] bg-[#FDDB32] px-[14px] py-[6px]">
              <span className="font-sans text-[12px] font-bold uppercase tracking-[0.5px] leading-[1] text-[#000000]">
                {data.badge}
              </span>
            </div>
            
            {/* Title & Description */}
            <div className="flex flex-col gap-[12px] lg:gap-[16px]">
              <h1 className="font-sans text-[42px] font-medium leading-[44px] tracking-normal text-[#FFFFFF] lg:text-[69px] lg:leading-[68px] lg:tracking-normal">
                {data.title}
              </h1>
              <p className="font-sans text-[16px] font-[380] leading-[24px] tracking-normal text-[#FFFFFF] opacity-90 lg:text-[18px] lg:leading-[28px]">
                {data.heroDescription}
              </p>
            </div>
            
            {/* Author Info */}
            <div className="mt-[4px] flex flex-wrap items-center gap-[12px] lg:gap-[20px]">
              <div className="flex items-center gap-[8px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white/10 border border-white/30 backdrop-blur-sm">
                  <TravelGuideIcon name={data.authorIcon} size={12} strokeWidth={2.5} className="text-[#FFFFFF]" />
                </div>
                <span className="font-sans text-[12px] font-normal leading-[1.33] text-[#FFFFFF] lg:text-[14px] lg:leading-[1.43]">{data.author}</span>
              </div>
              <div className="h-[4px] w-[4px] rounded-full bg-[#FFFFFF]" />
              <span className="font-sans text-[12px] font-normal leading-[1.33] text-[#FFFFFF] lg:text-[14px] lg:leading-[1.43]">{data.date}</span>
              <div className="h-[4px] w-[4px] rounded-full bg-[#FFFFFF]" />
              <span className="font-sans text-[12px] font-normal leading-[1.33] text-[#FFFFFF] lg:text-[14px] lg:leading-[1.43]">{data.readTime}</span>
            </div>
            
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-[40px] px-[20px] pb-[64px] pt-[40px] lg:flex-row lg:justify-center lg:gap-[64px] lg:px-[80px] lg:pb-[120px] lg:pt-[64px]">
        
        {/* Left / Main Article Column */}
        <article className="flex w-full flex-1 flex-col max-w-[852px]">
          
          <TableOfContents data={data.tableOfContents} />

          {/* Quick Answer Block */}
          <div className="mt-[40px] flex items-start gap-[16px] rounded-[16px] bg-[#FAF7EF] p-[20px] border border-[#E8E0CC] lg:mt-[48px]">
            <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#FDDB32]">
              <TravelGuideIcon name={data.quickAnswer.icon} size={18} className="text-[#000000]" />
            </div>
            <div className="flex flex-col gap-[8px]">
              <span className="font-sans text-[16px] font-medium leading-[1.5] text-[#000000] lg:text-[18px]">
                {data.quickAnswer.title}
              </span>
              <p className="font-sans text-[14px] font-[380] leading-[1.43] text-[#333333] lg:text-[16px] lg:leading-[1.5]">
                {data.quickAnswer.text}
              </p>
            </div>
          </div>

          <ArticleSection id="overview" title={data.sections.overview.title}>
            {data.sections.overview.paragraphs.map((p, i) => (
              <p key={i} className="font-sans text-[14px] font-[380] leading-[1.43] text-[#333333] lg:text-[16px] lg:leading-[1.5]">
                {p}
              </p>
            ))}
            
            <div className="relative mt-[8px] h-[240px] w-full max-w-[852px] overflow-hidden rounded-[16px] lg:h-[360px]">
              <Image 
                src={data.sections.overview.image} 
                alt={data.sections.overview.imageAlt} 
                fill 
                className="object-cover" 
              />
            </div>
            <span className="text-[13px] font-normal italic leading-[1.4] text-[#7D7D7D] lg:text-[14px]">
              {data.sections.overview.imageCaption}
            </span>
          </ArticleSection>

          <ArticleSection id="weather-by-month" title={data.sections.weatherByMonth.title}>
            <p className="font-sans text-[14px] font-[380] leading-[1.43] text-[#333333] lg:text-[16px] lg:leading-[1.5]">
              {data.sections.weatherByMonth.description}
            </p>

            {/* Mobile Weather View (Stacked Divs)[cite: 73] */}
            <div className="flex flex-col gap-[16px] md:hidden">
              {data.sections.weatherByMonth.data.map((row, idx) => (
                <div key={idx} className="flex flex-col gap-[8px] border-b border-[#E6E6E6] pb-[16px] last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[14px] font-bold leading-[1.43] text-[#000000]">{row.month}</span>
                    <span className="font-sans text-[14px] font-bold leading-[1.43] text-[#000000]">{row.temp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[12px] font-normal leading-[1.33] text-[#7D7D7D]">Rain Days: {row.rain}</span>
                    <span className="font-sans text-[12px] font-normal leading-[1.33] text-[#7D7D7D]">{row.conditions}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Weather View (Table) */}
            <div className="hidden overflow-x-auto rounded-[16px] border border-[#E6E6E6] md:block">
              <table className="w-full min-w-[500px] text-left border-collapse">
                <thead className="bg-[#F9FBF5]">
                  <tr>
                    {data.sections.weatherByMonth.tableHeaders.map((h, i) => (
                      <th key={i} className="px-[20px] py-[16px] font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6E6E6]">
                  {data.sections.weatherByMonth.data.map((row, idx) => (
                    <tr key={idx}>
                      <td className="px-[20px] py-[16px] font-sans text-[14px] font-medium leading-[1.43] text-[#000000]">{row.month}</td>
                      <td className="px-[20px] py-[16px] font-sans text-[14px] font-normal leading-[1.43] text-[#4B5563]">{row.temp}</td>
                      <td className="px-[20px] py-[16px] font-sans text-[14px] font-normal leading-[1.43] text-[#4B5563]">{row.rain}</td>
                      <td className="px-[20px] py-[16px] font-sans text-[14px] font-normal leading-[1.43] text-[#4B5563]">{row.conditions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-[8px] flex items-start gap-[16px] rounded-[16px] bg-[#EBF4FF] p-[20px] border border-[#C5DEFF]">
              <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#3B82F6]">
                <TravelGuideIcon name={data.sections.weatherByMonth.tipIcon} size={18} className="text-[#FFFFFF]" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="font-sans text-[14px] font-semibold leading-[1.43] text-[#000000] lg:text-[16px] lg:leading-[1.5]">
                  {data.sections.weatherByMonth.tipTitle}
                </span>
                <p className="font-sans text-[14px] font-[380] leading-[1.43] text-[#333333] lg:text-[16px] lg:leading-[1.5]">
                  {data.sections.weatherByMonth.tipText}
                </p>
              </div>
            </div>
          </ArticleSection>

          <ArticleSection id="travel-types" title={data.sections.travelTypes.title}>
            {/* Travel Types Layout Grid Mobile: cols-2, Desktop: cols-4[cite: 73] */}
            <div className="grid grid-cols-2 gap-[16px] lg:grid-cols-4">
              {data.sections.travelTypes.types.map((type, i) => {
                return (
                  <div key={i} className="flex flex-row items-center gap-[12px] rounded-[16px] border border-[#E6E6E6] p-[16px] lg:flex-col lg:items-start lg:p-[20px]">
                    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[8px] bg-[#FFED91]">
                      <TravelGuideIcon name={type.icon} size={20} className="text-[#000000]" />
                    </div>
                    <div className="flex flex-col lg:mt-[8px]">
                      <h3 className="font-sans text-[14px] font-semibold leading-[1.43] text-[#000000] lg:text-[16px] lg:leading-[1.5]">{type.title}</h3>
                      <p className="font-sans text-[12px] font-normal leading-[1.33] text-[#7D7D7D] mt-[2px] lg:text-[14px] lg:font-[380] lg:leading-[1.43] lg:mt-[4px]">{type.period}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ArticleSection>

          <ArticleSection id="rainy-vs-dry" title={data.sections.rainyVsDry.title}>
            <p className="font-sans text-[14px] font-[380] leading-[1.43] text-[#333333] lg:text-[16px] lg:leading-[1.5]">
              {data.sections.rainyVsDry.description}
            </p>
            <div className="relative mt-[8px] h-[240px] w-full max-w-[852px] overflow-hidden rounded-[16px] lg:h-[360px]">
              <Image 
                src={data.sections.rainyVsDry.image} 
                alt={data.sections.rainyVsDry.imageAlt} 
                fill 
                className="object-cover" 
              />
            </div>
          </ArticleSection>

          <ArticleSection id="when-to-avoid" title={data.sections.whenToAvoid.title}>
            <p className="font-sans text-[14px] font-[380] leading-[1.43] text-[#333333] lg:text-[16px] lg:leading-[1.5]">
              {data.sections.whenToAvoid.description}
            </p>
          </ArticleSection>

          <ArticleSection id="recommendation" title={data.sections.recommendation.title}>
            <p className="font-sans text-[14px] font-[380] leading-[1.43] text-[#333333] lg:text-[16px] lg:leading-[1.5]">
              {data.sections.recommendation.description}
            </p>
          </ArticleSection>

          {/* FAQs */}
          <section className="mt-[48px] border-t border-[#E6E6E6] pt-[40px] lg:mt-[64px] lg:pt-[48px]">
            <h2 className="mb-[24px] font-sans text-[24px] font-medium leading-[1] text-[#000000] lg:mb-[32px] lg:text-[36px] lg:leading-[40px] lg:tracking-[-1.5px]">
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
                      <span className="font-sans text-[16px] font-medium leading-[1.5] text-[#000000] lg:text-[18px]">
                        {faq.q}
                      </span>
                      <span className="flex h-[24px] w-[24px] shrink-0 items-center justify-center text-[#000000]">
                        {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                      </span>
                    </button>
                    
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] mt-[12px] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-sans text-[14px] font-[380] leading-[1.43] text-[#666666] lg:text-[16px] lg:leading-[1.5]">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </article>

        {/* Right Sidebar (Stacks below article on mobile) */}
        <aside className="flex w-full flex-col gap-[24px] lg:w-[380px] lg:shrink-0">
          
          <SidebarFastFacts facts={data.sidebarFastFacts} />
          <SidebarAdCard ad={data.sidebarAd} />

          {/* Compare Flights Card */}
          <div className="hidden lg:flex w-full flex-col items-start gap-[16px] rounded-[20px] bg-[#FFFBEB] p-[24px] border border-[#FDE68A]">
            <div className="flex items-center gap-[12px]">
               <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FDDB32]">
                 <TravelGuideIcon name="Plane" size={20} className="text-[#000000]" />
               </div>
               <h3 className="font-sans text-[18px] font-medium leading-[1.5] text-[#000000]">Compare Flights to Bali</h3>
            </div>
            <p className="font-sans text-[14px] font-[380] leading-[1.43] text-[#4B5563]">Find and compare flight options from your nearest airport.</p>
            <button className="mt-[8px] flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[14px] bg-[#FDDB32] font-sans text-[14px] font-medium leading-[1.43] text-[#111827] transition-colors hover:bg-[#e5c52c]">
              Search Flights <TravelGuideIcon name="ArrowUpRight" size={16} />
            </button>
          </div>

        </aside>

      </section>

      {/* Related Guides Section */}
      <section className="w-full border-t border-[#E6E6E6] bg-[#FFFFFF] py-[48px] lg:py-[80px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[24px] px-[20px] lg:gap-[40px] lg:px-[80px]">
          
          <div className="flex items-center justify-between">
            <h2 className="font-sans text-[24px] font-medium leading-[1] text-[#000000] lg:text-[36px] lg:leading-[40px] lg:tracking-[-1.5px]">
              {data.relatedGuidesSection.title}
            </h2>
            {/* View All Link - always visible on right for mobile as in PDF[cite: 73] */}
            <Link href="/travel-guide#" className="flex h-[40px] items-center justify-center rounded-full bg-[#FDDB32] px-[16px] font-sans text-[14px] font-medium leading-[1.43] text-[#000000] transition-colors hover:bg-[#e5c52c] lg:text-[16px] lg:leading-[1.5]">
              {data.relatedGuidesSection.linkText}
            </Link>
          </div>

          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
            {data.relatedGuidesSection.guides.map((guide, idx) => (
              <Link href="#" key={idx} className="group flex w-full flex-col">
                <div className="relative h-[240px] w-full overflow-hidden rounded-[24px] lg:h-[330px]">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute right-[16px] top-[16px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#FFFFFF] shadow-sm transition-transform group-hover:scale-110 lg:right-[24px] lg:top-[24px] lg:h-[40px] lg:w-[40px]">
                    <TravelGuideIcon name="ArrowUpRight" size={18} className="text-[#000000] lg:h-[20px] lg:w-[20px]" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] py-[16px] lg:py-[20px]">
                  <span className="font-sans text-[12px] font-normal leading-[1.33] text-[#6B7280] lg:text-[14px] lg:leading-[1.43]">
                    {guide.date}
                  </span>
                  <h3 className="font-sans text-[18px] font-medium leading-[1.2] text-[#111827] lg:text-[20px]">
                    {guide.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <Footer data={footerData} />
    </main>
  );
}