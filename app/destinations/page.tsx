import DestinationsPage from "../components/destinations/page";
import { destinationsData } from "../../lib/data/destinationsData";

export default function DestinationsRoute() {
	return <DestinationsPage data={destinationsData} />;
}