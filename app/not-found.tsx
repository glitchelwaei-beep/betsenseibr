import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <h1 className="font-display text-4xl font-extrabold tracking-tight">Página não encontrada</h1>
      <p className="mt-4 text-text-muted">O link pode estar desatualizado ou digitado errado.</p>
      <nav className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
        <Link href="/" className="text-brand hover:underline">
          Início
        </Link>
        <Link href="/betwinner" className="text-brand hover:underline">
          BetWinner
        </Link>
        <Link href="/copa-do-mundo-2026" className="text-brand hover:underline">
          Copa 2026
        </Link>
        <Link href="/codigo-promocional" className="text-brand hover:underline">
          Código promocional
        </Link>
      </nav>
    </Container>
  );
}
