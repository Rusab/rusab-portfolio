'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, Users, ExternalLink, Quote, ArrowRight } from 'lucide-react';
import { publications } from '@/data/publications';
import Link from 'next/link';
import Image from 'next/image';

interface PublicationsProps {
  limit?: number;
}

export default function Publications({ limit }: PublicationsProps) {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('year'); // 'year' or 'citations'
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const years = useMemo(() => {
    const yearSet = new Set(publications.map(p => p.year));
    return ['All', ...Array.from(yearSet).sort((a, b) => b - a)];
  }, []);

  const filteredPublications = useMemo(() => {
    const filtered = publications.filter(pub => {
      const matchesFilter = filter === 'All' || pub.year.toString() === filter.toString();
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    });

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'citations') {
        return b.citations - a.citations;
      }
      return parseInt(b.year.toString()) - parseInt(a.year.toString());
    });

    return filtered;
  }, [filter, searchTerm, sortBy]);

  const displayedPublications = limit ? filteredPublications.slice(0, limit) : filteredPublications;

  // Stats for the overview (only calculate on full list)
  const totalCitations = publications.reduce((acc, curr) => acc + curr.citations, 0);
  const totalPublications = publications.length;
  const hIndex = publications
    .slice() // Create a shallow copy to avoid modifying the original array
    .sort((a, b) => b.citations - a.citations)
    .filter((p, i) => p.citations >= i + 1).length;

  return (
    <section id="publications" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            RESEARCH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">DATABASE</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-mono">
            {'// ACCESSING PUBLICATION RECORDS...'}
          </p>
        </motion.div>

        {!limit && (
          <>
            {/* Stats Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12"
            >
              <div className="holographic-card p-3 md:p-6 rounded-xl text-center">
                <div className="text-2xl md:text-4xl font-bold text-blue-400 mb-1 md:mb-2 font-mono">{totalPublications}</div>
                <div className="text-gray-400 text-[10px] md:text-sm tracking-wider md:tracking-widest uppercase">Publications</div>
              </div>
              <div className="holographic-card p-3 md:p-6 rounded-xl text-center">
                <div className="text-2xl md:text-4xl font-bold text-purple-400 mb-1 md:mb-2 font-mono">{totalCitations}</div>
                <div className="text-gray-400 text-[10px] md:text-sm tracking-wider md:tracking-widest uppercase">Citations</div>
              </div>
              <div className="holographic-card p-3 md:p-6 rounded-xl text-center">
                <div className="text-2xl md:text-4xl font-bold text-cyan-400 mb-1 md:mb-2 font-mono">{hIndex}</div>
                <div className="text-gray-400 text-[10px] md:text-sm tracking-wider md:tracking-widest uppercase">h-index</div>
              </div>
            </motion.div>

            {/* Filters and Search */}
            <div className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/5 rounded-xl p-6 mb-8 relative z-20">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => {
                        console.log('Clicked year:', year);
                        setFilter(year.toString());
                      }}
                      className={`px-4 py-2 rounded-none border text-sm font-mono transition-all whitespace-nowrap cursor-pointer ${filter === year.toString()
                        ? 'bg-blue-600/20 border-blue-500 text-blue-400'
                        : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30'
                        }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="relative flex-1 md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      placeholder="SEARCH_QUERY..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-black/50 border border-white/10 focus:border-blue-500 outline-none transition-all text-white font-mono text-sm"
                    />
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-black/50 border border-white/10 text-sm font-mono text-gray-400 outline-none focus:border-blue-500"
                  >
                    <option value="year">NEWEST</option>
                    <option value="citations">MOST CITED</option>
                  </select>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Publications List */}
        <div className="space-y-4">
            {displayedPublications.map((pub, index) => {
              const isExpanded = limit ? expandedIndex === index : true;
              return (
              <div
                key={pub.title}
                className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/5 shadow-lg transition-all duration-300 p-6 md:p-8 rounded-xl group relative z-10 hover:border-blue-500/50"
                style={{ boxShadow: '0 0 30px -10px rgba(59, 130, 246, 0.3)' }}
                onClick={() => limit && setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {pub.image && (
                    <div className="w-full md:w-48 h-32 shrink-0 overflow-hidden rounded border border-white/10 relative">
                      <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
                      <Image
                        src={pub.image}
                        alt={pub.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight font-sans">
                        {pub.title}
                      </h3>
                      <div className={`flex items-center gap-3 shrink-0 ${limit && !isExpanded ? 'md:flex' : 'flex'}`}>
                        {pub.quartile && (
                          <span className={`px-2 py-1 text-xs font-mono border ${pub.quartile === 'Q1'
                            ? 'bg-green-500/10 text-green-400 border-green-500/30'
                            : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                            }`}>
                            [{pub.quartile}]
                          </span>
                        )}
                        <span className="px-2 py-1 text-xs font-mono bg-white/5 text-gray-400 border border-white/10">
                          {pub.year}
                        </span>
                      </div>
                    </div>

                    {(isExpanded || !limit) && (
                      <>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-400 mb-4 font-mono">
                          <Users className="w-4 h-4 text-blue-500" />
                          {pub.authors.map((author, i) => (
                            <span key={i} className={author.includes('Sarmun') ? 'text-white' : ''}>
                              {author}{i < pub.authors.length - 1 ? ',' : ''}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-sm">
                          <div className="flex items-center gap-2 text-gray-300 font-medium">
                            <BookOpen className="w-4 h-4 text-purple-500" />
                            {pub.journal}
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Quote className="w-4 h-4 text-orange-500" />
                            {pub.citations} Citations
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {(isExpanded || !limit) && (
                    <div className="flex md:flex-col justify-end gap-3 shrink-0">
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded border border-white/10 text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all"
                        title="View Paper"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
              );
            })}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-12 text-gray-500 font-mono">
            {'// NO RECORDS FOUND'}
          </div>
        )}

        {limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-blue-500 text-blue-400 font-bold hover:bg-blue-500/10 transition-all font-mono tracking-wider"
            >
              ACCESS FULL DATABASE
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
