"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Card } from "./Card";
import clsx from "@/lib/clsx";

interface StatCardProps {
  icon: IconDefinition;
  iconBg: string;
  iconColor: string;
  label: string;
  value: string;
  delta?: string;
  deltaTone?: "positive" | "negative" | "neutral";
  index?: number;
}

const deltaClasses = {
  positive: "text-green-600 bg-green-50",
  negative: "text-error bg-error-container/30",
  neutral: "text-on-surface-variant bg-surface-container",
};

export function StatCard({
  icon,
  iconBg,
  iconColor,
  label,
  value,
  delta,
  deltaTone = "neutral",
  index = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Card className="flex flex-col gap-3 h-full">
        <div className="flex justify-between items-start">
          <div className={clsx("p-2 rounded-lg", iconBg, iconColor)}>
            <FontAwesomeIcon icon={icon} className="text-base" />
          </div>
          {delta && (
            <span
              className={clsx(
                "font-label-sm text-label-sm px-2 py-1 rounded-full",
                deltaClasses[deltaTone]
              )}
            >
              {delta}
            </span>
          )}
        </div>
        <div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {label}
          </p>
          <h3 className="font-headline-lg text-headline-lg text-on-surface mt-1">
            {value}
          </h3>
        </div>
      </Card>
    </motion.div>
  );
}
