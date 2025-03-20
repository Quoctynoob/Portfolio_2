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
      <div className="content-item-2 text-2xl md:text-3xl max-w-3xl mb-12 leading-relaxed">
        I'm Quoc Le, Software Engineer based in Toronto, Canada. 
        <br />
        But you can call me Leon.
      </div>
      
      {/* Third item - Resume button */}
      <div className="content-item-3">
        <ResumeDownload />
      </div>
    </div>
  );
}