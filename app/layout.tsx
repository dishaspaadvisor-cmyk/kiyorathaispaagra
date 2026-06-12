import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { siteData } from "@/data/site";

export const metadataBase = new URL(siteData.url);

export const metadata: Metadata = {
  title: {
    default: siteData.seo.title,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.seo.description,
  keywords: siteData.seo.keywords,
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteData.url,
  },
  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    url: siteData.url,
    siteName: siteData.name,
    type: "website",
    images: [
      {
        url: `${siteData.url}/images/kiyorathaispa.png`,
        width: 1200,
        height: 630,
        alt: siteData.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.title,
    description: siteData.seo.description,
    images: [`${siteData.url}/images/kiyorathaispa.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sameAs = Object.values(siteData.socials).filter(
    (item) => item && item !== "#"
  );

  const healthBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: siteData.name,
    description: siteData.seo.description,
    url: siteData.url,
    telephone: siteData.phone,
    email: siteData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.address,
      addressLocality: siteData.city,
      addressRegion: siteData.state,
      postalCode: siteData.pincode,
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "22:00",
      },
    ],
    image: `${siteData.url}/images/kiyorathaispa.png`,
    priceRange: "₹₹",
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteData.name,
    url: siteData.url,
    description: siteData.seo.description,
    publisher: {
      "@type": "Organization",
      name: siteData.name,
      url: siteData.url,
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(healthBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <Header />
        {children}
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}