import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorTrail } from "@/components/motion/CursorTrail";
import { RevealText } from "@/components/motion/RevealText";
import { StackPill } from "@/components/ui/StackPill";
import { LoomEmbed } from "@/components/project/LoomEmbed";
import { AccessPanel } from "@/components/project/AccessPanel";
import { detailProjects, getProject } from "@/data/projects";
import { getLoomMeta } from "@/lib/loom";

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

function Block({ id, label, children }: { id?: string; label: string; children: React.ReactNode }) {
  return (
    <RevealText delay={0.05}>
      <section id={id} className="grid gap-4 border-t border-border py-10 lg:grid-cols-[200px_1fr] lg:gap-10">
        <h2 className="eyebrow pt-1 text-accent/70">{label}</h2>
        <div>{children}</div>
      </section>
    </RevealText>
  );
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.detail) notFound();

  const { detail } = project;
  const loom = await getLoomMeta(detail.loomId);

  const index = detailProjects.findIndex((p) => p.id === project.id);
  const prev = detailProjects[index - 1];
  const next = detailProjects[index + 1];

  return (
    <>
      <CursorTrail />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={14} />
              Back to work
            </Link>
            {project.program && (
              <span className="inline-flex items-center rounded-full border border-border-hover bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                {project.program.name} · Week {project.program.week}
              </span>
            )}
          </div>

          <header className="mb-10">
            <RevealText delay={0.05}>
              <p className="eyebrow mb-4 text-accent">{project.type}</p>
            </RevealText>
            <RevealText delay={0.1}>
              <h1 className="section-title text-text">{project.name}</h1>
            </RevealText>
            <RevealText delay={0.16}>
              <p className="body-large mt-5 max-w-3xl text-muted">{project.tagline}</p>
            </RevealText>
            <RevealText delay={0.22}>
              <div className="mt-6 flex flex-wrap items-center gap-1.5">
                {project.stack.map((tech) => (
                  <StackPill key={tech} name={tech} />
                ))}
                {project.links.live && (
                  <a
                    href="#try-it"
                    className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-border-hover bg-accent-soft px-3 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-bg"
                  >
                    Try the live app
                    <ArrowRight size={12} />
                  </a>
                )}
              </div>
            </RevealText>
          </header>

          <RevealText delay={0.28}>
            <LoomEmbed
              loomId={detail.loomId}
              projectName={project.name}
              durationLabel={detail.durationLabel}
              thumbnailUrl={loom.thumbnailUrl}
              width={loom.width}
              height={loom.height}
            />
          </RevealText>

          <div className="mt-16">
            <Block label="How it works">
              <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                {detail.flow.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text/90">
                      <span className="font-mono text-[11px] text-accent/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </span>
                    {i < detail.flow.length - 1 && (
                      <ChevronRight size={14} className="hidden shrink-0 text-accent/40 sm:block" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
            </Block>

            <Block label="At a glance">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {detail.stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-surface p-5">
                    <p
                      className="text-3xl font-semibold tracking-tight text-accent"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {s.value}
                    </p>
                    <p className="mt-1 text-sm text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </Block>

            <Block label="Key decisions">
              <div className="grid gap-3 md:grid-cols-2">
                {detail.decisions.map((d) => (
                  <div key={d.title} className="rounded-xl border border-border bg-surface p-5">
                    <h3
                      className="mb-1.5 text-base font-semibold text-text"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {d.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">{d.detail}</p>
                  </div>
                ))}
              </div>
            </Block>

            {(project.links.live || detail.access) && (
              <Block id="try-it" label="Try it">
                <AccessPanel liveUrl={project.links.live} access={detail.access} />
              </Block>
            )}
          </div>

          <nav
            aria-label="More projects"
            className="mt-6 grid gap-3 border-t border-border pt-10 sm:grid-cols-2"
          >
            {prev ? (
              <Link
                href={`/projects/${prev.id}`}
                className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border-hover"
              >
                <span className="flex items-center gap-1.5 text-xs text-muted">
                  <ArrowLeft size={12} /> Previous
                </span>
                <span className="mt-1 block font-semibold text-text group-hover:text-accent" style={{ fontFamily: "var(--font-display)" }}>
                  {prev.name}
                </span>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
            {next && (
              <Link
                href={`/projects/${next.id}`}
                className="group rounded-xl border border-border bg-surface p-5 text-right transition-colors hover:border-border-hover"
              >
                <span className="flex items-center justify-end gap-1.5 text-xs text-muted">
                  Next <ArrowRight size={12} />
                </span>
                <span className="mt-1 block font-semibold text-text group-hover:text-accent" style={{ fontFamily: "var(--font-display)" }}>
                  {next.name}
                </span>
              </Link>
            )}
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
