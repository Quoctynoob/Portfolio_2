"use client";

import React from 'react';
import StretchHi from "../home/StretchHi";
import ResumeDownload from "../home/ResumeDownload";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">

      
      {/*<h1 className="text-black text-8xl md:text-9xl font-pacifico mb-6 staggered-fade">
        Quoc Le<span className="text-yellow-400">.</span>
      </h1>*/}
      
      <p className="text-4xl md:text-3xl max-w-3xl mb-12 staggered-fade leading-relaxed">
      <StretchHi />
        Hi! I'm Quoc Le, Software Engineer based in Toronto, Canada. 
        <br />
        But you can call me Leon.
      </p>
      
      <div className="staggered-fade">
        <ResumeDownload />
      </div>
    </div>
  );
}