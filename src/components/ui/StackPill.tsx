import { cn } from "@/lib/utils";

interface StackPillProps {
  name: string;
  className?: string;
  glowing?: boolean;
}

export function StackPill({ name, className, glowing }: StackPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted transition-all duration-200",
        "hover:border-border-hover hover:text-accent hover:bg-accent-soft",
        glowing && "border-border-hover text-accent bg-accent-soft",
        className
      )}
    >
      {name}
    </span>
  );
}
