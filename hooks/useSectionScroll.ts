'use client';

import { useEffect, useState } from 'react';

export function useSectionScroll() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    // Only enable on desktop
    if (window.innerWidth < 1024) return;

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

    // Initial section detection
    updateCurrentSection();

    // Update on scroll
    window.addEventListener('scroll', updateCurrentSection, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateCurrentSection);
    };
  }, []);

  return currentSection;
}
