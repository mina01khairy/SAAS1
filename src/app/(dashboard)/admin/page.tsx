import { Metadata } from "next";
import { AdminView } from "@/components/admin/AdminView";

export const metadata: Metadata = { title: "Admin Console — SupportFlow AI" };

export default function AdminPage() {
  return <AdminView />;
}
