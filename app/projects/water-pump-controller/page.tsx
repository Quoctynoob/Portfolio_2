'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
// import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
// import { SquareArrowOutUpRight } from 'lucide-react'; // Uncomment when you add links

export default function WaterPumpControllerPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-lightPeach py-12">
      <div className="container mx-auto px-4 max-w-5xl font-noto">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="mb-6 text-darkCharcoal hover:text-subtle transition-colors flex items-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Projects
        </button>

        {/* Main content */}
        <article className=" rounded-xl overflow-hidden">
          {/* Hero image section */}
          <div className="relative w-full h-96 bg-gradient-to-br">
            <div className="absolute inset-0 flex items-center justify-center p-8 bg-project-bg rounded-3xl border-2 border-project-border">
              <Image
                src="/image/water_pump.png"
                alt="Water Pump Controller"
                width={800}
                height={400}
                className="object-contain max-h-full rounded-3xl"
              />
            </div>
          </div>

          {/* Content section */}
          <div className="p-8 md:p-12 font-inter">
            {/* Header */}
            <header className="mb-8 border-b border-subtle pb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-darkCharcoal mb-4">
                Water Pump Controller
              </h1>
              <p className="text-l text-darkCharcoal mb-6 font-light">
                Ongoing project developed in collaboration with a colleague
              </p>
            </header>

            {/* Overview */}
            <section className="mb-10 font-inter font-light">
              <h2 className="text-2xl font-bold text-darkCharcoal mb-4">Overview</h2>
              <p className="text-darkCharcoal text-lg leading-relaxed">
                This system automates water pump operation using three ESP32 microcontrollers 
                that monitor flow rates and tank levels, control motorized valves, and provide remote access 
                via Android app and Telegram integration as a backup.
              </p>
            </section>

            {/* My Contributions */}
            <section className="mb-10 font-inter font-light">
              <h2 className="text-2xl font-bold text-darkCharcoal mb-4">My Contributions</h2>
              <div>
                ....
              </div>
            </section>

            {/* Key Features */}
            <section className="mb-10 font-inter font-light">
              <h2 className="text-2xl font-bold text-darkCharcoal mb-4">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-darkCharcoal mt-1 flex-shrink-0">
                    ‣
                  </span>
                  <span className="text-darkCharcoal text-lg">Tank level monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-darkCharcoal mt-1 flex-shrink-0">
                    ‣
                  </span>
                  <span className="text-darkCharcoal text-lg">Automatic safety shutoffs and flow rate monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-darkCharcoal mt-1 flex-shrink-0">
                    ‣
                  </span>
                  <span className="text-darkCharcoal text-lg">Remote control via Android app</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-darkCharcoal mt-1 flex-shrink-0">
                    ‣
                  </span>
                  <span className="text-darkCharcoal text-lg">Water routing control</span>
                </li>
              </ul>
            </section>

            {/* Tech stack tags */}
            <section className="mt-10 pt-6 border-t border-subtle font-inter font-light">
              <h3 className="text-md font-semibold text-darkCharcoal mb-3">Tech Used</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 border-darkCharcoal border-2 text-darkCharcoal rounded-full font-medium text-sm">
                  Arduino
                </span>
                <span className="px-4 py-2 border-darkCharcoal border-2 text-darkCharcoal rounded-full font-medium text-sm">
                  Kotlin
                </span>
                <span className="px-4 py-2 border-darkCharcoal border-2 text-darkCharcoal rounded-full font-medium text-sm">
                  ESP32
                </span>
                <span className="px-4 py-2 border-darkCharcoal border-2 text-darkCharcoal rounded-full font-medium text-sm">
                  Cloudflare
                </span>
              </div>
            </section>

            {/* Add more custom sections here as you want! */}
            {/* Example: */}
            {/* <section className="mt-10">
              <h2 className="text-2xl font-bold text-darkMint mb-4">Custom Section</h2>
              <p className="text-gray-700 text-lg">Your custom content here...</p>
            </section> */}
          </div>
        </article>
      </div>
    </div>
  );
}
