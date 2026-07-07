"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "@/lib/clsx";
import { primaryNav, secondaryNav } from "@/lib/navigation";
import { Avatar } from "@/components/ui/Avatar";
import { useAuth } from "@/context/AuthContext";
import { useUI } from "@/context/UIContext";

function NavLink({
  href,
  label,
  icon,
  onNavigate,
}: {
  href: string;
  label: string;
  icon: typeof faBolt;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isActive =
    href === "/dashboard" ? pathname === href : pathname?.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={clsx(
        "flex items-center gap-4 px-4 py-3 rounded-lg font-label-md text-label-md transition-all duration-150",
        isActive
          ? "bg-secondary-container/50 text-on-secondary-container font-medium"
          : "text-on-surface-variant hover:bg-surface-container-high"
      )}
    >
      <FontAwesomeIcon icon={icon} className="w-4" />
      <span>{label}</span>
    </Link>
  );
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col h-full p-3 space-y-2">
      <Link href="/dashboard" className="px-3 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary">
          <FontAwesomeIcon icon={faBolt} />
        </div>
        <span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">
          SupportFlow AI
        </span>
      </Link>

      <div className="flex items-center p-3 mb-2 gap-3 bg-surface-container-high/50 rounded-2xl">
        <Avatar name={user?.name ?? "Guest User"} statusDot="online" />
        <div className="flex-1 min-w-0">
          <p className="font-label-md text-label-md text-on-surface truncate">
            {user?.name ?? "Guest User"}
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
            {user?.role ?? "Support Lead"}
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto hide-scrollbar">
        {primaryNav.map((item) => (
          <NavLink key={item.href} {...item} onNavigate={onNavigate} />
        ))}
        <div className="pt-4 mt-2 border-t border-outline-variant/30">
          <p className="px-4 mb-2 text-[10px] font-bold uppercase tracking-widest text-outline">
            Organization
          </p>
          {secondaryNav.map((item) => (
            <NavLink key={item.href} {...item} onNavigate={onNavigate} />
          ))}
        </div>
      </nav>

      <div className="pt-3 border-t border-outline-variant/30">
        <button
          onClick={logout}
          className="flex w-full items-center gap-4 px-4 py-3 text-error hover:bg-error-container/20 rounded-lg transition-all font-label-md text-label-md"
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="w-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export function DashboardSidebar() {
  const { isSidebarOpen, closeSidebar } = useUI();

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-70 z-40 bg-surface-container-low border-r border-outline-variant/20 flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSidebar}
              className="fixed inset-0 bg-on-background/30 backdrop-blur-sm z-[70] lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed left-0 top-0 h-full w-[280px] z-[80] bg-surface-container-low shadow-2xl flex flex-col lg:hidden"
            >
              <SidebarContent onNavigate={closeSidebar} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
