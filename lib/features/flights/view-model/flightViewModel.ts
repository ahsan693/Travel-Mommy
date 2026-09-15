"use client";

import { useEffect, useState } from "react";

import { flightDestinations } from "../data/destinations";
import type { FlightAvailability, FlightsApiResponse } from "../types/flight";

export function useFlightViewModel() {
  const [flights, setFlights] = useState<FlightAvailability[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadFlights() {
      try {
        const response = await fetch("/api/flights", { signal: controller.signal });
        if (!response.ok) throw new Error("Unable to load flight prices.");
        const payload = (await response.json()) as FlightsApiResponse;
        setFlights(payload.results);
      } catch {
        if (!controller.signal.aborted) {
          setError("Unable to load flight prices.");
          setFlights(flightDestinations.map(({ airport }) => ({ destination: airport, status: "error" })));
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void loadFlights();
    return () => controller.abort();
  }, []);

  return { flights, loading, error };
}