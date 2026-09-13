'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore } from 'react';

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

function subscribeTheme(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('theme_change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('theme_change', callback);
  };
}

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem('site_theme');
  if (saved === 'dark' || saved === 'light') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getThemeServerSnapshot(): Theme {
  return 'light';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  const setTheme = (t: Theme) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('site_theme', t);
      window.dispatchEvent(new Event('theme_change'));
    }
  };

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
