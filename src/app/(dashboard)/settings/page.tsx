import { Metadata } from "next";
import { SettingsView } from "@/components/settings/SettingsView";

export const metadata: Metadata = { title: "Settings — SupportFlow AI" };

export default function SettingsPage() {
  return <SettingsView />;
}
  