'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AIAssistant } from '@/components/AIAssistant';
import { INITIAL_PACKING_ITEMS } from '@/data/destinations';
import { 
  ShieldAlert, CheckSquare, Square, RefreshCw, Sun, 
  Droplet, Car, Compass, HeartHandshake, Leaf, Bot, AlertTriangle
} from 'lucide-react';

export default function SafetyPage() {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const toggleCheck = (id: string) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((item) => item !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const resetChecklist = () => {
    setCheckedIds([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1412] text-[#EFEAE1]">
      
      {/* Navbar */}
      <Navbar onOpenAI={() => setIsAIOpen(true)} />

      {/* Header Banner */}
      <section className="py-12 bg-[#120E0D] border-b border-[#3A2D27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#251D1A] border border-[#3A2D27] text-xs font-semibold text-red-400 uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5" />
              Smart Tourist Safety Protocol
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white uppercase tracking-tight">
              DESERT SAFETY & PACKING GUIDE
            </h1>
            <p className="text-sm sm:text-base text-[#C8BCAC] leading-relaxed">
              Mangystau is a raw, remote desert wilderness. Preparation and adherence to safety guidelines ensure a memorable and safe expedition.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 space-y-12">
        
        {/* Safety Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Desert Safety */}
          <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] space-y-4 shadow-xl">
            <div className="flex items-center gap-3 border-b border-[#3A2D27] pb-3">
              <Droplet className="w-6 h-6 text-[#E2A76F]" />
              <h2 className="font-serif font-bold text-lg text-white uppercase">Desert Safety</h2>
            </div>
            <ul className="space-y-2.5 text-xs text-[#C8BCAC] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Carry at least <strong>5 litres of drinking water</strong> per person per day.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Do not rely completely on mobile phone coverage; signal is absent in 80% of canyons.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Download offline maps (Maps.me / Organic Maps) prior to leaving Aktau.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Carry emergency first-aid supplies and inform contacts of your route.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Avoid venturing into deep remote canyons alone.</span>
              </li>
            </ul>
          </div>

          {/* Transport & 4x4 */}
          <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] space-y-4 shadow-xl">
            <div className="flex items-center gap-3 border-b border-[#3A2D27] pb-3">
              <Car className="w-6 h-6 text-[#E2A76F]" />
              <h2 className="font-serif font-bold text-lg text-white uppercase">Transport Rules</h2>
            </div>
            <ul className="space-y-2.5 text-xs text-[#C8BCAC] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Use a high-clearance 4x4 vehicle equipped with two spare tires for Bozzhyra & Tuzbair.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Check off-road track conditions prior to departure.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span><strong>DO NOT drive onto wet salt or mud</strong> (sor); vehicles sink instantly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Carry extra fuel reserves; gas stations exist only on major highways.</span>
              </li>
            </ul>
          </div>

          {/* Weather & Sun */}
          <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] space-y-4 shadow-xl">
            <div className="flex items-center gap-3 border-b border-[#3A2D27] pb-3">
              <Sun className="w-6 h-6 text-[#E2A76F]" />
              <h2 className="font-serif font-bold text-lg text-white uppercase">Weather Conditions</h2>
            </div>
            <ul className="space-y-2.5 text-xs text-[#C8BCAC] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Summer temperatures can exceed 40°C in lower canyon basins.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Spring (April–May) and Autumn (Sept–Oct) offer optimal weather.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Desert plateau winds can be fierce; temperatures drop quickly after dark.</span>
              </li>
            </ul>
          </div>

          {/* Sacred Sites Etiquette */}
          <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] space-y-4 shadow-xl">
            <div className="flex items-center gap-3 border-b border-[#3A2D27] pb-3">
              <HeartHandshake className="w-6 h-6 text-[#E2A76F]" />
              <h2 className="font-serif font-bold text-lg text-white uppercase">Sacred Sites Etiquette</h2>
            </div>
            <ul className="space-y-2.5 text-xs text-[#C8BCAC] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Dress modestly (cover shoulders and knees; headscarf for women).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Speak quietly and show respect to pilgrims at Beket-Ata & Shopan-Ata.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Do not photograph people praying without explicit permission.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Refrain from touching ancient wall carvings or inscriptions.</span>
              </li>
            </ul>
          </div>

          {/* Environmental Care */}
          <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] space-y-4 shadow-xl lg:col-span-2">
            <div className="flex items-center gap-3 border-b border-[#3A2D27] pb-3">
              <Leaf className="w-6 h-6 text-[#E2A76F]" />
              <h2 className="font-serif font-bold text-lg text-white uppercase">Environmental Care & Leave No Trace</h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#C8BCAC] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Pack out all garbage and waste; leave no litter behind in canyons.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Do not disturb or collect ancient fossils or geological stone spheres.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Drive strictly on established off-road tire tracks to prevent soil erosion.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#E2A76F] font-bold">•</span>
                <span>Respect local fauna (camels, wild horses, desert lizards, saiga).</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ================================================== */}
        {/* INTERACTIVE PACKING CHECKLIST                      */}
        {/* ================================================== */}
        <div className="bg-[#251D1A] rounded-2xl p-8 border border-[#3A2D27] space-y-6 shadow-xl">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#3A2D27] pb-4">
            <div>
              <h2 className="font-serif font-bold text-2xl text-white uppercase flex items-center gap-2">
                <CheckSquare className="w-6 h-6 text-[#E2A76F]" />
                Interactive Expedition Checklist
              </h2>
              <p className="text-xs text-[#A39585] mt-1">
                Check off gear items as you prepare for your Mangystau journey ({checkedIds.length}/{INITIAL_PACKING_ITEMS.length} packed)
              </p>
            </div>

            <button
              onClick={resetChecklist}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#A39585] hover:text-[#E2A76F] transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset Checklist
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INITIAL_PACKING_ITEMS.map((item) => {
              const isChecked = checkedIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                    isChecked
                      ? 'bg-[#1A1412] border-[#E2A76F]/60 text-white'
                      : 'bg-[#1A1412]/50 border-[#3A2D27] text-[#C8BCAC] hover:border-[#E2A76F]/40'
                  }`}
                >
                  <div className="mt-0.5">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-[#E2A76F]" />
                    ) : (
                      <Square className="w-5 h-5 text-[#A39585]" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-serif font-bold text-sm ${isChecked ? 'line-through text-[#A39585]' : 'text-white'}`}>
                        {item.name}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-[#251D1A] px-2 py-0.5 rounded text-[#E2A76F] border border-[#3A2D27]">
                        {item.category}
                      </span>
                    </div>

                    <p className="text-xs text-[#A39585]">{item.description}</p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.requiredFor.map((req) => (
                        <span key={req} className="text-[8px] bg-[#2B211C] text-[#C8BCAC] px-1.5 py-0.5 rounded">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
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
