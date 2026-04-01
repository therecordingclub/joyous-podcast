"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { themes, defaultThemeId, type ThemeId, type Theme } from "@/lib/themes";

const STORAGE_KEY = "joyous-theme";

interface ThemeContextValue {
  themeId: ThemeId;
  theme: Theme;
  setTheme: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(id: ThemeId) {
  const theme = themes[id];
  if (!theme) return;
  const root = document.documentElement;
  for (const [prop, value] of Object.entries(theme.colors)) {
    root.style.setProperty(prop, value);
  }
  root.setAttribute("data-theme", id);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>(defaultThemeId);
  const [mounted, setMounted] = useState(false);

  // On mount, read from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
      if (stored && themes[stored]) {
        setThemeId(stored);
        applyTheme(stored);
      } else {
        applyTheme(defaultThemeId);
      }
    } catch {
      applyTheme(defaultThemeId);
    }
    setMounted(true);
  }, []);

  // Apply whenever theme changes
  useEffect(() => {
    if (!mounted) return;
    applyTheme(themeId);
    try {
      localStorage.setItem(STORAGE_KEY, themeId);
    } catch {
      // localStorage unavailable
    }
  }, [themeId, mounted]);

  const setTheme = useCallback((id: ThemeId) => {
    if (themes[id]) {
      setThemeId(id);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{ themeId, theme: themes[themeId], setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
