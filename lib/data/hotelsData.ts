export interface Hotel { name: string; location: string; rating: string; maxRating: string; price: string; unit: string; tags: string[]; checkin: string; checkout: string; image: string; tagColors: { bg: string; border: string; text: string } }
export interface HotelDestination { city: string; image: string }
export interface HotelFeature { iconSrc: string; title: string; description: string }
export interface HotelBrand { name: string; logo: string }
export interface HotelSearch { city: string; desc: string; price: string; rating: string; hotelCount: string; image: string }
export interface HotelFaq { question: string; answer: string }
export interface HotelsPageData {
  hero: { title: string; description: string; image: string; imageAlt: string };
  hotelFilters: string[]; popularHotels: Hotel[]; hotelDestinations: HotelDestination[]; whyCompareFeatures: HotelFeature[]; hotelBrands: HotelBrand[]; popularSearches: HotelSearch[]; faqs: HotelFaq[];
  copy: { searchButton: string; newsletterTitle: string; newsletterDescription: string; newsletterPlaceholder: string; newsletterCta: string };
}

export const hotelsData: HotelsPageData = {
  hero: { title: "Compare Hotel Prices from Hundreds of Booking Sites", description: "Compare hotel prices from trusted booking partners and find the right stay for your trip.", image: "/Hotels Page/Section 1/Images/hero.png", imageAlt: "Sunset Palm Trees Hero Background" },
  hotelFilters: ["All", "★★★★★ 5-Star", "★★★★ 4-Star", "Budget", "Family Friendly", "Luxury", "Business", "Boutique", "Beach Resorts", "Pet Friendly"],
  popularHotels: [
    { name: "The Westin Paris", location: "Paris, France", rating: "4.9", maxRating: "/5", price: "€29", unit: "/ person", tags: ["Hotel", "Luxury", "Spa"], checkin: "Apr 21, 2024", checkout: "12:00 PM", image: "/Homepage/Section 4/Images/Image.png", tagColors: { bg: "#FFF0F8", border: "#FBBDEA", text: "#C050A0" } },
    { name: "Hilton Barcelona", location: "Barcelona, Spain", rating: "4.7", maxRating: "/5", price: "€142", unit: "/ night", tags: ["Hotel", "Business", "Pool"], checkin: "May 10, 2024", checkout: "11:00 AM", image: "/Homepage/Section 4/Images/Image-1.png", tagColors: { bg: "#FFF4ED", border: "#FDCBA8", text: "#C06020" } },
    { name: "Marriott Dubai", location: "Dubai, UAE", rating: "4.8", maxRating: "/5", price: "€98", unit: "/ night", tags: ["Hotel", "Resort", "Beachfront"], checkin: "Jun 15, 2024", checkout: "12:00 PM", image: "/Homepage/Section 4/Images/Image-2.png", tagColors: { bg: "#FFFBEB", border: "#FDE68A", text: "#A08010" } },
  ],
  hotelDestinations: [
    { city: "Paris", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&w=800&q=80" },
    { city: "London", image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&w=800&q=80" },
    { city: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&w=800&q=80" },
    { city: "Rome", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&w=800&q=80" },
  ],
  whyCompareFeatures: [
    { iconSrc: "/Hotels Page/Section 4/Icons/search - 01.png", title: "Compare Prices", description: "Compare hotel prices from multiple booking sites all in one place." },
    { iconSrc: "/Hotels Page/Section 4/Icons/calendar - 02.png", title: "Book Direct", description: "Complete your booking securely directly with the hotel or booking provider." },
    { iconSrc: "/Hotels Page/Section 4/Icons/credit card declined - 02.png", title: "No Hidden Fees", description: "TravelMommy never adds extra booking fees to your final price." },
  ],
  hotelBrands: [{ name: "Holiday Inn", logo: "/Hotels Page/Section 5/Images/20210629150411!Holiday_Inn_Logo 2.png" }, { name: "Accor", logo: "/Hotels Page/Section 5/Images/Accor-Logo-2010 1.png" }, { name: "Hilton", logo: "/Hotels Page/Section 5/Images/HiltonHotelsLogo.svg 1.png" }, { name: "Hyatt", logo: "/Hotels Page/Section 5/Images/Hyatt-Hotels-Logo-Vector.svg- 1.png" }],
  popularSearches: [{ city: "Paris", desc: "The City of Light, romance, and timeless art galleries.", price: "$120", rating: "4.9", hotelCount: "3,200+", image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=800&q=80" }, { city: "London", desc: "A majestic blend of royal history and vibrant modern culture.", price: "$110", rating: "4.8", hotelCount: "2,850+", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80" }],
  faqs: [{ question: "How does TravelMommy compare hotel prices?", answer: "TravelMommy aggregates prices from hundreds of hotel booking platforms and direct hotel websites, allowing you to compare the best available rates in one unified search." }, { question: "Does TravelMommy charge booking fees?", answer: "No. We are a free comparison platform. The price you see is the price provided by our partners, with no hidden fees added by us." }],
  copy: { searchButton: "Search", newsletterTitle: "Get hotel deals in your inbox", newsletterDescription: "Sign up for the latest hotel deals and travel inspiration.", newsletterPlaceholder: "Enter your email address", newsletterCta: "Subscribe" },
};
