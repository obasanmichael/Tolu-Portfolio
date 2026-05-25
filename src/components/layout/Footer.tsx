import { SocialLink } from "@/components/ui/SocialLink";
import { socials } from "@/data/socials";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          &copy; {year} - Tolulope Obasan. 
        </p>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <SocialLink
              key={s.icon}
              label={s.label}
              href={s.href}
              icon={s.icon}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
