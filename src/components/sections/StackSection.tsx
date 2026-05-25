"use client";

import { motion } from "motion/react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { StackPill } from "@/components/ui/StackPill";
import { stackCategories } from "@/data/stack";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function StackSection() {
  return (
    <Section id="stack" className="bg-surface/20">
      <SectionHeading
        label="Tech Stack"
        title="Tools I build with."
        description="Technologies I use to design, build, ship, and maintain software."
      />

      <div className="space-y-10">
        {stackCategories.map((category, ci) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: ci * 0.07, ease: EASE }}
          >
            <p className="eyebrow mb-4 text-accent/70">{category.label}</p>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, ii) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: ci * 0.05 + ii * 0.025,
                    ease: EASE,
                  }}
                >
                  <StackPill name={item.name} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
