'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useNavigation } from '@/contexts/NavigationContext';
import { MenuDemo } from '../common/demo';
import SignatureAnimation from '../ui/signature';

export default function Navbar() {
  const {
    getUnderlineClass,
    setHoveredTab
  } = useNavigation();

  const [signatureDelay, setSignatureDelay] = useState(500);

  useEffect(() => {
    // Check if user has seen the loading screen
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoadingScreen');

    if (hasSeenLoading === 'true') {
      // Loading screen was skipped, wait for intro text to finish
      setSignatureDelay(1800);
    } else {
      // Wait for loading screen (~3300ms) + intro text (~1800ms)
      setSignatureDelay(5100);
    }
  }, []);

  return (
    <nav className="flex justify-between items-center bg-lightPeach p-4 text-darkCharcoal navbar-fade md:pt-5">
      {/* Logo on the left */}
      <div>
        <Link
          className="font-semibold md:text-3xl font-play text-2xl"
          href="/"
        >
          <SignatureAnimation
            speed="normal"
            strokeColor="#2A2A2A"
            strokeWidth={2.5}
            autoPlay={true}
            loop={false}
            scale={1.2}
            initialDelay={signatureDelay}
          />
        </Link>
      </div>

      {/* Navigation tabs on the right */}
      <div className="hidden md:flex gap-4 font-inter">
        <Link
          href="/about"
          className="p-2 px-4 group"
          onMouseEnter={() => setHoveredTab('about')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          About
          <div className={`bg-subtle h-[2px] ${getUnderlineClass('about')} transition-all duration-500 rounded-sm`}></div>
        </Link>

        <Link
          href="/projects"
          className="p-2 px-4 group"
          onMouseEnter={() => setHoveredTab('projects')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          Projects
          <div className={`bg-subtle h-[2px] ${getUnderlineClass('projects')} transition-all duration-500 rounded-sm`}></div>
        </Link>

        <Link
          href="/work"
          className="p-2 px-4 group"
          onMouseEnter={() => setHoveredTab('work')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          Experience
          <div className={`bg-subtle h-[2px] ${getUnderlineClass('work')} transition-all duration-500 rounded-sm`}></div>
        </Link>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <MenuDemo />
      </div>
    </nav>
  );
}
