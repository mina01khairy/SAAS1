import { Metadata } from "next";
import { Suspense } from "react";
import { TicketsListView } from "@/components/tickets/TicketsListView";

export const metadata: Metadata = { title: "Tickets — SupportFlow AI" };

export default function TicketsPage() {
  return (
    <Suspense fallback={null}>
      <TicketsListView />
    </Suspense>
  );
}
