import Link from "next/link";
import { Download } from "lucide-react";
import { SocialLink } from "@/components/ui/SocialLink";
import { HeroPipeline } from "@/components/pipeline/HeroPipeline";
import { socials } from "@/data/socials";

export function HeroSection() {
  return (
    <section aria-label="Introduction" className="px-5 pb-8 pt-16 sm:px-8 md:pb-12 md:pt-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-lg text-graphite">Full-stack &amp; AI automation engineer</p>

        <h1 className="type-hero mt-6 max-w-[17ch]">
          I build products and AI systems that ask before they act.
        </h1>

        <p className="type-lead mt-8 max-w-[46ch] text-graphite">
          Web and mobile products, plus automations where Claude does the work, code
          enforces the rules, and a person signs off.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/#work"
            className="inline-flex min-h-12 items-center rounded-full bg-ink px-7 text-lg font-medium text-paper transition-opacity hover:opacity-85"
          >
            See my work
          </Link>
          <a
            href="/Tolu_resume.pdf"
            download
            className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-ink px-7 text-lg font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            <Download size={18} aria-hidden="true" />
            Download CV
          </a>
          <div className="ml-1 flex items-center">
            {socials.slice(0, 3).map((s) => (
              <SocialLink key={s.icon} label={s.label} href={s.href} icon={s.icon} />
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-rule pt-10 md:mt-20">
          <HeroPipeline />
        </div>
      </div>
    </section>
  );
}
