"use client";

import React from "react";
import { Dock, DockIcon } from "../common/Dock";

export default function DockNavbar() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <Dock>
        <DockIcon 
          href="https://www.linkedin.com/in/quoc-le-293333294/" 
          src="/icons/linkedin.svg" 
          alt="LinkedIn" 
          external={true}
        />

        <DockIcon 
          href="https://github.com/Quoctynoob" 
          src="/icons/github.svg" 
          alt="GitHub"
          external={true}
        />

        <DockIcon 
          href="https://www.instagram.com/tilburgquoc/" 
          src="/icons/instagram.svg" 
          alt="Instagram"
          external={true}
        />

        <DockIcon 
          href="mailto:tilburgquoc34@gmail.com" 
          src="/icons/mail.svg" 
          alt="Email"
          external={false}
        />
      </Dock>
    </div>
  );
}