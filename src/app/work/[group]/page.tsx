import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectRow } from "@/components/work/ProjectRow";
import { getWorkGroup, groupProjects, workGroups } from "@/data/workGroups";

export const dynamicParams = false;

export function generateStaticParams() {
  return workGroups.map((g) => ({ group: g.id }));
}

export async function generateMetadata({ params }: PageProps<"/work/[group]">): Promise<Metadata> {
  const { group: id } = await params;
  const group = getWorkGroup(id);
  if (!group) return {};
  const title = `${group.title} | Tolulope Obasan`;
  return {
    title,
    description: group.blurb,
    alternates: { canonical: `/work/${group.id}` },
    openGraph: { title, description: group.blurb, url: `/work/${group.id}` },
  };
}

export default async function WorkGroupPage({ params }: PageProps<"/work/[group]">) {
  const { group: id } = await params;
  const group = getWorkGroup(id);
  if (!group) notFound();

  const items = groupProjects(group.id);
  const other = workGroups.find((g) => g.id !== group.id);

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="px-5 pb-24 pt-12 sm:px-8 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#work"
            className="inline-flex min-h-11 items-center gap-2 text-base text-graphite transition-colors hover:text-ink"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Selected work
          </Link>

          <header className="mb-14 mt-8 md:mb-20">
            <h1 className="type-hero max-w-[14ch]">{group.title}</h1>
            <p className="type-lead mt-8 max-w-[52ch] text-graphite">{group.blurb}</p>
          </header>

          <div className="border-b border-rule">
            {items.map((project, i) => (
              <ProjectRow key={project.id} project={project} priority={i === 0} />
            ))}
          </div>

          {other && (
            <Link
              href={`/work/${other.id}`}
              className="group mt-16 flex items-center justify-between gap-6 rounded-[14px] bg-band p-8 text-band-ink sm:p-10"
            >
              <span>
                <span className="block text-base text-band-graphite">Also see</span>
                <span className="type-heading mt-1 block">{other.title}</span>
              </span>
              <span className="font-display text-6xl font-semibold leading-none tracking-tight">
                {groupProjects(other.id).length}
              </span>
            </Link>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
