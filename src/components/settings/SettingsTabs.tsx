"use client";

import clsx from "@/lib/clsx";

export type SettingsTab = "account" | "notifications" | "security";

const tabs: { id: SettingsTab; label: string }[] = [
  { id: "account", label: "Account" },
  { id: "notifications", label: "Notifications" },
  { id: "security", label: "Security" },
];

export function SettingsTabs({
  active,
  onChange,
}: {
  active: SettingsTab;
  onChange: (tab: SettingsTab) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto hide-scrollbar border-b border-outline-variant/30">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={clsx(
            "px-4 py-3 font-label-md text-label-md whitespace-nowrap border-b-2 transition-all",
            active === tab.id
              ? "border-primary text-primary"
              : "border-transparent text-on-surface-variant hover:text-on-surface"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
