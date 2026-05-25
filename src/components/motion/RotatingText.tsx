"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const roles = [
  "Full-stack Engineer",
  "Frontend Product Builder",
  "React / Next.js Developer",
  "Backend-aware Engineer",
  "Mobile + Web Builder",
];

export function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-flex h-[1.2em] items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
          className="text-gradient-accent inline-block whitespace-nowrap"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
