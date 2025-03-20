"use client";

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Typewriter() {
  const typedElementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedElementRef.current) return;
    
    const options = {
      strings: [
        'Hello', 'Xin chào', 'Bonjour', 'Goedendag', 'こんにちは', '안녕하세요', 'привет',
        'สวัสดี', '你好', 'Cześć', 'مرحبا', 'নমস্কার', 'Здравейте', 'Hyvää päivää',
        'γεια σας', 'नमस्ते', 'שלום', 'नमस्ते', 'سلام', 'Grüß Gott'
      ],
      typeSpeed: 120,
      backSpeed: 60,
      loop: true,
    };

    // Create a Typed instance
    const typed = new Typed(typedElementRef.current, options);

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span 
        ref={typedElementRef} 
        className="text-3xl font-bold text-mintCream"
      ></span>
    </div>
  );
}