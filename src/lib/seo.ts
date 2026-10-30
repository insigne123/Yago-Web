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
  authors?: { name: string; url: string }[];
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
  authors,
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
          authors: authors?.map((author) => author.url),
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
    authors,
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

export function createCollectionJsonLd({ name, description, path, modifiedDate, items }: {
  name: string;
  description: string;
  path: string;
  modifiedDate: string;
  items: { name: string; href: string; description?: string }[];
}) {
  const url = new URL(path, SITE_URL).toString();
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url, name, description, dateModified: modifiedDate, inLanguage: "es-CL",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntity: { "@type": "ItemList", numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1,
        item: { "@type": "WebPage", url: new URL(item.href, SITE_URL).toString(), name: item.name, ...(item.description ? { description: item.description } : {}) },
      })),
    },
  };
}

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
