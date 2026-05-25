"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type WordSwapProps = {
  words: string[];
  interval?: number;
  className?: string;
};

export function WordSwap({ words, interval = 2600, className }: WordSwapProps) {
  const [index, setIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval, prefersReduced]);

  if (prefersReduced) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span
      className={`relative inline-flex items-center overflow-hidden ${className ?? ""}`}
      style={{ verticalAlign: "bottom" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block text-gradient-accent"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
