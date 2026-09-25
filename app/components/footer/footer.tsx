'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Check, Search } from "lucide-react";
import { AU, CA, CH, DE, DK, ES, EU, FI, FR, GB, IT, JP, NL, NO, SE, US } from "country-flag-icons/react/3x2";
import { footerData, type FooterData } from "../../../lib/data/footerData";

const footerFlags = { AU, CA, CH, DE, DK, ES, EU, FI, FR, GB, IT, JP, NL, NO, SE, US };

const countryOptions = [
  { label: "Finland", code: "FI" },
  { label: "United States", code: "US" },
  { label: "United Kingdom", code: "GB" },
  { label: "Canada", code: "CA" },
  { label: "Australia", code: "AU" },
  { label: "Germany", code: "DE" },
  { label: "France", code: "FR" },
  { label: "Spain", code: "ES" },
  { label: "Italy", code: "IT" },
  { label: "Netherlands", code: "NL" },
];

const languageOptions = [
  { label: "English (UK)", code: "GB" },
  { label: "English (US)", code: "US" },
  { label: "Suomi (FI)", code: "FI" },
  { label: "Deutsch (DE)", code: "DE" },
  { label: "Français (FR)", code: "FR" },
  { label: "Español (ES)", code: "ES" },
  { label: "Italiano (IT)", code: "IT" },
  { label: "Nederlands (NL)", code: "NL" },
  { label: "Svenska (SE)", code: "SE" },
  { label: "Norsk (NO)", code: "NO" },
];

const currencyOptions = [
  { label: "EUR", code: "EU", symbol: "€", description: "Euro" },
  { label: "USD", code: "US", symbol: "$", description: "US Dollar" },
  { label: "GBP", code: "GB", symbol: "£", description: "British Pound" },
  { label: "CAD", code: "CA", symbol: "C$", description: "Canadian Dollar" },
  { label: "AUD", code: "AU", symbol: "A$", description: "Australian Dollar" },
  { label: "JPY", code: "JP", symbol: "¥", description: "Japanese Yen" },
  { label: "CHF", code: "CH", symbol: "Fr.", description: "Swiss Franc" },
  { label: "SEK", code: "SE", symbol: "kr", description: "Swedish Krona" },
  { label: "NOK", code: "NO", symbol: "kr", description: "Norwegian Krone" },
  { label: "DKK", code: "DK", symbol: "kr", description: "Danish Krone" },
];

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
  const [openDropdown, setOpenDropdown] = useState<"country" | "language" | "currency" | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<DropdownOption>(countryOptions[0]);
  const [selectedLanguage, setSelectedLanguage] = useState<DropdownOption>(languageOptions[0]);
  const [selectedCurrency, setSelectedCurrency] = useState<DropdownOption>(currencyOptions[0]);

  useEffect(() => {
    if (!openDropdown) {
      return;
    }

    const closeOnOutsideClick = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Element && !target.closest("[data-footer-dropdown]")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [openDropdown]);

  const renderFlag = (code: keyof typeof footerFlags) => {
    const Flag = footerFlags[code];
    return <Flag className="h-[18px] w-[26px] shrink-0 object-cover" aria-hidden="true" />;
  };

  return (
    <footer aria-label="Site footer" className="bg-black text-white">
      <div className="mx-auto flex w-full max-w-[1225px] flex-col gap-[33px] px-6 py-[80px] lg:px-0">

        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">

          <div className="flex flex-col gap-[24px]">
            
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

              <div className="flex flex-wrap items-center gap-[8px] min-w-max">
                <FooterDropdown
                  label={`${selectedCountry.label}`}
                  isOpen={openDropdown === "country"}
                  onToggle={() => setOpenDropdown(openDropdown === "country" ? null : "country")}
                  onSelect={(option) => { setSelectedCountry(option); setOpenDropdown(null); }}
                  options={countryOptions}
                  selected={selectedCountry.code ?? selectedCountry.label}
                  renderOption={(option) => <>{renderFlag(option.code as keyof typeof footerFlags)}<span>{option.label}</span></>}
                />
                <FooterDropdown
                  label={selectedLanguage.label}
                  isOpen={openDropdown === "language"}
                  onToggle={() => setOpenDropdown(openDropdown === "language" ? null : "language")}
                  onSelect={(option) => { setSelectedLanguage(option); setOpenDropdown(null); }}
                  options={languageOptions}
                  selected={selectedLanguage.label}
                  renderOption={(option) => <>{renderFlag(option.code as keyof typeof footerFlags)}<span>{option.label}</span></>}
                />
                <FooterDropdown
                  label={`${selectedCurrency.label} ${selectedCurrency.symbol}`}
                  isOpen={openDropdown === "currency"}
                  onToggle={() => setOpenDropdown(openDropdown === "currency" ? null : "currency")}
                  onSelect={(option) => { setSelectedCurrency(option); setOpenDropdown(null); }}
                  options={currencyOptions}
                  selected={selectedCurrency.label}
                  renderOption={(option) => <>{renderFlag(option.code as keyof typeof footerFlags)}<span className="w-[34px] text-center text-[#A5A5A5]">{option.label}</span><span className="w-[24px]">{option.symbol}</span><span>{option.description}</span></>}
                />
              </div>
              
            </div>

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
                    <li key={link.label} className="m-0 p-0">
                      <Link
                        href={link.href}
                        className="block py-[8px] font-sans text-[14px] font-normal leading-[20px] !text-[#E0E0E0] transition-colors hover:!text-white"
                      >
                        {link.label}
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

type DropdownOption = {
  label: string;
  code?: string;
  symbol?: string;
  description?: string;
};

function FooterDropdown({
  label,
  isOpen,
  onToggle,
  onSelect,
  options,
  selected,
  renderOption,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (option: DropdownOption) => void;
  options: DropdownOption[];
  selected: string;
  renderOption: (option: DropdownOption) => React.ReactNode;
}) {
  return (
    <div className="relative" data-footer-dropdown>
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex h-[32px] items-center gap-[6px] rounded-full border border-white/20 bg-[#1C1C1C] px-[12px] font-sans text-[12px] font-medium leading-none text-white transition-colors hover:border-white/40"
      >
        {label}
        <ChevronDown size={15} strokeWidth={2.5} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-[40px] z-50 w-[300px] rounded-[16px] border border-white/20 bg-[#171819] p-[12px] shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
          <div className="mb-[10px] flex h-[38px] items-center gap-[8px] rounded-[10px] border border-white/20 px-[10px] text-[#A5A5A5]">
            <Search size={16} />
            <span className="font-sans text-[13px]">Search {label.toLowerCase()}...</span>
          </div>
          <div className="flex max-h-[280px] flex-col gap-[2px] overflow-y-auto">
            {options.map((option) => (
              <button
                type="button"
                key={option.label}
                onClick={() => onSelect(option)}
                className={`flex min-h-[38px] w-full items-center gap-[10px] rounded-[8px] px-[10px] text-left font-sans text-[14px] text-white transition-colors hover:bg-white/10 ${selected === (option.code ?? option.label) ? "bg-[#514D1A]" : ""}`}
              >
                {renderOption(option)}
                {selected === (option.code ?? option.label) && <Check size={17} className="ml-auto shrink-0 text-[#FDDB32]" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}