export interface SkillCategory {
  title: string;
  code: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Software Development",
    code: "01",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "REST APIs", "Tailwind CSS"],
  },
  {
    title: "Databases & Backend",
    code: "02",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM", "Database Management", "Data Modeling"],
  },
  {
    title: "ICT & Systems",
    code: "03",
    skills: ["ICT System Support", "Computer Repair & Maintenance", "Networking & Routing", "Management Information Systems (MIS)", "PSAD", "System Administration"],
  },
  {
    title: "Graphic Design & UI",
    code: "04",
    skills: ["Adobe Photoshop", "Brand Identity", "Flyer & Poster Design", "UI/UX Design", "Typography & Layout", "Visual Arts"],
  },
];
