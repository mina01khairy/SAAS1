import { HTMLAttributes, ReactNode } from "react";
import clsx from "@/lib/clsx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
  glass?: boolean;
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  padding = "md",
  glass = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border border-outline-variant/30 shadow-sm",
        glass ? "glass-card" : "bg-surface-container-lowest",
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
