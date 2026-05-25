import { type StackCategory } from "@/types";

export const stackCategories: StackCategory[] = [
  {
    label: "Languages",
    items: [
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "React Native" },
      { name: "Angular" },
      { name: "Flutter" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
      { name: "HTML & CSS" },
      { name: "Three.js" },
      { name: "Zustand" },
      { name: "Framer Motion" },
      { name: "TanStack Query" },
      { name: "Jest" },
      { name: "Vite" },
      { name: "Webpack" },
      { name: "React Testing Library" },
      { name: "Web Accessibility (WCAG)" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "NestJS" },
      { name: "FastAPI" },
      { name: "REST APIs" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Firebase" },
      { name: "Supabase" },
    ],
  },
  {
    label: "Observability & Tools",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Sentry" },
      { name: "Grafana" },
      { name: "Cloudwatch" },
      { name: "AWS" },
      { name: "Vercel" },
      { name: "Docker" },
      { name: "Figma" },
      { name: "Metabase" },
      { name: "SonarQube" },
      { name: "Lighthouse" },
    ],
  },
];
