// ==========================================
// INTERFACES
// ==========================================
export interface FlightField { key: string; iconSrc: string; label: string; value: string; width?: string }
export interface FlightOffer { city: string; route: string; price: string; airline: string; duration: string; image: string; flag?: string; isDirect?: boolean }
export interface FlightFeature { iconSrc: string; title: string; description: string }
export interface Airline { name: string; logo: string }
export interface Airport { name: string; code: string; location: string }
export interface FlightFaq { question: string; answer: string }

export interface SearchWidgetData {
  dropdowns: string[];
  departure: { label: string; value: string };
  destination: { label: string; placeholder: string };
  departDate: { label: string; value: string };
  returnDate: { label: string; value: string };
  travellers: { label: string; value: string };
  buttonText: string;
  checkboxes: string[];
}

export interface FlightPageData {
  hero: { 
    title: string;
    description: string; 
    image: string; 
    imageAlt: string;
    searchWidget: SearchWidgetData;
  };
  desktopFields: FlightField[];
  mobileFields: FlightField[];
  mobileSplitFields: FlightField[];
  mobileTravellersField: FlightField;
  cheapFlights: FlightOffer[];
  mobileFlights: FlightOffer[];
  whyCompareFeatures: FlightFeature[];
  popularAirlines: Airline[];
  popularAirports: Airport[];
  faqs: FlightFaq[];
  icons: {
    check: string;
    arrowRight: string;
    airlineLogoPlaceholder: string;
    airportIcon: string;
  };
  copy: { 
    cheapFlightsTitleStart: string;
    cheapFlightsTitleHighlight: string;
    cheapFlightsDescription: string; 
    cheapFlightsCta: string; 
    viewFlightsCta: string;
    whyComparePill: string;
    whyCompareTitle: string;
    whyCompareDescription: string;
    popularAirlinesTitle: string;
    popularAirlinesDescription: string;
    popularAirlinesCta: string;
    popularAirportsTitle: string;
    popularAirportsDescription: string;
    popularAirportsCta: string;
    faqTitle: string;
    newsletterPill: string;
    newsletterTitle: string; 
    newsletterDescription: string; 
    newsletterPlaceholder: string; 
    newsletterCta: string;
    newsletterFooter: string;
  };
}

const iconPath = "/Homepage/Section 1/Header Icons/Icons";

// ==========================================
// EDITABLE SECTIONS
// ==========================================

// 1. Hero Section
export const heroData = { 
  title: "Compare Cheap Flights from\n500+ Airlines & Travel Sites",
  description: "Search and compare flight prices from airlines and trusted travel providers. Choose the option that works for you and complete your booking with the provider.", 
  image: "/Flights Page/Section 1/Header Images/nils-nedel-ONpGBpns3cs-unsplash.jpg", 
  imageAlt: "Airplane wing at sunset",
  searchWidget: {
    dropdowns: ["One way", "Bags"],
    departure: { label: "Departure", value: "Dublin (DUB)" },
    destination: { label: "To", placeholder: "Country, City or air..." },
    departDate: { label: "Depart", value: "08 Nov 2025" },
    returnDate: { label: "Return", value: "08 Jan 2026" },
    travellers: { label: "Travellers and Cabin Class", value: "01 Adult 01 Child" },
    buttonText: "Search",
    checkboxes: ["Add Nearby Airports", "Add Nearby Airports", "Direct Flights"]
  }
};

// 2. Search Fields
export const desktopFieldsData: FlightField[] = [
  { key: "from", iconSrc: `${iconPath}/plane - 01.png`, label: "Departure", value: "Dublin (DUB)", width: "w-[197px]" },
  { key: "to", iconSrc: `${iconPath}/plane - 03.png`, label: "To", value: "Country, City or air...", width: "w-[198px]" },
  { key: "depart", iconSrc: `${iconPath}/calendar - 02.png`, label: "Depart", value: "08 Nov 2025", width: "w-[193px]" },
  { key: "return", iconSrc: `${iconPath}/calendar - 3.png`, label: "Return", value: "08 Jan 2026", width: "w-[193px]" },
  { key: "travellers", iconSrc: `${iconPath}/join a group - 01.png`, label: "Travellers and Cabin Class", value: "01 Adult 01 Child", width: "w-[273px]" },
];

export const mobileFieldsData: FlightField[] = [
  { key: "from", iconSrc: `${iconPath}/plane - 01.png`, label: "Departure", value: "Dublin (DUB)" },
  { key: "to", iconSrc: `${iconPath}/plane - 03.png`, label: "To", value: "Country, City or Airport" },
];

export const mobileSplitFieldsData: FlightField[] = [
  { key: "depart", iconSrc: `${iconPath}/calendar - 02.png`, label: "Depart", value: "08 Nov" },
  { key: "return", iconSrc: `${iconPath}/calendar - 3.png`, label: "Return", value: "08 Jan" },
];

export const mobileTravellersFieldData: FlightField = { 
  key: "travellers", iconSrc: `${iconPath}/join a group - 01.png`, label: "Travellers", value: "01 Adult, 01 Child" 
};

// 3. Flight Offers
export const cheapFlightsData: FlightOffer[] = [
  { city: "London", route: "Dub → LHR", price: "€24", airline: "Ryanair", duration: "1h 20m", isDirect: true, image: "/Homepage/Section 3/Images/Image Container.png" },
  { city: "London", route: "Dub → LGW", price: "€24", airline: "Ryanair", duration: "1h 25m", isDirect: true, image: "/Homepage/Section 3/Images/Image Container-1.png" },
  { city: "Barcelona", route: "Dub → BCN", price: "€24", airline: "Ryanair", duration: "2h 35m", isDirect: true, image: "/Homepage/Section 3/Images/Image Container-2.png" },
  { city: "Lisbon", route: "Dub → LIS", price: "€24", airline: "Ryanair", duration: "2h 50m", isDirect: true, image: "/Homepage/Section 3/Images/Image Container-3.png" },
  { city: "New York", route: "Dub → JFK", price: "€189", airline: "Aer Lingus", duration: "7h 15m", isDirect: true, image: "/Homepage/Section 3/Images/Image Container-4.png" },
  { city: "Rome", route: "Dub → FCO", price: "€34", airline: "Ryanair", duration: "3h 10m", isDirect: true, image: "/Homepage/Section 3/Images/Image Container-5.png" },
  { city: "Dubai", route: "Dub → DXB", price: "€245", airline: "Emirates", duration: "7h 45m", isDirect: true, image: "/Homepage/Section 3/Images/Image Container-6.png" },
  { city: "Amsterdam", route: "Dub → AMS", price: "€28", airline: "Ryanair", duration: "1h 40m", isDirect: true, image: "/Homepage/Section 3/Images/Image Container-7.png" },
];

export const mobileFlightsData: FlightOffer[] = [];

// 4. Features & Popular Entities
export const whyCompareFeaturesData: FlightFeature[] = [
  { 
    iconSrc: "/Flights Page/Section 3/Icons/credit card declined - 02.png", 
    title: "No TravelMommy Booking Fees", 
    description: "TravelMommy does not sell tickets or add a booking fee. Any provider charges are shown by the provider before purchase." 
  },
  { 
    iconSrc: "/Flights Page/Section 3/Icons/follow user - 01.png", 
    title: "Book with the Provider", 
    description: "Compare options on TravelMommy, then complete your booking with the selected airline or travel provider." 
  },
  { 
    iconSrc: "/Flights Page/Section 3/Icons/time refresh - 02.png", 
    title: "Current Flight Prices", 
    description: "Compare recently available fares from airlines and travel providers, with prices refreshed as new data becomes available." 
  },
];

export const popularAirlinesData: Airline[] = [
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

export const popularAirportsData: Airport[] = [
  { name: "Dublin Airport", code: "DUB", location: "Dublin, Ireland" },
  { name: "Heathrow Airport", code: "LHR", location: "London, United Kingdom" },
  { name: "Dubai International", code: "DXB", location: "Dubai, United Arab Emirates" },
  { name: "John F. Kennedy", code: "JFK", location: "New York, United States" },
  { name: "Los Angeles Intl", code: "LAX", location: "Los Angeles, United States" },
  { name: "Amsterdam Schiphol", code: "AMS", location: "Amsterdam, Netherlands" },
];

// 5. FAQs
export const faqsData: FlightFaq[] = [
  { 
    question: "How does TravelMommy compare flight prices?", 
    answer: "TravelMommy displays prices provided by airlines and trusted travel partners. Because fares can change quickly, the final price is confirmed when you complete your booking on the provider's website." 
  },
  { 
    question: "Does TravelMommy charge booking fees?", 
    answer: "No. TravelMommy is a travel metasearch platform. We compare flight prices but do not sell tickets directly or charge booking fees. You always book with the airline or travel provider you choose." 
  },
  { 
    question: "Can I compare flights from different airlines?", 
    answer: "Yes. TravelMommy lets you compare flights from multiple airlines and travel providers, making it easier to find the best combination of price, travel time and convenience." 
  },
  { 
    question: "When is the best time to book cheap flights?", 
    answer: "Flight prices can change based on demand, season and availability. Comparing fares early and checking different travel dates can help you find cheaper flights." 
  },
  { 
    question: "Are the flight prices shown on TravelMommy live?", 
    answer: "TravelMommy displays prices provided by airlines and trusted travel partners. Because fares can change quickly, the final price is confirmed when you complete your booking on the provider's website." 
  },
  { 
    question: "Can I book flights directly on TravelMommy?", 
    answer: "No. TravelMommy helps you compare flight prices from multiple providers. When you choose a flight, you'll be redirected to the airline or booking partner to complete your booking securely." 
  },
  { 
    question: "Which airlines can I compare on TravelMommy?", 
    answer: "You can compare flights from a wide range of domestic and international airlines, as well as trusted online travel agencies, helping you find the best available deal for your journey." 
  },
  { 
    question: "Why should I compare flights before booking?", 
    answer: "Comparing flights helps you find the best available fare, discover alternative airlines or travel dates, and make informed booking decisions without searching multiple websites individually." 
  }
];

// 6. Assets & Copy
export const iconsData = {
  check: "/Homepage/Section 1/Header Icons/Icons/Check.png",
  arrowRight: "/Homepage/Section 3/Icon/KQY0VNx64.png",
  airlineLogoPlaceholder: "/Homepage/Section 3/Icon/Airline Logo.png",
  airportIcon: "/Flights Page/Section 5/Icons/Vector.png"
};

export const pageCopyData = { 
  cheapFlightsTitleStart: "Cheap Flights from",
  cheapFlightsTitleHighlight: "Dublin (DUB)",
  cheapFlightsDescription: "Find unbeatable flight deals from Dublin to top global destinations. We compare hundreds of trusted airlines to secure your absolute lowest airfare.", 
  cheapFlightsCta: "View All Flights", 
  viewFlightsCta: "View Flights",
  whyComparePill: "Easy process",
  whyCompareTitle: "Why Compare Flights with TravelMommy?",
  whyCompareDescription: "Search and compare cheap flights from multiple airlines and trusted booking partners to find the best fare for your trip.",
  popularAirlinesTitle: "Compare Flights from Popular Airlines.",
  popularAirlinesDescription: "Search and compare fares from leading airlines around the world. Discover competitive prices, flexible travel options and routes from trusted carriers.",
  popularAirlinesCta: "View All Airlines",
  popularAirportsTitle: "Popular Airports",
  popularAirportsDescription: "Search and compare flights from major airports around the world. Discover convenient departure points, route options and travel times before you book.",
  popularAirportsCta: "Explore All Airports",
  faqTitle: "Frequently Asked Questions",
  newsletterPill: "Let's go on a trip!",
  newsletterTitle: "Get Cheap Flight Deals by Email", 
  newsletterDescription: "Get flight deals and travel inspiration delivered to your inbox.", 
  newsletterPlaceholder: "Your Email Address", 
  newsletterCta: "Get Deals",
  newsletterFooter: "No Spam, Unsubscribe Anytime"
};

// ==========================================
// MASTER EXPORT
// ==========================================
export const flightData: FlightPageData = {
  hero: heroData,
  desktopFields: desktopFieldsData,
  mobileFields: mobileFieldsData,
  mobileSplitFields: mobileSplitFieldsData,
  mobileTravellersField: mobileTravellersFieldData,
  cheapFlights: cheapFlightsData,
  mobileFlights: mobileFlightsData,
  whyCompareFeatures: whyCompareFeaturesData,
  popularAirlines: popularAirlinesData,
  popularAirports: popularAirportsData,
  faqs: faqsData,
  icons: iconsData,
  copy: pageCopyData,
};