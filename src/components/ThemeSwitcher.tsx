"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { themes, themeIds, type ThemeId } from "@/lib/themes";

export default function ThemeSwitcher() {
  const { themeId, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const current = themes[themeId];

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-on-dark)] text-[var(--nav-text-muted)] hover:text-[var(--nav-text)] hover:border-[var(--accent)]/30 transition-all duration-200 text-xs font-medium"
        aria-label="Switch theme"
        aria-expanded={open}
      >
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0 ring-1 ring-white/20"
          style={{ backgroundColor: current.swatch }}
        />
        <Palette className="w-3.5 h-3.5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-[var(--border-on-dark-strong)] bg-[var(--hero-bg)] shadow-[0_12px_40px_rgba(0,0,0,0.35)] overflow-hidden z-50"
          >
            <div className="px-3 pt-3 pb-1.5">
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--nav-text-muted)]">
                Theme
              </p>
            </div>
            <div className="px-1.5 pb-1.5">
              {themeIds.map((id: ThemeId) => {
                const t = themes[id];
                const isActive = id === themeId;
                return (
                  <button
                    key={id}
                    onClick={() => {
                      setTheme(id);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-left transition-colors duration-150 ${
                      isActive
                        ? "bg-[var(--accent)]/15 text-[var(--nav-text)]"
                        : "text-[var(--nav-text-muted)] hover:bg-white/5 hover:text-[var(--nav-text)]"
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full shrink-0 ring-1 ring-white/20"
                      style={{ backgroundColor: t.swatch }}
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-medium leading-tight truncate">
                        {t.nameEn}
                      </p>
                      <p className="text-[10px] leading-tight opacity-50 truncate">
                        {t.description}
                      </p>
                    </div>
                    {isActive && (
                      <span className="ml-auto text-[var(--accent)] text-[10px] font-bold shrink-0">
                        &#10003;
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
