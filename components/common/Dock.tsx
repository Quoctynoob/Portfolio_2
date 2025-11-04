"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Constants for magnification effect
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

// DockIcon component for individual icons in the dock
interface DockIconProps {
  href: string;
  src: string;
  alt: string;
  external?: boolean;
}

export function DockIcon({ href, src, alt, external = true }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // We'll actually get these from the parent Dock component via React.cloneElement
  let mouseX: any;
  let distance = DEFAULT_DISTANCE;
  let magnification = DEFAULT_MAGNIFICATION;
  
  // This will be used if the component is rendered directly without a parent Dock
  const defaultMouseX = useMotionValue(Infinity);
  
  // Calculate distance from mouse to icon center
  const distanceCalc = useTransform(mouseX || defaultMouseX, (val: number) => {
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
      className="flex items-center justify-center h-10"
    >
      <Link 
        href={href} 
        className="group p-2 hover:bg-navbar-icon-hover rounded-full transition-colors duration-300 text-black w-full flex items-center justify-center" 
        target={external ? "_blank" : "_self"} 
        rel={external ? "noopener noreferrer" : ""}
      >
        <div className="relative overflow-hidden w-6 h-6">
          <Image src={src} fill alt={alt} className="filter invert" />
        </div>
      </Link>
    </motion.div>
  );
}

// InternalDockIcon is used by the Dock component, with extra props
interface InternalDockIconProps extends DockIconProps {
  mouseX: any;
  magnification?: number;
  distance?: number;
}

// This is an internal component not exported
function InternalDockIcon({ 
  href, 
  src, 
  alt, 
  external = true,
  mouseX,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE
}: InternalDockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  
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

  // This version has the same implementation as above, but with controlled height
  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex items-center justify-center h-10"
    >
      <Link 
        href={href} 
        className="group p-2 hover:bg-navbar-icon-hover rounded-full transition-colors duration-300 text-black w-full flex items-center justify-center" 
        target={external ? "_blank" : "_self"} 
        rel={external ? "noopener noreferrer" : ""}
      >
        <div className="relative overflow-hidden w-6 h-6">
          <Image src={src} fill alt={alt} className="filter invert" />
        </div>
      </Link>
    </motion.div>
  );
}

interface DockProps {
  className?: string;
  children: React.ReactNode;
  magnification?: number;
  distance?: number;
}

export function Dock({ 
  className = "", 
  children,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE
}: DockProps) {
  const mouseX = useMotionValue(Infinity);

  // Process children to convert DockIcon components to InternalDockIcon components
  const processedChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child;
    }

    // If it's a DockIcon component
    if (child.type === DockIcon) {
      const props = child.props as DockIconProps;
      
      // Return an InternalDockIcon with all needed props
      return (
        <InternalDockIcon
          href={props.href}
          src={props.src}
          alt={props.alt}
          external={props.external}
          mouseX={mouseX}
          magnification={magnification}
          distance={distance}
        />
      );
    }
    
    return child;
  });

  return (
    <motion.div 
      className={`hidden md:flex items-center gap-4 bg-navbar-bg backdrop-blur-sm backdrop-saturate-150 px-6 py-2 rounded-full shadow-lg border-2 border-navbar-border transition-colors duration-300 pointer-events-auto h-14  ${className}`}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {processedChildren}
    </motion.div>
  );
}