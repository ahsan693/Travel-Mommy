import "server-only";

import type { TravelpayoutsPricesResponse } from "../types/flight";

const API_URL = "https://api.travelpayouts.com/aviasales/v3/prices_for_dates";

export class TravelpayoutsHttpError extends Error {}

type GetPricesParams = { origin: string; destination: string; departureAt: string; currency: string };

export async function getTravelpayoutsPrices({ origin, destination, departureAt, currency }: GetPricesParams): Promise<TravelpayoutsPricesResponse> {
  const token = process.env.TRAVELPAYOUTS_TOKEN;
  if (!token) throw new TravelpayoutsHttpError("Travelpayouts is not configured.");

  const searchParams = new URLSearchParams({ origin, destination, departure_at: departureAt, currency, one_way: "true", direct: "false", sorting: "price", limit: "30", page: "1" });
  const response = await fetch(`${API_URL}?${searchParams}`, { headers: { "X-Access-Token": token }, next: { revalidate: 3600 } });
  if (!response.ok) throw new TravelpayoutsHttpError(`Travelpayouts request failed with status ${response.status}.`);

  const payload = (await response.json()) as TravelpayoutsPricesResponse;
  if (!payload.success) throw new TravelpayoutsHttpError(payload.error ?? "Travelpayouts could not return flight prices.");
  return payload;
}