'use client';

import React, { useEffect } from "react";
import { useNavigation } from '@/src/contexts/NavigationContext';
import AboutPage from "../features/about/AboutPage";
import HomePage from "../features/home/HomePage";
import ProjectsPage from "../features/projects/ProjectsPage";
import DockNavbar from "./DockNavbarOriginal";
import WorkPage from "../features/work/WorkPage";
import Job1 from "../features/work/Job1";
import Job2 from "../features/work/Job2";
import Job3 from "../features/work/Job3";
import LoadingScreen from "./LoadingScreenOriginal";
import Footer from "./FooterOriginal";
import { MenuDemo } from "../common/demo";

export default function MainPortfolio() {
  const {
    view,
    jobView,
    hoveredTab,
    isLoading,
    showContent,
    handleTabClick,
    handleJobSelect,
    handleLoadingComplete,
    getUnderlineClass,
    setHoveredTab
  } = useNavigation();

  useEffect(() => {
    // For development, skip loading screen if needed
    // setIsLoading(false);
    // setShowContent(true);
  }, []);

  const renderContent = () => {
    // First check if we're in work section and have a job selected
    if (view === 'work' && jobView) {
      switch (jobView) {
        case 'job1':
          return <Job1 />;
        case 'job2':
          return <Job2 />;
        case 'job3':
          return <Job3 />;
        default:
          return <WorkPage onJobSelect={handleJobSelect} />;
      }
    }
    
    // Otherwise render based on main view
    switch (view) {
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'work':
        return <WorkPage onJobSelect={handleJobSelect} />;
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