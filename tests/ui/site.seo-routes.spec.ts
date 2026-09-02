import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/soluciones",
  "/productos",
  "/productos/sofia",
  "/servicios",
  "/servicios/automatizacion-procesos",
  "/casos",
  "/proceso",
  "/blog",
  "/blog/que-es-la-automatizacion-de-procesos-con-ia",
  "/ocr",
  "/ocr-master",
  "/sadt",
  "/axis",
  "/privacidad",
  "/terminos",
];

test.describe("public routes and SEO", () => {
  for (const route of routes) {
    test(`${route} has indexable page metadata`, async ({ page }) => {
      const canonicalPattern = route === "/" ? /^https?:\/\/[^/]+\/?$/ : new RegExp(`${route}$`);
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("main#main-content")).toBeAttached();
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);

      const canonical = page.locator("link[rel='canonical']");
      await expect(canonical).toHaveAttribute("href", canonicalPattern);
      await expect(page.locator("meta[property='og:title']")).toHaveAttribute("content", /\S+/);
      await expect(page.locator("meta[property='og:description']")).toHaveAttribute("content", /\S+/);
      await expect(page.locator("meta[property='og:url']")).toHaveAttribute("content", canonicalPattern);
      await expect(page.locator("meta[property='og:image']").first()).toHaveAttribute("content", /^https?:\/\//);
      await expect(page.locator("meta[name='twitter:card']")).toHaveAttribute("content", "summary_large_image");
    });
  }

  test("structured data is valid JSON and connected to YAGO", async ({ page }) => {
    await page.goto("/productos/sofia");
    const scripts = page.locator("script[type='application/ld+json']");
    expect(await scripts.count()).toBeGreaterThanOrEqual(3);

    const documents = await scripts.allTextContents();
    const parsed = documents.map((value) => JSON.parse(value));
    expect(parsed.some((value) => value["@graph"]?.some((node: any) => node["@id"] === "https://yago.cl/#organization"))).toBeTruthy();
    expect(parsed.some((value) => value["@type"] === "BreadcrumbList")).toBeTruthy();
    expect(parsed.some((value) => value["@type"] === "SoftwareApplication")).toBeTruthy();
  });

  test("robots, sitemap and llms discovery files are available", async ({ request }) => {
    const robots = await request.get("/robots.txt");
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toContain("Sitemap: https://yago.cl/sitemap.xml");

    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.status()).toBe(200);
    const sitemapText = await sitemap.text();
    expect(sitemapText).toContain("https://yago.cl/productos");
    expect(sitemapText).toContain("https://yago.cl/casos");
    expect(sitemapText).toContain("https://yago.cl/terminos");

    const llms = await request.get("/llms.txt");
    expect(llms.status()).toBe(200);
    expect(await llms.text()).toContain("YAGO");
  });

  test("unknown route renders the recovery page", async ({ page }) => {
    const response = await page.goto("/ruta-que-no-existe");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1, name: /no está disponible/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /volver al inicio/i })).toBeVisible();
  });
});
