"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "@/lib/clsx";

export function AuthTabs() {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  return (
    <div className="grid grid-cols-2 p-1 bg-surface-container-high rounded-xl mb-8">
      <Link
        href="/login"
        className={clsx(
          "text-center py-2.5 rounded-lg font-label-md text-label-md transition-all",
          isLogin
            ? "bg-surface-container-lowest shadow-sm text-on-surface"
            : "text-on-surface-variant"
        )}
      >
        Log In
      </Link>
      <Link
        href="/register"
        className={clsx(
          "text-center py-2.5 rounded-lg font-label-md text-label-md transition-all",
          !isLogin
            ? "bg-surface-container-lowest shadow-sm text-on-surface"
            : "text-on-surface-variant"
        )}
      >
        Sign Up
      </Link>
    </div>
  );
}
