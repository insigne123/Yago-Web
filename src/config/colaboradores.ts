// src/config/colaboradores.ts
// Config centralizada para logos/fotos de colaboradores

export type Collaborator = {
  name: string;
  logo: string; // ruta en /public (png/svg/webp)
  url?: string; // opcional: enlace del colaborador
};

export const COLABORADORES: Collaborator[] = [
  {
    name: "GrupoExpro",
    // Archivo ubicado en /public según tu screenshot
    logo: "/GrupoExpro-LATAM-negro.png",
    url: "https://grupoexpro.cl",
  },
  {
    name: "PSOL",
    // Archivo ubicado en /public según tu screenshot
    logo: "/PSOL.png",
    url: "https://psol.cl",
  },
];
