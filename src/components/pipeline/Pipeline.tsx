"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useTransform, type MotionValue } from "motion/react";
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
        <span
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

export function Pipeline({ steps, checks = [], approval, progress, orientation }: PipelineProps) {
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
            <li key={step} className="relative flex flex-col items-center text-center">
              <Marker kind={kind} reached={reached} />
              <span
                className={cn(
                  "mt-4 px-2 text-base leading-snug transition-colors duration-300 lg:text-lg",
                  reached ? "text-ink" : "text-graphite"
                )}
              >
                {step}
              </span>
              {kind === "approval" && (
                <span
                  className={cn(
                    "mt-1 text-sm font-medium text-signal transition-opacity duration-300",
                    reached ? "opacity-100" : "opacity-0"
                  )}
                >
                  Approved
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
              {kind !== "step" && (
                <span
                  className={cn(
                    "mt-1 text-base transition-colors duration-300",
                    kind === "approval" ? "text-signal" : "text-graphite"
                  )}
                >
                  {kind === "approval" ? "A person approves before anything moves on" : "Checked in code, not by the model"}
                </span>
              )}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
