"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface LoomEmbedProps {
  loomId: string;
  projectName: string;
  durationLabel: string;
  thumbnailUrl: string | null;
  width: number;
  height: number;
}

/** Click-to-play facade: Loom's iframe and scripts only load once the visitor asks. */
export function LoomEmbed({
  loomId,
  projectName,
  durationLabel,
  thumbnailUrl,
  width,
  height,
}: LoomEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-[14px] bg-black"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {playing ? (
        <iframe
          src={`https://www.loom.com/embed/${loomId}?autoplay=1&hide_owner=true&hide_share=true&hideEmbedTopBar=true`}
          title={`${projectName} walkthrough`}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play the ${projectName} walkthrough, ${durationLabel}`}
          className="group absolute inset-0 h-full w-full"
        >
          {thumbnailUrl && (
            <Image
              src={thumbnailUrl}
              alt=""
              fill
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
          )}
          <span className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/25" />
          <span className="absolute bottom-5 left-5 flex items-center gap-4 sm:bottom-8 sm:left-8">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
              <Play size={26} className="ml-1 fill-current" aria-hidden="true" />
            </span>
            <span className="text-left text-white">
              <span className="block font-display text-xl font-semibold tracking-tight sm:text-2xl">
                Watch the walkthrough
              </span>
              <span className="block text-base text-white/80">{durationLabel}, with voice-over</span>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
