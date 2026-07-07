"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPlay,
  faCircleCheck,
  faTicket,
  faRobot,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-gutter grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary-container/15 text-primary px-4 py-1.5 rounded-full font-label-sm text-label-sm mb-6"
          >
            <FontAwesomeIcon icon={faRobot} />
            Now with GPT-grade auto-resolution
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-geist text-headline-lg-mobile md:text-display-lg text-on-surface mb-6"
          >
            Customer support that resolves itself.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-4xl mx-auto lg:mx-0"
          >
            SupportFlow AI triages, routes, and resolves tickets before your
            agents ever see them — freeing your team to focus on the
            conversations that truly need a human touch.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Link href="/register" className="w-full sm:w-auto">
              <Button size="lg" icon={faArrowRight} iconPosition="right" fullWidth>
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" icon={faPlay}>
              Watch Demo
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 flex items-center gap-3 justify-center lg:justify-start"
          >
            <div className="flex space-x--2">
              {["Priya Nair", "Marcus Lee", "Elena Cruz", "Tom Waits"].map(
                (n) => (
                  <Avatar
                    key={n}
                    name={n}
                    size="sm"
                    className="ring-2 ring-surface"
                  />
                )
              )}
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Trusted by 2,400+ support teams worldwide
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-2xl shadow-primary/10 p-4 md:p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-error/60" />
              <span className="w-3 h-3 rounded-full bg-amber-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { icon: faTicket, label: "Open Tickets", value: "128" },
                { icon: faRobot, label: "Auto-Resolved", value: "84%" },
                { icon: faChartLine, label: "CSAT", value: "97" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-surface-container-low p-3"
                >
                  <FontAwesomeIcon icon={s.icon} className="text-primary mb-2" />
                  <p className="font-headline-md text-headline-md text-on-surface">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-on-surface-variant">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {[
                { name: "Jordan Smith", msg: "API timeout on production sync", tone: "Urgent" },
                { name: "Sarah Jenkins", msg: "Billing renewal question", tone: "Medium" },
                { name: "Richard Lee", msg: "Bulk export performance", tone: "High" },
              ].map((row) => (
                <div
                  key={row.name}
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors"
                >
                  <Avatar name={row.name} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-body-sm font-medium truncate">
                      {row.name}
                    </p>
                    <p className="text-[11px] text-on-surface-variant truncate">
                      {row.msg}
                    </p>
                  </div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-green-500 text-sm"
                  />
                </div>
              ))}
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 hidden md:flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/30 shadow-xl rounded-xl px-4 py-3"
          >
            <FontAwesomeIcon icon={faRobot} className="text-primary" />
            <span className="text-label-sm font-medium">
              AI resolved 12 tickets
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
