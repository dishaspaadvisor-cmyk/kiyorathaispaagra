import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { siteData } from "@/data/site";
import { absoluteUrl, coreServiceKeywords, jsonLd } from "@/data/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),
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
  verification: {
    google: "Sifv4MefWWJYfMnVtMUVJkPF7ct3IONjLYqw0Oi9I8g",
  },
  alternates: {
    canonical: siteData.url,
  },
  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    url: siteData.url,
    siteName: siteData.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/kiyorathaispa.png"),
        width: 1200,
        height: 630,
        alt: `${siteData.name} spa and massage center in Agra`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.title,
    description: siteData.seo.description,
    images: [absoluteUrl("/images/kiyorathaispa.png")],
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
    "@id": `${siteData.url}/#business`,
    name: siteData.name,
    alternateName: "Kiyora Spa Agra",
    description: siteData.seo.description,
    url: siteData.url,
    telephone: siteData.phone,
    email: siteData.email,
    slogan: siteData.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.address,
      addressLocality: siteData.city,
      addressRegion: siteData.state,
      postalCode: siteData.pincode,
      addressCountry: "IN",
    },
    areaServed: [
      siteData.city,
      siteData.area,
      "Fatehabad Road",
      "Tajganj",
      "Agra Cantonment",
    ],
    geo: {
      "@type": "GeoCoordinates",
      address: siteData.address,
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
    image: absoluteUrl("/images/kiyorathaispa.png"),
    logo: absoluteUrl("/favicon.png"),
    priceRange: "INR 1500-5000",
    paymentAccepted: "Cash, UPI, Card",
    currenciesAccepted: "INR",
    knowsAbout: coreServiceKeywords,
    makesOffer: coreServiceKeywords.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
        serviceType: service,
        areaServed: siteData.city,
      },
    })),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteData.name,
    url: siteData.url,
    description: siteData.seo.description,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: siteData.name,
      url: siteData.url,
    },
  };

  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(healthBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema) }}
        />

        <Header />
        {children}
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
