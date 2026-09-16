export interface HomeHotel {
  name: string;
  location: string;
  rating: string;
  price: string;
  image: string;
}

export interface TravelGuide {
  date: string;
  title: string;
  image: string;
}

export interface HomePageData {
  hero: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    cta: string;
    rating: string;
    trustText: string;
    reviewerImages: string[];
    reviewText: string;
    rightHeading: string[];
  };
  whyCompare: { title: string; highlightedTitle: string; description: string };
  flightsSection: { title: string; highlightedTitle: string; description: string; cta: string; cardCta: string };
  hotels: HomeHotel[];
  hotelsSection: { title: string; description: string; filters: string[]; cardUnit: string; cardCta: string };
  guidesSection: { title: string; cta: string };
  guides: TravelGuide[];
}

export const homeData: HomePageData = {
  hero: {
    title: "Compare\nCheap Flights",
    description: "Search and compare flight prices from airlines and travel providers in one place. Choose the option that suits you and complete your booking with the provider.",
    image: "/Homepage/Section 1/Header Images/homeimg1.png",
    imageAlt: "Travel destination",
    cta: "Compare Flights",
    rating: "★★★★★ 4.9 / 5",
    trustText: "Trusted by 300+ travelers",
    reviewerImages: [
      "/Homepage/Section 1/Header Icons/Icons/Profile picture of Michael Foster.png",
      "/Homepage/Section 1/Header Icons/Icons/Profile picture of Lindsay Walton.png",
      "/Homepage/Section 1/Header Icons/Icons/Profile picture of Tom Cook.png",
      "/Homepage/Section 1/Header Icons/Icons/Profile picture of Tom Walton.png",
    ],
    reviewText: "Compare live prices from trusted airlines and travel websites.",
    rightHeading: ["from 500+", "Airlines & Sites"],
  },
  whyCompare: {
    title: "Why Compare Cheap Flights on",
    highlightedTitle: "TravelMommy?",
    description: "TravelMommy is a travel metasearch engine that helps you compare cheap flights from trusted airlines, booking websites, and travel providers — all in one place. Search live fares, discover the cheapest travel dates, and book directly with your preferred provider. Whether you're planning a weekend city break, a family holiday, a business trip, or a long-haul adventure, our metasearch platform makes it easy to find the absolute lowest airfare without searching multiple websites.",
  },
  flightsSection: {
    title: "Cheap Flights from",
    highlightedTitle: "Dublin(DUB)",
    description: "Find unbeatable flight deals from Dublin to top global destinations. We compare hundreds of trusted airlines to secure your absolute lowest airfare.",
    cta: "Browse All Flight Routes",
    cardCta: "View Flights",
  },
  hotels: [
    { name: "The Westin Paris", location: "Paris, France", rating: "4.9", price: "€29", image: "/Homepage/Section 4/Images/Image.png" },
    { name: "Hilton Barcelona", location: "Barcelona, Spain", rating: "4.7", price: "€142", image: "/Homepage/Section 4/Images/Image-1.png" },
    { name: "Marriott Dubai", location: "Dubai, UAE", rating: "4.8", price: "€98", image: "/Homepage/Section 4/Images/Image-2.png" },
  ],
  hotelsSection: {
    title: "Find Great Hotel Deals",
    description: "Compare hotel prices from trusted booking partners and find great places to stay around the world.",
    filters: ["All", "Luxury", "Budget", "Family", "Beach", "Business"],
    cardUnit: "/ night",
    cardCta: "Book Now",
  },
  guidesSection: { title: "Featured Travel Guides", cta: "View All Guides" },
  guides: [
    { date: "June 12, 2026", title: "Best Time to Visit Bali", image: "/Homepage/Section 6/Images/bali.png" },
    { date: "May 28, 2026", title: "How to Find Cheap Flights", image: "/Homepage/Section 6/Images/plane travel.png" },
    { date: "May 15, 2026", title: "Paris Travel Guide", image: "/Homepage/Section 6/Images/paris night.png" },
  ],
};