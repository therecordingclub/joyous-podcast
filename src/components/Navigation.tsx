"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const navLinks = [
  { href: "/episodes", label: "Episodes", labelCn: "节目" },
  { href: "/about", label: "About", labelCn: "关于" },
  { href: "/prime-lap", label: "Prime Lap", labelCn: "冲刺圈" },
  { href: "/connect", label: "Connect", labelCn: "联系" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "cn">("en");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-xl border-b shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
        style={
          isScrolled
            ? {
                backgroundColor: "var(--nav-bg)",
                borderColor: "var(--border-on-dark)",
              }
            : undefined
        }
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="relative group">
              <span
                className="font-serif text-2xl sm:text-[28px] font-bold tracking-[0.15em] transition-colors duration-300"
                style={{ color: "var(--nav-text)" }}
              >
                JOYOUS
              </span>
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 group"
                  style={{ color: "var(--nav-text-muted)" }}
                >
                  {lang === "en" ? link.label : link.labelCn}
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] transition-all duration-200 group-hover:w-5"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                </Link>
              ))}
            </div>

            {/* Right side: theme + language toggle + mobile menu */}
            <div className="flex items-center gap-2">
              {/* Theme switcher */}
              <ThemeSwitcher />

              {/* Language toggle */}
              <button
                onClick={() => setLang(lang === "en" ? "cn" : "en")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "var(--border-on-dark)",
                  color: "var(--nav-text-muted)",
                }}
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang === "en" ? "中文" : "EN"}</span>
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileOpen(true)}
                className="md:hidden w-10 h-10 flex items-center justify-center transition-colors"
                style={{ color: "var(--nav-text-muted)" }}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] border-l shadow-[-8px_0_32px_rgba(0,0,0,0.5)]"
              style={{
                backgroundColor: "var(--hero-bg)",
                borderColor: "var(--border-on-dark)",
              }}
            >
              <div className="flex flex-col h-full">
                {/* Close button */}
                <div className="flex items-center justify-between px-5 h-16">
                  <span
                    className="font-serif text-xl font-bold tracking-[0.15em]"
                    style={{ color: "var(--accent)" }}
                  >
                    JOYOUS
                  </span>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="w-10 h-10 flex items-center justify-center transition-colors"
                    style={{ color: "var(--nav-text-muted)" }}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Divider */}
                <div
                  className="mx-5 h-px"
                  style={{ backgroundColor: "var(--border-on-dark)" }}
                />

                {/* Nav links */}
                <div className="flex-1 px-5 py-6">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="block py-3.5 text-lg font-medium transition-colors"
                        style={{ color: "var(--nav-text-muted)" }}
                      >
                        {lang === "en" ? link.label : link.labelCn}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom section */}
                <div
                  className="px-5 py-6 border-t"
                  style={{ borderColor: "var(--border-on-dark)" }}
                >
                  <p
                    className="text-xs font-medium tracking-wide uppercase mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Health x Wealth
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {lang === "en"
                      ? "Where vitality meets venture."
                      : "活力与投资的交汇。"}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
