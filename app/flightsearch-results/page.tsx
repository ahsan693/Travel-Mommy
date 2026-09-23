import SearchPage from "../components/flight-search-results/search";
import { searchData } from "../../lib/data/searchData";

export default function SearchRoute() {
	return <SearchPage data={searchData} />;
}
