import { Metadata } from "next";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { TicketVolumeCard } from "@/components/dashboard/TicketVolumeCard";
import { ActivityFeedCard } from "@/components/dashboard/ActivityFeedCard";
import { AIInsightCard } from "@/components/dashboard/AIInsightCard";
import { TopAgentsCard } from "@/components/dashboard/TopAgentsCard";

export const metadata: Metadata = { title: "Overview — SupportFlow AI" };

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-6">
      <StatsGrid />
      <div className="grid lg:grid-cols-3 gap-6">
        <TicketVolumeCard />
        <ActivityFeedCard />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <AIInsightCard />
        <TopAgentsCard />
      </div>
    </div>
  );
}
