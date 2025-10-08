"use client";

import React from 'react';
import ResumeDownload from './ResumeDownload';
import { VerticalCutReveal } from '../common/VerticalCutReveal';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4  font-noto">
      {/* First item*/}
      <div>
        <VerticalCutReveal 
          splitBy="lines"
          staggerDuration={0.7}
          reverse={false}
          staggerFrom="first"
          containerClassName="text-4xl md:text-6xl mb-2 font-noto"
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
          }}
        >
          {'Hi!'}
        </VerticalCutReveal>
      </div>
      
      <div className="text-4xl md:text-6xl max-w-5xl leading-relaxed font-noto">
        <VerticalCutReveal 
          splitBy="lines"
          staggerDuration={0.9}
          reverse={false}
          staggerFrom="center"
          containerClassName="flex flex-col items-center justify-center"
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 40,
          }}
          
        >
          {`I'm Quoc Le, `}
        </VerticalCutReveal>
      </div>
      {/* Second item - Description with line split */}
      <div className=" text-4xl md:text-6xl max-w-5xl leading-relaxed font-noto">
        <VerticalCutReveal 
          splitBy="lines"
          staggerDuration={1.1}
          staggerFrom="last"
          containerClassName="flex flex-col items-center justify-center"
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 40,
          }}
        >
          {`a 3rd year Computer Science`}
        </VerticalCutReveal>
      </div>

      <div className=' text-4xl md:text-6xl max-w-5xl leading-relaxed font-noto'>
        <VerticalCutReveal 
          splitBy="lines"
          staggerDuration={1.3}
          staggerFrom="last"
          containerClassName="flex flex-col items-center justify-center"
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 40,
          }}
        >
          {`student @UofGuelph.`}
        </VerticalCutReveal>
      </div>
      
      {/* Third item - Resume button */}
      <div className="content-item-3 md:text-lg resume mt-8">
        <ResumeDownload />
      </div>
    </div>
  );
}