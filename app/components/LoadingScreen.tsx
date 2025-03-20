"use client";

import React, { useEffect, useState, useRef } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  
  // Animation effect
  useEffect(() => {
    const animationDuration = 2500; // ms
    const interval = 20; // ms
    const steps = animationDuration / interval;
    const incrementPerStep = 100 / steps;
    
    let currentProgress = 0;
    
    const timer = setInterval(() => {
      currentProgress += incrementPerStep;
      
      // Update progress state
      if (currentProgress < 100) {
        setProgress(currentProgress);
      } else {
        setProgress(100);
        clearInterval(timer);
        // Start fade out animation after completion
        setTimeout(() => {
          setFadeOut(true);
          // Wait for fade out before completion
          setTimeout(() => {
            onLoadingComplete();
          }, 1000); // Allow time for fade out animation
        }, 300); // Small pause at 100% before fading
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [onLoadingComplete]);
  
  return (
    <div className={`fixed inset-0 bg-amber-100 flex items-center justify-center z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative h-60 w-60">
        <svg 
          viewBox="0 0 100 100" 
          className="absolute inset-0 w-full h-full"
        >
          {/* Define the gradient for the filling effect */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              {progress < 100 ? (
                <>
                  <stop offset={`${progress}%`} stopColor="#000" />
                  <stop offset={`${progress}%`} stopColor="#D3D3D3" />
                </>
              ) : (
                // When at 100%, make the entire stroke black
                <stop offset="0%" stopColor="#000" />
              )}
            </linearGradient>
          </defs>
          
          {/* The Q path with the gradient stroke */}
          <path 
            ref={pathRef}
            d="M 50,10 
               C 25,10 15,30 15,50 
               C 15,70 25,90 50,90 
               C 75,90 85,70 85,50 
               C 85,30 75,10 50,10 
               M 65,75 L 85,95" 
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;