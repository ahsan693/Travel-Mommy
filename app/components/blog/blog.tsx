'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight, ChevronRight, MapPin, MessageSquare } from "lucide-react";

import Header from "../header/header";
import Footer from "../footer/footer";
import { headerData } from "../../../lib/data/headerData"; 
import { footerData } from "../../../lib/data/footerData";
import { blogData, type BlogPageData } from "../../../lib/data/blogData";

/* =====================================================================
   HERO SECTION
===================================================================== */

function BlogHero({ data }: { data: BlogPageData["hero"] }) {
  return (
    <section className="relative flex w-full justify-center overflow-hidden bg-black h-[500px] lg:h-[726px]">
      <div className="absolute inset-0 z-0">
        <Image 
          src={data.image} 
          alt={data.imageAlt} 
          fill 
          priority 
          className="object-cover opacity-[0.45]" 
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 lg:px-[80px]">
        <div className="absolute flex w-full max-w-[900px] flex-col gap-[20px] top-[200px] lg:top-[422px] px-6 lg:px-0">
          
          <div className="flex items-center gap-[8px] font-sans text-[12px] font-medium leading-[16px]">
            {data.breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.label}>
                <Link 
                  href={crumb.href} 
                    style={{ color: index === 0 ? "#FDDB32" : "#FFFFFF" }}
                  className={`hover:underline transition-all ${
                    index === 0 ? "text-[#FDDB32]" : "text-[#FFFFFF]"
                  }`}
                >
                  {crumb.label}
                </Link>
                {index < data.breadcrumbs.length - 1 && (
                  <ChevronRight size={18} strokeWidth={2.5} className="text-[#FFFFFF]" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>

          <span className="w-fit rounded-[30px] bg-[#FDDB32] px-[14px] py-[6px] font-sans text-[14px] font-medium uppercase text-[#000000]">
            {data.pill}
          </span>

          <h1 className="font-sans text-[42px] font-normal leading-[1.1] tracking-[-2px] text-[#FFFFFF] lg:text-[69px] lg:leading-[68px] lg:tracking-[-4px]">
            {data.title}
          </h1>

          <p className="max-w-[800px] font-sans text-[16px] font-normal leading-[24px] text-[#FFFFFF] opacity-90">
            {data.subtitle}
          </p>

        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   CATEGORY FILTERS SECTION
===================================================================== */

function CategoryStrip({ categories }: { categories: string[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All Guides");

  return (
    <section className="flex h-[116px] w-full justify-center bg-[#FFFFFF] px-[20px] pt-[40px] lg:px-[80px]">
      <div className="flex w-full max-w-[1440px] items-center justify-center">
        <div className="flex flex-wrap items-center gap-[12px]">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`flex h-[36px] items-center justify-center rounded-full px-[16px] font-sans text-[14px] font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-[#FDDB32] text-[#000000] border border-transparent"
                  : "bg-[#FFFFFF] text-[#555555] border border-[#E6E6E6] hover:bg-gray-50 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   REGION FILTERS STRIP
===================================================================== */

function RegionFilterStrip({ data }: { data: BlogPageData["regionFilters"] }) {
  return (
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] pb-[80px]">
      <div className="flex w-full max-w-[1440px] flex-col gap-[16px]">
        
        <div className="flex h-[14px] w-full items-center justify-between px-[20px] lg:px-[80px]">
          <span className="font-sans text-[12px] font-bold uppercase leading-[100%] text-[#8E8E8E]">
            {data.eyebrow}
          </span>
          <span className="font-sans text-[12px] font-normal leading-[100%] text-[#8E8E8E]">
            {data.countLabel}
          </span>
        </div>

        <div className="mx-[20px] h-[1px] bg-[#E6E6E6] lg:mx-[80px]" />

        <div className="no-scrollbar flex w-full overflow-x-auto px-[20px] pb-[10px] lg:px-[80px]">
          <div className="flex gap-[14px]">
            {data.regions.map((region) => (
              <Link 
                href="#" 
                key={region.name}
                className="group relative flex h-[180px] w-[130px] shrink-0 flex-col overflow-hidden rounded-[16px] border border-[#E6E6E6] transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={region.image}
                  alt={region.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="130px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-black/20 to-transparent" />
                <div className="relative z-10 mt-auto flex w-full p-[16px]">
                  <span className="font-sans text-[16px] font-bold leading-[100%] tracking-[-0.2px] text-[#FFFFFF]">
                    {region.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* =====================================================================
   FEATURED GUIDE SECTION
===================================================================== */

function FeaturedGuideSection({ data }: { data: BlogPageData["featuredGuide"] }) {
  return (
    <section className="flex w-full justify-center bg-[#F9F8F5] px-[20px] pb-[64px] pt-[80px] lg:px-[80px]">
      <div className="flex w-full max-w-[1280px] flex-col gap-[24px]">
        
        <div className="flex h-[16px] items-center gap-[8px]">
          <Award size={16} strokeWidth={2.5} className="text-[#7D7D7D]" />
          <span className="font-sans text-[14px] font-semibold uppercase leading-[100%] tracking-[1px] text-[#7D7D7D]">
            {data.label}
          </span>
        </div>

        <Link href="#" className="group flex flex-col rounded-[24px] border border-[#E6E6E6] bg-[#FFFFFF] p-[24px] shadow-sm transition-shadow hover:shadow-lg lg:flex-row lg:gap-[40px]">
          
          <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-[16px] lg:h-[400px] lg:w-[640px]">
            <Image 
              src={data.image} 
              alt={data.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>

          <div className="flex w-full max-w-[552px] flex-col gap-[20px] pt-[24px] lg:pt-[0px]">
            
            <div className="flex h-[26px] items-center gap-[8px] font-sans text-[14px] font-medium text-[#7D7D7D]">
              <span className="rounded-full bg-[#FDDB32] px-[10px] py-[4px] text-[12px] font-bold uppercase text-[#000000]">
                {data.country}
              </span>
              <span className="text-[#A3A3A3]">•</span>
              <span>{data.readTime}</span>
            </div>
            
            <h3 className="font-sans text-[28px] font-medium leading-[1.2] tracking-[-1px] text-[#000000] lg:text-[36px] lg:leading-[42px]">
              {data.title}
            </h3>
            
            <p className="font-sans text-[16px] font-normal leading-[24px] text-[#666666]">
              {data.description}
            </p>

            <div className="mt-auto h-[1px] w-full bg-[#E6E6E6]" />

            <div className="flex h-[40px] w-full items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <Image 
                  src={data.author.avatar} 
                  alt={data.author.name} 
                  width={40} 
                  height={40} 
                  className="h-[40px] w-[40px] rounded-full object-cover"
                />
                <div className="flex flex-col gap-[2px]">
                  <span className="font-sans text-[14px] font-medium leading-[1.2] text-[#000000]">
                    {data.author.name}
                  </span>
                  <span className="font-sans text-[12px] font-normal leading-[1.2] text-[#7D7D7D]">
                    {data.author.date}
                  </span>
                </div>
              </div>

              <button className="flex items-center justify-center gap-[6px] rounded-full bg-[#FDDB32] px-[20px] py-[10px] font-sans text-[14px] font-medium text-[#000000] transition-colors duration-200 hover:bg-[#e5c52c]">
                {data.buttonText} <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </Link>

      </div>
    </section>
  );
}

/* =====================================================================
   INDEPENDENT EXPERTS SECTION
===================================================================== */

function IndependentExpertSection({ data }: { data: BlogPageData["independentExperts"] }) {
  const iconMap: Record<string, React.ElementType> = {
    MapPin: MapPin,
    MessageSquare: MessageSquare,
  };

  return (
    <section className="flex w-full justify-center border-y border-[#E6E6E6] bg-[#FAF9F5] px-[20px] py-[64px] lg:px-[80px]">
      <div className="flex w-full max-w-[1280px] flex-col justify-between gap-[40px] lg:flex-row lg:items-center">
        
        <div className="flex w-full flex-col gap-[12px] lg:max-w-[620px]">
          <div className="flex h-[28px] w-fit items-center gap-[8px] rounded-full border border-[#E6E6E6] bg-[#FFFFFF] px-[12px] py-[6px]">
            <Award size={14} className="text-[#000000]" />
            <span className="font-sans text-[12px] font-bold uppercase leading-[100%] text-[#000000]">
              {data.pill}
            </span>
          </div>

          <h2 className="font-sans text-[24px] font-medium leading-[100%] tracking-[0px] text-[#000000] lg:text-[28px]">
            {data.title}
          </h2>

          <p className="font-sans text-[14px] font-normal leading-[20px] text-[#666666] lg:text-[15px] lg:leading-[22px]">
            {data.description}
          </p>
        </div>

        <div className="flex w-full flex-col gap-[16px] sm:flex-row lg:max-w-[620px] lg:gap-[24px]">
          {data.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon];

            return (
              <div 
                key={idx} 
                className="flex flex-1 flex-col gap-[8px] rounded-[16px] border border-[#E6E6E6] bg-[#FFFFFF] p-[20px]"
              >
                {Icon && <Icon size={20} className="mb-[4px] text-[#000000]" />}
                <h3 className="font-sans text-[16px] font-bold leading-[22px] tracking-[0px] text-[#000000] lg:text-[18px]">
                  {feature.title}
                </h3>
                <p className="font-sans text-[13px] font-normal leading-[18px] text-[#7D7D7D] lg:leading-[20px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* =====================================================================
   ALL DESTINATIONS SECTION
===================================================================== */

function AllDestinationsSection({ data }: { data: BlogPageData["allDestinations"] }) {
  return (
    <section className="flex w-full flex-col items-center bg-[#FFFFFF] px-[20px] pb-[80px] pt-[60px] lg:px-[80px]">
      <div className="flex w-full max-w-[1280px] flex-col gap-[32px]">
        
        <h2 className="font-sans text-[24px] font-bold text-[#000000] lg:text-[32px]">
          {data.title}
        </h2>

        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {data.guides.map((guide, idx) => (
            <Link 
              href={guide.href} 
              key={idx} 
              className="group flex h-[410px] w-full flex-col overflow-hidden rounded-[20px] border border-[#E6E6E6] bg-[#FFFFFF] transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-[200px] w-full shrink-0">
                <Image 
                  src={guide.image} 
                  fill 
                  alt={guide.title} 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              <div className="flex flex-1 flex-col p-[18px]">
                <div className="flex items-center gap-[8px] font-sans text-[12px] font-medium text-[#8E8E8E]">
                  <span className="rounded-full border border-[#E6E6E6] px-[8px] py-[2px] text-[10px] font-bold uppercase tracking-[0.5px] text-[#8E8E8E]">
                    {guide.country}
                  </span>
                  <span>{guide.readTime}</span>
                </div>
                
                <h3 className="mt-[12px] font-sans text-[18px] font-medium leading-[24px] text-[#000000] line-clamp-2">
                  {guide.title}
                </h3>
                
                <p className="mt-[8px] font-sans text-[13px] font-normal leading-[18px] text-[#666666] line-clamp-3">
                  {guide.description}
                </p>

                <div className="mt-auto flex items-center gap-[4px] font-sans text-[13px] font-medium leading-[100%] text-[#000000]">
                  {guide.exploreText} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

/* =====================================================================
   NEWSLETTER SECTION
===================================================================== */

function BlogNewsletterSection({ data }: { data: BlogPageData["newsletter"] }) {
  return (
    <section className="flex w-full justify-center bg-[#FFFFFF] px-[20px] py-[80px] lg:px-[80px]">
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-[24px]">
        
        <div className="flex w-full max-w-[512px] flex-col items-center gap-[12px] text-center">
          <h2 className="font-sans text-[28px] font-medium leading-[100%] text-[#000000] lg:text-[32px]">
            {data.title}
          </h2>
          <p className="font-sans text-[15px] font-normal leading-[24px] text-[#666666] lg:text-[16px]">
            {data.subtitle}
          </p>
        </div>

        <div className="flex flex-col items-center gap-[12px]">
          
          {/* Form Wrapper - 12px Gap */}
          <form className="flex w-full flex-col items-center gap-[12px] sm:flex-row sm:justify-center">
            
            {/* Input Field: 320x40, 12px Radius, #F9FBF5 bg, #7D7D7D placeholder */}
            <input 
              type="email"
              placeholder={data.placeholder}
              aria-label="Email address"
              className="h-[40px] w-full shrink-0 rounded-[12px] border border-[#E6E6E6] bg-[#F9FBF5] px-[16px] font-sans text-[14px] font-normal leading-[100%] text-[#000000] placeholder:text-[#7D7D7D] outline-none focus:border-[#000000] sm:w-[320px]"
            />

            {/* Subscribe Button: 144x40, 12px Radius, #FDDB32 bg */}
            <button 
              type="submit" 
              className="flex h-[40px] w-full shrink-0 items-center justify-center rounded-[12px] bg-[#FDDB32] font-sans text-[14px] font-medium leading-[100%] text-[#000000] transition-colors hover:bg-[#e5c52c] sm:w-[144px]"
            >
              {data.buttonText}
            </button>
            
          </form>

          {/* Footer Text */}
          <span className="font-sans text-[12px] font-normal leading-[100%] text-[#7D7D7D]">
            {data.footerText}
          </span>
          
        </div>

      </div>
    </section>
  );
}

/* =====================================================================
   MAIN PAGE LAYOUT
===================================================================== */

export default function BlogPage({ data = blogData }: { data?: BlogPageData }) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#FFFFFF]">
      <Header data={headerData} />
      <BlogHero data={data.hero} />
      <CategoryStrip categories={data.categories} />
      <RegionFilterStrip data={data.regionFilters} />
      <FeaturedGuideSection data={data.featuredGuide} />
      <IndependentExpertSection data={data.independentExperts} />
      <AllDestinationsSection data={data.allDestinations} />
      <BlogNewsletterSection data={data.newsletter} />
      <Footer data={footerData} />
    </main>
  );
}