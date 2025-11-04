'use client';

import { useRouter } from 'next/navigation';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectDetailContent } from '@/data/projectsData';
import { ChevronLeft, SquareArrowOutUpRight } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { CasualButton } from '@/components/ui/casual-button';

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
      <div className="min-h-screen bg-lightPeach flex items-center justify-center">
        <div className="text-center font-inter">
          <h1 className="text-4xl font-semibold text-darkCharcoal mb-4">404 - Project not found</h1>
          <button
            onClick={() => router.back()}
            className="text-darkCharcoal hover:underline hover:text-darkSubtle"
          >
            Back to projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lightPeach py-12">
      <div className="container mx-auto px-4 max-w-5xl font-inter">
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
            <header className="mb-8 border-b border-subtle pb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-darkCharcoal mb-4">
                {project.name}
              </h1>
              <p className="text-l text-darkCharcoal mb-6">
                {project.credit}
              </p>

              {/* Links */}      
              <div className="flex items-center gap-4 mt-4">
                {project.github && (
                  CasualButton({
                    label: <FiGithub className="w-5 h-5 text-darkCharcoal" />,
                    onClick: () => window.open(project.github, '_blank'),
                  })
                )}
                {project.website && (
                  CasualButton({
                    label: <SquareArrowOutUpRight className="w-5 h-5 text-darkCharcoal" />,
                    onClick: () => window.open(project.website, '_blank'),
                  })
                )}
              </div>
            </header>

            {/* Overview */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-darkCharcoal mb-4">Overview</h2>
              <p className="text-darkCharcoal text-lg leading-relaxed font-light">
                {project.overview}
              </p>
            </section>

            {/* My Contributions */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-darkCharcoal mb-4">My Contributions</h2>
              <div>
                ....
              </div>
            </section>

            {/* Key Features */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-darkCharcoal mb-4">Key Features</h2>
              <ul className="space-y-3 font-inter font-light">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-darkCharcoal mt-1 flex-shrink-0">
                      ‣
                    </span>
                    <span className="text-darkCharcoal text-lg ">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tech stack tags */}
            <section className="mt-10 pt-6 border-t border-subtle font-inter">
              <h3 className="text-md font-semibold text-darkCharcoal mb-3">Tech Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 border-darkCharcoal border-2 text-darkCharcoal rounded-full font-medium text-sm"
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
