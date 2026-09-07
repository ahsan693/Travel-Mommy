export interface HeaderNavItem {
  label: string;
  href: string;
}

export interface HeaderData {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  navigation: HeaderNavItem[];
  search: HeaderNavItem & {
    iconSrc: string;
    desktopIconSize: number;
    mobileIconSize: number;
  };
}

export const headerData: HeaderData = {
  logo: {
    src: "/Homepage/Section 1/Header Images/navbarlogo.png",
    alt: "TravelMommy",
    width: 72,
    height: 30,
  },
  navigation: [
    { label: "Flights", href: "/flight" },
    { label: "Hotels", href: "/hotels" },
    { label: "Destinations", href: "/destinations" },
    { label: "Travel", href: "/travel" },
  ],
  search: {
    label: "Search Deals",
    href: "/searchwidgetpage",
    iconSrc: "/Homepage/Section 1/Header Icons/Icons/Component 1.png",
    desktopIconSize: 14,
    mobileIconSize: 18,
  },
};
