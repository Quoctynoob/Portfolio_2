import {
  SiCss,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiC,
  SiFirebase,
  SiPython,
  SiNextdotjs,
  SiArduino,
} from '@icons-pack/react-simple-icons';

import { FaJava } from 'react-icons/fa';
import { SiZod, SiPrisma } from 'react-icons/si';

export const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Python", icon: SiPython },
        { name: "C", icon: SiC },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss },
        { name: "Java", icon: FaJava },
        
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Sass", icon: SiSass },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "Firebase", icon: SiFirebase },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "Arduino", icon: SiArduino },
        { name: "Zod", icon: SiZod },
        { name: "Prisma", icon: SiPrisma },
        { name: "Docker", icon: SiDocker },
      ]
    }
  ];