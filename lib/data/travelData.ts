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

export interface BestTimeSeason {
  season: string;
  months: string;
  temp: string;
  desc: string;
  image: string;
  icon: string;
  iconBg: string;
  iconColor: string;
}

export interface WeatherMonth {
  month: string;
  icon: string;
  temp: string;
  desc: string;
  isHighlight?: boolean;
}

export interface AirportItem {
  code: string;
  name: string;
  desc: string;
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
  bestTimeSection: {
    title: string;
    items: BestTimeSeason[];
  };
  weatherSection: {
    title: string;
    description: string;
    legendText: string;
    items: WeatherMonth[];
  };
  airportsSection: {
    title: string;
    items: AirportItem[];
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
      "Greece, located in southeastern Europe, is celebrated for breathtaking Aegean and Ionian islands. As the historic cradle of Western civilization, it offers unrivaled ancient landmarks. Book cheap flights to Athens to experience the 5th-century B.C. Acropolis and explore endless Mediterranean beauty seamlessly."
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
    bookNowText: "View Flights",
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
    titlePart1: "Popular Routes to",
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
        title: "Explore the Acropolis in Athens",
        duration: "5 Hours",
        price: "", 
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Visit Santorini",
        duration: "3 Hours",
        price: "",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Discover Meteora",
        duration: "2 Hours",
        price: "",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Explore Crete",
        duration: "4 Hours",
        price: "",
        image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  bestTimeSection: {
    title: "Best Time to Visit Greece",
    items: [
      {
        season: "Spring",
        months: "April – May",
        temp: "17 – 24°C",
        desc: "Mild weather, fewer crowds.",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
        icon: "leaf",
        iconBg: "#F0FDF4",
        iconColor: "#16A34A"
      },
      {
        season: "Summer",
        months: "June – August",
        temp: "28 – 35°C",
        desc: "Hot, busiest period, ideal for beaches.",
        image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=800&q=80",
        icon: "sun",
        iconBg: "#FEFCE8",
        iconColor: "#CA8A04"
      },
      {
        season: "Autumn",
        months: "September – October",
        temp: "22 – 28°C",
        desc: "Warm weather, fewer crowds.",
        image: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=800&q=80",
        icon: "cloud",
        iconBg: "#FFF7ED",
        iconColor: "#EA580C"
      },
      {
        season: "Winter",
        months: "November – March",
        temp: "10 – 16°C",
        desc: "Cooler and quieter, better for city/cultural travel.",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
        icon: "snowflake",
        iconBg: "#EBF8FF",
        iconColor: "#38BDF8"
      }
    ]
  },
  weatherSection: {
    title: "Greece Weather by Month",
    description: "Get a quick overview of average high temperatures throughout the year to help you plan your perfect Greek getaway.",
    legendText: "Best time to visit (shoulder season)",
    items: [
      { month: "Jan", icon: "/travel/Weahter Emojis/⛅.png", temp: "13°", desc: "Cool and dry", isHighlight: false },
      { month: "Feb", icon: "/travel/Weahter Emojis/☁️.png", temp: "14°", desc: "Cool and dry", isHighlight: false },
      { month: "Mar", icon: "/travel/Weahter Emojis/⛅.png", temp: "16°", desc: "Mild and pleasant", isHighlight: false },
      { month: "Apr", icon: "/travel/Weahter Emojis/🌞.png", temp: "20°", desc: "Warmer days", isHighlight: false },
      { month: "May", icon: "/travel/Weahter Emojis/⛅-1.png", temp: "25°", desc: "Great conditions", isHighlight: true },
      { month: "Jun", icon: "/travel/Weahter Emojis/🌞-1.png", temp: "30°", desc: "Hot and sunny", isHighlight: true },
      { month: "Jul", icon: "/travel/Weahter Emojis/🌞-2.png", temp: "33°", desc: "Hot and dry", isHighlight: false },
      { month: "Aug", icon: "/travel/Weahter Emojis/🌞-3.png", temp: "33°", desc: "Hot and dry", isHighlight: false },
      { month: "Sep", icon: "/travel/Weahter Emojis/🌞-1.png", temp: "29°", desc: "Ideal weather", isHighlight: true },
      { month: "Oct", icon: "/travel/Weahter Emojis/⛅-1.png", temp: "24°", desc: "Warm and pleasant", isHighlight: true },
      { month: "Nov", icon: "/travel/Weahter Emojis/☁️-1.png", temp: "19°", desc: "Cooler days", isHighlight: false },
      { month: "Dec", icon: "/travel/Weahter Emojis/☁️-2.png", temp: "15°", desc: "Cool and quiet", isHighlight: false }
    ]
  },
  airportsSection: {
    title: "Major Airports in Greece",
    items: [
      {
        code: "ATH",
        name: "Athens International Airport",
        desc: "The gateway to Greece, with Acropolis views and warm Mediterranean light.",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80"
      },
      {
        code: "SKG",
        name: "Thessaloniki Airport",
        desc: "A coastal arrival with sunset views, waterfront promenades, and northern Greek charm.",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80"
      },
      {
        code: "HER",
        name: "Heraklion Airport",
        desc: "Crete's main gateway, with Venetian harbor views and a warm island welcome.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        code: "CHQ",
        name: "Chania Airport",
        desc: "A charming arrival in western Crete, with old-town harbor charm and turquoise sea.",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80"
      },
      {
        code: "CFU",
        name: "Corfu Airport",
        desc: "A scenic Ionian arrival, with historic architecture, green hills, and island elegance.",
        image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80"
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
    title: "Travel Help / FAQ",
    description: "Everything you need to know before visiting Greece.",
    faqs: [
      { q: "When is the best time to visit Greece?", a: "The best time to visit is during the shoulder seasons (May-June and September-October) when the weather is pleasant and the crowds are thinner." },
      { q: "Do I need a visa to visit Greece?", a: "Greece is part of the Schengen Area. If you are an EU citizen or from a visa-exempt country, you do not need a visa for up to 90 days." },
      { q: "How many days do I need in Greece?", a: "A minimum of 7-10 days is recommended to comfortably see Athens and explore one or two major islands." },
      { q: "Which Greek islands are best for first-time visitors?", a: "Santorini, Mykonos, Crete, and Rhodes are among the most popular and highly rated islands depending on your travel style." },
      { q: "Is Greece expensive to visit?", a: "Greece offers excellent value for money. While luxury islands can be expensive, the mainland and lesser-known islands are very affordable." },
      { q: "What are the best beaches in Greece?", a: "Navagio in Zakynthos, Elafonissi in Crete, and Myrtos in Kefalonia are consistently ranked as stunning options." },
      { q: "Can I island-hop in Greece?", a: "Absolutely. Greece has an extensive and reliable ferry network making it very easy to travel seamlessly between islands." },
      { q: "Which destinations in Greece are best for families?", a: "Crete, Naxos, and Rhodes are incredibly family-friendly, offering calm shallow beaches and large resorts." },
      { q: "What currency is used in Greece?", a: "Greece uses the Euro (€) as its official currency. Credit cards are widely accepted." },
      { q: "What language is spoken in Greece?", a: "The official language is Greek, but English is widely spoken in tourist areas." },
      { q: "What is the emergency number in Greece?", a: "The general emergency number in Greece and across the EU is 112." },
      { q: "How do I get around Greece?", a: "You can travel via domestic flights, an extensive ferry network between islands, or rent a car for the mainland." }
    ]
  },
  newsletterSection: {
    title: "Get Greece Travel Deals",
    description: "Sign up for our exclusive newsletter and be the first to know about cheap flights and hotel price drops for your next Greek getaway.",
    inputPlaceholder: "Email Address",
    buttonText: "Subscribe"
  }
};