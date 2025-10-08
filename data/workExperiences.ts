// Work experience type definition
export type WorkExperience = {
  id: number;
  period: string;
  company: string;
  position: string;
  slug?: string; // URL slug for job detail page
};

// Work experiences data
export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    period: "June 2025 - Present",
    company: "Abinsula",
    position: "Software Developer Intern",
    slug: "abinsula"
  },

  {
    id: 2,
    period: "May 2024 - Aug 2024",
    company: "Fracht Group",
    position: "IT Support Developer",
    slug: "fracht-group"
  },

  {
    id: 3,
    period: "Sep 2023 - April 2025",
    company: "Google Developer Student Club",
    position: "Staff Member",

  },

  {
    id: 4,
    period: "Oct 2022 - Jan 2023",
    company: "Milano Coffee",
    position: "Cashier",
  },
];
