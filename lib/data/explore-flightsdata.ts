export type ExploreIconName =
  | "MapPin"
  | "Globe"
  | "MapIcon"
  | "Plane"
  | "Search"
  | "ChevronDown"
  | "ChevronRight"
  | "ArrowRight"
  | "ArrowLeft"
  | "CircleHelp"
  | "Star"
  | "Tag"
  | "Clock"
  | "Sun"
  | "TrendingUp"
  | "ShieldCheck"
  | "Heart";

export interface SearchField {
  label: string;
  placeholder: string;
  icon: ExploreIconName;
  hasDropdown?: boolean;
}

export interface Region {
  name: string;
  description: string;
  image: string;
}

export interface Country {
  name: string;
  flag: string;
}

export interface FlightDeal {
  origin: string;
  originCity: string;
  dest: string;
  destCity: string;
  airline: string;
  duration: string;
  price: string;
}

export interface Benefit {
  icon: ExploreIconName;
  title: string;
  description: string;
}

export interface ExploreFlightsData {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    searchFields: SearchField[];
    searchButton: {
      text: string;
      icon: ExploreIconName;
    };
  };
  browseRegion: {
    title: string;
    subtitle: string;
    viewFlightsText: string;
    viewFlightsIcon: ExploreIconName;
    regions: Region[];
  };
  exploreCountries: {
    title: string;
    subtitle: string;
    buttonText: string;
    backIcon: ExploreIconName;
    buttonIcon: ExploreIconName;
    countries: Country[];
  };
  flightDealsWorkspace: {
    header: {
      title: string;
      subtitle: string;
      sortLabel: string;
      sortDefault: string;
      sortIcon: ExploreIconName;
    };
    cardLabels: {
      airlineIcon: ExploreIconName;
      duration: string;
      from: string;
      bookButton: string;
    };
    deals: FlightDeal[];
    sidebarDiscover: {
      image: string;
      title: string;
      description: string;
      bullets: { icon: ExploreIconName; text: string }[];
      buttonText: string;
    };
    sidebarHelp: {
      icon: ExploreIconName;
      title: string;
      description: string;
      buttonText: string;
    };
  };
  whyBook: {
    title: string;
    subtitle: string;
    benefits: Benefit[];
  };
}

const exploreFlightsData: ExploreFlightsData = {
  hero: {
    title: "Explore Flights by Region",
    subtitle: "Browse regions, choose a country, and discover amazing flight deals from top airlines around the world.",
    image: "/10. Flights By Region/imgs/Hero Area.png",
    searchFields: [
      { label: "Origin", placeholder: "Where are you flying from?", icon: "MapPin" },
      { label: "Region", placeholder: "Europe", icon: "Globe", hasDropdown: true },
      { label: "Country", placeholder: "Select a country", icon: "MapIcon", hasDropdown: true },
      { label: "Airline", placeholder: "All Airlines", icon: "Plane", hasDropdown: true },
    ],
    searchButton: {
      text: "Search Flights",
      icon: "Search"
    }
  },
  browseRegion: {
    title: "Browse Flights by Region",
    subtitle: "Choose a region to see available countries and flight deals.",
    viewFlightsText: "View flights",
    viewFlightsIcon: "ArrowRight",
    regions: [
      { name: "Europe", description: "Historic cities, stunning coastlines and diverse cultures.", image: "/10. Flights By Region/imgs/region-image.png" },
      { name: "Asia", description: "Incredible destinations, rich cultures and unforgettable experiences.", image: "/10. Flights By Region/imgs/region-image-1.png" },
      { name: "North America", description: "Vibrant cities, national parks and endless adventures.", image: "/10. Flights By Region/imgs/region-image-2.png" },
      { name: "South America", description: "Breathtaking landscapes, ancient history and vibrant cultures.", image: "/10. Flights By Region/imgs/region-image-3.png" },
      { name: "Africa", description: "Extraordinary wildlife, amazing landscapes and rich cultures.", image: "/10. Flights By Region/imgs/region-image-4.png" },
      { name: "Middle East", description: "Modern cities, rich history and unique experiences.", image: "/10. Flights By Region/imgs/region-image-5.png" },
      { name: "Caribbean", description: "Beautiful beaches, turquoise waters and a laid-back atmosphere.", image: "/10. Flights By Region/imgs/region-image-6.png" },
      { name: "Oceania", description: "Stunning islands, unique wildlife and incredible natural beauty.", image: "/10. Flights By Region/imgs/region-image-7.png" }
    ]
  },
  exploreCountries: {
    title: "Explore Countries in Europe",
    subtitle: "Select a country to find flight deals, or view all European destinations.",
    buttonText: "View All European Flights",
    backIcon: "ArrowLeft",
    buttonIcon: "ChevronRight",
    countries: [
      { name: "Greece", flag: "/images/flags/gr.png" },
      { name: "Italy", flag: "/images/flags/it.png" },
      { name: "Spain", flag: "/images/flags/es.png" },
      { name: "France", flag: "/images/flags/fr.png" },
      { name: "Portugal", flag: "/images/flags/pt.png" },
      { name: "Croatia", flag: "/images/flags/hr.png" },
      { name: "Ireland", flag: "/images/flags/ie.png" },
      { name: "Turkey", flag: "/images/flags/tr.png" }
    ]
  },
  flightDealsWorkspace: {
    header: {
      title: "Flight Deals to Greece",
      subtitle: "Showing popular flights to Greece from multiple airlines.",
      sortLabel: "Sort by:",
      sortDefault: "Lowest Price",
      sortIcon: "ChevronDown"
    },
    cardLabels: {
      airlineIcon: "Plane",
      duration: "Duration",
      from: "From",
      bookButton: "Book Now"
    },
    deals: [
      { origin: "LHR", originCity: "London", dest: "ATH", destCity: "Athens", airline: "British Airways", duration: "3h 50m", price: "$145" },
      { origin: "JFK", originCity: "New York", dest: "ATH", destCity: "Athens", airline: "Delta", duration: "9h 40m", price: "$420" },
      { origin: "DXB", originCity: "Dubai", dest: "ATH", destCity: "Athens", airline: "Emirates", duration: "5h 15m", price: "$310" },
      { origin: "DUB", originCity: "Dublin", dest: "ATH", destCity: "Athens", airline: "Ryanair", duration: "3h 45m", price: "$89" },
      { origin: "FRA", originCity: "Frankfurt", dest: "ATH", destCity: "Athens", airline: "Lufthansa", duration: "3h 10m", price: "$165" },
      { origin: "IST", originCity: "Istanbul", dest: "ATH", destCity: "Athens", airline: "Turkish Airlines", duration: "1h 20m", price: "$95" },
      { origin: "CDG", originCity: "Paris", dest: "ATH", destCity: "Athens", airline: "Air France", duration: "3h 15m", price: "$172" },
      { origin: "AMS", originCity: "Amsterdam", dest: "ATH", destCity: "Athens", airline: "KLM", duration: "3h 25m", price: "$180" },
      { origin: "MAD", originCity: "Madrid", dest: "ATH", destCity: "Athens", airline: "Iberia", duration: "3h 40m", price: "$155" },
    ],
    sidebarDiscover: {
      image: "/10. Flights By Region/imgs/guide-image.png",
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
      icon: "CircleHelp",
      title: "Need help finding deals?",
      description: "Check out our tips or visit our Help Centre for more information on booking.",
      buttonText: "Visit Help Centre"
    }
  },
  whyBook: {
    title: "Why Book Flights with TravelMommy?",
    subtitle: "Compare prices, explore more destinations, and travel with confidence.",
    benefits: [
      {
        icon: "TrendingUp",
        title: "Compare Prices",
        description: "Find the best deals from hundreds of airlines in one place."
      },
      {
        icon: "ShieldCheck",
        title: "Trusted Providers",
        description: "Book with leading airlines and travel partners worldwide."
      },
      {
        icon: "MapPin",
        title: "More Destinations",
        description: "Explore flights to thousands of amazing places."
      },
      {
        icon: "Heart",
        title: "Travel Inspiration",
        description: "Get tips, guides and ideas for your next adventure."
      }
    ]
  }
};

export default exploreFlightsData;