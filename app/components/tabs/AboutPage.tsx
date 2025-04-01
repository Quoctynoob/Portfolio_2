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
          <div className="relative w-[80vh] h-[50vh] md:h-[60vh] overflow-hidden rounded-3xl">
            <Image 
              src="/projects/leon_pics_2.jpg" 
              alt="Quoc Le" 
              fill 
              className="object-cover object-center" 
              priority
            />
          </div>
        </div>
        
        {/* Right side - Text content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-10 about-item-2">
          <h2 className="text-3xl md:text-4xl font-bold text-darkMint mb-6 font-noto"></h2>
          <div className="prose text-darkMint/90 max-w-none">
            <p className="mb-4 text-lg font-noto">
              <b>Hi! I'm Quoc Le, but you can call me Leon.</b>
              <br /><br />
              Welcome to my site, where I showcase my career journey, my ongoing or imperfect project, and many other things
              I'm exploring with.
              <br /><br />
              I'm a Computer Science and Geomatics student at the University of Guelph with a passion for building 
              clean, useful, and creative software. I'm especially into game development and full-stack apps.
              <br /><br />
              Right now, I'm working on the mobile version of frijio, a smart food management app I co-built to help reduce waste 
              and make grocery planning easier.
              <br /><br />
              When I'm not building, I like playing badminton, tennis, climbing TFT ladder, or working on new project ideas.
              <br /><br />
              I'm currently on the lookout for opportunities where I can grow, contribute, and work with inspiring people.
            </p>
            <p className="mb-4 text-lg">
              
            </p>
            <p className="mb-4 text-lg">
              
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;


/*
<section 
ref={sectionRef} 
className="px-6 md:px-10 py-16 bg-lightGreen"
>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  
  <div className={`bg-mintCream p-6 rounded-lg shadow-md transition-all duration-700 transform block-hover ${blocksVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
       style={{ transitionDelay: '100ms' }}>
    <h3 className="text-xl font-bold text-teal-600 mb-3">Education</h3>
    <p className="text-darkMint/80">
      Your education details here...
    </p>
  </div>

 
  <div className={`p-6 rounded-lg transition-all duration-700 transform block-hover ${blocksVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
       style={{ transitionDelay: '200ms' }}>
    <h3 className="text-xl font-bold text-teal-600 mb-3">Skills</h3>
    <p className="text-darkMint/80">
      Your skills details here...
    </p>
  </div>

  
  <div className={` p-6 rounded-lg shadow-md transition-all duration-700 transform block-hover ${blocksVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
       style={{ transitionDelay: '400ms' }}>
    <h3 className="text-xl font-bold text-teal-600 mb-3">Interests</h3>
    <p className="text-darkMint/80">
      Your interests details here...
    </p>
  </div>
</div>
</section>*/