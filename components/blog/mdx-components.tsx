import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { BankrollSplit } from "@/components/blog/infographics/bankroll-split";
import { StakeLadder } from "@/components/blog/infographics/stake-ladder";
import { RiskMeter } from "@/components/blog/infographics/risk-meter";
import { CriteriaChecklist } from "@/components/blog/infographics/criteria-checklist";
import { LicenseFork } from "@/components/blog/infographics/license-fork";
import { RedFlagsStrip } from "@/components/blog/infographics/red-flags-strip";
import { Callout } from "@/components/blog/callout";
import { AffiliateCta } from "@/components/blog/affiliate-cta";
import { RelatedLinks } from "@/components/blog/related-links";
import { AffiliateOfferCard } from "@/components/site/affiliate-offer-card";

function isInternalHref(href: string | undefined): href is string {
  return Boolean(href && href.startsWith("/") && !href.startsWith("//"));
}

export const blogMdxComponents: MDXComponents = {
  a: ({ href, children, ...props }) => {
    if (isInternalHref(href)) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  BankrollSplit,
  StakeLadder,
  RiskMeter,
  CriteriaChecklist,
  LicenseFork,
  RedFlagsStrip,
  Callout,
  AffiliateCta,
  AffiliateOfferCard,
  RelatedLinks,
};
