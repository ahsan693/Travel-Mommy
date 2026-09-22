'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Info,
  Calendar,
  Thermometer,
  Banknote,
  Sun,
  Waves,
  Heart,
  Plus,
  Minus,
  ArrowRight,
  ArrowUpRight,
  Check,
  Bell,
  MessageSquare,
  Plane,
  Lightbulb
} from "lucide-react";

import Header from "../header/header";
import Footer from "../footer/footer";
import { headerData } from "../../../lib/data/headerData";
import { footerData } from "../../../lib/data/footerData";

/* =====================================================================
   MOCK DATA & INTERFACES
===================================================================== */

export interface WeatherData {
  month: string;
  temp: string;
  rain: string;
  conditions: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface RelatedGuide {
  title: string;
  image: string;
  date: string;
}

export interface TableOfContentItem {
  id: string;
  label: string;
}

export interface FastFacts {
  highSeason: string;
  shoulderSeason: string;
  lowSeason: string;
  avgTemp: string;
  currency: string;
}

export interface TravelGuideData {
  breadcrumbs: string[];
  badge: string;
  title: string;
  heroDescription: string;
  author: string;
  date: string;
  readTime: string;
  heroImage: string;
  quickAnswer: string;
  fastFacts: FastFacts;
  tableOfContents: TableOfContentItem[];
  weatherData: WeatherData[];
  faqs: FaqItem[];
  relatedGuides: RelatedGuide[];
}

export const guideData: TravelGuideData = {
  breadcrumbs: ["Home", "Travel Guides", "Indonesia"],
  badge: "INDONESIA TRAVEL GUIDE",
  title: "Best Time to Visit Bali: A Complete Month-by-Month Guide",
  heroDescription: "Discover Bali's weather, seasons, crowds and prices to help you choose the perfect time for your trip.",
  author: "By Sarah Jenkins",
  date: "Updated June 12, 2026",
  readTime: "8 Min Read",
  heroImage: "/images/bali-rice-terraces.jpg", 
  quickAnswer: "Generally, the best time to visit Bali is during the dry season, from April to June and September to October, which offers good weather and fewer crowds.",
  fastFacts: {
    highSeason: "July, August, Christmas/NY",
    shoulderSeason: "April, May, June, September, October",
    lowSeason: "January, February, March, November",
    avgTemp: "27°C - 31°C year-round",
    currency: "Indonesian Rupiah (IDR)",
  },
  tableOfContents: [
    { id: "overview", label: "1. Bali's Seasons: An Overview" },
    { id: "weather-by-month", label: "2. Bali Weather by Month" },
    { id: "travel-types", label: "3. Best Time for Different Types of Travel" },
    { id: "rainy-vs-dry", label: "4. Rainy Season vs Dry Season" },
    { id: "when-to-avoid", label: "5. When to Avoid Bali" },
    { id: "recommendation", label: "6. Final Recommendation" },
  ],
  weatherData: [
    { month: "January", temp: "28°C", rain: "15 Days", conditions: "Heavy Rain" },
    { month: "April", temp: "29°C", rain: "9 Days", conditions: "Showers / Sun" },
    { month: "July", temp: "27°C", rain: "4 Days", conditions: "Sunny & Dry" },
    { month: "October", temp: "28°C", rain: "8 Days", conditions: "Mixed / Warm" },
  ],
  faqs: [
    { q: "Which is the hottest month in Bali?", a: "April and May are typically the hottest months in Bali, with temperatures often reaching up to 32°C (90°F) and high humidity levels before the dry season fully sets in." },
    { q: "Is Bali safe during the rainy season?", a: "Yes, Bali is generally safe during the rainy season. However, travelers should be cautious of slippery roads, especially if riding scooters, and occasional disrupted boat schedules to nearby islands." },
    { q: "How many days do I need for a complete Bali trip?", a: "A well-rounded trip to Bali requires at least 10 to 14 days. This gives you enough time to explore the cultural heart of Ubud, relax on the southern beaches, and visit neighboring islands like Nusa Penida." },
  ],
  relatedGuides: [
    { title: "Japan Travel Guide", image: "/images/japan.jpg", date: "May 15, 2026" },
    { title: "Paris Travel Guide", image: "/images/paris.jpg", date: "May 15, 2026" },
    { title: "Netherlands Travel Guide", image: "/images/netherlands.jpg", date: "May 15, 2026" },
  ]
};

/* =====================================================================
   COMPONENTS
===================================================================== */

function TableOfContents({ items }: { items: { id: string; label: string }[] }) {
  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[16px] border border-[#E6E6E6] bg-[#FDFCF9] p-[24px]">
      <h3 className="font-sans text-[20px] font-medium leading-[1.2] text-[#000000]">
        In This Guide
      </h3>
      <nav className="flex flex-col gap-[16px]">
        {items.map((item) => (
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

function SidebarFastFacts({ facts }: { facts: TravelGuideData["fastFacts"] }) {
  return (
    <div className="flex flex-col gap-[24px] rounded-[16px] border border-[#E6E6E6] bg-[#FFFFFF] p-[24px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <h3 className="flex items-center gap-[8px] font-sans text-[18px] font-semibold leading-[1.5] text-[#000000]">
        <Bell size={20} className="text-[#000000]" />
        Bali Fast Facts
      </h3>
      
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[4px]">
          <span className="font-sans text-[12px] font-medium text-[#7D7D7D]">Peak Season</span>
          <span className="font-sans text-[14px] font-semibold text-[#000000]">{facts.highSeason}</span>
        </div>
        <div className="h-[1px] w-full bg-[#F3F4F6]" />
        
        <div className="flex flex-col gap-[4px]">
          <span className="font-sans text-[12px] font-medium text-[#7D7D7D]">Budget Months</span>
          <span className="font-sans text-[14px] font-semibold text-[#000000]">{facts.lowSeason}</span>
        </div>
        <div className="h-[1px] w-full bg-[#F3F4F6]" />

        <div className="flex flex-col gap-[4px]">
          <span className="font-sans text-[12px] font-medium text-[#7D7D7D]">Best Weather</span>
          <span className="font-sans text-[14px] font-semibold text-[#000000]">May, June, September</span>
        </div>
        <div className="h-[1px] w-full bg-[#F3F4F6]" />

        <div className="flex flex-col gap-[4px]">
          <span className="font-sans text-[12px] font-medium text-[#7D7D7D]">Avg Temperature</span>
          <span className="font-sans text-[14px] font-semibold text-[#000000]">{facts.avgTemp}</span>
        </div>
        <div className="h-[1px] w-full bg-[#F3F4F6]" />

        <div className="flex flex-col gap-[4px]">
          <span className="font-sans text-[12px] font-medium text-[#7D7D7D]">Currency</span>
          <span className="font-sans text-[14px] font-semibold text-[#000000]">{facts.currency}</span>
        </div>
      </div>

      <div className="mt-[8px] flex items-start gap-[12px] rounded-[12px] bg-[#F9FBF5] p-[16px]">
        <MessageSquare size={18} className="mt-[2px] shrink-0 text-[#000000]" />
        <div className="flex flex-col gap-[4px]">
          <span className="font-sans text-[12px] font-bold uppercase tracking-[0.5px] text-[#000000]">
            Expert Tip
          </span>
          <p className="font-sans text-[13px] font-normal leading-[1.4] text-[#4B5563]">
            Book flights at least 6 weeks in advance for peak July/August travel.
          </p>
        </div>
      </div>
    </div>
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
            alt="Hero Background"
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
                  <Check size={12} strokeWidth={2.5} className="text-[#FFFFFF]" />
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
        
        {/* Left / Main Article Column (852px) */}
        <article className="flex w-full flex-1 flex-col max-w-[852px]">
          
          <TableOfContents items={data.tableOfContents} />

          {/* Quick Answer Block */}
          <div className="mt-[48px] flex items-start gap-[16px] rounded-[16px] bg-[#FAF7EF] p-[20px] border border-[#E8E0CC]">
            <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#FDDB32]">
              <Sun size={18} className="text-[#000000]" />
            </div>
            <div className="flex flex-col gap-[8px]">
              <span className="font-sans text-[16px] font-semibold leading-[1.5] text-[#000000]">
                Quick Answer
              </span>
              <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#4B5563] md:text-[16px] md:leading-[1.5]">
                {data.quickAnswer}
              </p>
            </div>
          </div>

          <ArticleSection id="overview" title={data.tableOfContents[0].label} gap="20px">
            <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#4B5563] md:text-[16px]">
              Located just 8 degrees south of the equator, Bali enjoys a warm, tropical climate year-round. However, rather than four distinct seasons, the island experiences two primary weather periods: the dry season and the wet season. Understanding the trade-offs of each will guarantee your tropical holiday lives up to every dream.
            </p>
            <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#4B5563] md:text-[16px]">
              Whether you are looking to surf the world-class breaks off the Bukit Peninsula, trek up the active volcano of Mount Batur, or submerge yourself in Ubud's rich cultural heart, timing your arrival is essential to making the most of your budget and days.
            </p>
            
            <div className="relative mt-[16px] h-[360px] w-full max-w-[852px] overflow-hidden rounded-[16px]">
              <Image 
                src={data.heroImage} 
                alt="Bali Rice Terraces" 
                fill 
                className="object-cover" 
              />
            </div>
            <span className="text-[14px] italic text-[#7D7D7D]">The vibrant green rice terraces in Ubud are most spectacular at the start of the dry season in May.</span>
          </ArticleSection>

          <ArticleSection id="weather-by-month" title={data.tableOfContents[1].label} gap="20px">
            <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#4B5563] md:text-[16px] md:leading-[1.5]">
              Plan your travel with our complete month-by-month summary of temperature, rain days, and overall beach conditions.
            </p>
            <div className="overflow-x-auto rounded-[16px] border border-[#E6E6E6]">
              <table className="w-full min-w-[500px] text-left border-collapse">
                <thead className="bg-[#F9FBF5]">
                  <tr>
                    <th className="px-[16px] py-[16px] font-sans text-[14px] font-semibold text-[#000000]">Month</th>
                    <th className="px-[16px] py-[16px] font-sans text-[14px] font-semibold text-[#000000]">Avg Temp</th>
                    <th className="px-[16px] py-[16px] font-sans text-[14px] font-semibold text-[#000000]">Rain Days</th>
                    <th className="px-[16px] py-[16px] font-sans text-[14px] font-semibold text-[#000000]">Conditions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6E6E6]">
                  {data.weatherData.map((row, idx) => (
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
                <Lightbulb size={18} className="text-[#FFFFFF]" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="font-sans text-[16px] font-semibold leading-[1.5] text-[#000000]">
                  TravelMommy Tip
                </span>
                <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#4B5563] md:text-[16px] md:leading-[1.5]">
                  May and September often offer a great balance of good weather, lower prices and smaller crowds.
                </p>
              </div>
            </div>
          </ArticleSection>

          <ArticleSection id="travel-types" title={data.tableOfContents[2].label} gap="24px">
            <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col gap-[12px] rounded-[16px] border border-[#E6E6E6] p-[20px]">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-[#FFED91]">
                  <Sun size={20} className="text-[#000000]" />
                </div>
                <div className="flex flex-col mt-[8px]">
                  <h3 className="font-sans text-[16px] font-semibold leading-[1.5] text-[#000000]">Beaches</h3>
                  <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#7D7D7D] mt-[4px]">July - August</p>
                </div>
              </div>

              <div className="flex flex-col gap-[12px] rounded-[16px] border border-[#E6E6E6] p-[20px]">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-[#FFED91]">
                  <Banknote size={20} className="text-[#000000]" />
                </div>
                <div className="flex flex-col mt-[8px]">
                  <h3 className="font-sans text-[16px] font-semibold leading-[1.5] text-[#000000]">Budget Travel</h3>
                  <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#7D7D7D] mt-[4px]">April, Oct, Nov</p>
                </div>
              </div>

              <div className="flex flex-col gap-[12px] rounded-[16px] border border-[#E6E6E6] p-[20px]">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-[#FFED91]">
                  <Waves size={20} className="text-[#000000]" />
                </div>
                <div className="flex flex-col mt-[8px]">
                  <h3 className="font-sans text-[16px] font-semibold leading-[1.5] text-[#000000]">Surfing</h3>
                  <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#7D7D7D] mt-[4px]">May - September</p>
                </div>
              </div>

              <div className="flex flex-col gap-[12px] rounded-[16px] border border-[#E6E6E6] p-[20px]">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-[#FFED91]">
                  <Heart size={20} className="text-[#000000]" />
                </div>
                <div className="flex flex-col mt-[8px]">
                  <h3 className="font-sans text-[16px] font-semibold leading-[1.5] text-[#000000]">Families</h3>
                  <p className="font-sans text-[14px] font-normal leading-[1.43] text-[#7D7D7D] mt-[4px]">June - September</p>
                </div>
              </div>
            </div>
          </ArticleSection>

          <ArticleSection id="rainy-vs-dry" title={data.tableOfContents[3].label} gap="16px">
            <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#4B5563] md:text-[16px]">
              The wet season (November to March) brings dramatic afternoon rainstorms, lush jungle colors, and deep discounts at top resorts. The dry season (April to October) serves up consistent offshore winds, low humidity, and prime conditions for volcano trekking and diving.
            </p>
            <div className="relative mt-[16px] h-[360px] w-full max-w-[852px] overflow-hidden rounded-[16px]">
              <Image 
                src={data.heroImage} 
                alt="Bali Scenery" 
                fill 
                className="object-cover" 
              />
            </div>
          </ArticleSection>

          <ArticleSection id="when-to-avoid" title={data.tableOfContents[4].label} gap="20px">
            <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#4B5563] md:text-[16px]">
              Avoid visiting during the peak monsoon season (January and February) if your heart is set on long beach days. Island hopping and ferry crossings can become rough and unpredictable. Also, be aware of Nyepi (Balinese New Year) in March, when the entire island shuts down completely for 24 hours.
            </p>
          </ArticleSection>

          <ArticleSection id="recommendation" title={data.tableOfContents[5].label} gap="20px">
            <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#4B5563] md:text-[16px]">
              For the perfect balance of superb tropical weather, lower crowds, and sensible flight prices, target the shoulder months: May, June, and September. You get the best of Bali without the extreme congestion of mid-summer.
            </p>
          </ArticleSection>

          <section className="mt-[64px] border-t border-[#E6E6E6] pt-[48px] md:mt-[80px]">
            <h2 className="mb-[32px] font-sans text-[20px] font-semibold leading-[1.2] text-[#000000] md:text-[24px] md:leading-[1]">
              Frequently Asked Questions
            </h2>
            <div className="flex w-full flex-col gap-[16px]">
              {data.faqs.map((faq, i) => {
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
                    
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] mt-[12px] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
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

        </article>

        {/* Right Sidebar (380px) */}
        <aside className="flex w-full flex-col gap-[24px] lg:w-[380px] lg:shrink-0">
          <SidebarFastFacts facts={data.fastFacts} />

          {/* Explore Bali Ad Card */}
          <div className="relative flex h-[240px] w-full flex-col justify-end overflow-hidden rounded-[16px] p-[24px]">
             <Image src={data.heroImage} alt="Explore Bali" fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
             <div className="relative z-10 flex flex-col items-start gap-[12px]">
               <h3 className="font-sans text-[24px] font-semibold text-[#FFFFFF]">Explore Bali</h3>
               <p className="font-sans text-[14px] text-white/80">Discover the best places to visit, things to do and travel tips.</p>
               <button className="mt-[8px] flex items-center justify-center gap-[8px] rounded-full bg-[#FDDB32] px-[20px] py-[10px] font-sans text-[14px] font-semibold text-[#000000] hover:bg-[#e5c52c]">
                 Explore Bali <ArrowRight size={16} />
               </button>
             </div>
          </div>

          {/* Compare Flights Card */}
          <div className="flex w-full flex-col items-start gap-[16px] rounded-[16px] bg-[#FFFBEB] p-[24px] border border-[#FDE68A]">
            <div className="flex items-center gap-[12px]">
               <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FDDB32]">
                 <Plane size={20} className="text-[#000000]" />
               </div>
               <h3 className="font-sans text-[18px] font-semibold text-[#000000]">Compare Flights to Bali</h3>
            </div>
            <p className="font-sans text-[14px] text-[#4B5563]">Find and compare flight options from your nearest airport.</p>
            <button className="mt-[8px] flex w-full items-center justify-center gap-[8px] rounded-full bg-[#FDDB32] px-[24px] py-[12px] font-sans text-[16px] font-semibold text-[#000000] hover:bg-[#e5c52c]">
              Search Flights <ArrowRight size={18} />
            </button>
          </div>
        </aside>

      </section>

      {/* Related Guides Section */}
      <section className="w-full border-t border-[#E6E6E6] bg-[#FFFFFF] py-[64px] md:py-[80px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[24px] px-[20px] md:gap-[40px] md:px-[80px]">
          
          <div className="flex items-center justify-between">
            <h2 className="font-sans text-[24px] font-medium leading-[1] text-[#000000] md:text-[32px]">
              Related Guides
            </h2>
            <Link href="#" className="hidden items-center gap-[6px] font-sans text-[14px] font-medium text-[#000000] hover:underline md:flex md:text-[16px]">
              All Travel Guides
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-[16px] sm:grid-cols-2 md:gap-[24px] lg:grid-cols-3">
            {data.relatedGuides.map((guide, idx) => (
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
            All Travel Guides
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      <Footer data={footerData} />
    </main>
  );
}