import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { KnowledgeArticle } from "@/lib/types";

export function KBArticleList({ articles }: { articles: KnowledgeArticle[] }) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-16 text-on-surface-variant font-body-md text-body-md">
        No articles match your search.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {articles.map((article) => (
        <Card
          key={article.id}
          className="flex flex-col sm:flex-row sm:items-center gap-4 cursor-pointer hover:border-primary/40 hover:shadow-md transition-all"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <Badge tone="primary">{article.category}</Badge>
              <span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant normal-case">
                <FontAwesomeIcon icon={faClock} className="text-[10px]" />
                {article.readTime}
              </span>
            </div>
            <h3 className="font-label-md text-body-lg font-medium text-on-surface mb-1">
              {article.title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              {article.excerpt}
            </p>
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="hidden sm:block text-outline shrink-0"
          />
        </Card>
      ))}
    </div>
  );
}
