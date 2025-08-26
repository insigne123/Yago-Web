"use client";

import { motion } from "framer-motion";

const blobCommon =
  "pointer-events-none absolute rounded-full mix-blend-screen opacity-30 blur-3xl";

export function AnimatedBlobs() {
  return (
    <>
      <motion.div
        className={`${blobCommon} -top-24 left-10 h-72 w-72 bg-fuchsia-400`}
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${blobCommon} top-40 -right-10 h-80 w-80 bg-cyan-400`}
        animate={{ y: [0, -25, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${blobCommon} bottom-10 left-1/3 h-64 w-64 bg-emerald-400`}
        animate={{ y: [0, 16, 0], x: [0, -6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
