import { Metadata } from "next";
import BlogPage from "../components/blog/blog";
import { blogData } from "../../lib/data/blogData";

// Optional: Add SEO metadata for the routing page
export const metadata: Metadata = {
  title: "Travel Guides | TravelMommy",
  description: "Discover detailed month-by-month weather, hidden routes, budget travel options, and planning checklists by seasoned local experts.",
};

export default function BlogRoute() {
  // Pass the separated data object down to your design component
  return <BlogPage data={blogData} />;
}
