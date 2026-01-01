'use client';

import { useEffect } from 'react';
import { Home, BookOpen, Cpu, Trophy, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Force dark mode for this theme initially
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Publications', href: '/publications', icon: BookOpen },
    { name: 'Research', href: '/#research', icon: Cpu },
    { name: 'Robotics', href: '/robotics', icon: Cpu },
    { name: 'Achievements', href: '/achievements', icon: Trophy },
    { name: 'Contact', href: '/#contact', icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      if (pathname === '/') {
        const element = document.querySelector(href.substring(1));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 md:py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-blue-900/20"
      >
        {navItems.map((item) => (
          <div key={item.name} className="relative group">
            <button
              onClick={() => handleNavClick(item.href)}
              className={`p-2 md:p-3 rounded-xl transition-all duration-300 ${(pathname === item.href || (item.href.startsWith('/#') && pathname === '/'))
                ? 'bg-blue-600/20 text-blue-400'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <item.icon className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 border border-white/10 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.name}
            </span>
          </div>
        ))}

        <div className="w-px h-6 md:h-8 bg-white/10 mx-1 md:mx-2" />

        <div className="relative group">
          <a
            href="/cv.pdf"
            download
            className="p-2 md:p-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            <FileText className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 border border-white/10 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            CV
          </span>
        </div>
      </motion.div>
    </div>
  );
}
