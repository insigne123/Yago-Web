import { expect, test } from "@playwright/test";

test.describe("navigation and public API", () => {
  test("mobile navigation exposes the complete information architecture", async ({ page }, testInfo) => {
    test.skip(!testInfo.project.name.includes("mobile"), "Mobile-only navigation behavior");
    await page.goto("/productos");
    await page.getByRole("button", { name: /abrir menú/i }).click();

    const navigation = page
      .getByRole("dialog", { name: /navegacion/i })
      .getByRole("navigation", { name: /navegación principal móvil/i });
    await expect(navigation.getByRole("link", { name: /^Soluciones\b/i })).toBeVisible();
    await expect(navigation.getByRole("link", { name: /^Productos\b/i })).toHaveAttribute("aria-current", "page");
    await expect(navigation.getByRole("link", { name: /^Servicios\b/i })).toBeVisible();
    await expect(navigation.getByRole("link", { name: /^Casos\b/i })).toBeVisible();
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
});
