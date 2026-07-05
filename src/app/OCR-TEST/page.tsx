import type { Metadata } from "next";
import { MobileCarnetScan } from "@/components/ocr/MobileCarnetScan";

export const metadata: Metadata = {
  title: "Escaneo de Carnet | YAGO OCR Test",
  description: "Prueba movil de OCR para carnet chileno frente y reverso.",
  alternates: {
    canonical: "/OCR-TEST",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function OcrTestPage() {
  return <MobileCarnetScan />;
}
