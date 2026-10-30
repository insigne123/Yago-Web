import assert from "node:assert/strict";
import test from "node:test";
import { analyticsRows, auditHtml, bingDate, BRAND_PATTERN, csvCell, reportStatus, reportWindow, safeFailure } from "../../scripts/seo/report-utils.mjs";

const response = (body, extra = {}) => ({ status: 200, finalUrl: "https://yago.cl/", xRobotsTag: null, body, ...extra });
const page = `<link href='https://yago.cl' rel='canonical'><h1>YAGO</h1><script type='application/ld+json'>{"@type":"Organization"}</script>`;

test("home URL normalization, attribute order and graph types are supported", () => {
  const result = auditHtml("https://yago.cl/", response(page));
  assert.equal(result.ok, true);
  assert.equal(result.canonicalMatches, true);
  assert.deepEqual(result.jsonldTypes, ["Organization"]);
});

test("noindex, none and header directives fail the audit without treating snippets as directives", () => {
  for (const directive of ["noindex, follow", "none", "max-snippet:50, noindex"]) {
    assert.equal(auditHtml("https://yago.cl/", response(page + `<meta content='${directive}' name='googlebot'>`)).noindex, true);
  }
  assert.equal(auditHtml("https://yago.cl/", response(page, { xRobotsTag: "noindex" })).ok, false);
  assert.equal(auditHtml("https://yago.cl/", response(page + `<meta name='robots' content='index, max-snippet:-1'>`)).ok, true);
});

test("broken schema, wrong canonical and unsuccessful HTTP remain separate failures", () => {
  assert.equal(auditHtml("https://yago.cl/", response(page, { status: 404 })).ok, false);
  assert.equal(auditHtml("https://yago.cl/ocr", response(page)).canonicalMatches, false);
  const bad = auditHtml("https://yago.cl/", response(page + `<script type='application/ld+json'>{broken}</script>`));
  assert.equal(bad.jsonldErrors, 1);
  assert.equal(bad.ok, false);
});

test("contextual links resolve fragments and queries without collecting external domains", () => {
  const result = auditHtml("https://yago.cl/", response(page + `<a href='/ocr?utm_source=test#faq'>OCR</a><a href='https://another.example/ocr'>Other</a><section id='ejemplo-de-flujo'></section>`));
  assert.deepEqual(result.internalLinks, ["/ocr"]);
  assert.equal(result.workflowPresent, true);
});

test("report dates end yesterday and reject invalid calendar dates", () => {
  const now = new Date("2026-10-08T18:00:00Z");
  assert.deepEqual(reportWindow(null, null, now), { startDate: "2026-09-10", endDate: "2026-10-07" });
  assert.throws(() => reportWindow("2026-02-30", "2026-10-07", now));
  assert.throws(() => reportWindow("2026-10-08", "2026-10-08", now));
  assert.deepEqual(reportWindow(null, null, new Date("2026-10-09T01:00:00Z")), { startDate: "2026-09-10", endDate: "2026-10-07" });
});

test("CSV preserves missing values separately from measured zero and escapes delimiters", () => {
  assert.equal(csvCell(null), "");
  assert.equal(csvCell(0), "0");
  assert.equal(csvCell('a;"b"'), '"a;""b"""');
  assert.deepEqual(safeFailure(new Error("private-token-or-URL")), { connected: false, status: null, reason: "ACCESS_OR_REQUEST_UNAVAILABLE" });
  assert.equal(JSON.stringify(safeFailure(new Error("private-token-or-URL"))).includes("private-token"), false);
});

test("analytics response values are interpreted by named headers", () => {
  assert.deepEqual(analyticsRows({ dimensionHeaders: [{ name: "landingPage" }], metricHeaders: [{ name: "sessions" }], rows: [{ dimensionValues: [{ value: "/ocr" }], metricValues: [{ value: "3" }] }] }), [{ landingPage: "/ocr", sessions: 3 }]);
  assert.deepEqual(analyticsRows({}), []);
});

test("brand exclusion recognizes spaced product names without excluding generic agent searches", () => {
  const regex = new RegExp(BRAND_PATTERN.replace(/^\(\?i\)/, ""), "i");
  for (const query of ["YAGO OCR", "anton ia", "ANTON.IA", "SOF IA", "OCR Master"]) assert.equal(regex.test(query), true);
  for (const query of ["agentes de ia para empresas", "automatización de procesos chile", "dt api"]) assert.equal(regex.test(query), false);
});

test("Bing date wrappers and unset sentinel dates do not become false crawl evidence", () => {
  assert.equal(bingDate("/Date(1791158400000)/"), "2026-10-05T00:00:00.000Z");
  assert.equal(bingDate("/Date(-62135596800000)/"), null);
  assert.equal(bingDate("not a date"), null);
  assert.equal(bingDate(null), null);
});

test("an expired session cannot produce a complete report even when every public page passes", () => {
  const result = reportStatus({ public: { pages: [{ ok: true }] }, searchConsole: safeFailure(new Error()), ga4: safeFailure(new Error()), bing: { connected: false } });
  assert.equal(result.complete, false);
  assert.equal(result.scope, "full");
  for (const source of ["searchConsole.inspections", "searchConsole.pages", "ga4.organic", "ga4.leads", "bing.urlInfo"]) {
    assert.ok(result.missing.includes(source));
  }
  assert.equal(result.missing.includes("publicAudit"), false);
});

test("collected zero metrics and a known nonindexed URL are valid data, while partial reads remain incomplete", () => {
  const available = { available: true, rows: [] };
  const report = {
    public: { pages: [{ ok: true }] },
    searchConsole: { connected: true, inspections: [{ verdict: "NEUTRAL" }], performance: { pages: available, queries: available } },
    ga4: { connected: true, reports: { organic: available, leads: available, aiReferrals: available } },
    bing: { connected: true, urls: [{ available: true }] },
  };
  assert.deepEqual(reportStatus(report), { complete: true, scope: "full", missing: [] });
  report.bing.urls.push({ available: false });
  report.ga4.reports.leads = { available: false };
  assert.deepEqual(reportStatus(report).missing, ["ga4.leads", "bing.urlInfo"]);
});

test("public-only audits explicitly exclude private metrics from completeness", () => {
  assert.deepEqual(reportStatus({ public: { pages: [{ ok: true }] } }, { publicOnly: true }), { complete: true, scope: "public-only", missing: [] });
  assert.equal(reportStatus({ public: { pages: [{ ok: false }] } }, { publicOnly: true }).complete, false);
});
