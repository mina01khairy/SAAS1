import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faLocationDot,
  faCircleDollarToSlot,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Ticket } from "@/lib/types";

const healthTone = {
  Excellent: "success" as const,
  Good: "primary" as const,
  "At Risk": "danger" as const,
};

export function CustomerContextCard({ ticket }: { ticket: Ticket }) {
  return (
    <Card>
      <div className="flex items-center gap-3 mb-5">
        <Avatar name={ticket.customer} size="lg" statusDot="online" />
        <div className="min-w-0">
          <p className="font-label-md text-label-md text-on-surface truncate">
            {ticket.customer}
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
            {ticket.plan}
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
            <FontAwesomeIcon icon={faBuilding} className="w-4 text-outline" />
            Company
          </span>
          <span className="font-label-sm text-label-sm text-on-surface">
            {ticket.company}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
            <FontAwesomeIcon icon={faLocationDot} className="w-4 text-outline" />
            Region
          </span>
          <span className="font-label-sm text-label-sm text-on-surface">
            {ticket.region}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
            <FontAwesomeIcon
              icon={faCircleDollarToSlot}
              className="w-4 text-outline"
            />
            MRR
          </span>
          <span className="font-label-sm text-label-sm text-on-surface">
            {ticket.mrr}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
            <FontAwesomeIcon icon={faHeartPulse} className="w-4 text-outline" />
            Health Score
          </span>
          <Badge tone={healthTone[ticket.healthScore]} pill={false} className="rounded-md">
            {ticket.healthScore}
          </Badge>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-outline-variant/30">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Customer since
          </span>
          <span className="font-label-sm text-label-sm text-on-surface">
            {ticket.since}
          </span>
        </div>
      </div>
    </Card>
  );
}
