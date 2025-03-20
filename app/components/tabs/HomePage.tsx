"use client";

import React from 'react';
import Typewriter from "../home/Typewriter";
import ResumeDownload from "../home/ResumeDownload";

export default function HomePage() {
  return (
    <div className="text-center">
      <div className="staggered-fade">
        <Typewriter />
      </div>
      <h1 className="text-mintCream text-9xl font-pacifico staggered-fade">
        Quoc Le<span className="text-yellow-400">.</span>
      </h1>
      <p className="p-9 text-xl staggered-fade">
        Welcome to my page, feel free to read more{' '}
        <button className="text-yellow-400 hover:bg-orange-500 hover:text-mintCream transition-colors duration-300">
          about me
        </button>,
        <br />
        check out my ongoing and past{' '}
        <button className="text-yellow-400 hover:bg-orange-500 hover:text-mintCream transition-colors duration-300">
          projects
        </button>,
        or{' '}
        <button className="text-yellow-400 hover:bg-orange-500 hover:text-mintCream transition-colors duration-300">
          contact me
        </button>.
      </p>
      <div className="staggered-fade">
        <ResumeDownload />
      </div>
    </div>
  );
}