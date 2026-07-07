"use client";

import { Card } from "@/components/ui/Card";
import { LineChart } from "@/components/ui/LineChart";
import { ticketVolumeSeries } from "@/lib/mockData";

export function TicketVolumeCard() {
  return (
    <Card className="lg:col-span-2">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-headline-md text-headline-md text-on-surface">
            Ticket Volume Trends
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            New vs. resolved tickets, last 14 days
          </p>
        </div>
        <div className="flex gap-4 text-label-sm">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" /> New
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary" style={{ backgroundColor: "#8ab4ff" }} />
            Resolved
          </span>
        </div>
      </div>
      <LineChart
        labels={ticketVolumeSeries.labels}
        series={[
          { label: "New", data: ticketVolumeSeries.newTickets, color: "#004bca" },
          {
            label: "Resolved",
            data: ticketVolumeSeries.resolved,
            color: "#8ab4ff",
            dashed: true,
          },
        ]}
      />
    </Card>
  );
}
