"use client";

import { useState } from "react";
import { ProfileHeader } from "@/components/settings/ProfileHeader";
import { SettingsTabs, SettingsTab } from "@/components/settings/SettingsTabs";
import { AccountDetailsForm } from "@/components/settings/AccountDetailsForm";
import { NotificationPreferences } from "@/components/settings/NotificationPreferences";
import { SecuritySettings } from "@/components/settings/SecuritySettings";

export function SettingsView() {
  const [tab, setTab] = useState<SettingsTab>("account");

  return (
    <div className="space-y-6 w-full">
      <ProfileHeader />
      <SettingsTabs active={tab} onChange={setTab} />
      {tab === "account" && <AccountDetailsForm />}
      {tab === "notifications" && <NotificationPreferences />}
      {tab === "security" && <SecuritySettings />}
    </div>
  );
}
