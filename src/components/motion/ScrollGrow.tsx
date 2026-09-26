"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/** Grows its child from slightly inset to full size as it scrolls into the reading area. */
export function ScrollGrow({ children, from = 0.9 }: { children: React.ReactNode; from?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.95", "start 0.3"] });
  const scale = useTransform(scrollYProgress, [0, 1], [from, 1]);

  return (
    <motion.div ref={ref} style={reduce ? undefined : { scale }} className="origin-top">
      {children}
    </motion.div>
  );
}
