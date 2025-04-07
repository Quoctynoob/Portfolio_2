"use client";

import React from 'react';
import ResumeDownload from "../home/ResumeDownload";
import { VerticalCutReveal } from "../animations/VerticalCutReveal";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center md:min-h-[80vh] text-center px-4">
      {/* First item - Animated Hi! */}
      <div>
        <VerticalCutReveal 
          splitBy="lines"
          staggerDuration={0.7}
          reverse={false}
          staggerFrom="first"
          containerClassName="text-4xl md:text-6xl mb-2 font-noto font-semibold"
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
          }}
        >
          {'Hi!'}
        </VerticalCutReveal>
      </div>
      
      <div className=" sm:text-xl md:text-6xl max-w-5xl leading-relaxed font-noto">
        <VerticalCutReveal 
          splitBy="lines"
          staggerDuration={0.8}
          reverse={false}
          staggerFrom="center"
          containerClassName="flex flex-col items-center justify-center"
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 40,
          }}
          
        >
          {`I'm Quoc Le, an aspiring Software`}
        </VerticalCutReveal>
      </div>
      {/* Second item - Description with line split */}
      <div className=" sm:text-xl md:text-6xl max-w-5xl leading-relaxed font-noto">
        <VerticalCutReveal 
          splitBy="lines"
          staggerDuration={0.9}
          staggerFrom="last"
          containerClassName="flex flex-col items-center justify-center"
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 40,
          }}
        >
          {`Developer based in Toronto, Canada.`}
        </VerticalCutReveal>
      </div>
      
      {/* Third item - Resume button */}
      <div className="content-item-3 md:text-lg resume mt-8">
        <ResumeDownload />
      </div>
    </div>
  );
}