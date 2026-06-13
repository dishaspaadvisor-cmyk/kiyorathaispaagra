import { siteData } from '@/data/site';
import { blogs } from '@/data/blog';
import { services } from '@/data/service';

export async function GET() {
  const baseUrl = siteData.url;
  const today = new Date().toISOString().slice(0, 10);

  const staticPages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/contact', priority: '0.9', changefreq: 'monthly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/offers', priority: '0.8', changefreq: 'weekly' },
    { path: '/reviews', priority: '0.7', changefreq: 'monthly' },
    { path: '/gallery', priority: '0.7', changefreq: 'monthly' },
    { path: '/blog', priority: '0.7', changefreq: 'weekly' },
    { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms-and-conditions', priority: '0.3', changefreq: 'yearly' },
  ];

  const urls = staticPages.map((page) => ({
    loc: `${baseUrl}${page.path}`,
    lastmod: today,
    changefreq: page.changefreq,
    priority: page.priority,
  }));

  services.forEach((s) => {
    urls.push({
      loc: `${baseUrl}/services/${s.slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8',
    });
  });

  blogs.forEach((b) => {
    urls.push({
      loc: `${baseUrl}/blog/${b.slug}`,
      lastmod: b.date || today,
      changefreq: 'monthly',
      priority: '0.6',
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((u) => {
        return `<url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`;
      })
      .join('')}
  </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
