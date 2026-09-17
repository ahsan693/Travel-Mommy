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

export interface FooterLocalePill {
  label: string;
  arrowSrc: string;
}

export interface FooterData {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  locales: FooterLocalePill[];
  description: string;
  columns: FooterColumn[];
  mobileOrder: string[];
  socialNavAriaLabel: string;
  socialLinks: FooterSocialLink[];
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
  locales: [
    { label: "IE Ireland", arrowSrc: "/Homepage/Section 7/KQY0VNx64.png" },
    { label: "English (UK)", arrowSrc: "/Homepage/Section 7/KQY0VNx64.png" },
    { label: "EUR €", arrowSrc: "/Homepage/Section 7/KQY0VNx64.png" }
  ],
  description: "Compare flight prices from airlines and travel providers in one place. Complete your booking with the provider you choose.",
  columns: [
    { title: "Flights", links: ["Search Flights", "Cheap Flights from Dublin"] },
    { title: "Explore", links: ["Destinations", "Travel Guides"] },
    { title: "TravelMommy", links: ["How It Works", "Help Centre", "Contact"] },
    { title: "Legal", links: ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Affiliate Disclosure", "Accessibility"] },
  ],
  mobileOrder: ["order-1", "order-3", "order-2", "order-4"],
  socialNavAriaLabel: "Social links",
  socialLinks: [
    { alt: "Instagram", icon: "instagram", href: "#" },
    { alt: "Facebook", icon: "facebook", href: "#" },
    { alt: "TikTok", icon: "tiktok", href: "#" },
  ],
  copyright: "© 2026 TravelMommy. All rights reserved.",
  disclaimer: "TravelMommy is a flight comparison platform. Bookings are completed with the selected provider.",
};
