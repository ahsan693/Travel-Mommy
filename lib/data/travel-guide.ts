export interface WeatherData {
  month: string;
  temp: string;
  rain: string;
  conditions: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface RelatedGuide {
  title: string;
  image: string;
  date: string;
}

export type TravelGuideIconName =
  | "Banknote"
  | "Bell"
  | "Check"
  | "CircleHelp"
  | "Clock"
  | "Heart"
  | "Lightbulb"
  | "MessageSquare"
  | "Star"
  | "Sun"
  | "Tag"
  | "Waves"
  | "MapPin"
  | "ChevronRight"
  | "ArrowRight"
  | "ArrowUpRight"
  | "Plane"
  | "Plus"
  | "Minus"
  | "Thermometer"
  | "Info";

export interface TableOfContentItem {
  id: string;
  label: string;
}

export interface FastFactsGridData {
  title: string;
  highSeasonLabel: string;
  highSeasonValue: string;
  shoulderSeasonLabel: string;
  shoulderSeasonValue: string;
  lowSeasonLabel: string;
  lowSeasonValue: string;
  avgTempLabel: string;
  avgTempValue: string;
  currencyLabel: string;
  currencyValue: string;
}

export interface SidebarFastFactsData {
  title: string;
  icon: TravelGuideIconName;
  peakSeasonLabel: string;
  peakSeasonValue: string;
  budgetMonthsLabel: string;
  budgetMonthsValue: string;
  bestWeatherLabel: string;
  bestWeatherValue: string;
  avgTempLabel: string;
  avgTempValue: string;
  currencyLabel: string;
  currencyValue: string;
  tipTitle: string;
  tipText: string;
  tipIcon: TravelGuideIconName;
}

export interface TravelType {
  icon: TravelGuideIconName;
  title: string;
  period: string;
}

export interface SidebarAdData {
  image: string;
  title: string;
  description: string;
  bullets: { icon: TravelGuideIconName; text: string }[];
  buttonText: string;
}

export interface SidebarHelpData {
  title: string;
  description: string;
  buttonText: string;
  icon: TravelGuideIconName;
}

export interface TravelGuideData {
  breadcrumbs: string[];
  badge: string;
  title: string;
  heroDescription: string;
  author: string;
  authorIcon: TravelGuideIconName;
  date: string;
  readTime: string;
  heroImage: string;
  
  tableOfContents: {
    title: string;
    items: TableOfContentItem[];
  };

  quickAnswer: {
    title: string;
    text: string;
    icon: TravelGuideIconName;
  };

  fastFactsGrid: FastFactsGridData;
  sidebarFastFacts: SidebarFastFactsData;

  sections: {
    overview: {
      title: string;
      paragraphs: string[];
      tipTitle: string;
      tipText: string;
      image: string;
      imageAlt: string;
      imageCaption: string;
    };
    weatherByMonth: {
      title: string;
      description: string;
      tableHeaders: string[];
      data: WeatherData[];
      tipTitle: string;
      tipText: string;
      tipIcon: TravelGuideIconName;
    };
    travelTypes: {
      title: string;
      types: TravelType[];
    };
    rainyVsDry: {
      title: string;
      description: string;
      image: string;
      imageAlt: string;
    };
    whenToAvoid: {
      title: string;
      description: string;
    };
    recommendation: {
      title: string;
      description: string;
    };
  };

  faqSection: {
    title: string;
    faqs: FaqItem[];
  };

  bottomCta: {
    title: string;
    description: string;
    buttonText: string;
  };

  sidebarAd: SidebarAdData;
  sidebarHelp: SidebarHelpData;

  relatedGuidesSection: {
    title: string;
    linkText: string;
    guides: RelatedGuide[];
  };
}

export const guideData: TravelGuideData = {
  breadcrumbs: ["Home", "Travel Guides", "Indonesia"],
  badge: "INDONESIA TRAVEL GUIDE",
  title: "Best Time to Visit Bali: A Complete Month-by-Month Guide",
  heroDescription: "Discover Bali's weather, seasons, crowds and prices to help you choose the perfect time for your trip.",
  author: "By Sarah Jenkins",
  authorIcon: "Check",
  date: "Updated June 12, 2026",
  readTime: "8 Min Read",
  heroImage: "/08. Tavel Guide Country/Images/Travel Guide img-01.png", 
  
  tableOfContents: {
    title: "In This Guide",
    items: [
      { id: "overview", label: "1. Bali's Seasons: An Overview" },
      { id: "weather-by-month", label: "2. Bali Weather by Month" },
      { id: "travel-types", label: "3. Best Time for Different Types of Travel" },
      { id: "rainy-vs-dry", label: "4. Rainy Season vs Dry Season" },
      { id: "when-to-avoid", label: "5. When to Avoid Bali" },
      { id: "recommendation", label: "6. Final Recommendation" },
    ]
  },

  quickAnswer: {
    title: "Quick Answer",
    text: "Generally, the best time to visit Bali is during the dry season, from April to June and September to October, which offers good weather and fewer crowds.",
    icon: "Sun",
  },

  fastFactsGrid: {
    title: "Bali Fast Facts",
    highSeasonLabel: "High Season",
    highSeasonValue: "July, August, Christmas/NY",
    shoulderSeasonLabel: "Shoulder Season",
    shoulderSeasonValue: "April, May, June, September, October",
    lowSeasonLabel: "Low Season",
    lowSeasonValue: "January, February, March, November",
    avgTempLabel: "Avg Temperature",
    avgTempValue: "27°C - 31°C year-round",
    currencyLabel: "Currency",
    currencyValue: "Indonesian Rupiah (IDR)",
  },

  sidebarFastFacts: {
    title: "Bali Fast Facts",
    icon: "Bell",
    peakSeasonLabel: "Peak Season",
    peakSeasonValue: "July, August, Christmas",
    budgetMonthsLabel: "Budget Months",
    budgetMonthsValue: "Feb, March, November",
    bestWeatherLabel: "Best Weather",
    bestWeatherValue: "May, June, September",
    avgTempLabel: "Avg Temperature",
    avgTempValue: "27°C - 31°C year-round",
    currencyLabel: "Currency",
    currencyValue: "Indonesian Rupiah (IDR)",
    tipTitle: "Expert Tip",
    tipText: "Book flights at least 6 weeks in advance for peak July/August travel.",
    tipIcon: "MessageSquare"
  },

  sections: {
    overview: {
      title: "1. Bali's Seasons: An Overview",
      paragraphs: [
        "Located just 8 degrees south of the equator, Bali enjoys a warm, tropical climate year-round. However, rather than four distinct seasons, the island experiences two primary weather periods: the dry season and the wet season. Understanding the trade-offs of each will guarantee your tropical holiday lives up to every dream.",
        "Whether you are looking to surf the world-class breaks off the Bukit Peninsula, trek up the active volcano of Mount Batur, or submerge yourself in Ubud's rich cultural heart, timing your arrival is essential to making the most of your budget and days."
      ],
      tipTitle: "Expert Tip",
      tipText: "Book flights 3-4 months in advance if targeting the July-August high season, as routes to Denpasar fill up extremely quickly.",
      image: "/08. Tavel Guide Country/Images/Travel Guide img-02.png",
      imageAlt: "Bali Rice Terraces",
      imageCaption: "The vibrant green rice terraces in Ubud are most spectacular at the start of the dry season in May."
    },
    weatherByMonth: {
      title: "2. Bali Weather by Month",
      description: "Plan your travel with our complete month-by-month summary of temperature, rain days, and overall beach conditions.",
      tableHeaders: ["Month", "Avg Temp", "Rain Days", "Conditions"],
      data: [
        { month: "January", temp: "28°C", rain: "15 Days", conditions: "Heavy Rain" },
        { month: "April", temp: "29°C", rain: "9 Days", conditions: "Showers / Sun" },
        { month: "July", temp: "27°C", rain: "4 Days", conditions: "Sunny & Dry" },
        { month: "October", temp: "28°C", rain: "8 Days", conditions: "Mixed / Warm" },
      ],
      tipTitle: "TravelMommy Tip",
      tipText: "May and September often offer a great balance of good weather, lower prices and smaller crowds.",
      tipIcon: "Lightbulb"
    },
    travelTypes: {
      title: "3. Best Time for Different Types of Travel",
      types: [
        { icon: "Sun", title: "Beaches", period: "July - August" },
        { icon: "Banknote", title: "Budget Travel", period: "April, Oct, Nov" },
        { icon: "Waves", title: "Surfing", period: "May - September" },
        { icon: "Heart", title: "Families", period: "June - September" },
      ]
    },
    rainyVsDry: {
      title: "4. Rainy Season vs Dry Season",
      description: "The wet season (November to March) brings dramatic afternoon rainstorms, lush jungle colors, and deep discounts at top resorts. The dry season (April to October) serves up consistent offshore winds, low humidity, and prime conditions for volcano trekking and diving.",
      image: "/08. Tavel Guide Country/Images/Travel Guide img-02.png",
      imageAlt: "Bali Scenery"
    },
    whenToAvoid: {
      title: "5. When to Avoid Bali",
      description: "Avoid visiting during the peak monsoon season (January and February) if your heart is set on long beach days. Island hopping and ferry crossings can become rough and unpredictable. Also, be aware of Nyepi (Balinese New Year) in March, when the entire island shuts down completely for 24 hours."
    },
    recommendation: {
      title: "6. Final Recommendation",
      description: "For the perfect balance of superb tropical weather, lower crowds, and sensible flight prices, target the shoulder months: May, June, and September. You get the best of Bali without the extreme congestion of mid-summer."
    }
  },

  faqSection: {
    title: "Frequently Asked Questions",
    faqs: [
      { q: "Which is the hottest month in Bali?", a: "April and May are typically the hottest months in Bali, with temperatures often reaching up to 32°C (90°F) and high humidity levels before the dry season fully sets in." },
      { q: "Is Bali safe during the rainy season?", a: "Yes, Bali is generally safe during the rainy season. However, travelers should be cautious of slippery roads, especially if riding scooters, and occasional disrupted boat schedules to nearby islands." },
      { q: "How many days do I need for a complete Bali trip?", a: "A well-rounded trip to Bali requires at least 10 to 14 days. This gives you enough time to explore the cultural heart of Ubud, relax on the southern beaches, and visit neighboring islands like Nusa Penida." },
    ]
  },

  bottomCta: {
    title: "Explore Bali",
    description: "Compare flights to Bali and start planning your trip.",
    buttonText: "Search Flights"
  },

  sidebarAd: {
    image: "/08. Tavel Guide Country/Images/Travel Guide img-03.png",
    title: "Discover Greece",
    description: "From ancient ruins to island getaways, Greece offers unforgettable experiences for every traveler.",
    bullets: [
      { icon: "Star", text: "Popular year-round destination" },
      { icon: "Tag", text: "Great flight deals from major cities" },
      { icon: "Sun", text: "Iconic islands, beaches and history" },
      { icon: "Clock", text: "Average flight time from Europe: 3-4h" }
    ],
    buttonText: "View Greece Travel Guide ›"
  },

  sidebarHelp: {
    title: "Need help finding deals?",
    description: "Check out our tips or visit our Help Centre for more information on booking.",
    buttonText: "Visit Help Centre",
    icon: "CircleHelp"
  },

  relatedGuidesSection: {
    title: "Related Guides",
    linkText: "All Travel Guides",
    guides: [
      { title: "Japan Travel Guide", image: "/08. Tavel Guide Country/Images/Travel Guide img-06.png", date: "May 15, 2026" },
      { title: "Paris Travel Guide", image: "/08. Tavel Guide Country/Images/Travel Guide img-05.png", date: "May 15, 2026" },
      { title: "Netherlands Travel Guide", image: "/08. Tavel Guide Country/Images/Travel Guide img-04.png", date: "May 15, 2026" },
    ]
  }
};