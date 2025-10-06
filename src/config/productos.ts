// src/config/productos.ts
// Fuente única de productos mostrados en la sección "Productos".

export type Product = {
  slug: string;
  name: string;
  tagline: string;        // resumen corto visible en la tarjeta
  highlights: string[];   // bullets rápidos
  cta?: { label: string; href: string; external?: boolean };
  badge?: "Nuevo" | "Beta" | "Pro" | "—";
};

export const PRODUCTS: Product[] = [
  // This file is ready for your products.
  // Add your first product here.
  // {
  //   slug: "my-product",
  //   name: "My Product",
  //   tagline: "A short and catchy tagline for your product.",
  //   highlights: [
  //     "Key feature or benefit 1",
  //     "Key feature or benefit 2",
  //     "Key feature or benefit 3",
  //   ],
  //   cta: { label: "Learn More", href: "/#contacto" },
  //   badge: "Nuevo",
  // },
];
