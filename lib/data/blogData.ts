export interface Breadcrumb {
  label: string;
  href: string;
}

export interface BlogHeroData {
  image: string;
  imageAlt: string;
  breadcrumbs: Breadcrumb[];
  pill: string;
  title: string;
  subtitle: string;
}

export interface RegionFilterData {
  name: string;
  image: string;
}

export interface RegionFilterSectionData {
  eyebrow: string;
  countLabel: string;
  regions: RegionFilterData[];
}

export interface AuthorData {
  name: string;
  date: string;
  avatar: string;
}

export interface FeaturedGuideData {
  label: string;
  country: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
  author: AuthorData;
  buttonText: string;
}

export interface IndependentExpertFeature {
  icon: string;
  title: string;
  description: string;
}

export interface IndependentExpertData {
  pill: string;
  title: string;
  description: string;
  features: IndependentExpertFeature[];
}

export interface DestinationGuideCard {
  country: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
  exploreText: string;
  href: string;
}

export interface AllDestinationsData {
  title: string;
  guides: DestinationGuideCard[];
}

export interface BlogNewsletterData {
  title: string;
  subtitle: string;
  placeholder: string;
  buttonText: string;
  footerText: string;
}

export interface BlogPageData {
  hero: BlogHeroData;
  categories: string[];
  regionFilters: RegionFilterSectionData;
  featuredGuide: FeaturedGuideData;
  independentExperts: IndependentExpertData;
  allDestinations: AllDestinationsData;
  newsletter: BlogNewsletterData;
}

export const blogData: BlogPageData = {
  hero: {
    // Mapped to 01
    image: "/09. Travel Guide Hompage/images/guide homepage images-01.png", 
    imageAlt: "Hot air balloons over Cappadocia, Turkey",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Travel Guides", href: "/blog" }
    ],
    pill: "TRAVEL MOMMY CHRONICLES",
    title: "Explore Our Travel Guides",
    subtitle: "Discover detailed month-by-month weather, hidden routes, budget travel options, and planning checklists by seasoned local experts."
  },
  categories: [
    "All Guides",
    "Asia",
    "Europe",
    "North America",
    "South America",
    "Africa",
    "Polar Regions"
  ],
  regionFilters: {
    eyebrow: "FILTER BY REGION",
    countLabel: "9 global regions available",
    regions: [
      { name: "Europe", image: "/09. Travel Guide Hompage/images/guide homepage images-02.png" },
      { name: "Asia", image: "/09. Travel Guide Hompage/images/guide homepage images-03.png" },
      { name: "North Amer...", image: "/09. Travel Guide Hompage/images/guide homepage images-04.png" },
      { name: "South Amer...", image: "/09. Travel Guide Hompage/images/guide homepage images-05.png" },
      { name: "Central Am...", image: "/09. Travel Guide Hompage/images/guide homepage images-06.png" },
      { name: "Caribbean", image: "/09. Travel Guide Hompage/images/guide homepage images-07.png" },
      { name: "Africa", image: "/09. Travel Guide Hompage/images/guide homepage images-08.png" },
      { name: "Middle East", image: "/09. Travel Guide Hompage/images/guide homepage images-09.png" },
      { name: "Oceania", image: "/09. Travel Guide Hompage/images/guide homepage images-10.png" }
    ]
  },
  featuredGuide: {
    label: "FEATURED TRAVEL GUIDE",
    country: "INDONESIA",
    readTime: "8 Min Read",
    title: "Best Time to Visit Bali: A Complete Month-by-Month Guide",
    description: "Discover Bali's weather, seasons, crowds, and prices to help you choose the perfect time for your tropical getaway. From Ubud's emerald rice fields to the beaches of Bukit.",
    image: "/09. Travel Guide Hompage/images/guide homepage images-11.png",
    author: {
      name: "Sarah Jenkins",
      date: "Updated June 12, 2026",
      avatar: "/09. Travel Guide Hompage/images/guide homepage images-12.png"
    },
    buttonText: "Read Guide"
  },
  independentExperts: {
    pill: "AWARDS & ACCOLADES",
    title: "Curated by Independent Experts",
    description: "Our month-by-month itineraries and climate breakdowns are updated continuously by real practitioners on the ground. We accept no paid placements or sponsored listings, ensuring our advice remains fully unbiased and trustworthy.",
    features: [
      {
        icon: "MapPin",
        title: "Verified Locations",
        description: "Every spot in our guides has been verified in person within the last 12 months."
      },
      {
        icon: "MessageSquare",
        title: "24/7 Expert Tips",
        description: "In-app travel suggestions backed by our digital AI travel concierge."
      }
    ]
  },
  allDestinations: {
    title: "All Destinations",
    guides: [
      {
        country: "JAPAN",
        readTime: "6 Min Read",
        title: "Slowing Down in Tokyo: Finding Quiet Temples & Tea Houses",
        description: "A mindful guide to Tokyo's serene side, highlighting tucked-away neighborhood gardens, traditional kissaten, and ancient shrines.",
        image: "/09. Travel Guide Hompage/images/guide homepage images-13.png",
        exploreText: "Explore Tokyo",
        href: "#"
      },
      {
        country: "FRANCE",
        readTime: "10 Min Read",
        title: "Paris on Foot: A Local's Guide to Secret Arrondissements",
        description: "Skip the queues and walk through winding cobblestone passages, artisan bakeries, and romantic quiet plazas in the 10th and 11th.",
        image: "/09. Travel Guide Hompage/images/guide homepage images-14.png",
        exploreText: "Explore Paris",
        href: "#"
      },
      {
        country: "GREECE",
        readTime: "7 Min Read",
        title: "Beyond the Caldera: Exploring Santorini's Hidden Villages",
        description: "Escape the crowds of Oia to discover Pyrgos and Emporio—where white-washed windmills meet authentic, quiet Greek life.",
        image: "/09. Travel Guide Hompage/images/guide homepage images-15.png",
        exploreText: "Explore Santorini",
        href: "#"
      },
      {
        country: "MOROCCO",
        readTime: "9 Min Read",
        title: "In Search of Sanctuary: A Guide to Marrakech's Hidden Riads",
        description: "Step through unmarked wooden doors into interior courtyards of orange trees, emerald green zellige tilework, and absolute silence.",
        image: "/09. Travel Guide Hompage/images/guide homepage images-16.png",
        exploreText: "Explore Marrakech",
        href: "#"
      },
      {
        country: "ARGENTINA",
        readTime: "12 Min Read",
        title: "Patagonia Borderlands: Treks Across Lakes and Glaciers",
        description: "An adventure guide to the ultimate edge of the earth. Route planning, gear lists, and weather survival guides for the Fitz Roy trek.",
        image: "/09. Travel Guide Hompage/images/guide homepage images-17.png",
        exploreText: "Explore Patagonia",
        href: "#"
      },
      {
        country: "ICELAND",
        readTime: "11 Min Read",
        title: "Icelandic Ring Road: Ultimate Winter Self-Drive Guide",
        description: "How to navigate volcanic basalt columns, hidden hot pools, and cascading frozen waterfalls under the dancing green northern lights.",
        image: "/09. Travel Guide Hompage/images/guide homepage images-18.png",
        exploreText: "Explore Iceland",
        href: "#"
      },
      {
        country: "UNITED STATES",
        readTime: "5 Min Read",
        title: "Autumn in New York: The Best Parks, Skylines & Galleries",
        description: "Witness the brownstones of Brooklyn and Central Park paths turn amber, paired with our curated checklist of new independent art galleries.",
        image: "/09. Travel Guide Hompage/images/guide homepage images-18.png", // Reusing 18 as only 18 images exist in the folder
        exploreText: "Explore New York",
        href: "#"
      }
    ]
  },
  newsletter: {
    title: "Get fresh travel guides in your inbox",
    subtitle: "Subscribe to receive our latest month-by-month planning resources, seasonal crowd alerts, and exclusive cheap flight notifications.",
    placeholder: "Enter your email address...",
    buttonText: "Subscribe Now",
    footerText: "No spam, unsubscribe anytime."
  }
};