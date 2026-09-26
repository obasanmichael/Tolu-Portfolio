import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-4 text-center">
      <p className="eyebrow mb-4 text-accent">404</p>
      <h1 className="section-title text-text">Project not found.</h1>
      <Link
        href="/#projects"
        className="mt-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={14} />
        Back to work
      </Link>
    </main>
  );
}
