"use client";

import React from 'react';
import { toast } from 'sonner';

export default function ResumeDownload() {
  const handleOpen = () => {
    toast('Please reach out to my email for my resume', {
      description: 'I\'d be happy to share my detailed resume directly with you!',
      duration: 4000,
    });
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