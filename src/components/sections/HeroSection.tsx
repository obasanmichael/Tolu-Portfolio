import Link from "next/link";
import { Download } from "lucide-react";
import { SocialLink } from "@/components/ui/SocialLink";
import { HeroPipeline } from "@/components/pipeline/HeroPipeline";
import { socials } from "@/data/socials";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function HeroSection() {
  return (
    <section aria-label="Introduction" className="px-5 pb-8 pt-16 sm:px-8 md:pb-12 md:pt-24">
      <div className="mx-auto max-w-7xl">
        <p className="rise-in text-lg text-graphite">Full-stack &amp; AI automation engineer</p>

        <MaskReveal
          as="h1"
          trigger="mount"
          delay={0.1}
          stagger={0.055}
          text="I build products and AI systems that ask before they act."
          className="type-hero mt-6 max-w-[17ch]"
        />

        <p className="rise-in type-lead mt-8 max-w-[46ch] text-graphite" style={{ "--delay": "650ms" } as React.CSSProperties}>
          Web and mobile products, plus automations where Claude does the work, code
          enforces the rules, and a person signs off.
        </p>

        <div className="rise-in mt-10 flex flex-wrap items-center gap-3" style={{ "--delay": "800ms" } as React.CSSProperties}>
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

        <div className="rise-in mt-16 border-t border-rule pt-10 md:mt-20" style={{ "--delay": "1000ms" } as React.CSSProperties}>
          <HeroPipeline />
        </div>
      </div>
    </section>
  );
}
