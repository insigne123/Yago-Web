import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.route("**/www.googletagmanager.com/gtag/js?*", (route) => route.fulfill({ status: 200, contentType: "application/javascript", body: "/* no analytics requests in UI checks */" }));
});

test("blog keeps every guide reachable once and offers four working topic anchors", async ({ page }) => {
  await page.goto("/blog");
  const articleLinks = await page.locator("#articulos article a").evaluateAll((links) => links.map((link) => link.getAttribute("href")));
  expect(articleLinks.length).toBeGreaterThanOrEqual(17);
  expect(new Set(articleLinks).size).toBe(articleLinks.length);
  const navigation = page.getByRole("navigation", { name: "Guías por necesidad" });
  const anchors = await navigation.locator("a").evaluateAll((links) => links.map((link) => link.getAttribute("href")!));
  expect(anchors).toHaveLength(4);
  for (const anchor of anchors) await expect(page.locator(anchor)).toBeAttached();
  await navigation.getByRole("link", { name: "OCR y documentos" }).click();
  await expect(page.locator("#guias-documentos h2")).toBeInViewport();
  const schema = JSON.parse((await page.locator("#jsonld-blog-collection").textContent())!);
  expect(schema["@type"]).toBe("CollectionPage");
  expect(schema.mainEntity.numberOfItems).toBe(articleLinks.length);
});

test("service comparison exposes the six needs and all eight catalog routes", async ({ page }) => {
  await page.goto("/servicios");
  const table = page.locator("#elegir-servicio");
  await expect(table.getByRole("rowheader")).toHaveCount(6);
  await expect(table.locator("a[href='/servicios/auditoria-ia']")).toHaveCount(1);
  await expect(table.locator("a[href='/ocr']")).toHaveCount(1);
  await expect(page.locator("#guias-para-evaluar a[href='/blog/agentes-de-ia-para-empresas']")).toHaveCount(1);
  const schema = JSON.parse((await page.locator("#jsonld-service-collection").textContent())!);
  expect(schema.mainEntity.numberOfItems).toBe(8);
  for (const entry of schema.mainEntity.itemListElement) {
    const path = new URL(entry.item.url).pathname;
    await expect(page.locator(`main a[href='${path}']`).first()).toBeAttached();
  }
});

test("product catalog shows two defined products and distinguishes OCR API from the service", async ({ page }) => {
  await page.goto("/productos");
  const products = page.locator("#productos-listos article");
  await expect(products).toHaveCount(2);
  await expect(products.locator("h3")).toHaveText(["SADT", "AXIS"]);
  await expect(page.locator("#elegir-producto").getByRole("rowheader")).toHaveText(["SADT", "AXIS", "OCR Master API", "OCR implementado"]);
  await expect(page.locator("#elegir-producto")).toContainText("Servicio cotizado según documentos y alcance");
  const schema = JSON.parse((await page.locator("#jsonld-productos").textContent())!);
  expect(schema["@type"]).toBe("CollectionPage");
  const urls = schema.mainEntity.itemListElement.map((entry: { item: { url: string } }) => entry.item.url);
  expect(new Set(urls).size).toBe(urls.length);
  expect(urls).toContain("https://yago.cl/ocr-master");
});

test("agent guide explains design choices with sources and connects to the service", async ({ page, request }) => {
  await page.goto("/blog/agentes-de-ia-para-empresas");
  const article = page.locator("article").first();
  await expect(article.getByRole("heading", { name: "Cómo empezar con un piloto acotado" })).toBeAttached();
  await expect(article).toContainText("Son ejemplos de diseño, no casos de clientes");
  await expect(page.locator("a[href='https://www.anthropic.com/research/building-effective-agents']")).toBeAttached();
  await expect(article.locator("a[href='/servicios/agentes-ia']").first()).toBeAttached();
  const schema = JSON.parse((await page.locator("script[id^='jsonld-article-']").textContent())!);
  expect(schema.dateModified).toBe("2026-11-01");
  expect(schema.mentions[0].url).toBe("https://yago.cl/servicios/agentes-ia");
  const full = await (await request.get("/llms-full.txt")).text();
  expect(full).toContain("Cómo empezar con un piloto acotado");
  expect(full).toContain("Servicio cotizado según documentos y alcance");
  const short = await (await request.get("/llms.txt")).text();
  for (const group of ["Automatización y retorno", "Integración, aplicaciones y agentes", "OCR y documentos", "RRHH y Portal Mi DT"]) expect(short).toContain(`### ${group}`);
});

test("homepage gives body links to each collection and retains the OCR entry point", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#recursos-para-decidir a[href='/blog']")).toHaveCount(1);
  await expect(page.locator("#productos a[href='/productos']")).toHaveCount(1);
  await expect(page.locator("#servicios a[href='/servicios']")).toHaveCount(1);
  await expect(page.locator("#productos a[href='/ocr']")).toHaveCount(1);
});

test("@a11y collection pages and agent article keep accessible tables and navigation", async ({ page }) => {
  for (const route of ["/blog", "/servicios", "/productos", "/blog/agentes-de-ia-para-empresas"]) {
    await page.goto(route);
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
    expect(result.violations, route).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), route).toBeTruthy();
  }
});
