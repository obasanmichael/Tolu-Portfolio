import { Section, SectionHeading } from "@/components/layout/Section";
import { ProjectRow } from "@/components/work/ProjectRow";
import { WorkDoor } from "@/components/work/WorkDoor";
import { featuredProjects } from "@/data/projects";
import { groupProjects, workGroups } from "@/data/workGroups";

export function ProjectsSection() {
  return (
    <Section id="work">
      <SectionHeading
        title="Selected work"
        intro="Three projects that show the range: two AI systems with human sign-off, and a web and mobile product."
      />

      <div className="border-b border-rule">
        {featuredProjects.map((project, i) => (
          <ProjectRow key={project.id} project={project} priority={i === 0} />
        ))}
      </div>

      <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2">
        {workGroups.map((group) => {
          const items = groupProjects(group.id);
          return (
            <WorkDoor
              key={group.id}
              href={`/work/${group.id}`}
              title={group.title}
              count={items.length}
              names={items.map((p) => p.name)}
            />
          );
        })}
      </div>
    </Section>
  );
}
