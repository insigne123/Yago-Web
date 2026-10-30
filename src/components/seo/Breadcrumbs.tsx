import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { createBreadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";

export function Breadcrumbs({ items, tone = "dark" }: { items: BreadcrumbItem[]; tone?: "dark" | "light" }) {
  const jsonLd = createBreadcrumbJsonLd(items);
  const light = tone === "light";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Migas de pan" className={`text-sm ${light ? "text-slate-600" : "text-slate-400"}`}>
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, index) => {
            const current = index === items.length - 1;
            return (
              <li key={item.href} className="inline-flex items-center gap-1.5">
                {index > 0 ? <ChevronRight className={`size-3.5 ${light ? "text-slate-400" : "text-slate-500"}`} aria-hidden="true" /> : null}
                {current ? (
                  <span aria-current="page" className={`font-medium ${light ? "text-slate-950" : "text-white"}`}>
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className={`rounded-sm underline-offset-4 hover:underline ${light ? "hover:text-slate-950" : "hover:text-white"}`}>
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
