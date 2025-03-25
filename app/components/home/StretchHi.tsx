"use client";

import React from 'react';

export default function StretchHi() {
  return (
    <div className="text-4xl md:text-6xl mb-2 font-noto font-semibold">
      <span className="inline-block">
        <span className="inline-block hover:scale-125 transition-transform duration-300 origin-bottom text-darkMint">H</span>
        <span className="inline-block hover:scale-125 transition-transform duration-300 origin-bottom text-darkMint">i</span>
      </span>
      <span className="inline-block text-black">!</span>
    </div>
  );
}