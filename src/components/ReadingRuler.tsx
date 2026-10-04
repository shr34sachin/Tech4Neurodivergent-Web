'use client';

import React, { useEffect, useState } from 'react';
import { useAccessibility } from '@/context/AccessibilityContext';

export default function ReadingRuler() {
  const { readingGuide } = useAccessibility();
  const [mouseY, setMouseY] = useState<number>(200);

  useEffect(() => {
    if (!readingGuide) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMouseY(e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [readingGuide]);

  if (!readingGuide) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 right-0 z-50 transition-transform duration-75 ease-out"
      style={{
        top: `${mouseY - 20}px`,
        height: '42px',
        background: 'rgba(43, 87, 99, 0.08)',
        borderTop: '2px dashed rgba(43, 87, 99, 0.45)',
        borderBottom: '2px dashed rgba(43, 87, 99, 0.45)',
        boxShadow: '0 0 12px rgba(43, 87, 99, 0.15)',
      }}
    />
  );
}

