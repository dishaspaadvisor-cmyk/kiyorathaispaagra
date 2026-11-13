import type { MetadataRoute } from "next";
import { blogs } from "@/data/blog";
import { services } from "@/data/service";
import { absoluteUrl } from "@/data/seo";
import { siteData } from "@/data/site";

const staticPages: MetadataRoute.Sitemap = [
  { url: siteData.url, changeFrequency: "weekly", priority: 1 },
  { url: absoluteUrl("/services"), changeFrequency: "weekly", priority: 0.9 },
  { url: absoluteUrl("/contact"), changeFrequency: "monthly", priority: 0.9 },
  { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.8 },
  { url: absoluteUrl("/offers"), changeFrequency: "monthly", priority: 0.7 },
  { url: absoluteUrl("/reviews"), changeFrequency: "monthly", priority: 0.7 },
  { url: absoluteUrl("/gallery"), changeFrequency: "monthly", priority: 0.7 },
  { url: absoluteUrl("/blog"), changeFrequency: "weekly", priority: 0.7 },
  { url: absoluteUrl("/privacy-policy"), changeFrequency: "yearly", priority: 0.3 },
  {
    url: absoluteUrl("/terms-and-conditions"),
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages,
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogs.map((blog) => ({
      url: absoluteUrl(`/blog/${blog.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
