export interface RouteResult { originCode: string; originFlag: string; originCity: string; destCode: string; destFlag: string; destCity: string; airlineCode: string; airlineName: string; airlineColor: string; duration: string; price: string }
export interface RoutesPageData { routeResults: RouteResult[]; paginationPages: string[] }
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
};