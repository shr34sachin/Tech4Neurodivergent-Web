'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

interface AdContextType {
  showAds: boolean;
  toggleAds: () => void;
  setShowAds: (show: boolean) => void;
}

const AdContext = createContext<AdContextType>({
  showAds: false,
  toggleAds: () => {},
  setShowAds: () => {},
});

export function AdProvider({ children }: { children: React.ReactNode }) {
  const [showAds, setShowAdsState] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tech4nd_show_ads');
      if (saved !== null) {
        setShowAdsState(saved === 'true');
      } else {
        setShowAdsState(process.env.NEXT_PUBLIC_SHOW_ADS === 'true');
      }
    } catch {
      // Fallback
    }

    // Cross-tab synchronization
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'tech4nd_show_ads' && e.newValue !== null) {
        setShowAdsState(e.newValue === 'true');
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const setShowAds = useCallback((val: boolean) => {
    setShowAdsState(val);
    try {
      localStorage.setItem('tech4nd_show_ads', String(val));
      window.dispatchEvent(new Event('ads_toggle_change'));
    } catch {}
  }, []);

  const toggleAds = useCallback(() => {
    setShowAdsState((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('tech4nd_show_ads', String(next));
        window.dispatchEvent(new Event('ads_toggle_change'));
      } catch {}
      return next;
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as unknown as { __toggleAds: () => void }).__toggleAds = toggleAds;
    }
  }, [toggleAds]);

  return (
    <AdContext.Provider value={{ showAds, toggleAds, setShowAds }}>
      {children}
    </AdContext.Provider>
  );
}

export function useAds() {
  return useContext(AdContext);
}
