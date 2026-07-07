"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { TicketFilterBar } from "@/components/tickets/TicketFilterBar";
import { TicketRow } from "@/components/tickets/TicketRow";
import { NewTicketModal } from "@/components/tickets/NewTicketModal";
import { useTickets } from "@/context/TicketsContext";

export function TicketsListView() {
  const { tickets } = useTickets();
  const [activeStatus, setActiveStatus] = useState("All");
  const [search, setSearch] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("new") === "1") {
      setModalOpen(true);
      router.replace("/tickets");
    }
  }, [searchParams, router]);

  const filtered = useMemo(() => {
    return tickets.filter((t) => {
      const matchesStatus = activeStatus === "All" || t.status === activeStatus;
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        t.subject.toLowerCase().includes(q) ||
        t.customer.toLowerCase().includes(q) ||
        t.id.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesStatus && matchesSearch;
    });
  }, [tickets, activeStatus, search]);

  return (
    <div className="space-y-6">
      <TicketFilterBar
        activeStatus={activeStatus}
        onStatusChange={setActiveStatus}
        search={search}
        onSearchChange={setSearch}
        onNewTicket={() => setModalOpen(true)}
      />
      <div className="space-y-3">
        {filtered.length === 0 && (
          <div className="text-center py-16 text-on-surface-variant font-body-md text-body-md">
            No tickets match your filters.
          </div>
        )}
        {filtered.map((ticket) => (
          <TicketRow key={ticket.id} ticket={ticket} />
        ))}
      </div>
      <NewTicketModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
