"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// DockIcon component for individual icons in the dock
interface DockIconProps {
  href: string;
  src: string;
  alt: string;
  mouseX: any;
  external?: boolean;
}

const DockIcon = ({ href, src, alt, mouseX, external = true }: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = 140;
  const magnification = 60;
  
  // Calculate distance from mouse to icon center
  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  
  // Transform distance to width
  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40],
  );
  
  // Add spring physics for smoother animation
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex aspect-square items-center justify-center"
    >
      <Link 
        href={href} 
        className="group p-2 hover:bg-teal-600/30 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-teal-500/50 hover:shadow-md text-black w-full h-full flex items-center justify-center" 
        target={external ? "_blank" : "_self"} 
        rel={external ? "noopener noreferrer" : ""}
      >
        <div className="relative overflow-hidden transition-all duration-300 transform group-hover:scale-110 w-6 h-6">
          <Image src={src} fill alt={alt} className="filter invert" />
        </div>
      </Link>
    </motion.div>
  );
};

export default function AnimatedDockNavbar() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div 
        className="flex items-center gap-4 bg-lightGreen1/70 backdrop-blur-sm backdrop-saturate-150 px-6 py-2 rounded-full shadow-lg border border-beige/50 transition-all duration-300 pointer-events-auto"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        <DockIcon 
          href="https://www.linkedin.com/in/quoc-le-293333294/" 
          src="/icons/linkedin.svg" 
          alt="LinkedIn"
          mouseX={mouseX}
        />

        <DockIcon 
          href="https://github.com/Quoctynoob" 
          src="/icons/github.svg" 
          alt="GitHub"
          mouseX={mouseX}
        />

        <DockIcon 
          href="https://www.instagram.com/tilburgquoc/" 
          src="/icons/instagram.svg" 
          alt="Instagram"
          mouseX={mouseX}
        />

        <DockIcon 
          href="mailto:tilburgquoc34@gmail.com" 
          src="/icons/mail.svg" 
          alt="Email"
          mouseX={mouseX}
          external={false}
        />
      </motion.div>
    </div>
  );
}