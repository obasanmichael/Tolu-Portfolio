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

/* ── Animated hamburger icon ─────────────────────── */
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

/* ── Main navbar ─────────────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Section observer */
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

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
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
      {/* ── Desktop / tablet header ─────────────── */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[120] transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Tolulope Obasan | home"
            className="group relative z-10 flex items-center gap-2"
          >
            <motion.span
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-sm font-bold text-accent"
              style={{ fontFamily: "var(--font-display)" }}
            >
              T
            </motion.span>
            <span
              className="hidden text-sm font-medium text-text/70 transition-colors group-hover:text-text sm:block"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tolulope
            </span>
          </Link>

          {/* ── Floating pill nav — hidden on mobile ── */}
          <nav
            aria-label="Main navigation"
            className={cn(
              "absolute left-1/2 hidden -translate-x-1/2 md:flex",
            )}
          >
            <motion.div
              animate={scrolled
                ? {
                    boxShadow: "0 0 0 1px rgba(155,239,143,0.14), 0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
                  }
                : {
                    boxShadow: "0 0 0 1px rgba(155,239,143,0.08), 0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
                  }
              }
              transition={{ duration: 0.4 }}
              className={cn(
                "flex items-center gap-0.5 rounded-full border px-1.5 py-1.5 backdrop-blur-2xl transition-all duration-500",
                scrolled
                  ? "border-border bg-bg/80"
                  : "border-border/60 bg-bg/40"
              )}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={cn(
                      "relative rounded-full px-4 py-1.5 text-[0.8rem] font-medium transition-colors duration-200",
                      isActive ? "text-bg" : "text-muted hover:text-text"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-accent"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </motion.div>
          </nav>

          {/* Right side */}
          <div className="relative z-10 flex items-center gap-3">
            {/* CV download — desktop */}
            <motion.a
              href="/Tolu_resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={cn(
                "hidden items-center gap-2 rounded-full border px-4 py-1.5 text-[0.8rem] font-medium transition-all duration-300 md:inline-flex",
                scrolled
                  ? "border-border-hover bg-accent-soft text-accent hover:bg-accent hover:text-bg"
                  : "border-border/50 bg-bg/30 text-muted backdrop-blur-xl hover:border-border-hover hover:text-accent"
              )}
            >
              <Download size={12} />
              CV
            </motion.a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className={cn(
                "relative z-[110] flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200 md:hidden",
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

      {/* ── Full-screen mobile overlay ────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[110] flex flex-col bg-bg/[0.97] backdrop-blur-2xl md:hidden"
          >
            {/* Nav links — pt accounts for fixed header height */}
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
                          isActive
                            ? "bg-accent-soft"
                            : "hover:bg-surface"
                        )}
                      >
                        <span
                          className={cn(
                            "text-2xl font-semibold tracking-tight transition-colors",
                            isActive ? "text-accent" : "text-text/80 group-hover:text-text"
                          )}
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {link.label}
                        </span>
                        <span
                          className={cn(
                            "text-xs transition-colors",
                            isActive ? "text-accent/60" : "text-text-soft/40 group-hover:text-text-soft"
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

            {/* Bottom: CV + socials */}
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
