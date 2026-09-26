import { renderOgCard, ogSize } from "@/lib/og";
import { detailProjects, getProject } from "@/data/projects";

export const alt = "Project walkthrough by Tolulope Obasan";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return detailProjects.map((p) => ({ slug: p.id }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return renderOgCard({
    eyebrow: project?.program
      ? `${project.program.name} · Week ${project.program.week}`
      : "Tolulope Obasan",
    title: project?.name ?? "Project",
    subtitle: project?.tagline ?? "",
    chips: project?.chips ?? [],
  });
}
