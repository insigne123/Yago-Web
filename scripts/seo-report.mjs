#!/usr/bin/env node
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { googleJson as requestGoogle, metricsSession, readBingKey } from "./seo/google-access.mjs";
import { analyticsRows, auditHtml, bingDate, BRAND_PATTERN, csvCell, reportStatus, reportWindow, safeFailure } from "./seo/report-utils.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const config = JSON.parse(await readFile(new URL("./seo.config.json", import.meta.url), "utf8"));
const args = process.argv.slice(2);
const options = {};
for (let index = 0; index < args.length; index++) {
  const arg = args[index];
  if (["--save", "--public-only", "--inspect-all"].includes(arg)) options[arg.slice(2)] = true;
  else if (["--start", "--end"].includes(arg) && args[index + 1]) options[arg.slice(2)] = args[++index];
  else throw new Error("Uso: npm run seo:report -- [--save] [--public-only] [--inspect-all] [--start YYYY-MM-DD] [--end YYYY-MM-DD]");
}

const categories = [
  { category: "automatizacion", slug: "automatizacion-procesos", path: "/servicios/automatizacion-procesos" },
  { category: "integracion_ia", slug: "integracion-ia", path: "/servicios/integracion-ia" },
  { category: "apps_desarrollo", slug: "apps-automatizacion", path: "/servicios/apps-automatizacion" },
  { category: "agentes_ia", slug: "agentes-ia", path: "/servicios/agentes-ia" },
  { category: "ocr", slug: "ocr", path: "/ocr" },
];

// Solo este reporte de lectura reintenta una vez los fallos transitorios.
async function googleJson(session, url, options) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try { return await requestGoogle(session, url, options); } catch (error) {
      const transient = !error.status || error.status === 429 || error.status >= 500;
      if (!transient || attempt === 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }
  }
}

async function publicResponse(url) {
  const response = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(20000) });
  const body = await response.text();
  if (body.length > 4 * 1024 * 1024) throw new Error("Respuesta pública demasiado grande.");
  return { status: response.status, finalUrl: response.url, body, xRobotsTag: response.headers.get("x-robots-tag") };
}

async function publicAudit() {
  const sitemap = await publicResponse(`${config.site}/sitemap.xml`);
  if (sitemap.status !== 200) throw new Error("No se pudo obtener el sitemap público.");
  const urls = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].replaceAll("&amp;", "&"));
  if (!urls.length || urls.length > 500 || urls.some((url) => new URL(url).origin !== new URL(config.site).origin)) throw new Error("Sitemap vacío, demasiado grande o con otro dominio.");
  const pages = [];
  for (let index = 0; index < urls.length; index += 5) {
    pages.push(...await Promise.all(urls.slice(index, index + 5).map(async (url) => {
      try { return auditHtml(url, await publicResponse(url)); }
      catch { return { path: new URL(url).pathname, ok: false, error: "PUBLIC_FETCH_FAILED", internalLinks: [] }; }
    })));
  }
  const priorities = config.routes.map((path) => ({
    path, present: pages.some((page) => page.path === path),
    inboundPages: pages.filter((page) => page.path !== path && page.internalLinks.includes(path)).map((page) => page.path),
    workflowPresent: pages.find((page) => page.path === path)?.workflowPresent || false,
  }));
  // Los enlaces ya están resumidos en prioridades; evitar snapshots innecesariamente grandes.
  return { checkedAt: new Date().toISOString(), sitemap: { status: sitemap.status, entries: urls.length, unique: new Set(urls).size },
    summary: { pages: pages.length, ok: pages.filter((page) => page.ok).length },
    pages: pages.map(({ internalLinks, ...page }) => page), priorities };
}

async function consoleReport(session, window, paths = config.routes) {
  const sites = await googleJson(session, "https://www.googleapis.com/webmasters/v3/sites");
  if (!sites.siteEntry?.some((site) => site.siteUrl === config.searchConsoleProperty)) return { connected: false, reason: "PROPERTY_ACCESS_PENDING" };
  const inspections = [];
  for (let index = 0; index < paths.length; index += 3) {
    inspections.push(...await Promise.all(paths.slice(index, index + 3).map(async (path) => {
      try {
        const result = await googleJson(session, "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", { method: "POST", body: {
          inspectionUrl: config.site + path, siteUrl: config.searchConsoleProperty, languageCode: "es-CL",
        } });
        const data = result.inspectionResult?.indexStatusResult || {};
        return { path, verdict: data.verdict || null, coverageState: data.coverageState || null,
          robotsTxtState: data.robotsTxtState || null, indexingState: data.indexingState || null, pageFetchState: data.pageFetchState || null,
          lastCrawlTime: data.lastCrawlTime || null, googleCanonical: data.googleCanonical || null, userCanonical: data.userCanonical || null };
      } catch (error) { return { path, ...safeFailure(error) }; }
    })));
  }
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(config.searchConsoleProperty)}/searchAnalytics/query`;
  const performance = {};
  for (const [name, dimensions] of [["pages", ["page"]], ["queries", ["query", "page"]]]) {
    try {
      const data = await googleJson(session, endpoint, { method: "POST", body: {
        ...window, type: "web", dataState: "final", dimensions, rowLimit: 1000,
        dimensionFilterGroups: [{ filters: [
          { dimension: "country", operator: "equals", expression: "chl" },
          { dimension: "query", operator: "excludingRegex", expression: BRAND_PATTERN },
          { dimension: "page", operator: "includingRegex", expression: `^${config.site.replaceAll(".", "[.]")}/` },
        ] }],
      } });
      performance[name] = { available: true, rows: data.rows || [], rowLimit: 1000, atLimit: (data.rows || []).length === 1000 };
    } catch (error) { performance[name] = { available: false, ...safeFailure(error) }; }
  }
  return { connected: true, property: config.searchConsoleProperty, inspectionScope: options["inspect-all"] ? "sitemap" : "priorities", inspections, filters: { country: "Chile", type: "web", dataState: "final", mainSitePrefix: `${config.site}/`, excludedBrandRegex: BRAND_PATTERN }, performance };
}

async function ga4Report(session, window) {
  let property = config.ga4PropertyId ? `properties/${config.ga4PropertyId}` : null;
  if (!property) {
    const summaries = [];
    let token;
    do {
      const endpoint = new URL("https://analyticsadmin.googleapis.com/v1beta/accountSummaries");
      endpoint.searchParams.set("pageSize", "200");
      if (token) endpoint.searchParams.set("pageToken", token);
      const response = await googleJson(session, endpoint.href);
      summaries.push(...(response.accountSummaries || []).flatMap((account) => account.propertySummaries || []));
      token = response.nextPageToken;
    } while (token && summaries.length < 1000);
    for (const summary of summaries) {
      const streams = await googleJson(session, `https://analyticsadmin.googleapis.com/v1beta/${summary.property}/dataStreams?pageSize=200`);
      if (streams.dataStreams?.some((stream) => stream.webStreamData?.measurementId === config.measurementId)) {
        if (property) throw new Error("Más de una propiedad coincide con el flujo; configurar el ID numérico.");
        property = summary.property;
      }
    }
  }
  if (!property) return { connected: false, reason: "PROPERTY_ACCESS_PENDING", measurementId: config.measurementId };
  const definitions = {
    organic: { dimensions: [{ name: "landingPage" }], metrics: [{ name: "sessions" }], dimensionFilter: { filter: {
      fieldName: "sessionDefaultChannelGroup", stringFilter: { matchType: "EXACT", value: "Organic Search" },
    } } },
    leads: { dimensions: [{ name: "customEvent:service" }, { name: "sessionSourceMedium" }], metrics: [{ name: "eventCount" }], dimensionFilter: { andGroup: { expressions: [
      { filter: { fieldName: "eventName", stringFilter: { matchType: "EXACT", value: "generate_lead" } } },
      { notExpression: { filter: { fieldName: "sessionSourceMedium", stringFilter: { matchType: "PARTIAL_REGEXP", value: "^qa_(setup|deploy)" } } } },
    ] } } },
    aiReferrals: { dimensions: [{ name: "landingPage" }, { name: "sessionSourceMedium" }], metrics: [{ name: "sessions" }], dimensionFilter: { filter: {
      fieldName: "sessionSource", inListFilter: { values: ["chatgpt.com", "chat.openai.com", "perplexity.ai", "copilot.microsoft.com", "claude.ai", "gemini.google.com"] },
    } } },
  };
  const reports = {};
  for (const [name, definition] of Object.entries(definitions)) {
    try {
      const response = await googleJson(session, `https://analyticsdata.googleapis.com/v1beta/${property}:runReport`, { method: "POST", body: {
        dateRanges: [window], ...definition, limit: "1000",
      } });
      reports[name] = { available: true, rows: analyticsRows(response), rowCount: response.rowCount || 0, metadata: response.metadata || null };
    } catch (error) { reports[name] = { available: false, ...safeFailure(error) }; }
  }
  return { connected: true, property, reports, note: "Landing pages y eventos por servicio son medidas distintas. Referrals de IA cubren solo las fuentes identificadas; pruebas no identificadas pueden permanecer." };
}

async function bingReport() {
  let key;
  try { key = await readBingKey(config); } catch (error) { return { connected: false, status: safeFailure(error).status, reason: "API_KEY_ACCESS_UNAVAILABLE" }; }
  const urls = [];
  for (const path of config.routes) {
    try {
      const endpoint = new URL("https://ssl.bing.com/webmaster/api.svc/json/GetUrlInfo");
      endpoint.searchParams.set("siteUrl", `${config.site}/`);
      endpoint.searchParams.set("url", config.site + path);
      endpoint.searchParams.set("apikey", key);
      const response = await fetch(endpoint, { redirect: "error", signal: AbortSignal.timeout(20000) });
      if (!response.ok) { urls.push({ path, available: false, status: response.status }); continue; }
      const data = (await response.json()).d;
      if (!data) { urls.push({ path, available: false, reason: "NO_URL_INFO" }); continue; }
      urls.push({ path, available: true, httpStatus: data.HttpStatus, discoveryDate: bingDate(data.DiscoveryDate),
        lastCrawledDate: bingDate(data.LastCrawledDate), isPage: data.IsPage, anchorCount: data.AnchorCount });
    } catch { urls.push({ path, available: false, reason: "BING_REQUEST_UNAVAILABLE" }); }
  }
  return { connected: urls.some((url) => url.available), urls, note: "GetUrlInfo informa rastreo; sus campos no sustituyen el estado de Bing Index. AI Performance requiere exportación del portal." };
}

function metricsByCategory(report) {
  const sc = report.searchConsole?.performance?.pages;
  const ga = report.ga4?.reports;
  const source = (text) => { try { return new URL(text, config.site).pathname; } catch { return ""; } };
  return categories.map((category) => {
    const pages = (sc?.rows || []).filter((row) => source(row.keys[0]) === category.path);
    const organic = (ga?.organic?.rows || []).filter((row) => source(row.landingPage) === category.path);
    const leads = (ga?.leads?.rows || []).filter((row) => row["customEvent:service"] === category.slug);
    const ai = (ga?.aiReferrals?.rows || []).filter((row) => source(row.landingPage) === category.path);
    const total = (available, rows, field) => available ? rows.reduce((sum, row) => sum + Number(row[field] || 0), 0) : null;
    return { ...category, impressions: total(sc?.available, pages, "impressions"), clicks: total(sc?.available, pages, "clicks"),
      organicSessions: total(ga?.organic?.available, organic, "sessions"), leads: total(ga?.leads?.available, leads, "eventCount"),
      aiReferrals: total(ga?.aiReferrals?.available, ai, "sessions") };
  });
}

async function main() {
  const window = reportWindow(options.start, options.end);
  const report = { generatedAt: new Date().toISOString(), site: config.site, window,
    public: await publicAudit(), searchConsole: null, ga4: null, bing: null };
  if (!options["public-only"]) {
    try {
      const session = await metricsSession(config);
      try { report.searchConsole = await consoleReport(session, window, options["inspect-all"] ? report.public.pages.map((page) => page.path) : config.routes); } catch (error) { report.searchConsole = safeFailure(error); }
      try { report.ga4 = await ga4Report(session, window); } catch (error) { report.ga4 = safeFailure(error); }
    } catch (error) { report.searchConsole = safeFailure(error); report.ga4 = safeFailure(error); }
    report.bing = await bingReport();
  }
  report.categories = metricsByCategory(report);
  report.status = reportStatus(report, { publicOnly: Boolean(options["public-only"]) });
  let output;
  if (options.save) {
    const directory = join(root, ".local", "seo", "reports");
    await mkdir(directory, { recursive: true });
    const stem = report.generatedAt.replace(/[:.]/g, "-");
    const jsonPath = join(directory, `${stem}.json`);
    await writeFile(jsonPath, JSON.stringify(report, null, 2) + "\n", "utf8");
    await writeFile(join(directory, "latest.json"), JSON.stringify(report, null, 2) + "\n", "utf8");
    const header = ["inicio_periodo", "fin_periodo", "categoria", "url_principal", "impresiones_sin_marca_chile", "clics_sin_marca_chile", "sesiones_organicas", "contactos_generate_lead", "reuniones_confirmadas", "oportunidades_calificadas", "citas_bing", "referrals_ia", "fuente_y_filtros", "observaciones"];
    const rows = report.categories.map((category) => [window.startDate, window.endDate, category.category, category.path,
      category.impressions, category.clicks, category.organicSessions, category.leads, null, null, null, category.aiReferrals,
      "APIs GSC Web Chile sin marca y GA4 cuando disponibles", "Vacío: no consultado o no disponible. Cero: API disponible sin registros en ese corte. Datos pueden tener desfase y límites de filas."]);
    const csv = [header, ...rows].map((row) => row.map(csvCell).join(";")).join("\n") + "\n";
    await writeFile(join(directory, `${stem}.csv`), csv, "utf8");
    await writeFile(join(directory, "latest.csv"), csv, "utf8");
    output = { json: jsonPath, csv: join(directory, `${stem}.csv`) };
  }
  console.log(JSON.stringify({ generatedAt: report.generatedAt, window, status: report.status, public: report.public.summary,
    sitemap: report.public.sitemap, publicIssues: report.public.pages.filter((page) => !page.ok),
    google: { connected: report.searchConsole?.connected || false, inspectionScope: report.searchConsole?.inspectionScope || null, indexed: report.searchConsole?.inspections?.filter((item) => item.verdict === "PASS").length ?? null,
      checked: report.searchConsole?.inspections?.length ?? null, inspectionFailures: report.searchConsole?.inspections?.filter((item) => !item.verdict).length ?? null, reason: report.searchConsole?.reason || null },
    ga4: { connected: report.ga4?.connected || false, property: report.ga4?.property || null, reason: report.ga4?.reason || null },
    bing: { connected: report.bing?.connected || false, reason: report.bing?.reason || null }, categories: report.categories, output }, null, 2));
  if (!report.status.complete) process.exitCode = 1;
}

main().catch(() => { console.error("No se pudo completar el reporte SEO. Revisar configuración y acceso; no se imprimen credenciales ni URL privadas."); process.exitCode = 1; });
