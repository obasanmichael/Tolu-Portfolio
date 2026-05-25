"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { principles } from "@/data/principles";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function PrinciplesSection() {
  const [active, setActive] = useState(0);

  return (
    <Section id="principles">
      <SectionHeading
        label="How I Work"
        title="Engineering principles."
        description="The principles I bring into every product and engineering workflow."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Sidebar — desktop */}
        <div className="hidden lg:col-span-2 lg:flex lg:flex-col lg:gap-1.5">
          {principles.map((p, i) => (
            <button
              key={p.number}
              onClick={() => setActive(i)}
              className={cn(
                "group flex items-center gap-5 rounded-xl p-4 text-left transition-all duration-200",
                active === i
                  ? "border border-border-hover bg-surface"
                  : "border border-transparent hover:border-border hover:bg-surface/50"
              )}
            >
              <span
                className={cn(
                  "shrink-0 text-3xl font-bold leading-none transition-colors",
                  active === i ? "text-accent/30" : "text-text-soft/30"
                )}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.number}
              </span>
              <span
                className={cn(
                  "text-sm font-medium transition-colors",
                  active === i ? "text-text" : "text-muted group-hover:text-text"
                )}
              >
                {p.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active detail — desktop */}
        <div className="hidden lg:col-span-3 lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="flex h-full flex-col justify-center rounded-2xl border border-border-hover bg-surface p-9"
            >
              <span
                className="mb-5 block text-7xl font-bold leading-none text-accent/15"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {principles[active].number}
              </span>
              <h3
                className="mb-4 text-2xl font-semibold tracking-tight text-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {principles[active].title}
              </h3>
              <p className="text-base leading-relaxed text-muted">
                {principles[active].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: stacked cards */}
        <div className="col-span-full flex flex-col gap-4 lg:hidden">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <div className="mb-3 flex items-center gap-4">
                <span
                  className="text-3xl font-bold leading-none text-accent/25"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.number}
                </span>
                <h3 className="text-sm font-semibold text-text">{p.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
