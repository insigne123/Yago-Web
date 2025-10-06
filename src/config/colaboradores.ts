// src/config/colaboradores.ts
// Config centralizada para logos/fotos de colaboradores

export type Collaborator = {
  name: string;
  logo: string;
  url?: string;
};

export const COLABORADORES: Collaborator[] = [
  {
    name: "GrupoExpro",
    logo: "/GrupoExpro-LATAM-negro.png",
    url: "https://grupoexpro.cl",
  },
  {
    name: "PSOL",
    logo: "/PSOL.png",
    url: "https://psol.cl",
  },
];
