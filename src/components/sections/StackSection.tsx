"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { StackPill } from "@/components/ui/StackPill";
import { stackCategories } from "@/data/stack";
import { cn } from "@/lib/utils";

export function StackSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <Section id="stack" className="bg-surface/30">
      <SectionHeading
        label="Tech Stack"
        title="What I build with."
        description="Tools and technologies I use day-to-day across web, backend, and mobile development."
      />

      <div className="space-y-6">
        {stackCategories.map((category, ci) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: ci * 0.08,
              ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
            }}
            className={cn(
              "group rounded-2xl border border-border bg-surface p-5 transition-all duration-300 cursor-pointer",
              activeCategory === category.label
                ? "border-border-hover"
                : "hover:border-border-hover"
            )}
            onClick={() =>
              setActiveCategory(
                activeCategory === category.label ? null : category.label
              )
            }
          >
            <div className="mb-3 flex items-center justify-between">
              <span
                className="text-xs font-semibold uppercase tracking-widest text-accent"
              >
                {category.label}
              </span>
              <span className="text-xs text-muted">
                {category.items.length} tools
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, ii) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.25,
                    delay: ci * 0.06 + ii * 0.03,
                  }}
                >
                  <StackPill
                    name={item.name}
                    glowing={activeCategory === category.label}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
