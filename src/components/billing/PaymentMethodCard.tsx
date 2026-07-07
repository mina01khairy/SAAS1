import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function PaymentMethodCard() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-headline-md text-headline-md text-on-surface">
          Payment Method
        </h3>
        <Button variant="ghost" size="sm">
          Edit
        </Button>
      </div>
      <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low mb-4">
        <div className="w-12 h-8 rounded-md bg-surface-container-lowest flex items-center justify-center shadow-sm">
          <FontAwesomeIcon icon={faCcVisa} className="text-xl text-[#1a1f71]" />
        </div>
        <div className="flex-1">
          <p className="font-label-md text-label-md text-on-surface">
            Visa ending in 4242
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Expires 08/28
          </p>
        </div>
      </div>
      <Button variant="outline" icon={faPlus} fullWidth>
        Add Payment Method
      </Button>
    </Card>
  );
}
