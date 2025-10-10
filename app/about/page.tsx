"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { skillCategories } from '@/data/aboutData';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

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
                      <Image src="/image/leon_tennis.jpg" alt="Quoc Le" fill className="object-cover object-center" priority />
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
              Bachelor of Computing in Computer Science - University of Guelph (2023 - Present)
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