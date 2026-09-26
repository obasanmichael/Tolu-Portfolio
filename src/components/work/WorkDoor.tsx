import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CountUp } from "@/components/motion/CountUp";
import { CursorWipe } from "@/components/motion/CursorWipe";

interface WorkDoorProps {
  href: string;
  title: string;
  count: number;
  names: string[];
}

export function WorkDoor({ href, title, count, names }: WorkDoorProps) {
  return (
    <Link href={href} className="block rounded-[14px]">
      <CursorWipe className="flex min-h-72 flex-col justify-between rounded-[14px] p-8 sm:p-10">
        <div className="flex items-start justify-between gap-6">
          <h3 className="type-heading max-w-[12ch]">{title}</h3>
          <CountUp
            value={String(count)}
            className="font-display text-6xl font-semibold leading-none tracking-tight sm:text-7xl"
          />
        </div>
        <div>
          <p className="mt-8 text-base text-band-graphite transition-colors duration-500 group-hover/wipe:text-graphite">
            {names.join(", ")}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-lg font-medium">
            View all {count} projects
            <ArrowUpRight
              size={20}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/wipe:-translate-y-0.5 group-hover/wipe:translate-x-0.5"
            />
          </p>
        </div>
      </CursorWipe>
    </Link>
  );
}
