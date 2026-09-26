import { cn } from "@/lib/utils";

/** The T is the line; the diamond is the gate it passes through. Inverts with the theme. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("h-9 w-9 shrink-0", className)}>
      <rect width="64" height="64" rx="15" className="fill-ink" />
      <path d="M12 12h40v9H36.5v17h-9V21H12z" className="fill-paper" />
      <path
        d="M32 38.5 42 48.5 32 58.5 22 48.5z"
        className="origin-[32px_48.5px] fill-[#5B5BFF] transition-transform dark:fill-[#2B2BFF] duration-500 ease-out group-hover:rotate-90"
      />
    </svg>
  );
}
