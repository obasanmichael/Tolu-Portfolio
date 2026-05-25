export interface Project {
  id: string;
  name: string;
  type: string;
  role: string;
  status: "live" | "in-development" | "private" | "mvp";
  description: string;
  stack: string[];
  highlights: string[];
  links: {
    live?: string;
    webRepo?: string;
    mobileRepo?: string;
    backendRepo?: string;
    github?: string;
    caseStudy?: string;
  };
  isPrivate?: boolean;
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
  type: "full-time" | "contract" | "freelance" | "part-time";
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
