export type FlightDestination = { city: string; airport: string; image: string };

export type TravelpayoutsFlight = {
  origin: string;
  destination: string;
  origin_airport?: string;
  destination_airport?: string;
  price: number;
  airline: string;
  flight_number: string | number;
  departure_at: string;
  return_at?: string;
  transfers?: number;
  duration?: number;
  duration_to?: number;
  link?: string;
};

export type TravelpayoutsPricesResponse = { success: boolean; data: TravelpayoutsFlight[]; error: string | null; currency?: string };

export type Flight = {
  id: string;
  from: string;
  to: string;
  price: number;
  currency: string;
  airline: string;
  flightNumber: string;
  departureTime: string;
  returnTime?: string;
  stops: number;
  durationMinutes: number;
  ticketLink?: string;
};

export type FlightAvailability =
  | { destination: string; status: "available"; flight: Flight }
  | { destination: string; status: "unavailable" }
  | { destination: string; status: "error" };

export type FlightsApiResponse = { results: FlightAvailability[] };