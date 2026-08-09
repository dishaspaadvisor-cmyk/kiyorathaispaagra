import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import BottomCTA from "@/components/BottomCTA";
import Popup from "@/components/Popup";
import Script from "next/script";
import { siteData } from "@/data/site";
import {
  absoluteUrl,
  coreServiceKeywords,
  jsonLd,
} from "@/data/seo";

/* =========================================================
   GLOBAL WEBSITE METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),

  title: {
    default: siteData.seo.title,
    template: `%s | ${siteData.name}`,
  },

  description: siteData.seo.description,

  keywords: siteData.seo.keywords,

  applicationName: siteData.name,

  authors: [
    {
      name: siteData.name,
      url: siteData.url,
    },
  ],

  creator: siteData.name,

  publisher: siteData.name,

  category: "Spa and Wellness",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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

        alt: `${siteData.name} - Spa and Massage Center in Agra`,
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

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* =======================================================
     VALID SOCIAL PROFILE LINKS
  ======================================================= */

  const sameAs = Object.values(siteData.socials).filter(
    (item): item is string =>
      typeof item === "string" &&
      item.startsWith("http")
  );

  /* =======================================================
     LOCAL BUSINESS SCHEMA
  ======================================================= */

  const healthBusinessSchema = {
    "@context": "https://schema.org",

    "@type": "HealthAndBeautyBusiness",

    "@id": `${siteData.url}/#business`,

    name: siteData.name,

    alternateName: [
      "Kiyora Spa Agra",
      "Kiyora Thai Spa Agra",
    ],

    description: siteData.seo.description,

    url: siteData.url,

    telephone: siteData.phone,

    email: siteData.email,

    slogan: siteData.tagline,

    image: [
      absoluteUrl("/images/kiyorathaispa.png"),
      absoluteUrl("/images/smallhero.png"),
    ],

    logo: absoluteUrl("/favicon.png"),

    priceRange: "₹₹",

    currenciesAccepted: "INR",

    paymentAccepted: [
      "Cash",
      "UPI",
      "Credit Card",
      "Debit Card",
    ],

    address: {
      "@type": "PostalAddress",

      streetAddress: siteData.address,

      addressLocality: siteData.city,

      addressRegion: siteData.state,

      postalCode: siteData.pincode,

      addressCountry: {
        "@type": "Country",
        name: "India",
      },
    },

    areaServed: [
      {
        "@type": "City",
        name: "Agra",
      },

      {
        "@type": "Place",
        name: "Siddharth Nagar, Agra",
      },

      {
        "@type": "Place",
        name: "Fatehabad Road, Agra",
      },

      {
        "@type": "Place",
        name: "Tajganj, Agra",
      },

      {
        "@type": "Place",
        name: "Taj Mahal, Agra",
      },

      {
        "@type": "Place",
        name: "Agra Cantonment",
      },

      {
        "@type": "Place",
        name: "Sadar Bazaar, Agra",
      },

      {
        "@type": "Place",
        name: "Sanjay Place, Agra",
      },

      {
        "@type": "Place",
        name: "Civil Lines, Agra",
      },
    ],

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

    knowsAbout: coreServiceKeywords,

    hasOfferCatalog: {
      "@type": "OfferCatalog",

      name: "Spa & Massage Services in Agra",

      itemListElement: coreServiceKeywords.map((service) => ({
        "@type": "Offer",

        itemOffered: {
          "@type": "Service",

          name: service,

          serviceType: service,

          provider: {
            "@id": `${siteData.url}/#business`,
          },

          areaServed: {
            "@type": "City",
            name: siteData.city,
          },
        },
      })),
    },

    ...(sameAs.length > 0
      ? {
          sameAs,
        }
      : {}),
  };

  /* =======================================================
     WEBSITE SCHEMA
  ======================================================= */

  const websiteSchema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    "@id": `${siteData.url}/#website`,

    name: siteData.name,

    alternateName: "Kiyora Thai Spa Agra",

    url: siteData.url,

    description: siteData.seo.description,

    inLanguage: "en-IN",

    publisher: {
      "@id": `${siteData.url}/#business`,
    },
  };

  /* =======================================================
     ORGANIZATION / BRAND SCHEMA
  ======================================================= */

  const organizationSchema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    "@id": `${siteData.url}/#organization`,

    name: siteData.name,

    url: siteData.url,

    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/favicon.png"),
    },

    email: siteData.email,

    telephone: siteData.phone,

    address: {
      "@type": "PostalAddress",

      streetAddress: siteData.address,

      addressLocality: siteData.city,

      addressRegion: siteData.state,

      postalCode: siteData.pincode,

      addressCountry: "IN",
    },

    ...(sameAs.length > 0
      ? {
          sameAs,
        }
      : {}),
  };

  return (
    <html lang="en-IN">
      <body>




        {/* =================================================
            STRUCTURED DATA
        ================================================= */}



        {/* Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(healthBusinessSchema),
          }}
        />

        {/* Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(websiteSchema),
          }}
        />

        {/* Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(organizationSchema),
          }}
        />

   {/* Google Ads Tag */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=AW-18379813823"
    strategy="afterInteractive"
  />

  <Script id="google-ads-tag" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-18379813823');
    `}
  </Script>

        {/* =================================================
            WEBSITE UI
        ================================================= */}

        <Header />

        <main>
          {children}
        </main>

        <BottomCTA />

        <Footer />

        <FloatingButton />

        <Popup />
      </body>
    </html>
  );
}