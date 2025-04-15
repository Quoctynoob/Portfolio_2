"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-lightGreen px-4 md:px-8 py-12">
      {/* Magazine-style editorial layout */}
      <div className="max-w-6xl mx-auto">
        {/* Top section with editorial header */}
        <div className="mb-16">
          {/* Magazine-style heading with large typography */}
            <h1 className="text-4xl font-noto font-bold mb-8 text-center">
              About<span className="text-teal-500">.</span>
            </h1>
        </div>

        {/* Main content in magazine layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
          {/* Left sidebar with image */}
          <motion.div 
            className="md:col-span-5 md:sticky md:top-24 self-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative h-[60vh] overflow-hidden rounded-xl">
                <Image 
                  src="/projects/leon_pics_2.jpg" 
                  alt="Quoc Le" 
                  fill 
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Quote overlay */}
              <div className="absolute bottom-6 left-0 right-0 p-4 bg-darkMint/70 backdrop-blur-sm">
                <p className="text-white text-lg italic font-noto">
                  "Hi! I'm Quoc Le, but you can call me Leon."
                </p>
              </div>
            </div>
        
          </motion.div>
          
          <div className="md:col-span-7 space-y-12">
          Welcome to my site, where I showcase my career journey, my ongoing or imperfect project, and many other things I'm exploring with.

I'm a Computer Science and Geomatics student at the University of Guelph with a passion for building clean, useful, and creative software. I'm especially into game development and full-stack apps.

Right now, I'm working on the mobile version of frijio, a smart food management app I co-built to help reduce waste and make grocery planning easier.

When I'm not building, I like playing badminton, tennis, climbing TFT ladder, or working on new project ideas.

I'm currently on the lookout for opportunities where I can grow, contribute, and work with inspiring people
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;