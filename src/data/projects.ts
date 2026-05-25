import { type Project } from "@/types";

export const projects: Project[] = [
  {
    id: "jobtrackr",
    name: "JobTrackr",
    type: "Web + Mobile SaaS",
    role: "Full-stack Engineer & Product Builder",
    status: "in-development",
    description:
      "A job board and application tracking platform that helps users search for jobs, track applications, manage deadlines, review resumes, and receive job-alignment suggestions — all from one organized dashboard.",
    stack: [
      "Next.js",
      "React Native",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
    ],
    highlights: [
      "Job search and application tracking dashboard",
      "Resume parsing and review system",
      "Job matching and alignment suggestions",
      "Mobile app for on-the-go tracking",
      "Admin dashboard and custom backend API",
    ],
    links: {
      webRepo: "",
      mobileRepo: "",
      backendRepo: "",
      live: "",
    },
  },
  {
    id: "travely",
    name: "Travely",
    type: "Travel Recommendation App",
    role: "Full-stack Engineer",
    status: "live",
    description:
      "A travel recommendation system that suggests destinations based on user budget, preferred activities, and lodging interests using content-based filtering and fuzzy logic scoring.",
    stack: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Firebase", "Python"],
    highlights: [
      "Budget-aware fuzzy logic recommendation engine",
      "Content-based filtering for destination matching",
      "User preference collection and storage",
      "Firebase authentication and preference persistence",
      "FastAPI recommendation backend",
    ],
    links: {
      github: "",
      live: "",
    },
  },
  {
    id: "cbm-emr",
    name: "CBM-EMR",
    type: "Healthcare Web Application",
    role: "Lead Frontend Engineer",
    status: "private",
    isPrivate: true,
    description:
      "A healthcare-focused electronic medical records web application. As Lead Frontend Engineer, I structured and implemented key frontend interfaces for managing patient, clinical, and operational workflows across the platform.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Led frontend architecture and implementation",
      "Built reusable component library for clinical workflows",
      "Designed and built patient management dashboards",
      "Improved UI structure and user experience across screens",
      "Collaborated closely with product and backend teams",
    ],
    links: {},
  },
  {
    id: "ravebil",
    name: "Ravebil",
    type: "Web Design & Digital Presence",
    role: "Web Developer & Founder",
    status: "live",
    description:
      "Web design and digital presence work for service businesses — building clean websites that improve credibility, online visibility, lead capture, and customer trust for local and growing businesses.",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    highlights: [
      "Business websites and landing pages",
      "SEO setup and Google indexing",
      "Domain, hosting, and DNS configuration",
      "Lead capture forms and client handover",
      "Ongoing support and site maintenance",
    ],
    links: {
      live: "",
    },
  },
];
