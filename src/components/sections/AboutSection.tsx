"use client";

import { motion } from "motion/react";
import { Section, SectionHeading } from "@/components/layout/Section";

const traits = [
  "Clarity over cleverness, always.",
  "I think about the user, not just the ticket.",
  "Reliable code matters more than impressive code.",
  "I work well across frontend, backend, and product.",
];

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
        >
          <SectionHeading
            label="About"
            title="Engineer who builds what matters."
          />
          <p className="text-base leading-relaxed text-muted">
            I build across web, mobile, and backend, and I care about the whole
            picture, not just my part of it. I want the product to make sense,
            the code to be readable, and the user to actually enjoy using it.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            I work best when I understand the problem first. After that, I move
            fast, ship clean, and leave things better than I found them.
          </p>
        </motion.div>

        {/* Right: traits */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
          className="flex flex-col justify-center"
        >
          <ul className="space-y-4">
            {traits.map((trait, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + i * 0.08,
                  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
                }}
                className="flex items-start gap-3"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-base text-text/80">{trait}</span>
              </motion.li>
            ))}
          </ul>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { value: "3+", label: "Years building" },
              { value: "4+", label: "Products shipped" },
              { value: "Web + Mobile", label: "Full-stack scope" },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="rounded-xl border border-border bg-surface p-4 text-center"
              >
                <p
                  className="text-lg font-semibold text-accent"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {value}
                </p>
                <p className="mt-0.5 text-xs text-muted">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
