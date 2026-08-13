'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftRight,
  Clock,
  Minus,
  Plus,
  Mail,
} from "lucide-react";

// ============================================================================
// IMPORTANT: Adjust these import paths to match your project's folder structure
// ============================================================================
import Header from "../components/Home/header";
import Footer from "../components/Home/footer";
import HomeSearchWidget from "../components/Home/SearchWidget";

const ICON_PATH = "/Homepage/Section 1/Header Icons/Icons";

/* ----------------------------------------------------------------
   STATIC DATA
---------------------------------------------------------------- */

const desktopFields = [
  { key: "from", iconSrc: `${ICON_PATH}/plane - 01.png`, label: "Departure", value: "Dublin (DUB)", width: "w-[197px]" },
  { key: "to", iconSrc: `${ICON_PATH}/plane - 03.png`, label: "To", value: "Country, City or air...", width: "w-[198px]" },
  { key: "depart", iconSrc: `${ICON_PATH}/calendar - 02.png`, label: "Depart", value: "08 Nov 2025", width: "w-[193px]" },
  { key: "return", iconSrc: `${ICON_PATH}/calendar - 3.png`, label: "Return", value: "08 Jan 2026", width: "w-[193px]" },
  { key: "travellers", iconSrc: `${ICON_PATH}/join a group - 01.png`, label: "Travellers and Cabin Class", value: "01 Adult 01 Child", width: "w-[273px]" },
];

const mobileFields = [
  { key: "from", iconSrc: `${ICON_PATH}/plane - 01.png`, label: "Departure", value: "Dublin (DUB)" },
  { key: "to", iconSrc: `${ICON_PATH}/plane - 03.png`, label: "To", value: "Country, City or Airport" },
];

const mobileSplitFields = [
  { key: "depart", iconSrc: `${ICON_PATH}/calendar - 02.png`, label: "Depart", value: "08 Nov" },
  { key: "return", iconSrc: `${ICON_PATH}/calendar - 3.png`, label: "Return", value: "08 Jan" },
];

const mobileTravellersField = { key: "travellers", iconSrc: `${ICON_PATH}/join a group - 01.png`, label: "Travellers", value: "01 Adult, 01 Child" };

const cheapFlights = [
  { city: "London", route: "Dub → LHR", price: "€24", airline: "Ryanair", duration: "1h 20m", image: "/Homepage/Section 3/Images/Image Container.png" },
  { city: "London", route: "Dub → LGW", price: "€24", airline: "Ryanair", duration: "1h 25m", image: "/Homepage/Section 3/Images/Image Container-1.png" },
  { city: "Barcelona", route: "Dub → BCN", price: "€24", airline: "Ryanair", duration: "2h 35m", image: "/Homepage/Section 3/Images/Image Container-2.png" },
  { city: "Lisbon", route: "Dub → LIS", price: "€24", airline: "Ryanair", duration: "2h 50m", image: "/Homepage/Section 3/Images/Image Container-3.png" },
  { city: "New York", route: "Dub → JFK", price: "€189", airline: "Aer Lingus", duration: "7h 15m", image: "/Homepage/Section 3/Images/Image Container-4.png" },
  { city: "Rome", route: "Dub → FCO", price: "€34", airline: "Ryanair", duration: "3h 10m", image: "/Homepage/Section 3/Images/Image Container-5.png" },
  { city: "Dubai", route: "Dub → DXB", price: "€245", airline: "Emirates", duration: "7h 45m", image: "/Homepage/Section 3/Images/Image Container-6.png" },
  { city: "Amsterdam", route: "Dub → AMS", price: "€28", airline: "Ryanair", duration: "1h 40m", image: "/Homepage/Section 3/Images/Image Container-7.png" },
];

const mobileFlights = [
  { city: "London", route: "Dub → LHR", price: "€24", airline: "Ryanair", duration: "1h 20m", image: "https://images.pexels.com/photos/16230720/pexels-photo-16230720.jpeg?auto=compress&cs=tinysrgb&w=800&q=80", flag: "https://flagcdn.com/gb.svg" },
  { city: "London", route: "Dub → LGW", price: "€24", airline: "Ryanair", duration: "1h 25m", image: "https://images.pexels.com/photos/16230720/pexels-photo-16230720.jpeg?auto=compress&cs=tinysrgb&w=800&q=80", flag: "https://flagcdn.com/gb.svg" },
  { city: "Barcelona", route: "Dub → BCN", price: "€29", airline: "Ryanair", duration: "2h 35m", image: "https://images.unsplash.com/photo-1578095172812-dcc191c5aed8?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/es.svg" },
  { city: "Lisbon", route: "Dub → LIS", price: "€31", airline: "Ryanair", duration: "2h 50m", image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/pt.svg" },
  { city: "New York", route: "Dub → JFK", price: "€189", airline: "Aer Lingus", duration: "7h 15m", image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/us.svg" },
  { city: "Rome", route: "Dub → FCO", price: "€34", airline: "Ryanair", duration: "3h 10m", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/it.svg" },
  { city: "Dubai", route: "Dub → DXB", price: "€245", airline: "Emirates", duration: "7h 45m", image: "https://images.unsplash.com/photo-1623725206109-3ef2c2eec00e?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/ae.svg" },
  { city: "Amsterdam", route: "Dub → AMS", price: "€28", airline: "Ryanair", duration: "1h 40m", image: "https://images.unsplash.com/photo-1580996378027-23040f16f157?auto=format&w=800&q=80&fit=crop", flag: "https://flagcdn.com/nl.svg" },
];

const whyCompareFeatures = [
  {
    iconSrc: "/Flights Page/Section 3/Icons/credit card declined - 02.png",
    title: "No Hidden Booking Fees",
    description: "TravelMommy doesn't sell flights or charge booking fees. Compare prices for free and choose the deal that works best for you.",
  },
  {
    iconSrc: "/Flights Page/Section 3/Icons/follow user - 01.png",
    title: "Book with Trusted Partners",
    description: "View the latest flight prices and availability so you can compare deals before booking with your preferred travel provider.",
  },
  {
    iconSrc: "/Flights Page/Section 3/Icons/time refresh - 02.png",
    title: "Live Prices, Updated Daily",
    description: "View the latest flight prices and availability so you can compare deals before booking with your preferred travel provider.",
  },
];

const popularAirlines = [
  { name: "Emirates", logo: "/Flights Page/Section 4/Images/Emirates-Logo 1.png" },
  { name: "American Airlines", logo: "/Flights Page/Section 4/Images/american-airlines-logo-1 1.png" },
  { name: "RYANAIR", logo: "/Flights Page/Section 4/Images/Ryanair-Logo 1.png" },
  { name: "QATAR AIRWAYS", logo: "/Flights Page/Section 4/Images/qatar-airways-logo 1.png" },
  { name: "BRITISH AIRWAYS", logo: "/Flights Page/Section 4/Images/Group.png" },
  { name: "ETIHAD", logo: "/Flights Page/Section 4/Images/Etihad-airways-logo.svg 1.png" },
  { name: "KLM", logo: "/Flights Page/Section 4/Images/KLM-Logo 1.png" },
  { name: "Lufthansa", logo: "/Flights Page/Section 4/Images/Lufthansa-Logo.wine 1.png" },
  { name: "TURKISH AIRLINES", logo: "/Flights Page/Section 4/Images/Turkish-Airlines-Emblem 1.png" },
  { name: "easyJet", logo: "/Flights Page/Section 4/Images/Vector.png" },
];

const popularAirports = [
  { name: "Dublin Airport", code: "DUB", location: "Dublin, Ireland" },
  { name: "Heathrow Airport", code: "LHR", location: "London, United Kingdom" },
  { name: "Dubai International", code: "DXB", location: "Dubai, United Arab Emirates" },
  { name: "John F. Kennedy", code: "JFK", location: "New York, United States" },
  { name: "Los Angeles Intl", code: "LAX", location: "Los Angeles, United States" },
  { name: "Amsterdam Schiphol", code: "AMS", location: "Amsterdam, Netherlands" },
];

const faqs = [
  {
    question: "How does TravelMommy compare flight prices?",
    answer: "TravelMommy displays prices provided by airlines and trusted travel partners. Because fares can change quickly, the final price is confirmed when you complete your booking on the provider's website.",
  },
  {
    question: "Does TravelMommy charge booking fees?",
    answer: "No. TravelMommy is a travel metasearch platform. We compare flight prices but do not sell tickets directly or charge booking fees. You always book with the airline or travel provider you choose.",
  },
  {
    question: "Can I compare flights from different airlines?",
    answer: "Yes. TravelMommy lets you compare flights from multiple airlines and travel providers, making it easier to find the best combination of price, travel time and convenience.",
  },
  {
    question: "When is the best time to book cheap flights?",
    answer: "Flight prices can change based on demand, season and availability. Comparing fares early and checking different travel dates can help you find cheaper flights.",
  },
  {
    question: "Are the flight prices shown on TravelMommy live?",
    answer: "TravelMommy displays prices provided by airlines and trusted travel partners. Because fares can change quickly, the final price is confirmed when you complete your booking on the provider's website.",
  },
  {
    question: "Can I book flights directly on TravelMommy?",
    answer: "No. TravelMommy helps you compare flight prices from multiple providers. When you choose a flight, you'll be redirected to the airline or booking partner to complete your booking securely.",
  },
  {
    question: "Which airlines can I compare on TravelMommy?",
    answer: "You can compare flights from a wide range of domestic and international airlines, as well as trusted online travel agencies, helping you find the best available deal for your journey.",
  },
  {
    question: "Why should I compare flights before booking?",
    answer: "Comparing flights helps you find the best available fare, discover alternative airlines or travel dates, and make informed booking decisions without searching multiple websites individually.",
  },
];

/* ----------------------------------------------------------------
   MAIN PAGE COMPONENT
---------------------------------------------------------------- */

export default function FlightPage() {
  return (
    <main className="bg-[#f9fbf5]">
      <Header />
      <Hero />
      <CheapFlightsFromDublinSection />
      <WhyCompareFlightsSection />
      <PopularAirlinesSection />
      <PopularAirportsSection />
      <FaqSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}

/* ----------------------------------------------------------------
   HERO SECTIONS
---------------------------------------------------------------- */

function HeroDesktop() {
  return (
    <section className="relative hidden min-h-[820px] flex-col items-center overflow-hidden pt-[100px] lg:flex">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Flights Page/Section 1/Header Images/nils-nedel-ONpGBpns3cs-unsplash.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Exact 27% Black overlay from color spec */}
        <div className="absolute inset-0 bg-[#000000]/[0.27]" />
      </div>

      <div className="relative z-10 flex w-full max-w-[1280px] flex-col px-8 pb-[48px] pt-[28px]">
        
        {/* Headline - Exact specs applied (110px size, 98px leading, -5px tracking) */}
        <h1 className="w-full max-w-[1400px] font-sans text-[110px] font-medium leading-[98px] tracking-[-5px] text-white">
          <span className="block">Compare Flights from</span>
          <span className="block">500+ Airlines &amp; Travel Sites</span>
        </h1>

        <div className="mt-[28px] flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="flex max-w-[500px] flex-col items-start gap-[18px]">
            {/* Subheading / Description - Exact specs applied */}
            <p className="font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-white">
              Compare live flight prices from airlines and trusted travel partners to find the best fare before you book.
            </p>
          </div>
        </div>

        <div className="mt-[64px] w-full">
          <SearchWidget />
        </div>
        
      </div>
    </section>
  );
}

function HeroMobile() {
  return (
    // Added more top padding here: changed pt-[88px] to pt-[120px]
    <section className="relative flex flex-col overflow-hidden pb-[32px] pt-[120px] lg:hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Flights Page/Section 1/Header Images/nils-nedel-ONpGBpns3cs-unsplash.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Exact 27% Black overlay from color spec */}
        <div className="absolute inset-0 bg-[#000000]/[0.27]" />
      </div>

      <div className="relative z-10 flex flex-col px-[20px]">
        {/* Display L */}
        <h1 className="w-full max-w-full font-sans text-[48px] font-medium leading-none text-white">
          <span className="block">Compare Cheap</span>
          <span className="block">Flights from Hundreds</span>
          <span className="block">of Airlines</span>
        </h1>

        {/* Body M */}
        <p className="mt-[16px] max-w-[300px] font-sans text-[14px] font-normal leading-[1.43] text-white/90">
          Compare live flight prices from airlines and trusted travel partners to find the best fare before you book.
        </p>

        <div className="mt-[32px]">
          <SearchWidget />
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <>
      <HeroMobile />
      <HeroDesktop />
    </>
  );
}

/* ----------------------------------------------------------------
   SEARCH WIDGET SECTIONS
---------------------------------------------------------------- */

function DesktopCheckbox({ checked, onChange, label }: any) {
  return (
    <label className="flex cursor-pointer items-center gap-[8px]">
      <span
        className={`flex size-[16px] shrink-0 items-center justify-center rounded-[5px] border transition-colors ${
          checked ? "border-[#fddb32] bg-[#fddb32]" : "border-[#e6e6e6] bg-[#f9fbf5]"
        }`}
      >
        {checked && (
          <Image 
            src={`${ICON_PATH}/Check.png`} 
            alt="Check" 
            width={11} 
            height={11} 
            className="object-contain" 
          />
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="hidden" />
      <span className="whitespace-nowrap font-sans text-[14px] font-medium leading-[1.43] text-black">
        {label}
      </span>
    </label>
  );
}

function SearchWidgetDesktop() {
  return (
    <div className="w-full max-w-[1300px]">
      <HomeSearchWidget />
    </div>
  );
}

function MobileFieldBox({ iconSrc, label, value, className = "" }: any) {
  return (
    <div className={`flex h-[64px] w-full items-center gap-[12px] rounded-[18px] border border-[#e6e6e6] bg-[#f9fbf5] pl-[14px] pr-[14px] ${className}`}>
      <div className="flex size-[28px] shrink-0 items-center justify-center rounded-[8px] bg-[#ffed91]">
        <Image src={iconSrc} alt={label} width={14} height={14} className="object-contain" />
      </div>
      <div className="flex min-w-0 flex-col font-sans">
        <span className="truncate text-[12px] font-medium leading-[1.33] text-[#7d7d7d]">{label}</span>
        <span className="truncate text-[14px] font-medium leading-[1.43] text-black">{value}</span>
      </div>
    </div>
  );
}

function SearchWidgetMobile() {
  return (
    <div className="w-full">
      <HomeSearchWidget />
    </div>
  );
}

function SearchWidget() {
  return (
    <>
      <div className="lg:hidden">
        <SearchWidgetMobile />
      </div>
      <div className="hidden lg:block">
        <SearchWidgetDesktop />
      </div>
    </>
  );
}

/* ----------------------------------------------------------------
   CHEAP FLIGHTS FROM DUBLIN SECTION
---------------------------------------------------------------- */

function CheapFlightsFromDublinSection() {
  return (
    <section className="w-full bg-[#ffffff] py-[80px] text-[#000000]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-[32px] max-[430px]:px-4">

        {/* Header Section */}
        <div className="mb-[48px] flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="flex max-w-[700px] flex-col gap-[10px]">
            <h2 className="font-sans text-[48px] font-medium leading-[100%] tracking-[0px] text-[#000000]">
              Cheap Flights from <span className="text-[#FDDB32]">Dublin</span>
            </h2>
            <p className="font-sans text-[14px] font-normal leading-[143%] text-[#555555]">
              Looking for cheap flights from Dublin? Compare today&apos;s lowest fares from Dublin Airport to
              popular destinations across Europe, North America and beyond. Prices update regularly so you
              can find the best available deals before you book.
            </p>
          </div>

          <Link href="/flights/routes" className="inline-flex h-[48px] shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[28px] font-sans text-[14px] font-medium leading-[143%] text-[#000000] transition-colors hover:bg-[#e5c52c]">
            Browse All Flight Routes
            <Image 
              src="/Homepage/Section 3/Icon/KQY0VNx64.png" 
              alt="Arrow Right" 
              width={16} 
              height={16} 
              className="object-contain" 
            />
          </Link>
        </div>

        {/* Flight Cards Grid (Unified for Desktop and Mobile) */}
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {cheapFlights.map((flight, i) => (
            <div
              key={i}
              className="group flex h-[364px] flex-col overflow-hidden rounded-[24px] border border-[#E6E6E6] bg-[#FFFFFF] shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* 1. Image Container (140px fixed height) */}
              <div className="relative h-[140px] w-full shrink-0 overflow-hidden bg-neutral-100">
                <Image
                  src={flight.image}
                  alt={flight.city}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* 2. Content Section (156px height) */}
              <div className="flex w-full flex-col gap-[12px] p-[20px]">
                
                {/* Route Info */}
                <div className="flex w-full flex-col gap-[4px]">
                  <h3 className="font-sans text-[24px] font-medium leading-[24px] text-[#000000]">
                    {flight.city}
                  </h3>
                  <p className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">
                    {flight.route}
                  </p>
                </div>

                {/* Price Row */}
                <div className="flex h-[24px] w-full items-center justify-between">
                  <p className="font-sans text-[24px] font-medium leading-[24px] text-[#212121]">
                    {flight.price}
                  </p>
                  <div className="flex items-center gap-[4px] rounded-[6px] border border-[#E6E6E6] bg-[#F9FBF5] px-[8px] py-[4px]">
                    <Image 
                      src="/Homepage/Section 3/Icon/Airline Logo.png" 
                      alt={`${flight.airline} logo`} 
                      width={16} 
                      height={16} 
                      className="object-contain" 
                    />
                    <span className="font-sans text-[12px] font-medium leading-[16px] tracking-[0px] text-[#000000]">
                      {flight.airline}
                    </span>
                  </div>
                </div>

                {/* Meta Row */}
                <div className="flex h-[20px] items-center gap-[6px]">
                  <Clock size={14} className="text-[#7D7D7D]" />
                  <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[0px] text-[#7D7D7D]">
                    Direct &bull; {flight.duration}
                  </span>
                </div>
              </div>

              {/* 3. Footer Section (68px height) */}
              <div className="mt-auto px-[20px] pb-[20px] pt-0">
                <Link href="/flights/search" className="flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[12px] border border-[#E6E6E6] bg-[#FFFFFF] transition-colors hover:bg-[#FDDB32] hover:border-[#FDDB32]">
                  <span className="font-sans text-[14px] font-medium leading-[20px] tracking-[0px] text-[#000000]">
                    View Flights
                  </span>
                  <Image 
                    src="/Homepage/Section 3/Icon/KQY0VNx64.png" 
                    alt="Arrow Right" 
                    width={14} 
                    height={14} 
                    className="object-contain" 
                  />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   WHY COMPARE SECTION
---------------------------------------------------------------- */

function WhyCompareFlightsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] pt-[80px] pb-[160px] lg:px-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-6 lg:px-[32px]">
        <div className="flex w-full flex-col gap-[48px]">
          <div className="flex flex-col items-center gap-[24px]">
            <span className="flex h-[28px] items-center justify-center rounded-full border border-[#E6E6E6] bg-[#F9FBF5] px-[12px] py-[4px] font-sans text-[14px] font-medium leading-[20px] tracking-[0px] text-[#000000]">
              Easy process
            </span>
            <div className="flex w-full max-w-[876px] flex-col items-center gap-[15px] text-center">
              <h2 className="w-full font-sans font-medium text-[#000000] tracking-[0px] text-[32px] leading-[40px] lg:whitespace-nowrap lg:text-[48px] lg:leading-[48px]">
                Why Compare Flights with TravelMommy?
              </h2>
              <p className="w-full font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
                Search and compare cheap flights from multiple airlines and trusted booking partners to find the best fare for your trip.
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-[15px] lg:grid-cols-3">
            {whyCompareFeatures.map((feature) => (
              <div key={feature.title}>
                <div className="flex h-[276px] w-full flex-col items-center rounded-[20px] border border-[#E6E6E6] bg-[#F9FBF5] p-[15px]">
                  <div className="flex h-full w-full flex-col items-center gap-[20px] p-[10px] text-center">
                    <span className="flex h-[61px] w-[61px] shrink-0 items-center justify-center rounded-full bg-[#FFED91]">
                      <Image src={feature.iconSrc} alt={feature.title} width={24} height={24} className="object-contain" />
                    </span>
                    <div className="flex flex-col items-center gap-[10px]">
                      <h3 className="w-full font-sans text-[24px] font-medium leading-[24px] tracking-[0px] text-[#000000]">
                        {feature.title}
                      </h3>
                      <p className="w-full font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
/* ----------------------------------------------------------------
   POPULAR AIRLINES SECTION
---------------------------------------------------------------- */

function PopularAirlinesSection() {
  return (
     <section className="w-full bg-black py-[80px] lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-6 lg:px-[32px]">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="font-sans text-[36px] font-semibold leading-[1.1] tracking-[-0.01em] text-white lg:text-[48px] lg:leading-[52px]">
                Compare Flights from Popular Airlines.
              </h2>
              <Link
                href="/flights/airlines"
                className="flex shrink-0 items-center gap-2 rounded-full bg-[#FDDB32] px-[24px] py-[12px] font-sans text-[14px] font-medium leading-[20px] text-black transition-colors hover:bg-[#e5c52c]"
              >
                View All Airlines
                <Image 
                  src="/Homepage/Section 3/Icon/KQY0VNx64.png" 
                  alt="Arrow Right" 
                  width={16} 
                  height={16} 
                  className="object-contain" 
                />
              </Link>
            </div>

            <p className="max-w-[800px] font-sans text-[16px] font-normal leading-[24px] text-white/80">
              Search and compare fares from leading airlines around the world.
              Discover competitive prices, flexible travel options and routes
              from trusted carriers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-[6.39px] gap-y-[6.39px] sm:grid-cols-3 lg:grid-cols-5">
            {popularAirlines.map((airline) => (
              <div
                key={airline.name}
                className="group flex aspect-[238/152] w-full items-center justify-center rounded-2xl border border-[#E6E6E6] bg-[#F9FBF5] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-full w-full max-w-[140px]">
                  <Image
                    src={airline.logo}
                    alt={`${airline.name} logo`}
                    fill
                    className="object-contain opacity-90 transition-opacity group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   POPULAR AIRPORTS SECTION
---------------------------------------------------------------- */

function PopularAirportsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] px-[20px] py-[56px] lg:px-[80px] lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[32px] lg:gap-[48px]">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-[12px] text-center lg:gap-3">
          <h2 className="font-sans text-[42px] font-medium leading-[44px] tracking-[-1.5px] text-[#000000] lg:text-[48px] lg:font-semibold lg:leading-[1.1] lg:tracking-[-0.01em]">
            Popular Airports
          </h2>
          <p className="max-w-[640px] font-sans text-[16px] font-normal leading-[24px] tracking-[0px] text-[#000000] lg:text-black/60">
            Search and compare flights from major airports around the world.
            Discover convenient departure points, route options and travel
            times before you book.
          </p>
        </div>

        {/* Airport Cards */}
        <div className="grid w-full grid-cols-1 gap-[12px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {popularAirports.map((airport) => (
            <div
              key={airport.code}
              className="flex w-full items-center justify-between rounded-[16px] border border-[#E6E6E6] bg-white p-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md lg:rounded-2xl lg:px-6 lg:py-5"
            >
              <div className="flex items-center gap-[12px] lg:gap-4">
                
                {/* Icon Container */}
                <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[12px] bg-[#FEED91] p-[10px] lg:h-11 lg:w-11 lg:rounded-xl lg:bg-[#FDDB32] lg:p-0">
                  <Image 
                    src="/Flights Page/Section 5/Icons/Vector.png" 
                    alt="Airport" 
                    width={20} 
                    height={20} 
                    className="object-contain" 
                  />
                </div>
                
                {/* Text Stack */}
                <div className="flex flex-col gap-[4px] lg:gap-0">
                  <span className="font-sans text-[16px] font-medium leading-[22px] tracking-[-0.32px] text-[#000000] lg:font-semibold lg:leading-[24px]">
                    {airport.name}
                  </span>
                  <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#6E6E6E] lg:text-black/50">
                    {airport.location}
                  </span>
                </div>
              </div>
              
              {/* Airport Code */}
              <span className="font-sans text-[14px] font-normal leading-[20px] tracking-[-0.28px] text-[#000000] lg:font-medium lg:text-black/60">
                {airport.code}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/flights/airports"
          className="flex w-full shrink-0 items-center justify-center gap-[10px] rounded-[12px] bg-[#FDDB32] px-[24px] py-[12px] font-sans text-[16px] font-medium leading-[20px] text-[#000000] transition-colors hover:bg-[#e5c52c] lg:w-auto lg:gap-2 lg:rounded-full lg:text-[14px]"
        >
          Explore All Airports
          <Image 
            src="/Homepage/Section 3/Icon/KQY0VNx64.png" 
            alt="Arrow Right" 
            width={16} 
            height={16} 
            className="object-contain" 
          />
        </Link>

      </div>
    </section>
  );
}
/* ----------------------------------------------------------------
   FAQ SECTION
---------------------------------------------------------------- */

function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
     <section className="bg-white">
      <div className="mx-auto w-full max-w-[820px] px-6 py-20 lg:px-10 lg:py-24">
        <h2 className="text-center font-sans text-[36px] font-medium leading-none text-[#000000] lg:text-[48px]">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 flex flex-col gap-8">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <span className="font-sans text-[16px] font-medium leading-[1.5] text-black">
                    {faq.question}
                  </span>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center text-black">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-4 max-w-[680px] font-sans text-[14px] font-normal leading-[1.55] text-[#555555]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   NEWSLETTER SECTION
---------------------------------------------------------------- */

function NewsletterSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1216px] px-6 pb-24 lg:px-10">
        <div className="flex flex-col items-center rounded-[32px] bg-[#FDDB32] px-6 py-16 text-center lg:py-20">
          <span className="w-fit rounded-full bg-white px-[16px] py-[8px] font-sans text-[14px] font-medium leading-[1.43] text-black">
            Let's go on a trip!
          </span>
          
          <h2 className="mt-[20px] max-w-2xl font-sans text-[36px] font-medium leading-none text-black lg:text-[48px]">
            Never Miss a Great Travel Deal
          </h2>
          
          <p className="mt-[16px] max-w-xl font-sans text-[16px] font-normal leading-[1.5] text-black/70">
            Get cheap flight alerts, hotel deals and travel inspiration delivered to your inbox.
          </p>

          <form className="mt-[32px] flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-[20px] py-[14px]">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-transparent font-sans text-[14px] font-normal leading-[1.43] text-black placeholder:text-black/40 focus:outline-none"
              />
              <Mail className="h-[16px] w-[16px] shrink-0 text-black/30" />
            </div>
            
            <button
              type="submit"
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-black px-[24px] py-[14px] font-sans text-[14px] font-medium leading-[1.43] text-white transition-colors hover:bg-black/80"
            >
              Get Deals
              <Image 
                src="/Homepage/Section 3/Icon/KQY0VNx64.png" 
                alt="Arrow Right" 
                width={16} 
                height={16} 
                className="object-contain invert" // inverted so it is white on black bg
              />
            </button>
          </form>
          
          <p className="mt-[12px] font-sans text-[12px] font-normal leading-[1.33] text-black/50">
            No Spam, Unsubscribe Anytime
          </p>
        </div>
      </div>
    </section>
  );
}