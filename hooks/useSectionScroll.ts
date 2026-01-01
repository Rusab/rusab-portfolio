'use client';

import { useEffect } from 'react';

export function useSectionScroll() {
  useEffect(() => {
    // Only enable on desktop
    if (window.innerWidth < 1024) return;

    let isScrolling = false;
    let currentSection = 0;

    const sections = [
      'hero',
      'publications',
      'research',
      'robotics',
      'achievements',
      'contact'
    ];

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;

      if (Math.abs(delta) > 10) {
        e.preventDefault();
        isScrolling = true;

        if (delta > 0 && currentSection < sections.length - 1) {
          // Scroll down
          currentSection++;
        } else if (delta < 0 && currentSection > 0) {
          // Scroll up
          currentSection--;
        }

        const targetElement = document.getElementById(sections[currentSection]);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
}
