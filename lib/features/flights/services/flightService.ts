import { flightDestinations, DISCOVERY_CURRENCY, DUBLIN_ORIGIN } from "../data/destinations";
import { findCheapestFlight } from "../dao/flightDao";
import type { FlightAvailability } from "../types/flight";
import { getDiscoveryDepartureMonth } from "../utils/flightUtils";

export async function getDiscoveryFlights(): Promise<FlightAvailability[]> {
  const departureAt = getDiscoveryDepartureMonth();
  const results = await Promise.allSettled(flightDestinations.map(async ({ airport }) => {
    const flight = await findCheapestFlight({ origin: DUBLIN_ORIGIN, destination: airport, departureAt, currency: DISCOVERY_CURRENCY });
    return flight ? ({ destination: airport, status: "available", flight } as const) : ({ destination: airport, status: "unavailable" } as const);
  }));

  return results.map((result, index) => result.status === "fulfilled" ? result.value : { destination: flightDestinations[index].airport, status: "error" });
}