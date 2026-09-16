export interface DestinationChip { name: string; region: string; img: string; swatch: string }
export interface FeaturedCountry { id?: string; name: string; desc: string; image: string; tags: string[]; flightsFrom: string; hotelsFrom: string; perk: string; rating: string; price: string; icon: string }
export interface DestinationFeature { icon: string; iconSrc: string; title: string; description: string }
export interface DestinationFaq { q: string; a: string }

export interface RegionCard {
  name: string;
  description: string;
  image: string;
  countries: string[];
  viewAllText: string;
}

export interface ExploreCtaCard {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
}

export interface DestinationsPageData {
  hero: {
    title: string;
    mobileTitle: string[];
    description: string;
    mobileDescription: string;
    image: string;
    imageAlt: string;
    prompt: string;
    popularLabel: string;
    initialRegion: string;
    emptyMessage: string;
  };
  regions: string[];
  countryChips: DestinationChip[];
  featuredCountries: FeaturedCountry[];
  exploreByRegion: {
    title: string;
    subtitle: string;
    regions: RegionCard[];
    ctaCard: ExploreCtaCard;
  };
  whyCompare: DestinationFeature[];
  faqs: DestinationFaq[];
  copy: {
    featuredTitle: string;
    featuredBadge: string;
    featuredCta: string;
    featuredPriceLabel: string;
    featuredPriceSuffix: string;
    flightsLabel: string;
    hotelsLabel: string;
    ratingSuffix: string;
    whyTitle: string;
    whyDescription: string;
    whyCta: string;
    faqTitle: string;
  };
}

export const destinationsData: DestinationsPageData = {
  hero: {
    title: "Discover Your Next Destination",
    mobileTitle: ["Discover", "Your Next", "Destination"],
    description: "Explore countries across Europe, Asia, the Americas, Africa and Oceania. Compare flights and hotels, explore travel guides, and plan your next adventure with TravelMommy.",
    mobileDescription: "Explore countries across Europe, Asia, the Americas, Africa and Oceania. Compare flights and hotels, and plan your next adventure.",
    image: "/Featured Countries/Section 1/Images/neom-wTmGtmGQCjQ-unsplash.jpg",
    imageAlt: "Desert canyon arch at sunset",
    prompt: "Browse by Region",
    popularLabel: "Popular Destinations",
    initialRegion: "Europe",
    emptyMessage: "No destinations currently listed for this region.",
  },
  regions: ["Europe", "Asia", "North America", "Middle East", "Africa", "Oceania"],
  countryChips: [
    { name: "Greece", region: "Europe", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&w=100&q=80", swatch: "#FBBDEA" },
    { name: "Italy", region: "Europe", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&w=100&q=80", swatch: "#FFC796" },
    { name: "Spain", region: "Europe", img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&w=100&q=80", swatch: "#FFED91" },
    { name: "France", region: "Europe", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&w=100&q=80" , swatch: "#D8E9FF" },
    { name: "Portugal", region: "Europe", img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&w=100&q=80", swatch: "#D8E9FF" },
    { name: "Croatia", region: "Europe", img: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&w=100&q=80", swatch: "#D8E9FF" },
    { name: "Japan", region: "Asia", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&w=100&q=80", swatch: "#D8E9FF" },
    { name: "Thailand", region: "Asia", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&w=100&q=80", swatch: "#FFED91" },
    { name: "Indonesia", region: "Asia", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&w=100&q=80", swatch: "#FFC796" },
    { name: "Vietnam", region: "Asia", img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&w=100&q=80", swatch: "#FBBDEA" },
    { name: "USA", region: "North America", img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&w=100&q=80", swatch: "#D8E9FF" },
    { name: "Canada", region: "North America", img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&w=100&q=80", swatch: "#FBBDEA" },
    { name: "Mexico", region: "North America", img: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&w=100&q=80", swatch: "#FFED91" },
    { name: "UAE", region: "Middle East", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&w=100&q=80", swatch: "#FFC796" },
    { name: "Turkey", region: "Middle East", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&w=100&q=80", swatch: "#FBBDEA" },
    { name: "Morocco", region: "Africa", img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&w=100&q=80", swatch: "#FFC796" },
    { name: "South Africa", region: "Africa", img: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&w=100&q=80", swatch: "#FFED91" },
    { name: "Australia", region: "Oceania", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&w=100&q=80", swatch: "#D8E9FF" },
    { name: "New Zealand", region: "Oceania", img: "https://images.unsplash.com/photo-1556878516-61356c874f03?auto=format&w=100&q=80", swatch: "#FBBDEA" },
  ],
  featuredCountries: [
    { 
      id: "greece",
      name: "Greece",
      desc: "Beautiful islands, ancient history",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&w=800&q=80", 
      tags: ["History", "Beach"], 
      flightsFrom: "€120",
      hotelsFrom: "€180",
      perk: "Mediterranean beaches", 
      rating: "4.8", 
      price: "€49",
      icon: "/Featured Countries/Section 1/Icon/Vector.png"
    }, 
    { 
      id: "spain",
      name: "Spain",
      desc: "Sun-soaked beaches, vibrant culture",
      image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&w=800&q=80", 
      tags: ["Beaches", "Tapas"], 
      flightsFrom: "€120",
      hotelsFrom: "€180",
      perk: "Incredible tapas & nightlife", 
      rating: "4.7", 
      price: "€39",
      icon: "/Featured Countries/Section 1/Icon/Vector.png"
    }, 
    { 
      id: "italy",
      name: "Italy",
      desc: "Ancient ruins, rolling vineyards",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&w=800&q=80", 
      tags: ["History", "Wine"], 
      flightsFrom: "€120",
      hotelsFrom: "€180",
      perk: "World-class cuisine & art", 
      rating: "4.9", 
      price: "€55",
      icon: "/Featured Countries/Section 1/Icon/Vector.png"
    }
  ],
  exploreByRegion: {
    title: "Explore Countries by Region",
    subtitle: "Browse destination guides by region and discover amazing places around the world.",
    regions: [
      {
        name: "Europe",
        description: "Historic cities, stunning coastlines and diverse cultures.",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&w=150&q=80",
        countries: ["Greece", "Spain", "Italy", "France", "Portugal"],
        viewAllText: "View all Europe"
      },
      {
        name: "Asia",
        description: "Incredible destinations, rich cultures and unforgettable experiences.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&w=150&q=80",
        countries: ["Japan", "Thailand", "Indonesia", "Vietnam", "Malaysia"],
        viewAllText: "View all Asia"
      },
      {
        name: "North America",
        description: "Vibrant cities, natural wonders and endless adventures.",
        image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&w=150&q=80",
        countries: ["United States", "Canada", "Mexico", "Costa Rica", "Dominican Republic"],
        viewAllText: "View all North America"
      },
      {
        name: "Africa",
        description: "Extraordinary wildlife, stunning landscapes and vibrant cultures.",
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&w=150&q=80",
        countries: ["South Africa", "Morocco", "Egypt", "Kenya", "Tanzania"],
        viewAllText: "View all Africa"
      },
      {
        name: "Middle East",
        description: "Modern cities, rich history and unique experiences.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&w=150&q=80",
        countries: ["UAE", "Qatar", "Saudi Arabia", "Jordan", "Oman"],
        viewAllText: "View all Middle East"
      },
      {
        name: "Caribbean",
        description: "Beautiful beaches, turquoise waters and a laid-back atmosphere.",
        image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&w=150&q=80",
        countries: ["Dominican Republic", "Jamaica", "Bahamas", "Barbados", "Cuba"],
        viewAllText: "View all Caribbean"
      },
      {
        name: "South America",
        description: "Breathtaking landscapes, ancient history and vibrant cities.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&w=150&q=80",
        countries: ["Brazil", "Argentina", "Peru", "Chile", "Colombia"],
        viewAllText: "View all South America"
      },
      {
        name: "Oceania",
        description: "Stunning islands, unique wildlife and incredible natural beauty.",
        image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&w=150&q=80",
        countries: ["Australia", "New Zealand", "Fiji", "Cook Islands", "Samoa"],
        viewAllText: "View all Oceania"
      }
    ],
    ctaCard: {
      eyebrow: "READY TO EXPLORE?",
      title: "Find Your Next\nDestination",
      description: "Discover amazing countries, compare flight options and get inspired for your next trip with TravelMommy.",
      buttonText: "Explore Destinations"
    }
  },
  whyCompare: [
    { icon: "/Featured Countries/Section 3/Icons/Vector.png", iconSrc: "/Featured Countries/Section 3/Icons/Vector.png", title: "Compare Prices", description: "Compare flights and hotels from hundreds of trusted travel providers." },
    { icon: "/Featured Countries/Section 3/Icons/Vector-1.png", iconSrc: "/Featured Countries/Section 3/Icons/Vector-1.png", title: "Trusted Partners", description: "Book securely through leading airlines and hotel booking platforms." }, 
    { icon: "/Featured Countries/Section 3/Icons/Vector-2.png", iconSrc: "/Featured Countries/Section 3/Icons/Vector-2.png", title: "Travel Inspiration", description: "Discover destinations, travel guides and tips to help plan your next adventure." }
  ],
  faqs: [
    { 
      q: "How can I browse destinations on TravelMommy?", 
      a: "You can explore countries by region and open a country guide to see useful travel information, popular places to visit, flight options, and planning tips." 
    },
    { 
      q: "Does TravelMommy have a page for every country?", 
      a: "Not yet. We are adding country guides gradually, starting with popular destinations and expanding the collection over time." 
    },
    { 
      q: "Can I compare flights to each country?", 
      a: "Yes. Where flight data is available, country pages can show flight options and links to compare fares from supported departure airports." 
    },
    { 
      q: "What information is included in a country guide?", 
      a: "Country guides can include the best time to visit, weather and seasonal information, popular destinations, airports, flight options, things to do, and practical travel information." 
    },
    { 
      q: "Are the flight prices shown on country pages guaranteed?", 
      a: "No. Flight prices can change quickly based on availability, dates, airlines, and travel providers. The final price is confirmed by the provider when you continue to book." 
    }
  ],
  copy: {
    featuredTitle: "Featured Countries",
    featuredBadge: "Popular",
    featuredCta: "Explore →",
    featuredPriceLabel: "Explore",
    featuredPriceSuffix: "/ flight",
    flightsLabel: "Flights from",
    hotelsLabel: "Hotels from",
    ratingSuffix: "/5",
    whyTitle: "Why Plan Your Trip with TravelMommy?",
    whyDescription: "Search and compare cheap flights from multiple airlines and trusted booking partners to find the best fare for your trip.",
    whyCta: "Explore tours",
    faqTitle: "Frequently Asked Questions",
  },
};