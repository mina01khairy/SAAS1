"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { useAuth } from "@/context/AuthContext";

export function ProfileHeader() {
  const { user } = useAuth();

  return (
    <Card className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
      <div className="relative shrink-0">
        <Avatar name={user?.name ?? "Guest User"} size="xl" />
        <button
          className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md hover:opacity-90 transition-opacity"
          aria-label="Change photo"
        >
          <FontAwesomeIcon icon={faCamera} className="text-sm" />
        </button>
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1">
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface">
            {user?.name ?? "Guest User"}
          </h2>
          <Badge tone="success" className="mx-auto sm:mx-0 w-fit">
            Active
          </Badge>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">
          {user?.email ?? "you@company.com"} &middot; {user?.role ?? "Support Lead"}
        </p>
        <div className="flex justify-center sm:justify-start gap-8">
          <div>
            <p className="font-headline-md text-headline-md text-on-surface">312</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant normal-case">
              Tickets resolved
            </p>
          </div>
          <div>
            <p className="font-headline-md text-headline-md text-on-surface">97%</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant normal-case">
              CSAT score
            </p>
          </div>
          <div>
            <p className="font-headline-md text-headline-md text-on-surface">2.1y</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant normal-case">
              On the team
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
