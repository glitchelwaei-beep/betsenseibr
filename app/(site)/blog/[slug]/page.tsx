import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageUpdated } from "@/components/site/page-updated";
import { JsonLd } from "@/components/site/json-ld";
import { BlogFeaturedImage } from "@/components/blog/featured-image";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, faqSchema, videoObjectSchema } from "@/lib/schema";
import {
  absoluteBlogImageUrl,
  formatBlogDate,
  getPostBySlug,
  getPostSlugs,
} from "@/lib/blog";
import { renderBlogMdx } from "@/lib/mdx";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: absoluteBlogImageUrl(post.image),
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const Content = await renderBlogMdx(post.content);
  const absoluteImage = absoluteBlogImageUrl(post.image);
  const articleVideo = post.video
    ? {
        name: post.video.title,
        description: post.video.description,
        contentUrl: post.video.src,
        thumbnailUrl: post.video.poster,
        uploadDate: post.video.uploadDate,
        duration: post.video.duration,
      }
    : undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: post.title,
          description: post.description,
          url: `/blog/${post.slug}`,
          datePublished: post.date,
          dateModified: post.updated,
          authorName: post.authorName,
          image: absoluteImage,
          video: articleVideo,
        })}
      />
      {post.video ? (
        <JsonLd
          data={videoObjectSchema({
            name: post.video.title,
            description: post.video.description,
            contentUrl: post.video.src,
            thumbnailUrl: post.video.poster,
            uploadDate: post.video.uploadDate,
            duration: post.video.duration,
          })}
        />
      ) : null}
      {post.faq?.length ? <JsonLd data={faqSchema(post.faq)} /> : null}

      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />
      </Container>

      <section className="py-10">
        <Container className="max-w-3xl">
          {post.image ? (
            <BlogFeaturedImage
              src={post.image}
              alt={post.imageAlt ?? post.title}
              variant="hero"
              priority
              className="mb-8"
            />
          ) : null}

          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <PageUpdated date={formatBlogDate(post.updated)} className="mt-2" />
          {post.tags.length ? (
            <p className="mt-2 text-sm text-text-dim">{post.tags.join(" · ")}</p>
          ) : null}
          <p className="mt-4 text-lg text-text-muted leading-relaxed">{post.excerpt}</p>

          <article className="prose-content mt-8">
            <Content />
          </article>

          {post.faq?.length ? (
            <div className="not-prose mt-12 space-y-3">
              <h2 className="font-display text-2xl font-bold text-text">Perguntas frequentes</h2>
              {post.faq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-xl border border-border bg-bg-elevated/50 px-4 py-3"
                >
                  <summary className="cursor-pointer list-none font-semibold text-text outline-none marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-3">
                      {item.question}
                      <span className="text-text-dim transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}
