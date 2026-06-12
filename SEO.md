SEO checklist and notes

- Add images: place Open Graph image at `/image/og-default.jpg` or update `app/layout.tsx` metadata.
- Verify `public/robots.txt` exists (created).
- `sitemap.xml` is available at `/sitemap.xml` via a dynamic route (`app/sitemap.xml/route.ts`).
- Ensure canonical URLs are correct in `app/layout.tsx` (uses `siteData.url`).
- Add descriptive `alt` attributes to all images for accessibility and SEO.
- Create and submit sitemap to Google Search Console and Bing Webmaster Tools.
- Use structured data where appropriate (JSON-LD is injected in `app/layout.tsx`).

Quick commands

Install sitemap validation and test locally:

```bash
# Start dev server
npm run dev
# Check sitemap
curl -I http://localhost:3000/sitemap.xml
```
