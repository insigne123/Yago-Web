#!/usr/bin/env node
/**
 * Estado de rastreo en Bing de todas las URL del sitemap (Bing alimenta Copilot y parte de ChatGPT).
 *
 *   node scripts/seo/bing-status.mjs            # solo informa
 *   node scripts/seo/bing-status.mjs --submit   # además envía a Bing las URL nunca rastreadas
 *                                               # o con rastreo de más de 30 días (cuota diaria: 100)
 *
 * La clave de Bing se lee de Secret Manager con la sesión de Firebase (ver google-access.mjs).
 */
import { readFile } from "node:fs/promises";
import { readBingKey } from "./google-access.mjs";

const config = JSON.parse(await readFile(new URL("../seo.config.json", import.meta.url), "utf8"));
const submit = process.argv.includes("--submit");
const STALE_DAYS = 30;
const api = (method, params = {}) => {
  const endpoint = new URL(`https://ssl.bing.com/webmaster/api.svc/json/${method}`);
  for (const [name, value] of Object.entries(params)) endpoint.searchParams.set(name, value);
  return endpoint;
};

const key = await readBingKey(config);
const siteUrl = `${config.site}/`;
const xml = await (await fetch(`${config.site}/sitemap.xml`, { signal: AbortSignal.timeout(20000) })).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].replaceAll("&amp;", "&"));

// Bing responde "ThrottleHost" si se consulta muy seguido: una URL cada 3 s y un reintento tras 15 s.
const pause = (ms = 3000) => new Promise((resolve) => setTimeout(resolve, ms));
async function urlInfo(url) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const response = await fetch(api("GetUrlInfo", { siteUrl, url, apikey: key }), { redirect: "error", signal: AbortSignal.timeout(20000) });
    if (response.ok || attempt === 1) return response;
    await pause(15000);
  }
}
const pending = [];
const rows = [];
for (const url of urls) {
  const path = new URL(url).pathname;
  let crawled = null;
  try {
    const response = await urlInfo(url);
    if (!response.ok) { rows.push({ path, crawled: "sin dato", days: undefined }); await pause(); continue; }
    const millis = Number(/^\/Date\((-?\d+)/.exec((await response.json()).d?.LastCrawledDate || "")?.[1]);
    if (millis > 946_684_800_000) crawled = new Date(millis);
  } catch { rows.push({ path, crawled: "sin dato", days: undefined }); await pause(); continue; }
  const days = crawled ? Math.floor((Date.now() - crawled.getTime()) / 86_400_000) : null;
  rows.push({ path, crawled: crawled?.toISOString().slice(0, 10) ?? "nunca", days });
  if (days === null || days > STALE_DAYS) pending.push(url);
  await pause();
}

const fresh = rows.filter((row) => typeof row.days === "number" && row.days <= STALE_DAYS).length;
const unknown = rows.filter((row) => row.days === undefined).length;
console.log(`Bing · ${urls.length} URL en el sitemap · ${fresh} rastreadas en los últimos ${STALE_DAYS} días · ${pending.length} pendientes · ${unknown} sin dato`);
for (const row of rows.filter((item) => item.days !== undefined && (item.days === null || item.days > STALE_DAYS))) console.log(`  ${row.crawled.padEnd(10)}  ${row.path}`);

if (submit && pending.length) {
  const quota = (await (await fetch(api("GetUrlSubmissionQuota", { siteUrl, apikey: key }))).json()).d;
  const batch = pending.slice(0, Math.max(0, quota?.DailyQuota ?? 0));
  if (!batch.length) {
    console.log("Sin cuota diaria disponible para enviar URL.");
  } else {
    const response = await fetch(api("SubmitUrlBatch", { apikey: key }), {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ siteUrl, urlList: batch }),
    });
    console.log(`SubmitUrlBatch: ${response.status} · ${batch.length} URL enviadas (cuota diaria ${quota.DailyQuota}).`);
    if (!response.ok) process.exitCode = 1;
  }
}
