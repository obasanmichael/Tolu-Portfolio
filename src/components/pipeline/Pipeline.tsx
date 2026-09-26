"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useTransform, type MotionValue } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PipelineProps {
  steps: string[];
  /** Steps where code checks the work before it moves on. */
  checks?: number[];
  /** The step where a person signs off. */
  approval?: number;
  /** 0 → 1 across the whole pipeline. */
  progress: MotionValue<number>;
  orientation: "horizontal" | "vertical";
  /** Optional one-line explanation per step. Shown on hover or focus horizontally, inline vertically. */
  notes?: string[];
  /** Optional title and subtitle under each step label (e.g. a role and company). */
  details?: { title: string; sub?: string }[];
  /** Text stamped on the approval step once it's reached. */
  stamp?: string;
}

function Marker({
  kind,
  reached,
  size = "md",
}: {
  kind: "step" | "check" | "approval";
  reached: boolean;
  size?: "md" | "lg";
}) {
  const box = size === "lg" ? "h-7 w-7" : "h-5 w-5";

  if (kind === "approval") {
    return (
      <span className={cn("relative flex items-center justify-center", box)}>
        <AnimatePresence>
          {reached && (
            <motion.span
              key="pulse"
              initial={{ scale: 0.6, opacity: 0.7 }}
              animate={{ scale: 2.6, opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 rotate-45 border-2 border-signal"
            />
          )}
        </AnimatePresence>
        <motion.span
          animate={reached ? { scale: [1, 1.35, 1] } : { scale: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "block h-[70%] w-[70%] rotate-45 border-2 transition-colors duration-300",
            reached ? "border-signal bg-signal" : "border-graphite bg-paper"
          )}
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "flex items-center justify-center rounded-full border-2 transition-colors duration-300",
        box,
        reached ? "border-ink bg-ink text-paper" : "border-rule bg-paper"
      )}
    >
      {kind === "check" && reached && <Check size={size === "lg" ? 15 : 12} strokeWidth={3} />}
    </span>
  );
}

export function Pipeline({
  steps,
  checks = [],
  approval,
  progress,
  orientation,
  notes,
  details,
  stamp = "Approved",
}: PipelineProps) {
  const last = steps.length - 1;
  const [reachedIndex, setReachedIndex] = useState(() => Math.floor(progress.get() * last + 0.001));

  useMotionValueEvent(progress, "change", (v) => {
    setReachedIndex(Math.floor(v * last + 0.001));
  });

  const fill = useTransform(progress, [0, 1], [0, 1]);
  const kindOf = (i: number) =>
    i === approval ? "approval" : checks.includes(i) ? "check" : "step";

  if (orientation === "horizontal") {
    return (
      <ol
        className="relative grid"
        style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
      >
        {/* Track spans from the first marker's centre to the last marker's centre. */}
        <span
          aria-hidden="true"
          className="absolute top-[10px] h-0.5 bg-rule"
          style={{ left: `${50 / steps.length}%`, right: `${50 / steps.length}%` }}
        >
          <motion.span className="block h-full origin-left bg-ink" style={{ scaleX: fill }} />
        </span>
        {steps.map((step, i) => {
          const reached = i <= reachedIndex;
          const kind = kindOf(i);
          return (
            <li
              key={step}
              tabIndex={notes ? 0 : undefined}
              className="group/step relative flex flex-col items-center text-center outline-none"
            >
              <Marker kind={kind} reached={reached} />
              <span
                className={cn(
                  "mt-4 px-2 leading-snug transition-colors duration-300",
                  details
                    ? "font-display text-2xl font-semibold tracking-tight lg:text-3xl"
                    : "text-base lg:text-lg",
                  reached ? "text-ink" : "text-graphite"
                )}
              >
                {step}
              </span>
              {details?.[i] && (
                <span
                  className={cn(
                    "mt-1 px-2 leading-snug transition-colors duration-300",
                    reached ? "text-ink" : "text-graphite"
                  )}
                >
                  <span className="block text-base font-medium lg:text-lg">{details[i].title}</span>
                  {details[i].sub && <span className="block text-base text-graphite">{details[i].sub}</span>}
                </span>
              )}
              {kind === "approval" && (
                <motion.span
                  initial={false}
                  animate={reached ? { opacity: 1, scale: 1, rotate: -4 } : { opacity: 0, scale: 1.6, rotate: -12 }}
                  transition={{ type: "spring", stiffness: 420, damping: 18 }}
                  className="mt-2 rounded-md border-2 border-signal px-2 py-0.5 text-sm font-semibold uppercase tracking-wide text-signal"
                >
                  {stamp}
                </motion.span>
              )}
              {notes?.[i] && (
                <span
                  role="tooltip"
                  className="pointer-events-none absolute top-full z-10 mt-3 w-52 translate-y-1 rounded-[10px] bg-ink px-4 py-3 text-left text-sm leading-snug text-paper opacity-0 shadow-lg transition-all duration-200 group-hover/step:translate-y-0 group-hover/step:opacity-100 group-focus/step:translate-y-0 group-focus/step:opacity-100"
                >
                  {notes[i]}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    );
  }

  return (
    <ol className="relative">
      <span aria-hidden="true" className="absolute bottom-3.5 left-[13px] top-3.5 w-0.5 bg-rule">
        <motion.span className="block h-full w-full origin-top bg-ink" style={{ scaleY: fill }} />
      </span>
      {steps.map((step, i) => {
        const reached = i <= reachedIndex;
        const kind = kindOf(i);
        return (
          <li key={step} className="relative flex items-start gap-6 py-3.5">
            <Marker kind={kind} reached={reached} size="lg" />
            <span className="-mt-0.5 flex flex-col">
              <span
                className={cn(
                  "font-display text-xl font-medium tracking-tight transition-colors duration-300 sm:text-2xl",
                  reached ? "text-ink" : "text-graphite/60"
                )}
              >
                {step}
              </span>
              {details?.[i] && (
                <span className="mt-0.5 text-lg font-medium">
                  {details[i].title}
                  {details[i].sub && <span className="font-normal text-graphite">, {details[i].sub}</span>}
                </span>
              )}
              {notes?.[i] && kind === "step" && (
                <span className="mt-1 text-base text-graphite">{notes[i]}</span>
              )}
              {kind !== "step" && (
                <span
                  className={cn(
                    "mt-1 text-base transition-colors duration-300",
                    kind === "approval" ? "text-signal" : "text-graphite"
                  )}
                >
                  {notes?.[i] ?? (kind === "approval" ? "A person approves before anything moves on" : "Checked in code, not by the model")}
                </span>
              )}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
