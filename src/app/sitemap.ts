import type { MetadataRoute } from "next";
import { SERVICES } from "@/config/services";
import { PRODUCTS } from "@/config/productos";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    ...SERVICES.map(
      (s): MetadataRoute.Sitemap[number] => ({
        url: `${base}/servicios/${s.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      })
    ),
    ...PRODUCTS.map(
      (p): MetadataRoute.Sitemap[number] => ({
        url: `${base}/productos/${p.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      })
    ),
  ];

  return entries;
}
