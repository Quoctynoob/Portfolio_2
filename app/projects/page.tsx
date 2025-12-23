"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, type Project, type CategoryType } from '@/data/projectsData';
import { CasualButton } from '@/components/ui/casual-button';
import { FiGithub } from 'react-icons/fi';
import { TbHandClick } from "react-icons/tb";
import { SquareArrowOutUpRight } from 'lucide-react';

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
        className="absolute z-0 h-7 rounded-full bg-subtle md:h-12"
      />
    </ul>
  );
};

const ProjectsPage = () => {
  const router = useRouter();
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
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl font-noto">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects<span className='text-subtle'>.</span></h1>
      
      {/* Navigation Header */}
      <div className="flex justify-center mb-12 text-darkCharcoal">
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
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="flex flex-col items-left"
              >
                {/* Project image block with hover effect - clickable if slug exists */}
                <div
                  className={`relative w-full h-64 rounded-lg bg-project-bg overflow-hidden mb-4 border-2 border-project-border project-image-container p-4 ${
                    project.slug ? 'cursor-pointer transition-shadow duration-300' : ''
                  }`}
                  onClick={() => project.slug && router.push(`/projects/${project.slug}`)}
                >
                  {/* Click indicator for first project only */}
                  {index === 0 && project.slug && (
                    <motion.div
                      className="absolute bottom-6 right-10 z-20 -rotate-12"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <TbHandClick className="w-8 h-8 text-darkCharcoal fill-white" />
                    </motion.div>
                  )}

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
                              <span className="text-xs text-darkCharcoal font-light">{statusInfo.text}</span>
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
                  <h3 className="text-xl font-medium">{project.name}</h3>
                  
                  {/* Links moved next to title */}
                  <div className="flex space-x-2">
                    {project.github && (
                      CasualButton({
                        label: <FiGithub className="w-3 h-3 text-darkCharcoal" />,
                        onClick: () => window.open(project.github, '_blank'),
                      })
                    )}
                    {project.website && (
                      CasualButton({
                        label: <SquareArrowOutUpRight className="w-3 h-3 text-darkCharcoal" />,
                        onClick: () => window.open(project.website, '_blank'),
                      })
                    )}
                  </div>
                </div>
                
                {/* Project description */}
                <p className="text-left font-light text-darkCharcoal mb-2 w-full">{project.description}</p>
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
          <p className="text-xl text-darkCharcoal">No projects found</p>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsPage;