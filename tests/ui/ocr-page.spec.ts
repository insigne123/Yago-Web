import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

type OcrTestWindow = Window & { googleCalls: unknown[][] };

test.describe("ocr landing", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("**/www.googletagmanager.com/gtag/js?*", (route) => route.fulfill({ status: 200, contentType: "application/javascript", body: "/* no analytics requests in UI checks */" }));
    await page.addInitScript(() => {
      const target = window as unknown as OcrTestWindow;
      target.googleCalls = [];
      target.gtag = (...args) => target.googleCalls.push(args);
    });
  });

  test("renders core OCR conversion content", async ({ page }, testInfo) => {
    await page.goto("/ocr");

    await expect(page).toHaveTitle(/^Digitalización de documentos con OCR/i);
    await expect(page.getByRole("heading", { level: 1, name: /Digitalización de documentos con OCR/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /^Solicitar evaluación$/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Hablar por WhatsApp/i }).first()).toBeVisible();
    await expect(page.locator("#problema")).toBeAttached();
    await expect(page.locator("#como-funciona")).toBeAttached();
    await expect(page.locator("#casos-de-uso")).toBeAttached();
    await expect(page.locator("#formulario")).toBeAttached();
    const example = page.getByRole("figure", { name: "Una factura, de entrada a salida." });
    await expect(example).toContainText("Ejemplo ilustrativo · datos ficticios");
    await expect(example).toContainText("Orden de compra no identificada");
    await expect(example).toContainText("La carga queda pendiente");
    await expect(example.locator("ol > li")).toHaveCount(4);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
    await page.screenshot({ path: testInfo.outputPath("ocr-hero.png") });
  });

  test("scrolls to the OCR form from the primary CTA", async ({ page }) => {
    await page.goto("/ocr");

    await page.locator("#inicio").getByRole("link", { name: /^Solicitar evaluación$/i }).click();

    await expect(page.locator("#formulario")).toBeInViewport();
  });

  test("connects related capabilities in readable HTML and matching assistant content", async ({ page, request }, testInfo) => {
    await page.goto("/ocr");
    const bridge = page.locator("#mas-que-ocr");
    const services = ["integracion-ia", "automatizacion-procesos", "apps-automatizacion", "agentes-ia"];
    for (const slug of services) {
      const link = bridge.locator(`a[href='/servicios/${slug}']`);
      await expect(link).toHaveCount(1);
      expect((await request.get(`/servicios/${slug}`)).status()).toBe(200);
    }
    await expect(bridge.getByRole("link", { name: "Conoce cómo trabaja YAGO" })).toHaveAttribute("href", "/nosotros");
    await bridge.scrollIntoViewIfNeeded();
    await bridge.screenshot({ path: testInfo.outputPath("ocr-capabilities.png") });

    const html = await (await request.get("/ocr")).text();
    expect(html).toContain("Ejemplo ilustrativo · datos ficticios");
    expect(html).toContain("Podemos conectar lo que sigue");
    const schema = await page.locator("#jsonld-ocr-service").textContent();
    expect(JSON.parse(schema!).dateModified).toBe("2026-11-05");
    await expect(page.locator("#resumen time")).toHaveAttribute("datetime", "2026-11-05");
    const full = await (await request.get("/llms-full.txt")).text();
    expect(full).toContain("### Una factura, de entrada a salida.");
    expect(full).toContain("Excepción: Orden de compra no identificada");
    expect(full).toContain("### Leer el documento es el primer paso. Podemos conectar lo que sigue.");
  });

  test("measures a capability click and preserves OCR entry attribution through the contact journey", async ({ page }) => {
    await page.goto("/ocr?utm_source=qa_deploy&utm_medium=internal");
    await expect.poll(() => page.evaluate(() => Boolean(window.localStorage.getItem("yago_attribution_v1")))).toBeTruthy();
    await page.locator("#mas-que-ocr a[href='/servicios/integracion-ia']").click();
    await expect(page).toHaveURL(/\/servicios\/integracion-ia$/);
    const events = await page.evaluate(() => (window as unknown as OcrTestWindow).googleCalls);
    expect(events.filter((call) => call[1] === "ocr_capability_click")).toEqual([
      ["event", "ocr_capability_click", { service: "integracion-ia", location: "ocr_capabilities" }],
    ]);
    // El CTA principal del servicio puede ir a la agenda externa; comprobar
    // la atribución cuando el visitante continúa al formulario web.
    await page.goto("/?servicio=integracion-ia#contacto");
    await expect(page.getByRole("radio", { name: "Integración de IA", exact: true })).toBeChecked();
    await expect(page.locator("#contacto input[name='ft_landing']")).toHaveValue("/ocr");
    await expect(page.locator("#contacto input[name='ft_utm_source']")).toHaveValue("qa_deploy");
  });

  test("evaluation submits the process need and records one lead without sending form contents to GA4", async ({ page }) => {
    let submitted = "";
    await page.route("**/api/contact", async (route) => {
      submitted = route.request().postData() || "";
      await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, leadId: "ocr-evaluation-test" }) });
    });
    await page.goto("/ocr?utm_source=qa_deploy&utm_medium=internal#formulario");
    await page.getByLabel("Nombre", { exact: true }).fill("Persona de prueba");
    await page.getByRole("textbox", { name: "Empresa", exact: true }).fill("Empresa de ejemplo");
    await page.getByLabel("Email de trabajo", { exact: true }).fill("persona@example.com");
    await page.getByLabel("Tipo de documento", { exact: true }).selectOption("Facturas");
    await page.getByLabel("Volumen mensual", { exact: true }).selectOption("500 a 2.000 documentos / mes");
    await page.getByLabel(/Qué debería pasar después de leer los documentos/).fill("Revisar montos y conectar los datos a nuestro ERP.");
    await page.getByRole("button", { name: "Solicitar evaluación", exact: true }).click();
    await expect(page.locator("#formulario")).toContainText("coordinaremos la evaluación de documentos, campos e integración");
    expect(submitted).toContain("Revisar montos y conectar los datos a nuestro ERP.");
    const calls = await page.evaluate(() => (window as unknown as OcrTestWindow).googleCalls);
    expect(calls.filter((call) => call[1] === "generate_lead")).toEqual([
      ["event", "generate_lead", { position: "ocr_form", form_type: "ocr", service: "ocr" }],
    ]);
    expect(JSON.stringify(calls)).not.toContain("persona@example.com");
    expect(JSON.stringify(calls)).not.toContain("ocr-evaluation-test");
    expect(JSON.stringify(calls)).not.toContain("Revisar montos");
  });

  test("@a11y has no WCAG A/AA violations on OCR page", async ({ page }) => {
    await page.goto("/ocr");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
});
