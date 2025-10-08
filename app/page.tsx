'use client';

import React, { useState } from 'react';
import HomePage from '@/components/home/HomePage';
import LoadingScreen from '@/components/layout/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div className={showContent ? 'block' : 'hidden'}>
          <HomePage />
        </div>
      )}
    </>
  );
}