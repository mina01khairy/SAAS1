"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { ToggleSwitch } from "@/components/ui/ToggleSwitch";

const defaultPrefs = {
  ticketAssigned: true,
  mentions: true,
  weeklyDigest: true,
  productUpdates: false,
  smsAlerts: false,
};

export function NotificationPreferences() {
  const [prefs, setPrefs] = useState(defaultPrefs);

  function toggle(key: keyof typeof defaultPrefs) {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <Card>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-1">
        Notification Preferences
      </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
        Choose what you want to be notified about, and how.
      </p>
      <div className="divide-y divide-outline-variant/20">
        <ToggleSwitch
          checked={prefs.ticketAssigned}
          onChange={() => toggle("ticketAssigned")}
          label="Ticket assigned to me"
          description="Get notified when a ticket is routed to you"
        />
        <ToggleSwitch
          checked={prefs.mentions}
          onChange={() => toggle("mentions")}
          label="Mentions & internal notes"
          description="Someone tags you in a note or comment"
        />
        <ToggleSwitch
          checked={prefs.weeklyDigest}
          onChange={() => toggle("weeklyDigest")}
          label="Weekly performance digest"
          description="A summary of CSAT, SLA, and volume trends"
        />
        <ToggleSwitch
          checked={prefs.productUpdates}
          onChange={() => toggle("productUpdates")}
          label="Product updates"
          description="News about new SupportFlow AI features"
        />
        <ToggleSwitch
          checked={prefs.smsAlerts}
          onChange={() => toggle("smsAlerts")}
          label="SMS alerts for urgent tickets"
          description="Only for tickets marked Urgent priority"
        />
      </div>
    </Card>
  );
}
