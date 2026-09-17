import RoutesPage from "../components/routes/routes";
import { routesData } from "../../lib/data/routesData";

export default function RoutesRoute() {
	return <RoutesPage data={routesData} />;
}
