'use client';

import { useRouter } from 'next/navigation';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectDetailContent } from '@/data/projectsData';
import { ChevronLeft } from 'lucide-react';

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
        <article className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Hero image section */}
          <div className="relative w-full h-96 bg-gradient-to-br from-teal-50 to-green-50">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <Image
                src={project.image}
                alt={project.name}
                width={800}
                height={400}
                className="object-contain max-h-full rounded-lg shadow-lg"
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
              <p className="text-xl text-gray-600 mb-6">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-4">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-darkMint text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  <Image src="/icons/github.svg" width={20} height={20} alt="GitHub" className="filter invert" />
                  View Code
                </Link>
                {project.website && (
                  <Link
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
                  >
                    
                    Live Demo
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

            {/* Technologies */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-darkMint mb-4">Technologies Used</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-bold text-teal-600 mb-2">{tech.name}</h3>
                    <p className="text-gray-600">{tech.purpose}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges */}
            {project.challenges && (
              <section className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-500">
                <h2 className="text-2xl font-bold text-darkMint mb-4">Challenges & Solutions</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-teal-600 mt-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      <span className="text-gray-700 text-lg">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tech stack tags */}
            <section className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 mb-3">TECH STACK</h3>
              <div className="flex flex-wrap gap-2">
                {project.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-medium text-sm"
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
