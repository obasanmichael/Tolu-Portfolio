"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface CursorWipeProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A dark surface that inverts with a circle growing from wherever the cursor enters,
 * and shrinks back towards wherever it leaves. Children switch to ink colours on hover
 * via the `group/wipe` variant.
 */
export function CursorWipe({ children, className }: CursorWipeProps) {
  const ref = useRef<HTMLDivElement>(null);

  const track = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerEnter={track}
      onPointerMove={track}
      onPointerLeave={track}
      className={cn(
        "group/wipe relative isolate overflow-hidden bg-band text-band-ink outline-2 -outline-offset-2 outline-transparent transition-[outline-color,color] duration-500 hover:text-ink hover:outline-ink",
        className
      )}
      style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-paper transition-[clip-path] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] [clip-path:circle(0px_at_var(--x)_var(--y))] group-hover/wipe:[clip-path:circle(150%_at_var(--x)_var(--y))] motion-reduce:transition-none"
      />
      {children}
    </div>
  );
}
