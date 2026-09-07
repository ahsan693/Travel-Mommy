import HomePage from "./components/home/page";
import { homeData } from "../lib/data/homeData";

export default function HomeRoute() {
	return <HomePage data={homeData} />;
}