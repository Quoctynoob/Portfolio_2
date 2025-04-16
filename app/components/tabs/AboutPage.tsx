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
          
          {/* Right content section */}
          <div className="md:col-span-5 space-y-8">
            {/* Welcome text section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className=" rounded-xl relative h-[60vh] flex items-center"
            >
              <div className="flex flex-col h-full py-12 px-8 w-full">
                <div className="self-start">
                  <h2 className="text-4xl md:text-7xl lg:text-7xl font-noto font-bold text-darkMint">
                    Thanks
                  </h2>
                </div>
                
                <div className="self-start">
                  <h2 className="text-4xl md:text-7xl lg:text-7xl font-noto font-bold text-darkMint">
                    for
                  </h2>
                </div>
                
                <div className="self-start">
                  <h2 className="text-4xl md:text-7xl lg:text-7xl font-noto font-bold text-darkMint">
                    stopping
                  </h2>
                </div>

                <div className="self-start">
                  <h2 className="text-4xl md:text-7xl lg:text-7xl font-noto font-bold text-darkMint">
                    by!
                  </h2>
                </div>
              </div>
              
              {/* Curved arrow - using your actual arrow image */}
              <div className="absolute -bottom-16 right-8">
                <Image 
                  src="/image/arrow_1.png" 
                  alt="Curved arrow" 
                  width={120} 
                  height={120} 
                  className="object-contain"
                />
              </div>
            </motion.div>
            
            {/* Space for future content */}
            <div className="h-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;