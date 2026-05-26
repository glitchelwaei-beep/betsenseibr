import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { JsonLd } from "@/components/site/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — BetWinner Brasil: análise, código promocional e PIX 2026`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: SITE.url,
    languages: { "pt-BR": SITE.url },
  },
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  keywords: [
    "BetWinner Brasil",
    "BetWinner código promocional",
    "BetWinner cadastro",
    "BetWinner PIX",
    "BetWinner app",
    "casas de apostas Brasil",
    "apostas esportivas",
    "apostas futebol",
    "depósito PIX casa de apostas",
    "saque PIX",
    "bônus de boas-vindas BetWinner",
    "BetWinner login",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={SITE.htmlLang} className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-bg text-text">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
