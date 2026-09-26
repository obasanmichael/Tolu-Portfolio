import { renderOgCard, ogSize } from "@/lib/og";
import { projects } from "@/data/projects";

export const alt = "Tolulope Obasan | Full-Stack & AI Automation Engineer";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  const aiCount = projects.filter((p) => p.group === "ai-automation").length;
  return renderOgCard({
    eyebrow: "Tolulope Obasan",
    title: "Full-Stack & AI Automation Engineer",
    subtitle: "Web and mobile products, plus AI systems where code enforces the rules and a person signs off.",
    chips: [`${aiCount} AI automations shipped`, "Claude Sonnet & Haiku", "Next.js · React Native"],
  });
}
