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
      <div className="mx-auto flex w-full max-w-[1225px] flex-col gap-[33px] px-6 py-[80px] lg:px-0">

        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">

          <div className="flex flex-col gap-[24px]">
            
            {/* Logo and Pills Wrapper - Matches Figma Layout precisely (261px width, 9px gap) */}
            <div className="flex w-full max-w-[261px] flex-col gap-[9px]">
              
              <Link href="/" className="flex items-center">
                <Image
                  src={data.logo.src}
                  alt={data.logo.alt}
                  width={data.logo.width}
                  height={data.logo.height}
                  className="h-auto w-full object-contain"
                />
              </Link>

              {/* Locale Pills Row - Height 32px */}
              <div className="flex flex-wrap items-center gap-[8px] min-w-max">
                {data.locales.map((locale, index) => (
                  <button 
                    key={index} 
                    type="button" 
                    aria-label={locale.arrowAlt} 
                    className="flex h-[32px] items-center gap-[8px] rounded-full border border-white/20 bg-transparent px-[12px] font-sans text-[12px] font-medium leading-none text-white transition-colors hover:bg-white/10"
                  >
                    {locale.label}
                    <Image
                      src={locale.arrowSrc}
                      alt={locale.arrowAlt}
                      aria-hidden="true"
                      width={10}
                      height={10}
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
              
            </div>

            {/* Description & Socials */}
            <div className="flex flex-col gap-[16px] mt-2">
              <p className="w-full max-w-[320px] font-sans text-[16px] font-normal leading-[24px] text-white">
                {data.description}
              </p>

              <nav aria-label={data.socialNavAriaLabel} className="flex items-center gap-[24px]">
                {data.socialLinks.map((social) => (
                  <Link 
                    key={social.alt} 
                    href={social.href} 
                    aria-label={social.alt}
                    className="flex items-center justify-center !text-white transition-opacity hover:opacity-70"
                  >
                    {socialIcons[social.icon].icon}
                  </Link>
                ))}
              </nav>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-4 lg:flex lg:gap-[80px]">
            {data.columns.map((col, i) => (
              <div
                key={i}
                className={`flex flex-col gap-4 ${data.mobileOrder[i]} sm:order-none`}
              >
                <span className="font-sans text-[16px] font-medium leading-[1.5] text-white">
                  {col.title}
                </span>

                <ul className="m-0 flex list-none flex-col gap-0 p-0">
                  {col.links.map((link) => (
                    <li key={link} className="m-0 p-0">
                      <Link
                        href="#"
                        className="block py-[8px] font-sans text-[14px] font-normal leading-[20px] !text-[#E0E0E0] transition-colors hover:!text-white"
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

        <div className="flex flex-col">
          <div className="h-px w-full bg-white/10" />
          <div className="flex flex-col items-center pt-[33px] text-center">
            <div className="flex w-full max-w-[889px] flex-col gap-[12px]">
              <p className="font-sans text-[16px] font-normal leading-[24px] text-white">
                {data.copyright}
              </p>
              <p className="font-sans text-[16px] font-normal leading-[24px] text-white">
                {data.disclaimer}
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}