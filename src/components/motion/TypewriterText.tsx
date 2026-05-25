"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export function TypewriterText({
  text,
  speed = 55,
  delay = 600,
  className,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced.current) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [delay, text]);

  useEffect(() => {
    if (!started || prefersReduced.current) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <span
          className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-accent align-middle"
          aria-hidden="true"
        />
      )}
    </span>
  );
}
