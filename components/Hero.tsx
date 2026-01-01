'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, GraduationCap, BookOpen, Download } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-20 md:pt-20 pb-24 md:pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-orange-500/10 blur-[100px] rounded-full opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="flex items-center gap-2 mb-4 md:mb-6 justify-center lg:justify-start">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-blue-400 font-mono text-xs md:text-sm tracking-wider">SYSTEM ONLINE</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-4 md:mb-6 leading-[0.9]">
              RUSAB
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-white">
                SARMUN
              </span>
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-gray-400 mb-4 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Machine Learning Researcher specializing in <span className="text-blue-400">Medical Imaging</span> and <span className="text-orange-400">Computer Vision</span>.
            </p>

            <div className="flex flex-nowrap gap-2 md:gap-4 mb-4 md:mb-12 justify-center lg:justify-start">
              <a
                href="#publications"
                className="group relative px-4 md:px-8 py-2 md:py-4 bg-blue-600 text-white font-bold rounded-none overflow-hidden text-xs md:text-base whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-1 md:gap-2">
                  VIEW RESEARCH <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </span>
              </a>

              <a
                href="#contact"
                className="group relative px-4 md:px-8 py-2 md:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-none overflow-hidden text-xs md:text-base whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-1 md:gap-2">
                  CONTACT ME <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </span>
              </a>
            </div>

            <div className="flex gap-4 md:gap-6 justify-center lg:justify-start">
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: GraduationCap, href: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en" },
                { icon: BookOpen, href: "https://www.researchgate.net/profile/Rusab-Sarmun" },
                { icon: Mail, href: "mailto:rusabsarmun@gmail.com" },
                { icon: Download, href: "/cv/Rusab_Sarmun_CV.pdf", download: true }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...(social.download ? { download: true } : {})}
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                >
                  <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Image / Hologram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-[200px] md:max-w-sm lg:max-w-md mx-auto">
              {/* Holographic Container */}
              <div className="absolute inset-0 border border-blue-500/30 rounded-lg overflow-hidden">
                {/* Scanline Animation */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-[20%] animate-scan z-20 pointer-events-none" />

                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src="/Rusab_Image.png"
                    alt="Rusab Sarmun"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Tech UI Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-500" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-blue-500" />
                <div className="absolute top-4 right-4 text-[10px] font-mono text-blue-400">ID: RS-001</div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-blue-500/20 blur-2xl -z-10 rounded-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
