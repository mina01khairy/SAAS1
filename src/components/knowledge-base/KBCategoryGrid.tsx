import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faPlug,
  faCreditCard,
  faShieldHalved,
  faChartLine,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/Card";

const categories = [
  {
    icon: faRocket,
    title: "Getting Started",
    count: 12,
    tone: "bg-primary-container/15 text-primary",
  },
  {
    icon: faPlug,
    title: "API & Integrations",
    count: 24,
    tone: "bg-secondary-container/30 text-secondary",
  },
  {
    icon: faCreditCard,
    title: "Billing & Plans",
    count: 9,
    tone: "bg-amber-50 text-amber-600",
  },
  {
    icon: faShieldHalved,
    title: "Security & Privacy",
    count: 7,
    tone: "bg-green-50 text-green-700",
  },
  {
    icon: faChartLine,
    title: "Analytics & Reports",
    count: 15,
    tone: "bg-tertiary-container/20 text-tertiary",
  },
  {
    icon: faUsers,
    title: "Team Management",
    count: 11,
    tone: "bg-primary-container/15 text-primary",
  },
];

export function KBCategoryGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((cat) => (
        <Card
          key={cat.title}
          className="cursor-pointer hover:border-primary/40 hover:shadow-md transition-all"
        >
          <div
            className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${cat.tone}`}
          >
            <FontAwesomeIcon icon={cat.icon} />
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-1">
            {cat.title}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {cat.count} articles
          </p>
        </Card>
      ))}
    </div>
  );
}
