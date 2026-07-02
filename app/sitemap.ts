import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getHotelIds } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = ["", "/about", "/services", "/hotels", "/cases", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const hotelRoutes = getHotelIds().map((id) => ({
    url: `${base}/hotels/${id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...hotelRoutes];
}
