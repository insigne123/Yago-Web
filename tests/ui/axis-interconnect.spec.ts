import { expect, test } from "@playwright/test";

// yago.cl y axis-legal.cl comparten el formulario de contacto, la organización en datos estructurados y los enlaces.

test("contact API lets only axis-legal.cl read its responses", async ({ request }) => {
  const allowed = await request.fetch("/api/contact", { method: "OPTIONS", headers: { origin: "https://axis-legal.cl" } });
  expect(allowed.status()).toBe(204);
  expect(allowed.headers()["access-control-allow-origin"]).toBe("https://axis-legal.cl");
  expect(allowed.headers()["access-control-allow-headers"]).toContain("content-type");

  const other = await request.fetch("/api/contact", { method: "OPTIONS", headers: { origin: "https://example.com" } });
  expect(other.headers()["access-control-allow-origin"]).toBeUndefined();

  // El campo trampa hace que la API responda sin enviar correo.
  const post = await request.post("/api/contact", {
    headers: { origin: "https://axis-legal.cl" },
    data: { name: "Prueba", email: "prueba@example.com", message: "Prueba CORS", topic: "AXIS", hp: "bot" },
  });
  expect(post.status()).toBe(200);
  expect(post.headers()["access-control-allow-origin"]).toBe("https://axis-legal.cl");
});

test("/axis links to the AXIS site and declares it as the same product", async ({ page }) => {
  await page.route("**/www.googletagmanager.com/gtag/js?*", (route) => route.fulfill({ status: 200, contentType: "application/javascript", body: "" }));
  await page.goto("/axis");
  await expect(page.locator("a[href='https://axis-legal.cl/']").first()).toBeAttached();
  const schemas = (await page.locator("script[type='application/ld+json']").allTextContents()).map((value) => JSON.parse(value));
  const software = schemas.find((value) => value["@type"] === "SoftwareApplication");
  expect(software.sameAs).toContain("https://axis-legal.cl/");
  expect(software.provider["@id"]).toBe("https://yago.cl/#organization");
  const llms = await (await page.request.get("/llms.txt")).text();
  expect(llms).toContain("https://axis-legal.cl");
});
