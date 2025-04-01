"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Define project type
type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  github: string;
  website?: string;
  category: ('completed' | 'ongoing' | 'side project' | 'academic')[];
};

// Define category type to match the potential filter values
type CategoryType = 'all' | 'completed' | 'ongoing' | 'side project' | 'academic';

// NavHeader component
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
    opacity: 0,
  });

  const filters: CategoryType[] = ["all", "completed", "ongoing", "side project", "academic"];

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {filters.map((filter) => (
        <Tab 
          key={filter} 
          setPosition={setPosition} 
          isActive={activeFilter === filter}
          onClick={() => setActiveFilter(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{
    left: number;
    width: number;
    opacity: number;
  }>>;
  isActive: boolean;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      onClick={onClick}
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-darkMint md:px-5 md:py-3 md:text-base ${
        isActive ? "font-bold" : ""
      }`}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { 
  position: {
    left: number;
    width: number;
    opacity: number;
  }; 
}) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-teal-500 md:h-12"
    />
  );
};

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    name: "Frijio",
    description: "A household management app for tracking inventory, splitting expenses, and suggesting AI-powered recipes.",
    image: "/projects/Frijio.PNG",
    github: "https://github.com/megdcosta/frijio",
    website: "https://frijio.vercel.app",
    category: ["completed", "side project"]
  },
  {
    id: 2,
    name: "Frijio mobile",
    description: "IOS version of Frijio, making it easier to manage your household on the go.",
    image: "/projects/frij_mobile.png",
    github: "https://github.com/Quoctynoob",
    website: "https://github.com/Quoctynoob",
    category: ["ongoing", "side project"]
  },
  {
    id: 3,
    name: "Convoco",
    description: "A real-time debate platform with AI moderation, fact-checking, translations, and rewards.",
    image: "/projects/Convoco.png",
    github: "https://github.com/Quoctynoob/Convoco",
    website: "https://convoco.vercel.app/debates",
    category: ["completed", "side project"]
  },
  {
    id: 4,
    name: "Tennis Locator",
    description: "Research project on neural networks for image classification",
    image: "/projects/tennisproject.jpg",
    github: "https://github.com/Quoctynoob/Tennis_Locator",
    website: "https://tennis-locator.vercel.app/",
    category: ["ongoing", "side project"]
  },
  {
    id: 5,
    name: "eAssetTracker",
    description: "Cross-platform mobile application built with React Native",
    image: "/projects/eTracker.png",
    github: "https://github.com/Quoctynoob",
    website: "https://stock-portfolio-management-lac.vercel.app",
    category: ["ongoing", "side project"]
  },
  {
    id: 6,
    name: "Online Menu",
    description: "Simple online and responsive menu to assist with local business",
    image: "/projects/restaurantproject.jpg",
    github: "https://github.com/Quoctynoob/Me-s-restaurant",
    website: "https://quoctynoob.github.io/Me-s-restaurant/",
    category: ["completed", "side project"]
  },
  {
    id: 7,
    name: "Car Management System",
    description: "Simple command-line application to manage car inventory",
    image: "/projects/Car_management.png",
    github: "https://github.com/Quoctynoob/Car-Management-System",
    category: ["completed", "academic"]
  },
  {
    id: 8,
    name: "Todo List",
    description: "Simple Todo-list",
    image: "/projects/firebaseproject.jpg",
    github: "https://github.com/Quoctynoob/Todo-List",
    website: "https://quoctynoob.github.io/Todo-List/",
    category: ["completed", "academic"]
  },
  {
    id: 9,
    name: "Joke/Weather Generator",
    description: "Simple Joke/Weather Generator using API",
    image: "/projects/jokeGenerator.jpg",
    github: "https://github.com/Quoctynoob/Joke-Weather-Generator",
    website: "https://quoctynoob.github.io/Joke-Weather-Generator/",
    category: ["completed", "academic"]
  },
];

const ProjectsPage = () => {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState<CategoryType>("all");
  
  // Filter projects based on active filter
  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === "all") return true;
    return project.category.includes(activeFilter as 'completed' | 'ongoing' | 'side project' | 'academic');
  });

  // Function to format category names
  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl font-noto">
      <p className="text-4xl font-bold mb-8 text-center">My Projects</p>
      
      {/* New Navigation Header */}
      <div className="flex justify-center mb-12">
        <NavHeader activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="flex flex-col items-left project-card">
            {/* Project image block with hover effect */}
            <div className="relative w-full h-64 rounded-lg bg-mintGreen/50 overflow-hidden mb-4 shadow-md project-image-container p-4">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover max-w-[85%] max-h-[85%] project-image"
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
                  className="flex items-center justify-center w-8 h-8 hover:bg-teal-600 text-white rounded-full transition-colors duration-300"
                  aria-label={`GitHub repo for ${project.name}`}
                >
                  <Image src="/icons/github.svg" width={16} height={16} alt="GitHub" className="filter invert" />
                </Link>
                
                {project.website && (
                  <Link 
                    href={project.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 hover:bg-mintGreen/80 text-darkMint rounded-full transition-colors duration-300"
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
            
            {/* Project categories */}
            <div className="flex flex-wrap gap-2 mt-1 w-full">
              {project.category.map((cat, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full"
                >
                  {formatCategory(cat)}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Show message if no projects match the filter */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No projects found</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;