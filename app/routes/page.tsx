import RoutesPage from "../components/routes/page";
import { routesData } from "../../lib/data/routesData";

export default function RoutesRoute() {
	return <RoutesPage data={routesData} />;
}