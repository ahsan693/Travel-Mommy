export interface FooterColumn {
  title: string;
  links: string[];
}

export type FooterSocialIcon = "instagram" | "facebook" | "tiktok";

export interface FooterSocialLink {
  alt: string;
  icon: FooterSocialIcon;
  href: string;
}

export interface FooterData {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  locale: {
    iconSrc: string;
    label: string;
    arrowSrc: string;
  };
  description: string;
  columns: FooterColumn[];
  mobileOrder: string[];
  socialLinks: FooterSocialLink[];
  legalLinks: string[];
  copyright: string;
  disclaimer: string;
}

export const footerData: FooterData = {
  logo: {
    src: "/Homepage/Section 7/Vector-1.png",
    alt: "TravelMommy Logo",
    width: 203,
    height: 128,
  },
  locale: {
    iconSrc: "/Homepage/Section 7/Vector.png",
    label: "IE Ireland · English (UK) · EUR €",
    arrowSrc: "/Homepage/Section 7/KQY0VNx64.png",
  },
  description: "Compare flights, hotels and travel deals from trusted travel providers - all in one place.",
  columns: [
    { title: "Search", links: ["Cheap Flights to Dubai" , "Flights from Dublin", "Flights from London"] },
    { title: "Discover", links: ["Deals", "Destinations", "Airlines", "Airports"] },
    { title: "Discover", links: ["Trips", "Travel Guide", "Travel Tips", "FAQs"] },
    { title: "Company", links: ["About", "Contact", "Partners", "Help Centre"] },
  ],
  mobileOrder: ["order-1", "order-3", "order-2", "order-4"],
  socialLinks: [
    { alt: "Instagram", icon: "instagram", href: "#" },
    { alt: "Facebook", icon: "facebook", href: "#" },
    { alt: "TikTok", icon: "tiktok", href: "#" },
  ],
  legalLinks: ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Affiliate Disclosure", "Accessibility"],
  copyright: "© 2025 TravelMommy",
  disclaimer: "TravelMommy is a travel metasearch platform. We compare prices from airlines, hotels and travel providers. Bookings are completed directly with our travel partners.",
};
