"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ResumeDownload from '../features/ResumeDownload';
import { VerticalCutReveal } from '../common/VerticalCutReveal';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4  font-inter">
      {/* First item*/}
      <div>
        <VerticalCutReveal
        splitBy="characters"
        staggerDuration={0.025}
        containerClassName='text-3xl md:text-6xl mb-2 font-inter items-center justify-center font-light'
        reverse={true}
        staggerFrom="first"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
          delay: 0.2,
        }}
      >
        {`Hi!`}
      </VerticalCutReveal>
      <VerticalCutReveal
        splitBy="characters"
        staggerDuration={0.025}
        containerClassName='text-3xl md:text-6xl mb-2 font-inter items-center justify-center font-light'
        staggerFrom="first"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
          delay: 0.8,
        }}
      >
        {`I'm Quoc Le.`}
      </VerticalCutReveal>
      <VerticalCutReveal
        splitBy="characters"
        staggerDuration={0.025}
        containerClassName='text-3xl md:text-6xl mb-2 font-inter items-center justify-center font-light'
        reverse={true}
        staggerFrom="first"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
          delay: 1.4,
        }}
      >
        {`a 3rd year Computer Science`}
      </VerticalCutReveal>
      
      <VerticalCutReveal
        splitBy="characters"
        staggerDuration={0.025}
        containerClassName='text-3xl md:text-6xl mb-2 font-inter items-center justify-center font-light'
        staggerFrom="first"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 21,
          delay: 2.0,
        }}
      >
        {`student @UofGuelph.`}
      </VerticalCutReveal>
      </div>
      

      {/* Resume button - No animation for immediate visibility */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, duration: 0.6 }}
        className="md:text-lg mt-8"
      >
        <ResumeDownload />
      </motion.div>
    </div>
  );
}