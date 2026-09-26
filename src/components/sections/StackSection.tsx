"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { EASE_OUT } from "@/components/motion/ease";
import { stackCategories } from "@/data/stack";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const usedIn = (tool: string) => projects.filter((p) => p.stack.includes(tool));

function StackRow({ label, tools, index }: { label: string; tools: string[]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);
  const activeProjects = active ? usedIn(active) : [];

  return (
    <div
      ref={ref}
      className="grid gap-3 border-t border-rule py-7 md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] md:gap-10"
      onMouseLeave={() => setActive(null)}
    >
      <dt className="font-display text-xl font-semibold tracking-tight">{label}</dt>
      <dd>
        <ul className="flex max-w-[70ch] flex-wrap gap-x-1 gap-y-1.5 text-lg">
          {tools.map((tool, i) => {
            const projectsUsing = usedIn(tool);
            const interactive = projectsUsing.length > 0;
            return (
              <motion.li
                key={tool}
                initial={reduce ? false : { opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: index * 0.05 + i * 0.035 }}
              >
                {interactive ? (
                  <button
                    type="button"
                    onMouseEnter={() => setActive(tool)}
                    onFocus={() => setActive(tool)}
                    onClick={() => setActive((a) => (a === tool ? null : tool))}
                    aria-expanded={active === tool}
                    className={cn(
                      "rounded-md px-1.5 py-0.5 underline decoration-dotted decoration-2 underline-offset-[5px] transition-colors",
                      active === tool
                        ? "bg-ink text-paper decoration-transparent"
                        : "text-ink decoration-graphite/50 hover:decoration-ink"
                    )}
                  >
                    {tool}
                  </button>
                ) : (
                  <span className="px-1.5 py-0.5 text-graphite">{tool}</span>
                )}
              </motion.li>
            );
          })}
        </ul>
        <AnimatePresence initial={false}>
          {active && (
            <motion.p
              key={active}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
              className="overflow-hidden"
            >
              <span className="block pt-4 text-base text-graphite">
                {active} is in{" "}
                {activeProjects.map((p, i) => (
                  <span key={p.id}>
                    {p.detail ? (
                      <Link href={`/projects/${p.id}`} className="font-medium text-signal underline-offset-4 hover:underline">
                        {p.name}
                      </Link>
                    ) : (
                      <span className="font-medium text-ink">{p.name}</span>
                    )}
                    {i < activeProjects.length - 2 ? ", " : i === activeProjects.length - 2 ? " and " : ""}
                  </span>
                ))}
              </span>
            </motion.p>
          )}
        </AnimatePresence>
      </dd>
    </div>
  );
}

export function StackSection() {
  return (
    <Section id="stack">
      <SectionHeading
        title="Tools I build with"
        intro="Underlined tools are in the projects above. Point at one to see where."
      />
      <dl className="border-b border-rule">
        {stackCategories.map((category, i) => (
          <StackRow
            key={category.label}
            label={category.label}
            tools={category.items.map((t) => t.name)}
            index={i}
          />
        ))}
      </dl>
    </Section>
  );
}
