"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { VideoInfo } from "@/lib/video";

/**
 * Video de YouTube que carga el reproductor solo al hacer clic: la guía no paga el peso del iframe al abrir.
 * Usa youtube-nocookie para no dejar cookies de YouTube antes de reproducir.
 */
export function VideoEmbed({ video }: { video: VideoInfo }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="not-prose my-10">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-950">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 h-full w-full" aria-label={`Reproducir video: ${video.title}`}>
            <Image src={video.poster} alt="" fill sizes="(min-width: 1024px) 680px, 100vw" className="object-cover" />
            <span className="absolute inset-0 grid place-items-center bg-slate-950/20 transition-colors duration-200 group-hover:bg-slate-950/35">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 shadow-lg shadow-sky-500/20 transition-transform duration-200 group-hover:scale-105">
                <Play className="ml-1 h-7 w-7 fill-slate-950 text-slate-950" aria-hidden="true" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-slate-600">{video.title}</figcaption>
    </figure>
  );
}
