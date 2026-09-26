import { SocialLink } from "@/components/ui/SocialLink";
import { socials } from "@/data/socials";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule px-5 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-base text-graphite">© {year} Tolulope Obasan</p>
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <SocialLink key={s.icon} label={s.label} href={s.href} icon={s.icon} />
          ))}
        </div>
      </div>
    </footer>
  );
}
