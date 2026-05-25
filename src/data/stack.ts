import { type StackCategory } from "@/types";

export const stackCategories: StackCategory[] = [
  {
    label: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Zustand" },
      { name: "TanStack Query" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "FastAPI" },
      { name: "PostgreSQL" },
      { name: "REST APIs" },
    ],
  },
  {
    label: "Mobile",
    items: [{ name: "React Native" }],
  },
  {
    label: "Tools & Infrastructure",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "Docker" },
      { name: "Supabase" },
      { name: "Firebase" },
      { name: "Sentry" },
      { name: "CloudWatch" },
      { name: "Grafana" },
    ],
  },
];
