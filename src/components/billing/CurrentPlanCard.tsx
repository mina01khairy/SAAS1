import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";

export function CurrentPlanCard() {
  return (
    <Card className="relative overflow-hidden">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Growth Plan
            </h3>
            <Badge tone="success" icon={faCircleCheck}>
              Active
            </Badge>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Renews on August 24, 2026 &middot; billed monthly
          </p>
        </div>
        <Button variant="outline">Change Plan</Button>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
              <FontAwesomeIcon icon={faUsers} />
              Seats used
            </span>
            <span className="font-label-sm text-label-sm text-on-surface">
              18 / 25
            </span>
          </div>
          <ProgressBar value={72} />
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              AI resolutions this month
            </span>
            <span className="font-label-sm text-label-sm text-on-surface">
              342 / 500
            </span>
          </div>
          <ProgressBar value={68} colorClass="bg-secondary" />
        </div>
      </div>
    </Card>
  );
}
