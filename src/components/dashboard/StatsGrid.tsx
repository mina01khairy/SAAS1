import {
  faTicket,
  faStopwatch,
  faFaceSmile,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { StatCard } from "@/components/ui/StatCard";

const stats = [
  {
    icon: faTicket,
    iconBg: "bg-primary-container/15",
    iconColor: "text-primary",
    label: "Open Tickets",
    value: "128",
    delta: "+12%",
    deltaTone: "negative" as const,
  },
  {
    icon: faStopwatch,
    iconBg: "bg-secondary-container/30",
    iconColor: "text-secondary",
    label: "Avg. Response Time",
    value: "2m 14s",
    delta: "-8%",
    deltaTone: "positive" as const,
  },
  {
    icon: faFaceSmile,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    label: "CSAT Score",
    value: "97.2%",
    delta: "+2.1%",
    deltaTone: "positive" as const,
  },
  {
    icon: faCircleCheck,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    label: "AI Resolution Rate",
    value: "84%",
    delta: "+5%",
    deltaTone: "positive" as const,
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <StatCard key={s.label} {...s} index={i} />
      ))}
    </div>
  );
}
