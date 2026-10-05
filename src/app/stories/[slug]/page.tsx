'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AIAssistant } from '@/components/AIAssistant';
import { useData } from '@/context/DataContext';
import { ArrowLeft, Clock, User, Calendar, BookOpen, Bot } from 'lucide-react';

export default function StoryDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { stories } = useData();
  const [isAIOpen, setIsAIOpen] = useState(false);

  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    return (
      <div className="min-h-screen bg-[#1A1412] text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-serif font-bold mb-4">Article Not Found</h1>
        <Link href="/stories" className="bg-[#D98A48] px-6 py-2.5 rounded-xl font-bold text-xs uppercase">
          Back to Stories
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1412] text-[#EFEAE1]">
      
      {/* Navbar */}
      <Navbar onOpenAI={() => setIsAIOpen(true)} />

      {/* Header */}
      <section className="relative py-16 bg-[#120E0D] border-b border-[#3A2D27]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#E2A76F] hover:underline uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Stories
          </Link>

          <span className="block text-xs font-mono font-bold text-[#E2A76F] uppercase">
            {story.category}
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight">
            {story.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#A39585] pt-2 border-t border-[#251D1A]">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-[#E2A76F]" /> {story.author}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {story.publishDate}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {story.readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8 w-full">
        <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-[#3A2D27] shadow-2xl">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Body Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 w-full flex-1 space-y-6 text-base text-[#C8BCAC] leading-relaxed font-sans">
        <div className="whitespace-pre-line bg-[#251D1A] p-8 rounded-2xl border border-[#3A2D27] text-sm leading-relaxed space-y-4">
          {story.content}
        </div>

        {/* AI Box */}
        <div className="bg-[#2B211C] p-6 rounded-2xl border border-[#3A2D27] flex items-center justify-between gap-4 mt-8">
          <div>
            <h3 className="font-serif font-bold text-white text-sm uppercase">Interested in visiting this site?</h3>
            <p className="text-xs text-[#A39585]">Ask AI Guide for current road access & best photo times.</p>
          </div>
          <button
            onClick={() => setIsAIOpen(true)}
            className="bg-[#D98A48] hover:bg-[#E2A76F] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase shrink-0"
          >
            Ask AI
          </button>
        </div>
      </article>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Modal */}
      <AIAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />

    </div>
  );
}
