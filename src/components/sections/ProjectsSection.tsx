"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Lock, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { StackPill } from "@/components/ui/StackPill";
import { Section } from "@/components/layout/Section";
import { RevealText } from "@/components/motion/RevealText";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { type Project } from "@/types";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const statusLabels: Record<Project["status"], string> = {
  live: "Live",
  "in-development": "In Development",
  private: "Private",
  mvp: "MVP",
};

const statusColors: Record<Project["status"], string> = {
  live: "text-accent bg-accent-soft border-border-hover",
  "in-development": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  private: "text-muted bg-surface border-border",
  mvp: "text-accent bg-accent-soft border-border-hover",
};

function ProjectLinks({ project }: { project: Project }) {
  const hasLinks = Object.values(project.links).some(Boolean);
  if (project.isPrivate || !hasLinks) return null;

  return (
    <div className="flex flex-wrap items-center gap-4">
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
          Mobile
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
          Backend
        </a>
      )}
      {project.clientSites?.map((site) => (
        <a
          key={site.url}
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
        >
          <ExternalLink size={12} />
          {site.name}
        </a>
      ))}
    </div>
  );
}

/* ── Featured card (JobTrackr) ────────────────────── */
function FeaturedCard({ project }: { project: Project }) {
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

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-border-hover md:p-9"
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${glowPos.x}% ${glowPos.y}%, rgba(155,239,143,0.07), transparent 70%)`,
        }}
      />

      <div className="relative grid gap-8 lg:grid-cols-[1fr_auto]">
        {/* Left: content */}
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium", statusColors[project.status])}>
              {statusLabels[project.status]}
            </span>
            <span className="text-xs text-muted">{project.type}</span>
            <span className="ml-auto hidden items-center gap-1 text-xs text-accent/60 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
              Featured project
            </span>
          </div>

          <h3
            className="mb-1 text-2xl font-semibold tracking-tight text-text sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.name}
          </h3>
          <p className="mb-5 text-sm text-muted">{project.role}</p>

          <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted">
            {project.description}
          </p>

          <ul className="mb-6 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mb-6 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <StackPill key={tech} name={tech} />
            ))}
          </div>

          <div className="border-t border-border pt-5">
            <ProjectLinks project={project} />
          </div>
        </div>

        {/* Right: diagonal arrow on hover */}
        <motion.div
          className="hidden shrink-0 items-start lg:flex"
          whileHover={{ x: 3, y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight
            size={22}
            className="text-muted/40 transition-colors duration-200 group-hover:text-accent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Compact card (secondary projects) ───────────── */
function CompactCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border-hover"
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(260px circle at ${glowPos.x}% ${glowPos.y}%, rgba(155,239,143,0.07), transparent 70%)`,
        }}
      />

      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex items-center gap-2">
            <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium", statusColors[project.status])}>
              {project.isPrivate && <Lock size={9} className="mr-1" />}
              {statusLabels[project.status]}
            </span>
            <span className="text-xs text-muted">{project.type}</span>
          </div>
          <h3
            className="text-lg font-semibold text-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.name}
          </h3>
          <p className="mt-0.5 text-xs text-muted">{project.role}</p>
        </div>
        <motion.div
          animate={{ x: hovered ? 2 : 0, y: hovered ? -2 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-muted/40 transition-colors duration-200 group-hover:text-accent"
        >
          <ArrowUpRight size={17} />
        </motion.div>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((tech) => (
          <StackPill key={tech} name={tech} />
        ))}
        {project.stack.length > 5 && (
          <span className="inline-flex items-center text-xs text-muted">
            +{project.stack.length - 5}
          </span>
        )}
      </div>

      <div className="border-t border-border pt-4">
        <ProjectLinks project={project} />
      </div>
    </motion.div>
  );
}

/* ── Section ──────────────────────────────────────── */
export function ProjectsSection() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects">
      {/* Section heading */}
      <div className="mb-12">
        <RevealText delay={0.05}>
          <p className="eyebrow mb-4 text-accent">Work</p>
        </RevealText>
        <RevealText delay={0.12}>
          <h2 className="section-title text-text">
            A few products and systems
            <br />
            I&apos;ve built or led.
          </h2>
        </RevealText>
      </div>

      {/* Featured card */}
      <FeaturedCard project={featured} />

      {/* 3 compact cards */}
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, i) => (
          <CompactCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
