"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function FloatingNavbar() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center gap-6 bg-black/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
        <Link href="https://www.linkedin.com/in/quoc-le-293333294/" className="p-2 hover:bg-teal-600/30 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/linkedin.svg" width={24} height={24} alt="LinkedIn" />
        </Link>

        <Link href="https://github.com/Quoctynoob" className="p-2 hover:bg-teal-600/30 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/github.svg" width={24} height={24} alt="GitHub" />
        </Link>

        <Link href="https://www.instagram.com/tilburgquoc/" className="p-2 hover:bg-teal-600/30 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/instagram.svg" width={24} height={24} alt="Instagram" />
        </Link>

        <Link href="mailto:tilburgquoc34@gmail.com" className="p-2 hover:bg-teal-600/30 rounded-full transition-colors">
          <Image src="/icons/mail.svg" width={24} height={24} alt="Email" />
        </Link>
      </div>
    </div>
  );
}