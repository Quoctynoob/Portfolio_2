"use client";

import React, { useState } from "react";
import AboutPage from "./tabs/AboutPage";
import HomePage from "./tabs/HomePage";
import ProjectsPage from "./tabs/ProjectsPage";
import FloatingNavbar from "./FloatingNavbar";

export default function MainPage() {
  const [view, setView] = useState<string>('home');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const getUnderlineClass = (tab: string) => {
    if (hoveredTab && hoveredTab !== tab) return 'w-0';
    return view === tab || hoveredTab === tab ? 'w-full' : 'w-0';
  };

  const renderContent = () => {
    switch (view) {
      case 'about':
        return <AboutPage />
      case 'projects':
        return <ProjectsPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-between items-center bg-darkMint p-4 text-mintCream fade-in-up">
        {/* NavBar */}
        <div className="flex gap-2 font-semibold">
          <button 
            className="p-2 px-4 group"
            onClick={() => setView('home')} 
            onMouseEnter={() => setHoveredTab('home')} 
            onMouseLeave={() => setHoveredTab(null)}
          >
            Quoc Le
            <div className={`bg-teal-500 h-[4px] ${getUnderlineClass('home')} transition-all duration-500 rounded-sm`}></div>
          </button>

          <button 
            className="p-2 px-4 group"
            onClick={() => setView('about')} 
            onMouseEnter={() => setHoveredTab('about')} 
            onMouseLeave={() => setHoveredTab(null)}
          >
            About
            <div className={`bg-teal-500 h-[4px] ${getUnderlineClass('about')} transition-all duration-500 rounded-sm`}></div>
          </button>

          <button 
            className="p-2 px-4 group"
            onClick={() => setView('projects')} 
            onMouseEnter={() => setHoveredTab('projects')} 
            onMouseLeave={() => setHoveredTab(null)}
          >
            Projects
            <div className={`bg-teal-500 h-[4px] ${getUnderlineClass('projects')} transition-all duration-500 rounded-sm`}></div>
          </button>
        </div>
      </nav>

      <main className="flex-grow text-darkMint">
        {renderContent()}
      </main>

      <FloatingNavbar />
    </div>
  );
}