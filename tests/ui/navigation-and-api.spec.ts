import { expect, test } from "@playwright/test";

type AnalyticsWindow = Window & {
  testEvents: { name: string; props?: Record<string, unknown> }[];
  plausible: (name: string, options?: { props: Record<string, unknown> }) => void;
};

test.describe("navigation and public API", () => {
  test("mobile navigation exposes the complete information architecture", async ({ page }, testInfo) => {
    test.skip(!testInfo.project.name.includes("mobile"), "Mobile-only navigation behavior");
    await page.route("**/www.googletagmanager.com/gtag/js?*", (route) => route.fulfill({ status: 200, contentType: "application/javascript", body: "" }));
    await page.goto("/productos");
    await page.getByRole("button", { name: /abrir menú/i }).click();

    const navigation = page
      .getByRole("dialog", { name: /navegaci[oó]n/i })
      .getByRole("navigation", { name: /navegación principal móvil/i });
    await expect(navigation.getByRole("link", { name: /^Productos\b/i })).toHaveAttribute("aria-current", "page");
    await expect(navigation.getByRole("link", { name: /^Servicios\b/i })).toBeVisible();
    await expect(navigation.getByRole("link", { name: /^Integración de IA/i })).toBeVisible();
    await expect(navigation.getByRole("link", { name: /^Aplicaciones y software con IA/i })).toBeVisible();
    await expect(navigation.getByRole("link", { name: /^Agentes y asistentes de IA/i })).toBeVisible();
    await expect(navigation.getByRole("link", { name: /^Casos\b/i })).toBeVisible();
    await expect(navigation.getByRole("link", { name: /^Precios\b/i })).toBeVisible();
    await expect(navigation.getByRole("link", { name: /^Recursos\b/i })).toBeVisible();
  });

  test("contact API rejects incomplete requests without invoking email", async ({ request }) => {
    const response = await request.post("/api/contact", {
      data: { name: "Persona", email: "persona@example.com", message: "" },
    });
    expect(response.status()).toBe(400);
    await expect(response.json()).resolves.toMatchObject({ ok: false });
  });

  test("contact API rejects invalid email", async ({ request }) => {
    const response = await request.post("/api/contact", {
      data: { name: "Persona", email: "correo-invalido", message: "Necesito automatizar un proceso" },
    });
    expect(response.status()).toBe(400);
    await expect(response.json()).resolves.toMatchObject({ ok: false, error: "Email inválido." });
  });

  test("contact preserves service interest and measures a successful request", async ({ page }) => {
    await page.route("**/www.googletagmanager.com/gtag/js?*", (route) => route.fulfill({ status: 200, contentType: "application/javascript", body: "" }));
    await page.addInitScript(() => {
      const target = window as unknown as AnalyticsWindow;
      target.testEvents = [];
      target.plausible = (name, options) => target.testEvents.push({ name, props: options?.props });
    });
    let submitted = "";
    await page.route("**/api/contact", async (route) => {
      submitted = route.request().postData() || "";
      await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, leadId: "ui-service-lead" }) });
    });
    await page.goto("/?servicio=integracion-ia&utm_source=chatgpt.com#contacto");
    await expect(page.getByRole("radio", { name: "Integración de IA", exact: true })).toBeChecked();
    await page.getByLabel("Nombre", { exact: true }).fill("Cliente de prueba");
    await page.getByLabel("Email de trabajo", { exact: true }).fill("cliente@example.com");
    await page.getByRole("button", { name: "Enviar y coordinar diagnóstico", exact: true }).click();
    await expect(page.locator("#contacto")).toContainText("Revisaremos el proceso y te responderemos con el siguiente paso recomendado.");
    expect(submitted).toContain("Tipo de proceso: Integración de IA");
    expect(submitted).toContain("chatgpt.com");
    const events = await page.evaluate(() => (window as unknown as AnalyticsWindow).testEvents);
    expect(events).toContainEqual({ name: "Contact Form Success", props: { position: "contact_section", service: "integracion-ia", lead_id: "ui-service-lead" } });
  });
});
