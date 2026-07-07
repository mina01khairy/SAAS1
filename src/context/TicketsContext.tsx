"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { Ticket, TicketMessage, TicketPriority, TicketStatus } from "@/lib/types";
import { tickets as seedTickets } from "@/lib/mockData";

interface NewTicketInput {
  subject: string;
  customer: string;
  priority: TicketPriority;
  category: string;
  description: string;
}

interface TicketsContextValue {
  tickets: Ticket[];
  getTicketById: (id: string) => Ticket | undefined;
  addTicket: (input: NewTicketInput) => Ticket;
  updateStatus: (id: string, status: TicketStatus) => void;
  updatePriority: (id: string, priority: TicketPriority) => void;
  assignTicket: (id: string, assignee: string) => void;
  addMessage: (id: string, message: Omit<TicketMessage, "id">) => void;
}

const TicketsContext = createContext<TicketsContextValue | undefined>(
  undefined
);

let ticketSeq = 5000;

export function TicketsProvider({ children }: { children: ReactNode }) {
  const [tickets, setTickets] = useState<Ticket[]>(seedTickets);

  const getTicketById = useCallback(
    (id: string) => tickets.find((t) => t.id === id),
    [tickets]
  );

  const addTicket = useCallback((input: NewTicketInput) => {
    const newTicket: Ticket = {
      id: `SF-${ticketSeq++}`,
      subject: input.subject,
      customer: input.customer,
      company: "New Customer",
      priority: input.priority,
      status: "Open",
      tag: input.category,
      tags: [input.category.toLowerCase()],
      createdAgo: "Just now",
      assignee: null,
      slaRemainingPct: 100,
      slaRemainingLabel: "4h 00m",
      region: "US-East-1",
      mrr: "$0.00",
      healthScore: "Good",
      plan: "Starter Plan",
      since: `${new Date().getFullYear()}`,
      messages: [
        {
          id: "m-1",
          author: input.customer,
          isAgent: false,
          timestamp: "Just now",
          body: input.description,
        },
      ],
    };
    setTickets((prev) => [newTicket, ...prev]);
    return newTicket;
  }, []);

  const updateStatus = useCallback((id: string, status: TicketStatus) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status } : t))
    );
  }, []);

  const updatePriority = useCallback(
    (id: string, priority: TicketPriority) => {
      setTickets((prev) =>
        prev.map((t) => (t.id === id ? { ...t, priority } : t))
      );
    },
    []
  );

  const assignTicket = useCallback((id: string, assignee: string) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, assignee } : t))
    );
  }, []);

  const addMessage = useCallback(
    (id: string, message: Omit<TicketMessage, "id">) => {
      setTickets((prev) =>
        prev.map((t) =>
          t.id === id
            ? {
                ...t,
                messages: [
                  ...t.messages,
                  { ...message, id: `m-${t.messages.length + 1}` },
                ],
              }
            : t
        )
      );
    },
    []
  );

  const value = useMemo<TicketsContextValue>(
    () => ({
      tickets,
      getTicketById,
      addTicket,
      updateStatus,
      updatePriority,
      assignTicket,
      addMessage,
    }),
    [tickets, getTicketById, addTicket, updateStatus, updatePriority, assignTicket, addMessage]
  );

  return (
    <TicketsContext.Provider value={value}>{children}</TicketsContext.Provider>
  );
}

export function useTickets() {
  const ctx = useContext(TicketsContext);
  if (!ctx) {
    throw new Error("useTickets must be used within a TicketsProvider");
  }
  return ctx;
}
