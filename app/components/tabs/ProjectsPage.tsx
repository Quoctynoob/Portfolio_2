"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Define project type with both categories and languages
type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  github: string;
  website?: string;
  category: ('completed' | 'ongoing' | 'side projects' | 'academic')[];
  languages: string[]; // Added languages field
  isVertical?: boolean;
};

// Define category type to match the potential filter values
type CategoryType = 'all' | 'completed' | 'ongoing' | 'side projects' | 'academic';

// NavHeader component with fixed state updates
const NavHeader = ({ 
  activeFilter, 
  setActiveFilter 
}: { 
  activeFilter: CategoryType; 
  setActiveFilter: (filter: CategoryType) => void;
}) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 1, // Start with visible pill
  });
  
  const filters: CategoryType[] = ["all", "completed", "ongoing", "side projects", "academic"];
  const tabsRef = useRef<Map<string, HTMLLIElement>>(new Map());
  
  // Function to update position to active filter
  const updatePositionToActive = () => {
    const activeTab = tabsRef.current.get(activeFilter);
    if (activeTab) {
      const { width } = activeTab.getBoundingClientRect();
      setPosition({
        width,
        opacity: 1,
        left: activeTab.offsetLeft,
      });
    }
  };
  
  // Initialize/update position when active filter changes
  useEffect(() => {
    // Wait until next render cycle when refs should be populated
    const timer = setTimeout(() => {
      updatePositionToActive();
    }, 0);
    
    return () => clearTimeout(timer);
  }, [activeFilter]);
  
  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full /50 p-1"
      onMouseLeave={updatePositionToActive}
    >
      {filters.map((filter) => (
        <li
          key={filter}
          ref={(el) => {
            if (el) tabsRef.current.set(filter, el);
          }}
          onMouseEnter={() => {
            const tab = tabsRef.current.get(filter);
            if (tab) {
              const { width } = tab.getBoundingClientRect();
              setPosition({
                width,
                opacity: 1,
                left: tab.offsetLeft,
              });
            }
          }}
          onClick={() => setActiveFilter(filter)}
          className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-3 md:text-base ${
            activeFilter === filter 
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </li>
      ))}
      <motion.li
        animate={position}
        initial={false}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute z-0 h-7 rounded-full bg-green-200 md:h-12"
      />
    </ul>
  );
};

// Sample projects data with languages
const projectsData: Project[] = [
  {
    id: 1,
    name: "frijio",
    description: "A household management app for tracking inventory, splitting expenses, and suggesting AI-powered recipes.",
    image: "/projects/Frijio.PNG",
    github: "https://github.com/megdcosta/frijio",
    website: "https://frijio.vercel.app",
    category: ["completed", "side projects"],
    languages: ["React", "TypeScript", "Node.js", "Firestore", "OpenAI"]
  },
  {
    id: 2,
    name: "frijio mobile",
    description: "IOS version of frijio, making it easier to manage your household on the go.",
    image: "/projects/frij_mobile.png",
    github: "https://github.com/Quoctynoob",
    website: "https://github.com/Quoctynoob",
    category: ["ongoing", "side projects"],
    languages: ["Swift", "Supabase", "OpenAI"],
    isVertical: true
  },
  {
    id: 3,
    name: "Convoco",
    description: "A real-time debate platform with AI moderation, fact-checking, translations, and rewards.",
    image: "/projects/Convoco.png",
    github: "https://github.com/Quoctynoob/Convoco",
    website: "https://convoco.vercel.app/debates",
    category: ["completed", "side projects"],
    languages: ["React", "TypeScript", "Node.js", "Firestore"]
  },
  {
    id: 4,
    name: "Tennis Locator",
    description: "A full-stack app for real-time tennis court searches",
    image: "/projects/tennisproject.jpg",
    github: "https://github.com/Quoctynoob/Tennis_Locator",
    website: "https://tennis-locator.vercel.app/",
    category: ["ongoing", "side projects"],
    languages: ["React", "TypeScript", "Firestore"]
  },
  {
    id: 5,
    name: "eAssetTracker",
    description: "App to help track and manage your assets valuable for trading and investing.",
    image: "/projects/eTracker.png",
    github: "https://github.com/Quoctynoob",
    website: "https://stock-portfolio-management-lac.vercel.app",
    category: ["ongoing", "side projects"],
    languages: ["React", "TypeScript", "PostgreSQL"]
  },
  {
    id: 6,
    name: "Online Menu",
    description: "Simple online and responsive menu to assist with local business",
    image: "/projects/restaurantproject.jpg",
    github: "https://github.com/Quoctynoob/Me-s-restaurant",
    website: "https://quoctynoob.github.io/Me-s-restaurant/",
    category: ["completed", "side projects"],
    languages: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 7,
    name: "Car Management System",
    description: "Simple command-line application to manage car inventory",
    image: "/projects/Car_management.png",
    github: "https://github.com/Quoctynoob/Car-Management-System",
    category: ["completed", "academic"],
    languages: ["C"]
  },
  {
    id: 8,
    name: "Todo List",
    description: "Simple Todo-list",
    image: "/projects/firebaseproject.jpg",
    github: "https://github.com/Quoctynoob/Todo-List",
    website: "https://quoctynoob.github.io/Todo-List/",
    category: ["completed", "academic"],
    languages: ["JavaScript", "Firebase", "HTML", "CSS"]
  },
  {
    id: 9,
    name: "Joke/Weather Generator",
    description: "Simple Joke/Weather Generator using API",
    image: "/projects/jokeGenerator.jpg",
    github: "https://github.com/Quoctynoob/Joke-Weather-Generator",
    website: "https://quoctynoob.github.io/Joke-Weather-Generator/",
    category: ["completed", "academic"],
    languages: ["JavaScript", "HTML", "CSS"]
  },
];

const ProjectsPage = () => {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState<CategoryType>("all");
  // Animation state
  const [isVisible, setIsVisible] = useState(true);
  
  // Filter projects based on active filter
  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === "all") return true;
    return project.category.includes(activeFilter as 'completed' | 'ongoing' | 'side projects' | 'academic');
  });

  // Function to format category names
  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  // Function to get appropriate color class for each language
  const getLanguageColor = (lang: string) => {
    switch(lang.toLowerCase()) {
      case 'react':
        return 'bg-blue-100 text-blue-800';
      case 'typescript':
        return 'bg-blue-100 text-blue-800';
      case 'javascript':
        return 'bg-yellow-100 text-yellow-800';
      case 'node.js':
        return 'bg-green-100 text-green-800';
      case 'swift':
        return 'bg-orange-100 text-orange-800';
      case 'firebase':
        return 'bg-yellow-100 text-yellow-800';
      case 'c':
        return 'bg-gray-100 text-gray-800';
      case 'python':
        return 'bg-blue-100 text-blue-800';
      case 'html':
      case 'css':
        return 'bg-orange-100 text-orange-800';
      case 'mongodb':
        return 'bg-green-100 text-green-800';
      case 'postgresql':
        return 'bg-blue-100 text-blue-800';
      case 'openai':
        return 'bg-white text-black';
      case 'supabase':
        return 'bg-darkMint text-mintCream';
      default:
        return 'bg-teal-100 text-teal-800';
    }
  };

  // Function to get status icon and color (only for completed and ongoing)
  const getStatusIcon = (status: string) => {
    switch(status.toLowerCase()) {
      case 'completed':
        return {
          text: 'Completed',
          dot: 'bg-green-500',
        };
      case 'ongoing':
        return {
          text: 'Ongoing',
          dot: 'bg-yellow-500',
        };
      default:
        return null; // Don't show icons for other categories
    }
  };
  
  // Reset and trigger animation when filter changes
  useEffect(() => {
    const triggerAnimation = async () => {
      // Hide content
      setIsVisible(false);
      
      // Small delay to ensure animation runs
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Show content again
      setIsVisible(true);
    };
    
    triggerAnimation();
  }, [activeFilter]);

  // Container variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between children animations
      }
    }
  };
  
  // Item variants for Framer Motion
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl font-noto">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects<span className='text-teal-500'>.</span></h1>
      
      {/* Navigation Header */}
      <div className="flex justify-center mb-12">
        <NavHeader activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>
      
      {/* Projects grid with animations */}
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div 
            key={activeFilter}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id} 
                variants={itemVariants}
                className="flex flex-col items-left"
              >
                {/* Project image block with hover effect */}
                <div className="relative w-full h-64 rounded-lg bg-mintGreen/50 overflow-hidden mb-4 shadow-md project-image-container p-4">
                  {/* Status indicator in top right - only for completed and ongoing */}
                  {project.category.find(cat => cat === 'completed' || cat === 'ongoing') && (
                    <div className="absolute top-2 right-2 z-10">
                      {project.category
                        .filter(status => status === 'completed' || status === 'ongoing')
                        .slice(0, 1)
                        .map((status, index) => {
                          const statusInfo = getStatusIcon(status);
                          if (!statusInfo) return null;
                          return (
                            <div key={index} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
                              <span className="text-xs text-gray-700">{statusInfo.text}</span>
                              <div className={`w-2 h-2 rounded-full ${statusInfo.dot}`}></div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                  
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={500}
                      height={300}
                      className={`rounded-lg ${project.isVertical 
                        ? 'object-contain max-h-[90%] max-w-[50%]' 
                        : 'object-cover max-w-[85%] max-h-[85%]'} project-image`}
                    />
                  </div>
                </div>
                
                {/* Project header with title and links */}
                <div className="w-full flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  
                  {/* Links moved next to title */}
                  <div className="flex space-x-2">
                    <Link 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 hover:bg-teal-100 text-darkMint rounded-full transition-colors duration-300"
                      aria-label={`GitHub repo for ${project.name}`}
                    >
                      <Image src="/icons/github.svg" width={16} height={16} alt="GitHub" className="filter invert" />
                    </Link>
                    
                    {project.website && (
                      <Link 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 hover:bg-teal-100 text-black rounded-full transition-colors duration-300"
                        aria-label={`Live website for ${project.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
                
                {/* Project description */}
                <p className="text-left text-gray-700 mb-2 w-full">{project.description}</p>
                
                {/* Project languages - CHANGED FROM CATEGORIES */}
                <div className="flex flex-wrap gap-2 mt-1 w-full">
                  {project.languages.map((lang, index) => (
                    <span 
                      key={index} 
                      className={`text-xs px-2 py-1 rounded-full ${getLanguageColor(lang)}`}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Show message if no projects match the filter */}
      {filteredProjects.length === 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <p className="text-xl text-gray-600">No projects found</p>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsPage;