"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Avatar } from "@/components/ui/Avatar";
import { Ticket, TicketPriority, TicketStatus } from "@/lib/types";
import { useTickets } from "@/context/TicketsContext";

const statusOptions: TicketStatus[] = [
  "Open",
  "In Progress",
  "Resolved",
  "Closed",
];
const priorityOptions: TicketPriority[] = ["Urgent", "High", "Medium", "Low"];

export function TicketPropertiesCard({ ticket }: { ticket: Ticket }) {
  const { updateStatus, updatePriority, assignTicket } = useTickets();

  return (
    <Card>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-5">
        Ticket Properties
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1.5">
            Status
          </label>
          <select
            value={ticket.status}
            onChange={(e) => updateStatus(ticket.id, e.target.value as TicketStatus)}
            className="w-full px-3 py-2.5 bg-surface-container-lowest border border-outline-variant/40 rounded-lg font-body-sm text-body-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
          >
            {statusOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1.5">
            Priority
          </label>
          <select
            value={ticket.priority}
            onChange={(e) =>
              updatePriority(ticket.id, e.target.value as TicketPriority)
            }
            className="w-full px-3 py-2.5 bg-surface-container-lowest border border-outline-variant/40 rounded-lg font-body-sm text-body-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
          >
            {priorityOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1.5">
            Assignee
          </label>
          {ticket.assignee ? (
            <div className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
              <Avatar name={ticket.assignee} size="xs" />
              <span className="font-body-sm text-body-sm text-on-surface">
                {ticket.assignee}
              </span>
            </div>
          ) : (
            <button
              onClick={() => assignTicket(ticket.id, "Alex Rivers")}
              className="w-full text-left p-2 rounded-lg bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high transition-colors"
            >
              + Assign to me
            </button>
          )}
        </div>
        <div className="pt-2 border-t border-outline-variant/30">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5">
              <FontAwesomeIcon icon={faClock} />
              SLA Remaining
            </span>
            <span className="font-label-sm text-label-sm text-on-surface">
              {ticket.slaRemainingLabel}
            </span>
          </div>
          <ProgressBar
            value={ticket.slaRemainingPct}
            colorClass={
              ticket.slaRemainingPct > 50
                ? "bg-green-500"
                : ticket.slaRemainingPct > 20
                ? "bg-amber-500"
                : "bg-error"
            }
          />
        </div>
      </div>
    </Card>
  );
}
