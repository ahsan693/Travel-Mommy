'use client';

import Image from "next/image";
import Link from "next/link";
import { footerData, type FooterData } from "../../../lib/data/footerData";

const socialIcons = {
  instagram: {
    alt: "Instagram",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  facebook: {
    alt: "Facebook",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    )
  },
  tiktok: {
    alt: "TikTok",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V2a5 5 0 0 0 5 5h-2a3 3 0 0 1-3-3V2H9v10Z"></path>
      </svg>
    )
  }
};

export default function Footer({ data = footerData }: { data?: FooterData }) {
  return (
    <footer aria-label="Site footer" className="bg-black text-white">
      {/* Applied ~158px top padding on desktop per Figma specs */}
      <div className="mx-auto w-full max-w-[1216px] px-6 pb-10 pt-[80px] lg:px-10 lg:pb-12 lg:pt-[158px]">

        {/* ===== Top frame: logo block (left) + nav columns (right) ===== */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-[33px]">

          {/* Logo + locale pill + blurb + socials */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src={data.logo.src}
                alt={data.logo.alt}
                width={data.logo.width}
                height={data.logo.height}
                className="h-32 w-auto object-contain lg:h-[117px]"
              />
            </Link>

            {/* Locale Pill */}
            <button type="button" aria-label="Change region and language" className="flex w-fit items-center gap-[8px] rounded-[10px] border border-white/15 bg-white/5 px-[12px] py-[8px] font-sans text-[12px] font-medium leading-[1.33] text-white transition-colors hover:bg-white/10">
              <Image
                src={data.locale.iconSrc}
                alt="Region Settings"
                width={14}
                height={14}
                className="object-contain"
              />
              {data.locale.label}
              <Image
                src={data.locale.arrowSrc}
                alt="Dropdown Arrow"
                aria-hidden="true"
                width={12}
                height={12}
                className="object-contain"
              />
            </button>

            {/* Description text + social icons under logo */}
            <div className="flex flex-col gap-[10px]">
              <p className="w-full max-w-[350px] font-sans text-[16px] font-normal leading-[24px] text-white">
                {data.description}
              </p>

              {/* Social Icons - Using !text to force color override */}
              <nav aria-label="Social media" className="flex items-center gap-5 pt-2">
                {data.socialLinks.map((social) => (
                  <Link 
                    key={social.alt} 
                    href="#" 
                    aria-label={social.alt}
                    className="flex h-11 w-11 items-center justify-center !text-[#7D7D7D] transition-colors hover:!text-white"
                  >
                    {socialIcons[social.icon].icon}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Nav columns group */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-4 lg:flex lg:gap-16">
            {data.columns.map((col, i) => (
              <div
                key={i}
                className={`flex flex-col gap-4 ${data.mobileOrder[i]} sm:order-none`}
              >
                {/* Column Title (Kept White) */}
                <span className="font-sans text-[16px] font-medium leading-[1.5] text-white">
                  {col.title}
                </span>

                {/* Navigation Links - Using !text to force override global styles */}
                <ul className="m-0 flex list-none flex-col gap-0 p-0">
                  {col.links.map((link) => (
                    <li key={link} className="m-0 p-0">
                      <Link
                        href="#"
                        className="block py-[8px] font-sans text-[14px] font-medium leading-[20px] !text-[#7D7D7D] transition-colors hover:!text-white"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Bottom frame: dividers and legal text ===== */}
        <div className="mt-16 flex flex-col lg:mt-[33px]">

          {/* Divider 1 */}
          <div className="h-px w-full bg-white/10" />

          {/* Legal links perfectly matched to Figma dimensions/layout */}
          <div className="flex justify-center py-[33px]">
            <div className="flex w-[364px] flex-col items-center justify-center font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-white">
              
              {/* Line 1: 3 Links */}
              <div className="flex items-center gap-[6px] whitespace-nowrap">
                <Link href="#" className="underline transition-colors hover:text-white/70">{data.legalLinks[0]}</Link>
                <span>|</span>
                <Link href="#" className="underline transition-colors hover:text-white/70">{data.legalLinks[1]}</Link>
                <span>|</span>
                <Link href="#" className="underline transition-colors hover:text-white/70">{data.legalLinks[2]}</Link>
              </div>

              {/* Line 2: 2 Links */}
              <div className="flex items-center gap-[6px] whitespace-nowrap">
                <Link href="#" className="underline transition-colors hover:text-white/70">{data.legalLinks[3]}</Link>
                <span>|</span>
                <Link href="#" className="underline transition-colors hover:text-white/70">{data.legalLinks[4]}</Link>
              </div>

            </div>
          </div>

          {/* Divider 2 */}
          <div className="h-px w-full bg-white/10" />

          {/* Copyright + disclaimer */}
          <div className="flex flex-col items-center pt-[33px] text-center">
            <p className="font-sans text-[16px] font-normal leading-[24px] text-white">
              {data.copyright}
            </p>

            <div className="h-[24px]" />

            <p className="max-w-[889px] font-sans text-[16px] font-normal leading-[24px] text-[#E0E0E0]">
              {data.disclaimer}
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}