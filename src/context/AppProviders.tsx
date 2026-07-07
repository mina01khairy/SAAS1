"use client";

import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { TicketsProvider } from "./TicketsContext";
import { NotificationsProvider } from "./NotificationsContext";
import { UIProvider } from "./UIContext";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <TicketsProvider>
        <NotificationsProvider>
          <UIProvider>{children}</UIProvider>
        </NotificationsProvider>
      </TicketsProvider>
    </AuthProvider>
  );
}
