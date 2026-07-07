import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { leaderboard } from "@/lib/mockData";

const medalColors = ["text-amber-500", "text-slate-400", "text-amber-700"];

export function AdminLeaderboard() {
  return (
    <Card>
      <div className="flex items-center gap-2 mb-6">
        <FontAwesomeIcon icon={faTrophy} className="text-amber-500" />
        <h3 className="font-headline-md text-headline-md text-on-surface">
          Team Leaderboard
        </h3>
      </div>
      <div className="space-y-5">
        {leaderboard.map((agent, i) => (
          <div key={agent.rank} className="flex items-center gap-3">
            <span
              className={`font-bold text-lg w-6 ${medalColors[i] ?? "text-outline"}`}
            >
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
