export interface ContactCard { title: string; description: string; email: string; icon: "mail" | "handshake" | "megaphone" }
export interface ContactFaq { question: string; answer: string }
export interface SocialLink { href: string; label: string; bgColor: string; icon: "instagram" | "facebook" | "tiktok" | "youtube" }
export interface ContactUsPageData { hero: { title: string; description: string }; form: { title: string; description: string; successTitle: string; successDescription: string; nameLabel: string; namePlaceholder: string; emailLabel: string; emailPlaceholder: string; subjectLabel: string; subjectPlaceholder: string; messageLabel: string; messagePlaceholder: string; submitLabel: string; submitDisclaimer: string }; faq: { title: string; description: string }; followTitle: string; contactCards: ContactCard[]; faqs: ContactFaq[]; socialLinks: SocialLink[] }

export const contactUsData: ContactUsPageData = {
  hero: { 
    title: "Contact TravelMommy", 
    description: "Have a question, partnership enquiry, press request, or feedback? Get in touch with the TravelMommy team." 
  },
  form: { 
    title: "Before You Get in Touch", 
    description: "TravelMommy compares flight options but does not issue tickets or manage bookings. If your question is about a booking, cancellation, refund, baggage, or check-in, please contact the airline or travel provider you booked with.", 
    successTitle: "Message sent!", 
    successDescription: "Thanks for reaching out. Our team will get back to you shortly.", 
    nameLabel: "Full Name", 
    namePlaceholder: "Jane Smith", 
    emailLabel: "Email Address", 
    emailPlaceholder: "jane@travel.com", 
    subjectLabel: "Subject", 
    subjectPlaceholder: "General Enquiry", 
    messageLabel: "Message", 
    messagePlaceholder: "How can we help you today?", 
    submitLabel: "Send Enquiry",
    submitDisclaimer: "We usually respond within 2–3 business days."
  },
  faq: { 
    title: "Frequently Asked Questions", 
    description: "Got questions? We've got answers." 
  },
  followTitle: "Follow Us",
  contactCards: [
    { icon: "mail", title: "General Enquiries", description: "For questions about TravelMommy, feedback, or general support.", email: "support@travelmommy.com" },
    { icon: "handshake", title: "Business & Partnerships", description: "For affiliate, advertising, collaboration, and partnership enquiries.", email: "partners@travelmommy.com" },
    { icon: "megaphone", title: "Media & Press", description: "For press, interviews, media requests, and brand enquiries.", email: "press@travelmommy.com" },
  ],
  faqs: [
    { question: "Can TravelMommy charge or cancel my booking?", answer: "No. TravelMommy does not manage bookings. Please contact the airline or travel provider you booked with for changes, cancellations, refunds, baggage, or check-in support." },
    { question: "Does TravelMommy charge booking fees?", answer: "TravelMommy does not sell flight tickets or charge a TravelMommy booking fee. Any charges from the airline or travel provider are shown by that provider." },
    { question: "I found incorrect information on TravelMommy. What should I do?", answer: "Please use the contact form and select \"Feedback\" or \"Technical issue.\" Include the page URL and a short description so we can review it." },
    { question: "Can I advertise or partner with TravelMommy?", answer: "Yes. Please select \"Partnership\" in the contact form or contact our partnerships team." },
    { question: "How do I contact TravelMommy about media or press?", answer: "Use the Media & Press contact option or select \"Press/Media\" in the form." },
  ],
  socialLinks: [
    { icon: "facebook", href: "#", label: "Facebook", bgColor: "" },
    { icon: "instagram", href: "#", label: "Instagram", bgColor: "" },
    { icon: "youtube", href: "#", label: "YouTube", bgColor: "" },
    { icon: "tiktok", href: "#", label: "TikTok", bgColor: "" },
  ],
};