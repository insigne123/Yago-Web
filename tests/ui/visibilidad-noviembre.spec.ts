import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.route("**/www.googletagmanager.com/gtag/js?*", (route) => route.fulfill({ status: 200, contentType: "application/javascript", body: "/* no analytics requests in UI checks */" }));
});

const GUIDES = [
  "ocr-con-ia-digitalizar-documentos",
  "cuanto-cuesta-digitalizar-documentos",
  "validez-legal-documentos-digitalizados-chile",
  "certificados-f30-y-f30-1-diferencias",
  "control-contratistas-subcontratacion-f30-1",
  "finiquito-electronico-mi-dt-plazos",
  "que-es-la-automatizacion-de-procesos-con-ia",
  "agentes-de-ia-para-empresas",
];

for (const slug of GUIDES) {
  test(`/blog/${slug} shows its FAQ with FAQPage schema and sources`, async ({ page }) => {
    const response = await page.goto(`/blog/${slug}`);
    expect(response?.status()).toBe(200);
    await expect(page.locator("#preguntas-frecuentes")).toBeVisible();
    const faq = JSON.parse((await page.locator(`#jsonld-faq-${slug}`).textContent())!);
    expect(faq["@type"]).toBe("FAQPage");
    expect(faq.mainEntity.length).toBeGreaterThanOrEqual(5);
    for (const item of faq.mainEntity) await expect(page.locator("#articulo h3", { hasText: item.name })).toHaveCount(1);
    expect(await page.locator("#fuentes-articulo ~ ol a").count()).toBeGreaterThanOrEqual(2);
    const words = (await page.locator("#articulo article").innerText()).split(/\s+/).length;
    expect(words).toBeGreaterThan(1300);
    // El índice lateral se oculta en móvil: se busca por CSS, que no filtra elementos ocultos.
    await expect(page.locator("nav[aria-label='Contenido del artículo'] a[href='#preguntas-frecuentes']")).toBeAttached();
  });
}

test("/ocr leads with document digitization and links its guides", async ({ page }) => {
  await page.goto("/ocr");
  await expect(page).toHaveTitle(/^Digitalización de documentos/);
  const section = page.locator("#servicio-digitalizacion");
  await expect(section.getByRole("heading", { level: 2 })).toContainText("digitalización de documentos");
  const guides = await section.getByRole("navigation").locator("a").evaluateAll((links) => links.map((link) => link.getAttribute("href")!));
  expect(guides).toHaveLength(3);
  for (const href of guides) expect((await page.request.get(href)).status()).toBe(200);
  await expect(page.locator("#faq").getByRole("button", { name: "¿En qué se diferencia de un servicio de escaneo de documentos?" })).toBeVisible();
});

for (const slug of ["automatizacion-finanzas", "automatizacion-reportes", "automatizacion-para-logistica", "automatizacion-aprobaciones"]) {
  test(`/soluciones/${slug} shows scenarios, a practical guide and extended FAQ`, async ({ page }) => {
    await page.goto(`/soluciones/${slug}`);
    expect(await page.locator("#ejemplos li").count()).toBeGreaterThanOrEqual(3);
    expect(await page.locator("#guia article").count()).toBeGreaterThanOrEqual(3);
    const faq = JSON.parse((await page.locator(`#jsonld-solution-faq-${slug}`).textContent())!);
    expect(faq.mainEntity.length).toBeGreaterThanOrEqual(6);
    await expect(page.getByText(/Contenido revisado en noviembre de 2026/)).toBeVisible();
    const words = (await page.locator("main#main-content").innerText()).split(/\s+/).length;
    expect(words).toBeGreaterThan(1200);
  });
}

test("footer links every area solution page from the whole site", async ({ page }) => {
  await page.goto("/blog");
  const footer = page.locator("footer");
  for (const href of ["/soluciones/automatizacion-finanzas", "/soluciones/automatizacion-aprobaciones", "/soluciones/automatizacion-reportes", "/soluciones/automatizacion-para-logistica"]) {
    await expect(footer.locator(`a[href="${href}"]`)).toHaveCount(1);
  }
});

test("glossary defines the new labor and document terms with sources", async ({ page }) => {
  await page.goto("/glosario");
  for (const id of ["microforma", "responsabilidad-solidaria-subsidiaria", "derecho-de-retencion", "finiquito-electronico"]) {
    await expect(page.locator(`[id="${id}"]`)).toBeAttached();
  }
  await expect(page.locator("time").first()).toHaveAttribute("datetime", "2026-11-01");
});
