import { Metadata } from "next";
import { BillingView } from "@/components/billing/BillingView";

export const metadata: Metadata = { title: "Billing — SupportFlow AI" };

export default function BillingPage() {
  return <BillingView />;
}
