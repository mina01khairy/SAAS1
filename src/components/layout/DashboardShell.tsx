"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardTopbar } from "./DashboardTopbar";
import { DashboardFooter } from "./DashboardFooter";
import { BottomNav } from "./BottomNav";
import { CommandPalette } from "./CommandPalette";

const titleMap: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/tickets": "Tickets",
  "/dashboard/knowledge-base": "Knowledge Base",
  "/dashboard/notifications": "Notifications",
  "/dashboard/settings": "Settings",
  "/dashboard/billing": "Billing",
  "/dashboard/admin": "Admin Console",
};

function resolveTitle(pathname: string) {
  if (titleMap[pathname]) return titleMap[pathname];
  if (pathname.startsWith("/dashboard/tickets/")) return "Ticket Details";
  return "Dashboard";
}

export function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const title = resolveTitle(pathname ?? "/dashboard");

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <div className="lg:pl-70 min-h-screen flex flex-col">
        <DashboardTopbar title={title} />
        <main className="flex-1 pt-24 pb-24 lg:pb-12 px-4 md:px-gutter max-w-360 w-full mx-auto">
          {children}
        </main>
        <DashboardFooter />
      </div>
      <BottomNav />
      <CommandPalette />
    </div>
  );
}
