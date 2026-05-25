"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Lock, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "./icons";
import { StackPill } from "./StackPill";
import { cn } from "@/lib/utils";
import { type Project } from "@/types";

const statusLabels: Record<Project["status"], string> = {
  live: "Live",
  "in-development": "In Development",
  private: "Private",
  mvp: "MVP",
};

const statusColors: Record<Project["status"], string> = {
  live: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "in-development": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  private: "text-muted bg-surface border-border",
  mvp: "text-accent bg-accent-soft border-border-hover",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPos({ x, y });
  };

  const hasLinks = Object.values(project.links).some(Boolean);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300",
        "hover:border-border-hover"
      )}
    >
      {/* Radial glow following cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at ${glowPos.x}% ${glowPos.y}%, rgba(56,189,248,0.06), transparent 70%)`,
        }}
      />

      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2.5">
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium",
                statusColors[project.status]
              )}
            >
              {project.isPrivate && <Lock size={10} className="mr-1" />}
              {statusLabels[project.status]}
            </span>
            <span className="text-xs text-muted">{project.type}</span>
          </div>
          <h3
            className="font-heading text-lg font-semibold text-text"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {project.name}
          </h3>
          <p className="mt-0.5 text-xs text-muted">{project.role}</p>
        </div>

        {/* Arrow link icon */}
        {hasLinks && !project.isPrivate && (
          <motion.div
            animate={{ x: hovered ? 2 : 0, y: hovered ? -2 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 text-muted group-hover:text-accent transition-colors duration-200"
          >
            <ArrowUpRight size={18} />
          </motion.div>
        )}
      </div>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="mb-5 space-y-1.5">
        {project.highlights.slice(0, 4).map((h, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-muted"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
            {h}
          </li>
        ))}
      </ul>

      {/* Stack pills */}
      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 6).map((tech) => (
          <StackPill key={tech} name={tech} />
        ))}
        {project.stack.length > 6 && (
          <span className="inline-flex items-center text-xs text-muted">
            +{project.stack.length - 6} more
          </span>
        )}
      </div>

      {/* Links */}
      {!project.isPrivate && hasLinks && (
        <div className="flex flex-wrap items-center gap-3 border-t border-border pt-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
            >
              <GitHubIcon size={12} />
              GitHub
            </a>
          )}
          {project.links.webRepo && (
            <a
              href={project.links.webRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
            >
              <GitHubIcon size={12} />
              Web Repo
            </a>
          )}
          {project.links.mobileRepo && (
            <a
              href={project.links.mobileRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
            >
              <GitHubIcon size={12} />
              Mobile Repo
            </a>
          )}
          {project.links.backendRepo && (
            <a
              href={project.links.backendRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
            >
              <GitHubIcon size={12} />
              Backend Repo
            </a>
          )}
        </div>
      )}

      {project.isPrivate && (
        <div className="flex items-center gap-1.5 border-t border-border pt-4">
          <Lock size={12} className="text-muted" />
          <span className="text-xs text-muted">Private project — available on request</span>
        </div>
      )}
    </motion.div>
  );
}
