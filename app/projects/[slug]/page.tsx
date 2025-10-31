'use client';

import { useRouter } from 'next/navigation';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectDetailContent } from '@/data/projectsData';
import { ChevronLeft, SquareArrowOutUpRight } from 'lucide-react';

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params);
  const router = useRouter();
  const project = projectDetailContent[slug];

  // If slug doesn't exist in our content, show 404
  if (!project) {
    return (
      <div className="min-h-screen bg-lightGreen flex items-center justify-center">
        <div className="text-center font-noto">
          <h1 className="text-4xl font-bold text-darkMint mb-4">404 - Project not found</h1>
          <button
            onClick={() => router.back()}
            className="text-teal-600 hover:text-teal-700 underline"
          >
            Back to projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lightGreen py-12">
      <div className="container mx-auto px-4 max-w-5xl font-noto">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="mb-6 text-darkMint hover:text-teal-600 transition-colors flex items-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Projects
        </button>

        {/* Main content */}
        <article className=" rounded-xl overflow-hidden">
          {/* Hero image section */}
          <div className="relative w-full h-96 bg-gradient-to-br">
            <div className="absolute inset-0 flex items-center justify-center p-8 bg-mintGreen/50 rounded-3xl">
              <Image
                src={project.image}
                alt={project.name}
                width={800}
                height={400}
                className="object-contain max-h-full rounded-3xl"
              />
            </div>
          </div>

          {/* Content section */}
          <div className="p-8 md:p-12">
            {/* Header */}
            <header className="mb-8 border-b border-gray-200 pb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-darkMint mb-4">
                {project.name}
              </h1>
              <p className="text-l text-darkMint mb-6">
                {project.credit}
              </p>

              {/* Links */}
              <div className="flex gap-4">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-2 py-2 rounded-full border-amber-950 border-2"
                >
                  <Image src="/icons/github.svg" width={20} height={20} alt="GitHub" className="filter invert" />
                  
                </Link>
                {project.website && (
                  <Link
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 border-2 border-amber-950 text-amber-950 rounded-full"
                  >
                    <SquareArrowOutUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </header>

            {/* Overview */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-darkMint mb-4">Overview</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* Key Features */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-darkMint mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-teal-500 mt-1 flex-shrink-0">
                    </span>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tech stack tags */}
            <section className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-md font-semibold text-black mb-3">Tech Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 border-black border-2 text-black rounded-full font-medium text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
