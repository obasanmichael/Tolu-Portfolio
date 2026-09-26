import { type Project } from "@/types";

const KOYA = "Koya Talent";

export const projects: Project[] = [
  {
    id: "outreachpilot",
    name: "OutreachPilot",
    type: "AI Agent",
    group: "ai-automation",
    featured: true,
    program: { name: KOYA, week: 5 },
    tagline:
      "An AI agent that finds, qualifies and drafts outreach for B2B leads, and never sends anything.",
    chips: ["Claude Agent SDK", "Limits enforced in code", "~$1.24 per 10 leads"],
    stack: ["Next.js", "Claude Agent SDK", "Apify", "Firecrawl", "Supabase", "Docker", "Render"],
    links: { live: "https://outreach-pilot.onrender.com" },
    detail: {
      loomId: "412e27cde4ef4c4795149f69d4894d9e",
      durationLabel: "5 min",
      flow: [
        "Objective",
        "Preflight check",
        "Agent refines ICP",
        "Apify discovery",
        "Firecrawl reads sites",
        "Qualify",
        "Draft outreach",
        "Human review",
        "Export",
      ],
      checks: [1],
      approval: 7,
      stats: [
        { value: "~$1.24", label: "per 10-lead run" },
        { value: "8", label: "agent tools" },
        { value: "0", label: "emails sent" },
      ],
      decisions: [
        {
          title: "Switched discovery from Google to LinkedIn",
          detail: "Search returned web pages, not companies. LinkedIn returns size and country as data code can check.",
        },
        {
          title: "The model is told the limits, code enforces them",
          detail: "Leads, searches, scrapes and dollars are capped on every tool call, whatever a web page says.",
        },
      ],
      access: {
        credentials: [
          { role: "Admin", email: "admin@outreachpilot.test", password: "TestPassword123!" },
        ],
        notice:
          "Hosted on Render's free tier, so the first load can take up to a minute. A full run takes about 13 minutes.",
      },
    },
  },
  {
    id: "proposalpilot",
    name: "ProposalPilot",
    type: "AI Document Workflow",
    group: "ai-automation",
    featured: true,
    program: { name: KOYA, week: 3 },
    tagline:
      "Discovery-call notes become a client-ready proposal that is approved before it's sent.",
    chips: ["Approval enforced in the database", "6-section proposals", "Sonnet 5 + Haiku 4.5"],
    stack: ["Next.js", "Supabase", "Claude API", "Resend", "Sentry", "Vercel"],
    links: { live: "https://tolulope-proposal-pilot-alpha.vercel.app" },
    detail: {
      loomId: "d7a130d270f544d0a829e62e54fb18ba",
      durationLabel: "5 min",
      flow: [
        "Intake or call notes",
        "Claude drafts 6 sections",
        "Edit or regenerate",
        "Approval",
        "PDF",
        "Send to client",
      ],
      approval: 3,
      stats: [
        { value: "1", label: "Claude call per proposal" },
        { value: "3", label: "roles" },
        { value: "0", label: "sent without approval" },
      ],
      decisions: [
        {
          title: "Approval lives in the database, not the buttons",
          detail: "Even a direct admin-level request can't move a proposal to sent without approval.",
        },
        {
          title: "One generation call, not two",
          detail: "I tested both. One call was cheaper, with no drop in quality.",
        },
      ],
      access: {
        credentials: [
          { role: "Admin", email: "admin@test.local", password: "TestPassword123!" },
        ],
      },
    },
  },
  {
    id: "jobtrackr",
    name: "JobTrackr",
    type: "Web + Mobile SaaS",
    group: "products",
    featured: true,
    status: "in-development",
    tagline:
      "Search jobs, track applications and deadlines, and get resume feedback from one dashboard.",
    chips: ["Web + mobile", "Resume parsing", "Custom NestJS API"],
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
    links: {
      webRepo: "https://github.com/obasanmichael/JobTrackr-Frontend",
      mobileRepo: "https://github.com/obasanmichael/JobTrackr-Mobile",
      backendRepo: "https://github.com/obasanmichael/JobTrackr-Backend",
      live: "https://job-trackr-frontend-wine.vercel.app/",
    },
  },
  {
    id: "contentpilot",
    name: "ContentPilot",
    type: "AI Content Pipeline",
    group: "ai-automation",
    program: { name: KOYA, week: 4 },
    tagline:
      "One idea or link becomes a cited article, plus LinkedIn, X and newsletter versions.",
    chips: ["Every claim sourced", "Code decides pass or revise", "Scheduled publishing"],
    stack: ["Next.js", "Supabase", "Claude API", "Firecrawl", "Resend", "GitHub Actions"],
    links: { live: "https://tolulope-content-pilot.vercel.app" },
    detail: {
      loomId: "e479bd2864ae43239fe92cda036ea13c",
      durationLabel: "5 min",
      flow: [
        "Idea or URL",
        "Research",
        "Pick an angle",
        "Write with citations",
        "Check claims",
        "Revise flagged sections",
        "Channel versions",
        "Approve",
        "Publish or schedule",
      ],
      checks: [4],
      approval: 7,
      stats: [
        { value: "3", label: "channels" },
        { value: "≤5", label: "revision rounds" },
        { value: "5 min", label: "scheduler interval" },
      ],
      decisions: [
        {
          title: "Code decides pass or revise, not Claude",
          detail: "A model asked to list problems always finds one, so it could never pass a draft.",
        },
        {
          title: "Revisions rewrite only the flagged sections",
          detail: "Rewriting everything kept resurfacing fixed text as new problems.",
        },
      ],
      access: {
        credentials: [
          { role: "Admin", email: "admin@test.local", password: "TestPassword123!" },
        ],
      },
    },
  },
  {
    id: "ops-reporting",
    name: "AI Ops Reporting",
    type: "Automation + Dashboard",
    group: "ai-automation",
    program: { name: KOYA, week: 2 },
    tagline: "Three business data sources in, one trustworthy dashboard out.",
    chips: ["Metrics computed in code", "Claude explains, never counts", "Ask-AI chat"],
    stack: ["n8n", "Claude API", "Supabase", "Next.js", "Recharts", "Vercel"],
    links: { live: "https://tolulope-ai-ops-reporting-system.vercel.app" },
    detail: {
      loomId: "304290f5bbbd4e9dbbe7a6227feaa87e",
      durationLabel: "5 min",
      flow: [
        "Sheets + Airtable + API",
        "Clean and flag",
        "Compute metrics",
        "Claude summary",
        "Supabase",
        "Dashboard",
      ],
      checks: [1],
      stats: [
        { value: "3", label: "data sources" },
        { value: "Daily", label: "auto-refresh" },
        { value: "~25s", label: "custom report" },
      ],
      decisions: [
        {
          title: "Claude gets computed numbers, never raw records",
          detail: "Countable facts are calculated in the workflow. The model only interprets them.",
        },
        {
          title: "Messy data is flagged, not dropped",
          detail: "Every excluded record shows on a Data Quality page with its reason.",
        },
      ],
      access: {
        notice:
          "The n8n workflow behind this dashboard isn't hosted right now. Saved reports still load, but generating new ones won't work as shown in the video.",
      },
    },
  },
  {
    id: "invoice-automation",
    name: "Invoice Processing",
    type: "n8n Automation",
    group: "ai-automation",
    program: { name: KOYA, week: 1 },
    tagline: "Vendor invoices land in an inbox and come out as clean, checked records.",
    chips: ["Never guesses", "Cheap filter before Claude", "Every failure logged"],
    stack: ["n8n", "Claude API", "Gmail", "Google Sheets"],
    links: {},
    detail: {
      loomId: "f64829837eff4f389cc4cad505cba901",
      durationLabel: "5 min",
      flow: [
        "Inbox",
        "Is it an invoice?",
        "Read PDF or email",
        "Claude extracts",
        "Rule check",
        "Duplicate check",
        "Log or flag",
      ],
      checks: [1, 4, 5],
      stats: [
        { value: "3", label: "required fields" },
        { value: "0", label: "guessed values" },
        { value: "100%", label: "failures logged with a reason" },
      ],
      decisions: [
        {
          title: "Missing fields are flagged, never guessed",
          detail: "Only vendor, amount and currency are required, because vendors format invoices differently.",
        },
        {
          title: "A cheap check runs before Claude",
          detail: "Obvious non-invoices are filtered out without costing a model call.",
        },
      ],
    },
  },
  {
    id: "travely",
    name: "Travely",
    type: "Travel Recommendation App",
    group: "products",
    status: "live",
    tagline: "Suggests destinations from your budget, activities and lodging preferences.",
    chips: ["Fuzzy-logic scoring", "Content-based filtering", "FastAPI backend"],
    stack: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Firebase", "Python"],
    links: {
      webRepo: "https://github.com/obasanmichael/travely-app",
      backendRepo: "https://github.com/obasanmichael/travely-backend.git",
      live: "https://travely-app-two.vercel.app/",
    },
  },
  {
    id: "cbm-emr",
    name: "CBM-EMR",
    type: "Healthcare Web Application",
    group: "products",
    status: "live",
    tagline: "An electronic medical records platform. I led the frontend.",
    chips: ["Lead frontend engineer", "Clinical workflows", "Reusable component library"],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    links: { live: "https://www.cbmemr.com/" },
  },
  {
    id: "ravebil",
    name: "Ravebil",
    type: "Web Design & Digital Presence",
    group: "products",
    status: "live",
    tagline: "Websites that help service businesses look credible and capture leads.",
    chips: ["Business websites", "SEO and indexing", "Domains and hosting"],
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    links: {},
    clientSites: [
      { name: "Titob Pharmacy", url: "https://www.titobpharmacy.com/" },
      { name: "CURE-CARE Diagnostics", url: "https://www.curecaremedical-diagnostic.com.ng/" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

/** Projects with a detail page, in program-week order, for routing and prev/next. */
export const detailProjects = projects
  .filter((p) => p.detail)
  .sort((a, b) => (a.program?.week ?? 0) - (b.program?.week ?? 0));

export const getProject = (id: string) => projects.find((p) => p.id === id);
