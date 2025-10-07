"use client";

import React, { useState, useEffect } from "react";
import { AboutPage } from "../features/about";
import { HomePage } from "../features/home";
import { ProjectsPage } from "../features/projects";
import { WorkPage } from "../features/work";
import { DockNavbar, LoadingScreen, Footer } from "./";
import { MenuDemo } from "../common";
import type { TabName, JobView } from "@/src/contexts/NavigationContext";

export default function MainPage() {
  const [view, setView] = useState<TabName>('home');
  const [hoveredTab, setHoveredTab] = useState<TabName | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showContent, setShowContent] = useState<boolean>(false);


  useEffect(() => {
    // For development, skip loading screen if want to
    // setIsLoading(false);
    // setShowContent(true);
  }, []);
  
  // Handle loading complete
  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Show content immediately after loading completes
    setShowContent(true);
  };

  const getUnderlineClass = (tab: string) => {
    // Only handle underline animation for 'about', 'projects', and 'work'
    if (tab === 'home') return 'w-0';
    if (hoveredTab && hoveredTab !== tab) return 'w-0';
    return view === tab || hoveredTab === tab ? 'w-full' : 'w-0';
  };

  // Handle tab click (main navigation)
  const handleTabClick = (tabName: TabName) => {
    setView(tabName);
  };

  const renderContent = () => {
    switch (view) {
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'work':
        return <WorkPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-lightGreen">
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div className={`flex flex-col min-h-screen ${showContent ? 'block' : 'hidden'}`}>
          {/* Top Navbar - Pure fade in, no slide */}
          <nav className="flex justify-between items-center bg-lightGreen p-4 text-darkMint navbar-fade">
            {/* Logo on the left */}
            <div>
              <button 
                className="p-2 px-4 font-semibold md:text-3xl font-play text-2xl"
                onClick={() => handleTabClick('home')}
              >
                Quoc Le
              </button>
            </div>



            {/* Navigation tabs on the right */}
            <div className="hidden md:flex gap-4 font-noto">
              <button 
                className="p-2 px-4 group"
                onClick={() => handleTabClick('about')} 
                onMouseEnter={() => setHoveredTab('about')} 
                onMouseLeave={() => setHoveredTab(null)}
              >
                About
                <div className={`bg-teal-500 h-[2px] ${getUnderlineClass('about')} transition-all duration-500 rounded-sm`}></div>
              </button>

              <button 
                className="p-2 px-4 group"
                onClick={() => handleTabClick('projects')} 
                onMouseEnter={() => setHoveredTab('projects')} 
                onMouseLeave={() => setHoveredTab(null)}
              >
                Projects
                <div className={`bg-teal-500 h-[2px] ${getUnderlineClass('projects')} transition-all duration-500 rounded-sm`}></div>
              </button>

              <button 
                className="p-2 px-4 group"
                onClick={() => handleTabClick('work')} 
                onMouseEnter={() => setHoveredTab('work')} 
                onMouseLeave={() => setHoveredTab(null)}
              >
                Experience
                <div className={`bg-teal-500 h-[2px] ${getUnderlineClass('work')} transition-all duration-500 rounded-sm`}></div>
              </button>
            </div>

            <div className="md:hidden">
              <MenuDemo onTabSelect={handleTabClick} />
            </div>
          </nav>

          <main className="flex-grow text-darkMint">
            {renderContent()}
          </main>

          {/* Footer component */}
          <div className="navbar-fade">
            <Footer />
          </div>

          {/* DockNavbar - Same animation timing as top navbar */}
          <div className="navbar-fade">
            <DockNavbar />
          </div>
        </div>
      )}
    </div>
  );
}