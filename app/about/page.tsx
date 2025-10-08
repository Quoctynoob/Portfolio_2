"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  SiCss,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiGit,
  SiExpress,
  SiC,
  SiCanva,
  SiFirebase,
  SiPython,
  SiSwift,
  SiNextdotjs,
} from '@icons-pack/react-simple-icons';

const AboutPage = () => {

  // Icon component with hover tooltip
  interface IconWithTooltipProps {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }

  const IconWithTooltip: React.FC<IconWithTooltipProps> = ({ name, icon: Icon }) => {
    const [hovered, setHovered] = useState(false);
    
    return (
      <motion.div
        className="relative flex flex-col items-center p-3 cursor-pointer"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.2 }
        }}
      >
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -8 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-2 px-2 py-1 bg-lightYellow text-black text-xs rounded-md whitespace-nowrap border border-darkMint"
          >
            {name}
          </motion.div>
        )}
        <div className="text-darkMint mb-2">
          <Icon className="w-8 h-8" />
        </div>
      </motion.div>
    );
  };

  // Skill categories with their respective icons
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss },
        { name: "Sass", icon: SiSass },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "Docker", icon: SiDocker },
        { name: "C", icon: SiC },
        { name: "Python", icon: SiPython },
        { name: "Firebase", icon: SiFirebase },
        { name: "Swift", icon: SiSwift },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "Figma", icon: SiFigma },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-lightGreen px-4 md:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl font-noto font-bold mb-2 text-center">
            About<span className="text-teal-500">.</span>
          </h1>
        </div>

        {/* Bio Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Profile Image with Overlay */}
            <div className="w-full md:w-1/3">
              <div className="relative h-80 w-full overflow-hidden rounded-xl">
                <Image 
                  src="/projects/leon_pics_2.jpg" 
                  alt="Quoc Le" 
                  fill 
                  className="object-cover object-center"
                  priority
                />
                {/* Overlay text caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-mint backdrop-blur-xs">
                  <p className="text-white text-base italic font-noto">
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bio Text */}
            <div className="w-full md:w-2/3">
              <div className="p-4 rounded-xl">
                <h2 className='text-2xl md:text-3xl font-noto font-bold text-darkMint mb-6'>
                  Quoc Le
                </h2>
                <p className="text-md md:text-md mb-8 text-darkMint/90">
                  Thanks for stopping by! I'm a software developer who likes exploring with all kinds of tech. I've worked 
                  on web app, mobile, game development and pretty much anything that seems interesting at the moment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className='text-2xl font-noto font-bold mb-6 text-darkMint'>
            Educations
          </h2>
          <div>
            <p className='text-md md:text-md mb-4 text-darkMint/90'>
              <span className='font-noto font-semibold'>Bachelor of Computing in Computer Science</span> -
              University of Guelph (2023 - 2028)
            </p>
          </div>
        </div>
            
        {/* Skills section - Keep motion for interactive tooltips */}
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-noto font-bold mb-6 text-darkMint">
            Skills
          </h2>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-noto font-semibold mb-4 text-darkMint">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <IconWithTooltip key={skillIndex} name={skill.name} icon={skill.icon} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;


/*<h2 className="text-2xl font-noto font-bold mb-6 text-darkMint">
            Fun Facts
          </h2>
          <p className='font-noto text-darkMint/90 font-semibold text-xl mb-4'>
            My Current Age: <AgeCalculator />
          </p>

          <p className='font-noto text-darkMint/90 font-semibold text-xl mb-4'>
            Favorite sport:
            🎾 and 🏸
          </p>
          
          
          <p className='text-md md:text-md mb-4 text-darkMint/90'>
                  Currently:
                </p>

                <p className="text-md md:text-md mb-8 text-darkMint/90">
                  Working on <span className='underline'>frijio</span>
                </p>
          */ 