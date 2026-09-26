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
      className="relative w-full overflow-hidden rounded-2xl border border-border bg-surface-alt shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
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
          aria-label={`Play ${projectName} walkthrough, ${durationLabel}`}
          className="group absolute inset-0 flex h-full w-full items-center justify-center"
        >
          {thumbnailUrl && (
            <Image
              src={thumbnailUrl}
              alt=""
              fill
              priority
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-85"
            />
          )}
          <span className="absolute inset-0 bg-linear-to-t from-bg/80 via-bg/20 to-transparent" />
          <span className="relative flex flex-col items-center gap-3">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-bg shadow-[0_0_40px_rgba(155,239,143,0.45)] transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
              <Play size={26} className="ml-1 fill-current" />
            </span>
            <span className="rounded-full border border-border bg-bg/70 px-3 py-1 text-xs font-medium text-text backdrop-blur">
              Watch the walkthrough · {durationLabel}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
