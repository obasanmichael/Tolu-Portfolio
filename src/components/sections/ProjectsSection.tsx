import { Section } from "@/components/layout/Section";
import { RevealText } from "@/components/motion/RevealText";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { featuredProjects, projectsByGroup } from "@/data/projects";
import { type ProjectGroup } from "@/types";

const groups: { id: ProjectGroup; label: string; note: string }[] = [
  {
    id: "ai-automation",
    label: "AI automation",
    note: "Production-style builds from Koya Talent's AI Automation Developer program.",
  },
  {
    id: "products",
    label: "Products & client work",
    note: "Web, mobile and client builds.",
  },
];

function GroupHeading({ label, note }: { label: string; note: string }) {
  return (
    <RevealText delay={0.05}>
      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
        <h3
          className="text-xl font-semibold tracking-tight text-text"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {label}
        </h3>
        <p className="text-sm text-muted">{note}</p>
      </div>
    </RevealText>
  );
}

export function ProjectsSection() {
  return (
    <Section id="projects">
      <div className="mb-12">
        <RevealText delay={0.05}>
          <p className="eyebrow mb-4 text-accent">Work</p>
        </RevealText>
        <RevealText delay={0.12}>
          <h2 className="section-title text-text">Selected work.</h2>
        </RevealText>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} featured />
        ))}
      </div>

      {groups.map((group) => {
        const items = projectsByGroup(group.id);
        if (items.length === 0) return null;
        return (
          <div key={group.id} className="mt-20">
            <GroupHeading label={group.label} note={group.note} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        );
      })}
    </Section>
  );
}
