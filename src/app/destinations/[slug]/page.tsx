'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AIAssistant } from '@/components/AIAssistant';
import { useData } from '@/context/DataContext';
import { 
  MapPin, Calendar, Clock, AlertTriangle, ShieldCheck, Compass, 
  ArrowLeft, Bot, CheckCircle, Navigation, Camera, ExternalLink, Info
} from 'lucide-react';

export default function DestinationDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { destinations } = useData();
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const dest = destinations.find((d) => d.slug === slug);

  if (!dest) {
    return (
      <div className="min-h-screen bg-[#1A1412] text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-serif font-bold mb-4">Destination Not Found</h1>
        <p className="text-sm text-[#A39585] mb-6">The requested destination does not exist in our database.</p>
        <Link href="/destinations" className="bg-[#D98A48] px-6 py-2.5 rounded-xl font-bold text-xs uppercase">
          Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1412] text-[#EFEAE1]">
      
      {/* Navbar */}
      <Navbar onOpenAI={() => setIsAIOpen(true)} />

      {/* ================================================== */}
      {/* HERO BANNER                                        */}
      {/* ================================================== */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden border-b border-[#3A2D27]">
        <Image
          src={dest.heroImage}
          alt={dest.name}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-[#1A1412]/60 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#E2A76F] hover:underline mb-4 uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Destinations
          </Link>

          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-[#D98A48] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {dest.accessType}
            </span>
            {dest.unescoStatus && (
              <span className="bg-amber-900/80 text-amber-200 border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {dest.unescoStatus}
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-white uppercase tracking-tight">
            {dest.name}
          </h1>

          <p className="text-lg sm:text-xl font-sans text-[#E2D8CC] max-w-3xl mt-2 font-light">
            {dest.subtitle}
          </p>

          {/* Key Facts Bar */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#251D1A]/90 backdrop-blur-md p-4 rounded-xl border border-[#3A2D27] max-w-4xl text-xs">
            <div>
              <span className="block text-[9px] uppercase font-bold text-[#8A7A6A]">Location</span>
              <span className="font-semibold text-white flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#E2A76F]" /> {dest.location}
              </span>
            </div>
            <div>
              <span className="block text-[9px] uppercase font-bold text-[#8A7A6A]">Difficulty</span>
              <span className="font-semibold text-white mt-0.5 block">{dest.difficulty}</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase font-bold text-[#8A7A6A]">Duration</span>
              <span className="font-semibold text-white mt-0.5 block">{dest.duration}</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase font-bold text-[#8A7A6A]">Best Season</span>
              <span className="font-semibold text-white mt-0.5 block">{dest.bestSeason}</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* MAIN CONTENT GRID                                  */}
      {/* ================================================== */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="bg-[#251D1A] rounded-2xl p-8 border border-[#3A2D27] space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white uppercase tracking-wide flex items-center gap-2">
                <Info className="w-5 h-5 text-[#E2A76F]" /> Overview
              </h2>
              <p className="text-base text-[#C8BCAC] leading-relaxed">
                {dest.overview}
              </p>
            </div>

            {/* History & Geology Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] space-y-3">
                <h3 className="text-lg font-serif font-bold text-white uppercase text-[#E2A76F]">
                  History & Cultural Heritage
                </h3>
                <p className="text-xs text-[#C8BCAC] leading-relaxed">
                  {dest.history}
                </p>
              </div>

              <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] space-y-3">
                <h3 className="text-lg font-serif font-bold text-white uppercase text-[#E2A76F]">
                  Geological Story
                </h3>
                <p className="text-xs text-[#C8BCAC] leading-relaxed">
                  {dest.geology}
                </p>
              </div>
            </div>

            {/* What You Will See */}
            <div className="bg-[#251D1A] rounded-2xl p-8 border border-[#3A2D27] space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white uppercase tracking-wide">
                What You Will See
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#EFEAE1]">
                {dest.whatYouWillSee.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#1A1412] p-3 rounded-xl border border-[#3A2D27]">
                    <CheckCircle className="w-4 h-4 text-[#E2A76F] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Get There & Transport */}
            <div className="bg-[#251D1A] rounded-2xl p-8 border border-[#3A2D27] space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white uppercase tracking-wide flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[#E2A76F]" /> How to Get There
              </h2>
              <p className="text-sm text-[#C8BCAC] leading-relaxed">
                {dest.howToGetThere}
              </p>
              <div className="p-4 bg-[#1A1412] rounded-xl border border-[#3A2D27] text-xs text-[#A39585]">
                <strong className="text-white block mb-1">Transport & Route Warning:</strong>
                {dest.transport}
              </div>
            </div>

            {/* Safety & What to Bring */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Safety */}
              <div className="bg-[#2B1B18] rounded-2xl p-6 border border-red-900/40 space-y-3">
                <h3 className="text-lg font-serif font-bold text-red-200 uppercase flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" /> Safety Instructions
                </h3>
                <ul className="space-y-2 text-xs text-red-100/80">
                  {dest.safety.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Bring */}
              <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] space-y-3">
                <h3 className="text-lg font-serif font-bold text-white uppercase text-[#E2A76F]">
                  What to Bring
                </h3>
                <ul className="space-y-2 text-xs text-[#C8BCAC]">
                  {dest.whatToBring.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#E2A76F]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Photo Gallery */}
            <div className="bg-[#251D1A] rounded-2xl p-8 border border-[#3A2D27] space-y-4">
              <h2 className="text-2xl font-serif font-bold text-white uppercase tracking-wide flex items-center gap-2">
                <Camera className="w-5 h-5 text-[#E2A76F]" /> Photo Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {dest.gallery.map((gImg, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxImg(gImg.url)}
                    className="relative h-44 rounded-xl overflow-hidden border border-[#3A2D27] cursor-pointer group"
                  >
                    <Image
                      src={gImg.url}
                      alt={gImg.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-[10px] text-white font-semibold">{gImg.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Ask AI Box */}
            <div className="bg-gradient-to-br from-[#2B211C] to-[#1A1412] p-6 rounded-2xl border border-[#3A2D27] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D98A48] flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white uppercase text-sm">
                    Have Questions About {dest.name}?
                  </h3>
                  <p className="text-[11px] text-[#A39585]">Ask AI Guide regarding roads, gear, or permits</p>
                </div>
              </div>

              <button
                onClick={() => setIsAIOpen(true)}
                className="w-full bg-[#D98A48] hover:bg-[#E2A76F] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Ask AI Assistant Now
              </button>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-[#251D1A] p-6 rounded-2xl border border-[#3A2D27] space-y-4">
              <h3 className="font-serif font-bold text-white uppercase text-sm border-b border-[#3A2D27] pb-2">
                Nearby Attractions
              </h3>
              <ul className="space-y-2 text-xs">
                {dest.nearbyAttractions.map((attraction, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[#C8BCAC]">
                    <Compass className="w-3.5 h-3.5 text-[#E2A76F]" />
                    <span>{attraction}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Action Plan */}
            <div className="bg-[#251D1A] p-6 rounded-2xl border border-[#3A2D27] space-y-4">
              <h3 className="font-serif font-bold text-white uppercase text-sm border-b border-[#3A2D27] pb-2">
                Trip Planning
              </h3>
              <p className="text-xs text-[#A39585]">
                Include {dest.name} in your custom multi-day Mangystau itinerary from Aktau.
              </p>
              <Link
                href="/plan"
                className="block text-center bg-[#1A1412] hover:bg-[#322622] text-[#E2A76F] border border-[#3A2D27] hover:border-[#E2A76F] py-2.5 rounded-xl font-bold text-xs uppercase transition-colors"
              >
                Add To Tour Planner
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={lightboxImg}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />

      {/* AI Assistant Modal */}
      <AIAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />

    </div>
  );
}
