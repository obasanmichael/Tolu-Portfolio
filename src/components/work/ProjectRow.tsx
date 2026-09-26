import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { ProjectThumb } from "./ProjectThumb";
import { type Project } from "@/types";

const linkClass =
  "relative z-10 inline-flex min-h-11 items-center gap-1.5 text-base font-medium underline decoration-rule decoration-2 underline-offset-[6px] transition-colors hover:decoration-ink";

function contextLine(project: Project) {
  if (project.program) return `${project.type}, built in week ${project.program.week} of ${project.program.name}`;
  if (project.status === "in-development") return `${project.type}, in development`;
  return project.type;
}

export function ProjectRow({ project, priority = false }: { project: Project; priority?: boolean }) {
  const href = project.detail ? `/projects/${project.id}` : project.links.live;
  const repos = [
    { href: project.links.webRepo, label: "Web repo" },
    { href: project.links.mobileRepo, label: "Mobile repo" },
    { href: project.links.backendRepo, label: "Backend repo" },
  ].filter((r): r is { href: string; label: string } => Boolean(r.href));

  // The name link stretches over the whole row; secondary links sit above it.
  const stretched = "after:absolute after:inset-0 after:content-['']";

  return (
    <article className="group relative grid gap-6 border-t border-rule py-8 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-12 md:py-10">
      <ProjectThumb project={project} priority={priority} />

      <div className="flex flex-col md:py-2">
        <p className="text-base text-graphite">{contextLine(project)}</p>
        <h3 className="type-heading mt-2">
          {href ? (
            project.detail ? (
              <Link href={href} className={stretched}>
                {project.name}
              </Link>
            ) : (
              <a href={href} target="_blank" rel="noopener noreferrer" className={stretched}>
                {project.name}
              </a>
            )
          ) : (
            project.name
          )}
        </h3>
        <p className="type-lead mt-4 max-w-[34ch] text-graphite">{project.tagline}</p>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-base">
          {project.chips.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-1 pt-8">
          {project.detail && (
            <span className="inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-signal">
              See the project
              <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Live app
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
          {!project.detail &&
            repos.map((r) => (
              <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <GitHubIcon size={15} />
                {r.label}
              </a>
            ))}
          {project.clientSites?.map((site) => (
            <a key={site.url} href={site.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {site.name}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
