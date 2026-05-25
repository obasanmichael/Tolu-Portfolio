import { type Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "current",
    role: "Software Engineer",
    company: "Company Name",
    type: "full-time",
    duration: "1+ year",
    period: "2024 — Present",
    summary:
      "Working across engineering support and reliability-focused tasks — investigating production issues, improving system observability, and building frontend-facing features.",
    responsibilities: [
      "Investigate and resolve production issues across web and backend systems",
      "Improve system observability using monitoring and logging tools",
      "Build and maintain frontend features with a focus on reliability and UX",
      "Collaborate with cross-functional teams on product delivery",
      "Document engineering decisions and system behaviour",
    ],
    tools: ["React", "TypeScript", "Sentry", "CloudWatch", "Grafana", "Git"],
  },
  {
    id: "freelance",
    role: "Freelance Web Developer",
    company: "Ravebil",
    type: "freelance",
    duration: "Ongoing",
    period: "2023 — Present",
    summary:
      "Building websites and digital presences for service businesses under Ravebil — helping clients improve credibility, lead capture, and online visibility.",
    responsibilities: [
      "Design and build clean, SEO-optimised business websites",
      "Set up Google indexing, domain, and hosting configurations",
      "Implement lead capture forms and client handover workflows",
      "Provide ongoing maintenance and support",
    ],
    tools: ["Next.js", "React", "Tailwind CSS", "Vercel", "SEO Tools"],
  },
];
