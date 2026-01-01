'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Publications from '@/components/Publications';
import ResearchInterests from '@/components/ResearchInterests';
import Robotics from '@/components/Robotics';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';
import { useSectionScroll } from '@/hooks/useSectionScroll';

export default function Home() {
  useSectionScroll();

  return (
    <div className="min-h-screen bg-[#050505] text-white relative">
      <MatrixRain />
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="publications">
        <Publications limit={3} />
      </div>
      <div id="research">
        <ResearchInterests />
      </div>
      <div id="robotics">
        <Robotics limit={3} />
      </div>
      <div id="achievements">
        <Achievements limit={3} />
      </div>
      <div id="contact">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
