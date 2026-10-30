import { readFile, writeFile } from "node:fs/promises";
import { cloudSession, googleJson } from "./google-access.mjs";

const config = JSON.parse(await readFile(new URL("../seo.config.json", import.meta.url), "utf8"));
const args = process.argv.slice(2);
if (args.some((arg) => arg !== "--submit")) throw new Error("Uso: npm run seo:sitemap -- [--submit]");
const sitemapUrl = `${config.site}/sitemap.xml`;
const publicResponse = await fetch(sitemapUrl, { redirect: "error", signal: AbortSignal.timeout(30000) });
if (!publicResponse.ok) throw new Error("No está disponible el sitemap público.");
const xml = await publicResponse.text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (!urls.length || urls.length > 500 || urls.some((url) => new URL(url).origin !== new URL(config.site).origin)) throw new Error("El sitemap no coincide con el dominio configurado.");
if (!args.includes("--submit")) {
  console.log(JSON.stringify({ mode: "preview", site: config.searchConsoleProperty, sitemap: sitemapUrl, urls: urls.length, action: "Reenviar únicamente este sitemap a Google Search Console." }, null, 2));
} else {
  const cloud = await cloudSession();
  // Solo esta acción solicitada utiliza el scope de escritura. Los reportes
  // habituales siguen usando webmasters.readonly y analytics.readonly.
  const credential = await googleJson(cloud, `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${config.readerEmail}:generateAccessToken`, {
    method: "POST", body: { scope: ["https://www.googleapis.com/auth/webmasters"], lifetime: "900s" },
  });
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(config.searchConsoleProperty)}/sitemaps/${encodeURIComponent(sitemapUrl)}`;
  const response = await fetch(endpoint, { method: "PUT", redirect: "error", signal: AbortSignal.timeout(30000), headers: { Authorization: `Bearer ${credential.accessToken}` } });
  if (!response.ok) throw new Error(`Search Console no aceptó el envío (HTTP ${response.status}).`);
  const result = { submittedAt: new Date().toISOString(), accepted: true, status: response.status, sitemap: sitemapUrl, urls: urls.length };
  try {
    const sitemap = await googleJson({ token: credential.accessToken }, endpoint);
    result.lastSubmitted = sitemap.lastSubmitted ?? null;
    result.lastDownloaded = sitemap.lastDownloaded ?? null;
    result.errors = sitemap.errors ?? null;
    result.warnings = sitemap.warnings ?? null;
  } catch { result.verificationPending = true; }
  await writeFile(new URL(`../../.local/seo/reports/${result.submittedAt.replace(/[:.]/g, "-")}-sitemap-submission.json`, import.meta.url), JSON.stringify(result, null, 2) + "\n", "utf8");
  console.log(JSON.stringify(result, null, 2));
}
