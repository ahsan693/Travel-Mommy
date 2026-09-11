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
}

export interface RoutesPageData {
  hero: {
    image: string;
    imageAlt: string;
    title: string;
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
  };
  results: {
    title: string;
    description: string;
    sortLabel: string;
    sortValue: string;
    sortOptions: { label: string; value: "recommended" | "lowest-price" }[];
    airlineLabel: string;
    durationLabel: string;
    priceLabel: string;
    bookButtonLabel: string;
    routeIcon: string;
  };
  routeResults: RouteResult[];
  paginationPages: string[];
}

export const routesData: RoutesPageData = {
  routeResults: [
    { originCode: "LHR", originFlag: "🇬🇧", originCity: "London", destCode: "JFK", destFlag: "🇺🇸", destCity: "New York", airlineCode: "BA", airlineName: "British Airways", airlineColor: "#1F3B73", duration: "7h 55m", price: "540" },
    { originCode: "DXB", originFlag: "🇦🇪", originCity: "Dubai", destCode: "SIN", destFlag: "🇸🇬", destCity: "Singapore", airlineCode: "EK", airlineName: "Emirates", airlineColor: "#B7202E", duration: "7h 30m", price: "620" },
    { originCode: "CDG", originFlag: "🇫🇷", originCity: "Paris", destCode: "NRT", destFlag: "🇯🇵", destCity: "Tokyo", airlineCode: "AF", airlineName: "Air France", airlineColor: "#002157", duration: "13h 15m", price: "890" },
    { originCode: "DUB", originFlag: "🇮🇪", originCity: "Dublin", destCode: "BER", destFlag: "🇩🇪", destCity: "Berlin", airlineCode: "FR", airlineName: "Ryanair", airlineColor: "#073590", duration: "2h 15m", price: "45" },
    { originCode: "IST", originFlag: "🇹🇷", originCity: "Istanbul", destCode: "LHR", destFlag: "🇬🇧", destCity: "London", airlineCode: "TK", airlineName: "Turkish Airlines", airlineColor: "#C8102E", duration: "4h 10m", price: "210" },
    { originCode: "LAX", originFlag: "🇺🇸", originCity: "Los Angeles", destCode: "SYD", destFlag: "🇦🇺", destCity: "Sydney", airlineCode: "AA", airlineName: "American Airlines", airlineColor: "#003468", duration: "15h 05m", price: "1,100" },
    { originCode: "FRA", originFlag: "🇩🇪", originCity: "Frankfurt", destCode: "BOM", destFlag: "🇮🇳", destCity: "Mumbai", airlineCode: "LH", airlineName: "Lufthansa", airlineColor: "#05164D", duration: "8h 20m", price: "730" },
    { originCode: "DOH", originFlag: "🇶🇦", originCity: "Doha", destCode: "CPT", destFlag: "🇿🇦", destCity: "Cape Town", airlineCode: "QR", airlineName: "Qatar Airways", airlineColor: "#5C0F3E", duration: "10h 40m", price: "810" },
    { originCode: "AMS", originFlag: "🇳🇱", originCity: "Amsterdam", destCode: "NBO", destFlag: "🇰🇪", destCity: "Nairobi", airlineCode: "KL", airlineName: "KLM", airlineColor: "#00A1DE", duration: "8h 50m", price: "670" },
    { originCode: "AUH", originFlag: "🇦🇪", originCity: "Abu Dhabi", destCode: "FCO", destFlag: "🇮🇹", destCity: "Rome", airlineCode: "EY", airlineName: "Etihad", airlineColor: "#B08D57", duration: "6h 25m", price: "440" },
    { originCode: "ZRH", originFlag: "🇨🇭", originCity: "Zurich", destCode: "YUL", destFlag: "🇨🇦", destCity: "Montreal", airlineCode: "LX", airlineName: "SWISS", airlineColor: "#E4032E", duration: "8h 35m", price: "590" },
    { originCode: "MAD", originFlag: "🇪🇸", originCity: "Madrid", destCode: "MEX", destFlag: "🇲🇽", destCity: "Mexico City", airlineCode: "IB", airlineName: "Iberia", airlineColor: "#D8112D", duration: "11h 45m", price: "780" },
  ],
  paginationPages: ["1", "2", "3", "10", "..."],
  hero: {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&w=1920&q=80",
    imageAlt: "Clouds at sunset seen from above",
    title: "Compare Cheap Flight Routes Worldwide",
    description: "Search cheap flight routes by departure airport, destination, or airline. Compare prices from hundreds of trusted airlines and book with certified travel partners.",
    filter: {
      fields: [
        { id: "routes-origin", label: "Origin", defaultValue: "London LHR", placeholder: "Where from?" },
        { id: "routes-destination", label: "Destination", placeholder: "Where to?" },
        { id: "routes-airline", label: "Airline", placeholder: "All Carriers" },
      ],
      buttonLabel: "Filter Routes",
      buttonIcon: "search",
    },
  },
  results: {
    title: "124 Routes Found",
    description: "Showing top results for international connections",
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
    routeIcon: "plane",
  },
};