import type { MetadataRoute } from "next";
import { SERVICES } from "@/config/services";
import { PRODUCTS } from "@/config/productos";
import { SEO_PAGES } from "@/config/seo-pages";
import { AUTOMATION_PAGES } from "@/config/automation-pages";
import { BLOG_POSTS } from "@/config/blog";
import { ENTITY } from "@/config/entity";
import { getPublishedCaseStudies } from "@/config/evidence";
import { OCR_PAGE } from "@/config/ocr";
import { DISCOVERY_UPDATED } from "@/config/discovery";
import { CATALOG_UPDATED } from "@/config/catalog-guidance";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";
  const siteUpdated = new Date(`${ENTITY.contentUpdated}T12:00:00.000Z`);

  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: DISCOVERY_UPDATED, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/soluciones`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/productos`, lastModified: CATALOG_UPDATED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/servicios`, lastModified: CATALOG_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/casos`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/nosotros`, lastModified: DISCOVERY_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    ...getPublishedCaseStudies().map((item): MetadataRoute.Sitemap[number] => ({ url: `${base}/casos/${item.slug}`, lastModified: new Date(item.modifiedDate || item.publishedDate), changeFrequency: "monthly", priority: 0.7 })),
    { url: `${base}/precios`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/proceso`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: CATALOG_UPDATED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/glosario`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.7 },
    ...BLOG_POSTS.map(
      (post): MetadataRoute.Sitemap[number] => ({
        url: `${base}/blog/${post.slug}`,
        lastModified: new Date(post.modifiedDate || post.date),
        changeFrequency: "monthly",
        priority: 0.7,
        images: [`${base}${post.image}`],
      })
    ),
    { url: `${base}/ocr`, lastModified: new Date(`${OCR_PAGE.modifiedDate}T12:00:00.000Z`), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ocr-master`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.8 },
    ...AUTOMATION_PAGES.map(
      (page): MetadataRoute.Sitemap[number] => ({
        url: `${base}/${page.slug}`,
        lastModified: page.modifiedDate || siteUpdated,
        changeFrequency: "monthly",
        priority: 0.9,
      })
    ),
    { url: `${base}/privacidad`, lastModified: new Date("2026-10-13T12:00:00.000Z"), changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/terminos`, lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.4 },
    ...SEO_PAGES.map(
      (page): MetadataRoute.Sitemap[number] => ({
        url: `${base}/soluciones/${page.slug}`,
        lastModified: page.modifiedDate ? new Date(`${page.modifiedDate}T12:00:00.000Z`) : siteUpdated,
        changeFrequency: "monthly",
        priority: 0.75,
      })
    ),
    ...SERVICES.map(
      (s): MetadataRoute.Sitemap[number] => ({
        url: `${base}/servicios/${s.slug}`,
        lastModified: s.modifiedDate ? new Date(`${s.modifiedDate}T12:00:00.000Z`) : siteUpdated,
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
