import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ComparisonPageView } from "@/components/site/comparison-page";
import { COMPARISON_SLUGS, getComparison } from "@/lib/comparisons";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return COMPARISON_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return {};

  return buildMetadata({
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    path: comparison.path,
  });
}

export default async function ComparisonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();

  return <ComparisonPageView comparison={comparison} />;
}
