'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore } from 'react';

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

function subscribeAds(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  window.addEventListener('ads_toggle_change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('ads_toggle_change', callback);
  };
}

function getAdsSnapshot(): boolean {
  if (typeof window === 'undefined') return false;
  const saved = localStorage.getItem('tech4nd_show_ads');
  if (saved !== null) {
    return saved === 'true';
  }
  return process.env.NEXT_PUBLIC_SHOW_ADS === 'true';
}

function getAdsServerSnapshot(): boolean {
  return false;
}

export function AdProvider({ children }: { children: React.ReactNode }) {
  const showAds = useSyncExternalStore(subscribeAds, getAdsSnapshot, getAdsServerSnapshot);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as unknown as { __toggleAds: () => void }).__toggleAds = () => {
        const next = !getAdsSnapshot();
        localStorage.setItem('tech4nd_show_ads', String(next));
        window.dispatchEvent(new Event('ads_toggle_change'));
        console.log(`[Tech4Neurodivergent] Ads toggled: ${next ? 'VISIBLE' : 'HIDDEN'}`);
      };
    }
  }, []);

  const setShowAds = (val: boolean) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tech4nd_show_ads', String(val));
      window.dispatchEvent(new Event('ads_toggle_change'));
    }
  };

  const toggleAds = () => {
    setShowAds(!showAds);
  };

  return (
    <AdContext.Provider value={{ showAds, toggleAds, setShowAds }}>
      {children}
    </AdContext.Provider>
  );
}

export function useAds() {
  return useContext(AdContext);
}
