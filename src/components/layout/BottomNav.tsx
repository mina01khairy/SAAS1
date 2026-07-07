"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import clsx from "@/lib/clsx";
import { bottomNav } from "@/lib/navigation";

export function BottomNav() {
  const pathname = usePathname();
  const items = [
    bottomNav[0],
    bottomNav[1],
    bottomNav[2],
    bottomNav[3],
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full h-16 bg-surface/90 backdrop-blur-md flex justify-around items-center px-4 border-t border-outline-variant/20 z-50">
      {items.map((item) => {
        const isActive =
          item.href === "/dashboard"
            ? pathname === item.href
            : pathname?.startsWith(item.href);
        return (
          <Link
            key={item.label}
            href={item.href}
            className={clsx(
              "flex flex-col items-center justify-center gap-0.5 active:scale-90 transition-transform",
              isActive ? "text-primary" : "text-on-surface-variant"
            )}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span className="font-label-sm text-[10px]">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
