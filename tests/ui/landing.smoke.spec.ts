import { expect, test } from "@playwright/test";

test.describe("landing smoke", () => {
  test("renders the hero and key conversion paths", async ({ page }) => {
    await page.goto("/");

    const hero = page.locator("#inicio");

    await expect(page).toHaveTitle(/YAGO/i);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(hero.getByRole("link", { name: /Agendar diagnóstico/i })).toBeVisible();
    await expect(hero.getByRole("link", { name: /^Ver servicios$/i })).toBeVisible();

    await expect(page.locator("#productos")).toBeAttached();
    await expect(page.locator("#elige-ruta")).toBeAttached();
    await expect(page.locator("#casos")).toBeAttached();
    await expect(page.locator("#servicios")).toBeAttached();
    await expect(page.locator("#contacto")).toBeAttached();
    await expect(page.locator("footer")).toBeVisible();
  });

  test("scrolls to services from the hero CTA", async ({ page }) => {
    await page.goto("/");

    await page.locator("#inicio").getByRole("link", { name: /^Ver servicios$/i }).click();

    await expect(page.locator("#servicios h2")).toBeInViewport();
  });
});
