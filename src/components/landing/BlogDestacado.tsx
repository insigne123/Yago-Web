import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLatestPosts } from "@/config/blog";
import { Section } from "./Section";

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogDestacado() {
  const posts = getLatestPosts(3);

  if (posts.length === 0) return null;

  return (
    <Section tone="light" id="blog-destacado">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="chip-light">Blog</span>
            <h2 className="mt-4 text-balance text-3xl font-semibold md:text-5xl">
              Ideas para automatizar mejor.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900"
          >
            Ver todos los artículos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card-light group block overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width: 768px) 32vw, 100vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-0.5 font-medium text-cyan-700">
                    {post.category}
                  </span>
                  <span>{formatDate(post.date)}</span>
                </div>
                <h3 className="mt-3 text-balance text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-cyan-800">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
