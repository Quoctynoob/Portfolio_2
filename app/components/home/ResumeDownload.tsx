"use client";

import React from 'react';

export default function ResumeDownload() {
  const handleDownload = () => {
    const filePath = '/resume.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <button 
      className="button-resume" 
      onClick={handleDownload}
      aria-label="Download Resume"
    >
      Download Resume
    </button>
  );
}