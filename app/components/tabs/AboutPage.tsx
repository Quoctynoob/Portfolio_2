"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';


const AboutPage = () => {
  // Ref for scrolling sections
  const sectionRef = useRef<HTMLDivElement>(null);
  // State to track if blocks are visible
  const [blocksVisible, setBlocksVisible] = useState(false);

  // Function to handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      // Get position of the blocks section
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      // If section is in viewport, make blocks visible
      if (sectionTop < window.innerHeight * 0.75) {
        setBlocksVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Check initial position
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Top half-and-half section */}
      <section className="flex flex-col md:flex-row min-h-[80vh] p-6 md:p-10">
        {/* Left side - Profile Image */}
        <div className="w-full md:w-1/2 flex justify-start items-center p-0 md:pl-0 about-item-1">
          <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden rounded-3xl">
            <Image 
              src="/projects/leon_pics.jpg" 
              alt="Quoc Le" 
              fill 
              className="object-cover object-center" 
              priority
            />
          </div>
        </div>
        
        {/* Right side - Text content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-10 about-item-2">
          <h2 className="text-3xl md:text-4xl font-bold text-darkMint mb-6 font-noto">About Me</h2>
          <div className="prose text-darkMint/90 max-w-none">
            <p className="mb-4 text-lg">
              HI! I'm Quoc Le, an aspiring software developer based in Toronto, Canada.
            </p>
            <p className="mb-4 text-lg">
              
            </p>
            <p className="mb-4 text-lg">
              
            </p>
          </div>
        </div>
      </section>

      {/* Animation Video Section */}
      <section className="px-6 md:px-10 py-16 about-item-2">
        <h3 className="text-2xl md:text-3xl font-bold text-darkMint mb-6 font-noto text-center">My Animation</h3>
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            
          </div>
        </div>
      </section>

      {/* Four blocks section */}
      <section 
        ref={sectionRef} 
        className="px-6 md:px-10 py-16 bg-mintGreen/20"
      >
        <div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Block 1 */}
          <div className={`bg-mintCream p-6 rounded-lg shadow-md transition-all duration-700 transform block-hover ${blocksVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
               style={{ transitionDelay: '100ms' }}>
            <h3 className="text-xl font-bold text-teal-600 mb-3">Education</h3>
            <p className="text-darkMint/80">
              Your education details here...
            </p>
          </div>

          {/* Block 2 */}
          <div className={`p-6 rounded-lg transition-all duration-700 transform block-hover ${blocksVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
               style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-bold text-teal-600 mb-3">Skills</h3>
            <p className="text-darkMint/80">
              Your skills details here...
            </p>
          </div>

          {/* Block 3 */}
          <div className={` p-6 rounded-lg shadow-md transition-all duration-700 transform block-hover ${blocksVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
               style={{ transitionDelay: '300ms' }}>
            <h3 className="text-xl font-bold text-teal-600 mb-3">Experience</h3>
            <p className="text-darkMint/80">
              Your experience details here...
            </p>
          </div>

          {/* Block 4 */}
          <div className={` p-6 rounded-lg shadow-md transition-all duration-700 transform block-hover ${blocksVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
               style={{ transitionDelay: '400ms' }}>
            <h3 className="text-xl font-bold text-teal-600 mb-3">Interests</h3>
            <p className="text-darkMint/80">
              Your interests details here...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;