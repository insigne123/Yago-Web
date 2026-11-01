#!/usr/bin/env node
/**
 * Resumen diario de SEO/GEO a partir de los reportes de `npm run seo:report -- --save --inspect-all`.
 *
 *   node scripts/seo/daily-check.mjs              # compara los dos últimos reportes completos
 *   node scripts/seo/daily-check.mjs --indexnow   # además avisa a IndexNow las URL cuyo lastmod cambió
 *
 * Escribe el resumen en .local/seo/daily/AAAA-MM-DD.md y lo imprime. No modifica el sitio.
 */
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("../../", import.meta.url));
const reportsDir = join(root, ".local", "seo", "reports");
const dailyDir = join(root, ".local", "seo", "daily");
const config = JSON.parse(await readFile(join(root, "scripts", "seo.config.json"), "utf8"));
const withIndexNow = process.argv.includes("--indexnow");
const today = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Santiago" }).format(new Date());

async function completeReports() {
  if (!existsSync(reportsDir)) return [];
  const files = (await readdir(reportsDir)).filter((name) => /^\d{4}-\d\d-\d\dT[\d-]+Z\.json$/.test(name)).sort();
  const reports = [];
  for (const name of files) {
    try {
      const report = JSON.parse(await readFile(join(reportsDir, name), "utf8"));
      if (report.status?.complete) reports.push(report);
    } catch { /* Archivo incompleto o ajeno: se ignora. */ }
  }
  return reports;
}

const path = (url) => url.replace(config.site, "") || "/";
const indexedSet = (report) => new Set((report?.searchConsole?.inspections || []).filter((item) => item.verdict === "PASS").map((item) => item.path));
const totals = (report) => (report?.searchConsole?.performance?.pages?.rows || []).reduce((sum, row) => ({ impressions: sum.impressions + row.impressions, clicks: sum.clicks + row.clicks }), { impressions: 0, clicks: 0 });
const sessions = (rows = []) => rows.reduce((sum, row) => sum + (row.sessions || row.eventCount || 0), 0);
const delta = (now, before) => (before === undefined ? "" : ` (${now - before >= 0 ? "+" : ""}${now - before})`);

const reports = await completeReports();
const latest = reports.at(-1);
const lines = [`# SEO/GEO diario · ${today}`, ""];

if (!latest) {
  lines.push("Sin reportes completos. Ejecuta `npm run seo:report -- --save --inspect-all` (requiere sesión de Firebase vigente).");
} else {
  // El reporte anterior debe tener al menos 20 horas de diferencia para comparar día contra día.
  const previous = [...reports].reverse().find((report) => new Date(latest.generatedAt) - new Date(report.generatedAt) >= 20 * 3_600_000);
  const now = totals(latest);
  const before = previous ? totals(previous) : undefined;
  const indexed = indexedSet(latest);
  const indexedBefore = previous ? indexedSet(previous) : new Set();
  const inspections = latest.searchConsole.inspections || [];
  lines.push(
    `Reporte: ${latest.generatedAt} · ventana ${latest.window.startDate} a ${latest.window.endDate}${previous ? ` · comparado con ${previous.generatedAt.slice(0, 10)}` : " · sin reporte anterior para comparar"}`,
    "",
    "## Google (Chile, sin marca, 28 días)",
    `- Impresiones: ${now.impressions}${delta(now.impressions, before?.impressions)} · clics: ${now.clicks}${delta(now.clicks, before?.clicks)}`,
    `- Indexadas: ${indexed.size} de ${inspections.length}${previous ? delta(indexed.size, indexedBefore.size) : ""}`,
  );
  const gained = [...indexed].filter((item) => previous && !indexedBefore.has(item));
  const lost = [...indexedBefore].filter((item) => !indexed.has(item) && inspections.some((row) => row.path === item));
  if (gained.length) lines.push(`- Nuevas en el índice: ${gained.join(", ")}`);
  if (lost.length) lines.push(`- Salieron del índice: ${lost.join(", ")}`);
  const notIndexed = inspections.filter((item) => item.verdict !== "PASS");
  if (notIndexed.length) lines.push(`- Sin indexar (${notIndexed.length}): ${notIndexed.map((item) => `${item.path} [${item.coverageState}]`).join("; ")}`);

  const queries = latest.searchConsole.performance?.queries?.rows || [];
  const known = new Set((previous?.searchConsole?.performance?.queries?.rows || []).map((row) => row.keys[0]));
  const near = queries.filter((row) => row.position >= 4 && row.position <= 20 && row.impressions >= 3).sort((a, b) => b.impressions - a.impressions).slice(0, 10);
  if (near.length) {
    lines.push("", "## Cerca de la primera página (posición 4 a 20)");
    for (const row of near) lines.push(`- "${row.keys[0]}" · ${row.impressions} impresiones · posición ${row.position.toFixed(1)} · ${path(row.keys[1])}`);
  }
  const fresh = [...new Map(queries.filter((row) => previous && !known.has(row.keys[0])).sort((a, b) => a.impressions - b.impressions).map((row) => [row.keys[0], row])).values()]
    .sort((a, b) => b.impressions - a.impressions).slice(0, 10);
  if (fresh.length) {
    lines.push("", "## Búsquedas nuevas");
    for (const row of fresh) lines.push(`- "${row.keys[0]}" · ${row.impressions} impresiones · posición ${row.position.toFixed(1)} · ${path(row.keys[1])}`);
  }

  const ga4 = latest.ga4?.reports || {};
  const ga4Before = previous?.ga4?.reports;
  const organic = sessions(ga4.organic?.rows);
  const leads = sessions(ga4.leads?.rows);
  const ai = sessions(ga4.aiReferrals?.rows);
  lines.push(
    "",
    "## GA4 (28 días)",
    `- Sesiones orgánicas: ${organic}${ga4Before ? delta(organic, sessions(ga4Before.organic?.rows)) : ""}`,
    `- Contactos (generate_lead): ${leads}${ga4Before ? delta(leads, sessions(ga4Before.leads?.rows)) : ""}`,
    `- Sesiones desde asistentes de IA: ${ai}${ga4Before ? delta(ai, sessions(ga4Before.aiReferrals?.rows)) : ""}${ga4.aiReferrals?.rows?.length ? ` · ${[...new Set(ga4.aiReferrals.rows.map((row) => row.sessionSourceMedium.split(" / ")[0]))].join(", ")}` : ""}`,
  );
}

// Cambios en el sitemap desde la última ejecución: candidatos para IndexNow.
await mkdir(dailyDir, { recursive: true });
const snapshotFile = join(dailyDir, "sitemap-lastmod.json");
try {
  const xml = await (await fetch(`${config.site}/sitemap.xml`, { signal: AbortSignal.timeout(20000) })).text();
  // Cada <url> puede traer <image:image> antes de <lastmod>: se lee el bloque completo.
  const current = Object.fromEntries([...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, block]) => [/<loc>([^<]+)<\/loc>/.exec(block)?.[1], /<lastmod>([^<]+)<\/lastmod>/.exec(block)?.[1] || ""]).filter(([url]) => url));
  const before = existsSync(snapshotFile) ? JSON.parse(await readFile(snapshotFile, "utf8")) : null;
  const changed = before ? Object.keys(current).filter((url) => current[url] !== before[url]) : [];
  lines.push("", "## Sitemap", `- ${Object.keys(current).length} URL${before ? ` · ${changed.length} nuevas o actualizadas desde la última revisión` : " · primera foto guardada"}`);
  if (changed.length) {
    lines.push(`- Cambiaron: ${changed.map(path).join(", ")}`);
    if (withIndexNow) {
      const run = spawnSync(process.execPath, [join(root, "scripts", "indexnow.mjs"), ...changed.map(path)], { encoding: "utf8" });
      lines.push(`- ${(run.stdout || run.stderr || "IndexNow sin respuesta").trim()}`);
    }
  }
  await writeFile(snapshotFile, JSON.stringify(current, null, 2));
} catch (error) {
  lines.push("", "## Sitemap", `- No se pudo leer el sitemap público: ${error.message}`);
}

const summary = lines.join("\n") + "\n";
await writeFile(join(dailyDir, `${today}.md`), summary);
console.log(summary);
