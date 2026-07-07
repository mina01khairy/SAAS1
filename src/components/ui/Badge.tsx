import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import clsx from "@/lib/clsx";

type Tone =
  | "neutral"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "dark";

const toneClasses: Record<Tone, string> = {
  neutral: "bg-surface-container text-on-surface-variant",
  primary: "bg-primary-container/15 text-primary",
  success: "bg-green-50 text-green-700",
  warning: "bg-amber-50 text-amber-700",
  danger: "bg-error-container text-on-error-container",
  dark: "bg-inverse-surface text-inverse-on-surface",
};

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  icon?: IconDefinition;
  className?: string;
  pill?: boolean;
}

export function Badge({
  children,
  tone = "neutral",
  icon,
  className,
  pill = true,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-label-sm font-label-sm uppercase tracking-wide",
        pill ? "rounded-full" : "rounded-lg",
        toneClasses[tone],
        className
      )}
    >
      {icon && <FontAwesomeIcon icon={icon} className="text-[0.85em]" />}
      {children}
    </span>
  );
}
