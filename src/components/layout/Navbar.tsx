"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Link from "next/link";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { SocialLink } from "@/components/ui/SocialLink";
import { socials } from "@/data/socials";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Principles", href: "#principles" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ── Animated hamburger ──────────────────────────── */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
      <motion.span
        animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="block h-px w-5 origin-center bg-current"
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className="block h-px w-3.5 origin-center self-end bg-current"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="block h-px w-5 origin-center bg-current"
      />
    </span>
  );
}

/* ── Desktop nav bar ─────────────────────────────── */
function DesktopNav({
  scrolled,
  activeSection,
  scrollTo,
}: {
  scrolled: boolean;
  activeSection: string;
  scrollTo: (href: string) => void;
}) {
  return (
    <div className="hidden w-full items-center justify-between md:flex">
      <motion.div
        initial={false}
        animate={{
          y: scrolled ? -2 : 0,
          opacity: scrolled ? 1 : 0.92,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto"
      >
        <Link
          href="/"
          aria-label="Tolulope Obasan — home"
          className="group flex items-center gap-3"
        >
          <span className="relative flex h-10 w-10 items-center justify-center">
            <span
              className="absolute inset-0 rounded-2xl border border-accent/15 bg-accent/5 backdrop-blur-xl transition-all duration-300 group-hover:rotate-6 group-hover:border-accent/30 group-hover:bg-accent/10"
              aria-hidden="true"
            />
            <span
              className="absolute -inset-1 rounded-[1.2rem] border border-accent/0 bg-linear-to-br from-accent/12 via-transparent to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
            <span
              className="relative flex h-7 w-7 items-center justify-center rounded-xl bg-bg/90 text-[0.72rem] font-semibold text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_18px_rgba(155,239,143,0.08)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              T
            </span>
          </span>

          <span className="hidden flex-col leading-none lg:flex">
            <span
              className="text-[0.78rem] font-semibold tracking-tight text-text/80 transition-colors group-hover:text-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tolulope
            </span>
            <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.24em] text-text-soft/70 transition-colors group-hover:text-accent/70">
              Obasan
            </span>
          </span>
        </Link>
      </motion.div>

      <nav
        aria-label="Main navigation"
        className="pointer-events-auto absolute left-1/2 -translate-x-1/2"
      >
        <motion.div
          initial={false}
          animate={{
            y: scrolled ? -2 : 0,
            boxShadow: scrolled
              ? "0 14px 44px rgba(0,0,0,0.46), 0 0 0 1px rgba(155,239,143,0.1), inset 0 1px 0 rgba(255,255,255,0.06)"
              : "0 8px 28px rgba(0,0,0,0.24), 0 0 0 1px rgba(155,239,143,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "relative flex items-center gap-1 overflow-hidden rounded-2xl border px-1.5 py-1.5 backdrop-blur-2xl transition-colors duration-300",
            scrolled ? "border-border bg-bg/82" : "border-border/50 bg-bg/42"
          )}
        >
          <div
            className="pointer-events-none absolute inset-x-5 top-0 h-px bg-linear-to-r from-transparent via-accent/35 to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-14 left-1/2 h-20 w-40 -translate-x-1/2 rounded-full bg-accent/8 blur-2xl"
            aria-hidden="true"
          />

          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  "group relative rounded-xl px-3.5 py-2 text-[0.76rem] font-medium transition-colors duration-200",
                  isActive ? "text-accent" : "text-muted hover:text-text"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl border border-accent/20 bg-accent/10 shadow-[0_0_24px_rgba(155,239,143,0.12),inset_0_1px_0_rgba(255,255,255,0.06)]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="absolute inset-x-3 bottom-1 h-px origin-center scale-x-0 bg-accent/50 transition-transform duration-200 group-hover:scale-x-100" />
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </motion.div>
      </nav>

      <motion.div
        initial={false}
        animate={{
          y: scrolled ? -2 : 0,
          opacity: scrolled ? 0.96 : 0.88,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto"
      >
        <motion.a
          href="/Tolu_resume.pdf"
          download
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          className={cn(
            "group flex items-center gap-2 rounded-full border px-4 py-2 text-[0.76rem] font-medium text-muted backdrop-blur-2xl transition-all duration-300 hover:border-border-hover hover:bg-accent-soft hover:text-accent",
            scrolled
              ? "border-border-hover bg-bg/78 shadow-[0_10px_32px_rgba(0,0,0,0.35)]"
              : "border-border/50 bg-bg/38"
          )}
        >
          <Download size={12} />
          CV
        </motion.a>
      </motion.div>
    </div>
  );
}

/* ── Main export ─────────────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-38% 0px -57% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href.slice(1));
    const el = document.getElementById(href.slice(1));
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* ── Header shell ────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-120">
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-500 sm:px-6 lg:px-8",
            scrolled ? "py-2.5" : "py-4"
          )}
        >
          {/* Desktop nav bar — centered with auto margins */}
          <div className="hidden w-full items-center justify-center md:flex">
            <DesktopNav
              scrolled={scrolled}
              activeSection={activeSection}
              scrollTo={scrollTo}
            />
          </div>

          {/* Mobile: logo left + hamburger right */}
          <div className="flex w-full items-center justify-between md:hidden">
            <Link
              href="/"
              aria-label="Tolulope Obasan — home"
              className="flex items-center gap-2"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-sm font-bold text-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                T
              </span>
              <span
                className="text-sm font-medium text-text/70"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Tolulope
              </span>
            </Link>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200",
                mobileOpen
                  ? "border-border-hover bg-surface-alt text-text"
                  : "border-border/50 bg-surface/60 text-muted hover:border-border hover:text-text"
              )}
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen overlay ───────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-110 flex flex-col bg-bg/97 backdrop-blur-2xl md:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-1 flex-col justify-center px-6 pt-20"
            >
              <ul className="space-y-1" role="list">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <motion.li
                      key={link.href}
                      initial={prefersReduced ? false : { opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.05 + i * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <button
                        onClick={() => scrollTo(link.href)}
                        className={cn(
                          "group flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition-all duration-200",
                          isActive ? "bg-accent-soft" : "hover:bg-surface"
                        )}
                      >
                        <span
                          className={cn(
                            "text-2xl font-semibold tracking-tight transition-colors",
                            isActive
                              ? "text-accent"
                              : "text-text/80 group-hover:text-text"
                          )}
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {link.label}
                        </span>
                        <span
                          className={cn(
                            "text-xs transition-colors",
                            isActive
                              ? "text-accent/60"
                              : "text-text-soft/40 group-hover:text-text-soft"
                          )}
                        >
                          0{i + 1}
                        </span>
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5 px-6 pb-10"
            >
              <div className="h-px bg-border" />
              <a
                href="/Tolu_resume.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-border-hover bg-accent-soft py-4 text-sm font-semibold text-accent transition-all duration-200 hover:bg-accent hover:text-bg"
              >
                <Download size={15} />
                Download CV
              </a>
              <div className="flex items-center justify-center gap-5">
                {socials.slice(0, 5).map((s) => (
                  <SocialLink
                    key={s.icon}
                    label={s.label}
                    href={s.href}
                    icon={s.icon}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
