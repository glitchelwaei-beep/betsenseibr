import type { Metadata } from "next";
import { SITE } from "./site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  image?: string;
};

export function buildMetadata({ title, description, path, noindex, image }: SeoInput): Metadata {
  const url = new URL(path, SITE.url).toString();
  const brandedTitle = title.includes(SITE.shortName) ? title : `${title} | ${SITE.shortName}`;
  const ogImage = image ?? `${SITE.url}/og-default.png`;

  return {
    title: { absolute: brandedTitle },
    description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
      languages: { "pt-BR": url },
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.ogLocale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      site: SITE.twitter,
      title: brandedTitle,
      description,
      images: [ogImage],
    },
    other: {
      rating: "adult",
      "age-rating": "18+",
    },
  };
}
