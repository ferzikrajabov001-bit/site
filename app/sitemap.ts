import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAssetIds } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = ["", "/about", "/services", "/objects", "/cases", "/contacts"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const assetRoutes = getAssetIds().map((id) => ({
    url: `${base}/objects/${id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...assetRoutes];
}
