"use client";

import { useEffect, useRef } from "react";
import { onFirstInteraction } from "@/components/motion/firstInteraction";

/**
 * Fondo 3D para los heros oscuros: un campo de puntos de luz que ondula como un flujo de datos
 * y reacciona suave al cursor. WebGL directo con un shader propio (~3 KB, sin librerías pesadas).
 *
 * Rendimiento y accesibilidad:
 * - Se inicia con la primera interacción (cursor, toque, rueda o teclado) y cuando el navegador está libre:
 *   crear el contexto WebGL y compilar los shaders no compite con la carga ni con el LCP.
 * - Solo dibuja mientras el hero está en pantalla y la pestaña visible.
 * - Menos puntos en pantallas chicas; resolución máxima 1,5x.
 * - Con "reducir movimiento" o si el equipo no alcanza ~30 cuadros por segundo, queda un cuadro quieto.
 * - Sin GPU real (render por software) no se muestra.
 * - Si no hay WebGL, no se muestra nada (queda el fondo de siempre).
 */

const VERTEX = `
attribute vec3 position;
uniform mat4 uProj;
uniform mat4 uView;
uniform float uTime;
uniform vec2 uPointer;
uniform float uPixelRatio;
uniform float uSize;
varying float vAlpha;
varying float vLift;

void main() {
  vec3 p = position;
  float t = uTime * 0.32;
  float wave =
    sin(p.x * 0.32 + t) * 0.55 +
    sin(p.z * 0.46 - t * 1.25) * 0.42 +
    sin((p.x + p.z) * 0.18 + t * 0.7) * 0.5;
  float d = distance(p.xz, uPointer);
  float swell = 1.1 * exp(-d * d * 0.045);
  p.y += wave + swell;

  vec4 mv = uView * vec4(p, 1.0);
  gl_Position = uProj * mv;
  float depth = -mv.z;
  gl_PointSize = uSize * uPixelRatio * (1.0 + swell * 0.9 + max(wave, 0.0) * 0.35) * (14.0 / depth);

  vLift = clamp(wave * 0.55 + 0.5 + swell * 0.6, 0.0, 1.4);
  vAlpha = smoothstep(46.0, 9.0, depth) * smoothstep(1.5, 5.0, depth);
}
`;

const FRAGMENT = `
precision mediump float;
varying float vAlpha;
varying float vLift;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float r = length(c);
  if (r > 0.5) discard;
  float soft = smoothstep(0.5, 0.05, r);
  vec3 deep = vec3(0.03, 0.32, 0.55);
  vec3 sky = vec3(0.49, 0.83, 0.99);
  vec3 color = mix(deep, sky, clamp(vLift, 0.0, 1.0)) + vec3(0.35) * max(vLift - 1.0, 0.0);
  float alpha = soft * vAlpha * (0.28 + 0.5 * clamp(vLift, 0.0, 1.0));
  gl_FragColor = vec4(color * alpha, alpha);
}
`;

type Vec3 = [number, number, number];

function perspective(fovy: number, aspect: number, near: number, far: number) {
  const f = 1 / Math.tan(fovy / 2);
  const nf = 1 / (near - far);
  return new Float32Array([f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0]);
}

function lookAt(eye: Vec3, center: Vec3, up: Vec3 = [0, 1, 0]) {
  const normalize = (v: Vec3): Vec3 => {
    const l = Math.hypot(v[0], v[1], v[2]) || 1;
    return [v[0] / l, v[1] / l, v[2] / l];
  };
  const cross = (a: Vec3, b: Vec3): Vec3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const dot = (a: Vec3, b: Vec3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const z = normalize([eye[0] - center[0], eye[1] - center[1], eye[2] - center[2]]);
  const x = normalize(cross(up, z));
  const y = cross(z, x);
  return new Float32Array([x[0], y[0], z[0], 0, x[1], y[1], z[1], 0, x[2], y[2], z[2], 0, -dot(x, eye), -dot(y, eye), -dot(z, eye), 1]);
}

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function startField(host: HTMLElement, intensity: number) {
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: true, powerPreference: "low-power" });
  if (!gl) return () => {};

  const vs = compile(gl, gl.VERTEX_SHADER, VERTEX);
  const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
  const program = gl.createProgram();
  if (!vs || !fs || !program) return () => {};
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return () => {};
  gl.useProgram(program);

  // Sin GPU real (render por software) el efecto sería lento: no se muestra.
  const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
  const rendererName = debugInfo ? String(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)) : String(gl.getParameter(gl.RENDERER));
  if (/swiftshader|llvmpipe|softpipe|software|basic render/i.test(rendererName)) {
    gl.deleteProgram(program);
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return () => {};
  }
  let still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const small = window.innerWidth < 768;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

  // Malla de puntos sobre el plano XZ
  const step = small ? 0.62 : 0.42;
  const positions: number[] = [];
  for (let x = -26; x <= 26; x += step) {
    for (let z = -44; z <= 8; z += step) positions.push(x, 0, z);
  }
  const count = positions.length / 3;
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  const attribute = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(attribute);
  gl.vertexAttribPointer(attribute, 3, gl.FLOAT, false, 0, 0);

  const u = {
    proj: gl.getUniformLocation(program, "uProj"),
    view: gl.getUniformLocation(program, "uView"),
    time: gl.getUniformLocation(program, "uTime"),
    pointer: gl.getUniformLocation(program, "uPointer"),
    pixelRatio: gl.getUniformLocation(program, "uPixelRatio"),
    size: gl.getUniformLocation(program, "uSize"),
  };
  gl.uniform1f(u.pixelRatio, pixelRatio);
  gl.uniform1f(u.size, (small ? 3.2 : 2.6) * intensity);

  gl.disable(gl.DEPTH_TEST);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE); // aditivo con alfa premultiplicado
  gl.clearColor(0, 0, 0, 0);

  canvas.style.cssText = "width:100%;height:100%;display:block";
  host.appendChild(canvas);

  let aspect = 1;
  let time = 12;
  const pointer = { x: 4, y: -6 };
  const pointerTarget = { x: 4, y: -6 };
  let parallax = 0;
  let parallaxTarget = 0;

  const draw = () => {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniformMatrix4fv(u.proj, false, perspective((52 * Math.PI) / 180, aspect, 0.1, 80));
    gl.uniformMatrix4fv(u.view, false, lookAt([parallax * 1.2, 4.4, 9.5], [parallax * 0.6, 0.2, -8]));
    gl.uniform1f(u.time, time);
    gl.uniform2f(u.pointer, pointer.x, pointer.y);
    gl.drawArrays(gl.POINTS, 0, count);
  };

  const resize = () => {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    gl.viewport(0, 0, canvas.width, canvas.height);
    aspect = width / height;
    draw();
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  resize();

  const onPointer = (event: PointerEvent) => {
    const rect = host.getBoundingClientRect();
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    const ny = (event.clientY - rect.top) / rect.height - 0.5;
    pointerTarget.x = nx * 26;
    pointerTarget.y = -6 + ny * 14;
    parallaxTarget = nx;
  };

  let frame = 0;
  let visible = true;
  let last = performance.now();
  // Si el equipo no alcanza ~30 cuadros por segundo, se queda con un cuadro quieto.
  const samples: number[] = [];
  let warmup = 12; // los primeros cuadros compiten con la carga de la página
  const loop = (now: number) => {
    frame = 0;
    const delta = now - last;
    time += Math.min(delta / 1000, 0.05);
    last = now;
    if (warmup > 0) {
      warmup -= 1;
    } else if (samples.length < 60) {
      samples.push(delta);
      const elapsed = samples.reduce((sum, value) => sum + value, 0);
      if (samples.length === 60 || (samples.length >= 8 && elapsed > 1500)) {
        const sorted = [...samples].sort((a, b) => a - b);
        samples.length = 60;
        if (sorted[Math.floor(sorted.length / 2)] > 34) {
          still = true;
          draw();
          return;
        }
      }
    }
    pointer.x += (pointerTarget.x - pointer.x) * 0.045;
    pointer.y += (pointerTarget.y - pointer.y) * 0.045;
    parallax += (parallaxTarget - parallax) * 0.04;
    draw();
    if (visible && document.visibilityState === "visible") frame = requestAnimationFrame(loop);
  };
  const play = () => {
    if (still || frame) return;
    last = performance.now();
    frame = requestAnimationFrame(loop);
  };
  const pause = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
  };

  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) play();
    else pause();
  });
  intersection.observe(host);
  const onVisibility = () => (document.visibilityState === "visible" && visible ? play() : pause());
  document.addEventListener("visibilitychange", onVisibility);
  const onLost = (event: Event) => {
    event.preventDefault();
    pause();
    visible = false;
  };
  canvas.addEventListener("webglcontextlost", onLost);
  if (!still) window.addEventListener("pointermove", onPointer, { passive: true });

  draw();
  play();
  requestAnimationFrame(() => host.classList.add("is-ready"));

  return () => {
    pause();
    intersection.disconnect();
    resizeObserver.disconnect();
    document.removeEventListener("visibilitychange", onVisibility);
    window.removeEventListener("pointermove", onPointer);
    canvas.removeEventListener("webglcontextlost", onLost);
    gl.deleteBuffer(buffer);
    gl.deleteProgram(program);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    canvas.remove();
  };
}

export function HeroField({ className = "", intensity = 1 }: { className?: string; intensity?: number }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cleanup: () => void = () => {};
    let handle = 0;
    const run = () => {
      cleanup = startField(host, intensity);
    };

    const hasIdle = typeof window.requestIdleCallback === "function";
    const cancelWait = onFirstInteraction(() => {
      handle = hasIdle ? window.requestIdleCallback(run, { timeout: 1200 }) : window.setTimeout(run, 200);
    });

    return () => {
      cancelWait();
      if (hasIdle) window.cancelIdleCallback(handle);
      else window.clearTimeout(handle);
      cleanup();
    };
  }, [intensity]);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={`y-hero-field pointer-events-none absolute inset-0 opacity-0 transition-opacity ease-out [transition-duration:1400ms] [&.is-ready]:opacity-100 ${className}`}
    />
  );
}
