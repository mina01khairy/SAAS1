import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { leaderboard } from "@/lib/mockData";

export function TopAgentsCard() {
  return (
    <Card>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-6">
        Top Agents This Week
      </h3>
      <div className="space-y-5">
        {leaderboard.map((agent) => (
          <div key={agent.rank} className="flex items-center gap-3">
            <span className="font-label-sm text-label-sm text-outline w-5">
              {agent.rank}
            </span>
            <Avatar name={agent.name} size="sm" />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between mb-1">
                <p className="text-body-sm font-medium text-on-surface truncate">
                  {agent.name}
                </p>
                <p className="text-label-sm text-on-surface-variant">
                  {agent.score} resolved
                </p>
              </div>
              <ProgressBar value={agent.pct} height="h-1.5" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
