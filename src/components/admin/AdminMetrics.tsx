import {
  faServer,
  faUserShield,
  faRobot,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { StatCard } from "@/components/ui/StatCard";

const metrics = [
  {
    icon: faServer,
    iconBg: "bg-primary-container/15",
    iconColor: "text-primary",
    label: "System Uptime",
    value: "99.98%",
    delta: "+0.02%",
    deltaTone: "positive" as const,
  },
  {
    icon: faUserShield,
    iconBg: "bg-secondary-container/30",
    iconColor: "text-secondary",
    label: "Active Agents",
    value: "18",
    delta: "+2",
    deltaTone: "positive" as const,
  },
  {
    icon: faRobot,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    label: "AI Model Accuracy",
    value: "94.6%",
    delta: "+1.4%",
    deltaTone: "positive" as const,
  },
  {
    icon: faBolt,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    label: "Active Deployments",
    value: "3",
    delta: "1 in progress",
    deltaTone: "neutral" as const,
  },
];

export function AdminMetrics() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m, i) => (
        <StatCard key={m.label} {...m} index={i} />
      ))}
    </div>
  );
}
