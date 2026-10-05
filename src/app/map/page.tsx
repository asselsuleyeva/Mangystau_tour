'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AIAssistant } from '@/components/AIAssistant';
import { useData } from '@/context/DataContext';
import { MapPin, Compass, Navigation, ArrowRight, ShieldCheck, Info } from 'lucide-react';

// Dynamic import for Leaflet map component to prevent SSR window reference issues
const InteractiveMapWithNoSSR = dynamic(
  () => import('@/components/InteractiveMap').then((mod) => mod.InteractiveMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[650px] bg-[#251D1A] rounded-2xl border border-[#3A2D27] flex items-center justify-center text-[#A39585] text-sm animate-pulse">
        <span>Loading Interactive Mangystau Map...</span>
      </div>
    )
  }
);

export default function MapPage() {
  const { destinations } = useData();
  const [isAIOpen, setIsAIOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1412] text-[#EFEAE1]">
      
      {/* Navbar */}
      <Navbar onOpenAI={() => setIsAIOpen(true)} />

      {/* Header Banner */}
      <section className="py-12 bg-[#120E0D] border-b border-[#3A2D27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#251D1A] border border-[#3A2D27] text-xs font-semibold text-[#E2A76F] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              Geographic Exploration Portal
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white uppercase tracking-tight">
              INTERACTIVE MANGYSTAU MAP
            </h1>
            <p className="text-sm sm:text-base text-[#C8BCAC] leading-relaxed">
              Explore destination markers across the Ustyurt Plateau, Tupkaragan Peninsula, and Caspian coastline. Click any marker to view location cards and route details.
            </p>
          </div>
        </div>
      </section>

      {/* Main Map Container & Quick List */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 space-y-10">
        
        {/* Leaflet Map Component */}
        <InteractiveMapWithNoSSR destinations={destinations} />

        {/* Destination Quick Grid */}
        <div className="bg-[#251D1A] rounded-2xl p-8 border border-[#3A2D27] space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-[#3A2D27] pb-4">
            <div>
              <h2 className="font-serif font-bold text-xl text-white uppercase flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#E2A76F]" />
                Map Locations Overview
              </h2>
              <p className="text-xs text-[#A39585] mt-1">Coordinates and access requirements for major sites</p>
            </div>
            <span className="text-xs font-mono font-bold text-[#E2A76F] bg-[#1A1412] px-3 py-1 rounded-md border border-[#3A2D27]">
              {destinations.length + 1} Points of Interest
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {/* Gateway City */}
            <div className="bg-[#1A1412] p-4 rounded-xl border border-[#3B82F6]/40 flex items-start justify-between">
              <div>
                <span className="inline-block px-2 py-0.5 rounded bg-blue-900/50 text-blue-300 text-[9px] font-bold uppercase mb-1">
                  Gateway City
                </span>
                <h3 className="font-serif font-bold text-white text-base">Aktau City</h3>
                <p className="text-[11px] text-[#A39585] mt-1">International Airport (SCO), hotels & car rentals</p>
              </div>
              <span className="text-xl">🏙️</span>
            </div>

            {/* Destinations */}
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-[#1A1412] p-4 rounded-xl border border-[#3A2D27] flex flex-col justify-between space-y-3 hover:border-[#E2A76F] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] text-[#A39585] mb-1">
                    <span className="font-mono text-[#E2A76F]">{dest.accessType}</span>
                    <span>{dest.duration}</span>
                  </div>
                  <h3 className="font-serif font-bold text-white text-sm uppercase">{dest.name}</h3>
                  <p className="text-[11px] text-[#C8BCAC] line-clamp-2 mt-1">{dest.subtitle}</p>
                </div>

                <Link
                  href={`/destinations/${dest.slug}`}
                  className="inline-flex items-center gap-1.5 text-[#E2A76F] hover:underline text-[11px] font-bold uppercase tracking-wider pt-2 border-t border-[#251D1A]"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Modal */}
      <AIAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />

    </div>
  );
}
