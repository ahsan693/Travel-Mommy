export interface TravelInfo { 
  icon: string; 
  label: string; 
  value: string; 
}

export interface TravelFeature {
  icon: string;
  label: string;
}

export interface TravelDestination { 
  city: string; 
  desc: string; 
  badge: string; 
  badgeStyles: string; 
  flightsFrom: string; 
  hotelsFrom: string; 
  image: string; 
  icon: string; 
}

export interface TravelFlight { 
  city: string; 
  route: string; 
  price: string; 
  airline: string; 
  duration: string; 
  flag: string; 
  image: string; 
}

export interface TravelActivity { 
  title: string; 
  duration: string; 
  price: string; 
  image: string; 
}

export interface NearbyCountry { 
  city: string; 
  desc: string; 
  flag: string; 
  image: string; 
}

export interface TravelFaq { 
  q: string; 
  a: string; 
}

export interface TravelPageData {
  hero: { 
    title: string; 
    description: string; 
    image: string; 
    imageAlt: string; 
    badge: string; 
  };
  infoBarData: TravelInfo[];
  aboutSection: {
    title: string;
    paragraphs: string[];
    features: TravelFeature[];
    featureIcon: string;
    image: string;
    imageAlt: string;
  };
  destinationsSection: {
    title: string;
    description: string;
    flightsPrefix: string;
    flightsIcon: string;
    hotelsPrefix: string;
    hotelsIcon: string;
    bookNowText: string;
    bookNowIcon: string;
    items: TravelDestination[];
  };
  popularFlightsSection: {
    titlePart1: string;
    titleHighlight: string;
    browseCtaText: string;
    browseCtaIcon: string;
    viewFlightsText: string;
    viewFlightsIcon: string;
    durationIcon: string;
    airlineLogoFallback: string;
    items: TravelFlight[];
  };
  thingsToDoSection: {
    title: string;
    items: TravelActivity[];
  };
  nearbyCountriesSection: {
    title: string;
    description: string;
    bookNowText: string;
    bookNowIcon: string;
    items: NearbyCountry[];
  };
  travelHelpSection: {
    title: string;
    description: string;
    faqs: TravelFaq[];
  };
  newsletterSection: {
    title: string;
    description: string;
    inputPlaceholder: string;
    buttonText: string;
  };
}

export const travelData: TravelPageData = {
  hero: {
    title: "Discover Greece",
    description: "Explore ancient ruins, pristine beaches, and world-class island hopping in one of Europe's most breathtaking destinations.",
    image: "/Country Details/Section 1/Images/Hero.png",
    imageAlt: "Panoramic sunset view of Oia Santorini, featuring white caldera buildings and blue domes",
    badge: "GREECE"
  },
  infoBarData: [
    { icon: "arrow-up-right", label: "Capital", value: "Athens" },
    { icon: "arrow-up-right", label: "Currency", value: "Euro" },
    { icon: "circle-check", label: "Language", value: "Greek" },
    { icon: "users-round", label: "Best Time", value: "May-October" },
    { icon: "arrow-up-right", label: "Emergency", value: "112" },
    { icon: "circle-help", label: "Driving side", value: "Right" }
  ],
  aboutSection: {
    title: "About Greece",
    paragraphs: [
      "Greece, located in southeastern Europe, is celebrated for its breathtaking Aegean and Ionian islands. As the historic cradle of Western civilization, it offers unrivaled ancient landmarks. Book cheap flights to Athens to experience the 5th-century B.C. Acropolis and explore endless Mediterranean beauty seamlessly."
    ],
    features: [
      { icon: "landmark", label: "Ancient History" },
      { icon: "umbrella", label: "Stunning Beaches" },
      { icon: "utensils", label: "Delicious Cuisine" }
    ],
    featureIcon: "check",
    image: "/Country Details/Section 2/Images/Rectangle.png",
    imageAlt: "Greece Coastline"
  },
destinationsSection: {
    title: "Explore Greece's Most Popular Destinations",
    description: "Discover the best places to visit in Greece, from bustling cities to idyllic islands.",
    flightsPrefix: "Flights from",
    flightsIcon: "plane",
    hotelsPrefix: "Hotels from",
    hotelsIcon: "building-2",
    bookNowText: "View Flights", // Updated from "Book Now"
    bookNowIcon: "arrow-right",
    items: [
      {
        city: "Santorini",
        desc: "Famous for its whitewashed houses, blue-domed churches, and breathtaking sunsets.",
        badge: "Popular",
        badgeStyles: "bg-[#EBF5FF] text-[#0066CC]",
        flightsFrom: "€120",
        hotelsFrom: "€180",
        image: "/Country Details/Section 3/Images/image.png",
        icon: "/Featured%20Countries/flag.svg"
      },
      {
        city: "Athens",
        desc: "The cradle of Western civilization, home to the Acropolis and vibrant city life.",
        badge: "Best Value",
        badgeStyles: "bg-[#F3E8FF] text-[#7E22CE]",
        flightsFrom: "€120",
        hotelsFrom: "€180",
        image: "/Country Details/Section 3/Images/image-1.png",
        icon: "/Featured%20Countries/flag.svg"
      },
      {
        city: "Mykonos",
        desc: "A vibrant party destination with beautiful beaches and a lively waterfront.",
        badge: "Trending",
        badgeStyles: "bg-[#FCE7F3] text-[#BE185D]",
        flightsFrom: "€120",
        hotelsFrom: "€180",
        image: "/Country Details/Section 3/Images/image-2.png",
        icon: "/Featured%20Countries/flag.svg"
      },
      {
        city: "Crete",
        desc: "The largest island, offering ancient ruins, mountains, and long sandy beaches.",
        badge: "Hidden Gem",
        badgeStyles: "bg-[#DCFCE7] text-[#15803D]",
        flightsFrom: "€120",
        hotelsFrom: "€180",
        image: "/Country Details/Section 3/Images/image-3.png",
        icon: "/Featured%20Countries/flag.svg"
      }
    ]
  },
  popularFlightsSection: {
    titlePart1: "Popular Flights to",
    titleHighlight: "Greece",
    browseCtaText: "Browse All Greece Routes",
    browseCtaIcon: "arrow-up-right",
    viewFlightsText: "View Flights",
    viewFlightsIcon: "arrow-up-right",
    durationIcon: "clock",
    airlineLogoFallback: "/Homepage/Section 3/Icon/Airline Logo.png",
    items: [
      {
        city: "London",
        route: "LON → ATH",
        price: "€24",
        airline: "Ryanair",
        duration: "Direct • 3h 40m",
        flag: "https://flagcdn.com/w40/gb.png",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
      },
      {
        city: "Manchester",
        route: "MAN → ATH",
        price: "€29",
        airline: "easyJet",
        duration: "Direct • 3h 55m",
        flag: "https://flagcdn.com/w40/gb.png",
        image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80"
      },
      {
        city: "Dublin",
        route: "DUB → ATH",
        price: "€34",
        airline: "Ryanair",
        duration: "Direct • 4h 20m",
        flag: "https://flagcdn.com/w40/ie.png",
        image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?auto=format&fit=crop&w=1200&q=80"
      },
      {
        city: "New York",
        route: "NYC → ATH",
        price: "€329",
        airline: "Delta",
        duration: "Direct • 9h 15m",
        flag: "https://flagcdn.com/w40/us.png",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  thingsToDoSection: {
    title: "Top Things To Do",
    items: [
      {
        title: "Oia Sunset Catamaran Cruise",
        duration: "5 Hours",
        price: "From €95",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Acropolis Guided Tour",
        duration: "2 Hours",
        price: "From €35",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Delos & Rhenia Boat Trip",
        duration: "6 Hours",
        price: "From €80",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Knossos Palace Ticket",
        duration: "Flexible",
        price: "From €18",
        image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  nearbyCountriesSection: {
    title: "Explore Nearby Countries",
    description: "Extend your journey beyond Greece with these spectacular nearby Mediterranean jewels.",
    bookNowText: "Book Now",
    bookNowIcon: "arrow-right",
    items: [
      {
        city: "Italy",
        desc: "Immerse yourself in centuries of history, regional culinary masterpieces, and the dramatic coastlines.",
        flag: "https://flagcdn.com/w40/it.png",
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80"
      },
      {
        city: "Croatia",
        desc: "Discover the walled city of Dubrovnik, sparkling Adriatic waters, and pristine cascading lakes.",
        flag: "https://flagcdn.com/w40/hr.png",
        image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80"
      },
      {
        city: "Turkey",
        desc: "Where East meets West. Experience vibrant spice bazaars, ancient ruins, and fairytale balloon rides.",
        flag: "https://flagcdn.com/w40/tr.png",
        image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80"
      },
      {
        city: "Cyprus",
        desc: "Bask on sun-drenched beaches, explore legendary archaeological sites, and enjoy rich culinary traditions.",
        flag: "https://flagcdn.com/w40/cy.png",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  travelHelpSection: {
    title: "Travel Help",
    description: "Everything you need to know before you jet off to the islands.",
    faqs: [
      { q: "When is the best time to visit Santorini?", a: "The best time to visit is during the shoulder seasons (May-June and September-October) when the weather is pleasant and the crowds are thinner." },
      { q: "How do I get around the island?", a: "The most common way to get around is by renting an ATV, scooter, or taking the local buses." },
      { q: "Is Santorini expensive for tourists?", a: "Santorini caters to all budgets, but luxury hotspots like Oia can be on the pricier side compared to other destinations." },
      { q: "What should I pack for my trip?", a: "Pack light, breathable clothing for the summer, comfortable walking shoes for ruins, swimwear, a hat, and plenty of sunscreen." },
      { q: "Do I need a visa to visit Greece?", a: "Greece is part of the Schengen Area. If you are an EU citizen or from a visa-exempt country, you do not need a visa for up to 90 days." },
      { q: "Is Greece expensive?", a: "Greece offers excellent value for money. While luxury islands can be expensive, the mainland and lesser-known islands are very affordable." },
      { q: "Do I need a visa?", a: "Please check your local government's travel advisory for the most up-to-date visa requirements for traveling to Greece." },
      { q: "Which Greek islands are the best?", a: "Santorini, Mykonos, Crete, and Rhodes are among the most popular and highly rated islands depending on your travel style." },
      { q: "How many days should I spend in Greece?", a: "A minimum of 7-10 days is recommended to comfortably see Athens and explore one or two major islands." },
      { q: "Which are the best beaches in Greece?", a: "Navagio in Zakynthos, Elafonissi in Crete, and Myrtos in Kefalonia are consistently ranked as stunning options." },
      { q: "Which destinations are best for families?", a: "Crete, Naxos, and Rhodes are incredibly family-friendly, offering calm shallow beaches and large resorts." },
      { q: "Can I island-hop in Greece?", a: "Absolutely. Greece has an extensive and reliable ferry network making it very easy to travel seamlessly between islands." }
    ]
  },
  newsletterSection: {
    title: "Get Greece Travel Deals",
    description: "Sign up for our exclusive newsletter and be the first to know about cheap flights and hotel price drops for your next Greek getaway.",
    inputPlaceholder: "Email Address",
    buttonText: "Subscribe"
  }
};