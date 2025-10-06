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
    logo: "/images/logos/grupoexpro.png",
    url: "https://grupoexpro.cl",
  },
  {
    name: "PSOL",
    logo: "/images/logos/psol.png",
    url: "https://psol.cl",
  },
  {
    name: "YAGO Partner",
    logo: "/images/logos/yago-partner.png",
  },
  {
    name: "Cliente/Partner 4",
    logo: "/images/logos/partner-4.png",
  },
];
