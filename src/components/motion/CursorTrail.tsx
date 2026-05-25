"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CursorTrail() {
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const reducedMotion = useRef(false);

  const springX = useSpring(mouseX, { damping: 28, stiffness: 200, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isTouchDevice =
      window.matchMedia("(hover: none)").matches ||
      navigator.maxTouchPoints > 0;

    if (isTouchDevice || reducedMotion.current) return;

    setIsTouch(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, visible]);

  if (isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      aria-hidden="true"
    >
      {/* Large ambient glow */}
      <motion.div
        className="absolute"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.06) 0%, rgba(56,189,248,0) 70%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 300ms ease",
        }}
      />
      {/* Small precise dot */}
      <motion.div
        className="absolute"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "rgba(56,189,248,0.6)",
          boxShadow: "0 0 12px rgba(56,189,248,0.4)",
          opacity: visible ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      />
    </motion.div>
  );
}
