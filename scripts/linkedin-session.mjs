import { chromium } from "@playwright/test";
import { fileURLToPath } from "node:url";

const directory = fileURLToPath(new URL("../.local/seo/linkedin-browser/", import.meta.url));
const context = await chromium.launchPersistentContext(directory, { headless: false, viewport: null, args: ["--remote-debugging-port=9333", "--remote-debugging-address=127.0.0.1"] });
const page = context.pages()[0] || await context.newPage();
await page.goto("https://www.linkedin.com/company/yago-spa/", { waitUntil: "domcontentloaded", timeout: 60000 });
console.log("Ventana de LinkedIn abierta. Inicia sesión en el navegador; no compartas contraseñas en el chat.");
await new Promise((resolve) => context.on("close", resolve));
