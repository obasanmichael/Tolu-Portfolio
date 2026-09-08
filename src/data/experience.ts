import { type Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "lendsqr-sre",
    role: "Fullstack & Site Reliability Engineer",
    company: "Lendsqr",
    type: "full-time",
    duration: "10 months",
    period: "Nov 2025 - Aug 2026",
    summary:
      "I work on fixing bugs and keeping the platform stable in production. When something breaks, I'm one of the people who figures out what went wrong and gets it back on track.",
    responsibilities: [
      "Find and fix UI bugs, broken states, bad API rendering, layout issues and backend bugs",
      "Triage errors using Sentry and Grafana, then deploy fixes through staging to production",
      "Look into recurring issues to understand root causes and stop them from happening again",
      "Work on features and improvements to the platform",
    ],
    tools: ["Next", "Angular", "TypeScript", "Sentry", "Grafana", "Git", "Express", "Node"],
  },
  {
    id: "vesti-intern",
    role: "Mobile Frontend Developer Intern",
    company: "Vesti",
    type: "full-time",
    duration: "6 months",
    period: "Mar 2024 - Aug 2024",
    summary:
      "Worked on the Element by Vesti mobile app, building and improving screens that real users interacted with daily.",
    responsibilities: [
      "Built and improved 7+ production screens in the Element by Vesti app using Flutter and Firebase",
      "Integrated APIs for financial transaction statements so users could download reports directly in the app",
      "Translated UI/UX designs into working Flutter components that matched the product spec",
    ],
    tools: ["Flutter", "Firebase", "Dart", "Node"],
  },
];
