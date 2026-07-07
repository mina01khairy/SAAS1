import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faShieldHalved,
  faRobot,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

const highlights = [
  {
    icon: faRobot,
    title: "AI resolves 60%+ of tickets",
    description: "Without a single agent touching them.",
  },
  {
    icon: faChartLine,
    title: "Live performance dashboards",
    description: "CSAT, SLA, and agent load in one view.",
  },
  {
    icon: faShieldHalved,
    title: "SOC 2 Type II compliant",
    description: "Enterprise-grade security by default.",
  },
];

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-surface">
      <div className="relative hidden lg:flex flex-col justify-between bg-on-surface text-surface p-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 15%, #0061ff 0, transparent 45%), radial-gradient(circle at 85% 85%, #b4c5ff 0, transparent 45%)",
          }}
        />
        <Link href="/" className="relative flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <FontAwesomeIcon icon={faBolt} />
          </div>
          <span className="font-headline-md text-headline-md font-bold tracking-tight">
            SupportFlow AI
          </span>
        </Link>
        <div className="relative space-y-8">
          <h2 className="font-geist text-headline-lg max-w-4xl">
            The support platform your customers won&apos;t notice — because
            issues get solved before they escalate.
          </h2>
          <div className="space-y-5">
            {highlights.map((h) => (
              <div key={h.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={h.icon} />
                </div>
                <div>
                  <p className="font-label-md text-label-md">{h.title}</p>
                  <p className="text-body-sm text-surface/60">
                    {h.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="relative text-body-sm text-surface/50">
          &copy; {new Date().getFullYear()} SupportFlow AI. All rights reserved.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center px-6 py-12 md:px-12 relative">
        <Link href="/" className="lg:hidden absolute top-6 left-6 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <FontAwesomeIcon icon={faBolt} className="text-white text-sm" />
          </div>
          <span className="font-headline-md text-headline-md font-bold text-on-surface">
            SupportFlow AI
          </span>
        </Link>
        <div className="w-full max-w-4xl">{children}</div>
      </div>
    </div>
  );
}
