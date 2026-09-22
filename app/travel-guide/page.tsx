import TravelGuideDetail from "../components/travel-guide/travel-guide";
import { guideData } from "../../lib/data/travel-guide";

export const metadata = {
  title: "Travel Guide | TravelMommy",
  description: "Best time to visit Bali and complete travel guide.",
};

export default function TravelGuidePage() {
  return (
    <TravelGuideDetail data={guideData} />
  );
}