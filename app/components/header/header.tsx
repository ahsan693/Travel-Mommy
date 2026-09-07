'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { headerData, type HeaderData } from "../../../lib/data/headerData";

export default function Header({ data = headerData }: { data?: HeaderData }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 lg:px-10 py-6">
      <div className="mx-auto flex w-full max-w-[1216px] items-center justify-between gap-[24px] rounded-[20px] bg-[#f5f5f5] p-[12px] relative">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image 
            src={data.logo.src} 
            alt={data.logo.alt} 
            width={data.logo.width} 
            height={data.logo.height} 
            className="h-[30px] w-auto object-contain" 
          />
        </Link>

        {/* Desktop Nav (Hidden on Mobile) */}
        <nav className="hidden lg:flex flex-1 items-center justify-end gap-[4px]">
          {/* Nav Links - Mapped to Title S: 14px, Medium, 143% */}
          {data.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex h-[40px] items-center rounded-[14px] px-[16px] font-sans text-[14px] font-medium leading-[1.43] text-black transition-colors hover:bg-white"
          >
            {item.label}
          </Link>
          ))}

          <div className="w-[6px]" />

          {/* Search Button - Mapped to Title S: 14px, Medium, 143% */}
          <Link
            href={data.search.href}
            className="relative flex h-[40px] min-w-[100px] items-center justify-center gap-[10px] rounded-[14px] bg-[#fddb32] px-[18px] font-sans text-[14px] font-medium leading-[1.43] text-black shadow-[0px_16px_8px_0px_rgba(31,31,31,0.01),0px_12px_6px_0px_rgba(31,31,31,0.04),0px_4px_4px_0px_rgba(31,31,31,0.07),0px_1.5px_3px_0px_rgba(31,31,31,0.08),0px_0px_0px_1px_#c29700] transition-all hover:brightness-105"
          >
            {data.search.label}
            <Image 
              src={data.search.iconSrc} 
              alt="Arrow Right" 
              width={data.search.desktopIconSize} 
              height={data.search.desktopIconSize} 
              className="object-contain" 
            />
            <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.12)]" />
          </Link>
        </nav>

        {/* Mobile Menu Button (Hidden on Desktop) */}
        <button 
          onClick={toggleMobileMenu}
          className="flex lg:hidden h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[12px] bg-[#fddb32] text-black transition-transform hover:brightness-105 active:scale-95"
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
        >
          {isMobileMenuOpen ? (
            <X size={22} strokeWidth={2.5} />
          ) : (
            <Menu size={22} strokeWidth={2.5} />
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 flex flex-col rounded-[20px] bg-[#f5f5f5] p-[12px] shadow-lg lg:hidden">
            <nav className="flex flex-col gap-[4px]">
              {data.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex h-[48px] items-center rounded-[14px] px-[16px] font-sans text-[16px] font-medium text-black transition-colors hover:bg-white"
              >
                {item.label}
              </Link>
              ))}

              <div className="my-[4px] h-[1px] w-full bg-black/5" />

              <Link
                href={data.search.href}
                onClick={closeMobileMenu}
                className="relative mt-1 flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[14px] bg-[#fddb32] px-[18px] font-sans text-[16px] font-medium text-black transition-all hover:brightness-105"
              >
                {data.search.label}
                <Image 
                  src={data.search.iconSrc} 
                  alt="Arrow Right" 
                  width={18} 
                  height={18} 
                  className="object-contain" 
                />
              </Link>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
