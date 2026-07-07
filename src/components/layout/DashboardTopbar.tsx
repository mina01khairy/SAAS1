"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faBell,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useUI } from "@/context/UIContext";
import { useNotifications } from "@/context/NotificationsContext";
import { Button } from "@/components/ui/Button";

export function DashboardTopbar({ title }: { title: string }) {
  const { toggleSidebar, toggleCommandPalette } = useUI();
  const { unreadCount } = useNotifications();

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-[280px] z-30 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center h-16 px-4 md:px-gutter max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 min-w-0">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors"
            aria-label="Open navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <h1 className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface truncate">
            {title}
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={toggleCommandPalette}
            className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/30 hover:ring-2 ring-primary/20 transition-all cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-on-surface-variant mr-2 text-sm"
            />
            <span className="text-on-surface-variant text-body-sm mr-8">
              Quick search...
            </span>
            <span className="text-label-sm px-2 py-0.5 bg-surface-container-highest rounded-md">
              &#8984;Kz
            </span>
          </button>
          <Link
            href="/notifications"
            className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors relative"
            aria-label="Notifications"
          >
            <FontAwesomeIcon icon={faBell} />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
            )}
          </Link>
          <Link href="/tickets?new=1" className="hidden md:block">
            <Button size="sm" icon={faPlus}>
              New Ticket
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
