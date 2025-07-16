"use client";

import React from 'react';

export default function ResumeDownload() {
  const handleOpen = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <button 
      className="button-resume md:text-lg text-sm" 
      onClick={handleOpen}
      aria-label="Open Resume"
    >
      View Resume
    </button>
  );
}