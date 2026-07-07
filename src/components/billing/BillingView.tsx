import { CurrentPlanCard } from "@/components/billing/CurrentPlanCard";
import { PaymentMethodCard } from "@/components/billing/PaymentMethodCard";
import { InvoiceHistoryTable } from "@/components/billing/InvoiceHistoryTable";

export function BillingView() {
  return (
    <div className="space-y-6">
      <CurrentPlanCard />
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <InvoiceHistoryTable />
        </div>
        <PaymentMethodCard />
      </div>
    </div>
  );
}
