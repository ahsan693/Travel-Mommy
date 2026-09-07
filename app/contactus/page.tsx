import ContactUsPage from "../components/contactus/page";
import { contactUsData } from "../../lib/data/contactUsData";

export default function ContactUsRoute() {
	return <ContactUsPage data={contactUsData} />;
}