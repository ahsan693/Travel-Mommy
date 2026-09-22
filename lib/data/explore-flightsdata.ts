import {
  MapPin,
  TrendingUp,
  ShieldCheck,
  Heart,
  type LucideIcon
} from "lucide-react";

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
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ExploreFlightsData {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  regions: Region[];
  exploreCountries: {
    title: string;
    subtitle: string;
    buttonText: string;
    countries: Country[];
  };
  flightDeals: FlightDeal[];
  whyBook: {
    title: string;
    subtitle: string;
    benefits: Benefit[];
  };
}

export const exploreFlightsData: ExploreFlightsData = {
  hero: {
    title: "Explore Flights by Region",
    subtitle: "Browse regions, choose a country, and discover amazing flight deals from top airlines around the world.",
    image: "/images/santorini-hero.jpg", 
  },
  regions: [
    { name: "Europe", description: "Historic cities, stunning coastlines and diverse cultures.", image: "/images/europe.jpg" },
    { name: "Asia", description: "Incredible destinations, rich cultures and unforgettable experiences.", image: "/images/asia.jpg" },
    { name: "North America", description: "Vibrant cities, national parks and endless adventures.", image: "/images/north-america.jpg" },
    { name: "South America", description: "Breathtaking landscapes, ancient history and vibrant cultures.", image: "/images/south-america.jpg" },
    { name: "Africa", description: "Extraordinary wildlife, amazing landscapes and rich cultures.", image: "/images/africa.jpg" },
    { name: "Middle East", description: "Modern cities, rich history and unique experiences.", image: "/images/middle-east.jpg" },
    { name: "Caribbean", description: "Beautiful beaches, turquoise waters and a laid-back atmosphere.", image: "/images/caribbean.jpg" },
    { name: "Oceania", description: "Stunning islands, unique wildlife and incredible natural beauty.", image: "/images/oceania.jpg" }
  ],
  exploreCountries: {
    title: "Explore Countries in Europe",
    subtitle: "Select a country to find flight deals, or view all European destinations.",
    buttonText: "View All European Flights",
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
  flightDeals: [
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
  whyBook: {
    title: "Why Book Flights with TravelMommy?",
    subtitle: "Compare prices, explore more destinations, and travel with confidence.",
    benefits: [
      {
        icon: TrendingUp,
        title: "Compare Prices",
        description: "Find the best deals from hundreds of airlines in one place."
      },
      {
        icon: ShieldCheck,
        title: "Trusted Providers",
        description: "Book with leading airlines and travel partners worldwide."
      },
      {
        icon: MapPin,
        title: "More Destinations",
        description: "Explore flights to thousands of amazing places."
      },
      {
        icon: Heart,
        title: "Travel Inspiration",
        description: "Get tips, guides and ideas for your next adventure."
      }
    ]
  }
};

export default exploreFlightsData;