"use client";

import { useRef } from "react";
import { useReducedMotion, useScroll, useMotionValue } from "motion/react";
import { Pipeline, type PipelineProps } from "./Pipeline";

/** Project-page variant: the line draws as the reader scrolls through the steps. */
export function ScrollPipeline(props: Omit<PipelineProps, "progress" | "orientation">) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.55"] });
  const full = useMotionValue(1);

  return (
    <div ref={ref}>
      <Pipeline {...props} progress={reduce ? full : scrollYProgress} orientation="vertical" />
    </div>
  );
}
