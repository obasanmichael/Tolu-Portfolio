import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-svh flex-col justify-center px-5 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="type-hero max-w-[12ch]">That project doesn&apos;t exist.</h1>
        <Link
          href="/#work"
          className="mt-10 inline-flex min-h-11 items-center gap-2 text-lg font-medium underline decoration-rule decoration-2 underline-offset-[6px] hover:decoration-ink"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Back to selected work
        </Link>
      </div>
    </main>
  );
}
