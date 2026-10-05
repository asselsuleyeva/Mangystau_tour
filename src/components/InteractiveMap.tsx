'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Destination } from '@/data/destinations';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface InteractiveMapProps {
  destinations: Destination[];
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ destinations }) => {
  useEffect(() => {
    // Custom Marker Icon SVG
    const customIcon = L.divIcon({
      className: 'custom-leaflet-marker',
      html: `<div style="
        background-color: #D98A48;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 3px solid #FFFFFF;
        box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 10px;
      ">📍</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -14],
    });

    const aktauIcon = L.divIcon({
      className: 'aktau-leaflet-marker',
      html: `<div style="
        background-color: #3B82F6;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 3px solid #FFFFFF;
        box-shadow: 0 4px 12px rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 11px;
      ">🏙️</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16],
    });

    // Initialize Map centered on Mangystau Region
    const map = L.map('mangystau-map-container').setView([43.8, 52.5], 7);

    // Dark tiles from CartoDB for aesthetic alignment
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    // Marker for Aktau Gateway City
    const aktauMarker = L.marker([43.65, 51.15], { icon: aktauIcon }).addTo(map);
    aktauMarker.bindPopup(`
      <div style="font-family: sans-serif; padding: 4px; max-width: 200px;">
        <h4 style="margin: 0 0 4px 0; font-weight: bold; color: #1A1412;">Aktau City (Gateway)</h4>
        <p style="margin: 0; font-size: 11px; color: #666;">International Airport (SCO) & Caspian Sea coast gateway to all Mangystau routes.</p>
      </div>
    `);

    // Markers for all destinations
    destinations.forEach((dest) => {
      if (dest.latitude && dest.longitude) {
        const marker = L.marker([dest.latitude, dest.longitude], { icon: customIcon }).addTo(map);
        
        const popupContent = `
          <div style="font-family: sans-serif; padding: 4px; max-width: 220px;">
            <div style="height: 90px; width: 100%; position: relative; border-radius: 6px; overflow: hidden; margin-bottom: 6px;">
              <img src="${dest.heroImage}" alt="${dest.name}" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <h3 style="margin: 0 0 2px 0; font-size: 14px; font-weight: bold; color: #1A1412; text-transform: uppercase;">${dest.name}</h3>
            <p style="margin: 0 0 6px 0; font-size: 10px; color: #666; font-weight: 600;">${dest.type.join(' • ')}</p>
            <p style="margin: 0 0 8px 0; font-size: 11px; color: #333; line-height: 1.3;">${dest.subtitle}</p>
            <a href="/destinations/${dest.slug}" style="
              display: inline-block;
              background-color: #D98A48;
              color: white;
              padding: 4px 10px;
              border-radius: 4px;
              font-size: 10px;
              font-weight: bold;
              text-decoration: none;
              text-transform: uppercase;
            ">View Destination</a>
          </div>
        `;

        marker.bindPopup(popupContent);
      }
    });

    return () => {
      map.remove();
    };
  }, [destinations]);

  return (
    <div className="relative w-full h-[650px] rounded-2xl overflow-hidden border border-[#3A2D27] shadow-2xl">
      <div id="mangystau-map-container" className="w-full h-full z-0" />
    </div>
  );
};
