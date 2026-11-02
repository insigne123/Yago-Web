// Conexión de Playwright a un Chrome ya abierto con --remote-debugging-port.
// Playwright se queda esperando si algún service worker no acepta la conexión de depuración (pasa con el de
// Google Meet cuando Gmail está abierto en la misma ventana). Antes de conectar se detienen esos workers:
// Chrome los vuelve a levantar cuando una página los necesita.
import { chromium } from "@playwright/test";

const openSocket = (url, ms) => new Promise((resolve) => {
  const socket = new WebSocket(url);
  const timer = setTimeout(() => { socket.close(); resolve(null); }, ms);
  socket.onopen = () => { clearTimeout(timer); resolve(socket); };
  socket.onerror = () => { clearTimeout(timer); resolve(null); };
});

async function stopStuckWorkers(base) {
  const targets = await (await fetch(`${base}/json/list`)).json();
  const stuck = [];
  for (const target of targets.filter((t) => t.type === "service_worker")) {
    const socket = await openSocket(target.webSocketDebuggerUrl, 3000);
    if (socket) socket.close(); else stuck.push(target);
  }
  if (!stuck.length) return [];
  const { webSocketDebuggerUrl } = await (await fetch(`${base}/json/version`)).json();
  const browser = await openSocket(webSocketDebuggerUrl, 5000);
  if (!browser) return [];
  stuck.forEach((target, index) => browser.send(JSON.stringify({ id: index + 1, method: "Target.closeTarget", params: { targetId: target.id } })));
  await new Promise((resolve) => setTimeout(resolve, 1000));
  browser.close();
  return stuck.map((t) => t.url);
}

// Una pestaña cuyo hilo principal no responde también traba a Playwright. Solo se cierran las que el script
// declara como propias (closeHung); cualquier otra se informa y se aborta, para no tocar pestañas del dueño.
async function closeHungPages(base, closeHung) {
  const targets = await (await fetch(`${base}/json/list`)).json();
  const closed = [];
  for (const target of targets.filter((t) => t.type === "page")) {
    const socket = await openSocket(target.webSocketDebuggerUrl, 3000);
    if (!socket) continue;
    const alive = await Promise.race([
      new Promise((resolve) => { socket.onmessage = () => resolve(true); socket.send(JSON.stringify({ id: 1, method: "Runtime.evaluate", params: { expression: "1" } })); }),
      new Promise((resolve) => setTimeout(() => resolve(false), 4000)),
    ]);
    socket.close();
    if (alive) continue;
    if (!closeHung(target.url)) throw new Error(`La pestaña ${target.url} no responde; ciérrala o recárgala y vuelve a intentar.`);
    await fetch(`${base}/json/close/${target.id}`);
    closed.push(target.url);
  }
  return closed;
}

export async function connectChrome(port, { timeout = 60000, closeHung = () => false } = {}) {
  const base = `http://127.0.0.1:${port}`;
  await stopStuckWorkers(base);
  await closeHungPages(base, closeHung);
  return chromium.connectOverCDP(base, { timeout });
}
