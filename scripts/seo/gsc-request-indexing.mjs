// Solicita indexación en Search Console para URL de yago.cl usando el Chrome separado de
// scripts/search-console-session.mjs (perfil .local/seo/search-console-browser, puerto 9335).
// Uso: node scripts/seo/gsc-request-indexing.mjs https://yago.cl/ruta [...]
// Google permite unas 10 solicitudes por día. Si la ventana no tiene sesión, se detiene: nunca escribe credenciales.
import { readFile, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const LOG = fileURLToPath(new URL("../../.local/seo/daily/solicitudes-indexacion.json", import.meta.url));
const MAX_PER_RUN = 10;
const urls = process.argv.slice(2).filter((u) => u.startsWith("https://yago.cl"));
if (!urls.length) throw new Error("Uso: node scripts/seo/gsc-request-indexing.mjs https://yago.cl/ruta [...]");

async function connect() {
  try {
    return await chromium.connectOverCDP("http://127.0.0.1:9335");
  } catch {
    spawnSync(process.execPath, [fileURLToPath(new URL("../search-console-session.mjs", import.meta.url))], { stdio: "ignore" });
    await new Promise((resolve) => setTimeout(resolve, 7000));
    return chromium.connectOverCDP("http://127.0.0.1:9335");
  }
}

let log = [];
try { log = JSON.parse(await readFile(LOG, "utf8")); } catch (error) { if (error.code !== "ENOENT") throw error; }
const weekAgo = Date.now() - 7 * 24 * 3600 * 1000;
const recent = new Set(log.filter((r) => r.resultado === "solicitada" && Date.parse(r.fecha) > weekAgo).map((r) => r.url));

const browser = await connect();
const page = await browser.contexts()[0].newPage();
const results = [];
try {
  for (const url of urls) {
    if (results.filter((r) => r.resultado === "solicitada").length >= MAX_PER_RUN) break;
    if (recent.has(url)) { results.push({ url, resultado: "omitida: solicitada hace menos de 7 días" }); continue; }
    await page.goto(`https://search.google.com/search-console/inspect?resource_id=sc-domain%3Ayago.cl&id=${encodeURIComponent(url)}`, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(4000);
    if (/accounts\.google\.com|search-console\/about/.test(page.url())) { results.push({ url, resultado: "sin sesión" }); break; }
    // Veredicto de la inspección: "La URL no está en Google" o "La URL está en Google".
    const verdict = page.getByText(/La URL (no )?está en Google|URL is (not )?on Google/i).first();
    await verdict.waitFor({ timeout: 90000 }).catch(() => {});
    const text = (await verdict.textContent().catch(() => "")) || "";
    if (!text) { results.push({ url, resultado: "error: sin veredicto" }); continue; }
    if (!/no está|not on/i.test(text)) { results.push({ url, resultado: "ya indexada" }); continue; }
    await page.getByText(/^\s*(Solicitar indexación|Request indexing)\s*$/i).first().click();
    // Google prueba la URL publicada (hasta 2 minutos) y confirma o avisa de la cuota.
    const done = page.getByText(/Se ha solicitado la indexación|Indexación solicitada|Indexing requested|cuota|quota/i).first();
    await done.waitFor({ timeout: 150000 }).catch(() => {});
    const outcome = (await done.textContent().catch(() => "")) || "";
    if (/cuota|quota/i.test(outcome)) { results.push({ url, resultado: "cuota" }); break; }
    results.push({ url, resultado: outcome ? "solicitada" : "error: sin confirmación" });
    const close = page.getByRole("button", { name: /^(Aceptar|Entendido|OK|Got it)$/i }).first();
    if (await close.count()) await close.click().catch(() => {});
  }
} finally {
  await page.close().catch(() => {});
  await browser.close();
}
const fecha = new Date().toISOString();
await writeFile(LOG, JSON.stringify([...log, ...results.map((r) => ({ fecha, ...r }))], null, 2) + "\n", "utf8");
console.log(JSON.stringify(results, null, 2));
