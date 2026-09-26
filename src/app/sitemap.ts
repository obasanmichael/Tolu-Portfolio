import { type MetadataRoute } from "next";
import { detailProjects } from "@/data/projects";
import { workGroups } from "@/data/workGroups";

const BASE = "https://tolulopeobasan.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...workGroups.map((g) => ({
      url: `${BASE}/work/${g.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...detailProjects.map((p) => ({
      url: `${BASE}/projects/${p.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
