import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/config/blog";
import { keepCodesTogether } from "@/lib/typography";

/* ---------------------------------------------------------------------------
   Tarjetas del blog (fondo claro). El título es un enlace "estirado" que cubre
   toda la tarjeta, así el encabezado conserva su semántica.
   --------------------------------------------------------------------------- */

export function formatPostDate(iso: string, month: "short" | "long" = "long") {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-CL", {
    day: "numeric",
    month,
    year: "numeric",
  });
}

const STRETCHED_LINK =
  "after:absolute after:inset-0 after:z-10 after:rounded-[1.5rem] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-sky-600";

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <p className="font-mono text-[12.5px] text-slate-600">
      <time dateTime={post.date}>{formatPostDate(post.date, "short")}</time>
      <span aria-hidden="true"> · </span>
      {post.readingTime} de lectura
    </p>
  );
}

export function PostCard({
  post,
  headingLevel = "h3",
  priority = false,
}: {
  post: BlogPost;
  headingLevel?: "h2" | "h3";
  priority?: boolean;
}) {
  const Heading = headingLevel;
  return (
    <article className="group y-card y-card-hover relative flex min-w-0 flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-mist">
        <Image
          src={post.image || "/placeholder.svg"}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-slate-900/[0.06]" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-7">
        <span className="y-eyebrow">{post.category}</span>
        <Heading className="y-h3 text-[1.2rem] text-slate-950">
          <Link href={`/blog/${post.slug}`} className={STRETCHED_LINK}>
            {keepCodesTogether(post.title)}
          </Link>
        </Heading>
        <p className="line-clamp-3 text-[15px] leading-relaxed text-slate-600">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <PostMeta post={post} />
          <ArrowRight
            className="h-4 w-4 shrink-0 text-sky-700 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </div>
      </div>
    </article>
  );
}

export function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group y-card y-card-hover relative grid grid-cols-1 overflow-hidden lg:grid-cols-12">
      <div className="relative aspect-[16/10] overflow-hidden bg-mist lg:col-span-7 lg:aspect-auto lg:min-h-[27rem]">
        <Image
          src={post.image || "/placeholder.svg"}
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex min-w-0 flex-col justify-center gap-5 p-7 sm:p-10 lg:col-span-5 lg:p-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-sky-50 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-sky-800 shadow-[inset_0_0_0_1px_rgba(14,165,233,0.2)]">
            Destacado
          </span>
          <span className="y-eyebrow">{post.category}</span>
        </div>
        <h2 className="y-h3 text-[clamp(1.6rem,2.6vw,2.25rem)] leading-[1.1] tracking-[-0.03em] text-slate-950">
          <Link href={`/blog/${post.slug}`} className={STRETCHED_LINK}>
            {keepCodesTogether(post.title)}
          </Link>
        </h2>
        <p className="text-[16.5px] leading-relaxed text-slate-600">{post.excerpt}</p>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
          <PostMeta post={post} />
          <span aria-hidden="true" className="y-link">
            Leer artículo
            <ArrowRight className="y-arrow h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px]" />
          </span>
        </div>
      </div>
    </article>
  );
}
