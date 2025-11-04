"use client";

import React from 'react';
import { toast } from 'sonner';
import { CartoonButton } from '../ui/cartoon-button';

export default function ResumeDownload() {
  const handleOpen = () => {
    toast('Please reach out to my email for my resume', {
      description: 'I\'m currently updating my resume.',
      duration: 4000,
    });
  };

  return (
    <div>
      <CartoonButton
        label="Download Resume"
        hasHighlight={true}
        onClick={handleOpen}
      />
    </div>
  );
}