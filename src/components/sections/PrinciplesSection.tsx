"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { principles } from "@/data/principles";
import { cn } from "@/lib/utils";

export function PrinciplesSection() {
  const [active, setActive] = useState(0);

  return (
    <Section id="principles">
      <SectionHeading
        label="How I Work"
        title="Engineering principles."
        description="I like building software with a clear sense of purpose — not just screens and features."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Principle list — desktop sidebar */}
        <div className="hidden lg:col-span-2 lg:flex lg:flex-col lg:gap-2">
          {principles.map((p, i) => (
            <button
              key={p.number}
              onClick={() => setActive(i)}
              className={cn(
                "group flex items-start gap-4 rounded-xl p-4 text-left transition-all duration-200",
                active === i
                  ? "border border-border-hover bg-surface"
                  : "border border-transparent hover:border-border hover:bg-surface/50"
              )}
            >
              <span
                className={cn(
                  "mt-0.5 text-xs font-mono font-semibold transition-colors",
                  active === i ? "text-accent" : "text-muted"
                )}
                style={{ fontFamily: "var(--font-mono)" }}
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

        {/* Active principle detail — desktop */}
        <div className="hidden lg:col-span-3 lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
              className="flex h-full flex-col justify-center rounded-2xl border border-border-hover bg-surface p-8"
            >
              <span
                className="mb-4 text-4xl font-bold text-accent/20"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {principles[active].number}
              </span>
              <h3
                className="mb-4 text-2xl font-semibold text-text"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {principles[active].title}
              </h3>
              <p className="text-base leading-relaxed text-muted">
                {principles[active].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: all cards stacked */}
        <div className="col-span-full flex flex-col gap-4 lg:hidden">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <div className="mb-2 flex items-center gap-3">
                <span
                  className="text-xs font-mono font-semibold text-accent"
                  style={{ fontFamily: "var(--font-mono)" }}
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
