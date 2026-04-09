import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("ocr landing", () => {
  test("renders core OCR conversion content", async ({ page }) => {
    await page.goto("/ocr");

    await expect(page).toHaveTitle(/OCR para empresas/i);
    await expect(page.getByRole("heading", { level: 1, name: /Automatiza la lectura de documentos/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /^Solicitar demo$/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Hablar por WhatsApp/i }).first()).toBeVisible();
    await expect(page.locator("#problema")).toBeAttached();
    await expect(page.locator("#como-funciona")).toBeAttached();
    await expect(page.locator("#casos-de-uso")).toBeAttached();
    await expect(page.locator("#formulario")).toBeAttached();
  });

  test("scrolls to the OCR form from the primary CTA", async ({ page }) => {
    await page.goto("/ocr");

    await page.locator("#inicio").getByRole("link", { name: /^Solicitar demo$/i }).click();

    await expect(page.locator("#formulario")).toBeInViewport();
  });

  test("@a11y has no WCAG A/AA violations on OCR page", async ({ page }) => {
    await page.goto("/ocr");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
});
