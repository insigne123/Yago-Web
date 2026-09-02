import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { createBreadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = createBreadcrumbJsonLd(items);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Migas de pan" className="mb-7 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, index) => {
            const current = index === items.length - 1;
            return (
              <li key={item.href} className="inline-flex items-center gap-1.5">
                {index > 0 ? <ChevronRight className="size-3.5 text-slate-400" aria-hidden="true" /> : null}
                {current ? (
                  <span aria-current="page" className="font-medium text-slate-900">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="rounded-sm underline-offset-4 hover:text-slate-950 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
