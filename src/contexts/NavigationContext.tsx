'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type TabName = 'home' | 'about' | 'projects' | 'work';
export type JobView = 'job1' | 'job2' | 'job3' | null;

interface NavigationState {
  view: TabName;
  jobView: JobView;
  hoveredTab: TabName | null;
  isLoading: boolean;
  showContent: boolean;
}

interface NavigationContextType extends NavigationState {
  setView: (view: TabName) => void;
  setJobView: (jobView: JobView) => void;
  setHoveredTab: (tab: TabName | null) => void;
  setIsLoading: (loading: boolean) => void;
  setShowContent: (show: boolean) => void;
  handleTabClick: (tabName: TabName) => void;
  handleJobSelect: (jobViewName: string) => void;
  handleLoadingComplete: () => void;
  getUnderlineClass: (tab: string) => string;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<TabName>('home');
  const [jobView, setJobView] = useState<JobView>(null);
  const [hoveredTab, setHoveredTab] = useState<TabName | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showContent, setShowContent] = useState<boolean>(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  const getUnderlineClass = (tab: string) => {
    if (tab === 'home') return 'w-0';
    if (hoveredTab && hoveredTab !== tab) return 'w-0';
    return view === tab || hoveredTab === tab ? 'w-full' : 'w-0';
  };

  const handleTabClick = (tabName: TabName) => {
    setView(tabName);
    setJobView(null);
  };

  const handleJobSelect = (jobViewName: string) => {
    setJobView(jobViewName as JobView);
  };

  const contextValue: NavigationContextType = {
    view,
    jobView,
    hoveredTab,
    isLoading,
    showContent,
    setView,
    setJobView,
    setHoveredTab,
    setIsLoading,
    setShowContent,
    handleTabClick,
    handleJobSelect,
    handleLoadingComplete,
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