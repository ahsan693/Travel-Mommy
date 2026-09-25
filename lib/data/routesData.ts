import {
  Calendar,
  MapPin,
  Search,
  GitCompare,
  Clock,
  Plane,
  SlidersHorizontal,
  ChevronDown,
  ArrowUpRight,
  type LucideIcon
} from "lucide-react";

export type RoutesIconName =
  | "Calendar"
  | "ChevronDown"
  | "Clock"
  | "GitCompare"
  | "MapPin"
  | "Plane"
  | "Search"
  | "SlidersHorizontal"
  | "ArrowUpRight";

export interface RouteResult {
  originCode: string;
  originFlag: string;
  originCity: string;
  destCode: string;
  destFlag: string;
  destCity: string;
  airlineCode: string;
  airlineName: string;
  airlineColor: string;
  duration: string;
  price: string;
  stops: "direct" | "1plus";
  continent: string;
  styles: string[];
}

export interface TipItem {
  icon: RoutesIconName;
  label: string;
  description: string;
}

export interface FilterPill {
  id: string;
  label: string;
  icon: RoutesIconName;
}

export interface DropdownOption {
  label: string;
  value: string;
}

export interface RoutesPageData {
  hero: {
    image: string;
    imageAlt: string;
    title: string;
    titleHighlight: string;
    description: string;
    filter: {
      fields: {
        id: string;
        label: string;
        defaultValue?: string;
        placeholder: string;
      }[];
      buttonLabel: string;
      buttonIcon: string;
    };
    secondaryFilters: {
      pills: FilterPill[];
      clearLabel: string;
      stopsOptions: DropdownOption[];
      tripStyleOptions: DropdownOption[];
      continentsOptions: DropdownOption[];
    };
  };
  results: {
    title: string;
    originCity: string;
    description: string;
    sortLabel: string;
    sortValue: string;
    sortOptions: DropdownOption[];
    airlineLabel: string;
    durationLabel: string;
    priceLabel: string;
    bookButtonLabel: string;
    routeIcon: RoutesIconName;
  };
  tips: {
    title: string;
    items: TipItem[];
  };
  routeResults: RouteResult[];
  paginationPages: string[];
}

export const routesData: RoutesPageData = {
  routeResults: [
    { originCode: "LHR", originFlag: "🇬🇧", originCity: "London", destCode: "JFK", destFlag: "🇺🇸", destCity: "New York", airlineCode: "BA", airlineName: "British Airways", airlineColor: "#1F3B73", duration: "7h 55m", price: "540", stops: "direct", continent: "na", styles: ["art", "nightlife"] },
    { originCode: "DXB", originFlag: "🇦🇪", originCity: "Dubai", destCode: "SIN", destFlag: "🇸🇬", destCity: "Singapore", airlineCode: "EK", airlineName: "Emirates", airlineColor: "#B7202E", duration: "7h 30m", price: "620", stops: "1plus", continent: "asia", styles: ["food", "nightlife"] },
    { originCode: "CDG", originFlag: "🇫🇷", originCity: "Paris", destCode: "NRT", destFlag: "🇯🇵", destCity: "Tokyo", airlineCode: "AF", airlineName: "Air France", airlineColor: "#002157", duration: "13h 15m", price: "890", stops: "1plus", continent: "asia", styles: ["art", "food"] },
    { originCode: "DUB", originFlag: "🇮🇪", originCity: "Dublin", destCode: "BER", destFlag: "🇩🇪", destCity: "Berlin", airlineCode: "FR", airlineName: "Ryanair", airlineColor: "#073590", duration: "2h 15m", price: "45", stops: "direct", continent: "europe", styles: ["nightlife", "art"] },
    { originCode: "IST", originFlag: "🇹🇷", originCity: "Istanbul", destCode: "LHR", destFlag: "🇬🇧", destCity: "London", airlineCode: "TK", airlineName: "Turkish Airlines", airlineColor: "#C8102E", duration: "4h 10m", price: "210", stops: "direct", continent: "europe", styles: ["art", "food"] },
    { originCode: "LAX", originFlag: "🇺🇸", originCity: "Los Angeles", destCode: "SYD", destFlag: "🇦🇺", destCity: "Sydney", airlineCode: "AA", airlineName: "American Airlines", airlineColor: "#003468", duration: "15h 05m", price: "1,100", stops: "1plus", continent: "oceania", styles: ["beach", "outdoor"] },
    { originCode: "FRA", originFlag: "🇩🇪", originCity: "Frankfurt", destCode: "BOM", destFlag: "🇮🇳", destCity: "Mumbai", airlineCode: "LH", airlineName: "Lufthansa", airlineColor: "#05164D", duration: "8h 20m", price: "730", stops: "direct", continent: "asia", styles: ["food", "underrated"] },
    { originCode: "DOH", originFlag: "🇶🇦", originCity: "Doha", destCode: "CPT", destFlag: "🇿🇦", destCity: "Cape Town", airlineCode: "QR", airlineName: "Qatar Airways", airlineColor: "#5C0F3E", duration: "10h 40m", price: "810", stops: "1plus", continent: "africa", styles: ["outdoor", "beach"] },
    { originCode: "AMS", originFlag: "🇳🇱", originCity: "Amsterdam", destCode: "NBO", destFlag: "🇰🇪", destCity: "Nairobi", airlineCode: "KL", airlineName: "KLM", airlineColor: "#00A1DE", duration: "8h 50m", price: "670", stops: "1plus", continent: "africa", styles: ["outdoor", "underrated"] },
    { originCode: "AUH", originFlag: "🇦🇪", originCity: "Abu Dhabi", destCode: "FCO", destFlag: "🇮🇹", destCity: "Rome", airlineCode: "EY", airlineName: "Etihad", airlineColor: "#B08D57", duration: "6h 25m", price: "440", stops: "direct", continent: "europe", styles: ["art", "food"] },
    { originCode: "ZRH", originFlag: "🇨🇭", originCity: "Zurich", destCode: "YUL", destFlag: "🇨🇦", destCity: "Montreal", airlineCode: "LX", airlineName: "SWISS", airlineColor: "#E4032E", duration: "8h 35m", price: "590", stops: "direct", continent: "na", styles: ["food", "nightlife"] },
    { originCode: "MAD", originFlag: "🇪🇸", originCity: "Madrid", destCode: "MEX", destFlag: "🇲🇽", destCity: "Mexico City", airlineCode: "IB", airlineName: "Iberia", airlineColor: "#D8112D", duration: "11h 45m", price: "780", stops: "1plus", continent: "na", styles: ["food", "outdoor"] },
  ],
  paginationPages: ["1", "2", "3", "10", "..."],
  hero: {
    image: "/images/clouds-sunset.jpg", 
    imageAlt: "Clouds at sunset seen from above",
    title: "Cheap Flights from ",
    titleHighlight: "Dublin",
    description: "Compare cheap flights from Dublin to popular destinations and discover recently found fares from airlines and travel providers.",
    filter: {
      fields: [
        { id: "routes-origin", label: "Origin", defaultValue: "London LHR", placeholder: "Where from?" },
        { id: "routes-destination", label: "Destination", placeholder: "Where to?" },
        { id: "routes-airline", label: "Airline", placeholder: "All Carriers" },
      ],
      buttonLabel: "Filter Routes",
      buttonIcon: "search",
    },
    secondaryFilters: {
      pills: [
        { id: "filters", label: "Filters", icon: "SlidersHorizontal" },
        { id: "stops", label: "Stops", icon: "ChevronDown" },
        { id: "flight-budget", label: "Flight budget", icon: "ChevronDown" },
        { id: "trip-style", label: "Trip style", icon: "ChevronDown" },
        { id: "continents", label: "Continents", icon: "ChevronDown" },
      ],
      clearLabel: "Clear filters",
      stopsOptions: [
        { label: "Any number of stops", value: "any" },
        { label: "Direct", value: "direct" },
        { label: "1+ stops", value: "1plus" }
      ],
      tripStyleOptions: [
        { label: "Beach", value: "beach" },
        { label: "Outdoor adventures", value: "outdoor" },
        { label: "Great food", value: "food" },
        { label: "Art and culture", value: "art" },
        { label: "Underrated destinations", value: "underrated" },
        { label: "Nightlife and entertainment", value: "nightlife" }
      ],
      continentsOptions: [
        { label: "Everywhere", value: "everywhere" },
        { label: "Asia", value: "asia" },
        { label: "Europe", value: "europe" },
        { label: "North America", value: "na" },
        { label: "South America", value: "sa" },
        { label: "Oceania", value: "oceania" },
        { label: "Africa", value: "africa" }
      ]
    }
  },
  results: {
    title: "Cheap Flight Routes from",
    originCity: "Dublin",
    description: "Showing recently found fares from airlines and travel providers.",
    sortLabel: "Sort by:",
    sortValue: "Lowest Price",
    sortOptions: [
      { label: "Recommended", value: "recommended" },
      { label: "Lowest Price", value: "lowest-price" },
    ],
    airlineLabel: "Airline",
    durationLabel: "Duration",
    priceLabel: "From",
    bookButtonLabel: "Book Now",
    routeIcon: "Plane",
  },
  tips: {
    title: "Tips for Finding Cheaper Flights from Dublin",
    items: [
      {
        icon: "Calendar",
        label: "Tip",
        description: "Be flexible with travel dates"
      },
      {
        icon: "MapPin",
        label: "Tip",
        description: "Compare nearby airports"
      },
      {
        icon: "Search",
        label: "Tip",
        description: "Compare multiple providers"
      },
      {
        icon: "GitCompare",
        label: "Tip",
        description: "Check direct and connecting options"
      },
      {
        icon: "Clock",
        label: "Tip",
        description: "Consider off-peak travel"
      }
    ]
  }
};