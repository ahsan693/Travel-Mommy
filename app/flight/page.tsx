import FlightPage from "../components/flight/page";
import { flightData } from "../../lib/data/flightData";

export default function FlightRoute() {
	return <FlightPage data={flightData} />;
}