'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AIAssistant } from '@/components/AIAssistant';
import { useData } from '@/context/DataContext';
import { 
  Navigation, Calendar, Compass, ShieldAlert, CheckCircle, 
  Sparkles, ArrowRight, Clock, MapPin, Bot, RotateCcw
} from 'lucide-react';

interface GeneratedDay {
  dayNumber: number;
  title: string;
  route: string;
  stops: { name: string; type: string; notes: string; access: string }[];
  drivingInfo: string;
}

export default function PlanPage() {
  const { destinations } = useData();
  const [isAIOpen, setIsAIOpen] = useState(false);

  // Planner Preferences
  const [duration, setDuration] = useState<string>('3 days');
  const [style, setStyle] = useState<string>('Balanced');
  const [difficulty, setDifficulty] = useState<string>('Moderate');
  const [season, setSeason] = useState<string>('Spring');
  const [interests, setInterests] = useState<string[]>(['Nature', 'Geology', 'Photography']);

  const [generatedItinerary, setGeneratedItinerary] = useState<GeneratedDay[] | null>(null);

  const toggleInterest = (item: string) => {
    if (interests.includes(item)) {
      setInterests(interests.filter((i) => i !== item));
    } else {
      setInterests([...interests, item]);
    }
  };

  const handleGenerateItinerary = () => {
    const it: GeneratedDay[] = [];

    if (duration === '1 day') {
      it.push({
        dayNumber: 1,
        title: 'Northern Wonders Express',
        route: 'Aktau → Karakiya Depression → Torysh → Sherkala → Aktau',
        stops: [
          { name: 'Karakiya Depression', type: 'Geological', notes: 'Viewpoint drop-off at -132m below sea level.', access: 'Easy road access' },
          { name: 'Valley of Balls (Torysh)', type: 'Geological', notes: 'Walk among hundreds of spherical stone concretions.', access: 'SUV recommended' },
          { name: 'Sherkala Mountain', type: 'Historical', notes: 'Photograph the Sphinx Mountain from multiple angles.', access: 'SUV recommended' }
        ],
        drivingInfo: 'Total driving: approx. 320 km (paved highway + short gravel tracks).'
      });
    } else if (duration === '2 days') {
      it.push(
        {
          dayNumber: 1,
          title: 'Northern Canyons & Castles',
          route: 'Aktau → Torysh → Sherkala → Ayrakty Mountains',
          stops: [
            { name: 'Valley of Balls (Torysh)', type: 'Geological', notes: 'Explore spherical stone field in morning light.', access: 'SUV recommended' },
            { name: 'Sherkala Mountain', type: 'Historical', notes: 'Lunch near Kyzylkala spring oasis.', access: 'SUV recommended' },
            { name: 'Ayrakty Castle Mountains', type: 'Nature', notes: 'Sunset walk along Valley of Castles ridge.', access: 'SUV recommended' }
          ],
          drivingInfo: 'Approx. 200 km. Overnight glamping or local guesthouse near Shetpe.'
        },
        {
          dayNumber: 2,
          title: 'Sacred Necropolis & Salt Horizon',
          route: 'Ayrakty → Shopan-Ata → Tuzbair Salt Flat → Aktau',
          stops: [
            { name: 'Shopan-Ata Underground Mosque', type: 'Sacred', notes: 'Ancient rock-cut mosque and necropolis.', access: 'Easy road access' },
            { name: 'Tuzbair Salt Flat', type: 'Photography', notes: 'Walk along vast white salt crust and limestone arches.', access: '4x4 required' }
          ],
          drivingInfo: 'Approx. 350 km return to Aktau.'
        }
      );
    } else if (duration === '3 days') {
      it.push(
        {
          dayNumber: 1,
          title: 'Lower Basin & Northern Fortress Rocks',
          route: 'Aktau → Karakiya → Torysh → Sherkala → Ayrakty',
          stops: [
            { name: 'Karakiya Depression', type: 'Geological', notes: 'Lowest point in Kazakhstan (-132m).', access: 'Easy road access' },
            { name: 'Torysh Valley of Balls', type: 'Geological', notes: 'Spherical stone field walk.', access: 'SUV recommended' },
            { name: 'Sherkala & Ayrakty', type: 'Nature', notes: 'Panorama hike around Valley of Castles.', access: 'SUV recommended' }
          ],
          drivingInfo: 'Approx. 240 km. Overnight in Shetpe.'
        },
        {
          dayNumber: 2,
          title: 'Sacred Sufi Pilgrimage Sanctuary',
          route: 'Shetpe → Shopan-Ata → Beket-Ata',
          stops: [
            { name: 'Shopan-Ata Necropolis', type: 'Sacred', notes: 'Historical Sufi sanctuary on Silk Road.', access: 'Easy road access' },
            { name: 'Beket-Ata Underground Mosque', type: 'Sacred', notes: 'Descent via stone staircase to rock-cut chambers in Oglandy canyon.', access: 'Walking required / Paved road access' }
          ],
          drivingInfo: 'Approx. 220 km. Stay overnight at Beket-Ata pilgrim house or desert camp.'
        },
        {
          dayNumber: 3,
          title: 'Monumental Bozzhyra Chalk Fangs',
          route: 'Beket-Ata → Bozzhyra Canyon → Tuzbair → Aktau',
          stops: [
            { name: 'Bozzhyra Canyon', type: 'Nature', notes: 'Sunrise at iconic Bozzhyra Fangs viewpoint & white amphitheaters.', access: '4x4 required' },
            { name: 'Tuzbair Salt Flat', type: 'Geological', notes: 'White salt horizon and limestone arch cliffs.', access: '4x4 required' }
          ],
          drivingInfo: 'Approx. 380 km off-road & highway drive back to Aktau.'
        }
      );
    } else {
      // 4 or 5+ days
      it.push(
        {
          dayNumber: 1,
          title: 'Caspian Coast & Shakpak-Ata Rock Mosque',
          route: 'Aktau → Shakpak-Ata → Kapan Canyon',
          stops: [
            { name: 'Shakpak-Ata Underground Mosque', type: 'Sacred', notes: 'Cruciform rock mosque with ancient petroglyphs and honeycomb cliffs.', access: 'SUV recommended' }
          ],
          drivingInfo: '150 km.'
        },
        {
          dayNumber: 2,
          title: 'Valley of Balls & Castle Mountains',
          route: 'Shakpak-Ata → Torysh → Sherkala → Ayrakty',
          stops: [
            { name: 'Torysh & Sherkala', type: 'Nature', notes: 'Exploring spherical stone fields & Sphinx mountain.', access: 'SUV recommended' }
          ],
          drivingInfo: '180 km.'
        },
        {
          dayNumber: 3,
          title: 'Sacred Pilgrimage to Beket-Ata',
          route: 'Ayrakty → Shopan-Ata → Beket-Ata',
          stops: [
            { name: 'Beket-Ata Sanctuary', type: 'Sacred', notes: 'Underground prayer chambers in Oglandy canyon.', access: 'Walking required' }
          ],
          drivingInfo: '220 km.'
        },
        {
          dayNumber: 4,
          title: 'Monumental Bozzhyra Expedition',
          route: 'Beket-Ata → Bozzhyra Canyon Viewpoints',
          stops: [
            { name: 'Bozzhyra Fangs & Canyons', type: 'Nature', notes: 'Full day exploring upper plateau and lower canyon trails.', access: '4x4 required' }
          ],
          drivingInfo: '120 km desert tracks.'
        },
        {
          dayNumber: 5,
          title: 'Tuzbair Salt Flat & Return to Aktau',
          route: 'Bozzhyra → Tuzbair Salt Flat → Karakiya → Aktau',
          stops: [
            { name: 'Tuzbair Salt Flat', type: 'Photography', notes: 'White salt crust reflection photography.', access: '4x4 required' },
            { name: 'Karakiya Depression', type: 'Geological', notes: 'Final overlook at -132m below sea level.', access: 'Easy road access' }
          ],
          drivingInfo: '320 km back to Aktau.'
        }
      );
    }

    setGeneratedItinerary(it);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1412] text-[#EFEAE1]">
      
      {/* Navbar */}
      <Navbar onOpenAI={() => setIsAIOpen(true)} />

      {/* Banner */}
      <section className="py-12 bg-[#120E0D] border-b border-[#3A2D27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#251D1A] border border-[#3A2D27] text-xs font-semibold text-[#E2A76F] uppercase tracking-wider">
              <Navigation className="w-3.5 h-3.5" />
              Custom Itinerary Builder
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white uppercase tracking-tight">
              PLAN YOUR MANGYSTAU EXPEDITION
            </h1>
            <p className="text-sm sm:text-base text-[#C8BCAC] leading-relaxed">
              Configure your preferences to generate a safe, route-optimized trip itinerary starting from Aktau city.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-5 bg-[#251D1A] rounded-2xl p-6 sm:p-8 border border-[#3A2D27] space-y-6 shadow-xl h-fit">
            
            <h2 className="font-serif font-bold text-xl text-white uppercase border-b border-[#3A2D27] pb-3 flex items-center justify-between">
              <span>Trip Parameters</span>
              <Sparkles className="w-5 h-5 text-[#E2A76F]" />
            </h2>

            {/* Trip Duration */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#A39585] mb-2">
                1. Trip Duration
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
                {['1 day', '2 days', '3 days', '4 days', '5+ days'].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDuration(d)}
                    className={`py-2.5 rounded-lg border transition-all ${
                      duration === d
                        ? 'bg-[#D98A48] text-white border-[#D98A48]'
                        : 'bg-[#1A1412] text-[#C8BCAC] border-[#3A2D27] hover:border-[#E2A76F]'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Style */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#A39585] mb-2">
                2. Travel Style
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                {['Relaxed', 'Balanced', 'Adventure', 'Photography', 'Cultural', 'Family'].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setStyle(st)}
                    className={`py-2 px-3 rounded-lg border text-left transition-all ${
                      style === st
                        ? 'bg-[#D98A48] text-white border-[#D98A48]'
                        : 'bg-[#1A1412] text-[#C8BCAC] border-[#3A2D27] hover:border-[#E2A76F]'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#A39585] mb-2">
                3. Preferred Difficulty
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
                {['Easy', 'Moderate', 'Challenging'].map((diff) => (
                  <button
                    key={diff}
                    type="button"
                    onClick={() => setDifficulty(diff)}
                    className={`py-2 rounded-lg border text-center transition-all ${
                      difficulty === diff
                        ? 'bg-[#D98A48] text-white border-[#D98A48]'
                        : 'bg-[#1A1412] text-[#C8BCAC] border-[#3A2D27] hover:border-[#E2A76F]'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            {/* Season */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#A39585] mb-2">
                4. Season
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                {['Spring', 'Summer', 'Autumn', 'Winter'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSeason(s)}
                    className={`py-2 px-3 rounded-lg border text-left transition-all ${
                      season === s
                        ? 'bg-[#D98A48] text-white border-[#D98A48]'
                        : 'bg-[#1A1412] text-[#C8BCAC] border-[#3A2D27] hover:border-[#E2A76F]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Interests Checklist */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#A39585] mb-2">
                5. Specific Interests
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['Nature', 'History', 'Sacred places', 'Photography', 'Adventure', 'Geology', 'Desert'].map((intr) => {
                  const isChecked = interests.includes(intr);
                  return (
                    <button
                      key={intr}
                      type="button"
                      onClick={() => toggleInterest(intr)}
                      className={`flex items-center gap-2 p-2 rounded-lg border text-left transition-all ${
                        isChecked
                          ? 'bg-[#3A2D27] text-[#E2A76F] border-[#E2A76F]'
                          : 'bg-[#1A1412] text-[#A39585] border-[#3A2D27]'
                      }`}
                    >
                      <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${isChecked ? 'bg-[#E2A76F] border-[#E2A76F]' : 'border-[#A39585]'}`}>
                        {isChecked && <CheckCircle className="w-3 h-3 text-[#1A1412]" />}
                      </div>
                      <span>{intr}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Generate Action Button */}
            <button
              onClick={handleGenerateItinerary}
              className="w-full bg-[#D98A48] hover:bg-[#E2A76F] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              Generate Customized Itinerary
            </button>

          </div>

          {/* Right Column: Generated Itinerary Display */}
          <div className="lg:col-span-7 space-y-6">
            
            {!generatedItinerary ? (
              <div className="bg-[#251D1A] rounded-2xl p-12 border border-[#3A2D27] text-center space-y-4">
                <Navigation className="w-12 h-12 text-[#E2A76F] mx-auto animate-pulse" />
                <h3 className="font-serif font-bold text-2xl text-white uppercase">Ready to Build Your Journey</h3>
                <p className="text-xs text-[#A39585] max-w-md mx-auto leading-relaxed">
                  Select your duration, travel style, and interests on the left panel, then click "Generate Customized Itinerary" to get a day-by-day expedition schedule.
                </p>
                <button
                  onClick={handleGenerateItinerary}
                  className="inline-flex items-center gap-2 bg-[#D98A48] hover:bg-[#E2A76F] text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase"
                >
                  Generate 3-Day Default Itinerary
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Summary Box */}
                <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E2A76F]">
                      Generated Itinerary
                    </span>
                    <h3 className="font-serif font-bold text-xl text-white uppercase">
                      {duration} Mangystau {style} Tour
                    </h3>
                    <p className="text-xs text-[#A39585] mt-0.5">
                      Difficulty: {difficulty} • Season: {season}
                    </p>
                  </div>
                  <button
                    onClick={() => setGeneratedItinerary(null)}
                    className="p-2 text-[#A39585] hover:text-[#E2A76F] transition-colors"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>

                {/* Day Cards */}
                {generatedItinerary.map((day) => (
                  <div
                    key={day.dayNumber}
                    className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] space-y-4 shadow-lg"
                  >
                    <div className="flex items-center justify-between border-b border-[#3A2D27] pb-3">
                      <div className="flex items-center gap-3">
                        <span className="bg-[#D98A48] text-white font-serif font-bold text-sm px-3 py-1 rounded-lg">
                          DAY {day.dayNumber}
                        </span>
                        <h4 className="font-serif font-bold text-lg text-white uppercase">{day.title}</h4>
                      </div>
                    </div>

                    <p className="text-xs font-mono font-semibold text-[#E2A76F]">
                      📍 Route: {day.route}
                    </p>

                    {/* Stop list */}
                    <div className="space-y-3 pt-2">
                      {day.stops.map((stop, sIdx) => (
                        <div key={sIdx} className="bg-[#1A1412] p-4 rounded-xl border border-[#3A2D27] space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-white uppercase">{stop.name}</span>
                            <span className="text-[10px] bg-[#251D1A] text-[#E2A76F] px-2 py-0.5 rounded border border-[#3A2D27]">
                              {stop.access}
                            </span>
                          </div>
                          <p className="text-xs text-[#C8BCAC]">{stop.notes}</p>
                        </div>
                      ))}
                    </div>

                    <div className="text-[11px] text-[#A39585] bg-[#1A1412]/50 p-3 rounded-lg border border-[#3A2D27]">
                      <strong>Transport Note:</strong> {day.drivingInfo}
                    </div>

                  </div>
                ))}

                {/* 4x4 Off road warning card */}
                <div className="bg-[#2B1B18] p-5 rounded-2xl border border-red-900/40 text-xs text-red-200/90 space-y-2">
                  <strong className="text-red-300 uppercase font-serif block flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-red-400" />
                    Off-Road Vehicle Warning:
                  </strong>
                  Routes visiting Bozzhyra or Tuzbair require a high-clearance 4x4 SUV with an experienced off-road driver. Standard 2WD cars are strictly unsuited for deep silt, chalk gravel, and unpaved Ustyurt tracks.
                </div>

              </div>
            )}

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
