'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Destination, TravelStory, INITIAL_DESTINATIONS, INITIAL_STORIES } from '@/data/destinations';

interface DataContextType {
  destinations: Destination[];
  stories: TravelStory[];
  addDestination: (newDest: Destination) => void;
  updateDestination: (updatedDest: Destination) => void;
  deleteDestination: (id: string) => void;
  addStory: (newStory: TravelStory) => void;
  updateStory: (updatedStory: TravelStory) => void;
  deleteStory: (id: string) => void;
  resetToDefault: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const DEST_STORAGE_KEY = 'mangystau_destinations_v1';
const STORY_STORAGE_KEY = 'mangystau_stories_v1';

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [destinations, setDestinations] = useState<Destination[]>(INITIAL_DESTINATIONS);
  const [stories, setStories] = useState<TravelStory[]>(INITIAL_STORIES);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const storedDest = localStorage.getItem(DEST_STORAGE_KEY);
      if (storedDest) {
        setDestinations(JSON.parse(storedDest));
      }
      const storedStories = localStorage.getItem(STORY_STORAGE_KEY);
      if (storedStories) {
        setStories(JSON.parse(storedStories));
      }
    } catch (e) {
      console.error('Failed to parse localStorage data:', e);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(DEST_STORAGE_KEY, JSON.stringify(destinations));
      } catch (e) {
        console.error('Failed to save destinations to localStorage:', e);
      }
    }
  }, [destinations, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(STORY_STORAGE_KEY, JSON.stringify(stories));
      } catch (e) {
        console.error('Failed to save stories to localStorage:', e);
      }
    }
  }, [stories, isInitialized]);

  const addDestination = (newDest: Destination) => {
    setDestinations((prev) => [newDest, ...prev]);
  };

  const updateDestination = (updatedDest: Destination) => {
    setDestinations((prev) =>
      prev.map((d) => (d.id === updatedDest.id ? updatedDest : d))
    );
  };

  const deleteDestination = (id: string) => {
    setDestinations((prev) => prev.filter((d) => d.id !== id));
  };

  const addStory = (newStory: TravelStory) => {
    setStories((prev) => [newStory, ...prev]);
  };

  const updateStory = (updatedStory: TravelStory) => {
    setStories((prev) =>
      prev.map((s) => (s.id === updatedStory.id ? updatedStory : s))
    );
  };

  const deleteStory = (id: string) => {
    setStories((prev) => prev.filter((s) => s.id !== id));
  };

  const resetToDefault = () => {
    setDestinations(INITIAL_DESTINATIONS);
    setStories(INITIAL_STORIES);
    localStorage.removeItem(DEST_STORAGE_KEY);
    localStorage.removeItem(STORY_STORAGE_KEY);
  };

  return (
    <DataContext.Provider
      value={{
        destinations,
        stories,
        addDestination,
        updateDestination,
        deleteDestination,
        addStory,
        updateStory,
        deleteStory,
        resetToDefault,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
