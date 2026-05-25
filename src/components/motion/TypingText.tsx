"use client";

import { useEffect, useRef, useState } from "react";

type TypingTextProps = {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
};

export function TypingText({
  phrases,
  typingSpeed = 55,
  deletingSpeed = 32,
  pause = 1400,
  className,
}: TypingTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const pauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion.current) {
      setVisibleText(phrases[0]);
    }
  }, [phrases]);

  useEffect(() => {
    if (reducedMotion.current) return;

    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentPhrase.slice(0, visibleText.length + 1);
          setVisibleText(next);

          if (next === currentPhrase) {
            pauseRef.current = setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          const next = currentPhrase.slice(0, visibleText.length - 1);
          setVisibleText(next);

          if (next === "") {
            setIsDeleting(false);
            setPhraseIndex((cur) => (cur + 1) % phrases.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => {
      clearTimeout(timeout);
      if (pauseRef.current) clearTimeout(pauseRef.current);
    };
  }, [visibleText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className}>
      <span className="text-accent">{visibleText}</span>
      <span
        className="ml-px inline-block w-[2px] animate-pulse bg-accent align-middle"
        style={{ height: "1em" }}
        aria-hidden="true"
      />
    </span>
  );
}
