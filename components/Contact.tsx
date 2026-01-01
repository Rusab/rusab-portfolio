'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">TOUCH</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-mono">
            {'// COMMUNICATION CHANNEL'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/5 shadow-lg transition-all duration-300 p-8 rounded-xl hover:border-blue-500/50">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1 font-mono">EMAIL</div>
                    <a href="mailto:rusabsarmun@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                      rusabsarmun@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1 font-mono">LOCATION</div>
                    <div className="text-gray-400">
                      Dhaka, Bangladesh
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-blue-500/30 shadow-lg transition-all duration-300 p-8 rounded-xl bg-blue-900/10 hover:border-blue-500/50">
              <h3 className="text-xl font-bold mb-4 text-white">Open for Collaboration</h3>
              <p className="text-blue-200 mb-6 leading-relaxed text-sm">
                I am currently open to research collaborations and opportunities in medical AI, computer vision, and deep learning.
              </p>
              <a
                href="mailto:rusabsarmun@gmail.com"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-colors font-mono text-sm"
              >
                SEND_EMAIL
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/5 shadow-lg transition-all duration-300 p-8 rounded-xl space-y-6 hover:border-blue-500/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-blue-400">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded bg-black/50 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-blue-400">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded bg-black/50 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white placeholder-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-mono text-blue-400">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-black/50 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white placeholder-gray-600"
                  placeholder="Research Collaboration"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-blue-400">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded bg-black/50 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white placeholder-gray-600 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-4 rounded font-bold text-white transition-all flex items-center justify-center gap-2 font-mono ${submitted
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-blue-600 hover:bg-blue-700'
                  }`}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : submitted ? (
                  'MESSAGE SENT'
                ) : (
                  <>
                    TRANSMIT MESSAGE
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
