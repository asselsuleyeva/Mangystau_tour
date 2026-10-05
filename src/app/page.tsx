'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AIAssistant } from '@/components/AIAssistant';
import { useData } from '@/context/DataContext';
import { 
  Compass, MapPin, ArrowRight, ShieldCheck, Sun, Calendar, 
  Mountain, Sparkles, Navigation, Layers, ChevronRight, Play, Camera, ExternalLink, Bot
} from 'lucide-react';

export default function HomePage() {
  const { destinations, stories } = useData();
  const [isAIOpen, setIsAIOpen] = useState(false);

  const featuredDestinations = destinations.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1412] text-[#EFEAE1]">
      
      {/* Top Navbar */}
      <Navbar onOpenAI={() => setIsAIOpen(true)} />

      {/* ================================================== */}
      {/* 1. CINEMATIC HERO SECTION                          */}
      {/* ================================================== */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b border-[#3A2D27]">
        
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=2000"
            alt="Bozzhyra Chalk Fangs Mangystau"
            fill
            className="object-cover object-center scale-105 animate-pulse duration-[10000ms]"
            priority
          />
          {/* Multi-stage dark gradient for magazine aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-[#1A1412]/50 to-black/60" />
          <div className="absolute inset-0 bg-[#1A1412]/30 backdrop-contrast-125" />
        </div>

        {/* Floating dust particles visual hint */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#E2A76F_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#251D1A]/80 border border-[#E2A76F]/30 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-widest text-[#E2A76F] uppercase">
            <Sparkles className="w-4 h-4 text-[#E2A76F]" />
            Official International Tourism Portal
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-tight text-white uppercase leading-none drop-shadow-2xl">
            DISCOVER <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0C090] via-[#E2A76F] to-[#D98A48]">MANGYSTAU</span>
          </h1>

          <p className="text-lg sm:text-2xl font-sans text-[#E2D8CC] max-w-3xl mx-auto leading-relaxed drop-shadow-md font-light">
            Explore Kazakhstan’s wildest landscapes, ancient sacred sites and geological wonders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/destinations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D98A48] hover:bg-[#E2A76F] text-white font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 tracking-wider text-sm uppercase transform hover:-translate-y-0.5"
            >
              <Compass className="w-5 h-5" />
              EXPLORE DESTINATIONS
            </Link>

            <Link
              href="/plan"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#251D1A]/90 hover:bg-[#322622] text-[#EFEAE1] border border-[#3A2D27] hover:border-[#E2A76F] font-semibold px-8 py-4 rounded-xl transition-all duration-300 tracking-wider text-sm uppercase backdrop-blur-md"
            >
              <Navigation className="w-5 h-5 text-[#E2A76F]" />
              PLAN MY TRIP
            </Link>
          </div>

          {/* Quick Stats Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            {[
              { title: '10+ Iconic Destinations', desc: 'Chalk fangs, salt flats & canyons' },
              { title: '4x4 Off-Road Routes', desc: 'Remote wilderness expeditions' },
              { title: 'UNESCO Nominated', desc: 'Ancient rock mosques & heritage' },
              { title: 'Prehistoric Ocean Bed', desc: '60M years of geological history' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#1A1412]/80 border border-[#3A2D27] p-3 rounded-xl backdrop-blur-sm">
                <p className="text-sm font-bold text-[#E2A76F]">{stat.title}</p>
                <p className="text-xs text-[#A39585]">{stat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION: ONE REGION. THOUSANDS OF STORIES          */}
      {/* ================================================== */}
      <section className="py-20 bg-[#120E0D] border-b border-[#3A2D27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block border-l-2 border-[#E2A76F] pl-3 text-xs font-semibold tracking-widest text-[#E2A76F] uppercase">
                A Geological & Cultural Wonder
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight uppercase leading-tight">
                ONE REGION. <br />
                <span className="text-[#E2A76F]">THOUSANDS OF STORIES.</span>
              </h2>

              <p className="text-base text-[#C8BCAC] leading-relaxed">
                Situated in western Kazakhstan along the eastern shore of the Caspian Sea, Mangystau is an outdoor open-air museum. Once submerged beneath the ancient Tethys Ocean, this vast peninsula blends surreal white limestone chalk cliffs, vast salt flats, mysterious stone spheres, and subterranean sanctuaries.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-sm text-[#EFEAE1]">
                {[
                  'Ancient Geological Landscapes',
                  'Extreme 4x4 Desert Routes',
                  'Sacred Underground Mosques',
                  'Rich Archaeological Heritage',
                  'Authentic Nomadic Traditions',
                  'Caspian Sea Coastline',
                  'Unique Arid Wildlife',
                  'Remote Expedition Trails',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E2A76F]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setIsAIOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#251D1A] border border-[#3A2D27] hover:border-[#E2A76F] text-[#E2A76F] px-5 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <Bot className="w-4 h-4" />
                  Ask AI About Mangystau History
                </button>
              </div>
            </div>

            {/* Right Column: Visual Feature Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden border border-[#3A2D27] group">
                  <Image
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
                    alt="Tuzbair Salt Flat"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white uppercase tracking-wider">
                    Tuzbair Salt Mirrors
                  </span>
                </div>

                <div className="relative h-44 rounded-2xl overflow-hidden border border-[#3A2D27] group">
                  <Image
                    src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800"
                    alt="Beket-Ata Underground Mosque"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white uppercase tracking-wider">
                    Beket-Ata Sacred Site
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="relative h-44 rounded-2xl overflow-hidden border border-[#3A2D27] group">
                  <Image
                    src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800"
                    alt="Sherkala Mountain"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white uppercase tracking-wider">
                    Sherkala Mountain
                  </span>
                </div>

                <div className="relative h-64 rounded-2xl overflow-hidden border border-[#3A2D27] group">
                  <Image
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"
                    alt="Valley of Balls Torysh"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white uppercase tracking-wider">
                    Torysh Valley of Balls
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* FEATURED DESTINATIONS GRID                         */}
      {/* ================================================== */}
      <section className="py-20 bg-[#1A1412] border-b border-[#3A2D27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-xs font-semibold tracking-widest text-[#E2A76F] uppercase mb-2">
                Curated Expeditions
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white uppercase">
                ICONIC DESTINATIONS
              </h2>
            </div>
            <Link
              href="/destinations"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#E2A76F] hover:text-white transition-colors"
            >
              <span>VIEW ALL DESTINATIONS</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-[#251D1A] rounded-2xl border border-[#3A2D27] overflow-hidden flex flex-col group hover:border-[#E2A76F] transition-all duration-300 shadow-xl"
              >
                {/* Image Box */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={dest.heroImage}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#251D1A] via-transparent to-black/30" />
                  
                  {/* Access tag */}
                  <span className="absolute top-3 right-3 bg-[#1A1412]/80 backdrop-blur-md text-[#E2A76F] border border-[#3A2D27] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {dest.accessType}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#A39585] mb-2 font-mono">
                      <span>{dest.type.join(' / ')}</span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-white uppercase group-hover:text-[#E2A76F] transition-colors">
                      {dest.name}
                    </h3>

                    <p className="text-xs text-[#C8BCAC] leading-relaxed mt-2 line-clamp-3">
                      {dest.description}
                    </p>
                  </div>

                  {/* Metadata Chips */}
                  <div className="pt-3 border-t border-[#3A2D27] grid grid-cols-2 gap-2 text-[11px] text-[#A39585]">
                    <div>
                      <span className="block text-[9px] uppercase font-bold text-[#8A7A6A]">Difficulty</span>
                      <span className="font-semibold text-white">{dest.difficulty}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase font-bold text-[#8A7A6A]">Best Season</span>
                      <span className="font-semibold text-white">{dest.bestSeason}</span>
                    </div>
                  </div>

                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#1A1412] hover:bg-[#D98A48] text-white border border-[#3A2D27] hover:border-[#D98A48] py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300"
                  >
                    <span>Explore {dest.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* QUICK TRIP PLANNER CTA                             */}
      {/* ================================================== */}
      <section className="py-16 bg-[#251D1A] border-b border-[#3A2D27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2B211C] to-[#1A1412] rounded-3xl p-8 sm:p-12 border border-[#3A2D27] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            
            <div className="space-y-4 max-w-2xl relative z-10">
              <span className="bg-[#D98A48]/20 text-[#E2A76F] border border-[#D98A48]/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Smart Itinerary Generator
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white uppercase">
                PLAN YOUR PERFECT MANGYSTAU EXPEDITION
              </h2>

              <p className="text-sm text-[#C8BCAC] leading-relaxed">
                Specify your trip duration (1 to 5+ days), preferred difficulty level, travel style, and interests to generate a safe, route-optimized itinerary from Aktau.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/plan"
                className="inline-flex items-center gap-3 bg-[#D98A48] hover:bg-[#E2A76F] text-white font-bold px-8 py-4 rounded-xl shadow-xl transition-all uppercase tracking-wider text-sm transform hover:-translate-y-0.5"
              >
                <Navigation className="w-5 h-5" />
                CREATE ITINERARY NOW
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* STORIES FROM THE STEPPE                            */}
      {/* ================================================== */}
      <section className="py-20 bg-[#120E0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-xs font-semibold tracking-widest text-[#E2A76F] uppercase mb-2">
                Editorial Magazine
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white uppercase">
                STORIES FROM THE STEPPE
              </h2>
            </div>
            <Link
              href="/stories"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#E2A76F] hover:text-white transition-colors"
            >
              <span>READ ALL ARTICLES</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stories.map((story) => (
              <Link
                key={story.id}
                href={`/stories/${story.slug}`}
                className="bg-[#1A1412] rounded-2xl border border-[#3A2D27] overflow-hidden group hover:border-[#E2A76F] transition-all flex flex-col justify-between"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#251D1A]/90 text-[#E2A76F] px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-[#3A2D27]">
                    {story.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#E2A76F] transition-colors leading-snug">
                      {story.title}
                    </h3>
                    <p className="text-xs text-[#A39585] mt-2 line-clamp-3 leading-relaxed">
                      {story.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#2B211C] flex items-center justify-between text-[11px] text-[#8A7A6A]">
                    <span>{story.author}</span>
                    <span>{story.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating AI Guide Widget */}
      <button
        onClick={() => setIsAIOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-[#D98A48] to-[#B36024] text-white px-5 py-3.5 rounded-full font-bold shadow-2xl hover:shadow-amber-900/50 flex items-center gap-3 transition-all transform hover:scale-105 border border-amber-400/30"
      >
        <Bot className="w-5 h-5 text-amber-200 animate-bounce" />
        <span className="text-xs uppercase tracking-wider hidden sm:inline">Ask AI Travel Guide</span>
      </button>

      {/* AI Assistant Modal */}
      <AIAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />

    </div>
  );
}
