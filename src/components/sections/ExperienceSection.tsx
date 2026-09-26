import { Section, SectionHeading } from "@/components/layout/Section";
import { Disclosure } from "@/components/ui/Disclosure";
import { experiences } from "@/data/experience";

const typeLabels: Record<string, string> = {
  "full-time": "Full-time",
  contract: "Contract",
  freelance: "Freelance",
  "part-time": "Part-time",
  program: "Training program",
};

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading title="Experience" />
      <div className="border-b border-rule">
        {experiences.map((exp, i) => (
          <Disclosure
            key={exp.id}
            defaultOpen={i === 0}
            className="border-t border-rule"
            summaryClassName="py-7"
            summary={
              <span className="grid gap-1 md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] md:gap-10">
                <span className="text-base text-graphite md:pt-1.5">{exp.period}</span>
                <span className="flex flex-col">
                  <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {exp.role}
                  </span>
                  <span className="mt-1 text-lg text-graphite">
                    {exp.company}, {typeLabels[exp.type].toLowerCase()}
                  </span>
                </span>
              </span>
            }
          >
            <div className="grid pb-9 md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] md:gap-10">
              <div className="md:col-start-2">
                <p className="max-w-[60ch] text-base leading-relaxed">{exp.summary}</p>
                <ul className="mt-5 max-w-[60ch] space-y-2.5">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3 text-base leading-relaxed text-graphite">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-base text-graphite">
                  <span className="font-medium text-ink">Tools: </span>
                  {exp.tools.join(", ")}
                </p>
              </div>
            </div>
          </Disclosure>
        ))}
      </div>
    </Section>
  );
}
