"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { EASE_OUT } from "@/components/motion/ease";
import { principles } from "@/data/principles";
import { cn } from "@/lib/utils";

export function PrinciplesSection() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.7", "end 0.7"] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const [reached, setReached] = useState(-1);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setReached(Math.min(principles.length - 1, Math.floor(v * principles.length + 0.35) - 1));
  });

  const passedUpTo = reduce ? principles.length - 1 : reached;

  return (
    <Section id="principles">
      <SectionHeading
        title="How I work"
        intro="Six rules I hold myself to, on every product and every automation."
      />

      <ol ref={listRef} className="relative">
        {/* The rail: a faint track, and the ink line that fills as you read. */}
        <span aria-hidden="true" className="absolute bottom-10 left-[11px] top-10 w-0.5 bg-rule md:left-[13px]">
          <motion.span
            className="block h-full w-full origin-top bg-ink"
            style={{ scaleY: reduce ? 1 : line }}
          />
        </span>

        {principles.map((p, i) => {
          const passed = i <= passedUpTo;
          const current = i === passedUpTo;
          return (
            <li
              key={p.title}
              className="relative grid gap-4 py-10 pl-12 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-12 md:py-14 md:pl-16"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-[3.1rem] flex h-6 w-6 items-center justify-center md:top-[4.1rem] md:h-7 md:w-7"
              >
                <span
                  className={cn(
                    "block h-[62%] w-[62%] rotate-45 border-2 transition-all duration-500",
                    current
                      ? "scale-125 border-signal bg-signal"
                      : passed
                        ? "border-ink bg-ink"
                        : "border-graphite bg-paper"
                  )}
                />
              </span>

              <h3
                className={cn(
                  "font-display text-[clamp(2rem,4.4vw,3.9rem)] font-bold leading-[0.95] tracking-[-0.035em] transition-[color,-webkit-text-stroke-color] duration-700",
                  passed ? "text-ink" : "text-transparent"
                )}
                style={{
                  fontVariationSettings: '"wdth" 90',
                  WebkitTextStroke: passed ? "1.5px transparent" : "1.5px var(--graphite)",
                }}
              >
                {p.title}
              </h3>

              <motion.p
                initial={false}
                animate={
                  passed
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, y: 18, filter: "blur(6px)" }
                }
                transition={{ duration: 0.7, ease: EASE_OUT, delay: passed ? 0.12 : 0 }}
                className="max-w-[42ch] self-end text-lg leading-relaxed text-graphite md:pb-1.5"
              >
                {p.description}
              </motion.p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
