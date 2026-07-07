"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/Card";

export function TicketTagsCard({ initialTags }: { initialTags: string[] }) {
  const [tags, setTags] = useState(initialTags);
  const [draft, setDraft] = useState("");

  function addTag() {
    const value = draft.trim().toLowerCase();
    if (value && !tags.includes(value)) {
      setTags((prev) => [...prev, value]);
    }
    setDraft("");
  }

  return (
    <Card>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
        Tags
      </h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary-container/30 text-on-secondary-container rounded-full font-label-sm text-label-sm normal-case"
          >
            {tag}
            <button
              onClick={() => setTags((prev) => prev.filter((t) => t !== tag))}
              className="hover:text-error transition-colors"
              aria-label={`Remove ${tag}`}
            >
              <FontAwesomeIcon icon={faXmark} className="text-[10px]" />
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTag();
            }
          }}
          placeholder="Add a tag..."
          className="flex-1 px-3 py-2 bg-surface-container-lowest border border-outline-variant/40 rounded-lg font-body-sm text-body-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
        />
        <button
          onClick={addTag}
          className="w-9 h-9 shrink-0 rounded-lg bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
          aria-label="Add tag"
        >
          <FontAwesomeIcon icon={faPlus} className="text-xs" />
        </button>
      </div>
    </Card>
  );
}
