import { siteData } from "./site";

/* =========================================================
   CORE SERVICE KEYWORDS
========================================================= */

export const coreServiceKeywords = [
  "full body massage",
  "body massage",
  "Thai massage",
  "Swedish massage",
  "deep tissue massage",
  "full body oil massage",
  "hot oil massage",
  "Balinese massage",
  "aromatherapy massage",
  "French aroma massage",
  "four hand massage",
  "foot massage",
  "foot reflexology",
  "back massage",
  "head massage",
  "Jacuzzi spa",
  "Jacuzzi massage",
  "Lomi-Lomi massage",
];

/* =========================================================
   AGRA LOCAL SEO KEYWORDS
========================================================= */

export const localKeywords = [
  // Main Agra
  `spa in ${siteData.city}`,
  `best spa in ${siteData.city}`,
  `massage in ${siteData.city}`,
  `best massage in ${siteData.city}`,
  `massage center in ${siteData.city}`,
  `massage centre in ${siteData.city}`,
  `spa center in ${siteData.city}`,
  `spa centre in ${siteData.city}`,

  // Body massage
  `body massage in ${siteData.city}`,
  `full body massage in ${siteData.city}`,
  `body spa in ${siteData.city}`,

  // Near me
  `spa near me ${siteData.city}`,
  `massage near me ${siteData.city}`,
  `body massage near me ${siteData.city}`,

  // Main area
  `spa in ${siteData.area} ${siteData.city}`,
  `massage in ${siteData.area} ${siteData.city}`,
  `body massage in ${siteData.area} ${siteData.city}`,

  // Fatehabad Road
  `spa near Fatehabad Road ${siteData.city}`,
  `spa in Fatehabad Road ${siteData.city}`,
  `massage near Fatehabad Road ${siteData.city}`,
  `massage in Fatehabad Road ${siteData.city}`,

  // Tajganj
  `spa near Tajganj ${siteData.city}`,
  `spa in Tajganj ${siteData.city}`,
  `massage near Tajganj ${siteData.city}`,

  // Taj Mahal
  `spa near Taj Mahal ${siteData.city}`,
  `massage near Taj Mahal ${siteData.city}`,

  // Agra Cantt
  `spa near Agra Cantt`,
  `massage near Agra Cantt`,
  `spa near Agra Cantonment`,

  // Other intent
  `luxury spa in ${siteData.city}`,
  `premium spa in ${siteData.city}`,
  `wellness spa in ${siteData.city}`,
  `wellness center in ${siteData.city}`,
  `professional spa in ${siteData.city}`,
  `spa booking ${siteData.city}`,
  `massage booking ${siteData.city}`,

  // Brand
  siteData.name,
  `${siteData.name} Agra`,
];

/* =========================================================
   COMBINED SEO KEYWORDS
========================================================= */

export const allSeoKeywords = [
  ...localKeywords,
  ...coreServiceKeywords.map(
    (service) => `${service} in ${siteData.city}`
  ),
];

/* =========================================================
   KEYWORD HELPER
========================================================= */

export function keywords(
  ...items: (string | string[] | undefined | null)[]
): string[] {
  const values = items.flat().filter(Boolean) as string[];

  return [
    ...new Set([
      ...values,
      ...allSeoKeywords,
    ]),
  ];
}

/* =========================================================
   ABSOLUTE URL HELPER
========================================================= */

export function absoluteUrl(path = ""): string {
  if (!path) {
    return siteData.url;
  }

  if (
    path.startsWith("http://") ||
    path.startsWith("https://")
  ) {
    return path;
  }

  return `${siteData.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/* =========================================================
   SAFE JSON-LD HELPER
========================================================= */

export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/* =========================================================
   PAGE METADATA TYPES
========================================================= */

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  extraKeywords?: string[];
};

/* =========================================================
   PAGE METADATA HELPER
========================================================= */

export function pageMetadata({
  title,
  description,
  path = "",
  image = "/images/kiyorathaispa.png",
  imageAlt = siteData.name,
  type = "website",
  extraKeywords = [],
}: PageMetadataOptions) {
  const url = absoluteUrl(path);

  return {
    title,

    description,

    keywords: keywords(extraKeywords),

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: siteData.name,
      type,
      locale: "en_IN",

      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}