'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AIAssistant } from '@/components/AIAssistant';
import { useData } from '@/context/DataContext';
import { BookOpen, Clock, User, ArrowRight, Sparkles } from 'lucide-react';

export default function StoriesPage() {
  const { stories } = useData();
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
              <BookOpen className="w-3.5 h-3.5" />
              Editorial Magazine
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white uppercase tracking-tight">
              STORIES FROM THE STEPPE
            </h1>
            <p className="text-sm sm:text-base text-[#C8BCAC] leading-relaxed">
              In-depth travel journal articles, geological essays, and cultural history pieces on the mysteries of Mangystau.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <Link
              key={story.id}
              href={`/stories/${story.slug}`}
              className="bg-[#251D1A] rounded-2xl border border-[#3A2D27] overflow-hidden group hover:border-[#E2A76F] transition-all flex flex-col justify-between shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#251D1A] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-[#1A1412]/90 text-[#E2A76F] border border-[#3A2D27] px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                  {story.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white group-hover:text-[#E2A76F] transition-colors leading-tight">
                    {story.title}
                  </h2>
                  <p className="text-xs text-[#C8BCAC] mt-3 line-clamp-3 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#3A2D27] flex items-center justify-between text-xs text-[#A39585]">
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {story.author}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {story.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Modal */}
      <AIAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />

    </div>
  );
}
