import { getTravelpayoutsPrices } from "../http/flightHttp";
import type { Flight, TravelpayoutsFlight } from "../types/flight";

function toFlight(ticket: TravelpayoutsFlight, currency: string): Flight {
  return {
    id: `${ticket.origin}-${ticket.destination}-${ticket.airline}-${ticket.flight_number}-${ticket.departure_at}`,
    from: ticket.origin_airport ?? ticket.origin,
    to: ticket.destination_airport ?? ticket.destination,
    price: ticket.price,
    currency,
    airline: ticket.airline,
    flightNumber: String(ticket.flight_number),
    departureTime: ticket.departure_at,
    returnTime: ticket.return_at,
    stops: ticket.transfers ?? 0,
    durationMinutes: ticket.duration_to ?? ticket.duration ?? 0,
    ticketLink: ticket.link,
  };
}

type FindCheapestFlightParams = { origin: string; destination: string; departureAt: string; currency: string };

export async function findCheapestFlight({ origin, destination, departureAt, currency }: FindCheapestFlightParams): Promise<Flight | null> {
  const response = await getTravelpayoutsPrices({ origin, destination, departureAt, currency });
  const cheapestTicket = response.data.reduce<TravelpayoutsFlight | null>((cheapest, ticket) => (!cheapest || ticket.price < cheapest.price ? ticket : cheapest), null);
  return cheapestTicket ? toFlight(cheapestTicket, response.currency?.toUpperCase() ?? currency) : null;
}