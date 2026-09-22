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
}

export interface TableOfContentItem {
  id: string;
  label: string;
}

export interface FastFacts {
  highSeason: string;
  shoulderSeason: string;
  lowSeason: string;
  avgTemp: string;
  currency: string;
}

export interface TravelGuideData {
  breadcrumbs: string[];
  badge: string;
  title: string;
  heroImage: string;
  quickAnswer: string;
  fastFacts: FastFacts;
  tableOfContents: TableOfContentItem[];
  weatherData: WeatherData[];
  faqs: FaqItem[];
  relatedGuides: RelatedGuide[];
}

export const guideData: TravelGuideData = {
  breadcrumbs: ["Flight Destinations", "Travel Guides", "Explore Bali"],
  badge: "INDONESIA TRAVEL GUIDE",
  title: "Best Time to Visit Bali: A Complete Month-by-Month Guide",
  heroImage: "/images/bali-rice-terraces.jpg", 
  quickAnswer: "Generally, the best time to visit Bali is during the dry season, from April to June and September to October, which offers good weather and fewer crowds.",
  fastFacts: {
    highSeason: "July, August, Christmas/NY",
    shoulderSeason: "April, May, June, September, October",
    lowSeason: "January, February, March, November",
    avgTemp: "27°C - 31°C year-round",
    currency: "Indonesian Rupiah (IDR)",
  },
  tableOfContents: [
    { id: "overview", label: "1. Bali's Seasons: An Overview" },
    { id: "weather-by-month", label: "2. Bali Weather by Month" },
    { id: "travel-types", label: "3. Best Time for Different Types of Travel" },
    { id: "rainy-vs-dry", label: "4. Rainy Season vs Dry Season" },
    { id: "when-to-avoid", label: "5. When to Avoid Bali" },
    { id: "recommendation", label: "6. Final Recommendation" },
  ],
  weatherData: [
    { month: "January", temp: "28°C", rain: "15 Days", conditions: "Heavy Rain" },
    { month: "April", temp: "29°C", rain: "9 Days", conditions: "Showers / Sun" },
    { month: "July", temp: "27°C", rain: "4 Days", conditions: "Sunny & Dry" },
    { month: "October", temp: "28°C", rain: "8 Days", conditions: "Mixed / Warm" },
  ],
  faqs: [
    { q: "Which is the hottest month in Bali?", a: "April and May are typically the hottest months in Bali, with temperatures often reaching up to 32°C (90°F) and high humidity levels before the dry season fully sets in." },
    { q: "Is Bali safe during the rainy season?", a: "Yes, Bali is generally safe during the rainy season. However, travelers should be cautious of slippery roads, especially if riding scooters, and occasional disrupted boat schedules to nearby islands." },
    { q: "How many days do I need for a complete Bali trip?", a: "A well-rounded trip to Bali requires at least 10 to 14 days. This gives you enough time to explore the cultural heart of Ubud, relax on the southern beaches, and visit neighboring islands like Nusa Penida." },
  ],
  relatedGuides: [
    { title: "Japan Travel Guide", image: "/images/japan.jpg" },
    { title: "Paris Travel Guide", image: "/images/paris.jpg" },
    { title: "Netherlands Travel Guide", image: "/images/netherlands.jpg" },
  ]
};