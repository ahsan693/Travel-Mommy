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

export interface DestinationCard {
  title: string;
  tagline: string;
  image: string;
  flightPrice: string;
  buttonText: string;
}

export interface FeatureCard {
  iconName: string;
  featureNumber: string;
  title: string;
  description: string;
}

export interface HomeFlight {
  city: string;
  route: string;
  price: string;
  airline: string;
  duration: string;
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
  whyCompareSection: {
    title: string;
    description: string;
    features: FeatureCard[];
  };
  flightsSection: {
    title: string;
    highlightedTitle: string;
    description: string;
    cta: string;
    cardCta: string;
    flights: HomeFlight[];
  };
  destinationsSection: {
    title: string;
    description: string;
    cta: string;
    cardBadge: string;
    cards: DestinationCard[];
  };
  hotels: HomeHotel[];
  hotelsSection: { title: string; description: string; filters: string[]; cardUnit: string; cardCta: string };
  guidesSection: { title: string; cta: string };
  guides: TravelGuide[];
  ctaSection: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
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
  whyCompareSection: {
    title: "Why Compare Cheap Flights on TravelMommy?",
    description: "Compare airlines, travel sites, and routes in one place, then book directly with the provider you trust.",
    features: [
      {
        iconName: "search",
        featureNumber: "Feature 01",
        title: "Compare Multiple Providers",
        description: "Search flight prices from airlines and travel sites in one place."
      },
      {
        iconName: "sliders",
        featureNumber: "Feature 02",
        title: "Simple Comparison",
        description: "Compare routes, times and prices before choosing."
      },
      {
        iconName: "ticket",
        featureNumber: "Feature 03",
        title: "Book with the Provider",
        description: "TravelMommy helps you compare; the booking is completed with the airline or travel provider."
      }
    ]
  },
  flightsSection: {
    title: "Cheap Flights from",
    highlightedTitle: "Dublin(DUB)",
    description: "Find unbeatable flight deals from Dublin to top global destinations. We compare hundreds of trusted airlines to secure your absolute lowest airfare.",
    cta: "Browse All Flight Routes",
    cardCta: "View Flights",
    flights: [
      { city: "London", route: "Dub → LHR", price: "€24", airline: "Ryanair", duration: "1h 20m", image: "/Homepage/Section 3/Images/Image Container.png" },
      { city: "London", route: "Dub → LGW", price: "€24", airline: "Ryanair", duration: "1h 25m", image: "/Homepage/Section 3/Images/Image Container-1.png" },
      { city: "Barcelona", route: "Dub → BCN", price: "€24", airline: "Ryanair", duration: "2h 35m", image: "/Homepage/Section 3/Images/Image Container-2.png" },
      { city: "Lisbon", route: "Dub → LIS", price: "€24", airline: "Ryanair", duration: "2h 50m", image: "/Homepage/Section 3/Images/Image Container-3.png" },
      { city: "New York", route: "Dub → JFK", price: "€189", airline: "Aer Lingus", duration: "7h 15m", image: "/Homepage/Section 3/Images/Image Container-4.png" },
      { city: "Rome", route: "Dub → FCO", price: "€34", airline: "Ryanair", duration: "3h 10m", image: "/Homepage/Section 3/Images/Image Container-5.png" },
      { city: "Dubai", route: "Dub → DXB", price: "€245", airline: "Emirates", duration: "7h 45m", image: "/Homepage/Section 3/Images/Image Container-6.png" },
      { city: "Amsterdam", route: "Dub → AMS", price: "€28", airline: "Ryanair", duration: "1h 40m", image: "/Homepage/Section 3/Images/Image Container-7.png" },
    ],
  },
  destinationsSection: {
    title: "Discover Your Next Destination",
    description: "Discover popular cities and compare flights before you book.",
    cta: "More Destinations",
    cardBadge: "Popular",
    cards: [
      { 
        title: "France", 
        tagline: "The City of Light", 
        image: "/Homepage/Section 5/Images/hero-image.png",
        flightPrice: "Flights from €38",
        buttonText: "Explore Paris"
      },
      { 
        title: "Spain", 
        tagline: "Modernism & beaches", 
        image: "/Homepage/Section 5/Images/hero-image-1.png",
        flightPrice: "Flights from €38",
        buttonText: "Explore Spain"
      },
      { 
        title: "UAE", 
        tagline: "Luxury & desert dunes", 
        image: "/Homepage/Section 5/Images/hero-image-2.png",
        flightPrice: "Flights from €38",
        buttonText: "Explore Dubai"
      },
      { 
        title: "Indonesia", 
        tagline: "Island paradise & temples", 
        image: "/Homepage/Section 5/Images/hero-image-3.png",
        flightPrice: "Flights from €38",
        buttonText: "Explore Indonesia"
      },
    ]
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
    { date: "June 12, 2026", title: "Best Time to Visit Bali", image: "/Homepage/Section 6/Images/bali.jpg" },
    { date: "May 28, 2026", title: "How to Find Cheap Flights", image: "/Homepage/Section 6/Images/cheapflight.jpg" },
    { date: "May 15, 2026", title: "Paris Travel Guide", image: "/Homepage/Section 6/Images/france.jpg" },
  ],
  ctaSection: {
    title: "Ready to find your next flight?",
    subtitle: "Ready to find your next flight?",
    buttonText: "Search Flights"
  }
};