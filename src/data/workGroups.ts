import { type ProjectGroup } from "@/types";
import { projects } from "./projects";

export const workGroups: { id: ProjectGroup; title: string; blurb: string }[] = [
  {
    id: "ai-automation",
    title: "AI automation engineering",
    blurb:
      "Systems where Claude does the reading and writing, code enforces the rules, and a person approves before anything leaves. Built as weekly client-style projects in Koya Talent's AI Automation Developer program.",
  },
  {
    id: "products",
    title: "Product engineering",
    blurb: "Web and mobile products, a healthcare platform I led the frontend on, and websites for service businesses.",
  },
];

export const getWorkGroup = (id: string) => workGroups.find((g) => g.id === id);

/** Every project in a group, newest program week first. */
export const groupProjects = (id: ProjectGroup) =>
  projects
    .filter((p) => p.group === id)
    .sort((a, b) => (b.program?.week ?? 0) - (a.program?.week ?? 0));
