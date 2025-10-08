"use client";

import { motion, useAnimation, useMotionValue, useTransform, easeInOut } from "framer-motion";
import { useEffect, useState } from "react";

interface HandWrittenTitleProps {
    title?: string;
    subtitle?: string;
}

function HandWrittenTitle({
    title = "Hand Written",
    subtitle = "Optional subtitle",
}: HandWrittenTitleProps) {
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [animationDelay, setAnimationDelay] = useState(1);

    useEffect(() => {
        // Check if this is the first visit (loading screen will show)
        const hasSeenLoading = sessionStorage.getItem('hasSeenLoadingScreen');

        if (hasSeenLoading !== 'true') {
            // First visit - delay to match loading screen duration
            // Loading screen: 2100ms animation + 300ms pause + 1000ms fade = 3400ms
            setAnimationDelay(4);
        } else {
            // Subsequent visits - shorter delay
            setAnimationDelay(1);
        }

        // Start animation after delay is set
        setShouldAnimate(true);
    }, []);

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2.5, ease: easeInOut, delay: animationDelay },
                opacity: { duration: 0.5, delay: animationDelay },
            },
        },
    };

    return (
        <div className="relative inline-block">
            <div className="absolute inset-0 -left-4 -right-6 -top-5 -bottom-5">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 200 60"
                    initial="hidden"
                    animate={shouldAnimate ? "visible" : "hidden"}
                    className="w-full h-full"
                    preserveAspectRatio="none"
                >
                    <title>{title}</title>
                    <motion.path
                        d="M 165 10
                           C 210 28, 195 48, 100 52
                           C 20 52, 5 42, 5 30
                           C 5 18, 35 8, 100 8
                           C 155 8, 165 22, 165 22"
                        fill="none"
                        strokeWidth="2"
                        stroke="currentColor"
                        strokeLinecap="butt"
                        strokeLinejoin="round"
                        variants={draw}
                        className="text-black dark:text-white opacity-70"
                    />
                </motion.svg>
            </div>
            <div className="relative z-10">
                <motion.span
                    className="text-2xl md:text-3xl text-black dark:text-white tracking-normal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {title}
                </motion.span>
            </div>
        </div>
    );
}


export { HandWrittenTitle }