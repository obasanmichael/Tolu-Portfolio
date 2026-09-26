import Image from "next/image";
import { Play } from "lucide-react";
import { getLoomMeta } from "@/lib/loom";
import { type Project } from "@/types";

/** Walkthrough still for projects with a video; a typographic tile for the rest. */
export async function ProjectThumb({ project, priority = false }: { project: Project; priority?: boolean }) {
  const thumb = project.detail ? (await getLoomMeta(project.detail.loomId)).thumbnailUrl : null;

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-band">
      {thumb ? (
        <>
          <Image
            src={thumb}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/80 px-3.5 py-2 text-sm font-medium text-white backdrop-blur">
            <Play size={13} className="fill-current" aria-hidden="true" />
            {project.detail?.durationLabel} walkthrough
          </span>
        </>
      ) : (
        <div className="flex h-full flex-col justify-end p-6 sm:p-8">
          <span className="font-display text-4xl font-semibold leading-none tracking-tight text-band-ink sm:text-5xl">
            {project.name}
          </span>
          <span className="mt-3 text-base text-band-graphite">{project.type}</span>
        </div>
      )}
    </div>
  );
}
