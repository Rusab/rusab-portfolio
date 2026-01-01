'use client';

import Navigation from '@/components/Navigation';
import Robotics from '@/components/Robotics';
import Footer from '@/components/Footer';

export default function RoboticsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navigation />
      <div className="pt-20 md:pt-24">
        <Robotics />
      </div>
      <Footer />
    </div>
  );
}
