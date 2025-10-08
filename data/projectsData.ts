// Project type definition
export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  github: string;
  website?: string;
  category: ('completed' | 'ongoing' | 'side projects' | 'academic')[];
  languages: string[];
  isVertical?: boolean;
  slug?: string;
};

// Define category type to match the potential filter values
export type CategoryType = 'all' | 'completed' | 'ongoing' | 'side projects' | 'academic';

// Projects data
export const projectsData: Project[] = [
  {
    id: 1,
    name: "frijio",
    description: "A household management app for tracking inventory, splitting expenses, and suggesting AI-powered recipes.",
    image: "/projects/Frijio.PNG",
    github: "https://github.com/megdcosta/frijio",
    website: "https://frijio.vercel.app",
    category: ["completed", "side projects"],
    languages: ["React", "TypeScript", "Node.js", "Firestore", "OpenAI"],
    slug: "frijio"
  },
  /*{
    id: 2,
    name: "frijio mobile",
    description: "IOS version of frijio, making it easier to manage your household on the go.",
    image: "/projects/frij_mobile.png",
    github: "https://github.com/Quoctynoob",
    website: "https://github.com/Quoctynoob",
    category: ["ongoing", "side projects"],
    languages: ["Swift", "Supabase", "OpenAI"],
    isVertical: true
  },*/
  {
    id: 3,
    name: "Convoco",
    description: "A real-time debate platform with AI moderation, fact-checking, translations, and rewards.",
    image: "/projects/Convoco.png",
    github: "https://github.com/Quoctynoob/Convoco",
    website: "https://convoco.vercel.app/debates",
    category: ["completed", "side projects"],
    languages: ["React", "TypeScript", "Node.js", "Firestore"],
    slug: "convoco"
  },
  {
    id: 4,
    name: "Tennis Locator",
    description: "A full-stack app for real-time tennis court searches",
    image: "/projects/tennisproject.jpg",
    github: "https://github.com/Quoctynoob/Tennis_Locator",
    website: "https://tennis-locator.vercel.app/",
    category: ["ongoing", "side projects"],
    languages: ["React", "TypeScript", "Firestore"],
    slug: "tennis-locator"
  },
  {
    id: 5,
    name: "eAssetTracker",
    description: "App to help track and manage your assets valuable for trading and investing.",
    image: "/projects/eTracker.png",
    github: "https://github.com/Quoctynoob",
    website: "https://stock-portfolio-management-lac.vercel.app",
    category: ["ongoing", "side projects"],
    languages: ["React", "TypeScript", "PostgreSQL"]
  },
  {
    id: 6,
    name: "Online Menu",
    description: "Simple online and responsive menu to assist with local business",
    image: "/projects/restaurantproject.jpg",
    github: "https://github.com/Quoctynoob/Me-s-restaurant",
    website: "https://quoctynoob.github.io/Me-s-restaurant/",
    category: ["completed", "side projects"],
    languages: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 7,
    name: "Car Management System",
    description: "Simple command-line application to manage car inventory",
    image: "/projects/Car_management.png",
    github: "https://github.com/Quoctynoob/Car-Management-System",
    category: ["completed", "academic"],
    languages: ["C"]
  },
  {
    id: 8,
    name: "Todo List",
    description: "Simple Todo-list",
    image: "/projects/firebaseproject.jpg",
    github: "https://github.com/Quoctynoob/Todo-List",
    website: "https://quoctynoob.github.io/Todo-List/",
    category: ["completed", "academic"],
    languages: ["JavaScript", "Firebase", "HTML", "CSS"]
  },
  {
    id: 9,
    name: "Joke/Weather Generator",
    description: "Simple Joke/Weather Generator using API",
    image: "/projects/jokeGenerator.jpg",
    github: "https://github.com/Quoctynoob/Joke-Weather-Generator",
    website: "https://quoctynoob.github.io/Joke-Weather-Generator/",
    category: ["completed", "academic"],
    languages: ["JavaScript", "HTML", "CSS"]
  },
  {
    id: 10,
    name: "Portfolio 1",
    description: "My previous portfolio website",
    image: "/projects/old_portfolio.png",
    github: "https://github.com/Quoctynoob/Portfolio",
    website: "https://portfolio-quoctynoobs-projects.vercel.app",
    category: ["completed", "side projects"],
    languages: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  },
];

// Project detail content for slug pages
export type ProjectDetail = {
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
};

export const projectDetailContent: Record<string, ProjectDetail> = {
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
