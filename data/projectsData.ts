// Project type definition
export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  github?: string;
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
    id: 0,
    name: "Water Pump Controller",
    description: "A distributed IoT system for remote water pump management with tank level sensor, smart shutoffs, and Android app control.",
    image: "/image/water_pump.png",
    category: ["ongoing"],
    languages: ["Arduino", "Kotlin", "ESP32", "Cloudflare"],
    slug: "water-pump-controller"
  },
  {
    id: 1,
    name: "frijio",
    description: "A household management app for tracking inventory, splitting expenses, and suggesting AI-powered recipes.",
    image: "/projects/Frijio.PNG",
    github: "https://github.com/megdcosta/frijio",
    website: "https://frijio.vercel.app",
    category: ["completed", "side projects"],
    languages: ["React", "TypeScript", "Next.js", "Firestore", "OpenAI"],
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
    languages: ["React", "TypeScript", "Next.js", "Firestore"],
    slug: "convoco"
  },
  {
    id: 4,
    name: "Tennis Locator",
    description: "A full-stack app for real-time tennis court searches",
    image: "/projects/tennisproject.jpg",
    github: "https://github.com/Quoctynoob/Tennis_Locator",
    website: "https://tennis-locator.vercel.app/",
    category: ["completed", "side projects"],
    languages: ["React", "TypeScript", "Firestore"],
  },
  {
    id: 5,
    name: "eAssetTracker",
    description: "App to help track and manage your assets valuable for trading and investing.",
    image: "/projects/eTracker.png",
    github: "https://github.com/Quoctynoob/eAsset_Tracker",
    category: ["completed", "side projects"],
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
    languages: ["React", "TypeScript", "Tailwind CSS"]
  },
];

// Project detail content for slug pages
export type ProjectDetail = {
  name: string;
  description: string;
  image: string;
  github?: string;
  website?: string;
  languages: string[];
  overview: string;
  features: string[];
  technologies: { name: string; purpose: string }[];
  credit: string;
};

export const projectDetailContent: Record<string, ProjectDetail> = {
  'frijio': {
    name: 'frijio',
    description: 'A household management app for tracking inventory, splitting expenses, and suggesting AI-powered recipes.',
    image: '/projects/Frijio.PNG',
    github: 'https://github.com/megdcosta/frijio',
    website: 'https://frijio.vercel.app',
    languages: ['React', 'TypeScript', 'Next.js', 'Firestore', 'OpenAI'],
    overview: `We created frij.io to tackle a problem we kept seeing in Canadian households, the chaos of food management that leads to waste and unnecessary spending. Our platform helps users manage their pantry and fridge inventory, collaborate on shared grocery lists, and split expenses with household members. We integrated AI to make it smarter the app suggests recipes based on your actual inventory, helping you minimize waste. The project earned us the Best AI Award at Hack Canada, validating that our solution addresses a real need while leveraging technology to make food management more efficient.`,
    features: [
      'Inventory tracking with expiration date alerts',
      'AI-powered recipe suggestions based on available ingredients',
      'Recipe scanning with OCR technology',
      'Expense splitting with automatic calculation',
      'Shopping list',
      'Multi-user household support'
    ],
    technologies: [
      { name: 'React & TypeScript', purpose: 'Building a type-safe, component-based UI' },
      { name: 'Node.js', purpose: 'Backend API for business logic and data processing' },
      { name: 'Firestore', purpose: 'Real-time database for multi-user synchronization' },
      { name: 'OpenAI API', purpose: 'Generating contextual recipe recommendations' }
    ],
    credit: 'Developed during HackCanada 2025 by me and my team (Meg D\'Costa, Emily Chang, Eleazar Videna)'
  },
  'convoco': {
    name: 'Convoco',
    description: 'A real-time debate platform with AI moderation, fact-checking, translations, and rewards.',
    image: '/projects/Convoco.png',
    github: 'https://github.com/Quoctynoob/Convoco',
    website: 'https://convoco.vercel.app/debates',
    languages: ['React', 'TypeScript', 'Next.js', 'Firestore'],
    overview: 'Convoco transforms online debates into structured, fact-based discussions. With AI-powered moderation and fact-checking, users can engage in meaningful debates while earning rewards for quality contributions.',
    features: [
      'Real-time debate rooms with live participant updates',
      'AI automated fact-checking with source citations',
      'Reputation system and rewards for quality contributions'
    ],
    technologies: [
      { name: 'React & TypeScript', purpose: 'Interactive real-time debate interface' },
      { name: 'Node.js', purpose: 'WebSocket server for real-time communication' },
      { name: 'Firestore', purpose: 'Storing debate history and user profiles' },
      { name: 'AI APIs', purpose: 'Moderation, fact-checking, and translation' }
    ],
    credit: 'Developed during GenAI Genesis 2025 by me and my team (Meg D\'Costa, Emily Chang, Eleazar Videna)'
  },
}