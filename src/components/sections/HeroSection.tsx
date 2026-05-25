"use client";

import { motion } from "motion/react";
import { Download, ArrowDown, Terminal } from "lucide-react";
import { SocialLink } from "@/components/ui/SocialLink";
import { RotatingText } from "@/components/motion/RotatingText";
import { TypewriterText } from "@/components/motion/TypewriterText";
import { socials } from "@/data/socials";

function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="relative w-full max-w-sm"
    >
      {/* Glow behind card */}
      <div className="absolute -inset-4 rounded-3xl bg-accent/5 blur-2xl" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface font-mono text-sm">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Terminal size={11} />
            <span>profile.json</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-2.5" style={{ fontFamily: "var(--font-mono)" }}>
          <p className="text-muted">{"{"}</p>
          <div className="pl-4 space-y-2">
            <p>
              <span className="text-accent/70">&quot;status&quot;</span>
              <span className="text-muted">: </span>
              <span className="text-emerald-400">&quot;building&quot;</span>
            </p>
            <p>
              <span className="text-accent/70">&quot;focus&quot;</span>
              <span className="text-muted">: </span>
              <span className="text-text/80">&quot;full-stack products&quot;</span>
            </p>
            <p>
              <span className="text-accent/70">&quot;current&quot;</span>
              <span className="text-muted">: </span>
              <span className="text-text/80">
                &quot;<TypewriterText text="JobTrackr" delay={1200} speed={80} />
                &quot;
              </span>
            </p>
            <p>
              <span className="text-accent/70">&quot;stack&quot;</span>
              <span className="text-muted">: </span>
              <span className="text-text/80">&quot;Next.js / NestJS / PG&quot;</span>
            </p>
            <p>
              <span className="text-accent/70">&quot;open_to&quot;</span>
              <span className="text-muted">: </span>
              <span className="text-amber-400">&quot;opportunities&quot;</span>
            </p>
          </div>
          <p className="text-muted">{"}"}</p>
        </div>

        {/* Bottom accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>
    </motion.div>
  );
}

const EASE = [0.4, 0, 0.2, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: EASE },
});

export function HeroSection() {
  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-16 pb-12 sm:px-6 lg:px-8"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(to top, #080a0f, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Left: copy */}
          <div className="max-w-2xl flex-1">
            {/* Availability badge */}
            <motion.div {...fadeUp(0.1)} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Open to opportunities
              </span>
            </motion.div>

            {/* Rotating role */}
            <motion.p
              {...fadeUp(0.15)}
              className="mb-3 text-base font-medium text-muted"
            >
              <RotatingText />
            </motion.p>

            {/* Main headline */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl font-semibold leading-[1.15] tracking-tight text-text sm:text-5xl lg:text-[3.5rem]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              I build practical software systems for real{" "}
              <span className="text-gradient-accent">product</span> and{" "}
              <span className="text-gradient-accent">business</span> problems.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              {...fadeUp(0.28)}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              I&apos;m Tolulope Obasan, a full-stack engineer working across web,
              backend, mobile, and product-focused software development.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.36)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={handleScrollToProjects}
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-bg shadow-[0_0_24px_rgba(56,189,248,0.2)] transition-all duration-200 hover:bg-[#7dd3fc] hover:shadow-[0_0_36px_rgba(56,189,248,0.35)]"
              >
                View Projects
              </button>
              <a
                href="/Tolu_resume.pdf"
                download
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-surface px-6 text-sm font-medium text-text transition-all duration-200 hover:border-border-hover hover:bg-surface-alt"
              >
                <Download size={14} />
                Download CV
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
                }}
                className="inline-flex h-11 items-center gap-2 rounded-xl px-5 text-sm font-medium text-muted transition-colors duration-200 hover:text-text"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              {...fadeUp(0.44)}
              className="mt-8 flex items-center gap-4"
            >
              {socials.slice(0, 5).map((s) => (
                <SocialLink key={s.icon} label={s.label} href={s.href} icon={s.icon} />
              ))}
            </motion.div>
          </div>

          {/* Right: profile card */}
          <div className="hidden lg:flex lg:shrink-0 lg:items-center lg:justify-end">
            <ProfileCard />
          </div>
        </div>


      </div>
    </section>
  );
}
