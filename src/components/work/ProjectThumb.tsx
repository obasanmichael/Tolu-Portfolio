import { ViewTransition } from "react";
import { getLoomMeta } from "@/lib/loom";
import { ThumbMedia } from "./ThumbMedia";
import { CursorWipe } from "@/components/motion/CursorWipe";
import { type Project } from "@/types";

/** Walkthrough still for projects with a video; a typographic tile for the rest. */
export async function ProjectThumb({ project, priority = false }: { project: Project; priority?: boolean }) {
  const loom = project.detail ? await getLoomMeta(project.detail.loomId) : null;

  const frame = loom?.thumbnailUrl ? (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-band">
      <ThumbMedia
        still={loom.thumbnailUrl}
        preview={loom.previewUrl}
        durationLabel={project.detail?.durationLabel}
        priority={priority}
      />
    </div>
  ) : (
    <CursorWipe className="flex aspect-[16/10] w-full flex-col justify-end rounded-[14px] p-6 sm:p-8">
      <span className="font-display text-4xl font-semibold leading-none tracking-tight transition-transform duration-500 group-hover/wipe:-translate-y-1 sm:text-5xl">
        {project.name}
      </span>
      <span className="mt-3 text-base text-band-graphite transition-colors duration-500 group-hover/wipe:text-graphite">
        {project.type}
      </span>
    </CursorWipe>
  );

  if (!project.detail) return frame;

  // Same name as the project page's video, so clicking through morphs one into the other.
  return (
    <ViewTransition name={`project-media-${project.id}`} share="morph" default="none">
      {frame}
    </ViewTransition>
  );
}
