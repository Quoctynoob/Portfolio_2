"use client";

import React from 'react';
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
          delay: 0.5,
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
          delay: 1.1,
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
          delay: 1.7,
        }}
      >
        {`student @UofGuelph.`}
      </VerticalCutReveal>
      </div>
      
      
      {/* Third item - Resume button */}
      <div className="content-item-3 md:text-lg mt-8">
        <ResumeDownload />
      </div>
    </div>
  );
}