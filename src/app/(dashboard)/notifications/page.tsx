import { Metadata } from "next";
import { NotificationsView } from "@/components/notifications/NotificationsView";

export const metadata: Metadata = { title: "Notifications — SupportFlow AI" };

export default function NotificationsPage() {
  return <NotificationsView />;
}
