import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { stat, writeFile } from "node:fs/promises";

const root = new URL("../../", import.meta.url);
const images = [
  { input: "public/PSOL.png", output: "public/images/optimized/psol.webp", height: 84, lossless: true },
  { input: "public/GrupoExpro-LATAM-negro.png", output: "public/images/optimized/grupoexpro.webp", height: 84, lossless: true },
  { input: "public/images/service-automatizacion-procesos.png", output: "public/images/optimized/service-automatizacion-procesos.webp" },
  { input: "public/images/service-apps-automatizacion.png", output: "public/images/optimized/service-apps-automatizacion.webp" },
  { input: "public/images/product_sofia.png", output: "public/images/optimized/product-sofia.webp" },
];
const results = [];
for (const image of images) {
  const input = fileURLToPath(new URL(image.input, root));
  const output = fileURLToPath(new URL(image.output, root));
  let processor = sharp(input);
  if (image.height) processor = processor.resize({ height: image.height, withoutEnlargement: true });
  const info = await processor.webp(image.lossless ? { lossless: true } : { quality: 82, effort: 5 }).toFile(output);
  const original = await stat(input);
  results.push({ input: image.input, output: image.output, width: info.width, height: info.height, originalBytes: original.size, optimizedBytes: info.size, reductionPercent: Math.round((1 - info.size / original.size) * 100) });
}
await writeFile(fileURLToPath(new URL(".local/seo/performance/image-optimization.json", root)), JSON.stringify(results, null, 2) + "\n", "utf8");
console.log(JSON.stringify(results, null, 2));
