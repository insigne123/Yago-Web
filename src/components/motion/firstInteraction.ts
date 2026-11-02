/**
 * Ejecuta `callback` una sola vez, con la primera interacción de la persona: mover el cursor,
 * tocar la pantalla, usar la rueda o el teclado. Los efectos decorativos (fondo 3D, scroll suave,
 * entradas animadas) se cargan recién ahí, así no compiten con la carga inicial de la página.
 *
 * El scroll por sí solo no cuenta: al abrir una URL con ancla (/#contacto) el navegador hace scroll
 * sin que la persona haya interactuado.
 *
 * Devuelve una función para cancelar la espera (por ejemplo, si el componente se desmonta).
 */
const EVENTS = ["pointerdown", "pointermove", "touchstart", "wheel", "keydown"] as const;

let interacted = false;

export function onFirstInteraction(callback: () => void) {
  if (interacted) {
    callback();
    return () => {};
  }
  let active = true;
  const stop = () => {
    active = false;
    EVENTS.forEach((type) => window.removeEventListener(type, run, true));
  };
  function run() {
    if (!active) return;
    interacted = true;
    stop();
    callback();
  }
  EVENTS.forEach((type) => window.addEventListener(type, run, { capture: true, passive: true }));
  return stop;
}
