import { ReactNode } from "react";
import { RequireAuth } from "@/components/auth/RequireAuth";
import { DashboardShell } from "@/components/layout/DashboardShell";

export default function DashboardGroupLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <RequireAuth>
      <DashboardShell>{children}</DashboardShell>
    </RequireAuth>
  );
}
