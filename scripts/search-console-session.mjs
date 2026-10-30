import { access } from "node:fs/promises";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const directory = fileURLToPath(new URL("../.local/seo/search-console-browser/", import.meta.url));
const service = process.argv[2] || "search-console";
if (!["search-console", "gemini"].includes(service)) throw new Error("Uso: node scripts/search-console-session.mjs [search-console|gemini]");
const target = service === "gemini" ? "https://gemini.google.com/app" : "https://search.google.com/search-console?resource_id=sc-domain%3Ayago.cl";
const candidates = [
  `${process.env.PROGRAMFILES}\\Google\\Chrome\\Application\\chrome.exe`,
  `${process.env["PROGRAMFILES(X86)"]}\\Google\\Chrome\\Application\\chrome.exe`,
  `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
  chromium.executablePath(),
];
let executable;
for (const candidate of candidates) {
  try { await access(candidate); executable = candidate; break; } catch { /* Probar la siguiente instalación conocida. */ }
}
if (!executable) throw new Error("No se encontró Chrome ni Chromium instalado.");
const child = spawn(executable, [
  "--remote-debugging-port=9335", "--remote-debugging-address=127.0.0.1",
  `--user-data-dir=${directory}`, "--no-first-run", "--no-default-browser-check",
  target,
], { detached: true, stdio: "ignore", windowsHide: false });
child.on("error", () => { console.error("No se pudo abrir el navegador de Search Console."); process.exitCode = 1; });
child.unref();
console.log(`Ventana controlada de ${service === "gemini" ? "Gemini" : "Search Console"} abierta en un perfil separado. Si solicita acceso, inicia sesión directamente en Google; no compartas contraseñas ni códigos en el chat.`);
