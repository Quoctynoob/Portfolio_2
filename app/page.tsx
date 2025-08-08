'use client';

import React from 'react';
import { NavigationProvider } from '@/src/contexts/NavigationContext';
import MainPortfolio from '@/src/components/layout/MainPortfolio';

export default function Home() {
  return (
    <NavigationProvider>
      <MainPortfolio />
    </NavigationProvider>
  );
}