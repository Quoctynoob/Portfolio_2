"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Constants for magnification effect
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

export default function FloatingNavbar() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <motion.div
        className="flex items-center gap-2 bg-lightGreen1/70 backdrop-blur-sm backdrop-saturate-150 px-4 py-2 rounded-full shadow-lg border border-beige/50"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        <NavbarIcon 
          href="https://www.linkedin.com/in/quoc-le-293333294/" 
          target="_blank"
          mouseX={mouseX}
        >
          <Image src="/icons/linkedin.svg" width={24} height={24} alt="LinkedIn" className="filter invert" />
        </NavbarIcon>

        <NavbarIcon 
          href="https://github.com/Quoctynoob" 
          target="_blank"
          mouseX={mouseX}
        >
          <Image src="/icons/github.svg" width={24} height={24} alt="GitHub" className="filter invert" />
        </NavbarIcon>

        <NavbarIcon 
          href="https://www.instagram.com/tilburgquoc/" 
          target="_blank"
          mouseX={mouseX}
        >
          <Image src="/icons/instagram.svg" width={24} height={24} alt="Instagram" className="filter invert" />
        </NavbarIcon>

        <NavbarIcon 
          href="mailto:tilburgquoc34@gmail.com" 
          mouseX={mouseX}
        >
          <Image src="/icons/mail.svg" width={24} height={24} alt="Email" className="filter invert" />
        </NavbarIcon>
      </motion.div>
    </div>
  );
}

interface NavbarIconProps {
  href: string;
  children: React.ReactNode;
  mouseX: any;
  target?: string;
}

function NavbarIcon({ href, children, mouseX, target }: NavbarIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  
  const widthSync = useTransform(
    distanceCalc,
    [-DEFAULT_DISTANCE, 0, DEFAULT_DISTANCE],
    [40, DEFAULT_MAGNIFICATION, 40]
  );
  
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link 
      href={href} 
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
    >
      <motion.div
        ref={ref}
        style={{ width }}
        className="flex aspect-square items-center justify-center rounded-full hover:bg-teal-600/30 transition-colors duration-300"
      >
        {children}
      </motion.div>
    </Link>
  );
}