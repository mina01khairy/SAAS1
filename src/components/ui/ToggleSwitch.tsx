"use client";

import clsx from "@/lib/clsx";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (next: boolean) => void;
  label?: string;
  description?: string;
}

export function ToggleSwitch({
  checked,
  onChange,
  label,
  description,
}: ToggleSwitchProps) {
  const toggle = (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={clsx(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20",
        checked ? "bg-primary" : "bg-outline-variant"
      )}
    >
      <span
        className={clsx(
          "inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );

  if (!label) return toggle;

  return (
    <div className="flex items-center justify-between py-2 gap-4">
      <div>
        <p className="font-label-md text-label-md text-on-surface">{label}</p>
        {description && (
          <p className="text-xs text-on-surface-variant">{description}</p>
        )}
      </div>
      {toggle}
    </div>
  );
}
