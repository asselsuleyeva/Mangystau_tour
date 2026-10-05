'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AIAssistant } from '@/components/AIAssistant';
import { 
  Compass, MapPin, Plane, Car, Fuel, Map, Users, Shield, 
  ArrowRight, CheckCircle2, ChevronRight, Bot
} from 'lucide-react';

export default function TravelGuidePage() {
  const [isAIOpen, setIsAIOpen] = useState(false);

  const routeExamples = [
    {
      title: 'SHORT ESCAPE',
      subtitle: 'Aktau → Karakiya Depression',
      duration: '1–3 hours',
      vehicle: 'Standard Car or SUV',
      description: 'An easy half-day road trip from Aktau to the lowest point in Kazakhstan (-132m below sea level) with dramatic cliff views across the land basin.',
      link: '/destinations/karakiya'
    },
    {
      title: '1 DAY ADVENTURE',
      subtitle: 'Aktau → Torysh → Sherkala → Ayrakty',
      duration: 'Full day (10–12 hours)',
      vehicle: 'SUV recommended',
      description: 'Explore spherical stone fields at Torysh, photograph Sphinx mountain at Sherkala, and hike along the Valley of Castles rock fortresses.',
      link: '/destinations/sherkala'
    },
    {
      title: 'SACRED JOURNEY',
      subtitle: 'Aktau → Shopan-Ata → Beket-Ata',
      duration: 'Full day or overnight',
      vehicle: 'Car to pilgrim house + walking',
      description: 'A deep spiritual and cultural pilgrimage visiting ancient rock-cut underground mosques in Oglandy canyon.',
      link: '/destinations/beket-ata'
    },
    {
      title: 'DESERT EXPEDITION',
      subtitle: 'Aktau → Tuzbair → Bozzhyra',
      duration: '2–3 days off-road',
      vehicle: 'High-Clearance 4x4 Off-Road Vehicle Required',
      description: 'The ultimate Mangystau journey into vast white salt flat mirrors at Tuzbair and monumental chalk towers at Bozzhyra.',
      link: '/destinations/bozzhyra'
    },
    {
      title: 'FULL MANGYSTAU LOOP',
      subtitle: '4–5 days combining major sites',
      duration: '4–5 days',
      vehicle: '4x4 Off-Road SUV with Driver',
      description: 'A comprehensive grand expedition combining Caspian coastline, underground mosques, spherical stone valleys, salt flats, and chalk canyons.',
      link: '/plan'
    }
  ];

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
              Aktau Gateway Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white uppercase tracking-tight">
              START YOUR JOURNEY FROM AKTAU
            </h1>
            <p className="text-sm sm:text-base text-[#C8BCAC] leading-relaxed">
              Aktau is the vibrant Caspian port city and official entry gateway to all Mangystau expeditions. Here is everything you need to know before departing into the desert.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 space-y-12">
        
        {/* Step-by-Step Preparation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-[#1A1412] border border-[#3A2D27] flex items-center justify-center text-[#E2A76F]">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white uppercase">1. Arriving in Aktau</h3>
            <p className="text-xs text-[#C8BCAC] leading-relaxed">
              Fly into Aktau International Airport (SCO) with direct flights from Astana, Almaty, Istanbul, Tbilisi, Baku, and Dubai. Taxis to the city center take ~25 minutes.
            </p>
          </div>

          <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-[#1A1412] border border-[#3A2D27] flex items-center justify-center text-[#E2A76F]">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white uppercase">2. Hiring 4x4 / Driver</h3>
            <p className="text-xs text-[#C8BCAC] leading-relaxed">
              For off-road routes (Bozzhyra, Tuzbair), hire a certified local 4x4 off-road driver in Aktau who knows Ustyurt Plateau tracks and carries recovery gear.
            </p>
          </div>

          <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-[#1A1412] border border-[#3A2D27] flex items-center justify-center text-[#E2A76F]">
              <Fuel className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white uppercase">3. Supplies & Fuel</h3>
            <p className="text-xs text-[#C8BCAC] leading-relaxed">
              Fill gas tanks completely in Aktau or Zhanaozen. Stock up on bottled drinking water (5L/person/day), snacks, and personal supplies before leaving the city.
            </p>
          </div>

          <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-[#1A1412] border border-[#3A2D27] flex items-center justify-center text-[#E2A76F]">
              <Map className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white uppercase">4. Navigation Prep</h3>
            <p className="text-xs text-[#C8BCAC] leading-relaxed">
              Download offline vector maps on Maps.me or Organic Maps. Mobile network coverage disappears quickly once off the paved highway.
            </p>
          </div>

        </div>

        {/* Route Examples Section */}
        <div className="bg-[#251D1A] rounded-2xl p-8 border border-[#3A2D27] space-y-8 shadow-xl">
          <div>
            <div className="text-xs font-semibold tracking-widest text-[#E2A76F] uppercase mb-1">
              Curated Routes
            </div>
            <h2 className="text-3xl font-serif font-bold text-white uppercase">
              RECOMMENDED EXPEDITION ROUTES FROM AKTAU
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routeExamples.map((route, idx) => (
              <div
                key={idx}
                className="bg-[#1A1412] p-6 rounded-xl border border-[#3A2D27] flex flex-col justify-between space-y-4 hover:border-[#E2A76F] transition-colors"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#251D1A] text-[#E2A76F] px-2.5 py-1 rounded border border-[#3A2D27]">
                    {route.title}
                  </span>

                  <h3 className="font-serif font-bold text-lg text-white uppercase mt-3">
                    {route.subtitle}
                  </h3>

                  <div className="flex items-center gap-3 text-[11px] text-[#A39585] mt-1 font-mono">
                    <span>⏱ {route.duration}</span>
                    <span>•</span>
                    <span className="text-[#E2A76F]">{route.vehicle}</span>
                  </div>

                  <p className="text-xs text-[#C8BCAC] leading-relaxed mt-3">
                    {route.description}
                  </p>
                </div>

                <Link
                  href={route.link}
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#251D1A] hover:bg-[#D98A48] border border-[#3A2D27] hover:border-[#D98A48] py-2.5 px-4 rounded-lg uppercase tracking-wider transition-all justify-center"
                >
                  <span>View Route Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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
