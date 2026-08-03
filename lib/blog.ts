import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { EDITORIAL } from "./editorial";
import { SITE } from "./site";

export type BlogFaq = { question: string; answer: string };

export type BlogVideoMeta = {
  src: string;
  poster: string;
  title: string;
  description: string;
  duration: string;
  uploadDate: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  updated: string;
  tags: string[];
  draft: boolean;
  /** Public path, e.g. `/blog/slug.jpg` */
  image?: string;
  imageAlt?: string;
  faq?: BlogFaq[];
  video?: BlogVideoMeta;
  authorName: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function parseMeta(data: Record<string, unknown>, fallbackSlug: string): BlogPostMeta {
  const slug = typeof data.slug === "string" ? data.slug : fallbackSlug;
  const tags = Array.isArray(data.tags)
    ? data.tags.filter((t): t is string => typeof t === "string")
    : [];
  const faq = Array.isArray(data.faq)
    ? data.faq
        .map((item) => {
          if (!item || typeof item !== "object") return null;
          const q = (item as { question?: unknown }).question;
          const a = (item as { answer?: unknown }).answer;
          if (typeof q !== "string" || typeof a !== "string") return null;
          return { question: q, answer: a };
        })
        .filter((x): x is BlogFaq => x !== null)
    : undefined;

  const imagePath =
    typeof data.image === "string"
      ? data.image
      : typeof data.ogImage === "string"
        ? data.ogImage
        : undefined;

  let video: BlogVideoMeta | undefined;
  if (data.video && typeof data.video === "object") {
    const v = data.video as Record<string, unknown>;
    if (
      typeof v.src === "string" &&
      typeof v.poster === "string" &&
      typeof v.title === "string" &&
      typeof v.description === "string" &&
      typeof v.duration === "string" &&
      typeof v.uploadDate === "string"
    ) {
      video = {
        src: v.src,
        poster: v.poster,
        title: v.title,
        description: v.description,
        duration: v.duration,
        uploadDate: v.uploadDate,
      };
    }
  }

  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    description: typeof data.description === "string" ? data.description : "",
    excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
    date: typeof data.date === "string" ? data.date : "2026-01-01",
    updated: typeof data.updated === "string" ? data.updated : (typeof data.date === "string" ? data.date : "2026-01-01"),
    tags,
    draft: Boolean(data.draft),
    image: imagePath,
    imageAlt: typeof data.imageAlt === "string" ? data.imageAlt : undefined,
    faq: faq?.length ? faq : undefined,
    video,
    authorName:
      typeof data.authorName === "string" ? data.authorName : EDITORIAL.authorName,
  };
}

/** Absolute URL for OG / JSON-LD (accepts path or full URL). */
export function absoluteBlogImageUrl(image?: string): string | undefined {
  if (!image) return undefined;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  return new URL(image, SITE.url).toString();
}

function readPostFile(filename: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIR, filename);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const fallbackSlug = filename.replace(/\.mdx?$/, "");
  const meta = parseMeta(data as Record<string, unknown>, fallbackSlug);
  return { ...meta, content: content.trim() };
}

export function getAllPosts({ includeDrafts = false } = {}): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
  const posts = files
    .map((file) => readPostFile(file))
    .filter((p): p is BlogPost => p !== null)
    .filter((p) => includeDrafts || !p.draft)
    .map(({ content: _c, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return posts;
}

export function getPostBySlug(slug: string, { includeDrafts = false } = {}): BlogPost | null {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const file = fs.existsSync(mdxPath)
    ? `${slug}.mdx`
    : fs.existsSync(mdPath)
      ? `${slug}.md`
      : null;
  if (!file) return null;
  const post = readPostFile(file);
  if (!post) return null;
  if (post.draft && !includeDrafts) return null;
  return post;
}

export function getPostSlugs({ includeDrafts = false } = {}): string[] {
  return getAllPosts({ includeDrafts }).map((p) => p.slug);
}

/** Format ISO date (YYYY-MM-DD) as pt-BR long label. */
export function formatBlogDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
