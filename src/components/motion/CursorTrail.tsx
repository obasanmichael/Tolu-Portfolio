"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CursorTrail() {
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const reducedMotion = useRef(false);

  const springX = useSpring(mouseX, { damping: 30, stiffness: 220, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 220, mass: 0.5 });

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
      className="pointer-events-none fixed inset-0 z-9999 overflow-hidden"
      aria-hidden="true"
    >
      {/* Ambient aura */}
      <motion.div
        className="absolute"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(155,239,143,0.055) 0%, rgba(155,239,143,0) 70%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 300ms ease",
        }}
      />
      {/* Precise dot */}
      <motion.div
        className="absolute"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: "rgba(155,239,143,0.55)",
          boxShadow: "0 0 14px rgba(155,239,143,0.28)",
          opacity: visible ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      />
    </motion.div>
  );
}
