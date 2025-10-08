'use client';

import React from 'react';
import Link from 'next/link';
import { useNavigation } from '@/contexts/NavigationContext';
import { MenuDemo } from '../common/demo';

export default function Navbar() {
  const {
    handleTabClick,
    getUnderlineClass,
    setHoveredTab
  } = useNavigation();

  return (
    <nav className="flex justify-between items-center bg-lightGreen p-4 text-darkMint navbar-fade">
      {/* Logo on the left */}
      <div>
        <Link
          className="p-2 px-4 font-semibold md:text-3xl font-play text-2xl"
          href="/"
        >
          Quoc Le
        </Link>
      </div>

      {/* Navigation tabs on the right */}
      <div className="hidden md:flex gap-4 font-noto">
        <Link
          href="/about"
          className="p-2 px-4 group"
          onMouseEnter={() => setHoveredTab('about')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          About
          <div className={`bg-teal-500 h-[2px] ${getUnderlineClass('about')} transition-all duration-500 rounded-sm`}></div>
        </Link>

        <Link
          href="/projects"
          className="p-2 px-4 group"
          onMouseEnter={() => setHoveredTab('projects')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          Projects
          <div className={`bg-teal-500 h-[2px] ${getUnderlineClass('projects')} transition-all duration-500 rounded-sm`}></div>
        </Link>

        <Link
          href="/work"
          className="p-2 px-4 group"
          onMouseEnter={() => setHoveredTab('work')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          Experience
          <div className={`bg-teal-500 h-[2px] ${getUnderlineClass('work')} transition-all duration-500 rounded-sm`}></div>
        </Link>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <MenuDemo onTabSelect={handleTabClick} />
      </div>
    </nav>
  );
}
