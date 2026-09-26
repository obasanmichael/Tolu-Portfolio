"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Play } from "lucide-react";

interface ThumbMediaProps {
  still: string;
  preview: string | null;
  durationLabel?: string;
  priority?: boolean;
}

/**
 * The walkthrough still, which swaps to Loom's animated preview on hover (fine pointers)
 * or while the row sits in the middle of the screen (touch). The preview only downloads
 * the first time it's needed.
 */
export function ThumbMedia({ still, preview, durationLabel, priority }: ThumbMediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [coarse, setCoarse] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const centred = useInView(ref, { margin: "-35% 0px -35% 0px" });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const sync = () => setCoarse(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const playing = !reduce && Boolean(preview) && (coarse ? centred : hovered);

  return (
    <div
      ref={ref}
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      className="absolute inset-0"
    >
      <motion.div className="absolute -inset-y-[6%] inset-x-0" style={reduce ? undefined : { y }}>
        <Image
          src={still}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover object-top"
        />
        {preview && (playing || loaded) && (
          // eslint-disable-next-line @next/next/no-img-element -- animated GIFs must bypass the optimizer to keep animating
          <img
            src={preview}
            alt=""
            onLoad={() => setLoaded(true)}
            className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500"
            style={{ opacity: playing && loaded ? 1 : 0 }}
          />
        )}
      </motion.div>
      <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/80 px-3.5 py-2 text-sm font-medium text-white backdrop-blur">
        <Play size={13} className="fill-current" aria-hidden="true" />
        {playing ? "Previewing" : `${durationLabel} walkthrough`}
      </span>
    </div>
  );
}
