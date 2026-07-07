"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import clsx from "@/lib/clsx";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Enterprise", href: "#demo" },
];

export function PublicNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/30 transition-all duration-300",
        scrolled ? "bg-surface/95 shadow-sm py-1" : "bg-surface/80"
      )}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center h-16 px-4 md:px-gutter">
        <Link href="/" className="flex items-center gap-3 active:opacity-70 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <FontAwesomeIcon icon={faBolt} className="text-white text-sm" />
          </div>
          <h1 className="text-headline-md font-headline-md font-bold tracking-tight text-on-surface">
            SupportFlow AI
          </h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-4">
          <Link href="/login" className="font-label-md text-label-md text-on-surface-variant hover:text-primary px-4 py-2 transition-colors">
            Log In
          </Link>
          <Link href="/register">
            <Button size="md">Get Started</Button>
          </Link>
        </div>
        <button
          className="sm:hidden p-2 text-on-surface-variant"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} />
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sm:hidden overflow-hidden bg-surface border-t border-outline-variant/20"
          >
            <div className="flex flex-col p-4 gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-label-md text-label-md text-on-surface-variant py-2"
                >
                  {link.label}
                </a>
              ))}
              <Link href="/login" className="font-label-md text-label-md text-on-surface py-2">
                Log In
              </Link>
              <Link href="/register">
                <Button fullWidth>Get Started</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
