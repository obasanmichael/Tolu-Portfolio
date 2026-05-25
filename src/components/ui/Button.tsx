import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = ButtonBaseProps &
  (
    | (ComponentPropsWithoutRef<"button"> & { href?: never })
    | (ComponentPropsWithoutRef<typeof Link> & { href: string })
  );

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-bg font-semibold hover:bg-[#7dd3fc] shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all",
  secondary:
    "bg-surface border border-border hover:border-border-hover text-text transition-all",
  ghost:
    "text-muted hover:text-text hover:bg-surface transition-all",
  outline:
    "border border-border-hover text-accent hover:bg-accent-soft transition-all",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm rounded-lg gap-1.5",
  md: "h-10 px-5 text-sm rounded-xl gap-2",
  lg: "h-12 px-7 text-base rounded-xl gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none select-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ComponentPropsWithoutRef<typeof Link> & {
      href: string;
    };
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
