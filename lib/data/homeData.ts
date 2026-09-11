export interface HomeFlight {
  city: string;
  route: string;
  price: string;
  airline: string;
  duration: string;
  image: string;
}

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
    widgetTitle: string;
    widgetSrc: string;
    rating: string;
    trustText: string;
    reviewerImages: string[];
    reviewText: string;
    rightHeading: string[];
  };
  whyCompare: { title: string; highlightedTitle: string; description: string };
  flights: HomeFlight[];
  flightsSection: { title: string; highlightedTitle: string; description: string; cta: string; cardCta: string };
  hotels: HomeHotel[];
  hotelsSection: { title: string; description: string; filters: string[]; cardUnit: string; cardCta: string };
  destinationsSection: { title: string; description: string; cta: string; widgetTitle: string };
  guidesSection: { title: string; cta: string };
  guides: TravelGuide[];
}

export const homeData: HomePageData = {
  hero: {
    title: "Compare Cheap\nFlights & Deals",
    description: "Search cheap flights from 500+ top airlines and travel sites. Find the lowest fares before you book.",
    image: "/Homepage/Section 1/Header Images/homeimg1.png",
    imageAlt: "Travel destination",
    cta: "Compare Flights",
    widgetTitle: "TravelMommy flight search",
    widgetSrc: "/flights-widget.html",
    rating: "★★★★★ 4.9 / 5",
    trustText: "Trusted by 300+ travelers",
    reviewerImages: [
      "/Homepage/Section 1/Header Icons/Icons/Profile picture of Michael Foster.png",
      "/Homepage/Section 1/Header Icons/Icons/Profile picture of Lindsay Walton.png",
      "/Homepage/Section 1/Header Icons/Icons/Profile picture of Tom Cook.png",
      "/Homepage/Section 1/Header Icons/Icons/Profile picture of Tom Walton.png",
    ],
    reviewText: "Compare live prices from trusted airlines and travel websites.",
    rightHeading: ["from 500+", "Travel Sites"],
  },
whyCompare: {
  title: "Why Compare Cheap Flights on",
  highlightedTitle: "TravelMommy?",
  description: "TravelMommy is a travel metasearch engine that helps you compare cheap flights from trusted airlines, booking websites, and travel providers — all in one place. Search live fares, discover the cheapest travel dates, and book directly with your preferred provider. Whether you're planning a weekend city break, a family holiday, a business trip, or a long-haul adventure, our metasearch platform makes it easy to find the absolute lowest airfare without searching multiple websites.",
} ,

  flights: [
    { city: "London", route: "Dub -> LHR", price: "€24", airline: "Ryanair", duration: "1h 20m", image: "/Homepage/Section 3/Images/Image Container.png" },
    { city: "London", route: "Dub -> LGW", price: "€24", airline: "Ryanair", duration: "1h 25m", image: "/Homepage/Section 3/Images/Image Container-1.png" },
    { city: "Barcelona", route: "Dub -> BCN", price: "€24", airline: "Ryanair", duration: "2h 35m", image: "/Homepage/Section 3/Images/Image Container-2.png" },
    { city: "Lisbon", route: "Dub -> LIS", price: "€24", airline: "Ryanair", duration: "2h 50m", image: "/Homepage/Section 3/Images/Image Container-3.png" },
    { city: "New York", route: "Dub -> JFK", price: "€189", airline: "Aer Lingus", duration: "7h 15m", image: "/Homepage/Section 3/Images/Image Container-4.png" },
    { city: "Rome", route: "Dub -> FCO", price: "€34", airline: "Ryanair", duration: "3h 10m", image: "/Homepage/Section 3/Images/Image Container-5.png" },
    { city: "Dubai", route: "Dub -> DXB", price: "€245", airline: "Emirates", duration: "7h 45m", image: "/Homepage/Section 3/Images/Image Container-6.png" },
    { city: "Amsterdam", route: "Dub -> AMS", price: "€28", airline: "Ryanair", duration: "1h 40m", image: "/Homepage/Section 3/Images/Image Container-7.png" },
  ],
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
  destinationsSection: {
    title: "Discover Your Next Destination",
    description: "Discover popular cities and compare flights and hotels before you book.",
    cta: "More Destinations",
    widgetTitle: "TravelMommy destinations widget",
  },
  guidesSection: { title: "Featured Travel Guides", cta: "View All Guides" },
  
  guides: [
    { date: "June 12, 2026", title: "Best Time to Visit Bali", image: "/Homepage/Section 6/Images/bali.png" },
    { date: "May 28, 2026", title: "How to Find Cheap Flights", image: "/Homepage/Section 6/Images/plane travel.png" },
    { date: "May 15, 2026", title: "Paris Travel Guide", image: "/Homepage/Section 6/Images/paris night.png" },
  ],
};
