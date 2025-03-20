"use client";

import React, { useState } from "react";
import AboutPage from "./tabs/AboutPage";
import HomePage from "./tabs/HomePage";
import ProjectsPage from "./tabs/ProjectsPage";
import FloatingNavbar from "./FloatingNavbar";
import WorkPage from "./tabs/WorkPage";

export default function MainPage() {
  const [view, setView] = useState<string>('home');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const getUnderlineClass = (tab: string) => {
    // Only handle underline animation for 'about', 'projects', and 'work'
    if (tab === 'home') return 'w-0';
    if (hoveredTab && hoveredTab !== tab) return 'w-0';
    return view === tab || hoveredTab === tab ? 'w-full' : 'w-0';
  };

  const renderContent = () => {
    switch (view) {
      case 'about':
        return <AboutPage />
      case 'projects':
        return <ProjectsPage />
      case 'work':
        return <WorkPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-mintCream">
      <nav className="flex justify-between items-center bg-mintCream p-4 text-black fade-in-up">
        {/* Logo on the left */}
        <div>
          <button 
            className="p-2 px-4 font-semibold"
            onClick={() => setView('home')}
          >
            Quoc Le
          </button>
        </div>

        {/* Navigation tabs on the right */}
        <div className="flex gap-4 font-semibold">
          <button 
            className="p-2 px-4 group"
            onClick={() => setView('about')} 
            onMouseEnter={() => setHoveredTab('about')} 
            onMouseLeave={() => setHoveredTab(null)}
          >
            About
            <div className={`bg-teal-500 h-[2px] ${getUnderlineClass('about')} transition-all duration-500 rounded-sm`}></div>
          </button>

          <button 
            className="p-2 px-4 group"
            onClick={() => setView('projects')} 
            onMouseEnter={() => setHoveredTab('projects')} 
            onMouseLeave={() => setHoveredTab(null)}
          >
            Projects
            <div className={`bg-teal-500 h-[2px] ${getUnderlineClass('projects')} transition-all duration-500 rounded-sm`}></div>
          </button>

          <button 
            className="p-2 px-4 group"
            onClick={() => setView('work')} 
            onMouseEnter={() => setHoveredTab('work')} 
            onMouseLeave={() => setHoveredTab(null)}
          >
            Work
            <div className={`bg-teal-500 h-[2px] ${getUnderlineClass('work')} transition-all duration-500 rounded-sm`}></div>
          </button>
        </div>
      </nav>

      <main className="flex-grow text-black">
        {renderContent()}
      </main>

      <FloatingNavbar />
    </div>
  );
}