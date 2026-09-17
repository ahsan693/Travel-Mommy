import HomePage from "./components/home/home";
import { homeData } from "../lib/data/homeData";

export default function HomeRoute() {
	return <HomePage data={homeData} />;
}
