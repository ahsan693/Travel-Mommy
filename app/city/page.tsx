import CityPage from "../components/city/page";
import { cityData } from "../../lib/data/cityData";

export default function CityRoute() {
	return <CityPage data={cityData} />;
}