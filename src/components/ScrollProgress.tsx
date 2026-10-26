"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-[55] h-px origin-left bg-white"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
