// Genera favicon, íconos de app y logo para datos estructurados a partir de public/brand/yago-mark.svg.
// Uso: npm run brand:assets
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";
import { chromium } from "playwright";

const INK = "#070b13";
const mark = await readFile("public/brand/yago-mark.svg");

const png = (size) => sharp(mark, { density: 72 * Math.ceil(size / 100) * 4 }).resize(size, size).png().toBuffer();

async function onBackground(size, markSize, background) {
  const inset = Math.round((size - markSize) / 2);
  return sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite([{ input: await png(markSize), left: inset, top: inset }])
    .png()
    .toBuffer();
}

/** ICO con imágenes PNG embebidas (válido desde Windows Vista y en todos los navegadores actuales). */
function ico(images) {
  const header = Buffer.alloc(6 + images.length * 16);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, data }, i) => {
    const entry = 6 + i * 16;
    header.writeUInt8(size >= 256 ? 0 : size, entry);
    header.writeUInt8(size >= 256 ? 0 : size, entry + 1);
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(data.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map((image) => image.data)]);
}

const icoSizes = [16, 32, 48];
await writeFile("public/favicon.ico", ico(await Promise.all(icoSizes.map(async (size) => ({ size, data: await png(size) })))));
await writeFile("public/apple-touch-icon.png", await onBackground(180, 128, INK));
await writeFile("public/brand/icon-192.png", await png(192));
await writeFile("public/brand/icon-512.png", await png(512));
// Zona segura de íconos "maskable": el isotipo ocupa el 60 % central.
await writeFile("public/brand/icon-maskable-512.png", await onBackground(512, 308, INK));

// Logo con isotipo y nombre (schema.org Organization.logo y perfiles externos). Se dibuja en Chromium
// para usar Instrument Sans, la misma tipografía del sitio.
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 600, height: 600 } });
await page.setContent(`<!doctype html>
<html><head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@700&display=block">
<style>
  html, body { margin: 0; }
  .logo { width: 600px; height: 600px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 34px; background: #fff; }
  .logo svg { width: 290px; height: 290px; }
  .logo span { font: 700 122px/1 "Instrument Sans", sans-serif; letter-spacing: -0.03em; color: #0b1220; }
</style></head>
<body><div class="logo">${mark.toString()}<span>YAGO</span></div></body></html>`);
await page.evaluate(() => document.fonts.ready);
await page.locator(".logo").screenshot({ path: "public/brand/yago-logo.png" });
await browser.close();

console.log("Listo: favicon.ico, apple-touch-icon.png, icon-192/512, icon-maskable-512 y yago-logo.png");
