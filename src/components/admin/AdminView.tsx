import { AdminMetrics } from "@/components/admin/AdminMetrics";
import { DeploymentsTable } from "@/components/admin/DeploymentsTable";
import { AdminLeaderboard } from "@/components/admin/AdminLeaderboard";

export function AdminView() {
  return (
    <div className="space-y-6">
      <AdminMetrics />
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DeploymentsTable />
        </div>
        <AdminLeaderboard />
      </div>
    </div>
  );
}
