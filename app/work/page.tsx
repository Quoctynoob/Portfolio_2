"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { workExperiences, type WorkExperience } from '@/data/workExperiences';

// Timeline Entry Component
const TimelineEntry = ({
  experience,
  isHovered,
  onHover,
  onLeave,
  onClick
}: {
  experience: WorkExperience;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}) => {
  return (
    <div
      className={`relative mb-12 ${experience.slug ? 'cursor-pointer' : ''}`}
      onMouseEnter={experience.slug ? onHover : undefined}
      onMouseLeave={experience.slug ? onLeave : undefined}
      onClick={experience.slug ? onClick : undefined}
    >
      {/* Left side timeline with dot */}
      <div className="flex items-start">
        {/* Left column with timeline */}

        {/* Job information column */}
        <div className="flex-grow group">
          {/* Period */}
          <div className="text-sm text-gray-500 mb-1 font-noto">{experience.period}</div>

          {/* Company name (larger) */}
          <div className="text-xl font-bold text-darkMint mb-1 group-hover:text-teal-600 transition-colors duration-300 font-noto">{experience.company}</div>

          {/* Position (smaller) */}
          {experience.position && (
            <div className="text-base text-darkMint/80 mb-2">{experience.position}</div>
          )}
        </div>

        {/* Arrow on the right - only show if slug exists */}
        {experience.slug && (
          <div className="ml-4 pt-4">
            <motion.div
              animate={isHovered ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-6 flex items-center justify-center text-darkMint"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function WorkPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);

  useEffect(() => {
    // Trigger animation on component mount
    setIsVisible(true);
  }, []);

  const handleJobClick = (slug: string) => {
    router.push(`/work/${slug}`);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl font-noto">
      <h2 className={`text-4xl font-bold mb-12 text-center transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        Experience<span className='text-teal-500'>.</span>
      </h2>
      
      <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {workExperiences.map((experience) => (
          <TimelineEntry
            key={experience.id}
            experience={experience}
            isHovered={hoveredJob === experience.id}
            onHover={() => setHoveredJob(experience.id)}
            onLeave={() => setHoveredJob(null)}
            onClick={() => experience.slug && handleJobClick(experience.slug)}
          />
        ))}
      </div>
      
    </div>
  );
}