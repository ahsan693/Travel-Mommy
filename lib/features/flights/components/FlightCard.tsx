"use client";

import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";

import { formatAirlineName, formatDuration, formatPrice, formatStops } from "../utils/flightUtils";
import type { FlightAvailability, FlightDestination } from "../types/flight";

type FlightCardProps = {
  destination: FlightDestination;
  result?: FlightAvailability;
  cta: string;
  onViewFlights: (result: FlightAvailability) => void;
};

export function FlightCard({ destination, result, cta, onViewFlights }: FlightCardProps) {
  const flight = result?.status === "available" ? result.flight : null;
  const isLoading = !result;
  const isError = result?.status === "error";

  return (
    <article className="group flex h-[364px] flex-col overflow-hidden rounded-3xl border border-[#E6E6E6] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-[140px] shrink-0">
        <Image src={destination.image} alt={destination.city} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="flex w-full flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-2xl">{destination.city}</h3>
          <p className="text-sm text-[#7D7D7D]">DUB -&gt; {destination.airport}</p>
        </div>
        <div className="flex h-6 w-full items-center justify-between">
          <p className="text-2xl">{flight ? formatPrice(flight.price, flight.currency) : isLoading ? "..." : "Price unavailable"}</p>
          {flight && (
            <div className="flex items-center gap-1 rounded-md border border-[#E6E6E6] bg-[#F9FBF5] px-2 py-1">
              <Image src="/Homepage/Section 3/Icon/Airline Logo.png" alt={`${formatAirlineName(flight.airline)} logo`} width={16} height={16} className="object-contain" />
              <span className="text-xs font-medium">{formatAirlineName(flight.airline)}</span>
            </div>
          )}
        </div>
        <p className="flex h-5 items-center gap-1.5 text-sm text-[#7D7D7D]">
          <Clock size={14} />
          {flight ? <>{formatStops(flight.stops)} &bull; {formatDuration(flight.durationMinutes)}</> : isLoading ? "Finding cheapest flights..." : isError ? "Unable to load flight prices." : "No flights found."}
        </p>
      </div>
      <div className="mt-auto px-5 pb-5">
        <button className="h-12 w-full rounded-xl border border-[#E6E6E6] text-sm hover:bg-[#FDDB32] disabled:cursor-not-allowed disabled:opacity-50" disabled={!flight?.ticketLink} onClick={() => result && onViewFlights(result)}>
          {cta} <ArrowUpRight className="ml-1 inline" size={14} />
        </button>
      </div>
    </article>
  );
}