import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Ticket } from "@/lib/types";
import clsx from "@/lib/clsx";

const priorityTone: Record<Ticket["priority"], "danger" | "warning" | "primary" | "neutral"> = {
  Urgent: "danger",
  High: "warning",
  Medium: "primary",
  Low: "neutral",
};

const statusDot: Record<Ticket["status"], string> = {
  Open: "bg-primary",
  "In Progress": "bg-amber-500",
  Resolved: "bg-green-500",
  Closed: "bg-outline",
};

export function TicketRow({ ticket }: { ticket: Ticket }) {
  return (
    <Link
      href={`/tickets/${ticket.id}`}
      className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 rounded-xl border border-outline-variant/30 bg-surface-container-lowest hover:border-primary/40 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <span className={clsx("w-2 h-2 rounded-full shrink-0", statusDot[ticket.status])} />
        <div className="min-w-0">
          <p className="font-label-md text-label-md text-on-surface truncate">
            {ticket.subject}
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
            {ticket.id} &middot; {ticket.customer} &middot; {ticket.company}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 sm:shrink-0">
        <Badge tone={priorityTone[ticket.priority]} pill={false} className="rounded-md">
          {ticket.priority}
        </Badge>
        <span className="font-label-sm text-label-sm text-on-surface-variant hidden md:inline">
          {ticket.status}
        </span>
        <span className="font-body-sm text-body-sm text-on-surface-variant hidden lg:inline w-20">
          {ticket.createdAgo}
        </span>
        {ticket.assignee ? (
          <Avatar name={ticket.assignee} size="sm" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-outline">
            <FontAwesomeIcon icon={faCircleUser} />
          </div>
        )}
      </div>
    </Link>
  );
}
