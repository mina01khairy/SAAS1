"use client";

import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCirclePlus,
  faRobot,
  faUsers,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useUI } from "@/context/UIContext";

const quickActions = [
  {
    icon: faCirclePlus,
    title: "Create New Ticket",
    subtitle: "Open the ticket creation wizard",
    hotkey: "N",
    href: "/tickets?new=1",
  },
  {
    icon: faRobot,
    title: "Train AI Model",
    subtitle: "Upload new datasets for fine-tuning",
    hotkey: "T",
    href: "/admin",
  },
  {
    icon: faUsers,
    title: "Manage Team",
    subtitle: "Invite agents and set permissions",
    hotkey: "M",
    href: "/settings",
  },
];

const recentSearches = [
  { label: "Last 24h performance report", href: "/dashboard" },
  { label: "Billing invoice June 2024", href: "/billing" },
];

export function CommandPalette() {
  const { isCommandPaletteOpen, closeCommandPalette } = useUI();
  const router = useRouter();

  function go(href: string) {
    closeCommandPalette();
    router.push(href);
  }

  return (
    <AnimatePresence>
      {isCommandPaletteOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCommandPalette}
            className="absolute inset-0 bg-on-surface/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="relative w-full max-w-6xl glass-panel rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
          >
            <div className="p-4 border-b border-outline-variant/30 flex items-center gap-3">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-primary" />
              <input
                autoFocus
                className="flex-1 bg-transparent border-none focus:ring-0 text-body-lg font-body-lg placeholder:text-on-surface-variant outline-none"
                placeholder="Type a command or search..."
              />
              <span className="text-label-sm px-2 py-1 bg-surface-container rounded-md text-on-surface-variant">
                ESC
              </span>
            </div>
            <div className="p-2 max-h-[400px] overflow-y-auto">
              <div className="px-3 py-2 text-label-sm text-on-surface-variant uppercase tracking-widest">
                Quick Actions
              </div>
              {quickActions.map((action) => (
                <button
                  key={action.title}
                  onClick={() => go(action.href)}
                  className="w-full flex items-center justify-between p-3 hover:bg-primary/10 rounded-xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center group-hover:bg-primary/20">
                      <FontAwesomeIcon
                        icon={action.icon}
                        className="text-on-surface-variant group-hover:text-primary"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-label-md text-label-md text-on-surface">
                        {action.title}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {action.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-label-sm text-on-surface-variant font-mono">
                    {action.hotkey}
                  </span>
                </button>
              ))}
              <div className="mt-4 px-3 py-2 text-label-sm text-on-surface-variant uppercase tracking-widest border-t border-outline-variant/30">
                Frequent Search
              </div>
              {recentSearches.map((item) => (
                <button
                  key={item.label}
                  onClick={() => go(item.href)}
                  className="w-full flex items-center gap-4 p-3 hover:bg-primary/10 rounded-xl transition-all"
                >
                  <FontAwesomeIcon
                    icon={faClockRotateLeft}
                    className="text-on-surface-variant"
                  />
                  <span className="font-body-md text-body-md">{item.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
