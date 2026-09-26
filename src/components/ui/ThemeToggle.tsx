"use client";

import { useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

const getTheme = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Storage can be unavailable (private mode); the theme still applies for this visit.
  }
  listeners.forEach((l) => l());
}

/** Switches theme with a circle that grows out of the toggle, where the browser supports it. */
function setTheme(theme: Theme, origin: { x: number; y: number }) {
  const root = document.documentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduce) {
    applyTheme(theme);
    return;
  }

  root.classList.add("theme-vt");
  const transition = document.startViewTransition(() => applyTheme(theme));
  const radius = Math.hypot(
    Math.max(origin.x, window.innerWidth - origin.x),
    Math.max(origin.y, window.innerHeight - origin.y)
  );

  transition.ready.then(() => {
    root.animate(
      {
        clipPath: [
          `circle(0px at ${origin.x}px ${origin.y}px)`,
          `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
        ],
      },
      { duration: 650, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" }
    );
  });
  transition.finished.finally(() => root.classList.remove("theme-vt"));
}

export function ThemeToggle() {
  // The server can't know the visitor's theme, so it renders the light icon and React
  // swaps it after hydration.
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as Theme);
  const next = theme === "dark" ? "light" : "dark";
  // Only a click should spin the icon, not the hydration swap to the stored theme.
  const [clicked, setClicked] = useState(false);

  return (
    <button
      type="button"
      onClick={(e) => {
        setClicked(true);
        const r = e.currentTarget.getBoundingClientRect();
        setTheme(next, { x: r.left + r.width / 2, y: r.top + r.height / 2 });
      }}
      aria-label={`Switch to ${next} mode`}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={clicked ? { rotate: -90, scale: 0.4, opacity: 0 } : false}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={clicked ? { rotate: 90, scale: 0.4, opacity: 0 } : undefined}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
