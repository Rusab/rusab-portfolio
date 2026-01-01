'use client';

import Navigation from '@/components/Navigation';
import Achievements from '@/components/Achievements';
import Footer from '@/components/Footer';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navigation />
      <div className="pt-20 md:pt-24">
        <Achievements />
      </div>
      <Footer />
    </div>
  );
}
