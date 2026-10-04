import type { Metadata } from "next";
import { ViewTransition } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoomEmbed } from "@/components/project/LoomEmbed";
import { AccessPanel } from "@/components/project/AccessPanel";
import { ScrollPipeline } from "@/components/pipeline/ScrollPipeline";
import { detailProjects, getProject } from "@/data/projects";
import { getWorkGroup } from "@/data/workGroups";
import { getWalkthroughMeta, walkthroughEmbedUrl } from "@/lib/walkthrough";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { CountUp } from "@/components/motion/CountUp";
import { ScrollGrow } from "@/components/motion/ScrollGrow";

export const dynamicParams = false;

export function generateStaticParams() {
  return detailProjects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.name} | Tolulope Obasan`;
  return {
    title,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: { title, description: project.tagline, url: `/projects/${project.id}` },
    twitter: { title, description: project.tagline },
  };
}

function Legend() {
  return (
    <ul className="mt-6 space-y-3 text-base text-graphite">
      <li className="flex items-center gap-3">
        <span className="h-4 w-4 rounded-full border-2 border-ink bg-ink" aria-hidden="true" />
        A step in the flow
      </li>
      <li className="flex items-center gap-3">
        <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-ink bg-ink text-[9px] font-bold text-paper" aria-hidden="true">
          ✓
        </span>
        Checked in code
      </li>
      <li className="flex items-center gap-3">
        <span className="ml-0.5 h-3 w-3 rotate-45 bg-signal" aria-hidden="true" />
        A person signs off
      </li>
    </ul>
  );
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.detail) notFound();

  const { detail } = project;
  const loom = await getWalkthroughMeta(detail);
  const group = getWorkGroup(project.group);

  const index = detailProjects.findIndex((p) => p.id === project.id);
  const prev = detailProjects[index - 1];
  const next = detailProjects[index + 1];

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <header className="px-5 pb-14 pt-12 sm:px-8 md:pb-20 md:pt-16">
          <div className="mx-auto max-w-7xl">
            {group && (
              <Link
                href={`/work/${group.id}`}
                className="inline-flex min-h-11 items-center gap-2 text-base text-graphite transition-colors hover:text-ink"
              >
                <ArrowLeft size={17} aria-hidden="true" />
                {group.title}
              </Link>
            )}
            <p className="mt-8 text-lg text-graphite">
              {project.type}
              {project.program && `, built in week ${project.program.week} of ${project.program.name}`}
            </p>
            <MaskReveal as="h1" trigger="mount" text={project.name} className="type-hero mt-4" />
            <p className="rise-in type-lead mt-8 max-w-[44ch]" style={{ "--delay": "450ms" } as React.CSSProperties}>{project.tagline}</p>
            <p className="rise-in mt-6 max-w-[70ch] text-lg text-graphite" style={{ "--delay": "600ms" } as React.CSSProperties}>
              Built with {project.stack.join(", ")}
            </p>
          </div>
        </header>

        <section aria-label="Walkthrough video" className="bg-band px-5 py-10 sm:px-8 md:py-16">
          <div className="mx-auto max-w-5xl">
            <ScrollGrow>
              <ViewTransition name={`project-media-${project.id}`} share="morph" default="none">
                <div>
                  <LoomEmbed
                    embedUrl={walkthroughEmbedUrl(detail)}
                    projectName={project.name}
                    durationLabel={detail.durationLabel}
                    thumbnailUrl={loom.thumbnailUrl}
                    width={loom.width}
                    height={loom.height}
                  />
                </div>
              </ViewTransition>
            </ScrollGrow>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-16">
            <div className="md:sticky md:top-28 md:self-start">
              <MaskReveal text="How it works" className="type-title" />
              <Legend />
            </div>
            <ScrollPipeline steps={detail.flow} checks={detail.checks} approval={detail.approval} />
          </div>
        </section>

        <section aria-label="Key numbers" className="border-y border-rule px-5 sm:px-8">
          <dl className="mx-auto grid max-w-7xl sm:grid-cols-3">
            {detail.stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-10 sm:py-14 ${i > 0 ? "border-t border-rule sm:border-l sm:border-t-0 sm:pl-10" : ""}`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <CountUp
                    value={s.value}
                    className="block font-display text-5xl font-semibold leading-none tracking-tight md:text-6xl"
                  />
                  <span className="mt-3 block text-lg text-graphite">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="px-5 py-16 sm:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <MaskReveal text="Two decisions that shaped it" className="type-title max-w-[14ch]" />
            <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
              {detail.decisions.map((d) => (
                <div key={d.title}>
                  <h3 className="font-display text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
                    {d.title}
                  </h3>
                  <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-graphite">{d.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {(project.links.live || detail.access) && (
          <section id="try-it" className="bg-surface px-5 py-16 sm:px-8 md:py-20">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-16">
              <MaskReveal text="Try it yourself" className="type-title" />
              <AccessPanel liveUrl={project.links.live} access={detail.access} />
            </div>
          </section>
        )}

        <nav aria-label="More projects" className="px-5 sm:px-8">
          <div className="mx-auto grid max-w-7xl sm:grid-cols-2">
            {prev ? (
              <Link href={`/projects/${prev.id}`} className="group border-rule py-12 sm:border-r sm:pr-10">
                <span className="flex items-center gap-2 text-base text-graphite">
                  <ArrowLeft size={17} aria-hidden="true" />
                  Previous
                </span>
                <span className="type-heading mt-2 block group-hover:text-signal">{prev.name}</span>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
            {next && (
              <Link
                href={`/projects/${next.id}`}
                className="group border-t border-rule py-12 text-right sm:border-t-0 sm:pl-10"
              >
                <span className="flex items-center justify-end gap-2 text-base text-graphite">
                  Next
                  <ArrowRight size={17} aria-hidden="true" />
                </span>
                <span className="type-heading mt-2 block group-hover:text-signal">{next.name}</span>
              </Link>
            )}
          </div>
        </nav>
      </main>
      <Footer />
    </>
  );
}
