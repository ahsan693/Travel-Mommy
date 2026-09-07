import HotelsPage from "../components/hotels/page";
import { hotelsData } from "../../lib/data/hotelsData";

export default function HotelsRoute() {
	return <HotelsPage data={hotelsData} />;
}