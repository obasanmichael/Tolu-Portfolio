"use client";

import { Section, SectionHeading } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-surface/30">
      <SectionHeading
        label="Work"
        title="Selected projects."
        description="A selection of what I've built, from SaaS products to healthcare systems to client websites."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
