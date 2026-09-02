import type { MetadataRoute } from "next";
import { SERVICES } from "@/config/services";
import { PRODUCTS } from "@/config/productos";
import { SEO_PAGES } from "@/config/seo-pages";
import { AUTOMATION_PAGES } from "@/config/automation-pages";
import { BLOG_POSTS } from "@/config/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";
  const siteUpdated = new Date("2026-09-01T00:00:00.000Z");

  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/soluciones`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/productos`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/servicios`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/casos`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/proceso`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.8 },
    ...BLOG_POSTS.map(
      (post): MetadataRoute.Sitemap[number] => ({
        url: `${base}/blog/${post.slug}`,
        lastModified: new Date(post.modifiedDate || post.date),
        changeFrequency: "monthly",
        priority: 0.7,
      })
    ),
    { url: `${base}/ocr`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ocr-master`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.8 },
    ...AUTOMATION_PAGES.map(
      (page): MetadataRoute.Sitemap[number] => ({
        url: `${base}/${page.slug}`,
        lastModified: siteUpdated,
        changeFrequency: "monthly",
        priority: 0.9,
      })
    ),
    { url: `${base}/privacidad`, lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/terminos`, lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.4 },
    ...SEO_PAGES.map(
      (page): MetadataRoute.Sitemap[number] => ({
        url: `${base}/soluciones/${page.slug}`,
        lastModified: siteUpdated,
        changeFrequency: "monthly",
        priority: 0.75,
      })
    ),
    ...SERVICES.map(
      (s): MetadataRoute.Sitemap[number] => ({
        url: `${base}/servicios/${s.slug}`,
        lastModified: siteUpdated,
        changeFrequency: "monthly",
        priority: 0.7,
      })
    ),
    ...PRODUCTS.map(
      (p): MetadataRoute.Sitemap[number] => ({
        url: `${base}/productos/${p.slug}`,
        lastModified: siteUpdated,
        changeFrequency: "monthly",
        priority: 0.7,
      })
    ),
  ];

  return entries;
}
