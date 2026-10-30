import type { MetadataRoute } from "next";

/**
 * Buscadores y asistentes de IA permitidos explícitamente.
 * - Búsqueda / respuestas con fuente: OAI-SearchBot (ChatGPT Search), Claude-SearchBot, PerplexityBot,
 *   Bingbot (también alimenta Copilot y ChatGPT), Googlebot, Applebot, DuckAssistBot.
 * - Lectura bajo demanda cuando un usuario pide revisar una página: ChatGPT-User, Claude-User, Perplexity-User,
 *   meta-externalfetcher, MistralAI-User.
 * - Entrenamiento de modelos: GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, meta-externalagent.
 *   Su permiso es una decisión independiente del acceso a búsqueda; permitir entrenamiento
 *   no es un requisito ni una garantía de visibilidad GEO.
 */
const AI_AGENTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "DuckAssistBot",
  "MistralAI-User",
  "meta-externalagent",
  "meta-externalfetcher",
  "Meta-ExternalAgent",
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: AI_AGENTS, allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
