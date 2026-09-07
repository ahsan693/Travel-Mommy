import TravelPage from "../components/travel/page";
import { travelData } from "../../lib/data/travelData";

export default function TravelRoute() {
	return <TravelPage data={travelData} />;
}