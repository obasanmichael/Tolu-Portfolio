"use client";

import { motion, useReducedMotion } from "motion/react";
import { Download } from "lucide-react";
import { SocialLink } from "@/components/ui/SocialLink";
import { TypingText } from "@/components/motion/TypingText";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { socials } from "@/data/socials";

const TYPING_PHRASES = [
  "building JobTrackr.",
  "designing polished interfaces.",
  "shipping reliable products.",
  "connecting frontend to real business workflows.",
];

const FOCUS_ITEMS = ["JobTrackr", "React Native", "NestJS", "Product engineering"];

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: prefersReduced ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden px-4 pt-28 pb-16 sm:px-6 md:pt-36 lg:px-8"
      aria-label="Hero"
    >
      {/* Very subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      {/* Radial glow at top */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden="true" />
      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to top, #070907, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.05)}
          className="eyebrow mb-8 text-accent"
        >
          Tolulope Obasan · Full-stack Engineer
        </motion.p>

        {/* Main headline */}
        <motion.h1
          {...fadeUp(0.12)}
          className="hero-title max-w-5xl text-text"
        >
          I build useful software for{" "}
          <span className="text-gradient-accent">web, mobile,</span>
          <br />
          and real operations.
        </motion.h1>

        {/* Typing line */}
        <motion.div
          {...fadeUp(0.24)}
          className="mt-8 text-lg text-muted sm:text-xl"
        >
          Currently{" "}
          <TypingText phrases={TYPING_PHRASES} />
        </motion.div>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.34)}
          className="body-large mt-6 max-w-2xl text-muted"
        >
          Full-stack engineer focused on polished interfaces, backend APIs,
          mobile products, and reliable software delivery.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.44)}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton onClick={() => handleScrollTo("projects")}>
            View selected work
          </MagneticButton>
          <MagneticButton href="/Tolu_resume.pdf" download variant="secondary">
            <Download size={14} />
            Download CV
          </MagneticButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          {...fadeUp(0.52)}
          className="mt-10 flex items-center gap-4"
        >
          {socials.slice(0, 5).map((s) => (
            <SocialLink key={s.icon} label={s.label} href={s.href} icon={s.icon} />
          ))}
        </motion.div>

        {/* Focus strip */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-16 flex flex-wrap items-center gap-2 text-xs text-text-soft"
        >
          <span className="text-accent/60 tracking-widest uppercase text-[0.65rem]">
            Current focus
          </span>
          {FOCUS_ITEMS.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="text-muted/60">·</span>
              <span className="text-muted/70">{item}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
