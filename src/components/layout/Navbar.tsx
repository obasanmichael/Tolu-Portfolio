"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-paper/90 backdrop-blur-md transition-colors",
        scrolled || open ? "border-rule" : "border-transparent",
      )}
    >
      <div className="px-5 sm:px-8">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-display text-xl font-semibold tracking-tight"
          >
            Tolulope Obasan
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2.5 text-base text-graphite transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
            <ThemeToggle />
            <a
              href="/Tolu_resume.pdf"
              download
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-base font-medium text-paper transition-opacity hover:opacity-85"
            >
              <Download size={16} aria-hidden="true" />
              CV
            </a>
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-rule px-5 pb-6 md:hidden"
        >
          <ul>
            {navLinks.map((l) => (
              <li key={l.href} className="border-b border-rule">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-3xl font-semibold tracking-tight"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/Tolu_resume.pdf"
            download
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-base font-medium text-paper"
          >
            <Download size={16} aria-hidden="true" />
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
}
