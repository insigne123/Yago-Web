#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { chromium } from "@playwright/test";

const profile = JSON.parse(await readFile(new URL("./proyectoia-profile.json", import.meta.url), "utf8"));
const submit = process.argv.includes("--submit");
if (process.argv.slice(2).some((arg) => !["--submit"].includes(arg))) throw new Error("Uso: node scripts/proyectoia.mjs [--submit]");
if (profile.description.length > 220) throw new Error("La descripción supera el límite de 220 caracteres.");
let receipt;
try {
  receipt = JSON.parse(await readFile(new URL("./proyectoia-receipt.json", import.meta.url), "utf8"));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
if (submit && receipt?.acceptedForReview) {
  console.log(JSON.stringify({ state: "already_submitted", submittedAt: receipt.submittedAt, published: receipt.published, submittedAgain: false }, null, 2));
  process.exit(0);
}

// Evitar una segunda solicitud cuando ya existe una ficha pública identificable.
const sitemapResponse = await fetch("https://proyectoia.com/sitemaps/sitemap/fichas.xml", { signal: AbortSignal.timeout(20000) });
if (!sitemapResponse.ok) throw new Error("No se pudo comprobar el sitemap del directorio; no se envía una solicitud.");
const sitemap = await sitemapResponse.text();
const existing = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]).filter((url) => /\/proveedor\/[^/]*yago[^/]*\/?$/i.test(url));
if (existing.length) {
  console.log(JSON.stringify({ state: "existing_profile", urls: existing, submitted: false }, null, 2));
  process.exit(0);
}
if (!submit) {
  console.log(JSON.stringify({ state: "preview", submitted: false, profile }, null, 2));
  process.exit(0);
}

const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage();
  await page.goto("https://proyectoia.com/agregar?manual=1", { waitUntil: "domcontentloaded", timeout: 45000 });
  const form = page.locator("form").filter({ has: page.locator("[name='descripcion']") });
  await form.locator("[name='nombre_agencia']").fill(profile.companyName);
  await form.locator("[name='sitio_web']").fill(profile.website);
  await form.locator("[name='tipo_empresa']").selectOption(profile.companyType);
  await form.locator("[name='pais']").selectOption(profile.country);
  await form.locator("[name='ciudad']").fill(profile.city);
  await form.locator("[name='linkedin_url']").fill(profile.linkedin);
  await form.locator("[name='logo_url']").fill(profile.logo);
  await form.locator("[name='descripcion']").fill(profile.description);
  for (const category of profile.categories) await form.locator(`[name='categorias'][value='${category}']`).check();
  for (const [label, items] of [["Servicios (opcional)", profile.services], ["Tecnologías (opcional)", profile.technologies]]) {
    const input = form.getByLabel(label, { exact: true });
    for (const item of items) {
      await input.fill(item);
      await input.press("Enter");
    }
  }
  await form.locator("[name='paises_que_atiende'][value='CL']").check();
  await form.locator("[name='contacto_url']").fill(profile.contactPage);
  await form.locator("[name='email_publico']").fill(profile.publicEmail);
  await form.locator("[name='nombre']").fill(profile.requesterName);
  await form.locator("[name='email']").fill(profile.requesterEmail);
  await form.locator("[name='mensaje']").fill(profile.message);
  await form.locator("[name='acepta_privacidad']").check();
  const valid = await form.evaluate((element) => element.checkValidity());
  if (!valid) throw new Error("El formulario no está válido; no se ha enviado.");
  // Una sola pulsación. Ante resultado ambiguo, inspeccionar antes de volver a ejecutar.
  const [response] = await Promise.all([
    page.waitForResponse((response) => response.request().method() === "POST" && new URL(response.url()).pathname === "/agregar", { timeout: 60000 }),
    form.getByRole("button", { name: "Agregar mi empresa", exact: true }).click(),
  ]);
  await page.waitForTimeout(2000);
  const main = await page.locator("main").innerText();
  const confirmation = main.match(/.{0,80}(?:recibimos|recibido|recibida|gracias|enviada|registrada|revisaremos).{0,240}/gi) || [];
  const errors = (await page.locator("[role='alert'], main p.text-red-600").allTextContents()).filter((text) => text.trim());
  console.log(JSON.stringify({ checkedAt: new Date().toISOString(), state: confirmation.length && !errors.length ? "confirmation_received" : "check_result", httpStatus: response.status(), confirmation, errors, headings: await page.locator("main h1, main h2").allTextContents(), submitted: true, published: false }, null, 2));
} finally {
  await browser.close();
}
