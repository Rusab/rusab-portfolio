'use client';

import { useEffect, useState, useCallback } from 'react';

export function useSectionScroll() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    // Only enable on desktop
    if (window.innerWidth < 1024) return;

    let isScrolling = false;

    const sections = [
      'hero',
      'publications',
      'research',
      'robotics',
      'achievements',
      'contact'
    ];

    // Update current section based on actual scroll position
    const updateCurrentSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;

      if (Math.abs(delta) > 10) {
        e.preventDefault();
        isScrolling = true;

        let nextSection = currentSection;

        if (delta > 0 && currentSection < sections.length - 1) {
          // Scroll down
          nextSection = currentSection + 1;
        } else if (delta < 0 && currentSection > 0) {
          // Scroll up
          nextSection = currentSection - 1;
        }

        const targetElement = document.getElementById(sections[nextSection]);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setCurrentSection(nextSection);
        }

        setTimeout(() => {
          isScrolling = false;
        }, 3000);
      }
    };

    // Initial section detection
    updateCurrentSection();

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', updateCurrentSection, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', updateCurrentSection);
    };
  }, [currentSection]);

  return currentSection;
}
