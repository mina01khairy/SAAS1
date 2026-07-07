"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faRoute,
  faChartPie,
  faBookOpen,
  faShieldHalved,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faRobot,
    title: "AI Auto-Resolution",
    description:
      "Let a fine-tuned model handle repetitive requests end-to-end, from password resets to billing questions — no agent required.",
  },
  {
    icon: faRoute,
    title: "Smart Routing",
    description:
      "Every ticket is scored for urgency and skill match, then routed to the right agent automatically, in milliseconds.",
  },
  {
    icon: faChartPie,
    title: "Real-Time Analytics",
    description:
      "Track CSAT, SLA compliance, and team performance with live dashboards built for support leaders.",
  },
  {
    icon: faBookOpen,
    title: "Living Knowledge Base",
    description:
      "Your help center updates itself from resolved tickets, keeping answers accurate without manual upkeep.",
  },
  {
    icon: faCommentDots,
    title: "Omnichannel Inbox",
    description:
      "Email, chat, and social messages land in a single unified queue so nothing slips through the cracks.",
  },
  {
    icon: faShieldHalved,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II compliant infrastructure with role-based access control and full audit trails.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="max-w-360 mx-auto px-4 md:px-gutter">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-geist text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
            Everything your team needs, nothing it doesn&apos;t
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Built by support leaders, for support leaders. Every feature is
            designed to reduce time-to-resolution.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 bg-surface-container-lowest hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-container/15 text-primary flex items-center justify-center mb-5">
                <FontAwesomeIcon icon={feature.icon} className="text-lg" />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                {feature.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
