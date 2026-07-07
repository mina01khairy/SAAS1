import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faTriangleExclamation,
  faCircleCheck,
  faRotate,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/Card";
import { activityFeed } from "@/lib/mockData";

const iconMap = {
  "user-plus": faUserPlus,
  "triangle-exclamation": faTriangleExclamation,
  "circle-check": faCircleCheck,
  rotate: faRotate,
  "comment-dots": faCommentDots,
};

function renderBoldText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="font-medium text-on-surface">
          {part.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function ActivityFeedCard() {
  return (
    <Card>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-6">
        Recent Activity
      </h3>
      <div className="space-y-5">
        {activityFeed.map((item) => (
          <div key={item.id} className="flex gap-3">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${item.iconBg} ${item.iconColor}`}
            >
              <FontAwesomeIcon
                icon={iconMap[item.icon as keyof typeof iconMap]}
                className="text-xs"
              />
            </div>
            <div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                {renderBoldText(item.text)}
              </p>
              <p className="text-[11px] text-outline mt-0.5">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
