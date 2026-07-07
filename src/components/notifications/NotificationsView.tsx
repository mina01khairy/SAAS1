"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble, faBell } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/Button";
import { NotificationItemRow } from "@/components/notifications/NotificationItemRow";
import { useNotifications } from "@/context/NotificationsContext";

export function NotificationsView() {
  const { notifications, unreadCount, markAllRead } = useNotifications();

  const today = notifications.filter((n) => n.group === "Today");
  const yesterday = notifications.filter((n) => n.group === "Yesterday");

  if (notifications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-6 text-outline">
          <FontAwesomeIcon icon={faBell} className="text-2xl" />
        </div>
        <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
          You&apos;re all caught up
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          No new notifications right now.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 w-full">
      <div className="flex items-center justify-between">
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          {unreadCount > 0
            ? `${unreadCount} unread notification${unreadCount === 1 ? "" : "s"}`
            : "All notifications read"}
        </p>
        <Button variant="ghost" size="sm" icon={faCheckDouble} onClick={markAllRead}>
          Mark all read
        </Button>
      </div>

      {today.length > 0 && (
        <div>
          <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-3">
            Today
          </h3>
          <div className="space-y-3">
            {today.map((item) => (
              <NotificationItemRow key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {yesterday.length > 0 && (
        <div>
          <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-3">
            Yesterday
          </h3>
          <div className="space-y-3">
            {yesterday.map((item) => (
              <NotificationItemRow key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
