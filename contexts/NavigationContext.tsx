'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export type TabName = 'home' | 'about' | 'projects' | 'work';

interface NavigationState {
  view: TabName;
  hoveredTab: TabName | null;
}

interface NavigationContextType extends NavigationState {
  setHoveredTab: (tab: TabName | null) => void;
  getUnderlineClass: (tab: string) => string;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [view, setView] = useState<TabName>('home');
  const [hoveredTab, setHoveredTab] = useState<TabName | null>(null);

  // Update view based on current pathname
  useEffect(() => {
    if (pathname === '/') {
      setView('home');
    } else if (pathname === '/about') {
      setView('about');
    } else if (pathname === '/projects') {
      setView('projects');
    } else if (pathname === '/work') {
      setView('work');
    }
  }, [pathname]);

  const getUnderlineClass = (tab: string) => {
    if (tab === 'home') return 'w-0';
    if (hoveredTab && hoveredTab !== tab) return 'w-0';
    return view === tab || hoveredTab === tab ? 'w-full' : 'w-0';
  };

  const contextValue: NavigationContextType = {
    view,
    hoveredTab,
    setHoveredTab,
    getUnderlineClass
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}