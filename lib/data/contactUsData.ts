export interface ContactCard { title: string; description: string; email: string; icon: "mail" | "handshake" | "megaphone" }
export interface ContactFaq { question: string; answer: string }
export interface SocialLink { href: string; label: string; bgColor: string; icon: "instagram" | "facebook" | "tiktok" | "youtube" }
export interface ContactUsPageData { hero: { title: string; description: string }; form: { title: string; description: string; successTitle: string; successDescription: string; nameLabel: string; namePlaceholder: string; emailLabel: string; emailPlaceholder: string; subjectLabel: string; subjectPlaceholder: string; messageLabel: string; messagePlaceholder: string; submitLabel: string }; faq: { title: string; description: string }; followTitle: string; contactCards: ContactCard[]; faqs: ContactFaq[]; socialLinks: SocialLink[] }
export const contactUsData: ContactUsPageData = {
  hero: { title: "Contact TravelMommy", description: "Have a question about TravelMommy? We're here to help. Whether you need assistance using our platform, have feedback, or want to discuss a partnership, we'd love to hear from you." },
  form: { title: "Before You Get in Touch", description: "TravelMommy helps you compare flights and hotels from trusted travel partners. We don't process bookings or payments directly. If you've already made a booking, please contact the booking provider shown in your confirmation email for assistance with cancellations, refunds or booking changes.", successTitle: "Message sent!", successDescription: "Thanks for reaching out. Our team will get back to you shortly.", nameLabel: "Full Name", namePlaceholder: "Jane Smith", emailLabel: "Email Address", emailPlaceholder: "jane@travel.com", subjectLabel: "Subject", subjectPlaceholder: "General Enquiry", messageLabel: "Message", messagePlaceholder: "How can we help you today?", submitLabel: "Send Message" },
  faq: { title: "Frequently Asked Questions", description: "Got questions? We've got answers." },
  followTitle: "Follow Us",
  contactCards: [
    { icon: "mail", title: "General Enquiries", description: "Questions about using TravelMommy or general support.", email: "support@travelmommy.com" },
    { icon: "handshake", title: "Business & Partnerships", description: "Affiliate partnerships, collaborations and business enquiries.", email: "partners@travelmommy.com" },
    { icon: "megaphone", title: "Media & Press", description: "Press enquiries and media requests.", email: "press@travelmommy.com" },
  ],
  faqs: [
    { question: "Can I change my booking?", answer: "No. Bookings are completed through our travel partners. Please contact the provider you booked with directly." },
    { question: "Does TravelMommy charge booking fees?", answer: "No. TravelMommy is free to use, and we don't add extra booking fees." },
    { question: "I found an incorrect price.", answer: "Travel prices change frequently. If you notice an issue, let us know and we'll investigate." },
    { question: "Can I advertise on TravelMommy?", answer: "Yes. Please contact our partnerships team for collaboration opportunities." },
  ],
  socialLinks: [
    { icon: "instagram", href: "#", label: "Instagram", bgColor: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500" },
    { icon: "facebook", href: "#", label: "Facebook", bgColor: "bg-[#1877F2]" },
    { icon: "tiktok", href: "#", label: "TikTok", bgColor: "bg-[#000000]" },
    { icon: "youtube", href: "#", label: "YouTube", bgColor: "bg-[#FF0000]" },
  ],
};