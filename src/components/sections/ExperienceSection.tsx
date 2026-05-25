"use client";

import { motion } from "motion/react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { StackPill } from "@/components/ui/StackPill";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";

const typeLabels: Record<string, string> = {
  "full-time": "Full-time",
  contract: "Contract",
  freelance: "Freelance",
  "part-time": "Part-time",
};

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading
        label="Experience"
        title="Where I've worked."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-px bg-border lg:left-8" aria-hidden="true" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
              }}
              className="relative pl-10 lg:pl-20"
            >
              {/* Timeline dot */}
              <div
                className={cn(
                  "absolute left-[11px] top-5 h-2.5 w-2.5 rounded-full border-2 border-bg lg:left-[27px]",
                  i === 0 ? "border-accent bg-accent" : "border-border bg-surface"
                )}
                aria-hidden="true"
              />

              <div className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border-hover">
                {/* Header */}
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium",
                          i === 0
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
                      style={{ fontFamily: "var(--font-heading)" }}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
