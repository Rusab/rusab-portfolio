'use client';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2 tracking-tighter">
              RUSAB SARMUN
            </div>
            <p className="text-gray-500 text-sm font-mono">
              Machine Learning Researcher
            </p>
          </div>

          <div className="text-gray-600 text-sm text-center md:text-right font-mono">
            <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Rusab Sarmun. All rights reserved.</p>
            <p className="mt-1">System Status: <span className="text-green-500">ONLINE</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
