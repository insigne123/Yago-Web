import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

type AnalyticsTestWindow = Window & { googleCalls: unknown[][] };

test.beforeEach(async ({ page }) => {
  await page.route("**/www.googletagmanager.com/gtag/js?*", (route) => route.fulfill({ status: 200, contentType: "application/javascript", body: "/* SDK stub: no external analytics requests in UI tests. */" }));
  await page.addInitScript(() => {
    const target = window as unknown as AnalyticsTestWindow;
    target.googleCalls = [];
    target.gtag = (...args) => target.googleCalls.push(args);
  });
});

test("successful contact emits a lead without form contents or lead identifier", async ({ page }) => {
  await page.route("**/api/contact", (route) => route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, leadId: "analytics-test-lead" }) }));
  await page.goto("/?servicio=integracion-ia#contacto");
  await expect(page.getByRole("radio", { name: "Integración de IA", exact: true })).toBeChecked();
  await page.getByLabel("Nombre", { exact: true }).fill("Persona de prueba");
  await page.getByLabel("Email de trabajo", { exact: true }).fill("persona@example.com");
  await page.getByRole("button", { name: "Enviar y coordinar diagnóstico", exact: true }).click();
  await expect(page.locator("#contacto")).toContainText("Revisaremos el proceso y te responderemos con el siguiente paso recomendado.");
  const calls = await page.evaluate(() => (window as unknown as AnalyticsTestWindow).googleCalls);
  const leads = calls.filter((call) => call[0] === "event" && call[1] === "generate_lead");
  expect(leads).toEqual([["event", "generate_lead", { position: "contact_section", service: "integracion-ia", form_type: "contact" }]]);
  expect(JSON.stringify(calls)).not.toContain("persona@example.com");
  expect(JSON.stringify(calls)).not.toContain("analytics-test-lead");
});

test("failed email delivery does not emit a lead conversion", async ({ page }) => {
  await page.route("**/api/contact", (route) => route.fulfill({ status: 500, contentType: "application/json", body: JSON.stringify({ ok: false, error: "Error simulado de correo." }) }));
  await page.goto("/#contacto");
  await page.getByLabel("Nombre", { exact: true }).fill("Persona de prueba");
  await page.getByLabel("Email de trabajo", { exact: true }).fill("persona@example.com");
  await page.getByRole("button", { name: "Enviar y coordinar diagnóstico", exact: true }).click();
  await expect(page.getByText("No pudimos enviar tu mensaje", { exact: true })).toBeVisible();
  const calls = await page.evaluate(() => (window as unknown as AnalyticsTestWindow).googleCalls);
  expect(calls.some((call) => call[1] === "generate_lead")).toBeFalsy();
  expect(calls.some((call) => call[1] === "contact_form_error")).toBeTruthy();
});

test("configured GA4 initializes once with advertising signals disabled", async ({ page }) => {
  test.skip(!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, "Requires an explicit measurement ID in the test build");
  await page.goto("/");
  await expect(page.locator("script#google-analytics-script")).toHaveAttribute("src", `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`);
  await page.locator("#servicios").getByRole("link", { name: "Comparar servicios", exact: true }).click();
  await expect(page).toHaveURL(/\/servicios$/);
  const configs = await page.evaluate(() => (window as unknown as AnalyticsTestWindow).googleCalls.filter((call) => call[0] === "config"));
  expect(configs).toEqual([["config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, { send_page_view: true, allow_google_signals: false, allow_ad_personalization_signals: false }]]);
});

test("analytics preference persists and stops commercial events until reactivated", async ({ page }) => {
  test.skip(!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, "Requires an explicit measurement ID in the test build");
  await page.goto("/privacidad");
  const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  expect(accessibility.violations).toEqual([]);
  await page.getByRole("button", { name: "Desactivar Google Analytics", exact: true }).click();
  await expect(page.getByRole("button", { name: "Reactivar Google Analytics", exact: true })).toHaveAttribute("aria-pressed", "true");
  await page.goto("/");
  await page.locator("#inicio").getByRole("link", { name: "Ver servicios", exact: true }).click();
  const deniedEvents = await page.evaluate(() => (window as unknown as AnalyticsTestWindow).googleCalls.filter((call) => call[0] === "event"));
  expect(deniedEvents).toEqual([]);
  await page.goto("/privacidad");
  await page.getByRole("button", { name: "Reactivar Google Analytics", exact: true }).click();
  await page.goto("/");
  await page.locator("#inicio").getByRole("link", { name: "Ver servicios", exact: true }).click();
  const enabledEvents = await page.evaluate(() => (window as unknown as AnalyticsTestWindow).googleCalls.filter((call) => call[0] === "event"));
  expect(enabledEvents.some((call) => call[1] === "hero_ver_servicios")).toBeTruthy();
});
