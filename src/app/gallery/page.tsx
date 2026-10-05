'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AIAssistant } from '@/components/AIAssistant';
import { Camera, X, Filter, Compass } from 'lucide-react';

interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
  location: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200', title: 'The Bozzhyra Fangs at Dusk', category: 'BOZZHYRA', location: 'Ustyurt Plateau' },
  { id: '2', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200', title: 'Tuzbair Salt Mirror Horizon', category: 'TUZBAIR', location: 'Tuzbair Salt Flat' },
  { id: '3', url: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200', title: 'Sherkala Mountain Silhouette', category: 'SHERKALA', location: 'Near Shetpe' },
  { id: '4', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200', title: 'Valley of Balls Spherical Formations', category: 'TORYSH', location: 'Torysh Valley' },
  { id: '5', url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200', title: 'Beket-Ata Canyon Path', category: 'SACRED SITES', location: 'Oglandy Canyon' },
  { id: '6', url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200', title: 'Ancient Necropolis Stelae', category: 'SACRED SITES', location: 'Shopan-Ata' },
  { id: '7', url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200', title: 'Karakiya Depression Horizon', category: 'KARAKIYA', location: 'Karakiya Basin' },
  { id: '8', url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200', title: 'Sunset Glow Over White Chalk Cliffs', category: 'SUNRISE & SUNSET', location: 'Bozzhyra Canyon' },
  { id: '9', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200', title: 'Golden Hour Reflections', category: 'SUNRISE & SUNSET', location: 'Tuzbair Salt Flat' },
  { id: '10', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200', title: 'Valley of Castles Fortress Rocks', category: 'AYRAKTY', location: 'Ayrakty Massif' },
  { id: '11', url: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200', title: 'Caspian Sunset Horizon', category: 'AKTAU', location: 'Aktau Coast' }
];

export default function GalleryPage() {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState<string>('ALL');
  const [lightboxImg, setLightboxImg] = useState<GalleryItem | null>(null);

  const categories = ['ALL', 'BOZZHYRA', 'DESERT', 'SACRED SITES', 'SHERKALA', 'TUZBAIR', 'TORYSH', 'AYRAKTY', 'KARAKIYA', 'AKTAU', 'SUNRISE & SUNSET'];

  const filteredItems = selectedCat === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCat);

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1412] text-[#EFEAE1]">
      
      {/* Navbar */}
      <Navbar onOpenAI={() => setIsAIOpen(true)} />

      {/* Header Banner */}
      <section className="py-12 bg-[#120E0D] border-b border-[#3A2D27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#251D1A] border border-[#3A2D27] text-xs font-semibold text-[#E2A76F] uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              High-Resolution Visual Gallery
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white uppercase tracking-tight">
              MANGYSTAU PHOTO GALLERY
            </h1>
            <p className="text-sm sm:text-base text-[#C8BCAC] leading-relaxed">
              Experience the visual grandeur of Kazakhstan’s wild landscapes through high-resolution landscape photography.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-6 bg-[#1A1412] border-b border-[#3A2D27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-[#E2A76F] uppercase shrink-0 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shrink-0 transition-all ${
                selectedCat === cat
                  ? 'bg-[#D98A48] text-white shadow-lg'
                  : 'bg-[#251D1A] text-[#C8BCAC] border border-[#3A2D27] hover:border-[#E2A76F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry-Style Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImg(item)}
              className="relative break-inside-avoid rounded-2xl overflow-hidden border border-[#3A2D27] bg-[#251D1A] group cursor-pointer shadow-xl hover:border-[#E2A76F] transition-all duration-300"
            >
              <div className="relative w-full h-auto min-h-[220px]">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end">
                <span className="text-[10px] font-mono font-bold text-[#E2A76F] uppercase tracking-wider">
                  {item.category} • {item.location}
                </span>
                <h3 className="font-serif font-bold text-white text-base uppercase mt-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Viewer */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 text-white bg-[#251D1A] p-2 rounded-full border border-[#3A2D27] hover:bg-[#D98A48]"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={lightboxImg.url}
              alt={lightboxImg.title}
              className="max-h-[80vh] max-w-full rounded-xl border border-[#3A2D27] object-contain shadow-2xl"
            />

            <div className="mt-4 text-center space-y-1">
              <span className="text-xs font-mono font-bold text-[#E2A76F] uppercase">
                {lightboxImg.category} — {lightboxImg.location}
              </span>
              <h3 className="text-xl font-serif font-bold text-white uppercase">{lightboxImg.title}</h3>
            </div>
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
