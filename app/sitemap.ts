import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { allCeremonies } from "@/content/ceremonies";

const paths = [
  "",
  "/about",
  "/contact",
  "/services",
  "/consultation",
  "/homas",
  "/pujas",
  "/samskaras",
  // Every named ceremony has its own page, and each is the page a search for
  // that ceremony by name should land on.
  ...allCeremonies().map((c) => `/${c.category}/${c.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
