'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useData } from '@/context/DataContext';
import { Destination, TravelStory } from '@/data/destinations';
import { 
  ShieldCheck, Plus, Trash2, Edit, RotateCcw, 
  Save, X, Check, Database, Bot
} from 'lucide-react';

export default function AdminPage() {
  const { 
    destinations, 
    stories, 
    addDestination, 
    updateDestination, 
    deleteDestination, 
    addStory, 
    updateStory, 
    deleteStory, 
    resetToDefault 
  } = useData();

  const [activeTab, setActiveTab] = useState<'destinations' | 'stories'>('destinations');
  
  // Modal Edit States
  const [editingDest, setEditingDest] = useState<Partial<Destination> | null>(null);
  const [editingStory, setEditingStory] = useState<Partial<TravelStory> | null>(null);

  // Form handlers for Destination
  const handleSaveDest = () => {
    if (!editingDest || !editingDest.name || !editingDest.slug) return;

    if (editingDest.id && destinations.some(d => d.id === editingDest.id)) {
      updateDestination(editingDest as Destination);
    } else {
      const newD: Destination = {
        id: editingDest.id || editingDest.slug.toLowerCase().replace(/\s+/g, '-'),
        name: editingDest.name || 'New Destination',
        slug: editingDest.slug || 'new-destination',
        subtitle: editingDest.subtitle || '',
        description: editingDest.description || '',
        overview: editingDest.overview || '',
        history: editingDest.history || '',
        geology: editingDest.geology || '',
        whatYouWillSee: editingDest.whatYouWillSee || [],
        howToGetThere: editingDest.howToGetThere || '',
        bestTimeToVisit: editingDest.bestTimeToVisit || 'April–May / September–October',
        location: editingDest.location || 'Mangystau Region',
        latitude: editingDest.latitude || 43.5,
        longitude: editingDest.longitude || 52.5,
        difficulty: editingDest.difficulty || 'Moderate',
        duration: editingDest.duration || 'Full day',
        bestSeason: editingDest.bestSeason || 'April–May / September–October',
        seasons: editingDest.seasons || ['Spring', 'Autumn'],
        type: editingDest.type || ['Nature'],
        travelStyles: editingDest.travelStyles || ['Adventure'],
        accessType: editingDest.accessType || 'SUV recommended',
        heroImage: editingDest.heroImage || 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200',
        images: editingDest.images || [],
        gallery: editingDest.gallery || [],
        safety: editingDest.safety || [],
        whatToBring: editingDest.whatToBring || [],
        nearbyAttractions: editingDest.nearbyAttractions || [],
        transport: editingDest.transport || '4x4 SUV recommended',
      };
      addDestination(newD);
    }
    setEditingDest(null);
  };

  // Form handlers for Story
  const handleSaveStory = () => {
    if (!editingStory || !editingStory.title || !editingStory.slug) return;

    if (editingStory.id && stories.some(s => s.id === editingStory.id)) {
      updateStory(editingStory as TravelStory);
    } else {
      const newS: TravelStory = {
        id: editingStory.id || editingStory.slug.toLowerCase().replace(/\s+/g, '-'),
        title: editingStory.title || 'New Story',
        slug: editingStory.slug || 'new-story',
        excerpt: editingStory.excerpt || '',
        category: editingStory.category || 'EXPLORATION',
        author: editingStory.author || 'Mangystau Travel Team',
        readTime: editingStory.readTime || '5 min read',
        publishDate: editingStory.publishDate || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        image: editingStory.image || 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200',
        content: editingStory.content || '',
      };
      addStory(newS);
    }
    setEditingStory(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1412] text-[#EFEAE1]">
      
      {/* Navbar */}
      <Navbar />

      {/* Header Banner */}
      <section className="py-10 bg-[#120E0D] border-b border-[#3A2D27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#251D1A] border border-[#3A2D27] text-xs font-semibold text-[#E2A76F] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              Content Management System
            </div>
            <h1 className="text-3xl font-serif font-extrabold text-white uppercase">
              ADMIN CONTROL PANEL
            </h1>
          </div>

          <button
            onClick={() => {
              if (confirm('Are you sure you want to reset all data back to original defaults?')) {
                resetToDefault();
              }
            }}
            className="inline-flex items-center gap-2 bg-[#2B1B18] border border-red-900/50 hover:bg-red-900/40 text-red-200 px-4 py-2 rounded-xl text-xs font-bold uppercase transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Database To Default
          </button>
        </div>
      </section>

      {/* Main Panel Content */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-4 border-b border-[#3A2D27] pb-4">
          <button
            onClick={() => setActiveTab('destinations')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'destinations'
                ? 'bg-[#D98A48] text-white'
                : 'bg-[#251D1A] text-[#C8BCAC] border border-[#3A2D27]'
            }`}
          >
            <Database className="w-4 h-4" /> Manage Destinations ({destinations.length})
          </button>

          <button
            onClick={() => setActiveTab('stories')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'stories'
                ? 'bg-[#D98A48] text-white'
                : 'bg-[#251D1A] text-[#C8BCAC] border border-[#3A2D27]'
            }`}
          >
            <Bot className="w-4 h-4" /> Manage Travel Stories ({stories.length})
          </button>
        </div>

        {/* Tab 1: DESTINATIONS TABLE */}
        {activeTab === 'destinations' && (
          <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] space-y-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="font-serif font-bold text-lg text-white uppercase">Destinations Directory</h2>
              <button
                onClick={() => setEditingDest({})}
                className="inline-flex items-center gap-2 bg-[#D98A48] hover:bg-[#E2A76F] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase"
              >
                <Plus className="w-4 h-4" /> Add New Destination
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#C8BCAC]">
                <thead className="bg-[#1A1412] text-[#A39585] uppercase text-[10px] font-bold border-b border-[#3A2D27]">
                  <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Access</th>
                    <th className="p-3">Difficulty</th>
                    <th className="p-3">Duration</th>
                    <th className="p-3">Best Season</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#3A2D27]">
                  {destinations.map((d) => (
                    <tr key={d.id} className="hover:bg-[#1A1412]/50">
                      <td className="p-3 font-bold text-white uppercase">{d.name}</td>
                      <td className="p-3">{d.accessType}</td>
                      <td className="p-3">{d.difficulty}</td>
                      <td className="p-3">{d.duration}</td>
                      <td className="p-3">{d.bestSeason}</td>
                      <td className="p-3 text-right space-x-2">
                        <button
                          onClick={() => setEditingDest(d)}
                          className="p-1.5 bg-[#3A2D27] hover:bg-[#E2A76F] text-white rounded transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete destination "${d.name}"?`)) {
                              deleteDestination(d.id);
                            }
                          }}
                          className="p-1.5 bg-red-900/50 hover:bg-red-700 text-white rounded transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: STORIES TABLE */}
        {activeTab === 'stories' && (
          <div className="bg-[#251D1A] rounded-2xl p-6 border border-[#3A2D27] space-y-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="font-serif font-bold text-lg text-white uppercase">Travel Articles Directory</h2>
              <button
                onClick={() => setEditingStory({})}
                className="inline-flex items-center gap-2 bg-[#D98A48] hover:bg-[#E2A76F] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase"
              >
                <Plus className="w-4 h-4" /> Add New Story
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#C8BCAC]">
                <thead className="bg-[#1A1412] text-[#A39585] uppercase text-[10px] font-bold border-b border-[#3A2D27]">
                  <tr>
                    <th className="p-3">Title</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Author</th>
                    <th className="p-3">Read Time</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#3A2D27]">
                  {stories.map((s) => (
                    <tr key={s.id} className="hover:bg-[#1A1412]/50">
                      <td className="p-3 font-bold text-white">{s.title}</td>
                      <td className="p-3 text-[#E2A76F]">{s.category}</td>
                      <td className="p-3">{s.author}</td>
                      <td className="p-3">{s.readTime}</td>
                      <td className="p-3 text-right space-x-2">
                        <button
                          onClick={() => setEditingStory(s)}
                          className="p-1.5 bg-[#3A2D27] hover:bg-[#E2A76F] text-white rounded transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete story "${s.title}"?`)) {
                              deleteStory(s.id);
                            }
                          }}
                          className="p-1.5 bg-red-900/50 hover:bg-red-700 text-white rounded transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </section>

      {/* MODAL EDIT DESTINATION */}
      {editingDest && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#1D1715] border border-[#3A2D27] text-[#EFEAE1] w-full max-w-2xl rounded-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#3A2D27] pb-3">
              <h3 className="font-serif font-bold text-lg text-white uppercase">
                {editingDest.id ? 'Edit Destination' : 'Add New Destination'}
              </h3>
              <button onClick={() => setEditingDest(null)} className="text-[#A39585] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[#A39585] mb-1 font-bold">Name</label>
                <input
                  type="text"
                  value={editingDest.name || ''}
                  onChange={(e) => setEditingDest({ ...editingDest, name: e.target.value })}
                  className="w-full bg-[#181312] border border-[#3A2D27] p-2.5 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-[#A39585] mb-1 font-bold">Slug (URL identifier)</label>
                <input
                  type="text"
                  value={editingDest.slug || ''}
                  onChange={(e) => setEditingDest({ ...editingDest, slug: e.target.value })}
                  className="w-full bg-[#181312] border border-[#3A2D27] p-2.5 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-[#A39585] mb-1 font-bold">Short Description</label>
                <textarea
                  value={editingDest.description || ''}
                  onChange={(e) => setEditingDest({ ...editingDest, description: e.target.value })}
                  className="w-full bg-[#181312] border border-[#3A2D27] p-2.5 rounded text-white h-20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#A39585] mb-1 font-bold">Difficulty</label>
                  <select
                    value={editingDest.difficulty || 'Moderate'}
                    onChange={(e) => setEditingDest({ ...editingDest, difficulty: e.target.value as any })}
                    className="w-full bg-[#181312] border border-[#3A2D27] p-2.5 rounded text-white"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Challenging">Challenging</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#A39585] mb-1 font-bold">Access Type</label>
                  <select
                    value={editingDest.accessType || 'SUV recommended'}
                    onChange={(e) => setEditingDest({ ...editingDest, accessType: e.target.value as any })}
                    className="w-full bg-[#181312] border border-[#3A2D27] p-2.5 rounded text-white"
                  >
                    <option value="Easy road access">Easy road access</option>
                    <option value="SUV recommended">SUV recommended</option>
                    <option value="4x4 required">4x4 required</option>
                    <option value="Walking required">Walking required</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#A39585] mb-1 font-bold">Hero Image URL</label>
                <input
                  type="text"
                  value={editingDest.heroImage || ''}
                  onChange={(e) => setEditingDest({ ...editingDest, heroImage: e.target.value })}
                  className="w-full bg-[#181312] border border-[#3A2D27] p-2.5 rounded text-white"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#3A2D27] flex justify-end gap-3">
              <button
                onClick={() => setEditingDest(null)}
                className="px-4 py-2 bg-[#251D1A] text-[#A39585] rounded text-xs font-bold uppercase"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveDest}
                className="px-5 py-2 bg-[#D98A48] hover:bg-[#E2A76F] text-white rounded text-xs font-bold uppercase"
              >
                Save Destination
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL EDIT STORY */}
      {editingStory && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#1D1715] border border-[#3A2D27] text-[#EFEAE1] w-full max-w-2xl rounded-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#3A2D27] pb-3">
              <h3 className="font-serif font-bold text-lg text-white uppercase">
                {editingStory.id ? 'Edit Story' : 'Add New Story'}
              </h3>
              <button onClick={() => setEditingStory(null)} className="text-[#A39585] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[#A39585] mb-1 font-bold">Title</label>
                <input
                  type="text"
                  value={editingStory.title || ''}
                  onChange={(e) => setEditingStory({ ...editingStory, title: e.target.value })}
                  className="w-full bg-[#181312] border border-[#3A2D27] p-2.5 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-[#A39585] mb-1 font-bold">Slug</label>
                <input
                  type="text"
                  value={editingStory.slug || ''}
                  onChange={(e) => setEditingStory({ ...editingStory, slug: e.target.value })}
                  className="w-full bg-[#181312] border border-[#3A2D27] p-2.5 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-[#A39585] mb-1 font-bold">Excerpt</label>
                <textarea
                  value={editingStory.excerpt || ''}
                  onChange={(e) => setEditingStory({ ...editingStory, excerpt: e.target.value })}
                  className="w-full bg-[#181312] border border-[#3A2D27] p-2.5 rounded text-white h-20"
                />
              </div>

              <div>
                <label className="block text-[#A39585] mb-1 font-bold">Article Content</label>
                <textarea
                  value={editingStory.content || ''}
                  onChange={(e) => setEditingStory({ ...editingStory, content: e.target.value })}
                  className="w-full bg-[#181312] border border-[#3A2D27] p-2.5 rounded text-white h-40"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#3A2D27] flex justify-end gap-3">
              <button
                onClick={() => setEditingStory(null)}
                className="px-4 py-2 bg-[#251D1A] text-[#A39585] rounded text-xs font-bold uppercase"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveStory}
                className="px-5 py-2 bg-[#D98A48] hover:bg-[#E2A76F] text-white rounded text-xs font-bold uppercase"
              >
                Save Story
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />

    </div>
  );
}
