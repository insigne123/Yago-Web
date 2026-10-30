import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const templates = ["/productos", "/casos", "/blog/que-es-la-automatizacion-de-procesos-con-ia", "/servicios/integracion-ia", "/nosotros", "/blog/apps-ia-desarrollo-asistido-diferencias"];

test.describe("key template accessibility", () => {
  for (const route of templates) {
    test(`${route} has no WCAG A/AA violations`, async ({ page }) => {
      await page.goto(route);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    });
  }
});
