"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type MagneticButtonVariant = "primary" | "secondary";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: MagneticButtonVariant;
  className?: string;
  download?: boolean;
  external?: boolean;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  download,
  external,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 20, stiffness: 200, mass: 0.6 });
  const springY = useSpring(y, { damping: 20, stiffness: 200, mass: 0.6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = cn(
    "relative inline-flex h-12 cursor-pointer select-none items-center justify-center gap-2 rounded-xl px-7 text-sm font-semibold transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    variant === "primary"
      ? "bg-accent text-bg shadow-[0_0_24px_rgba(155,239,143,0.22)] hover:bg-[#b8f5ae] hover:shadow-[0_0_36px_rgba(155,239,143,0.38)]"
      : "border border-border bg-surface text-text hover:border-border-hover hover:bg-surface-alt",
    className
  );

  const motionProps = {
    ref: ref as React.Ref<HTMLAnchorElement>,
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={baseClasses}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...(motionProps as { ref: React.Ref<HTMLButtonElement>; style: object; onMouseMove: (e: React.MouseEvent<HTMLButtonElement>) => void; onMouseLeave: () => void })}
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
}
