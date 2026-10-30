export const BRAND_PATTERN = "(?i)(yago|sadt|axis|sof[ ._-]?ia|ant[oó]n[ ._-]?ia|ocr[ ._-]?master)";

export function attribute(tag, name) {
  const match = [...tag.matchAll(/([^\s=]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)]
    .find((item) => item[1].toLowerCase() === name.toLowerCase());
  return match ? (match[2] ?? match[3] ?? match[4]) : null;
}

export function auditHtml(url, response) {
  const { body, status, finalUrl, xRobotsTag } = response;
  const links = body.match(/<link\b[^>]*>/gi) || [];
  const canonical = links.filter((tag) => attribute(tag, "rel")?.toLowerCase() === "canonical").map((tag) => attribute(tag, "href"));
  const metas = body.match(/<meta\b[^>]*>/gi) || [];
  const robots = metas.filter((tag) => ["robots", "googlebot", "bingbot"].includes(attribute(tag, "name")?.toLowerCase()))
    .map((tag) => attribute(tag, "content") || "");
  const noindex = [...robots, xRobotsTag || ""].some((value) => /(?:^|[\s,;])(?:noindex|none)(?:$|[\s,;])/i.test(value));
  const jsonldTypes = [];
  let jsonldErrors = 0;
  for (const match of body.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) {
    if (attribute(match[0].slice(0, match[0].indexOf(">") + 1), "type") !== "application/ld+json") continue;
    try {
      const data = JSON.parse(match[1]);
      const nodes = Array.isArray(data) ? data : (data["@graph"] || [data]);
      jsonldTypes.push(...nodes.flatMap((node) => node["@type"] || []));
    } catch { jsonldErrors++; }
  }
  const internalLinks = [...body.matchAll(/<a\b[^>]*>/gi)].flatMap((match) => {
    const href = attribute(match[0], "href");
    if (!href) return [];
    try {
      const link = new URL(href.replaceAll("&amp;", "&"), url);
      return link.origin === new URL(url).origin ? [link.pathname] : [];
    } catch { return []; }
  });
  let canonicalMatches = false;
  try { canonicalMatches = canonical.length === 1 && new URL(canonical[0], url).href === new URL(url).href; } catch { /* Invalid canonical. */ }
  const h1Count = (body.match(/<h1\b/gi) || []).length;
  const workflowPresent = /\bid=["']ejemplo-de-flujo["']/.test(body);
  return {
    path: new URL(url).pathname, status, finalUrl, canonical, canonicalMatches, noindex, h1Count,
    jsonldTypes: [...new Set(jsonldTypes)], jsonldErrors, workflowPresent, internalLinks: [...new Set(internalLinks)],
    ok: status === 200 && canonicalMatches && !noindex && h1Count === 1 && jsonldTypes.length > 0 && jsonldErrors === 0,
  };
}

export function reportWindow(start, end, now = new Date()) {
  const day = 86400000;
  const parts = new Intl.DateTimeFormat("en", { timeZone: "America/Santiago", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now);
  const local = Object.fromEntries(parts.filter((part) => ["year", "month", "day"].includes(part.type)).map((part) => [part.type, part.value]));
  const today = new Date(`${local.year}-${local.month}-${local.day}T00:00:00Z`);
  const endDate = end || new Date(today.getTime() - day).toISOString().slice(0, 10);
  const startDate = start || new Date(new Date(`${endDate}T00:00:00Z`).getTime() - 27 * day).toISOString().slice(0, 10);
  for (const value of [startDate, endDate]) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(Date.parse(`${value}T00:00:00Z`)) || new Date(`${value}T00:00:00Z`).toISOString().slice(0, 10) !== value) {
      throw new Error("Las fechas deben ser fechas reales con formato YYYY-MM-DD.");
    }
  }
  if (startDate > endDate || endDate >= today.toISOString().slice(0, 10)) throw new Error("Usa un período válido que termine como máximo ayer.");
  return { startDate, endDate };
}

export function csvCell(value) {
  const text = value === null || value === undefined ? "" : String(value);
  return /[;"\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

export function safeFailure(error) {
  return { connected: false, status: Number.isInteger(error.status) ? error.status : null, reason: error.reason || "ACCESS_OR_REQUEST_UNAVAILABLE" };
}

export function reportStatus(report, { publicOnly = false } = {}) {
  const missing = [];
  if (!report.public?.pages?.length || report.public.pages.some((page) => !page.ok)) missing.push("publicAudit");
  if (!publicOnly) {
    const console = report.searchConsole;
    if (!console?.connected || !console.inspections?.length || console.inspections.some((item) => !item.verdict)) missing.push("searchConsole.inspections");
    for (const name of ["pages", "queries"]) {
      if (!console?.performance?.[name]?.available) missing.push(`searchConsole.${name}`);
    }
    for (const name of ["organic", "leads", "aiReferrals"]) {
      if (!report.ga4?.connected || !report.ga4.reports?.[name]?.available) missing.push(`ga4.${name}`);
    }
    if (!report.bing?.connected || !report.bing.urls?.length || report.bing.urls.some((item) => !item.available)) missing.push("bing.urlInfo");
  }
  return { complete: missing.length === 0, scope: publicOnly ? "public-only" : "full", missing };
}

export function analyticsRows(response) {
  const dimensions = (response.dimensionHeaders || []).map((item) => item.name);
  const metrics = (response.metricHeaders || []).map((item) => item.name);
  return (response.rows || []).map((row) => Object.fromEntries([
    ...dimensions.map((name, index) => [name, row.dimensionValues?.[index]?.value || ""]),
    ...metrics.map((name, index) => [name, Number(row.metricValues?.[index]?.value || 0)]),
  ]));
}

export function bingDate(value) {
  if (!value) return null;
  const wrapped = /^\/Date\((-?\d+)(?:[+-]\d+)?\)\/$/.exec(value);
  const date = wrapped ? new Date(Number(wrapped[1])) : new Date(value);
  return Number.isNaN(date.getTime()) || date.getUTCFullYear() < 2000 ? null : date.toISOString();
}
