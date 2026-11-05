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

test("footer links the most searched guides from the whole site", async ({ page }) => {
  await page.goto("/precios");
  const guides = page.locator("footer").getByRole("navigation", { name: "Guías" });
  for (const slug of ["certificados-f30-y-f30-1-diferencias", "registro-contratos-terminos-mi-dt-plazos", "ocr-con-ia-digitalizar-documentos", "agentes-de-ia-para-empresas", "que-es-la-automatizacion-de-procesos-con-ia"]) {
    await expect(guides.locator(`a[href="/blog/${slug}"]`)).toHaveCount(1);
  }
});

for (const route of ["/", "/ocr", "/sadt", "/servicios/agentes-ia", "/productos/sofia", "/grandes-empresas", "/blog/certificados-f30-y-f30-1-diferencias"]) {
  test(`${route} has a title and description that fit in a search result`, async ({ page }) => {
    await page.goto(route);
    expect((await page.title()).length).toBeLessThanOrEqual(65);
    const description = await page.locator("meta[name='description']").getAttribute("content");
    expect(description!.length).toBeGreaterThanOrEqual(110);
    expect(description!.length).toBeLessThanOrEqual(160);
  });
}

test("the F30 guide leads with the current rule and answers the questions people ask", async ({ page }) => {
  await page.goto("/blog/certificados-f30-y-f30-1-diferencias");
  await expect(page).toHaveTitle("F30 y F30-1: diferencia y cómo sacarlos en Mi DT (2026)");
  await expect(page.locator("meta[name='description']")).toHaveAttribute("content", /^Desde junio de 2026 el F30 en línea se pide solo en Mi DT/);
  await expect(page.getByRole("heading", { level: 2, name: "Qué es el certificado F30-1 y qué acredita" })).toBeAttached();
  await expect(page.getByText("¿Qué es el F30-1?", { exact: true })).toBeAttached();
  await expect(page.getByText(/también se puede pedir en una oficina de la Inspección del Trabajo/)).toBeAttached();
  const planilla = page.getByRole("link", { name: "Descargar planilla de control de F30 y F30-1", exact: true });
  await expect(planilla).toHaveAttribute("download", "");
  const respuesta = await page.request.get((await planilla.getAttribute("href"))!);
  expect(respuesta.status()).toBe(200);
  expect((await respuesta.body()).subarray(0, 2).toString()).toBe("PK");
  await expect(page.getByRole("heading", { level: 2, name: "¿Qué diferencia hay entre el F30 y el F30-1?" })).toBeAttached();
  await expect(page.getByRole("heading", { level: 2, name: "Cómo sacar el F30 por internet en Mi DT, paso a paso" })).toBeAttached();
});

test("the Mi DT comparison discloses its author and lists its sources", async ({ page, request }) => {
  await page.goto("/blog/automatizar-mi-dt-opciones-chile");
  await expect(page).toHaveTitle("Automatizar Mi DT: opciones en Chile y cómo elegir (2026)");
  await expect(page.getByText(/esta guía la escribe YAGO, que vende SADT/)).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Comparación de proveedores para automatizar Mi DT" })).toBeAttached();
  const filas = page.locator("table tbody tr");
  expect(await filas.count()).toBe(12);
  await expect(page.locator("table")).toContainText("SADT (YAGO)");
  await expect(page.locator("a[href='https://www.tecnozero.cl/portal-dt']")).toBeAttached();
  expect(await (await request.get("/sitemap.xml")).text()).toContain("/blog/automatizar-mi-dt-opciones-chile");
  await page.goto("/sadt");
  await expect(page.locator("a[href='/blog/automatizar-mi-dt-opciones-chile']").first()).toBeAttached();
});

test("the company identity is explicit for search engines and AI assistants", async ({ page, request }) => {
  await page.goto("/nosotros");
  const empresa = page.locator("#empresa");
  await expect(empresa).toContainText("Sociedad de Inversiones Yago SpA");
  await expect(empresa).toContainText("Nicolas Yarur");
  await expect(empresa).toContainText("2 a 10 personas");
  await expect(empresa).toContainText("No es Yapo.cl");
  await expect(page.locator("#faq").getByRole("button", { name: "¿YAGO es lo mismo que Yapo.cl?" })).toBeVisible();

  const grafos = await page.locator("script[type='application/ld+json']").allTextContents();
  const organizacion = grafos.map((texto) => JSON.parse(texto)).flatMap((dato) => dato["@graph"] ?? [dato]).find((nodo) => nodo["@type"] === "Organization");
  expect(organizacion.founder.name).toBe("Nicolas Yarur");
  expect(organizacion.numberOfEmployees).toMatchObject({ minValue: 2, maxValue: 10 });
  expect(organizacion.disambiguatingDescription).toContain("No es Yapo.cl");

  const llms = await (await request.get("/llms.txt")).text();
  for (const dato of ["Fundador: Nicolas Yarur", "Equipo: 2 a 10 personas", "No confundir:", "SOF.IA (asistente con documentos internos)"]) expect(llms).toContain(dato);
});

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

test("/grandes-empresas states the fit, the controls and the procurement data", async ({ page }) => {
  await page.goto("/grandes-empresas");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("grandes empresas");
  const fit = page.locator("#donde-encajamos");
  for (const href of ["/servicios/agentes-ia", "/sadt", "/axis", "/ocr", "/servicios/auditoria-ia"]) await expect(fit.locator(`a[href='${href}']`)).toBeAttached();
  await expect(fit.getByRole("heading", { name: "Cuándo conviene otro proveedor." })).toBeAttached();
  await expect(page.locator("#como-parte ol > li")).toHaveCount(5);
  await expect(page.locator("#ti-y-seguridad dt")).toHaveCount(6);
  const legal = page.locator("#compras-y-legal");
  await expect(legal).toContainText("Sociedad de Inversiones Yago SpA");
  await expect(legal).toContainText("77.711.804-8");
  await expect(legal).toContainText("Programa de Integridad");
  const schemas = await page.locator("script[type='application/ld+json']").evaluateAll((items) => items.map((item) => JSON.parse(item.textContent || "{}")));
  const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
  expect(faq.mainEntity.map((item: { name: string }) => item.name)).toContain("¿YAGO trabaja con grandes empresas?");
  const webPage = schemas.find((schema) => schema["@id"]?.endsWith("/grandes-empresas#page"));
  expect(webPage.audience.name).toBe("Grandes empresas en Chile");
});
