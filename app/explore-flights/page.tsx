import { Metadata } from "next";
import ExploreFlightsClient from "../components/Explore-flight/page";

export const metadata: Metadata = {
  title: "Explore Flights by Region | TravelMommy",
  description: "Browse regions, choose a country, and discover amazing flight deals from top airlines around the world.",
};

export default function ExploreFlightsRoute() {
  return <ExploreFlightsClient />;
}