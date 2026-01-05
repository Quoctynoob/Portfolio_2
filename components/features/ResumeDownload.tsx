"use client";

import React from 'react';
import { toast } from 'sonner';
import { CartoonButton } from '../ui/cartoon-button';

export default function ResumeDownload() {
  const handleOpen = () => {
    window.open('/resume.pdf', '_blank');
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