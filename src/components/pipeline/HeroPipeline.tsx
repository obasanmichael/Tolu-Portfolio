"use client";

import { useEffect } from "react";
import { animate, useMotionValue, useReducedMotion } from "motion/react";
import { Pipeline } from "./Pipeline";
import { journey, journeyStamp } from "@/data/journey";

const LABELS = journey.map((j) => j.label);
const DETAILS = journey.map((j) => ({ title: j.title, sub: j.sub }));
const NOTES = journey.map((j) => j.note);
const NOW = journey.length - 1;

/** The site's one page-load moment: the line travels through my career and stops at "Now". */
export function HeroPipeline() {
  const reduce = useReducedMotion();
  const progress = useMotionValue(reduce ? 1 : 0);

  useEffect(() => {
    if (reduce) {
      progress.set(1);
      return;
    }
    let cancelled = false;
    const run = async () => {
      await new Promise((r) => setTimeout(r, 1500));
      for (let i = 1; i <= NOW; i++) {
        if (cancelled) return;
        await animate(progress, i / NOW, { duration: 0.7, ease: [0.45, 0, 0.2, 1] });
        await new Promise((r) => setTimeout(r, i === NOW ? 0 : 260));
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [reduce, progress]);

  const shared = {
    steps: LABELS,
    details: DETAILS,
    notes: NOTES,
    approval: NOW,
    stamp: journeyStamp,
    progress,
  };

  return (
    <div>
      <h2 className="sr-only">My path so far</h2>
      <div className="hidden md:block">
        <Pipeline {...shared} orientation="horizontal" />
      </div>
      <div className="md:hidden">
        <Pipeline {...shared} orientation="vertical" />
      </div>
    </div>
  );
}
