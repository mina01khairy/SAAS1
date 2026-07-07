"use client";

import { useMemo, useState } from "react";
import { KBHero } from "@/components/knowledge-base/KBHero";
import { KBCategoryGrid } from "@/components/knowledge-base/KBCategoryGrid";
import { KBArticleList } from "@/components/knowledge-base/KBArticleList";
import { knowledgeArticles } from "@/lib/mockData";

export function KnowledgeBaseView() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return knowledgeArticles;
    return knowledgeArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="space-y-10">
      <KBHero onSearch={setQuery} />
      {!query && (
        <div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
            Browse by category
          </h3>
          <KBCategoryGrid />
        </div>
      )}
      <div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
          {query ? "Search results" : "Popular articles"}
        </h3>
        <KBArticleList articles={filtered} />
      </div>
    </div>
  );
}
