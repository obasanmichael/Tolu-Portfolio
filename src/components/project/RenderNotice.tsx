import { TriangleAlert } from "lucide-react";
import { type Project } from "@/types";

const COPY: Record<NonNullable<Project["renderSuspended"]>, string> = {
  site: "The live demo is offline for now. I used up my free Render instance hours, so the workspace is suspended until they reset at the start of November. I'm working on a fix.",
  backend:
    "The backend is offline for now, so login and data won't load. I used up my free Render instance hours, so the workspace is suspended until they reset at the start of November. I'm working on a fix.",
};

export function RenderNotice({ scope, className }: { scope: NonNullable<Project["renderSuspended"]>; className?: string }) {
  return (
    <p role="note" className={`flex gap-3 border-l-4 border-signal pl-4 text-base leading-relaxed ${className ?? ""}`}>
      <TriangleAlert size={20} className="mt-0.5 shrink-0 text-signal" aria-hidden="true" />
      {COPY[scope]}
    </p>
  );
}
