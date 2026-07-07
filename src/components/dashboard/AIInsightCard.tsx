import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function AIInsightCard() {
  return (
    <div className="rounded-xl p-6 bg-on-surface text-surface relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 90% 10%, #0061ff 0, transparent 45%)",
        }}
      />
      <div className="relative">
        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
          <FontAwesomeIcon icon={faWandMagicSparkles} />
        </div>
        <h3 className="font-headline-md text-headline-md mb-2">
          AI Insight of the Day
        </h3>
        <p className="font-body-sm text-body-sm text-surface/70 mb-5">
          Tickets tagged &ldquo;API timeout&rdquo; spiked 34% this week,
          concentrated in the US-East-1 region. Consider a proactive status
          banner to reduce inbound volume.
        </p>
        <Link
          href="/tickets"
          className="inline-flex items-center gap-2 font-label-md text-label-md text-primary-fixed-dim hover:underline"
        >
          Review affected tickets
          <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
        </Link>
      </div>
    </div>
  );
}
