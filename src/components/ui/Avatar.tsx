import clsx from "@/lib/clsx";

interface AvatarProps {
  name: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  ring?: boolean;
  statusDot?: "online" | "offline" | null;
}

const sizeClasses = {
  xs: "w-6 h-6 text-[10px]",
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-32 h-32 text-4xl",
};

const palette = [
  "bg-primary-fixed text-on-primary-fixed-variant",
  "bg-secondary-fixed text-on-secondary-fixed-variant",
  "bg-tertiary-fixed text-on-tertiary-fixed-variant",
  "bg-secondary-container text-on-secondary-container",
];

function colorForName(name: string) {
  const idx = name.charCodeAt(0) % palette.length;
  return palette[idx];
}

function initialsFor(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

export function Avatar({
  name,
  size = "md",
  className,
  ring,
  statusDot,
}: AvatarProps) {
  return (
    <div className={clsx("relative shrink-0", className)}>
      <div
        className={clsx(
          "rounded-full flex items-center justify-center font-bold select-none",
          sizeClasses[size],
          colorForName(name),
          ring && "ring-2 ring-primary-container ring-offset-2 ring-offset-surface"
        )}
      >
        {initialsFor(name)}
      </div>
      {statusDot && (
        <span
          className={clsx(
            "absolute bottom-0 right-0 rounded-full border-2 border-surface",
            size === "xl" ? "w-6 h-6" : "w-2.5 h-2.5",
            statusDot === "online" ? "bg-green-500" : "bg-outline"
          )}
        />
      )}
    </div>
  );
}
