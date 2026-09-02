import type { Metadata } from "next";
import { COMPANY } from "@/config/site";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataInput): Metadata {
  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? {
          type: "article",
          url: path,
          siteName: COMPANY.name,
          locale: "es_CL",
          title,
          description,
          images: [{ url: image, width: 1200, height: 630, alt: title }],
          publishedTime,
          modifiedTime,
        }
      : {
          type: "website",
          url: path,
          siteName: COMPANY.name,
          locale: "es_CL",
          title,
          description,
          images: [{ url: image, width: 1200, height: 630, alt: title }],
        };

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.href, SITE_URL).toString(),
    })),
  };
}
