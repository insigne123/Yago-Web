/** Video de YouTube asociado a una guía o un servicio (ver VideoEmbed). */
export type VideoInfo = {
  youtubeId: string;
  title: string;
  description: string;
  /** Fecha de publicación en YouTube, ISO con zona horaria. */
  uploadDate: string;
  /** Duración ISO 8601, por ejemplo "PT59S". */
  duration: string;
  /** Miniatura 16:9 servida desde /public. */
  poster: string;
};

/** Datos estructurados VideoObject para que Google pueda mostrar el video en los resultados. */
export function videoJsonLd(video: VideoInfo, siteUrl: string, organizationId: string) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: [`${siteUrl}${video.poster}`, `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`],
    uploadDate: video.uploadDate,
    duration: video.duration,
    embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
    url: `https://www.youtube.com/watch?v=${video.youtubeId}`,
    publisher: { "@id": organizationId },
    inLanguage: "es-CL",
  };
}
