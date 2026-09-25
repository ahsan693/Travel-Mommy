export interface SearchFlight {
  id: string;
  airline: string;
  logoUrl: string;
  departureTime: string;
  departureAirport: string;
  duration: string;
  stops: string;
  arrivalTime: string;
  arrivalAirport: string;
  sitesCount: number;
  price: number;
}

export interface SearchPageData {
  search: {
    departure: string;
    arrival: string;
    dates: string;
    travellers: string;
    departureLabel: string;
    arrivalLabel: string;
    datesLabel: string;
    travellersLabel: string;
    departureIcon: string;
    arrivalIcon: string;
    swapLabel: string;
    submitLabel: string;
  };
  filters: {
    title: string;
    resetLabel: string;
    stopsLabel: string;
    airlinesLabel: string;
    priceRangeLabel: string;
    departureTimeLabel: string;
    stops: { label: string; price: number; checked: boolean }[];
    airlines: { label: string; checked: boolean }[];
    priceRange: { min: number; max: number };
    departureTimes: string[];
  };
  resultsHeader: {
    count: number;
    countLabel: string;
    tabs: string[];
    sitesLabel: string;
    dealLabel: string;
    loadMoreLabel: string;
  };
  flights: SearchFlight[];
}

export const searchData: SearchPageData = {
  search: {
    departure: "New York (JFK)",
    arrival: "London (LHR)",
    dates: "08 Nov - 15 Nov 2025",
    travellers: "01 Adult, Economy",
    departureLabel: "From",
    arrivalLabel: "To",
    datesLabel: "Dates",
    travellersLabel: "Travellers",
    departureIcon: "/assets/airplane.svg",
    arrivalIcon: "/assets/airplane.svg",
    swapLabel: "Swap departure and arrival",
    submitLabel: "Search flights",
  },
  filters: {
    title: "Filters",
    resetLabel: "Reset all",
    stopsLabel: "Stops",
    airlinesLabel: "Airlines",
    priceRangeLabel: "Price range",
    departureTimeLabel: "Departure time",
    stops: [
      { label: "Nonstop", price: 420, checked: true },
      { label: "1 stop", price: 385, checked: false },
      { label: "2+ stops", price: 350, checked: false },
    ],
    airlines: [
      { label: "Delta Air Lines", checked: true },
      { label: "British Airways", checked: true },
      { label: "Virgin Atlantic", checked: false },
      { label: "United Airlines", checked: false },
      { label: "American Airlines", checked: false },
    ],
    priceRange: { min: 350, max: 1200 },
    departureTimes: ["Morning", "Afternoon", "Evening", "Night"],
  },
  resultsHeader: {
    count: 245,
    countLabel: "results found",
    tabs: ["Cheapest", "Best", "Fastest"],
    sitesLabel: "from {count} sites",
    dealLabel: "View deal",
    loadMoreLabel: "Load more results",
  },
  flights: [
    {
      id: "1",
      airline: "Delta Air Lines",
      logoUrl: "/assets/Airlines logos/Logo.png", 
      departureTime: "06:00 PM",
      departureAirport: "JFK",
      duration: "7h 15m",
      stops: "Nonstop",
      arrivalTime: "06:15 AM",
      arrivalAirport: "LHR",
      sitesCount: 12,
      price: 420,
    },
    {
      id: "2",
      airline: "British Airways",
      logoUrl: "/assets/Airlines logos/Logo-1.png",
      departureTime: "09:30 PM",
      departureAirport: "JFK",
      duration: "7h 15m",
      stops: "Nonstop",
      arrivalTime: "09:45 AM",
      arrivalAirport: "LHR",
      sitesCount: 8,
      price: 580,
    },
    {
      id: "3",
      airline: "United Airlines",
      logoUrl: "/assets/Airlines logos/Logo-2.png",
      departureTime: "07:15 PM",
      departureAirport: "JFK",
      duration: "10h 05m",
      stops: "1 stop (FRA)",
      arrivalTime: "10:20 AM",
      arrivalAirport: "LHR",
      sitesCount: 15,
      price: 390,
    },
    {
      id: "4",
      airline: "Virgin Atlantic",
      logoUrl: "/assets/Airlines logos/Logo-3.png",
      departureTime: "10:50 PM",
      departureAirport: "JFK",
      duration: "7h 10m",
      stops: "Nonstop",
      arrivalTime: "11:00 AM",
      arrivalAirport: "LHR",
      sitesCount: 10,
      price: 645,
    },
    {
      id: "5",
      airline: "American Airlines",
      logoUrl: "/assets/Airlines logos/Logo-4.png",
      departureTime: "05:30 PM",
      departureAirport: "JFK",
      duration: "7h 15m",
      stops: "Nonstop",
      arrivalTime: "05:45 AM",
      arrivalAirport: "LHR",
      sitesCount: 9,
      price: 415,
    },
    {
      id: "6",
      airline: "Lufthansa",
      logoUrl: "/assets/Airlines logos/Logo-5.png",
      departureTime: "03:20 PM",
      departureAirport: "JFK",
      duration: "12h 50m",
      stops: "1 stop (MUC)",
      arrivalTime: "09:10 AM",
      arrivalAirport: "LHR",
      sitesCount: 21,
      price: 365,
    },
  ],
};