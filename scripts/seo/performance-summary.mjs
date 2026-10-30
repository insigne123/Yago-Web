import { readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

const path = process.argv[2];
if (!path) throw new Error("Indica la ruta del reporte Lighthouse JSON.");
const report = JSON.parse(await readFile(resolve(path), "utf8"));
const audits = report.audits || {};
const metrics = {};
for (const name of ["first-contentful-paint", "largest-contentful-paint", "total-blocking-time", "cumulative-layout-shift", "speed-index"]) {
  const audit = audits[name];
  metrics[name] = { value: audit?.numericValue ?? null, unit: audit?.numericUnit || null, display: audit?.displayValue || null };
}
const issues = Object.values(audits).filter((audit) => audit.score !== null && audit.score !== undefined && audit.score < 0.9 && !["manual", "notApplicable", "informative"].includes(audit.scoreDisplayMode));
const summary = {
  fetchedAt: report.fetchTime, requestedUrl: report.requestedUrl, finalUrl: report.finalDisplayedUrl || report.finalUrl,
  lighthouseVersion: report.lighthouseVersion, formFactor: report.configSettings?.formFactor,
  throttlingMethod: report.configSettings?.throttlingMethod,
  scores: Object.fromEntries(Object.entries(report.categories || {}).map(([name, category]) => [name, Math.round(category.score * 100)])),
  metrics, issues: issues.map((audit) => ({ id: audit.id, title: audit.title, description: audit.description, display: audit.displayValue,
    savingsMs: audit.details?.overallSavingsMs, savingsBytes: audit.details?.overallSavingsBytes,
    items: Array.isArray(audit.details?.items) ? audit.details.items.slice(0, 12) : [], })),
  warnings: report.runWarnings || [], runtimeError: report.runtimeError || null,
  note: "Medición de laboratorio local, no Core Web Vitals de campo ni INP real. TBT no equivale a INP.",
};
const output = join(dirname(resolve(path)), path.split(/[\\/]/).pop().replace(/\.json$/, ".summary.json"));
await writeFile(output, JSON.stringify(summary, null, 2) + "\n", "utf8");
console.log(JSON.stringify({ url: summary.requestedUrl, scores: summary.scores, metrics: summary.metrics, issues: summary.issues.map(({ id, title, display, savingsMs }) => ({ id, title, display, savingsMs })), warnings: summary.warnings, runtimeError: summary.runtimeError, output }, null, 2));
