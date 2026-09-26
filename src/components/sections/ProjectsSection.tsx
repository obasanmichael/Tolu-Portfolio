import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { ProjectRow } from "@/components/work/ProjectRow";
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
            <Link
              key={group.id}
              href={`/work/${group.id}`}
              className="group flex min-h-72 flex-col justify-between rounded-[14px] bg-band p-8 text-band-ink transition-transform duration-300 hover:-translate-y-1 sm:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <h3 className="type-heading max-w-[12ch]">{group.title}</h3>
                <span className="font-display text-6xl font-semibold leading-none tracking-tight sm:text-7xl">
                  {items.length}
                </span>
              </div>
              <div>
                <p className="mt-8 text-base text-band-graphite">
                  {items.map((p) => p.name).join(", ")}
                </p>
                <p className="mt-6 inline-flex items-center gap-2 text-lg font-medium">
                  View all {items.length} projects
                  <ArrowUpRight
                    size={20}
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
