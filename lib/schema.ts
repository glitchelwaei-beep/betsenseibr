import { SITE } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    sameAs: [SITE.telegram, SITE.youtube],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: SITE.htmlLang,
  };
}

type BreadcrumbItem = { name: string; url: string };
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.url, SITE.url).toString(),
    })),
  };
}

type ReviewSchemaInput = {
  itemName: string;
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
  authorName: string;
  reviewBody: string;
  datePublished: string;
};
export function reviewSchema({
  itemName,
  ratingValue,
  bestRating = 10,
  worstRating = 1,
  authorName,
  reviewBody,
  datePublished,
}: ReviewSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "Organization", name: itemName },
    reviewRating: { "@type": "Rating", ratingValue, bestRating, worstRating },
    author: { "@type": "Person", name: authorName },
    reviewBody,
    datePublished,
    publisher: { "@type": "Organization", name: SITE.name },
  };
}

type FaqItem = { question: string; answer: string };
export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

type SportsEventSchemaInput = {
  name: string;
  startDate: string;
  endDate: string;
  locationName: string;
  countryCodes: string[];
  organizerName: string;
  organizerUrl: string;
  url: string;
  description?: string;
};
export function sportsEventSchema({
  name,
  startDate,
  endDate,
  locationName,
  countryCodes,
  organizerName,
  organizerUrl,
  url,
  description,
}: SportsEventSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name,
    startDate,
    endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: locationName,
      address: {
        "@type": "PostalAddress",
        addressCountry: countryCodes.join(", "),
      },
    },
    organizer: {
      "@type": "Organization",
      name: organizerName,
      url: organizerUrl,
    },
    url: new URL(url, SITE.url).toString(),
    ...(description ? { description } : {}),
  };
}

type ArticleSchemaInput = {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  image?: string;
};
export function articleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  image,
}: ArticleSchemaInput) {
  const fullUrl = new URL(url, SITE.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified,
    author: { "@type": "Person", name: authorName },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": fullUrl },
    image: image ?? `${SITE.url}/og-default.png`,
    inLanguage: SITE.htmlLang,
  };
}
