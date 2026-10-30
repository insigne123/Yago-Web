import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("AXIS questionnaire is accessible, private to search and accepts optional identity", async ({ page, request }) => {
  await page.goto("/opiniones/axis");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Cuéntanos tu experiencia con AXIS.");
  await expect(page.locator("meta[name='robots']")).toHaveAttribute("content", /noindex/);
  await expect(page.locator("form fieldset[data-question]")).toHaveCount(8);
  await expect(page.getByLabel("Autorizo a Yago SpA")).not.toBeChecked();
  expect(await request.get("/sitemap.xml").then((response) => response.text())).not.toContain("/opiniones/axis");
  await expect(page.locator("input[type='password']")).toHaveCount(0);
  expect(await page.locator("main").innerText()).not.toMatch(/¿.*(?:presupuesto|precio|cost[oó]).*\?/i);
  await page.getByLabel("Tu respuesta (opcional)", { exact: true }).fill("Me interesa revisar consultas por lote.");
  await page.getByLabel("Consulta por lote", { exact: true }).check();
  await page.getByLabel("Acepto que YAGO reciba").check();
  const captured: Record<string, unknown>[] = [];
  await page.route("**/api/axis-feedback", async (route) => {
    const body = route.request().postDataJSON();
    captured.push(body);
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, feedbackId: body.submissionId }) });
  });
  const audit = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  expect(audit.violations).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
  await page.getByRole("button", { name: "Enviar mi opinión" }).click();
  await expect(page.getByRole("heading", { name: "Gracias por compartir tu experiencia." })).toBeVisible();
  expect(captured[0].name).toBe("");
  expect(captured[0].email).toBe("");
  expect(captured[0].features).toEqual(["Consulta por lote"]);
  expect(captured[0].publicationConsent).toBe(false);
});

test("publication is opt-in with a choice of attribution and identified quotes require a name", async ({ page }) => {
  await page.goto("/opiniones/axis");
  await page.getByLabel("Tu respuesta (opcional)", { exact: true }).fill("Uso las consultas por lote en mi trabajo.");
  await page.getByLabel("Autorizo a Yago SpA").check();
  await page.getByLabel("¿Cómo prefieres que aparezca?").selectOption("identified");
  await page.getByLabel("Acepto que YAGO reciba").check();
  await page.getByRole("button", { name: "Enviar mi opinión" }).click();
  await expect(page.getByRole("form").getByRole("alert")).toContainText("Indica tu nombre");
  await page.getByLabel("Nombre (opcional)", { exact: true }).fill("Persona de prueba");
  let captured: Record<string, unknown> | undefined;
  await page.route("**/api/axis-feedback", async (route) => {
    const body = route.request().postDataJSON();
    captured = body;
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, feedbackId: body.submissionId }) });
  });
  await page.getByRole("button", { name: "Enviar mi opinión" }).click();
  await expect(page.getByRole("heading", { name: "Gracias por compartir tu experiencia." })).toBeVisible();
  expect(captured?.publicationConsent).toBe(true);
  expect(captured?.publicationAttribution).toBe("identified");
  expect(captured?.formVersion).toBe("axis-feedback-v2");
});

test("failed submission preserves answers and retries without a new reference", async ({ page }) => {
  await page.goto("/opiniones/axis");
  await page.getByLabel("Tu respuesta (opcional)", { exact: true }).fill("Respuesta que quiero conservar.");
  await page.getByLabel("Acepto que YAGO reciba").check();
  const ids: string[] = [];
  await page.route("**/api/axis-feedback", async (route) => {
    const body = route.request().postDataJSON();
    ids.push(body.submissionId);
    await route.fulfill({ status: ids.length === 1 ? 503 : 200, contentType: "application/json", body: JSON.stringify(ids.length === 1 ? { ok: false, error: "Intenta nuevamente." } : { ok: true, feedbackId: body.submissionId }) });
  });
  await page.getByRole("button", { name: "Enviar mi opinión" }).click();
  await expect(page.getByRole("form", { name: "Cuestionario de experiencia con AXIS" }).getByRole("alert")).toContainText("Intenta nuevamente.");
  await expect(page.getByLabel("Tu respuesta (opcional)", { exact: true })).toHaveValue("Respuesta que quiero conservar.");
  await page.getByRole("button", { name: "Enviar mi opinión" }).click();
  await expect(page.getByRole("heading", { name: "Gracias por compartir tu experiencia." })).toBeVisible();
  expect(ids[0]).toBe(ids[1]);
});
