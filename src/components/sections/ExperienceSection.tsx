"use client";

import { useRef } from "react";
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { StackPill } from "@/components/ui/StackPill";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";
import { type Experience } from "@/types";

const typeLabels: Record<string, string> = {
  "full-time": "Full-time",
  contract: "Contract",
  freelance: "Freelance",
  "part-time": "Part-time",
};

/* ─── Each card has its own scroll tracker for reversibility ──── */
function ExperienceCard({
  exp,
  index,
  dotOpacity,
}: {
  exp: Experience;
  index: number;
  dotOpacity: MotionValue<number>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.92", "start 0.42"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.4, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [52, 0]);
  const x = useTransform(scrollYProgress, [0, 1], [-18, 0]);

  return (
    <div ref={cardRef} className="relative pl-10 lg:pl-20">
      {/* Timeline dot — fades in as line draws past it */}
      <motion.div
        style={{ opacity: dotOpacity }}
        className={cn(
          "absolute left-[11px] top-6 h-2.5 w-2.5 rounded-full border-2 border-bg lg:left-[27px]",
          index === 0
            ? "border-accent bg-accent shadow-[0_0_10px_rgba(155,239,143,0.5)]"
            : "border-border bg-surface"
        )}
        aria-hidden="true"
      />

      {/* Card */}
      <motion.div
        style={{ opacity, y, x }}
        className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border-hover"
      >
        {/* Header */}
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="mb-1.5 flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
                  index === 0
                    ? "border-accent/20 bg-accent/10 text-accent"
                    : "border-border bg-surface-alt text-muted"
                )}
              >
                {typeLabels[exp.type]}
              </span>
              <span className="text-xs text-muted">{exp.period}</span>
              <span className="text-xs text-muted">· {exp.duration}</span>
            </div>
            <h3
              className="text-lg font-semibold text-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {exp.role}
            </h3>
            <p className="text-sm text-accent/80">{exp.company}</p>
          </div>
        </div>

        {/* Summary */}
        <p className="mb-4 text-sm leading-relaxed text-muted">
          {exp.summary}
        </p>

        {/* Responsibilities */}
        <ul className="mb-4 space-y-1.5">
          {exp.responsibilities.map((r, ri) => (
            <li key={ri} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/40" />
              {r}
            </li>
          ))}
        </ul>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5">
          {exp.tools.map((tool) => (
            <StackPill key={tool} name={tool} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Section ──────────────────────────────────────────────────── */
export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  /*
   * Section-level scroll drives the timeline line.
   * Starts tracking when top of section enters at 85% of viewport,
   * finishes when bottom exits at 20%.
   */
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.25"],
  });

  /* Line draws from 0 → 100% height */
  const lineScaleY = useTransform(sectionProgress, [0, 1], [0, 1]);

  /*
   * Dot opacities — each dot lights up when the line reaches it.
   * With 2 entries spaced equally, first dot at ~10%, second at ~55%.
   */
  const dot0Opacity = useTransform(sectionProgress, [0.08, 0.28], [0, 1]);
  const dot1Opacity = useTransform(sectionProgress, [0.5, 0.68], [0, 1]);
  const dotOpacities = [dot0Opacity, dot1Opacity];

  if (prefersReduced) {
    return (
      <Section id="experience">
        <SectionHeading label="Experience" title="Where I've worked." />
        <div className="relative space-y-8">
          <div className="absolute left-4 top-0 h-full w-px bg-border lg:left-8" />
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={i}
              dotOpacity={dotOpacities[i] ?? dotOpacities[0]}
            />
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section id="experience">
      <SectionHeading label="Experience" title="Where I've worked." />

      <div ref={sectionRef} className="relative">
        {/* Static track (full height, very faint) */}
        <div
          className="absolute left-4 top-0 h-full w-px bg-border/30 lg:left-8"
          aria-hidden="true"
        />

        {/* Animated drawing line — scaleY origin top */}
        <motion.div
          style={{ scaleY: lineScaleY, transformOrigin: "top center" }}
          className="absolute left-4 top-0 h-full w-px bg-linear-to-b from-accent/70 via-accent/40 to-accent/10 lg:left-8"
          aria-hidden="true"
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={i}
              dotOpacity={dotOpacities[i] ?? dotOpacities[0]}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
