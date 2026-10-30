import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { loadMailApiKey } from "./mailbox/credentials.mjs";
import { ResendMailbox } from "./mailbox/resend-client.mjs";

const HELP = `Correo asistido de pgongora@yago.cl

  npm run mail -- check
  npm run mail -- list [--limit 20] [--after EMAIL_ID]
  npm run mail -- read EMAIL_ID
  npm run mail -- attachments EMAIL_ID
  npm run mail -- download EMAIL_ID ATTACHMENT_ID --directory "DIRECTORIO"
  npm run mail -- reply EMAIL_ID --text "RESPUESTA" [--attach "ARCHIVO"] [--send]
  npm run mail -- reply EMAIL_ID --text-file "RESPUESTA.txt" [--attach "ARCHIVO"] [--send]
  npm run mail -- send --to "DESTINATARIO" --subject "ASUNTO" --text "MENSAJE" [--attach "ARCHIVO"] [--send]

--attach puede repetirse. reply/send muestran una vista previa hasta indicar --send.
La clave se carga en memoria mediante Secret Manager o RESEND_MAIL_API_KEY.
La dirección receptora y el enrutamiento se configuran en scripts/mailbox.config.json.
`;

function parse(argv) {
  const values = { positional: [], attach: [], to: [] };
  for (let index = 0; index < argv.length; index++) {
    const token = argv[index];
    if (token === "--send") { values.send = true; continue; }
    if (!token.startsWith("--")) { values.positional.push(token); continue; }
    const name = token.slice(2);
    if (!["limit", "after", "directory", "text", "text-file", "subject", "attach", "to"].includes(name)) throw new Error(`Opción desconocida: ${token}`);
    const value = argv[++index];
    if (value === undefined || value.startsWith("--")) throw new Error(`Falta el valor de ${token}.`);
    if (name === "attach" || name === "to") values[name].push(value);
    else values[name] = value;
  }
  return values;
}

export async function main(argv = process.argv.slice(2)) {
  if (!argv.length || ["help", "--help", "-h"].includes(argv[0])) { console.log(HELP); return; }
  const [command, ...rest] = argv;
  if (!["check", "list", "read", "attachments", "download", "reply", "send"].includes(command)) throw new Error("Comando desconocido. Usa npm run mail -- help.");
  const args = parse(rest);
  const config = JSON.parse(await readFile(new URL("./mailbox.config.json", import.meta.url), "utf8"));
  const apiKey = await loadMailApiKey(config);
  const client = new ResendMailbox({ apiKey, config });
  let result;
  if (command === "check") result = await client.check();
  else if (command === "list") result = await client.list({ limit: args.limit ? Number(args.limit) : 20, after: args.after });
  else if (command === "read") result = await client.read(args.positional[0]);
  else if (command === "attachments") result = await client.attachments(args.positional[0]);
  else if (command === "download") {
    if (!args.directory) throw new Error("Indica el directorio de descarga con --directory.");
    result = await client.download(args.positional[0], args.positional[1], args.directory);
  } else {
    if (args.text !== undefined && args["text-file"]) throw new Error("Elige --text o --text-file.");
    const text = args["text-file"] ? await readFile(args["text-file"], "utf8") : args.text;
    const options = { text, files: args.attach, to: args.to, subject: args.subject };
    result = command === "reply" ? await client.reply(args.positional[0], options, { send: Boolean(args.send) }) : await client.compose(options, { send: Boolean(args.send) });
  }
  console.log(JSON.stringify(result, null, 2));
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((error) => {
    console.error(String(error.message || "Error de correo").replace(/\bre_[A-Za-z0-9_-]+\b/g, "[clave omitida]"));
    process.exitCode = 1;
  });
}
