import { siteData } from '@/data/site';
import { blogs } from '@/data/blog';
import { services } from '@/data/service';

export async function GET() {
  const baseUrl = siteData.url;

  const staticPages = ['/', '/about', '/contact', '/gallery', '/offers', '/services', '/blog'];

  const urls = staticPages.map((path) => ({
    loc: `${baseUrl}${path}`,
    lastmod: new Date().toISOString().slice(0, 10),
  }));

  services.forEach((s) => {
    urls.push({ loc: `${baseUrl}/services/${s.slug}`, lastmod: new Date().toISOString().slice(0, 10) });
  });

  blogs.forEach((b) => {
    urls.push({ loc: `${baseUrl}/blog/${b.slug}`, lastmod: b.date || new Date().toISOString().slice(0, 10) });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((u) => {
        return `<url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`;
      })
      .join('')}
  </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
