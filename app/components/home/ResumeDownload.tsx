"use client";

import React from 'react';

export default function ResumeDownload() {
  const handleOpen = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <button 
      className="button-resume" 
      onClick={handleOpen}
      aria-label="Open Resume"
    >
      Open Resume
    </button>
  );
}