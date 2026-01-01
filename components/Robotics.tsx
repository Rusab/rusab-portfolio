'use client';

import { motion } from 'framer-motion';
import { Bot, Cpu, Code, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface RoboticsProps {
  limit?: number;
}

export default function Robotics({ limit }: RoboticsProps) {
  const projects = [
  {
    title: "AVR-based Line Follower Robot",
    description: "Designed and built a custom PCB based line follower robot and programmed the ATmega32A directly in embedded C without using Arduino, implementing sensor calibration and PID based motor control for stable tracking.",
    icon: Bot,
    tech: ["ATmega32A", "Embedded C", "IR Sensors", "Custom PCB", "PID Control"],
    image: "/robotics/mcurobot.png" 
  },

  {
    title: "Arduino Maze Solving Robot",
    description: "Built an Arduino based autonomous maze solving robot using IR sensors and motor encoders, implementing real time decision making with a left hand rule and path optimization to reach the goal efficiently.",
    icon: Bot,
    tech: ["Arduino", "IR Sensors", "Maze Solving Algorithms"],
    image: "/robotics/mazerobot.png"
  },

  {
    title: "3-DOF Color Sorting Manipulator",
    description: "Designed and built a 3-DOF robotic arm for color based object sorting, using Arduino for real time motor control and Python based computer vision to detect and classify objects before pick and place execution.",
    icon: Bot,
    tech: ["Arduino", "Python", "Computer Vision"],
    image: "/robotics/manipulator.png"
  },

  ];

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="robotics" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            ROBOTICS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">PROJECTS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-mono">
            {'// AUTONOMOUS SYSTEMS & CONTROL'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="holographic-card rounded-xl p-6 group"
            >
              <div className="w-full h-48 mb-6 rounded border border-white/10 relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <project.icon className="absolute bottom-4 right-4 w-8 h-8 text-white/50 z-10" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2 py-1 text-xs font-mono bg-white/5 text-blue-300 border border-blue-500/30 rounded-sm">
                    {t}
                  </span>
                ))}
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
              href="/robotics"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-blue-500 text-blue-400 font-bold hover:bg-blue-500/10 transition-all font-mono tracking-wider"
            >
              VIEW ALL PROJECTS
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
