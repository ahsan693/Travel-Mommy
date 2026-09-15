"use client";

import { FlightCard } from "./FlightCard";
import { flightDestinations } from "../data/destinations";
import type { FlightAvailability } from "../types/flight";

type FlightListProps = {
  flights: FlightAvailability[];
  cta: string;
  onViewFlights: (result: FlightAvailability) => void;
};

export function FlightList({ flights, cta, onViewFlights }: FlightListProps) {
  const flightsByDestination = new Map(flights.map((result) => [result.destination, result]));

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {flightDestinations.map((destination) => (
        <FlightCard key={destination.airport} destination={destination} result={flightsByDestination.get(destination.airport)} cta={cta} onViewFlights={onViewFlights} />
      ))}
    </div>
  );
}