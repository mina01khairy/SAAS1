"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus, faFilter } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/Button";
import clsx from "@/lib/clsx";

const statusTabs = ["All", "Open", "In Progress", "Resolved", "Closed"] as const;

interface TicketFilterBarProps {
  activeStatus: string;
  onStatusChange: (status: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
  onNewTicket: () => void;
}

export function TicketFilterBar({
  activeStatus,
  onStatusChange,
  search,
  onSearchChange,
  onNewTicket,
}: TicketFilterBarProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
        
        </div>
        <div className="flex gap-2">
          <Button size="md" icon={faPlus} onClick={onNewTicket} fullWidth>
            New Ticket
          </Button>
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
        {statusTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onStatusChange(tab)}
            className={clsx(
              "px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all",
              activeStatus === tab
                ? "bg-on-surface text-surface"
                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
