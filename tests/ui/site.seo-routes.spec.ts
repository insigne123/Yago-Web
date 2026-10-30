import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/soluciones",
  "/productos",
  "/productos/sofia",
  "/servicios",
  "/servicios/automatizacion-procesos",
  "/servicios/integracion-ia",
  "/servicios/apps-automatizacion",
  "/servicios/agentes-ia",
  "/nosotros",
  "/glosario",
  "/casos",
  "/precios",
  "/proceso",
  "/blog",
  "/blog/que-es-la-automatizacion-de-procesos-con-ia",
  "/blog/integrar-ia-procesos-empresa",
  "/blog/elegir-proveedor-automatizacion-ia-chile",
  "/blog/apps-ia-desarrollo-asistido-diferencias",
  "/blog/evaluar-piloto-ocr-precision-costos",
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
    const robotsText = await robots.text();
    expect(robotsText).toContain("Sitemap: https://yago.cl/sitemap.xml");
    for (const bot of ["OAI-SearchBot", "ChatGPT-User", "GPTBot", "ClaudeBot", "Claude-Web", "PerplexityBot", "Perplexity-User", "Meta-ExternalAgent"]) {
      expect(robotsText).toContain(bot);
    }

    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.status()).toBe(200);
    const sitemapText = await sitemap.text();
    expect(sitemapText).toContain("https://yago.cl/productos");
    expect(sitemapText).toContain("https://yago.cl/casos");
    expect(sitemapText).toContain("https://yago.cl/terminos");
    for (const path of ["/nosotros", "/servicios/integracion-ia", "/servicios/agentes-ia", "/blog/integrar-ia-procesos-empresa"]) expect(sitemapText).toContain(`https://yago.cl${path}`);

    const llms = await request.get("/llms.txt");
    expect(llms.status()).toBe(200);
    const llmsText = await llms.text();
    expect(llmsText).toContain("YAGO");
    expect(llmsText).toContain("https://yago.cl/sadt");
    expect(llmsText).toContain("https://yago.cl/axis");
    expect(llmsText).toContain("https://yago.cl/blog/ocr-con-ia-digitalizar-documentos");
    expect(llmsText.indexOf("## Servicios")).toBeLessThan(llmsText.indexOf("## Productos"));
    const full = await request.get("/llms-full.txt");
    expect(full.status()).toBe(200);
    const fullText = await full.text();
    expect(fullText).toContain("Integración de IA en empresas");
    expect(fullText).toContain("| Aspecto | Aplicación con IA | Desarrollo asistido por IA |");
  });

  test("key templates use their own social image", async ({ page }) => {
    for (const [route, imagePath] of [
      ["/ocr", "/ocr/opengraph-image"],
      ["/sadt", "/sadt/opengraph-image"],
      ["/axis", "/axis/opengraph-image"],
      ["/blog", "/blog/opengraph-image"],
    ] as const) {
      await page.goto(route);
      await expect(page.locator("meta[property='og:image']").first()).toHaveAttribute("content", new RegExp(`${imagePath}`));
    }
  });

  test("unknown route renders the recovery page", async ({ page }) => {
    const response = await page.goto("/ruta-que-no-existe");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1, name: /no está disponible/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /volver al inicio/i })).toBeVisible();
  });

  test("removed OCR trial surfaces return the recovery page", async ({ page, request }) => {
    const trialPage = await page.goto("/OCR-TEST");
    expect(trialPage?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1, name: /no está disponible/i })).toBeVisible();

    const trialApi = await request.post("/api/mobile-scan/submit", { data: {} });
    expect(trialApi.status()).toBe(404);
  });

  for (const slug of ["automatizacion-procesos", "integracion-ia", "apps-automatizacion", "agentes-ia"]) {
    test(`${slug} exposes service definitions and complete answers`, async ({ page }) => {
      await page.route("**/www.googletagmanager.com/gtag/js?*", (route) => route.fulfill({ status: 200, contentType: "application/javascript", body: "/* no analytics requests in UI checks */" }));
      await page.goto(`/servicios/${slug}`);
      const parsed = (await page.locator("script[type='application/ld+json']").allTextContents()).map((value) => JSON.parse(value));
      const service = parsed.find((value) => value["@type"] === "Service");
      expect(service.areaServed.name).toBe("Chile");
      expect(service.provider["@id"]).toBe("https://yago.cl/#organization");
      await expect(page.locator("#resumen")).toContainText(service.description);
      await expect(page.locator("#alcance-y-costo")).toBeAttached();
      const faq = parsed.find((value) => value["@type"] === "FAQPage");
      for (const question of faq.mainEntity) await expect(page.locator("#faq").getByText(question.acceptedAnswer.text, { exact: true })).toBeAttached();
      await expect(page.locator("#guias a[href^='/blog/']").first()).toBeAttached();
      const flow = page.locator("#ejemplo-de-flujo");
      await expect(flow).toContainText("Flujo de referencia");
      await expect(flow.locator("ol > li")).toHaveCount(4);
      await expect(flow.getByRole("heading", { name: "Cómo comprobamos que funciona" })).toBeAttached();
      await expect(page.locator("#resumen")).toContainText("Entrada");
      await expect(page.locator("#resumen")).toContainText("Salida");
      expect(service.dateModified).toBe(["automatizacion-procesos", "integracion-ia"].includes(slug) ? "2026-10-27" : "2026-10-08");
      const addedGuide = slug === "automatizacion-procesos" ? "/blog/automatizacion-para-pymes-por-donde-partir" : slug === "integracion-ia" ? "/blog/herramientas-automatizacion-n8n-make-ia" : null;
      if (addedGuide) {
        await expect(page.locator(`#guias a[href='${addedGuide}']`)).toHaveCount(1);
        expect((await page.request.get(addedGuide)).status()).toBe(200);
      }
      const flowTitle = await flow.locator("h2").innerText();
      const fullText = await (await page.request.get("/llms-full.txt")).text();
      expect(fullText).toContain(flowTitle);
      for (const href of await flow.locator("a").evaluateAll((links) => links.map((link) => link.getAttribute("href")!))) {
        expect((await page.request.get(href)).status()).toBe(200);
      }
      const relatedImageAlternatives = await page.locator("#otros-servicios img").evaluateAll((images) => images.map((image) => image.getAttribute("alt")));
      expect(relatedImageAlternatives.length).toBeGreaterThan(0);
      expect(relatedImageAlternatives.every((alternative) => Boolean(alternative?.trim()))).toBeTruthy();
    });
  }

  for (const slug of ["auditoria-ia", "paginas-web", "capacitacion-ia"]) {
    test(`${slug} has a complete service page`, async ({ page }) => {
      await page.route("**/www.googletagmanager.com/gtag/js?*", (route) => route.fulfill({ status: 200, contentType: "application/javascript", body: "/* no analytics requests in UI checks */" }));
      await page.goto(`/servicios/${slug}`);
      const parsed = (await page.locator("script[type='application/ld+json']").allTextContents()).map((value) => JSON.parse(value));
      const service = parsed.find((value) => value["@type"] === "Service");
      await expect(page.locator("#resumen")).toContainText(service.description);
      await expect(page.locator("#aplicaciones article")).toHaveCount(3);
      await expect(page.locator("#ejemplo-de-flujo ol > li")).toHaveCount(4);
      await expect(page.locator("#alcance-y-costo")).toBeAttached();
      const faq = parsed.find((value) => value["@type"] === "FAQPage");
      expect(faq.mainEntity.length).toBeGreaterThanOrEqual(5);
      for (const question of faq.mainEntity) await expect(page.locator("#faq").getByText(question.acceptedAnswer.text, { exact: true })).toBeAttached();
      for (const href of await page.locator("#ejemplo-de-flujo a").evaluateAll((links) => links.map((link) => link.getAttribute("href")!))) {
        expect((await page.request.get(href)).status()).toBe(200);
      }
      const words = (await page.locator("main").innerText()).split(/\s+/).filter(Boolean).length;
      expect(words).toBeGreaterThan(800);
    });
  }

  test("pending evidence is absent from public pages and unpublished case routes", async ({ request }) => {
    for (const route of ["/", "/casos", "/llms-full.txt"]) {
      const response = await request.get(route);
      expect(response.status()).toBe(200);
      expect(await response.text()).not.toMatch(/\[Cliente\]|\[XX\]|\[Nombre y apellido\]|\[Cita real/);
    }
    expect((await request.get("/casos/caso-no-publicado")).status()).toBe(404);
  });

  test("service-first positioning connects the company and both development modalities", async ({ page }) => {
    await page.goto("/");
    expect(await page.evaluate(() => Boolean(document.querySelector("#servicios")!.compareDocumentPosition(document.querySelector("#productos")!) & Node.DOCUMENT_POSITION_FOLLOWING))).toBeTruthy();
    const documents = (await page.locator("script[type='application/ld+json']").allTextContents()).map((value) => JSON.parse(value));
    const organization = documents.flatMap((value) => value["@graph"] || []).find((value) => value["@type"] === "Organization");
    expect(organization.description).toContain("integración de inteligencia artificial");
    expect(organization.sameAs).toContain("https://clutch.co/profile/yago");
    expect(organization.hasOfferCatalog.itemListElement.some((offer: any) => offer.itemOffered.url === "https://yago.cl/servicios/integracion-ia")).toBeTruthy();
    expect(organization.aggregateRating).toBeUndefined();
    await page.goto("/nosotros");
    await expect(page.locator("#perfiles a[href='https://clutch.co/profile/yago']")).toBeVisible();
    await page.goto("/blog/apps-ia-desarrollo-asistido-diferencias");
    await expect(page.getByRole("table")).toHaveCount(1);
    await expect(page.getByRole("columnheader", { name: "Desarrollo asistido por IA", exact: true })).toBeAttached();
    await expect(page.locator("article a[href='/servicios/apps-automatizacion']")).toBeAttached();
    const article = (await page.locator("script[type='application/ld+json']").allTextContents()).map((value) => JSON.parse(value)).find((value) => value["@type"] === "BlogPosting");
    expect(article.author.url).toBe("https://yago.cl/nosotros#nicolas-yarur");
    expect(article.mentions[0]["@type"]).toBe("Service");
  });

  test("author identity connects the visible profile, article metadata and external profiles", async ({ page, request }) => {
    await page.goto("/nosotros");
    await expect(page.locator("#nicolas-yarur")).toContainText("Nicolas Yarur");
    await expect(page.locator("#nicolas-yarur a")).toHaveAttribute("href", "https://www.linkedin.com/in/nicolas-yarur/");
    await expect(page.locator("#perfiles a[href='https://www.linkedin.com/company/yago-spa']")).toBeVisible();
    const graph = (await page.locator("script[type='application/ld+json']").allTextContents()).flatMap((value) => JSON.parse(value)["@graph"] || []);
    const person = graph.find((node) => node["@type"] === "Person");
    const organization = graph.find((node) => node["@type"] === "Organization");
    expect(person["@id"]).toBe("https://yago.cl/nosotros#nicolas-yarur");
    expect(person.sameAs).toEqual(["https://www.linkedin.com/in/nicolas-yarur/"]);
    expect(organization.sameAs).toContain("https://www.linkedin.com/company/yago-spa");
    await page.goto("/blog/integrar-ia-procesos-empresa");
    await expect(page.locator("#inicio a[href='/nosotros#nicolas-yarur']")).toHaveText("Nicolas Yarur");
    await expect(page.locator("#sobre-el-autor")).toContainText(person.description);
    await expect(page.locator("meta[name='author']")).toHaveAttribute("content", "Nicolas Yarur");
    const article = (await page.locator("script[type='application/ld+json']").allTextContents()).map((value) => JSON.parse(value)).find((node) => node["@type"] === "BlogPosting");
    expect(article.author).toEqual(person);
    expect(article.publisher["@id"]).toBe("https://yago.cl/#organization");
    const fullText = await (await request.get("/llms-full.txt")).text();
    expect(fullText).toContain("Autor: Nicolas Yarur");
    expect(fullText).toContain("https://www.linkedin.com/company/yago-spa");
    expect(fullText).toContain("https://www.linkedin.com/in/nicolas-yarur/");
  });
});
