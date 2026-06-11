import { BemobLpPixel } from "@/components/lp/bemob-lp-pixel";
import { BEMOB_LP_PIXEL } from "@/lib/affiliate";

export default function MigrandoBetwinnerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BemobLpPixel landingNumber={BEMOB_LP_PIXEL["migrando-betwinner"]} />
      {children}
    </>
  );
}
