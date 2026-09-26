"use client";

import { useId, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { Plus } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { EASE_OUT } from "@/components/motion/ease";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";
import { type Experience } from "@/types";

const typeLabels: Record<Experience["type"], string> = {
  "full-time": "Full-time",
  contract: "Contract",
  freelance: "Freelance",
  "part-time": "Part-time",
  program: "Training program",
};

const listVariants = {
  open: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
  closed: {},
};

const itemVariants = {
  open: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: EASE_OUT } },
  closed: { opacity: 0, y: 14, filter: "blur(4px)" },
};

function Role({ exp, defaultOpen }: { exp: Experience; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();
  const panelId = useId();
  const [start, end] = exp.period.split(/\s+-\s+/);
  const startYear = start.match(/\d{4}/)?.[0] ?? start;
  const isCurrent = end?.toLowerCase() === "present";

  return (
    <motion.li layout={!reduce} className="relative pl-12 md:pl-16">
      <span aria-hidden="true" className="absolute left-0 top-9 flex h-7 w-7 items-center justify-center">
        {isCurrent && !reduce && (
          <span className="absolute h-7 w-7 animate-ping rounded-full bg-signal/40" />
        )}
        <span
          className={cn(
            "relative h-3.5 w-3.5 rounded-full border-2 transition-all duration-500",
            open || isCurrent ? "scale-110 border-signal bg-signal" : "border-ink bg-paper"
          )}
        />
      </span>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group grid w-full gap-2 py-8 text-left md:grid-cols-[minmax(0,3fr)_minmax(0,8fr)_auto] md:items-start md:gap-10"
      >
        <span className="flex items-baseline gap-3 md:flex-col md:gap-1">
          <span
            className="font-display text-4xl font-bold leading-none tracking-tight md:text-5xl"
            style={{ fontVariationSettings: '"wdth" 88' }}
          >
            {startYear}
          </span>
          <span className="text-base text-graphite">
            {start.replace(startYear, "").trim()} {start.replace(startYear, "").trim() && "–"} {end}
          </span>
        </span>

        <span className="flex min-w-0 flex-col">
          <span className="font-display text-2xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-signal md:text-3xl">
            {exp.role}
          </span>
          <span className="mt-1.5 text-lg text-graphite">
            {exp.company}, {typeLabels[exp.type].toLowerCase()}, {exp.duration.toLowerCase()}
          </span>
          <AnimatePresence initial={false}>
            {!open && (
              <motion.span
                key="preview"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                className="block overflow-hidden"
              >
                <span className="mt-3 block max-w-[60ch] truncate text-base text-graphite">{exp.summary}</span>
              </motion.span>
            )}
          </AnimatePresence>
        </span>

        <span
          aria-hidden="true"
          className={cn(
            "hidden h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300 md:flex",
            open ? "rotate-45 border-ink bg-ink text-paper" : "border-rule group-hover:border-ink"
          )}
        >
          <Plus size={20} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <motion.div
              variants={listVariants}
              initial={reduce ? false : "closed"}
              animate="open"
              className="grid pb-10 md:grid-cols-[minmax(0,3fr)_minmax(0,8fr)_auto] md:gap-10"
            >
              <div className="md:col-start-2">
                <motion.p variants={itemVariants} className="max-w-[60ch] text-lg leading-relaxed">
                  {exp.summary}
                </motion.p>
                <ul className="mt-6 max-w-[60ch] space-y-3">
                  {exp.responsibilities.map((r) => (
                    <motion.li
                      key={r}
                      variants={itemVariants}
                      className="flex gap-3.5 text-lg leading-relaxed text-graphite"
                    >
                      <span className="mt-3 h-px w-4 shrink-0 bg-ink" aria-hidden="true" />
                      {r}
                    </motion.li>
                  ))}
                </ul>
                <motion.p variants={itemVariants} className="mt-7 text-base text-graphite">
                  <span className="font-medium text-ink">Tools </span>
                  {exp.tools.join(", ")}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export function ExperienceSection() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.8", "end 0.6"] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <Section id="experience">
      <SectionHeading title="Experience" />
      <ol ref={listRef} className="relative border-y border-rule">
        <span aria-hidden="true" className="absolute bottom-0 left-[13px] top-0 w-0.5 bg-rule">
          <motion.span
            className="block h-full w-full origin-top bg-ink"
            style={{ scaleY: reduce ? 1 : line }}
          />
        </span>
        {experiences.map((exp, i) => (
          <Role key={exp.id} exp={exp} defaultOpen={i === 0} />
        ))}
      </ol>
    </Section>
  );
}
