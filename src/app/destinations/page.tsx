'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AIAssistant } from '@/components/AIAssistant';
import { useData } from '@/context/DataContext';
import { 
  Filter, RotateCcw, ArrowRight, ShieldAlert, Compass, 
  MapPin, Check, Sparkles, ChevronDown, Bot
} from 'lucide-react';

export default function DestinationsPage() {
  const { destinations } = useData();
  const [isAIOpen, setIsAIOpen] = useState(false);

  // Filter States
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedDuration, setSelectedDuration] = useState<string>('All');
  const [selectedSeason, setSelectedSeason] = useState<string>('All');
  const [selectedTravelStyle, setSelectedTravelStyle] = useState<string>('All');
  const [selectedAccess, setSelectedAccess] = useState<string>('All');

  // Filter options
  const filterOptions = {
    types: ['All', 'Nature', 'Historical', 'Sacred', 'Geological', 'Adventure', 'Photography', 'Cultural'],
    difficulties: ['All', 'Easy', 'Moderate', 'Challenging'],
    durations: ['All', '1–3 hours', 'Half day', 'Full day', 'Multi-day'],
    seasons: ['All', 'Spring', 'Summer', 'Autumn', 'Winter', 'All year'],
    travelStyles: ['All', 'Relaxation', 'Adventure', 'Family', 'Photography', 'Cultural', 'Expedition'],
    accessTypes: ['All', 'Easy road access', 'SUV recommended', '4x4 required', 'Walking required']
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedType('All');
    setSelectedDifficulty('All');
    setSelectedDuration('All');
    setSelectedSeason('All');
    setSelectedTravelStyle('All');
    setSelectedAccess('All');
  };

  // Dynamic filter logic
  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      if (selectedType !== 'All' && !dest.type.includes(selectedType as any)) return false;
      if (selectedDifficulty !== 'All' && dest.difficulty !== selectedDifficulty) return false;
      if (selectedDuration !== 'All' && dest.duration !== selectedDuration) return false;
      if (selectedSeason !== 'All' && !dest.seasons.includes(selectedSeason as any)) return false;
      if (selectedTravelStyle !== 'All' && !dest.travelStyles.includes(selectedTravelStyle as any)) return false;
      if (selectedAccess !== 'All' && dest.accessType !== selectedAccess) return false;
      return true;
    });
  }, [
    destinations,
    selectedType,
    selectedDifficulty,
    selectedDuration,
    selectedSeason,
    selectedTravelStyle,
    selectedAccess
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1412] text-[#EFEAE1]">
      
      {/* Navbar */}
      <Navbar onOpenAI={() => setIsAIOpen(true)} />

      {/* Header Banner */}
      <section className="relative py-16 bg-[#120E0D] border-b border-[#3A2D27] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#251D1A] border border-[#3A2D27] text-xs font-semibold text-[#E2A76F] uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              Complete Destination Directory
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white uppercase tracking-tight">
              EXPLORE MANGYSTAU DESTINATIONS
            </h1>
            <p className="text-base text-[#C8BCAC] leading-relaxed">
              Filter through iconic chalk canyons, sacred rock-cut mosques, spherical stone fields, and salt horizons. Combine multiple preferences to tailor your expedition.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Dynamic Filter Controls Bar */}
        <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] mb-10 shadow-xl space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#3A2D27] pb-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-[#E2A76F]" />
              <h2 className="font-serif font-bold text-lg text-white uppercase">Filter Destinations</h2>
              <span className="ml-2 bg-[#1A1412] border border-[#3A2D27] text-[#E2A76F] text-xs font-mono font-bold px-2.5 py-0.5 rounded-full">
                {filteredDestinations.length} results
              </span>
            </div>

            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#A39585] hover:text-[#E2A76F] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
          </div>

          {/* Filter Dropdown Selectors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 text-xs">
            
            {/* TYPE */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#A39585] mb-1.5">
                Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-[#1A1412] border border-[#3A2D27] text-[#EFEAE1] rounded-lg px-3 py-2 focus:outline-none focus:border-[#E2A76F]"
              >
                {filterOptions.types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* DIFFICULTY */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#A39585] mb-1.5">
                Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full bg-[#1A1412] border border-[#3A2D27] text-[#EFEAE1] rounded-lg px-3 py-2 focus:outline-none focus:border-[#E2A76F]"
              >
                {filterOptions.difficulties.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* DURATION */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#A39585] mb-1.5">
                Duration
              </label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full bg-[#1A1412] border border-[#3A2D27] text-[#EFEAE1] rounded-lg px-3 py-2 focus:outline-none focus:border-[#E2A76F]"
              >
                {filterOptions.durations.map((dur) => (
                  <option key={dur} value={dur}>{dur}</option>
                ))}
              </select>
            </div>

            {/* SEASON */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#A39585] mb-1.5">
                Season
              </label>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="w-full bg-[#1A1412] border border-[#3A2D27] text-[#EFEAE1] rounded-lg px-3 py-2 focus:outline-none focus:border-[#E2A76F]"
              >
                {filterOptions.seasons.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* TRAVEL STYLE */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#A39585] mb-1.5">
                Travel Style
              </label>
              <select
                value={selectedTravelStyle}
                onChange={(e) => setSelectedTravelStyle(e.target.value)}
                className="w-full bg-[#1A1412] border border-[#3A2D27] text-[#EFEAE1] rounded-lg px-3 py-2 focus:outline-none focus:border-[#E2A76F]"
              >
                {filterOptions.travelStyles.map((ts) => (
                  <option key={ts} value={ts}>{ts}</option>
                ))}
              </select>
            </div>

            {/* ACCESS */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#A39585] mb-1.5">
                Access Type
              </label>
              <select
                value={selectedAccess}
                onChange={(e) => setSelectedAccess(e.target.value)}
                className="w-full bg-[#1A1412] border border-[#3A2D27] text-[#EFEAE1] rounded-lg px-3 py-2 focus:outline-none focus:border-[#E2A76F]"
              >
                {filterOptions.accessTypes.map((acc) => (
                  <option key={acc} value={acc}>{acc}</option>
                ))}
              </select>
            </div>

          </div>

        </div>

        {/* Results Grid */}
        {filteredDestinations.length === 0 ? (
          <div className="bg-[#251D1A] rounded-2xl p-12 text-center border border-[#3A2D27] space-y-4">
            <ShieldAlert className="w-12 h-12 text-[#E2A76F] mx-auto" />
            <h3 className="font-serif font-bold text-xl text-white uppercase">No matching destinations found</h3>
            <p className="text-sm text-[#A39585] max-w-md mx-auto">
              Try adjusting or resetting your filter criteria to see available destinations.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 bg-[#D98A48] hover:bg-[#E2A76F] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-[#251D1A] rounded-2xl border border-[#3A2D27] overflow-hidden flex flex-col group hover:border-[#E2A76F] transition-all duration-300 shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={dest.heroImage}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#251D1A] via-transparent to-black/40" />
                  
                  {/* Access badge */}
                  <span className="absolute top-3 right-3 bg-[#1A1412]/90 backdrop-blur-md text-[#E2A76F] border border-[#3A2D27] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {dest.accessType}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-[#A39585] mb-1 font-mono">
                      <span>{dest.type.join(' • ')}</span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-white uppercase group-hover:text-[#E2A76F] transition-colors">
                      {dest.name}
                    </h3>

                    <p className="text-xs text-[#C8BCAC] leading-relaxed mt-2 line-clamp-3">
                      {dest.description}
                    </p>
                  </div>

                  {/* Table metadata */}
                  <div className="pt-3 border-t border-[#3A2D27] grid grid-cols-3 gap-2 text-[10px] text-[#A39585]">
                    <div>
                      <span className="block text-[8px] uppercase font-bold text-[#8A7A6A]">Difficulty</span>
                      <span className="font-semibold text-white">{dest.difficulty}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase font-bold text-[#8A7A6A]">Season</span>
                      <span className="font-semibold text-white">{dest.bestSeason}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase font-bold text-[#8A7A6A]">Duration</span>
                      <span className="font-semibold text-white">{dest.duration}</span>
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
        )}

      </section>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Modal */}
      <AIAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />

    </div>
  );
}
