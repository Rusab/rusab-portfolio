'use client';

import Navigation from '@/components/Navigation';
import Publications from '@/components/Publications';
import Footer from '@/components/Footer';

export default function PublicationsPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Navigation />
            <div className="pt-20 md:pt-24">
                <Publications />
            </div>
            <Footer />
        </div>
    );
}
