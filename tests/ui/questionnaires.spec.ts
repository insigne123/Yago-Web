import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const variants = [
  { slug: "axis-gerentes", product: "AXIS", audience: "Gerentes y responsables", title: "AXIS en la operación de tu equipo.", first: "need", project: false },
  { slug: "sofia", product: "SOF.IA", audience: "Usuarios", title: "Cuéntanos tu experiencia con SOF.IA.", first: "usage", project: false },
  { slug: "sofia-gerentes", product: "SOF.IA", audience: "Gerentes y responsables", title: "SOF.IA y el conocimiento de tu equipo.", first: "need", project: false },
  { slug: "apps-usuarios", product: "Aplicaciones YAGO", audience: "Usuarios", title: "Tu experiencia usando una aplicación de YAGO.", first: "usage", project: true },
  { slug: "apps-gerentes", product: "Aplicaciones YAGO", audience: "Gerentes y responsables", title: "La aplicación en la operación de tu organización.", first: "need", project: true },
  { slug: "proyectos", product: "Proyectos YAGO", audience: "Contrapartes de desarrollo", title: "Tu experiencia definiendo y construyendo un proyecto con YAGO.", first: "participation", project: true },
];

test("directory exposes the seven links including the unchanged AXIS URL, outside the sitemap", async ({ page, request }) => {
  await page.goto("/opiniones");
  const links = page.locator("main a[href^='/opiniones/']");
  await expect(links).toHaveCount(7);
  await expect(page.locator("main a[href='/opiniones/axis']")).toBeAttached();
  await expect(page.locator("meta[name='robots']")).toHaveAttribute("content", /noindex/);
  expect(await (await request.get("/sitemap.xml")).text()).not.toContain("/opiniones");
  expect((await request.get("/opiniones/no-disponible")).status()).toBe(404);
});

for (const variant of variants) {
  test(`${variant.slug}: tailored questions, accessible controls and identity-free delivery`, async ({ page }) => {
    await page.goto(`/opiniones/${variant.slug}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(variant.title);
    await expect(page.locator("meta[name='robots']")).toHaveAttribute("content", /noindex/);
    await expect(page.getByLabel("Autorizo a Yago SpA")).not.toBeChecked();
    await expect(page.locator("form fieldset[data-question]")).not.toHaveCount(0);
    await page.locator(`#feedback-${variant.first}`).fill("Respuesta técnica para verificar este cuestionario.");
    if (variant.project) await page.getByLabel("Nombre de la aplicación o proyecto (opcional)", { exact: true }).fill("Aplicación de prueba");
    else await expect(page.getByLabel("Nombre de la aplicación o proyecto (opcional)", { exact: true })).toHaveCount(0);
    await page.getByLabel("Acepto que YAGO reciba").check();
    let captured: Record<string, unknown> | undefined;
    await page.route("**/api/questionnaire-feedback", async (route) => {
      const data = route.request().postDataJSON();
      captured = data;
      await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, feedbackId: data.submissionId }) });
    });
    const audit = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    expect(audit.violations).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
    await page.getByRole("button", { name: "Enviar mi opinión" }).click();
    await expect(page.getByRole("heading", { name: "Gracias por compartir tu experiencia." })).toBeVisible();
    expect(captured?.variant).toBe(variant.slug);
    expect(captured?.name).toBe("");
    expect(captured?.email).toBe("");
    expect(captured?.publicationConsent).toBe(false);
    await expect(page.getByRole("status").filter({ hasText: "Referencia:" })).toContainText(variant.product);
  });
}

test("new surveys record scoped publication consent, keep answers on failure and reuse the reference", async ({ page }) => {
  await page.goto("/opiniones/sofia");
  await page.locator("#feedback-usage").fill("Comentario de prueba sobre consultar procedimientos.");
  await page.getByLabel("Autorizo a Yago SpA").check();
  await page.getByLabel("¿Cómo prefieres que aparezca?").selectOption("identified");
  await page.getByLabel("Acepto que YAGO reciba").check();
  await page.getByRole("button", { name: "Enviar mi opinión" }).click();
  await expect(page.getByRole("form").getByRole("alert")).toContainText("Indica tu nombre");
  await page.getByLabel("Nombre (opcional)", { exact: true }).fill("Persona de prueba");
  const payloads: { submissionId: string; publicationConsent: boolean; publicationAttribution: string }[] = [];
  await page.route("**/api/questionnaire-feedback", async (route) => {
    const data = route.request().postDataJSON();
    payloads.push(data);
    await route.fulfill({ status: payloads.length === 1 ? 503 : 200, contentType: "application/json", body: JSON.stringify(payloads.length === 1 ? { ok: false, error: "Intenta nuevamente." } : { ok: true, feedbackId: data.submissionId }) });
  });
  await page.getByRole("button", { name: "Enviar mi opinión" }).click();
  await expect(page.getByRole("form").getByRole("alert")).toContainText("Intenta nuevamente.");
  await expect(page.locator("#feedback-usage")).toHaveValue("Comentario de prueba sobre consultar procedimientos.");
  await page.getByRole("button", { name: "Enviar mi opinión" }).click();
  await expect(page.getByRole("heading", { name: "Gracias por compartir tu experiencia." })).toBeVisible();
  expect(payloads[0].submissionId).toBe(payloads[1].submissionId);
  expect(payloads[1].publicationConsent).toBe(true);
  expect(payloads[1].publicationAttribution).toBe("identified");
});
