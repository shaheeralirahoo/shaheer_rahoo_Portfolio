import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  for (const project of projects) {
    if (!project.slug) continue;
    urls.push({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: project.featured ? 0.8 : 0.6,
    });
  }

  return urls;
}
