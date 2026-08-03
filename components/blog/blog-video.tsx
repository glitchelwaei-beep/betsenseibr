import { cn } from "@/lib/cn";

type BlogVideoProps = {
  src: string;
  poster?: string;
  title: string;
  caption?: string;
  className?: string;
};

export function BlogVideo({ src, poster, title, caption, className }: BlogVideoProps) {
  return (
    <figure
      className={cn(
        "blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80",
        className,
      )}
    >
      <div className="relative aspect-[4/3] w-full bg-black">
        <video
          className="absolute inset-0 h-full w-full object-contain"
          controls
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={title}
          title={title}
        >
          <source src={src} type="video/mp4" />
          Seu navegador não reproduz vídeo HTML5.{" "}
          <a href={src} className="underline">
            Baixar o MP4
          </a>
          .
        </video>
      </div>
      {caption ? (
        <figcaption className="border-t border-border px-5 py-4 text-sm text-text-dim sm:px-6">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
