"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TicketChatThread } from "@/components/tickets/TicketChatThread";
import { ReplyComposer } from "@/components/tickets/ReplyComposer";
import { TicketPropertiesCard } from "@/components/tickets/TicketPropertiesCard";
import { CustomerContextCard } from "@/components/tickets/CustomerContextCard";
import { TicketTagsCard } from "@/components/tickets/TicketTagsCard";
import { useTickets } from "@/context/TicketsContext";
import { Ticket } from "@/lib/types";

const priorityTone: Record<Ticket["priority"], "danger" | "warning" | "primary" | "neutral"> = {
  Urgent: "danger",
  High: "warning",
  Medium: "primary",
  Low: "neutral",
};

export function TicketDetailView({ ticketId }: { ticketId: string }) {
  const { getTicketById } = useTickets();
  const ticket = getTicketById(ticketId);

  if (!ticket) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-6 text-outline">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />
        </div>
        <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
          Ticket not found
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-sm">
          We couldn&apos;t find a ticket with ID {ticketId}. It may have been
          moved or the link is incorrect.
        </p>
        <Link href="/tickets">
          <Button variant="outline" icon={faArrowLeft}>
            Back to all tickets
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Link
        href="/tickets"
        className="inline-flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant hover:text-primary"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to tickets
      </Link>

      <div className="grid lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                  {ticket.id}
                </p>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  {ticket.subject}
                </h2>
              </div>
              <Badge tone={priorityTone[ticket.priority]} pill={false} className="rounded-md">
                {ticket.priority} Priority
              </Badge>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
              Opened {ticket.createdAgo} by {ticket.customer} &middot;{" "}
              {ticket.company}
            </p>
            <TicketChatThread messages={ticket.messages} />
            <ReplyComposer ticketId={ticket.id} />
          </Card>
        </div>

        <div className="space-y-4">
          <TicketPropertiesCard ticket={ticket} />
          <CustomerContextCard ticket={ticket} />
          <TicketTagsCard initialTags={ticket.tags} />
        </div>
      </div>
    </div>
  );
}
