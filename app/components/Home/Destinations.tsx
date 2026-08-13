'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Destinations() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(900);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.data?.type === 'destinations-widget-height' && event.data.height > 0) {
        setIframeHeight(event.data.height);
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <section className="w-full bg-[#ffffff] py-[80px] text-[#111827]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-[32px] max-[430px]:px-4">
        
        {/* Header Section */}
        <div className="mb-[48px] flex items-start justify-between gap-8 max-[768px]:flex-col max-[768px]:items-stretch">
          <div className="flex max-w-[700px] flex-col gap-[10px]">
            {/* Display L: 48px, Medium, 100% (Desktop) | Title L: 24px (Mobile) */}
            <h2 className="font-sans text-[48px] font-medium leading-none text-[#111827] max-[768px]:text-[24px]">
              Discover Your Next Destination
            </h2>
            {/* Body L: 16px, Regular, 150% (Desktop) | Body M: 14px (Mobile) */}
            <p className="font-sans text-[16px] font-normal leading-[1.5] text-[#6B7280] max-[768px]:text-[14px] max-[768px]:leading-[1.43]">
              Discover popular cities and compare flights and hotels before you book.
            </p>
          </div>
          
          {/* Title S: 14px, Medium, 143% */}
          <button className="inline-flex h-[44px] shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[24px] font-sans text-[14px] font-medium leading-[1.43] text-[#111827] transition-colors hover:bg-[#e5c52c] max-[768px]:self-start">
            More Destinations
            <Image 
              src="/Homepage/Section 5/Icons/KQY0VNx64.png" 
              alt="Arrow Right" 
              width={14} 
              height={14} 
              className="object-contain" 
            />
          </button>
        </div>

        {/* Cards Grid - 4 Columns */}
        <div className="w-full overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <iframe
            ref={iframeRef}
            title="TravelMommy destinations widget"
            src="/destinations-widget.html"
            style={{ height: iframeHeight }}
            className="w-full border-0 bg-transparent transition-[height] duration-300"
          />
        </div>

      </div>
    </section>
  );
}