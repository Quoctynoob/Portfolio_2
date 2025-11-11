"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { skillCategories } from '@/data/aboutData';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { TextEffect } from '@/components/ui/text-effect';

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
            className="absolute -top-2 px-2 py-1 bg-subtle text-darkCharcoal text-xs rounded-md whitespace-nowrap border border-darkCharcoal"
          >
            {name}
          </motion.div>
        )}
        <div className="text-darkSubtle mb-2">
          <Icon className="w-8 h-8" />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-lightPeach px-4 md:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-inter font-bold mb-2 text-center">
            About<span className="text-subtle">.</span>
          </h1>
        </div>

        {/* Bio Section */}
        <div className="mb-16" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Profile Image Carousel */}
            <div className="w-full md:w-1/3">
              <Carousel
                className="w-full"
                /*plugins={[
                  Autoplay({
                    delay: 10000,
                  }),
                ]}*/
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative h-80 w-full overflow-hidden rounded-xl">
                      <Image src="/image/leon_linkedin.JPG" alt="Quoc Le" fill className="object-cover object-center" priority />
                    </div>
                  </CarouselItem>

                   <CarouselItem>
                    <div className="relative h-80 w-full overflow-hidden rounded-xl">
                      <Image src="/image/leon_niagara.jpg" alt="Quoc Le" fill className="object-cover object-center" priority />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="relative h-80 w-full overflow-hidden rounded-xl">
                      <Image src="/image/leon_hack.jpg" alt="Quoc Le" fill className="object-cover object-center" priority />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="relative h-80 w-full overflow-hidden rounded-xl">
                      <Image src="/image/leon_friends_hack.jpg" alt="Quoc Le" fill className="object-cover object-center" priority />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="relative h-80 w-full overflow-hidden rounded-xl">
                      <Image src="/image/leon_tennis.JPG" alt="Quoc Le" fill className="object-cover object-center" priority />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="relative h-80 w-full overflow-hidden rounded-xl">
                      <Image src="/image/leon_working.jpg" alt="Quoc Le" fill className="object-cover object-center" priority />
                    </div>
                  </CarouselItem>

                  {/*<CarouselItem>
                    <div className="relative h-80 w-full overflow-hidden rounded-xl">
                      <Image src="/image/leon_baby.jpg" alt="Quoc Le" fill className="object-cover object-center" priority />
                    </div>
                  </CarouselItem>*/}

                </CarouselContent>
                <CarouselPrevious className="-left-12" />
                <CarouselNext className="-right-12" />
              </Carousel>
            </div>
            
            {/* Bio Text */}
            <div className="w-full md:w-2/3 pl-3">
              <div className="p-4 rounded-xl">
                <TextEffect per="word" delay={0} preset='fade' className='text-xl md:text-2xl font-inter text-darkCharcoal mb-6'>
                  Hi, welcome to my page!
                </TextEffect>
          
                <TextEffect  per="word" preset='fade' delay={0.7} className="text-md md:text-md mb-8 text-darkCharcoal font-inter">
                   I like building things with code, and lately I've been getting more into embedded systems and IoT projects.
                  I find it very fun and interesting to combine my full-stack development skills with embedded systems to 
                  bridge software and hardware.
                  Right now I'm working on a fridge management app with a built-in camera. You can check it out
                  
                  Outside of work, I'm pretty into tennis, tbh I could honestly play at any time lol. 
                  Recently I've picked up video editing, and I also enjoy travelling and capturing the scenery 
                  I see along the way. Anyways, thanks for stopping by and feel free to look around!

                </TextEffect>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12" style={{ animationDelay: '0.3s' }}>
          <h2 className='text-2xl font-inter mb-6 text-darkCharcoal'>
            Education
          </h2>
          <div className='pl-3'>
            <p className='text-md md:text-md mb-2 text-darkCharcoal font-inter'>
              Bachelor of Computing in Computer Science - University of Guelph (2023 - Present)
            </p>
            <ul className='list-disc list-inside text-md text-darkCharcoal font-inter ml-4 space-y-1'>
              <li>Major in Computer Science</li>
              <li>Minor in Geomatics</li>
            </ul>
          </div>
        </div>
            
        {/* Skills section - Keep motion for interactive tooltips */}
        <div className="" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-inter font-bold mb-6 text-darkCharcoal">
            Skills
          </h2>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-inter font-semibold mb-4 text-darkCharcoal">
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


/*<h2 className="text-2xl font-noto font-bold mb-6 text-">
            Fun Facts
          </h2>
          <p className='font-noto text-/90 font-semibold text-xl mb-4'>
            My Current Age: <AgeCalculator />
          </p>
          */ 