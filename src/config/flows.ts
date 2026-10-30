import {
  BellRing,
  Database,
  FileCheck2,
  FileSpreadsheet,
  Gavel,
  Landmark,
  Mail,
  Receipt,
  ScanText,
  Server,
  Sheet,
  Signature,
  TriangleAlert,
  UserSearch,
  Users,
  Workflow,
} from "lucide-react";
import type { FlowNode } from "@/components/site/FlowDiagram";

/** Diagramas de flujo (haces de luz) de cada producto y del home. */
export type Flow = {
  hub: string;
  hubSub?: string;
  inputsLabel: string;
  outputsLabel: string;
  inputs: FlowNode[];
  outputs: FlowNode[];
};

export const FLOWS: Record<"home" | "sadt" | "axis" | "ocr", Flow> = {
  home: {
    hub: "YAGO",
    hubSub: "Valida, ejecuta y registra",
    inputsLabel: "Lo que ya usas",
    outputsLabel: "Donde queda listo",
    inputs: [
      { label: "Excel y planillas", icon: FileSpreadsheet },
      { label: "Workges", icon: Database },
      { label: "Correos y PDFs", icon: Mail },
    ],
    outputs: [
      { label: "Portal Mi DT", icon: Landmark },
      { label: "PJUD", icon: Gavel },
      { label: "Tu ERP o sistema", icon: Server },
    ],
  },
  sadt: {
    hub: "SADT",
    hubSub: "Valida y ejecuta",
    inputsLabel: "Carga",
    outputsLabel: "Resultado",
    inputs: [
      { label: "Archivo o planilla", icon: FileSpreadsheet },
      { label: "Workges", icon: Database },
    ],
    outputs: [
      { label: "Portal Mi DT", icon: Landmark },
      { label: "Comprobantes y PDFs", icon: FileCheck2 },
      { label: "Errores para reprocesar", icon: TriangleAlert },
    ],
  },
  axis: {
    hub: "AXIS",
    hubSub: "Consulta y verifica",
    inputsLabel: "Carga",
    outputsLabel: "Resultado",
    inputs: [
      { label: "Lote de personas", icon: Users },
      { label: "Consulta individual", icon: UserSearch },
    ],
    outputs: [
      { label: "Verificación en PJUD", icon: Gavel },
      { label: "Reporte con evidencia", icon: FileCheck2 },
      { label: "Monitoreo diario", icon: BellRing },
    ],
  },
  ocr: {
    hub: "OCR",
    hubSub: "Lee y estructura",
    inputsLabel: "Documentos",
    outputsLabel: "Datos listos",
    inputs: [
      { label: "Facturas", icon: Receipt },
      { label: "Contratos y formularios", icon: Signature },
      { label: "PDFs escaneados", icon: ScanText },
    ],
    outputs: [
      { label: "Planillas", icon: Sheet },
      { label: "ERP y sistemas", icon: Server },
      { label: "Flujos de backoffice", icon: Workflow },
    ],
  },
};
