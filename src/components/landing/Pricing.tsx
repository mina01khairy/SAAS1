"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import clsx from "@/lib/clsx";

const plans = [
  {
    name: "Starter",
    price: "$29",
    cadence: "/agent/mo",
    description: "For small teams getting started with structured support.",
    features: [
      "Up to 5 agents",
      "Shared inbox & ticketing",
      "Basic knowledge base",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$79",
    cadence: "/agent/mo",
    description: "For scaling teams that need automation and insight.",
    features: [
      "Unlimited agents",
      "AI auto-resolution (500/mo)",
      "Advanced analytics",
      "SLA management",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For organizations with advanced security & scale needs.",
    features: [
      "Unlimited AI resolutions",
      "SSO & SCIM provisioning",
      "Dedicated success manager",
      "Custom SLAs & uptime guarantee",
      "Audit logs & data residency",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-surface-container-low/50">
      <div className="max-w-360 mx-auto px-4 md:px-gutter">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-geist text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
            Simple, transparent pricing
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Start free for 14 days. No credit card required.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={clsx(
                "rounded-2xl p-8 border relative",
                plan.highlighted
                  ? "bg-on-surface text-surface border-on-surface shadow-2xl md:scale-105"
                  : "bg-surface-container-lowest border-outline-variant/30"
              )}
            >
              {plan.highlighted && (
                <Badge tone="primary" className="absolute top-2 left-4 bg-primary text-white">
                  Most Popular
                </Badge>
              )}
              <h3
                className={clsx(
                  "font-headline-md text-headline-md mb-1",
                  plan.highlighted ? "text-surface" : "text-on-surface"
                )}
              >
                {plan.name}
              </h3>
              <p
                className={clsx(
                  "text-body-sm mb-6",
                  plan.highlighted ? "text-surface/70" : "text-on-surface-variant"
                )}
              >
                {plan.description}
              </p>
              <div className="flex items-end gap-1 mb-6">
                <span className="font-geist text-4xl font-bold">
                  {plan.price}
                </span>
                <span
                  className={clsx(
                    "text-body-sm mb-1",
                    plan.highlighted ? "text-surface/70" : "text-on-surface-variant"
                  )}
                >
                  {plan.cadence}
                </span>
              </div>
              <Link href="/register">
                <Button
                  fullWidth
                  variant={plan.highlighted ? "primary" : "outline"}
                  className={plan.highlighted ? "" : undefined}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </Link>
              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-body-sm">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={clsx(
                        "text-xs",
                        plan.highlighted ? "text-primary-fixed-dim" : "text-primary"
                      )}
                    />
                    <span className={plan.highlighted ? "text-surface/90" : "text-on-surface-variant"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
