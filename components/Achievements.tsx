'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface AchievementsProps {
  limit?: number;
}

export default function Achievements({ limit }: AchievementsProps) {
  const achievements = [
    {
      title: "2nd Place - Poster Presentation Award",
      organization: "Qatar University Health Sector",
      date: "2024",
      description: "Awarded for research poster on a novel detection guided approach for multi-modal brain tumour segmentation on The 8th QU Health Research Symposium.",
      icon: Trophy,
      color: "text-yellow-500",
      image: "/achievements/8th qu health symposium.png" // Place your image in public/achievements/
    },
    {
      title: "Champion - AI Hackathon 2025",
      organization: "Creative IT, Keeron, and The Daily Star",
      date: "2025",
      description: "Became champion at the AI Hackathon 2024 organized by Creative IT, Keeron and The Daily Star showcasing paper ECG analysis application, PulseGuard.",
      icon: Trophy,
      color: "text-yellow-500",
      image: "/achievements/2025aihackathon.png" // Place your image in public/achievements/
    },
    {
      title: "Champion - National AI Art-a-thon 2025",
      organization: "UNDP Bangladesh, University of Cambridge and Microsoft",
      date: "2025",
      description: "Recognized as the champion at the National AI Art-a-thon 2025 jointly organized by UNDP Bangladesh, University of Cambridge and Microsoft, for creating an AI-generated art piece that creatively represents medical imaging concepts.",
      icon: Trophy,
      color: "text-yellow-500",
      image: "/achievements/2025Artathon.jpg" // Place your image in public/achievements/
    }
  ];

  const displayedAchievements = limit ? achievements.slice(0, limit) : achievements;

  return (
    <section id="achievements" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            HONORS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">AWARDS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-mono">
            {'// RECOGNITION LOG'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedAchievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="holographic-card rounded-xl overflow-hidden group"
            >
              {/* Image Section */}
              {item.image && (
                <div className="relative w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 border-b border-white/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className={`absolute top-4 right-4 p-3 rounded bg-black/50 backdrop-blur-sm border border-white/20 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
              )}

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex-1">
                    {item.title}
                  </h3>
                  <span className="ml-2 px-2 py-1 text-xs font-mono bg-white/5 text-gray-400 border border-white/10 rounded-sm shrink-0">
                    {item.date}
                  </span>
                </div>

                <div className="text-sm font-mono text-blue-400 mb-3">
                  {item.organization}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-blue-500 text-blue-400 font-bold hover:bg-blue-500/10 transition-all font-mono tracking-wider"
            >
              VIEW ALL RECORDS
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
