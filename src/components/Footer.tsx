'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Compass, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#120E0D] text-[#C8BCAC] border-t border-[#3A2D27] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative w-48 h-16">
              <Image
                src="/logo.png"
                alt="Mangystau - Explore Nature's Masterpiece"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs sm:text-sm text-[#A39585] leading-relaxed max-w-md">
              The official international tourism platform for Mangystau Region, Kazakhstan. Dedicated to bringing travelers to ancient chalk canyons, sacred underground mosques, and vast desert landscapes.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#E2A76F]">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Aktau, Mangystau Region</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> Official Portal</span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h3 className="text-white font-serif tracking-wider text-sm font-semibold uppercase mb-4 border-b border-[#3A2D27] pb-2">
              Destinations
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/destinations/bozzhyra" className="hover:text-[#E2A76F] transition-colors">Bozzhyra Chalk Fangs</Link></li>
              <li><Link href="/destinations/sherkala" className="hover:text-[#E2A76F] transition-colors">Sherkala Mountain</Link></li>
              <li><Link href="/destinations/tuzbair" className="hover:text-[#E2A76F] transition-colors">Tuzbair Salt Flat</Link></li>
              <li><Link href="/destinations/beket-ata" className="hover:text-[#E2A76F] transition-colors">Beket-Ata Mosque</Link></li>
              <li><Link href="/destinations/torysh" className="hover:text-[#E2A76F] transition-colors">Valley of Balls (Torysh)</Link></li>
              <li><Link href="/destinations/karakiya" className="hover:text-[#E2A76F] transition-colors">Karakiya Depression</Link></li>
            </ul>
          </div>

          {/* Trip Planning */}
          <div>
            <h3 className="text-white font-serif tracking-wider text-sm font-semibold uppercase mb-4 border-b border-[#3A2D27] pb-2">
              Plan & Explore
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/plan" className="hover:text-[#E2A76F] transition-colors">Custom Itinerary Builder</Link></li>
              <li><Link href="/map" className="hover:text-[#E2A76F] transition-colors">Interactive Mangystau Map</Link></li>
              <li><Link href="/guide" className="hover:text-[#E2A76F] transition-colors">Start From Aktau</Link></li>
              <li><Link href="/safety" className="hover:text-[#E2A76F] transition-colors">Desert Safety Guide</Link></li>
              <li><Link href="/gallery" className="hover:text-[#E2A76F] transition-colors">High-Res Photo Gallery</Link></li>
              <li><Link href="/stories" className="hover:text-[#E2A76F] transition-colors">Stories From the Steppe</Link></li>
            </ul>
          </div>

          {/* Travel Info */}
          <div>
            <h3 className="text-white font-serif tracking-wider text-sm font-semibold uppercase mb-4 border-b border-[#3A2D27] pb-2">
              Management
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/admin" className="hover:text-[#E2A76F] transition-colors">Admin Content Panel</Link></li>
              <li><span className="text-[#8A7A6A]">Language: English (EN)</span></li>
              <li><span className="text-[#8A7A6A]">Emergency: Dial 112 / 103</span></li>
              <li className="pt-2">
                <a
                  href="https://visitkazakhstan.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#E2A76F] hover:underline"
                >
                  Visit Kazakhstan <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="bg-[#1A1412] p-4 rounded-lg border border-[#3A2D27] mb-8 text-xs text-[#9E8E7D] leading-relaxed">
          <p className="font-semibold text-[#D98A48] mb-1">Travel Safety & Conditions Disclaimer:</p>
          Travel information, road conditions, weather, and access rules in Mangystau may change suddenly. Always verify off-road track conditions with local 4x4 guides before venturing into remote Ustyurt Plateau canyons or salt flats.
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2B211C] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A7A6A]">
          <p>© {new Date().getFullYear()} Mangystau Region Tourism Platform. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Crafted for International Travelers • Explore Nature’s Masterpiece</p>
        </div>

      </div>
    </footer>
  );
};
