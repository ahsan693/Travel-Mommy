export interface FlightField { key: string; iconSrc: string; label: string; value: string; width?: string }
export interface FlightOffer { city: string; route: string; price: string; airline: string; duration: string; image: string; flag?: string }
export interface FlightFeature { iconSrc: string; title: string; description: string }
export interface Airline { name: string; logo: string }
export interface Airport { name: string; code: string; location: string }
export interface FlightFaq { question: string; answer: string }
export interface FlightPageData {
  hero: { desktopTitle: string; mobileTitle: string; description: string; image: string; imageAlt: string };
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
  copy: { cheapFlightsTitle: string; cheapFlightsDescription: string; cheapFlightsCta: string; newsletterTitle: string; newsletterDescription: string; newsletterPlaceholder: string; newsletterCta: string };
}

const iconPath = "/Homepage/Section 1/Header Icons/Icons";

export const flightData: FlightPageData = {
  hero: { desktopTitle: "Compare Flights from 500+ Airlines & Travel Sites", mobileTitle: "Compare Cheap Flights from Hundreds of Airlines", description: "Compare flight prices from hundreds of airlines and travel sites to find the best deal for your journey.", image: "/Flights Page/Section 1/Header Images/nils-nedel-ONpGBpns3cs-unsplash.jpg", imageAlt: "Hero background" },
  desktopFields: [
    { key: "from", iconSrc: `${iconPath}/plane - 01.png`, label: "Departure", value: "Dublin (DUB)", width: "w-[197px]" },
    { key: "to", iconSrc: `${iconPath}/plane - 03.png`, label: "To", value: "Country, City or air...", width: "w-[198px]" },
    { key: "depart", iconSrc: `${iconPath}/calendar - 02.png`, label: "Depart", value: "08 Nov 2025", width: "w-[193px]" },
    { key: "return", iconSrc: `${iconPath}/calendar - 3.png`, label: "Return", value: "08 Jan 2026", width: "w-[193px]" },
    { key: "travellers", iconSrc: `${iconPath}/join a group - 01.png`, label: "Travellers and Cabin Class", value: "01 Adult 01 Child", width: "w-[273px]" },
  ],
  mobileFields: [
    { key: "from", iconSrc: `${iconPath}/plane - 01.png`, label: "Departure", value: "Dublin (DUB)" },
    { key: "to", iconSrc: `${iconPath}/plane - 03.png`, label: "To", value: "Country, City or Airport" },
  ],
  mobileSplitFields: [
    { key: "depart", iconSrc: `${iconPath}/calendar - 02.png`, label: "Depart", value: "08 Nov" },
    { key: "return", iconSrc: `${iconPath}/calendar - 3.png`, label: "Return", value: "08 Jan" },
  ],
  mobileTravellersField: { key: "travellers", iconSrc: `${iconPath}/join a group - 01.png`, label: "Travellers", value: "01 Adult, 01 Child" },
  cheapFlights: [
    { city: "London", route: "Dub → LHR", price: "€24", airline: "Ryanair", duration: "1h 20m", image: "/Homepage/Section 3/Images/Image Container.png" },
    { city: "London", route: "Dub → LGW", price: "€24", airline: "Ryanair", duration: "1h 25m", image: "/Homepage/Section 3/Images/Image Container-1.png" },
    { city: "Barcelona", route: "Dub → BCN", price: "€24", airline: "Ryanair", duration: "2h 35m", image: "/Homepage/Section 3/Images/Image Container-2.png" },
    { city: "Lisbon", route: "Dub → LIS", price: "€24", airline: "Ryanair", duration: "2h 50m", image: "/Homepage/Section 3/Images/Image Container-3.png" },
    { city: "New York", route: "Dub → JFK", price: "€189", airline: "Aer Lingus", duration: "7h 15m", image: "/Homepage/Section 3/Images/Image Container-4.png" },
    { city: "Rome", route: "Dub → FCO", price: "€34", airline: "Ryanair", duration: "3h 10m", image: "/Homepage/Section 3/Images/Image Container-5.png" },
    { city: "Dubai", route: "Dub → DXB", price: "€245", airline: "Emirates", duration: "7h 45m", image: "/Homepage/Section 3/Images/Image Container-6.png" },
    { city: "Amsterdam", route: "Dub → AMS", price: "€28", airline: "Ryanair", duration: "1h 40m", image: "/Homepage/Section 3/Images/Image Container-7.png" },
  ],
  mobileFlights: [],
  whyCompareFeatures: [
    { iconSrc: "/Flights Page/Section 3/Icons/credit card declined - 02.png", title: "No Hidden Booking Fees", description: "TravelMommy doesn't sell flights or charge booking fees. Compare prices for free and choose the deal that works best for you." },
    { iconSrc: "/Flights Page/Section 3/Icons/follow user - 01.png", title: "Book with Trusted Partners", description: "View the latest flight prices and availability so you can compare deals before booking with your preferred travel provider." },
    { iconSrc: "/Flights Page/Section 3/Icons/time refresh - 02.png", title: "Live Prices, Updated Daily", description: "View the latest flight prices and availability so you can compare deals before booking with your preferred travel provider." },
  ],
  popularAirlines: [
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
  ],
  popularAirports: [
    { name: "Dublin Airport", code: "DUB", location: "Dublin, Ireland" },
    { name: "Heathrow Airport", code: "LHR", location: "London, United Kingdom" },
    { name: "Dubai International", code: "DXB", location: "Dubai, United Arab Emirates" },
    { name: "John F. Kennedy", code: "JFK", location: "New York, United States" },
    { name: "Los Angeles Intl", code: "LAX", location: "Los Angeles, United States" },
    { name: "Amsterdam Schiphol", code: "AMS", location: "Amsterdam, Netherlands" },
  ],
  faqs: [
    {
      question: "How do I find the cheapest flights?",
      answer:
        "Use flexible dates, compare multiple airlines and travel sites, and sign up for our newsletter to get price alerts. Search different nearby airports to find lower fares.",
    },
    {
      question: "Can I book directly on TravelMommy?",
      answer:
        "TravelMommy compares prices across airlines and online travel agencies. When you select a fare, you'll be redirected to the provider's site to complete the booking.",
    },
    {
      question: "Are the prices guaranteed?",
      answer:
        "Prices are provided by third-party providers and can change rapidly. We display the latest available price, but final price is confirmed on the provider's booking page.",
    },
    {
      question: "What about baggage and seat selection?",
      answer:
        "Baggage allowances, seat selection and other extras are set by the airline or booking partner. Check the provider's booking page for full details before paying.",
    },
    {
      question: "How do I change or cancel a booking?",
      answer:
        "Changes and cancellations must be handled directly with the airline or agency where you made the booking. Contact them for options and any applicable fees.",
    },
  ],
  copy: { cheapFlightsTitle: "Cheap Flights from Dublin", cheapFlightsDescription: "Find the best flight deals from Dublin to destinations around the world.", cheapFlightsCta: "View All Routes", newsletterTitle: "Get travel deals in your inbox", newsletterDescription: "Sign up for the latest flight deals and travel inspiration.", newsletterPlaceholder: "Enter your email address", newsletterCta: "Subscribe" },
};