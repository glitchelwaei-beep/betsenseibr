import Image from "next/image";
import { cn } from "@/lib/cn";

type BlogFeaturedImageProps = {
  src: string;
  alt: string;
  /** `hero` = article figure; `card` = index featured; `thumb` = list row */
  variant?: "hero" | "card" | "thumb";
  priority?: boolean;
  className?: string;
};

export function BlogFeaturedImage({
  src,
  alt,
  variant = "hero",
  priority = false,
  className,
}: BlogFeaturedImageProps) {
  const isHero = variant === "hero";
  const isThumb = variant === "thumb";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-bg-elevated",
        isHero && "aspect-[2/1] w-full rounded-2xl border border-border",
        variant === "card" && "aspect-[16/9] w-full rounded-2xl border border-border",
        isThumb && "aspect-[16/10] w-full shrink-0 rounded-xl border border-border sm:w-44",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={
          isHero
            ? "(max-width: 768px) 100vw, 768px"
            : isThumb
              ? "(max-width: 640px) 100vw, 176px"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 720px, 768px"
        }
        className={cn(
          isHero ? "object-contain object-center" : "object-cover object-center",
          (variant === "card" || isThumb) &&
            "transition-transform duration-500 ease-out group-hover:scale-[1.02]",
        )}
      />
      {variant === "card" ? (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg to-transparent opacity-90"
          aria-hidden
        />
      ) : null}
    </div>
  );
}
