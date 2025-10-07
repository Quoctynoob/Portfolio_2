'use client';

import { useRouter } from 'next/navigation';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Project content data - matches the projects in ProjectsPage
const projectContent: Record<string, {
  name: string;
  description: string;
  image: string;
  github: string;
  website?: string;
  languages: string[];
  overview: string;
  features: string[];
  challenges?: string[];
  technologies: { name: string; purpose: string }[];
}> = {
  'frijio': {
    name: 'frijio',
    description: 'A household management app for tracking inventory, splitting expenses, and suggesting AI-powered recipes.',
    image: '/projects/Frijio.PNG',
    github: 'https://github.com/megdcosta/frijio',
    website: 'https://frijio.vercel.app',
    languages: ['React', 'TypeScript', 'Node.js', 'Firestore', 'OpenAI'],
    overview: 'Frijio is a comprehensive household management application designed to streamline daily household tasks. From tracking what\'s in your fridge to splitting bills with roommates, Frijio makes household management effortless and intelligent.',
    features: [
      'Real-time inventory tracking with expiration date alerts',
      'AI-powered recipe suggestions based on available ingredients',
      'Expense splitting with automatic calculation and notifications',
      'Shopping list generation from missing ingredients',
      'Multi-user household support with role-based permissions'
    ],
    challenges: [
      'Implementing real-time synchronization across multiple users',
      'Optimizing OpenAI API calls for cost-effective recipe generation',
      'Designing an intuitive UX for complex household management tasks'
    ],
    technologies: [
      { name: 'React & TypeScript', purpose: 'Building a type-safe, component-based UI' },
      { name: 'Node.js', purpose: 'Backend API for business logic and data processing' },
      { name: 'Firestore', purpose: 'Real-time database for multi-user synchronization' },
      { name: 'OpenAI API', purpose: 'Generating contextual recipe recommendations' }
    ]
  },
  'convoco': {
    name: 'Convoco',
    description: 'A real-time debate platform with AI moderation, fact-checking, translations, and rewards.',
    image: '/projects/Convoco.png',
    github: 'https://github.com/Quoctynoob/Convoco',
    website: 'https://convoco.vercel.app/debates',
    languages: ['React', 'TypeScript', 'Node.js', 'Firestore'],
    overview: 'Convoco transforms online debates into structured, fact-based discussions. With AI-powered moderation and fact-checking, users can engage in meaningful debates while earning rewards for quality contributions.',
    features: [
      'Real-time debate rooms with live participant updates',
      'AI moderation to maintain civil discourse',
      'Automated fact-checking with source citations',
      'Multi-language translation for global discussions',
      'Reputation system and rewards for quality contributions'
    ],
    challenges: [
      'Implementing low-latency real-time communication',
      'Balancing AI moderation with free speech',
      'Designing fair reward mechanisms to prevent gaming'
    ],
    technologies: [
      { name: 'React & TypeScript', purpose: 'Interactive real-time debate interface' },
      { name: 'Node.js', purpose: 'WebSocket server for real-time communication' },
      { name: 'Firestore', purpose: 'Storing debate history and user profiles' },
      { name: 'AI APIs', purpose: 'Moderation, fact-checking, and translation' }
    ]
  },
  'tennis-locator': {
    name: 'Tennis Locator',
    description: 'A full-stack app for real-time tennis court searches',
    image: '/projects/tennisproject.jpg',
    github: 'https://github.com/Quoctynoob/Tennis_Locator',
    website: 'https://tennis-locator.vercel.app/',
    languages: ['React', 'TypeScript', 'Firestore'],
    overview: 'Tennis Locator helps tennis enthusiasts find available courts near them in real-time. Users can check court availability, book courts, and connect with other players.',
    features: [
      'Interactive map view of tennis courts',
      'Real-time availability status',
      'Court booking system',
      'Player matching for doubles games',
      'Court ratings and reviews'
    ],
    technologies: [
      { name: 'React & TypeScript', purpose: 'Building the interactive map interface' },
      { name: 'Firestore', purpose: 'Real-time court availability updates' },
      { name: 'Maps API', purpose: 'Location services and court mapping' }
    ]
  }
};

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params);
  const router = useRouter();
  const project = projectContent[slug];

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
            Go back to projects
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
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
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
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
