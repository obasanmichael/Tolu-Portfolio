export type ProjectGroup = "ai-automation" | "products";

export interface Project {
  /** Also the URL slug for projects that have a detail page. */
  id: string;
  name: string;
  type: string;
  group: ProjectGroup;
  featured?: boolean;
  status?: "live" | "in-development" | "private" | "mvp";
  program?: { name: string; week: number };
  tagline: string;
  chips: [string, string, string];
  stack: string[];
  links: {
    live?: string;
    webRepo?: string;
    mobileRepo?: string;
    backendRepo?: string;
    github?: string;
  };
  clientSites?: { name: string; url: string }[];
  isPrivate?: boolean;
  detail?: ProjectDetail;
}

/** Presence of `detail` is what gives a project its own /projects/[id] page. */
export interface ProjectDetail {
  loomId: string;
  durationLabel: string;
  flow: string[];
  stats: { value: string; label: string }[];
  decisions: { title: string; detail: string }[];
  access?: {
    credentials?: { role: string; email: string; password: string }[];
    notice?: string;
  };
}

export interface StackItem {
  name: string;
  icon?: string;
}

export interface StackCategory {
  label: string;
  items: StackItem[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: "full-time" | "contract" | "freelance" | "part-time" | "program";
  duration: string;
  period: string;
  summary: string;
  responsibilities: string[];
  tools: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Principle {
  number: string;
  title: string;
  description: string;
}
