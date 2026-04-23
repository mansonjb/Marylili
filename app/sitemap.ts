import type { MetadataRoute } from "next";
import { allPagesByCategory } from "@/data/pages";

const BASE = "https://www.lemarylili.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/le-bar`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/atelier-cocktail`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/mariage`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/evjf`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/evg`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/team-building`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/anniversaire`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/bar-ephemere`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${BASE}/geo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const dynamicRoutes: MetadataRoute.Sitemap = Object.entries(allPagesByCategory).flatMap(
    ([category, pages]) =>
      pages.map((page) => ({
        url: `${BASE}/${category}/${page.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: page.type === "hub" ? 0.8 : 0.65,
      }))
  );

  return [...staticRoutes, ...dynamicRoutes];
}
