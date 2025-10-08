'use client';

import React from 'react';
import { NavigationProvider } from '@/contexts/NavigationContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DockNavbar from '@/components/layout/DockNavbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <div className="flex flex-col min-h-screen bg-lightGreen">
        <Navbar />

        <main className="flex-grow text-darkMint">
          {children}
        </main>

        <div className="navbar-fade">
          <Footer />
        </div>

        <div className="navbar-fade">
          <DockNavbar />
        </div>
      </div>
    </NavigationProvider>
  );
}
