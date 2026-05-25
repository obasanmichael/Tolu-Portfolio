import { cn } from "@/lib/utils";
import { RevealText } from "@/components/motion/RevealText";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  fullWidth?: boolean;
}

export function Section({
  id,
  children,
  className,
  innerClassName,
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative px-4 py-24 sm:px-6 lg:px-8", className)}
    >
      <div
        className={cn(
          "relative mx-auto w-full",
          !fullWidth && "max-w-6xl",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <RevealText delay={0.04}>
          <p className="eyebrow mb-4 text-accent">{label}</p>
        </RevealText>
      )}
      <RevealText delay={0.1}>
        <h2 className="section-title text-text">{title}</h2>
      </RevealText>
      {description && (
        <RevealText delay={0.18}>
          <p className="body-large mt-4 max-w-2xl text-muted">{description}</p>
        </RevealText>
      )}
    </div>
  );
}
