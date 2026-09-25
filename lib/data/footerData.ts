export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
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
    { 
      title: "Flights", 
      links: [
        { label: "Search Flights", href: "/" },
        { label: "Cheap Flights from Dublin", href: "/routes" }
      ] 
    },
    { 
      title: "Explore", 
      links: [
        { label: "Destinations", href: "/travel" },
        { label: "Travel Guides", href: "/blog" }
      ] 
    },
    { 
      title: "TravelMommy", 
      links: [
        { label: "How It Works", href: "/contactus" },
        { label: "Help Centre", href: "/contactus" },
        { label: "Contact", href: "/contactus" }
      ] 
    },
    { 
      title: "Legal", 
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
        { label: "Accessibility", href: "/accessibility" }
      ] 
    },
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