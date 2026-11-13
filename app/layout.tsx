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
     LOCAL BUSINESS SCHEMA
  ======================================================= */

  const healthBusinessSchema = {
    "@context": "https://schema.org",

    "@type": "HealthAndBeautyBusiness",

    "@id": `${siteData.url}/#business`,

    name: siteData.name,

    description: siteData.seo.description,

    url: siteData.url,

    telephone: siteData.phone,

    image: [
      absoluteUrl("/images/kiyorathaispa.png"),
      absoluteUrl("/images/smallhero.png"),
    ],

    logo: absoluteUrl("/favicon.png"),

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

    areaServed: {
      "@type": "City",
      name: siteData.city,
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

    hasMap: siteData.googleMapsDirections,

    sameAs: [siteData.googleBusinessProfileUrl],
  };

  /* =======================================================
     WEBSITE SCHEMA
  ======================================================= */

  const websiteSchema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    "@id": `${siteData.url}/#website`,

    name: siteData.name,

    url: siteData.url,

    description: siteData.seo.description,

    inLanguage: "en-IN",

    publisher: {
      "@id": `${siteData.url}/#business`,
    },
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