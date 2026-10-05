import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { DataProvider } from '@/context/DataContext';

export const metadata: Metadata = {
  title: 'Mangystau Travel Guide | Explore Kazakhstan’s Wildest Landscapes',
  description: 'Discover Mangystau, Kazakhstan. Explore Bozzhyra, Sherkala, Tuzbair, underground mosques, Torysh, Ayrakty and Karakiya with a complete travel guide and AI trip planner.',
  keywords: ['Mangystau', 'Kazakhstan tourism', 'Bozzhyra', 'Sherkala', 'Tuzbair', 'Beket-Ata', 'Torysh Valley of Balls', 'Karakiya Depression', 'Aktau travel'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      </head>
      <body className="min-h-full flex flex-col bg-[#1A1412] text-[#EFEAE1] selection:bg-[#E2A76F] selection:text-[#1A1412]">
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
