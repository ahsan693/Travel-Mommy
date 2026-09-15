import { NextResponse } from "next/server";

import { getDiscoveryFlights } from "@/lib/features/flights/services/flightService";
import type { FlightsApiResponse } from "@/lib/features/flights/types/flight";

export async function GET(): Promise<NextResponse<FlightsApiResponse | { error: string }>> {
  if (!process.env.TRAVELPAYOUTS_TOKEN) {
    return NextResponse.json({ error: "Flight prices are not configured." }, { status: 503 });
  }

  try {
    const results = await getDiscoveryFlights();
    return NextResponse.json({ results }, {
      headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
    });
  } catch {
    return NextResponse.json({ error: "Unable to load flight prices." }, { status: 502 });
  }
}
