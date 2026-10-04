'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type FontSize = 'normal' | 'large' | 'xlarge';

export interface AccessibilitySettings {
  fontSize: FontSize;
  dyslexicFont: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  readingGuide: boolean;
}

interface AccessibilityContextType extends AccessibilitySettings {
  setFontSize: (size: FontSize) => void;
  setDyslexicFont: (val: boolean) => void;
  setHighContrast: (val: boolean) => void;
  setReducedMotion: (val: boolean) => void;
  setReadingGuide: (val: boolean) => void;
  toggleReadingGuide: () => void;
  resetAccessibility: () => void;
  isSpeaking: boolean;
  speakText: (text?: string, lang?: string) => void;
  stopSpeaking: () => void;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 'normal',
  dyslexicFont: false,
  highContrast: false,
  reducedMotion: false,
  readingGuide: false,
};

const AccessibilityContext = createContext<AccessibilityContextType>({
  ...defaultSettings,
  setFontSize: () => {},
  setDyslexicFont: () => {},
  setHighContrast: () => {},
  setReducedMotion: () => {},
  setReadingGuide: () => {},
  toggleReadingGuide: () => {},
  resetAccessibility: () => {},
  isSpeaking: false,
  speakText: () => {},
  stopSpeaking: () => {},
});

function applyAccessibilityToDOM(settings: AccessibilitySettings) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;

  root.setAttribute('data-font-size', settings.fontSize);
  root.setAttribute('data-dyslexic', String(settings.dyslexicFont));
  root.setAttribute('data-high-contrast', String(settings.highContrast));
  root.setAttribute('data-reduced-motion', String(settings.reducedMotion));
}

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Hydrate settings on client mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem('site_accessibility');
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<AccessibilitySettings>;
        const merged: AccessibilitySettings = {
          fontSize: parsed.fontSize === 'large' || parsed.fontSize === 'xlarge' ? parsed.fontSize : 'normal',
          dyslexicFont: Boolean(parsed.dyslexicFont),
          highContrast: Boolean(parsed.highContrast),
          reducedMotion: Boolean(parsed.reducedMotion),
          readingGuide: Boolean(parsed.readingGuide),
        };
        setSettings(merged);
        applyAccessibilityToDOM(merged);
      } else {
        // Detect system prefers-reduced-motion
        const systemReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (systemReducedMotion) {
          const init = { ...defaultSettings, reducedMotion: true };
          setSettings(init);
          applyAccessibilityToDOM(init);
        } else {
          applyAccessibilityToDOM(defaultSettings);
        }
      }
    } catch {
      applyAccessibilityToDOM(defaultSettings);
    }

    // Cross-tab sync
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'site_accessibility' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          setSettings(parsed);
          applyAccessibilityToDOM(parsed);
        } catch {}
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const saveSettings = useCallback((newSettings: AccessibilitySettings) => {
    setSettings(newSettings);
    applyAccessibilityToDOM(newSettings);
    try {
      localStorage.setItem('site_accessibility', JSON.stringify(newSettings));
    } catch {}
  }, []);

  const setFontSize = useCallback(
    (size: FontSize) => {
      saveSettings({ ...settings, fontSize: size });
    },
    [settings, saveSettings]
  );

  const setDyslexicFont = useCallback(
    (val: boolean) => {
      saveSettings({ ...settings, dyslexicFont: val });
    },
    [settings, saveSettings]
  );

  const setHighContrast = useCallback(
    (val: boolean) => {
      saveSettings({ ...settings, highContrast: val });
    },
    [settings, saveSettings]
  );

  const setReducedMotion = useCallback(
    (val: boolean) => {
      saveSettings({ ...settings, reducedMotion: val });
    },
    [settings, saveSettings]
  );

  const setReadingGuide = useCallback(
    (val: boolean) => {
      saveSettings({ ...settings, readingGuide: val });
    },
    [settings, saveSettings]
  );

  const toggleReadingGuide = useCallback(() => {
    saveSettings({ ...settings, readingGuide: !settings.readingGuide });
  }, [settings, saveSettings]);

  const resetAccessibility = useCallback(() => {
    saveSettings(defaultSettings);
  }, [saveSettings]);

  // Speech synthesis helper
  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  const speakText = useCallback(
    (textToRead?: string, langCode: string = 'en') => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

      if (isSpeaking) {
        stopSpeaking();
        return;
      }

      const text =
        textToRead ||
        document.querySelector('main')?.textContent ||
        document.body.innerText ||
        '';

      if (!text.trim()) return;

      window.speechSynthesis.cancel();

      // Clean extra spaces & truncate overly long single chunks for web speech stability
      const cleanText = text.replace(/\s+/g, ' ').slice(0, 1500);

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = langCode === 'ne' ? 'ne-NP' : 'en-US';
      utterance.rate = 0.95; // Calmer rate for neurodivergent auditory processing
      utterance.pitch = 1.0;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [isSpeaking, stopSpeaking]
  );

  // Stop speaking when user unloads or navigates away
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <AccessibilityContext.Provider
      value={{
        ...settings,
        setFontSize,
        setDyslexicFont,
        setHighContrast,
        setReducedMotion,
        setReadingGuide,
        toggleReadingGuide,
        resetAccessibility,
        isSpeaking,
        speakText,
        stopSpeaking,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}
