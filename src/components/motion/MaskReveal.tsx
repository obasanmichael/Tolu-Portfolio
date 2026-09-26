"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { EASE_OUT } from "./ease";

interface MaskRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  /** "view" plays when scrolled into view; "mount" plays on page load. */
  trigger?: "view" | "mount";
  delay?: number;
  stagger?: number;
}

/** Words rise out of their own clipping line, like a title card. */
export function MaskReveal({
  text,
  as: Tag = "h2",
  className,
  trigger = "view",
  delay = 0,
  stagger = 0.045,
}: MaskRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const reduce = useReducedMotion();
  const play = inView;
  const words = text.split(" ");

  // Page-load reveals run in CSS so they start with first paint, in step with the
  // rest of the load sequence, instead of waiting for hydration.
  if (trigger === "mount") {
    return (
      <Tag className={className} aria-label={text}>
        {words.map((word, i) => (
          <span key={`${word}-${i}`} aria-hidden="true" className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <span
              className="mask-word inline-block"
              style={{ animationDelay: `${Math.round((delay + i * stagger) * 1000)}ms` }}
            >
              {word}
              {i < words.length - 1 && "\u00A0"}
            </span>
          </span>
        ))}
      </Tag>
    );
  }

  return (
    // The full sentence stays readable to assistive tech; the split words are decorative.
    <Tag ref={ref as never} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden="true" className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%" }}
            animate={play ? { y: "0%" } : undefined}
            transition={{ duration: 0.8, delay: delay + i * stagger, ease: EASE_OUT }}
          >
            {word}
            {i < words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
