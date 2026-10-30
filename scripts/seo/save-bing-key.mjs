import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cloudSession } from "./google-access.mjs";

try {
  const config = JSON.parse(await readFile(new URL("../seo.config.json", import.meta.url), "utf8"));
  let key = "";
  for await (const chunk of process.stdin) {
    key += chunk.toString("utf8");
    if (key.length > 4096) throw new Error("La clave tiene un tamaño no válido.");
  }
  key = key.trim();
  if (key.length < 16 || /\s/.test(key)) throw new Error("La clave no tiene un formato válido.");
  const session = await cloudSession();
  session.auth.setActiveAccount({ project: config.firebaseProject, nonInteractive: true }, session.account);
  const require = createRequire(import.meta.url);
  const manager = require(join(session.root, "lib/gcp/secretManager.js"));
  if (!await manager.secretExists(config.firebaseProject, config.bingSecret)) {
    await manager.createSecret(config.firebaseProject, config.bingSecret, { purpose: "yago-seo-reporting" });
  }
  let version;
  try {
    const latest = await manager.getSecretVersion(config.firebaseProject, config.bingSecret, "latest");
    if (latest.state === "ENABLED" && await manager.accessSecretVersion(config.firebaseProject, config.bingSecret, latest.versionId) === key) version = latest;
  } catch (error) { if (error.status !== 404) throw error; }
  if (!version) version = await manager.addVersion(config.firebaseProject, config.bingSecret, key);
  key = "";
  console.log(JSON.stringify({ stored: true, secret: config.bingSecret, version: version.versionId, valuePrinted: false }));
} catch {
  console.error("No se pudo guardar la clave. Comprueba sesión de Firebase y formato; su valor no se imprime.");
  process.exitCode = 1;
}
