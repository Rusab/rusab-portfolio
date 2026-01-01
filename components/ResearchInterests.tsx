'use client';

import { motion } from 'framer-motion';
import { Brain, Eye, Activity, Database, Network, Cpu } from 'lucide-react';

export default function ResearchInterests() {
  const interests = [
    {
      title: 'Medical Image Analysis',
      description: 'Developing advanced algorithms for automated diagnosis from MRI, CT, and X-ray imaging.',
      icon: Eye,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
    },
    {
      title: 'Deep Learning',
      description: 'Designing novel neural network architectures for complex pattern recognition tasks.',
      icon: Brain,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
    },
    {
      title: 'Healthcare AI',
      description: 'Creating predictive models for patient outcomes and disease progression monitoring.',
      icon: Activity,
      color: 'text-red-400',
      bg: 'bg-red-500/10',
    },
    {
      title: 'Computer Vision',
      description: 'Implementing state-of-the-art vision systems for object detection and segmentation.',
      icon: Database,
      color: 'text-green-400',
      bg: 'bg-green-500/10',
    },
    {
      title: 'Graph Neural Networks',
      description: 'Applying GNNs to model complex relationships in biological and medical data.',
      icon: Network,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
    },
    {
      title: 'Robotics',
      description: 'Exploring applications of AI in Robotics.',
      icon: Cpu,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
    },
  ];

  return (
    <section id="research" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            RESEARCH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">INTERESTS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-mono">
            {'// CORE COMPETENCIES'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="holographic-card p-8 rounded-xl group"
            >
              <div className={`w-14 h-14 rounded border border-white/10 ${interest.bg} flex items-center justify-center mb-6`}>
                <interest.icon className={`w-7 h-7 ${interest.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {interest.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technical Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white font-mono">
            TECHNICAL_STACK
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python',
              'SQL',
              'C',
              'MATLAB',
              'LATEX',
              'TensorFlow',
              'PyTorch',
              'Keras',
              'Scikit-learn',
              'NumPy',
              'Pandas',
              'AVR Microcontroller',
              'PCB Design',
              'SOLIDWORKS',
            ].map((keyword, index) => (
              <motion.span
                key={keyword}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-white/5 text-blue-300 rounded-sm text-sm font-mono border border-blue-500/30 hover:bg-blue-500/10 transition-colors cursor-default"
              >
                {keyword}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
