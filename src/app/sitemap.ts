import type { MetadataRoute } from "next";
import { SERVICES } from "@/config/services";
import { PRODUCTS } from "@/config/productos";
import { BLOG_POSTS } from "@/config/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/ocr`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ocr-master`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/proceso`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...BLOG_POSTS.map(
      (p): MetadataRoute.Sitemap[number] => ({
        url: `${base}/blog/${p.slug}`,
        lastModified: new Date(p.date),
        changeFrequency: "monthly",
        priority: 0.7,
      })
    ),
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
