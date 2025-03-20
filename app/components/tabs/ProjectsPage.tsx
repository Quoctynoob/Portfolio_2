"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define project type
type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  github: string;
  website?: string;
  category: ('completed' | 'ongoing' | 'personal' | 'academic')[];
};

// Sample projects data (you can replace with your actual projects)
const projectsData: Project[] = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "Personal portfolio website built with Next.js and TailwindCSS",
    image: "/projects/placeholder.jpg",
    github: "https://github.com/yourusername/portfolio",
    website: "https://yourwebsite.com",
    category: ["completed", "personal"]
  },
  {
    id: 2,
    name: "E-commerce Platform",
    description: "Full-stack e-commerce application with user authentication and payment processing",
    image: "/projects/placeholder.jpg",
    github: "https://github.com/yourusername/ecommerce",
    website: "https://your-ecommerce.com",
    category: ["ongoing", "personal"]
  },
  {
    id: 3,
    name: "Machine Learning Research",
    description: "Research project on neural networks for image classification",
    image: "/projects/placeholder.jpg",
    github: "https://github.com/yourusername/ml-research",
    category: ["completed", "academic"]
  },
  {
    id: 4,
    name: "Mobile App",
    description: "Cross-platform mobile application built with React Native",
    image: "/projects/placeholder.jpg",
    github: "https://github.com/yourusername/mobile-app",
    website: "https://app-store-link.com",
    category: ["ongoing", "personal"]
  },
];

const ProjectsPage = () => {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  // Filter projects based on active filter
  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === "all") return true;
    return project.category.includes(activeFilter as any);
  });

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      
      {/* Filter tabs */}
      <div className="flex justify-center mb-12 overflow-x-auto">
        <div className="flex space-x-2 sm:space-x-4 bg-mintGreen/30 backdrop-blur-md px-4 py-2 rounded-full">
          {["all", "completed", "ongoing", "personal", "academic"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-teal-500 text-white shadow-md filter-active"
                  : "text-darkMint hover:bg-teal-500/20"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="flex flex-col items-center project-card">
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
            
            {/* Project details (outside the block) */}
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-center text-gray-700 mb-4">{project.description}</p>
            
            {/* Links */}
            <div className="flex space-x-4 mt-auto">
              <Link 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-teal-600/70 hover:bg-teal-600 text-white rounded-full transition-colors duration-300 project-link"
              >
                <Image src="/icons/github.svg" width={20} height={20} alt="GitHub" className="mr-2 filter invert" />
                GitHub
              </Link>
              
              {project.website && (
                <Link 
                  href={project.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-mintGreen hover:bg-mintGreen/80 text-darkMint rounded-full transition-colors duration-300 project-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  View Site
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Show message if no projects match the filter */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No projects found for this filter.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;