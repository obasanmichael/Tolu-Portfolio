"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { Download } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Logo } from "@/components/ui/Logo";
import { SocialLink } from "@/components/ui/SocialLink";
import { EASE_OUT } from "@/components/motion/ease";
import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", id: "work" },
  { label: "How I work", id: "principles" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [enabled]);
  return enabled ? active : null;
}

function MenuButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls="mobile-nav"
      aria-label={open ? "Close menu" : "Open menu"}
      className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full"
    >
      <motion.span
        animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
        className="block h-0.5 w-5 rounded-full bg-ink"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
        className="block h-0.5 w-5 rounded-full bg-ink"
      />
    </button>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const lastY = useRef(0);
  const active = useActiveSection(isHome);

  useMotionValueEvent(scrollY, "change", (y) => {
    setCompact(y > 64);
    // Tuck away while reading downwards; come back the moment the reader scrolls up.
    if (y > 480 && y > lastY.current + 4) setHidden(true);
    else if (y < lastY.current - 4 || y <= 480) setHidden(false);
    lastY.current = y;
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const spring = reduce ? { duration: 0 } : { type: "spring" as const, stiffness: 380, damping: 34 };

  return (
    <>
      {/* Holds the header's space so page content never sits under it. */}
      <div aria-hidden="true" className="h-20" />

      <motion.header
        style={{ viewTransitionName: "site-header" }}
        animate={{ y: hidden && !open ? -110 : 0 }}
        transition={spring}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5"
      >
        <motion.div
          initial={false}
          animate={{
            maxWidth: compact ? 760 : 1280,
            paddingLeft: compact ? 10 : 14,
            paddingRight: compact ? 8 : 14,
          }}
          transition={spring}
          className={cn(
            "mx-auto flex h-14 items-center justify-between gap-3 rounded-full border transition-[background-color,border-color,box-shadow] duration-500",
            compact || open
              ? "border-rule bg-paper/80 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label="Tolulope Obasan, home"
            className="group flex items-center gap-3 font-display text-lg font-semibold tracking-tight"
          >
            <Logo />
            <AnimatePresence initial={false}>
              {!compact && (
                <motion.span
                  key="name"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  className="hidden overflow-hidden whitespace-nowrap sm:block"
                >
                  Tolulope Obasan
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <nav aria-label="Main" className="hidden md:block" onMouseLeave={() => setHovered(null)}>
            <ul className="flex items-center">
              {navLinks.map((l) => {
                const isActive = active === l.id;
                return (
                  <li key={l.id} className="relative">
                    <Link
                      href={`/#${l.id}`}
                      onMouseEnter={() => setHovered(l.id)}
                      onFocus={() => setHovered(l.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative z-10 flex h-10 items-center px-4 text-[0.95rem] transition-colors duration-200",
                        isActive || hovered === l.id ? "text-ink" : "text-graphite"
                      )}
                    >
                      {l.label}
                    </Link>
                    {hovered === l.id && (
                      <motion.span
                        layoutId="nav-hover"
                        transition={spring}
                        className="absolute inset-0 rounded-full bg-surface"
                      />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        transition={spring}
                        className="absolute bottom-1 left-1/2 z-10 h-1 w-1 -translate-x-1/2 rotate-45 bg-signal"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <a
              href="/Tolu_resume.pdf"
              download
              className="hidden h-10 items-center gap-2 rounded-full bg-ink px-4 text-[0.95rem] font-medium text-paper transition-transform duration-200 hover:scale-[1.04] active:scale-95 md:inline-flex"
            >
              <Download size={15} aria-hidden="true" />
              CV
            </a>
            <div className="md:hidden">
              <MenuButton open={open} onClick={() => setOpen((v) => !v)} />
            </div>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={reduce ? { opacity: 0 } : { clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-paper px-6 pb-10 pt-28 md:hidden"
          >
            <nav aria-label="Mobile">
              <ul>
                {navLinks.map((l, i) => (
                  <li key={l.id} className="overflow-hidden border-b border-rule">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease: EASE_OUT }}
                    >
                      <Link
                        href={`/#${l.id}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between py-5 font-display text-4xl font-semibold tracking-tight"
                      >
                        {l.label}
                        {active === l.id && <span className="h-2.5 w-2.5 rotate-45 bg-signal" />}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: EASE_OUT }}
              className="mt-auto space-y-6"
            >
              <a
                href="/Tolu_resume.pdf"
                download
                className="flex h-14 items-center justify-center gap-2 rounded-full bg-ink text-lg font-medium text-paper"
              >
                <Download size={18} aria-hidden="true" />
                Download CV
              </a>
              <div className="flex justify-center">
                {socials.map((s) => (
                  <SocialLink key={s.icon} label={s.label} href={s.href} icon={s.icon} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
