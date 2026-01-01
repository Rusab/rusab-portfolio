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
import SectionIndicator from '@/components/SectionIndicator';
import { useSectionScroll } from '@/hooks/useSectionScroll';

export default function Home() {
  const currentSection = useSectionScroll();

  return (
    <div className="min-h-screen bg-[#050505] text-white relative">
      <MatrixRain />
      <Navigation />
      <SectionIndicator currentSection={currentSection} />
      <div id="hero" className="lg:min-h-screen lg:snap-start">
        <Hero />
      </div>
      <div id="publications" className="lg:min-h-screen lg:snap-start lg:flex lg:items-center lg:justify-center w-full">
        <Publications limit={3} />
      </div>
      <div id="research" className="lg:min-h-screen lg:snap-start lg:flex lg:items-center lg:justify-center w-full">
        <ResearchInterests />
      </div>
      <div id="robotics" className="lg:min-h-screen lg:snap-start lg:flex lg:items-center lg:justify-center w-full">
        <Robotics limit={3} />
      </div>
      <div id="achievements" className="lg:min-h-screen lg:snap-start lg:flex lg:items-center lg:justify-center w-full">
        <Achievements limit={3} />
      </div>
      <div id="contact" className="lg:min-h-screen lg:snap-start lg:flex lg:items-center lg:flex-col lg:justify-center w-full">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
