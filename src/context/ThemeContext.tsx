'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
});

function applyThemeToDOM(theme: Theme) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
    root.setAttribute('data-theme', 'dark');
    root.style.colorScheme = 'dark';
  } else {
    root.classList.remove('dark');
    root.setAttribute('data-theme', 'light');
    root.style.colorScheme = 'light';
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');

  // Initial client hydration: detect saved theme or OS preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem('site_theme') as Theme | null;
      if (saved === 'dark' || saved === 'light') {
        setThemeState(saved);
        applyThemeToDOM(saved);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial = prefersDark ? 'dark' : 'light';
        setThemeState(initial);
        applyThemeToDOM(initial);
      }
    } catch {
      // Fallback in case of restricted localStorage
      applyThemeToDOM('light');
    }

    // Cross-tab synchronization
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'site_theme' && (e.newValue === 'dark' || e.newValue === 'light')) {
        setThemeState(e.newValue);
        applyThemeToDOM(e.newValue);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    applyThemeToDOM(t);
    try {
      localStorage.setItem('site_theme', t);
      window.dispatchEvent(new Event('theme_change'));
    } catch {
      // Ignore localStorage write error in private modes
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === 'light' ? 'dark' : 'light';
      applyThemeToDOM(next);
      try {
        localStorage.setItem('site_theme', next);
        window.dispatchEvent(new Event('theme_change'));
      } catch {
        // Ignore localStorage write error
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
