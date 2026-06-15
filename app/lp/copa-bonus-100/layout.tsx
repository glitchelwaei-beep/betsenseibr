import { RichAdsPushTracking } from "@/components/lp/richads-push-tracking";

export default function CopaBonus100Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <RichAdsPushTracking />
      {children}
    </>
  );
}
