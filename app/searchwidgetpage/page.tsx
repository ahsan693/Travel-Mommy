import SearchPage from "../components/search/search";
import { searchData } from "../../lib/data/searchData";

export default function SearchRoute() {
	return <SearchPage data={searchData} />;
}
