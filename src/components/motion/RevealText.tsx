"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export function RevealText({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();

  const MotionTag = motion[Tag] as typeof motion.div;

  return (
    <div ref={ref} className="overflow-hidden">
      <MotionTag
        initial={prefersReduced ? false : { y: "105%", opacity: 0 }}
        animate={
          isInView
            ? { y: "0%", opacity: 1 }
            : prefersReduced
            ? { y: "0%", opacity: 1 }
            : { y: "105%", opacity: 0 }
        }
        transition={{
          duration: 0.65,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn("will-change-transform", className)}
      >
        {children}
      </MotionTag>
    </div>
  );
}
