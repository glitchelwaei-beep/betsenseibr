import { BemobLpPixel } from "@/components/lp/bemob-lp-pixel";
import { RichAdsPushTracking } from "@/components/lp/richads-push-tracking";
import { BEMOB_LP_PIXEL } from "@/lib/affiliate";

export default function CopaBonus100Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BemobLpPixel landingNumber={BEMOB_LP_PIXEL["copa-bonus-100"]} />
      <RichAdsPushTracking />
      {children}
    </>
  );
}
