"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faCommentDots,
  faArrowsRotate,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "@/lib/clsx";
import { NotificationItem } from "@/lib/types";
import { useNotifications } from "@/context/NotificationsContext";

const iconMap = {
  "triangle-exclamation": faTriangleExclamation,
  "comment-dots": faCommentDots,
  "arrows-rotate": faArrowsRotate,
  "circle-check": faCircleCheck,
};

const variantStyles = {
  urgent: "bg-error-container/30 text-error",
  comment: "bg-secondary-container/30 text-secondary",
  update: "bg-primary-container/15 text-primary",
  muted: "bg-surface-container-high text-on-surface-variant",
};

export function NotificationItemRow({ item }: { item: NotificationItem }) {
  const { markRead } = useNotifications();

  return (
    <button
      onClick={() => markRead(item.id)}
      className={clsx(
        "w-full flex items-start gap-4 p-4 rounded-xl border transition-all text-left",
        item.read
          ? "border-outline-variant/20 bg-surface-container-lowest"
          : "border-primary/20 bg-primary-container/5 shadow-sm"
      )}
    >
      <div
        className={clsx(
          "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
          variantStyles[item.variant]
        )}
      >
        <FontAwesomeIcon icon={iconMap[item.icon as keyof typeof iconMap]} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <p className="font-label-md text-label-md text-on-surface">
            {item.title}
          </p>
          <span className="font-body-sm text-body-sm text-on-surface-variant shrink-0">
            {item.time}
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
          {item.body}
        </p>
      </div>
      {!item.read && (
        <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
      )}
    </button>
  );
}
