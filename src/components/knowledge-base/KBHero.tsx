"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function KBHero({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <div className="rounded-2xl bg-mesh border border-outline-variant/20 p-8 md:p-12 text-center">
      <h2 className="font-geist font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-3">
        How can we help?
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-4xl mx-auto">
        Search our knowledge base or browse categories below to find answers
        fast.
      </p>

    </div>
  );
}
