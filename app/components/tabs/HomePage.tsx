"use client";

import React from 'react';
import StretchHi from "../home/StretchHi";
import ResumeDownload from "../home/ResumeDownload";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center md:min-h-[90vh] text-center px-4">
      {/* First item - StretchHi */}
      <div className="content-item-1">
        <StretchHi />
      </div>
      
      {/* Second item - Description */}
      <div className="content-item-2 sm:text-xl md:text-7xl max-w-6xl leading-relaxed font-noto">
        <p>I&apos;m Quoc Le, Software Engineer based in Toronto, Canada.</p> 
        <br />
        
      </div>
      
      {/* Third item - Resume button */}
      <div className="content-item-3 md:text-xl resume">
        <ResumeDownload />
      </div>
    </div>
  );
}