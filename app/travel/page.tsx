import TravelPage from "../components/travel/travel";
import { travelData } from "../../lib/data/travelData";

export default function TravelRoute() {
	return <TravelPage data={travelData} />;
}
