export function formatPrice(price: number, currency: string): string {
  return new Intl.NumberFormat("en-IE", { style: "currency", currency, maximumFractionDigits: 0 }).format(price);
}

export function formatDuration(durationMinutes: number): string {
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;
  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
}

export function formatStops(stops: number): string {
  return stops === 0 ? "Direct" : `${stops} ${stops === 1 ? "stop" : "stops"}`;
}

const airlineNames: Record<string, string> = { BA: "British Airways", EI: "Aer Lingus", EK: "Emirates", FR: "Ryanair", IB: "Iberia" };

export function formatAirlineName(airlineCode: string): string {
  return airlineNames[airlineCode.toUpperCase()] ?? "Airline unavailable";
}

export function getDiscoveryDepartureMonth(): string {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date.toISOString().slice(0, 7);
}