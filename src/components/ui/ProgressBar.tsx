"use client";

import { motion } from "framer-motion";
import clsx from "@/lib/clsx";

interface ProgressBarProps {
  value: number;
  colorClass?: string;
  trackClass?: string;
  height?: string;
}

export function ProgressBar({
  value,
  colorClass = "bg-primary",
  trackClass = "bg-surface-container-high",
  height = "h-2",
}: ProgressBarProps) {
  return (
    <div className={clsx("w-full rounded-full overflow-hidden", trackClass, height)}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={clsx("h-full rounded-full", colorClass)}
      />
    </div>
  );
}
