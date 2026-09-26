import { cn } from "@/lib/utils";
import { MaskReveal } from "@/components/motion/MaskReveal";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

export function Section({ id, children, className, ...rest }: SectionProps) {
  return (
    <section id={id} className={cn("px-5 py-16 sm:px-8 md:py-20", className)} {...rest}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  intro?: string;
  className?: string;
}

export function SectionHeading({ title, intro, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 md:mb-12", className)}>
      <MaskReveal text={title} className="type-title max-w-[16ch]" />
      {intro && <p className="type-lead mt-6 max-w-[48ch] text-graphite">{intro}</p>}
    </div>
  );
}
