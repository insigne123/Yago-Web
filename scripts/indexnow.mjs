#!/usr/bin/env node
/**
 * Avisa a Bing (y a los buscadores que usan IndexNow: Yandex, Seznam, Naver…) que hay URLs nuevas o
 * actualizadas. Bing alimenta Copilot y buena parte de las búsquedas de ChatGPT, así que conviene
 * ejecutarlo después de cada despliegue:
 *
 *   npm run indexnow                  # envía todas las URL del sitemap
 *   npm run indexnow -- /sadt /blog   # envía solo esas rutas
 *
 * La clave es pública por diseño: el archivo public/<clave>.txt demuestra que el sitio es tuyo.
 */
const HOST = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";
const KEY = process.env.INDEXNOW_KEY || "834a5b308e3657224abf43d65dee4926";

const args = process.argv.slice(2);
let urls = args.map((path) => new URL(path, HOST).toString());
// Git Bash convierte "/sadt" en "C:/Program Files/Git/sadt" y IndexNow responde 422: se corta antes de enviar.
const foreign = urls.filter((url) => new URL(url).host !== new URL(HOST).host);
if (foreign.length) {
  console.error(`Rutas fuera de ${HOST}: ${foreign.join(", ")}. En Git Bash usa MSYS_NO_PATHCONV=1 o rutas sin la barra inicial.`);
  process.exit(1);
}

if (!urls.length) {
  const xml = await (await fetch(`${HOST}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(HOST).host, key: KEY, keyLocation: `${HOST}/${KEY}.txt`, urlList: urls }),
});

console.log(`IndexNow: ${response.status} ${response.statusText} · ${urls.length} URL enviadas`);
if (!response.ok && response.status !== 202) process.exitCode = 1;
