"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function FloatingNavbar() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center gap-6 bg-mintCream/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-beige/50 transition-all duration-300">
        <Link 
          href="https://www.linkedin.com/in/quoc-le-293333294/" 
          className="group p-2 hover:bg-teal-600/30 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-teal-500/50 hover:shadow-md text-black" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className="relative overflow-hidden transition-all duration-300 transform group-hover:scale-110">
            <Image src="/icons/linkedin.svg" width={24} height={24} alt="LinkedIn" className="filter invert" />
          </div>
        </Link>

        <Link 
          href="https://github.com/Quoctynoob" 
          className="group p-2 hover:bg-teal-600/30 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-teal-500/50 hover:shadow-md" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className="relative overflow-hidden transition-all duration-300 transform group-hover:scale-110">
            <Image src="/icons/github.svg" width={24} height={24} alt="GitHub" className="filter invert" />
          </div>
        </Link>

        <Link 
          href="https://www.instagram.com/tilburgquoc/" 
          className="group p-2 hover:bg-teal-600/30 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-teal-500/50 hover:shadow-md" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className="relative overflow-hidden transition-all duration-300 transform group-hover:scale-110">
            <Image src="/icons/instagram.svg" width={24} height={24} alt="Instagram" className="filter invert" />
          </div>
        </Link>

        <Link 
          href="mailto:tilburgquoc34@gmail.com" 
          className="group p-2 hover:bg-teal-600/30 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-teal-500/50 hover:shadow-md"
        >
          <div className="relative overflow-hidden transition-all duration-300 transform group-hover:scale-110">
            <Image src="/icons/mail.svg" width={24} height={24} alt="Email" className="filter invert" />
          </div>
        </Link>
      </div>
    </div>
  );
}