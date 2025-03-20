"use client";

import React from 'react';

export default function StretchHi() {
  return (
    <div className="text-4xl md:text-5xl font-bold mb-2">
      <span className="inline-block">
        <span className="inline-block hover:scale-125 transition-transform duration-300 origin-bottom text-yellow-400">H</span>
        <span className="inline-block hover:scale-125 transition-transform duration-300 origin-bottom text-yellow-400">i</span>
      </span>
      <span className="inline-block text-black">!</span>
    </div>
  );
}