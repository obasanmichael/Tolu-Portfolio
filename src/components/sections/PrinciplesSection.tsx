import { Section, SectionHeading } from "@/components/layout/Section";
import { Disclosure } from "@/components/ui/Disclosure";
import { principles } from "@/data/principles";

export function PrinciplesSection() {
  return (
    <Section id="principles">
      <SectionHeading title="How I work" />
      <div className="border-b border-rule">
        {principles.map((p) => (
          <Disclosure
            key={p.title}
            className="border-t border-rule"
            summaryClassName="py-6"
            summary={
              <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                {p.title}
              </span>
            }
          >
            <p className="max-w-[60ch] pb-8 text-base leading-relaxed text-graphite">{p.description}</p>
          </Disclosure>
        ))}
      </div>
    </Section>
  );
}
