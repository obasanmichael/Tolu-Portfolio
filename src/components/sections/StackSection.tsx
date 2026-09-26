import { Section, SectionHeading } from "@/components/layout/Section";
import { stackCategories } from "@/data/stack";

export function StackSection() {
  return (
    <Section id="stack">
      <SectionHeading title="Tools I build with" />
      <dl className="border-b border-rule">
        {stackCategories.map((category) => (
          <div
            key={category.label}
            className="grid gap-2 border-t border-rule py-7 md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] md:gap-10"
          >
            <dt className="font-display text-xl font-semibold tracking-tight">{category.label}</dt>
            <dd className="max-w-[70ch] text-base leading-relaxed text-graphite">
              {category.items.map((i) => i.name).join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
