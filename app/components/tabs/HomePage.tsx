"use client";

import React from 'react';
import StretchHi from "../home/StretchHi";
import ResumeDownload from "../home/ResumeDownload";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      {/* First item - StretchHi */}
      <div className="content-item-1">
        <StretchHi />
      </div>
      
      {/* Second item - Description */}
      <div className="content-item-2 sm:text-xl md:text-5xl max-w-5xl mb-12 leading-relaxed font-light italic">
        <p>I&apos;m Quoc Le, Software Engineer based in Toronto, Canada. y</p> 
        <br />
        
      </div>
      
      {/* Third item - Resume button */}
      <div className="content-item-3">
        <ResumeDownload />
      </div>
    </div>
  );
}