import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { invoices } from "@/lib/mockData";

export function InvoiceHistoryTable() {
  return (
    <Card padding="none">
      <div className="p-6 pb-0">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-1">
          Invoice History
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
          Download past invoices for your records.
        </p>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden divide-y divide-outline-variant/20 border-t border-outline-variant/20">
        {invoices.map((inv) => (
          <div key={inv.id} className="flex items-center justify-between p-4">
            <div>
              <p className="font-label-md text-label-md text-on-surface">{inv.id}</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {inv.date}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge tone="success">{inv.status}</Badge>
              <span className="font-label-md text-label-md text-on-surface">
                {inv.amount}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table */}
      <table className="w-full hidden sm:table">
        <thead>
          <tr className="border-t border-outline-variant/20 text-left">
            <th className="font-label-sm text-label-sm text-on-surface-variant font-medium px-6 py-3">
              Invoice
            </th>
            <th className="font-label-sm text-label-sm text-on-surface-variant font-medium px-6 py-3">
              Date
            </th>
            <th className="font-label-sm text-label-sm text-on-surface-variant font-medium px-6 py-3">
              Status
            </th>
            <th className="font-label-sm text-label-sm text-on-surface-variant font-medium px-6 py-3">
              Amount
            </th>
            <th className="px-6 py-3" />
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant/20">
          {invoices.map((inv) => (
            <tr key={inv.id} className="hover:bg-surface-container-low/50">
              <td className="px-6 py-4 font-label-md text-label-md text-on-surface">
                {inv.id}
              </td>
              <td className="px-6 py-4 font-body-sm text-body-sm text-on-surface-variant">
                {inv.date}
              </td>
              <td className="px-6 py-4">
                <Badge tone="success">{inv.status}</Badge>
              </td>
              <td className="px-6 py-4 font-label-md text-label-md text-on-surface">
                {inv.amount}
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  aria-label={`Download invoice ${inv.id}`}
                >
                  <FontAwesomeIcon icon={faDownload} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-6 sm:hidden" />
    </Card>
  );
}
