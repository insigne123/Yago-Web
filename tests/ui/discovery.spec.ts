import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const guide = "/blog/evaluar-piloto-ocr-precision-costos";
const integration = "/blog/integrar-ia-procesos-empresa";

test.beforeEach(async ({ page }) => {
  await page.route("**/www.googletagmanager.com/gtag/js?*", (route) => route.fulfill({ status: 200, contentType: "application/javascript", body: "/* no analytics requests in UI checks */" }));
});

test("homepage exposes the priority guides and company directly in its main content", async ({ page, request }) => {
  await page.goto("/");
  const resources = page.locator("main #recursos-para-decidir");
  for (const href of [guide, integration, "/nosotros"]) {
    await expect(resources.locator(`a[href='${href}']`)).toHaveCount(1);
    expect((await request.get(href)).status()).toBe(200);
  }
  const html = await (await request.get("/")).text();
  expect(html).toContain("Preparar la evaluación OCR");
  expect(html).toContain("Conocer YAGO y su forma de trabajo");
});

test("company identity connects remote service, products, deliverables and visible FAQ", async ({ page }) => {
  await page.goto("/nosotros");
  await expect(page.locator("#empresa")).toContainText("Yago SpA es una empresa chilena");
  await expect(page.locator("#empresa")).toContainText("Atención remota");
  await expect(page.locator("#productos-y-entregables a[href='/axis']")).toHaveCount(1);
  await expect(page.locator("#productos-y-entregables")).toContainText("criterios de aceptación");
  const json = JSON.parse((await page.locator("#jsonld-about").textContent())!);
  expect(json["@graph"][0].dateModified).toBe("2026-10-26");
  const faq = JSON.parse((await page.locator("#jsonld-about-faq").textContent())!);
  for (const question of faq.mainEntity) await expect(page.locator("#faq").getByText(question.acceptedAnswer.text, { exact: true })).toBeAttached();
});

test("AXIS explains each result state without presenting an official certificate", async ({ page }) => {
  await page.goto("/axis");
  const scope = page.locator("#alcance-y-resultados");
  await expect(scope.getByRole("rowheader")).toHaveText(["Con hallazgo", "Sin hallazgo", "Pendiente"]);
  await expect(scope).toContainText("No emite certificados oficiales");
  await expect(scope.locator("a[href='/nosotros']")).toHaveCount(1);
  const json = JSON.parse((await page.locator("#jsonld-automation-axis").textContent())!);
  expect(json.applicationSubCategory).toBe("Consulta de causas penales públicas");
  expect(json.dateModified).toBe("2026-10-26");
  await expect(page.locator("#resumen time")).toHaveAttribute("datetime", "2026-10-26");
});

test("OCR evaluation offers a working empty template and identifies its downloadable resource", async ({ page, request }) => {
  await page.goto(guide);
  const csvResponse = await request.get("/recursos/plantilla-evaluacion-ocr.csv");
  expect(csvResponse.status()).toBe(200);
  const rows = (await csvResponse.text()).trim().split(/\r?\n/).map((row) => row.split(";"));
  expect(rows[0]).toContain("valor_esperado");
  expect(rows[0]).toContain("segundos_revision");
  expect(rows.every((row) => row.length === 9)).toBeTruthy();
  expect(rows.slice(1).every((row) => row.slice(3).every((value) => value === ""))).toBeTruthy();
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: "Descargar plantilla de evaluación OCR", exact: true }).click();
  expect((await downloadPromise).suggestedFilename()).toBe("plantilla-evaluacion-ocr.csv");
  const article = JSON.parse((await page.locator("script[id^='jsonld-article-']").textContent())!);
  expect(article.associatedMedia.encodingFormat).toBe("text/csv");
  expect(article.dateModified).toBe("2026-10-26");
});

test("integration guide adds a concrete acceptance example and contextual routes", async ({ page }) => {
  await page.goto(integration);
  const article = page.locator("article").first();
  await expect(article.getByRole("heading", { name: "Ejemplo de alcance: una factura conectada al ERP" })).toBeAttached();
  await expect(article).toContainText("no un caso de cliente ni un resultado medido");
  await expect(article.locator("a[href='/nosotros']")).toHaveCount(1);
  await expect(article.locator(`a[href='${guide}']`)).toHaveCount(1);
});

test("sitemap dates and assistant text match the changed public content", async ({ request }) => {
  const sitemap = await (await request.get("/sitemap.xml")).text();
  for (const path of ["/", "/nosotros", "/axis", guide, integration]) {
    const entry = sitemap.split("<url>").find((item) => item.includes(`<loc>https://yago.cl${path}</loc>`));
    expect(entry).toContain("<lastmod>2026-10-26");
  }
  const full = await (await request.get("/llms-full.txt")).text();
  for (const text of ["Yago SpA: modalidad, productos y entregables", "Cómo interpretar el resultado de AXIS", "una factura conectada al ERP", "/recursos/plantilla-evaluacion-ocr.csv"]) expect(full).toContain(text);
});

test("existing SADT and the application guide retain their distinct scope", async ({ page }) => {
  await page.goto("/sadt");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Portal Mi DT");
  await expect(page.locator("#alcance-y-resultados")).toHaveCount(0);
  await page.goto("/blog/apps-ia-desarrollo-asistido-diferencias");
  await expect(page.getByRole("table")).toHaveCount(1);
  await expect(page.getByRole("columnheader", { name: "Desarrollo asistido por IA", exact: true })).toBeAttached();
});

test("@a11y changed company, product and guide templates meet WCAG A/AA checks", async ({ page }) => {
  for (const route of ["/nosotros", "/axis", guide, integration]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
    expect(results.violations, route).toEqual([]);
  }
});
