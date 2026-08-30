import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const paths = [
  "",
  "/about",
  "/contact",
  "/services",
  "/homas",
  "/yagas",
  "/pujas",
  "/samskaras",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
