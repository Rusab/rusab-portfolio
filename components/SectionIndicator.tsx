'use client';

import { Home, BookOpen, Brain, Bot, Award, Mail } from 'lucide-react';

interface SectionIndicatorProps {
  currentSection: number;
}

export default function SectionIndicator({ currentSection }: SectionIndicatorProps) {
  const sections = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'publications', icon: BookOpen, label: 'Publications' },
    { id: 'research', icon: Brain, label: 'Research' },
    { id: 'robotics', icon: Bot, label: 'Robotics' },
    { id: 'achievements', icon: Award, label: 'Achievements' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(index)}
          className={`group relative p-3 rounded-lg transition-all duration-300 ${
            currentSection === index
              ? 'bg-blue-600 text-white scale-110'
              : 'bg-black/40 backdrop-blur-xl border border-white/10 text-gray-500 hover:text-blue-400 hover:border-blue-500/50'
          }`}
          title={section.label}
        >
          <section.icon className="w-5 h-5" />

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-black/90 backdrop-blur-xl border border-white/10 px-3 py-2 rounded-lg whitespace-nowrap">
              <span className="text-sm font-mono text-white">{section.label}</span>
            </div>
          </div>
        </button>
      ))}

      {/* Progress indicator */}
      <div className="mt-2 text-center">
        <span className="text-xs font-mono text-gray-500">
          {currentSection + 1}/{sections.length}
        </span>
      </div>
    </div>
  );
}
