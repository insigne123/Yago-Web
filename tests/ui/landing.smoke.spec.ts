import { expect, test } from "@playwright/test";

test.describe("landing smoke", () => {
  test("renders the hero and key conversion paths", async ({ page }) => {
    await page.goto("/");

    const hero = page.locator("#inicio");

    await expect(page).toHaveTitle(/YAGO/i);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(hero.getByRole("link", { name: /Solicitar diagnóstico/i })).toBeVisible();
    await expect(hero.getByRole("link", { name: /^Ver rutas$/i })).toBeVisible();

    await expect(page.locator("#elige-ruta")).toBeAttached();
    await expect(page.locator("#casos")).toBeAttached();
    await expect(page.locator("#servicios")).toBeAttached();
    await expect(page.locator("#contacto")).toBeAttached();
    await expect(page.locator("footer")).toBeVisible();
  });

  test("scrolls to route chooser from the hero CTA", async ({ page }) => {
    await page.goto("/");

    await page.locator("#inicio").getByRole("link", { name: /^Ver rutas$/i }).click();

    await expect(page.locator("#elige-ruta")).toBeInViewport();
  });
});
