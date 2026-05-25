import { cn } from "@/lib/utils";

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
      className={cn("relative px-4 py-20 sm:px-6 lg:px-8", className)}
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
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
          {label}
        </p>
      )}
      <h2
        className="text-3xl font-semibold tracking-tight text-text sm:text-4xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
