'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Compass, Bot, Shield, Map, Sparkles, Globe } from 'lucide-react';

interface NavbarProps {
  onOpenAI?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAI }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Explore', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Plan Your Trip', href: '/plan' },
    { name: 'Map', href: '/map' },
    { name: 'Travel Guide', href: '/guide' },
    { name: 'Safety', href: '/safety' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Stories', href: '/stories' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#1A1412]/95 backdrop-blur-md border-b border-[#3A2D27] text-[#EFEAE1] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-36 h-12 sm:w-44 sm:h-14 flex items-center justify-start">
              <Image
                src="/logo.png"
                alt="Mangystau - Explore Nature's Masterpiece"
                fill
                className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#C8BCAC] hover:text-[#E2A76F] transition-colors duration-200 py-2 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E2A76F] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions: Language & Ask AI Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C8BCAC] hover:text-[#EFEAE1] px-3 py-1.5 rounded-md border border-[#3A2D27] bg-[#251D1A]"
              >
                <Globe className="w-3.5 h-3.5 text-[#E2A76F]" />
                <span>{currentLang}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-[#251D1A] border border-[#3A2D27] rounded-md shadow-xl py-1 z-50">
                  {[
                    { code: 'EN', name: 'English' },
                    { code: 'RU', name: 'Русский (Soon)' },
                    { code: 'KK', name: 'Қазақша (Soon)' }
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between ${
                        currentLang === lang.code ? 'text-[#E2A76F] font-bold bg-[#3A2D27]' : 'text-[#C8BCAC] hover:bg-[#322622]'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* AI Guide Button */}
            <button
              onClick={onOpenAI}
              className="flex items-center gap-2 bg-gradient-to-r from-[#D98A48] to-[#B36024] hover:from-[#E2A76F] hover:to-[#C87333] text-white px-4 py-2 rounded-lg font-semibold text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-900/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Bot className="w-4 h-4 text-amber-200" />
              <span>Ask AI Guide</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenAI}
              className="flex items-center gap-1.5 bg-[#D98A48] text-white px-3 py-1.5 rounded-md text-xs font-semibold"
            >
              <Bot className="w-4 h-4" />
              <span>AI</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#C8BCAC] hover:text-white rounded-md bg-[#251D1A]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A1412] border-b border-[#3A2D27] px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-[#C8BCAC] hover:text-[#E2A76F] hover:bg-[#251D1A]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#3A2D27] flex items-center justify-between">
            <div className="flex gap-2">
              {['EN', 'RU', 'KK'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    currentLang === lang ? 'bg-[#E2A76F] text-[#1A1412]' : 'bg-[#251D1A] text-[#C8BCAC]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-[#8A7A6A] hover:text-[#E2A76F] underline"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
