"use client";

import dynamic from "next/dynamic";

const AuditWidget = dynamic(
  () => import("@/components/landing/AuditWidget").then((mod) => mod.AuditWidget),
  { ssr: false }
);

export function DeferredAuditWidget() {
  return <AuditWidget />;
}
