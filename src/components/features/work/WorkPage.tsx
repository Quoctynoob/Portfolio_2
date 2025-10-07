"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Work experience type definition
type WorkExperience = {
  id: number;
  period: string;
  company: string;
  position: string;
};

// Sample work experiences
const workExperiences: WorkExperience[] = [
  {
    id: 1,
    period: "June 2025 - Present",
    company: "Abinsula",
    position: "Software Developer Intern",
  },

  {
    id: 2,
    period: "May 2024 - Aug 2024",
    company: "Fracht Group",
    position: "IT Support Developer",
  },

  {
    id: 3,
    period: "Sep 2023 - April 2025",
    company: "Google Developer Student Club",
    position: "Staff Member",

  },

  {
    id: 4,
    period: "Oct 2022 - Jan 2023",
    company: "Milano Coffee",
    position: "Cashier",
  },

];

// Props for the WorkPage component
interface WorkPageProps {
  onJobSelect?: (jobView: string) => void;
}

// Timeline Entry Component
const TimelineEntry = ({
  experience
}: {
  experience: WorkExperience;
}) => {
  return (
    <div className="relative mb-12">
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

      </div>
    </div>
  );
};

const WorkPage: React.FC<WorkPageProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setIsVisible(true);
  }, []);

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
          />
        ))}
      </div>
      
      {/* Add this section when actual content is available */}
      {workExperiences.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Work experience will be added soon</p>
        </div>
      )}
    </div>
  );
};

export default WorkPage;