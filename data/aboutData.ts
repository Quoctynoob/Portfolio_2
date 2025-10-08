import {
  SiCss,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiGit,
  SiExpress,
  SiC,
  SiFirebase,
  SiPython,
  SiSwift,
} from '@icons-pack/react-simple-icons';

export const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss },
        { name: "Sass", icon: SiSass },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "Docker", icon: SiDocker },
        { name: "C", icon: SiC },
        { name: "Python", icon: SiPython },
        { name: "Firebase", icon: SiFirebase },
        { name: "Swift", icon: SiSwift },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "Figma", icon: SiFigma },
      ]
    }
  ];