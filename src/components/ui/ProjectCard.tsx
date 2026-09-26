"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink, Lock, Play } from "lucide-react";
import { GitHubIcon } from "./icons";
import { StackPill } from "./StackPill";
import { cn } from "@/lib/utils";
import { type Project } from "@/types";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const statusLabels: Record<NonNullable<Project["status"]>, string> = {
  live: "Live",
  "in-development": "In Development",
  private: "Private",
  mvp: "MVP",
};

const statusColors: Record<NonNullable<Project["status"]>, string> = {
  live: "text-accent bg-accent-soft border-border-hover",
  "in-development": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  private: "text-muted bg-surface border-border",
  mvp: "text-accent bg-accent-soft border-border-hover",
};

const linkClass =
  "relative z-10 inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent";

function Badge({ project }: { project: Project }) {
  if (project.program) {
    return (
      <span className="inline-flex items-center rounded-full border border-border-hover bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent">
        {project.program.name} · Week {project.program.week}
      </span>
    );
  }
  if (!project.status) return null;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
        statusColors[project.status]
      )}
    >
      {project.isPrivate && <Lock size={9} className="mr-1" />}
      {statusLabels[project.status]}
    </span>
  );
}

function RepoLinks({ project }: { project: Project }) {
  const repos = [
    { href: project.links.github, label: "GitHub" },
    { href: project.links.webRepo, label: "Web Repo" },
    { href: project.links.mobileRepo, label: "Mobile" },
    { href: project.links.backendRepo, label: "Backend" },
  ].filter((r): r is { href: string; label: string } => Boolean(r.href));

  return (
    <>
      {repos.map((r) => (
        <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <GitHubIcon size={12} />
          {r.label}
        </a>
      ))}
    </>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const href = project.detail ? `/projects/${project.id}` : project.links.live;
  const isExternal = !project.detail;
  // The title link stretches over the whole card; other links sit above it via z-10.
  const stretched = "after:absolute after:inset-0 after:content-['']";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-hover",
        featured ? "p-7" : "p-6"
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${featured ? 420 : 280}px circle at ${glowPos.x}% ${glowPos.y}%, rgba(155,239,143,0.07), transparent 70%)`,
        }}
      />

      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge project={project} />
          <span className="text-xs text-muted">{project.type}</span>
        </div>
        {href && (
          <ArrowUpRight
            size={featured ? 20 : 17}
            className="shrink-0 text-muted/40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        )}
      </div>

      <h3
        className={cn(
          "font-semibold tracking-tight text-text",
          featured ? "mb-2 text-2xl" : "mb-1.5 text-lg"
        )}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {href ? (
          isExternal ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className={cn(stretched, "focus-visible:outline-none")}>
              {project.name}
            </a>
          ) : (
            <Link href={href} className={cn(stretched, "focus-visible:outline-none")}>
              {project.name}
            </Link>
          )
        ) : (
          project.name
        )}
      </h3>

      <p className={cn("mb-5 leading-relaxed text-muted", featured ? "text-[0.95rem]" : "text-sm")}>
        {project.tagline}
      </p>

      <ul className="mb-5 flex flex-wrap gap-1.5">
        {project.chips.map((chip) => (
          <li
            key={chip}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-alt px-2 py-1 text-[11px] font-medium text-text/80"
          >
            <span className="h-1 w-1 rounded-full bg-accent" />
            {chip}
          </li>
        ))}
      </ul>

      {featured && (
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <StackPill key={tech} name={tech} />
          ))}
          {project.stack.length > 5 && (
            <span className="inline-flex items-center text-xs text-muted">
              +{project.stack.length - 5}
            </span>
          )}
        </div>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4">
        {project.detail && (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
            <Play size={11} className="fill-current" />
            Walkthrough · {project.detail.durationLabel}
          </span>
        )}
        {project.links.live && !project.isPrivate && (
          <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <ExternalLink size={12} />
            {project.detail ? "Live app" : "Live Demo"}
          </a>
        )}
        {!project.detail && <RepoLinks project={project} />}
        {project.clientSites?.map((site) => (
          <a
            key={site.url}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-alt px-3 py-1.5 text-xs font-medium text-muted transition-all duration-200 hover:border-border-hover hover:text-accent"
          >
            <ExternalLink size={11} />
            {site.name}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
