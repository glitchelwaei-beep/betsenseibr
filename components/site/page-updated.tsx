import { EDITORIAL } from "@/lib/editorial";

type PageUpdatedProps = {
  date: string;
  showAuthor?: boolean;
  className?: string;
};

export function PageUpdated({ date, showAuthor = true, className = "mt-3" }: PageUpdatedProps) {
  return (
    <p className={`text-sm text-text-dim ${className}`}>
      Atualizado em {date}
      {showAuthor ? ` · ${EDITORIAL.authorName}` : null}
    </p>
  );
}
