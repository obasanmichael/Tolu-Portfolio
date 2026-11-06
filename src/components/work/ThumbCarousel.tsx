"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const INTERVAL_MS = 4500;

/** Screenshots that slide on their own; pauses on hover or focus and stays still for reduced motion. */
export function ThumbCarousel({
  images,
  name,
  priority = false,
}: {
  images: string[];
  name: string;
  priority?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % images.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, images.length]);

  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-band"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={src} className="relative h-full w-full shrink-0" aria-hidden={i !== index}>
            <Image
              src={src}
              alt={`${name} screenshot ${i + 1} of ${images.length}`}
              fill
              priority={priority && i === 0}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Show screenshot ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className="relative z-10 grid h-6 w-4 place-items-center"
          >
            <span className={`h-1.5 rounded-full bg-ink transition-all ${i === index ? "w-4 opacity-90" : "w-1.5 opacity-35"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
