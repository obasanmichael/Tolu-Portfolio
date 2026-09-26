"use client";

import { useEffect } from "react";
import { animate, useMotionValue, useReducedMotion } from "motion/react";
import { Pipeline } from "./Pipeline";

const STEPS = ["Request", "Model drafts", "Code checks", "You approve", "Shipped"];
const CHECK = 2;
const APPROVAL = 3;

/** The site's one page-load moment: work travels the line and waits at each gate. */
export function HeroPipeline() {
  const reduce = useReducedMotion();
  const progress = useMotionValue(reduce ? 1 : 0);
  useEffect(() => {
    const at = (i: number) => i / (STEPS.length - 1);
    if (reduce) {
      progress.set(1);
      return;
    }
    let cancelled = false;
    const run = async () => {
      await new Promise((r) => setTimeout(r, 700));
      const legs: [number, number, number][] = [
        [at(CHECK), 1.1, 450],
        [at(APPROVAL), 0.55, 750],
        [1, 0.55, 0],
      ];
      for (const [to, duration, pause] of legs) {
        if (cancelled) return;
        await animate(progress, to, { duration, ease: [0.45, 0, 0.2, 1] });
        await new Promise((r) => setTimeout(r, pause));
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [reduce, progress]);

  return (
    <div aria-label="How my systems work: request, model drafts, code checks, you approve, shipped" role="img">
      <div className="hidden md:block">
        <Pipeline steps={STEPS} checks={[CHECK]} approval={APPROVAL} progress={progress} orientation="horizontal" />
      </div>
      <div className="md:hidden">
        <Pipeline steps={STEPS} checks={[CHECK]} approval={APPROVAL} progress={progress} orientation="vertical" />
      </div>
    </div>
  );
}
