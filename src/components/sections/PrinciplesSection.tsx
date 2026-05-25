"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";
import { SectionHeading } from "@/components/layout/Section";
import { principles } from "@/data/principles";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

/*
 * Each principle gets a distinct but on-brand dark bg.
 * Transitions are smooth via useTransform interpolation.
 */
const BG_COLORS = [
  "#070907", // 01 — base
  "#061009", // 02 — forest green
  "#051310", // 03 — dark teal
  "#090d07", // 04 — dark olive
  "#0d1006", // 05 — deep moss
];

/* ─── Shared scroll-driven layout (mobile + desktop) ─── */
function ScrollLayout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    BG_COLORS
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      Math.floor(v * principles.length),
      principles.length - 1
    );
    setActive(Math.max(0, idx));
  });

  return (
    <>
      {/* Heading — normal flow, scrolls away before pinning begins */}
      <div className="mx-auto max-w-6xl px-4 pb-6 pt-24 sm:px-6 lg:px-8">
        <SectionHeading
          label="How I Work"
          title="Engineering principles."
          description="The principles I bring into every product and engineering workflow."
        />
      </div>

      {/* Tall scroll container — height controls how long we stay pinned */}
      <div
        ref={containerRef}
        style={{ height: `${principles.length * 100}vh` }}
        className="relative"
      >
        {/* Sticky viewport panel */}
        <motion.div
          style={{ backgroundColor: bgColor }}
          className="sticky top-0 h-svh overflow-hidden"
        >

          {/* ═══ MOBILE / TABLET (< lg) ═══════════════════════════ */}
          <div className="flex h-full flex-col lg:hidden">
            {/* Giant ghost number */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`m-ghost-${active}`}
                  initial={{ opacity: 0, scale: 0.82 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.18 }}
                  transition={{ duration: 0.65, ease: EASE }}
                  className="select-none font-bold text-accent/[0.05]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(200px, 60vw, 420px)",
                    lineHeight: 1,
                  }}
                >
                  {principles[active].number}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-28 pt-24 sm:px-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`m-content-${active}`}
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -36 }}
                  transition={{ duration: 0.48, ease: EASE }}
                >
                  <p className="eyebrow mb-7 text-accent">
                    {principles[active].number}&nbsp;/&nbsp;0{principles.length}
                  </p>
                  <h3
                    className="section-title mb-6 text-text"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {principles[active].title}
                  </h3>
                  <p className="body-large max-w-md text-muted">
                    {principles[active].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile progress — pills + bar */}
            <div className="absolute bottom-8 left-6 right-6 z-10 sm:left-10 sm:right-10">
              <div className="mb-4 flex items-center gap-2">
                {principles.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      width: i === active ? 32 : 8,
                      opacity: i === active ? 1 : 0.25,
                    }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="h-[3px] rounded-full bg-accent"
                  />
                ))}
              </div>
              <div className="h-px w-full overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full origin-left rounded-full bg-accent/40"
                  style={{ scaleX: scrollYProgress }}
                />
              </div>
            </div>
          </div>

          {/* ═══ DESKTOP (lg+) ══════════════════════════════════════ */}
          <div className="hidden h-full lg:flex">

            {/* Left column — principle list with animated track */}
            <div className="relative flex h-full w-[40%] flex-shrink-0 flex-col justify-center px-12 xl:px-20">

              {/* Vertical progress track on the right edge */}
              <div className="absolute right-0 top-0 h-full w-px bg-border/40">
                {/* Growing fill line */}
                <motion.div
                  className="absolute left-0 top-0 w-full origin-top bg-accent/50"
                  style={{
                    scaleY: scrollYProgress,
                    transformOrigin: "top center",
                  }}
                />
                {/* Traveling dot */}
                <motion.div
                  className="absolute -right-[3.5px] h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(155,239,143,0.6)]"
                  animate={{
                    top: `${((active + 0.5) / principles.length) * 100}%`,
                  }}
                  transition={{ type: "spring", stiffness: 160, damping: 26 }}
                  style={{ translateY: "-50%" }}
                />
              </div>

              {/* Eyebrow */}
              <p className="eyebrow mb-10 text-accent/60">How I Work</p>

              {/* Principle items */}
              <ul className="space-y-1">
                {principles.map((p, i) => (
                  <motion.li
                    key={p.number}
                    animate={{
                      opacity: i === active ? 1 : i < active ? 0.3 : 0.22,
                      x: i === active ? 4 : 0,
                    }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="flex items-baseline gap-4 py-2.5"
                  >
                    <span
                      className={cn(
                        "shrink-0 w-7 text-sm font-bold transition-colors duration-300",
                        i === active ? "text-accent" : "text-text-soft/40"
                      )}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {p.number}
                    </span>
                    <span
                      className={cn(
                        "text-base font-medium leading-snug transition-colors duration-300",
                        i === active ? "text-text" : "text-muted/50"
                      )}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {p.title}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Scroll progress bar at bottom */}
              <div className="absolute bottom-10 left-12 right-12 xl:left-20 xl:right-20">
                <div className="h-px w-full overflow-hidden rounded-full bg-border/50">
                  <motion.div
                    className="h-full origin-left bg-accent/40"
                    style={{ scaleX: scrollYProgress }}
                  />
                </div>
              </div>
            </div>

            {/* Right column — active principle detail */}
            <div className="relative flex flex-1 flex-col justify-center overflow-hidden px-14 xl:px-20">

              {/* Ghost number — large, faint, slides in from right */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`d-ghost-${active}`}
                    initial={{ opacity: 0, x: 48 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -48 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="select-none pr-8 font-bold text-accent/[0.045]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(180px, 20vw, 300px)",
                      lineHeight: 1,
                    }}
                  >
                    {principles[active].number}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Principle content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`d-content-${active}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="relative z-10"
                >
                  <p className="eyebrow mb-8 text-accent">
                    {principles[active].number}&nbsp;/&nbsp;0{principles.length}
                  </p>

                  <h3
                    className="mb-6 font-semibold tracking-tight text-text"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.4rem, 3.8vw, 4.2rem)",
                      lineHeight: 0.96,
                      letterSpacing: "-0.055em",
                    }}
                  >
                    {principles[active].title}
                  </h3>

                  <div className="mb-8 h-px w-12 bg-accent/40" />

                  <p className="body-large max-w-lg text-muted">
                    {principles[active].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
          {/* ═════════════════════════════════════════════════════════ */}

        </motion.div>
      </div>

      {/* Breathing room after pinned zone */}
      <div className="h-16" />
    </>
  );
}

/* ─── Static fallback (prefers-reduced-motion) ───────── */
function StaticLayout() {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="How I Work"
          title="Engineering principles."
          description="The principles I bring into every product and engineering workflow."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.number}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <span
                className="mb-3 block text-4xl font-bold leading-none text-accent/20"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.number}
              </span>
              <h3
                className="mb-2 text-base font-semibold text-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Root export ──────────────────────────────────────── */
export function PrinciplesSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="principles" className="relative">
      {prefersReduced ? <StaticLayout /> : <ScrollLayout />}
    </section>
  );
}
