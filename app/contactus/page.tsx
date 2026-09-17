import ContactUsPage from "../components/contactus/contactus";
import { contactUsData } from "../../lib/data/contactUsData";

export default function ContactUsRoute() {
	return <ContactUsPage data={contactUsData} />;
}
