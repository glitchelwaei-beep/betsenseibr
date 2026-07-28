import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { BlogFeaturedImage } from "@/components/blog/featured-image";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { formatBlogDate, getAllPosts } from "@/lib/blog";

export const metadata = buildMetadata({
  title: "Blog BetSensei: guias de apostas esportivas",
  description:
    "Artigos e guias do BetSensei sobre gestão de banca, odds, mercados e disciplina nas apostas esportivas — em português, para o apostador brasileiro.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />

      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Blog" }]} />
      </Container>

      <section className="relative mt-4 overflow-hidden border-y border-border">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(249,115,22,0.18),transparent_55%),radial-gradient(ellipse_at_90%_40%,rgba(34,211,238,0.08),transparent_45%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,14,26,0.55))]"
          aria-hidden
        />

        <Container className="relative py-14 sm:py-20">
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-brand">Blog</span> BetSensei
          </h1>
          <p className="mt-4 max-w-xl text-lg text-text-muted">
            Guias objetivos para apostar com método — banca, disciplina e contexto brasileiro.
          </p>

          {featured ? (
            <Link
              href={`/blog/${featured.slug}`}
              className="blog-featured-link group mt-10 block max-w-3xl outline-none"
            >
              {featured.image ? (
                <BlogFeaturedImage
                  src={featured.image}
                  alt={featured.imageAlt ?? featured.title}
                  variant="card"
                  priority
                  className="mb-6"
                />
              ) : null}
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                Em destaque
              </p>
              <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-text transition-colors group-hover:text-brand sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-text-muted leading-relaxed">{featured.excerpt}</p>
              <p className="mt-4 text-sm text-text-dim">
                {formatBlogDate(featured.updated)}
                {featured.tags.length ? (
                  <>
                    {" · "}
                    <span>{featured.tags.slice(0, 3).join(" · ")}</span>
                  </>
                ) : null}
              </p>
            </Link>
          ) : (
            <p className="mt-10 text-text-muted">Em breve, novos artigos.</p>
          )}
        </Container>
      </section>

      {rest.length > 0 ? (
        <section className="py-14">
          <Container className="max-w-3xl">
            <h2 className="font-display text-xl font-bold text-text">Mais artigos</h2>
            <ul className="mt-8 divide-y divide-border">
              {rest.map((post) => (
                <li key={post.slug} className="py-6 first:pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-4 sm:flex-row sm:items-center"
                  >
                    {post.image ? (
                      <BlogFeaturedImage
                        src={post.image}
                        alt={post.imageAlt ?? post.title}
                        variant="thumb"
                      />
                    ) : null}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg font-bold text-text transition-colors group-hover:text-brand">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-muted leading-relaxed">
                        {post.excerpt}
                      </p>
                      <p className="mt-2 text-sm text-text-dim">
                        {formatBlogDate(post.updated)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </>
  );
}
