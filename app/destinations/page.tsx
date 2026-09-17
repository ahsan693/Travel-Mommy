import DestinationsPage from "../components/destinations/destinations";
import { destinationsData } from "../../lib/data/destinationsData";

export default function DestinationsRoute() {
	return <DestinationsPage data={destinationsData} />;
}
