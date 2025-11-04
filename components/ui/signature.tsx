import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface SignatureAnimationProps {
  /**
   * Animation speed: 'slow' | 'normal' | 'fast'
   */
  speed?: 'slow' | 'normal' | 'fast';
  
  /**
   * Stroke color (supports CSS colors, hex, etc.)
   */
  strokeColor?: string;
  
  /**
   * Stroke width in pixels
   */
  strokeWidth?: number;
  
  /**
   * Auto-play animation on mount
   */
  autoPlay?: boolean;
  
  /**
   * Loop the animation continuously
   */
  loop?: boolean;
  
  /**
   * Scale factor for the signature size
   */
  scale?: number;
  
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  
  /**
   * Callback when animation starts
   */
  onAnimationStart?: () => void;
  
  /**
   * Callback when animation completes
   */
  onAnimationComplete?: () => void;

  /**
   * Initial delay before animation starts (in milliseconds)
   */
  initialDelay?: number;
}

const SignatureAnimation: React.FC<SignatureAnimationProps> = ({
  speed = 'normal',
  strokeColor = '#2c3e50',
  strokeWidth = 2.5,
  autoPlay = true,
  loop = false,
  scale = 2,
  className = '',
  onAnimationStart,
  onAnimationComplete,
  initialDelay = 500
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Path configurations
  const pathConfig = [
    { id: 'q-main', selector: '#q-main' },
    { id: 'q-detail', selector: '#q-detail' },
    { id: 'l-letter', selector: '#l-letter' }
  ];

  // Speed configurations
  const speedConfig = {
    slow: { q1: 2.5, q2: 1.5, l: 2.0, pause: 0.8 },
    normal: { q1: 1.8, q2: 1.0, l: 1.5, pause: 0.5 },
    fast: { q1: 0.8, q2: 0.5, l: 0.7, pause: 0.2 }
  };

  // Initialize paths for animation
  const setupPaths = () => {
    if (!containerRef.current) return;
    
    pathConfig.forEach(config => {
      const path = containerRef.current!.querySelector(config.selector) as SVGPathElement;
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length.toString();
        path.style.strokeDashoffset = length.toString();
      }
    });
  };

  // Create animation timeline
  const createAnimation = () => {
    if (!containerRef.current || isAnimating) return;

    const timing = speedConfig[speed];
    const timeline = gsap.timeline({
      onStart: () => {
        setIsAnimating(true);
        onAnimationStart?.();
      },
      onComplete: () => {
        setIsAnimating(false);
        onAnimationComplete?.();
        
        if (loop) {
          setTimeout(() => {
            resetAnimation();
            setTimeout(createAnimation, 1000);
          }, 2000);
        }
      }
    });

    timeline
      .to('#q-main', {
        strokeDashoffset: 0,
        duration: timing.q1,
        ease: "power2.inOut"
      })
      .to('#q-detail', {
        strokeDashoffset: 0,
        duration: timing.q2,
        ease: "power1.out"
      }, `-=${timing.q2 * 0.3}`)
      .to({}, { duration: timing.pause })
      .to('#l-letter', {
        strokeDashoffset: 0,
        duration: timing.l,
        ease: "power1.inOut"
      });

    timelineRef.current = timeline;
    return timeline;
  };

  // Reset animation
  const resetAnimation = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    setupPaths();
    setIsAnimating(false);
  };

  // Public methods for external control
  const playAnimation = () => {
    if (!isAnimating) {
      createAnimation();
    }
  };

  const stopAnimation = () => {
    resetAnimation();
  };

  // Initialize on mount
  useEffect(() => {
    setupPaths();

    if (autoPlay) {
      const timer = setTimeout(() => {
        createAnimation();
      }, initialDelay);
      return () => clearTimeout(timer);
    }
  }, [autoPlay, initialDelay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  // Update paths when props change
  useEffect(() => {
    setupPaths();
  }, [strokeColor, strokeWidth]);

  return (
    <div
      ref={containerRef}
      className={`inline-block ${className}`}
      style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}
    >
      <svg 
        width="78" 
        height="44" 
        viewBox="0 0 78 44" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        <path 
          id="q-main"
          d="M9.48392 15.372C8.86786 15.6418 6.03356 18.116 3.13128 22.6066C0.629808 26.4771 0.985807 29.1066 1.05959 31.7356C1.12364 34.018 3.50069 35.0318 5.635 36.1009C9.77711 38.1757 13.9864 37.0791 18.4203 35.0645C22.6134 33.1592 26.0578 29.6307 28.9629 26.4762C32.0619 23.111 33.5347 20.2007 34.3003 18.4334C36.5369 13.2708 36.3424 7.7994 36.0449 5.11451C35.8251 3.13088 33.6485 2.14859 32.0527 1.42255C29.7937 0.394736 26.4173 1.36204 23.7062 3.03003C22.0611 4.25141 19.1261 6.51165 17.4892 7.79425C15.8523 9.07685 15.6024 9.31332 14.7334 10.2814"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
        />
        
        <path 
          id="q-detail"
          d="M5.4799 27.7975C5.94983 27.7672 7.85869 27.5393 11.1514 26.9276C15.1031 26.1935 17.9265 26.7439 18.5134 27.6689C20.137 30.228 20.5892 32.1598 21.6279 33.9355C23.7262 35.0069 26.2874 35.4384 27.9067 35.4232C28.6151 35.3908 29.0937 35.3081 30.0841 34.9932"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
        />
        
        <path 
          id="l-letter"
          d="M66.6715 7.98473C66.4745 7.6154 63.8856 5.92447 61.1416 5.05388C58.9928 4.37212 56.9855 6.42765 56.5094 7.12695C55.922 7.98975 55.982 10.4234 56.1386 13.8348C56.4774 21.2146 56.8743 27.0738 55.7425 29.6395C53.8716 33.8809 51.7755 34.9005 48.016 36.9118C45.1686 38.4351 43.3892 37.9726 42.1913 37.8138C41.4866 37.7204 41.6421 36.3687 41.7591 35.3741C42.0017 33.3113 46.3335 32.5246 51.0671 32.3531C52.116 32.3151 52.6139 32.6176 53.0285 32.8928C55.5738 34.582 57.0121 38.8219 58.4363 40.005C60.1453 41.4247 63.0016 41.8244 65.994 42.2635C67.5659 42.3231 69.2304 42.0404 71.4444 40.8934C72.8095 40.0339 74.6653 38.6113 76.5773 37.1455"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

// Export the component and expose control methods
export default SignatureAnimation;

// Hook for external control
export const useSignatureAnimation = () => {
  const ref = useRef<{ play: () => void; stop: () => void; reset: () => void } | null>(null);

  return {
    ref,
    play: () => ref.current?.play(),
    stop: () => ref.current?.stop(),
    reset: () => ref.current?.reset()
  };
};