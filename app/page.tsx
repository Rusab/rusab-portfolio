import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Publications from '@/components/Publications';
import ResearchInterests from '@/components/ResearchInterests';
import Robotics from '@/components/Robotics';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NeuralBackground from '@/components/NeuralBackground';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white relative">
      <NeuralBackground />
      <Navigation />
      <Hero />
      <Publications limit={3} />
      <ResearchInterests />
      <Robotics limit={3} />
      <Achievements limit={3} />
      <Contact />
      <Footer />
    </div>
  );
}
