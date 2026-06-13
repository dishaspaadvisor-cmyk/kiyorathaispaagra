import { siteData } from "./site";

export const coreServiceKeywords = [
  "full body massage",
  "Thai massage",
  "Swedish massage",
  "deep tissue massage",
  "hot oil massage",
  "Jacuzzi massage",
  "foot reflexology",
  "aromatherapy",
  "four hand massage",
  "female to male massage",
];

export const localKeywords = [
  `spa in ${siteData.city}`,
  `massage in ${siteData.city}`,
  `body massage in ${siteData.city}`,
  `spa in ${siteData.area}`,
  `massage in ${siteData.area}`,
  `spa near Fatehabad Road ${siteData.city}`,
  `wellness center in ${siteData.city}`,
  `luxury spa in ${siteData.city}`,
  `${siteData.name}`,
];

export const allSeoKeywords = [...localKeywords, ...coreServiceKeywords];

/**
 * @param {...(string|string[])} items
 */
export function keywords(...items) {
  return [...new Set([...items.flat(), ...allSeoKeywords])].join(", ");
}

export function absoluteUrl(path = "") {
  if (!path) return siteData.url;
  if (path.startsWith("http")) return path;
  return `${siteData.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function jsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * @param {{
 *   title: string;
 *   description: string;
 *   path?: string;
 *   image?: string;
 *   imageAlt?: string;
 *   type?: "website" | "article";
 *   extraKeywords?: string[];
 * }} options
 */
export function pageMetadata({
  title,
  description,
  path = "",
  image = "/images/kiyorathaispa.png",
  imageAlt = siteData.name,
  type = "website",
  extraKeywords = /** @type {string[]} */ ([]),
}) {
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
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}
