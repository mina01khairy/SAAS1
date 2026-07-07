import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { deployments } from "@/lib/mockData";

const statusTone = {
  Successful: "success" as const,
  "In Progress": "warning" as const,
  Failed: "danger" as const,
};

export function DeploymentsTable() {
  return (
    <Card padding="none">
      <div className="p-6 pb-4">
        <h3 className="font-headline-md text-headline-md text-on-surface">
          Recent Deployments
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Model and infrastructure changes across regions.
        </p>
      </div>
      <div className="divide-y divide-outline-variant/20 border-t border-outline-variant/20">
        {deployments.map((d) => (
          <div key={d.id} className="flex items-center gap-4 p-4">
            <Avatar name={d.name} size="sm" />
            <div className="flex-1 min-w-0">
              <p className="font-label-md text-label-md text-on-surface truncate">
                {d.name}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                {d.email}
              </p>
            </div>
            <span className="hidden sm:inline font-body-sm text-body-sm text-on-surface-variant">
              {d.region}
            </span>
            <Badge tone={statusTone[d.status]}>{d.status}</Badge>
            <span className="hidden md:inline font-body-sm text-body-sm text-on-surface-variant w-20 text-right">
              {d.date}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
