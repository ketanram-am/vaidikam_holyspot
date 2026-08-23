import type { MetadataRoute } from "next";
import { services, categories } from "@/content/services";
import { site } from "@/content/site";

const BASE_URL = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/homas",
    "/yagas",
    "/pujas",
    "/samskaras",
    "/consultation",
    "/booking",
    "/testimonials",
    "/gallery",
    "/articles",
    "/faqs",
    "/products",
    "/contact",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...categories.map((c) => ({
      url: `${BASE_URL}/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...services.map((s) => ({
      url: `${BASE_URL}/services/${s.category}/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
