export interface ProfileData {
  name: string;
  title: string;
  headline: string;
  tagline: string;
  location: string;
  education: string;
  availability: string;
  heroImage: string;
  aboutImage: string;
  bio: string[];
}

export const profileData: ProfileData = {
  name: "Emman Karimi",
  title: "Software Engineer • ICT Professional • Graphic Designer",
  headline: "Building software that solves real business problems.",
  tagline: "Bridging robust system architecture, enterprise ICT infrastructure, and striking visual design.",
  location: "Kenya",
  education: "Diploma in Information and Communication Technology (ICT)",
  availability: "Available for select software engineering & ICT projects",
  heroImage: "/assets/hero-portrait.jpg",
  aboutImage: "/assets/about-portrait.webp",
  bio: [
    "I am a versatile Software Engineer, ICT Professional, and Graphic Designer based in Kenya. Holding a Diploma in Information and Communication Technology (ICT), I combine rigorous technical foundations with meticulous design sensibilities to build software that feels handcrafted, performant, and deeply functional.",
    "My expertise spans full-stack web development (React, Next.js, Node.js, Express, TypeScript), database design and management (MySQL, PostgreSQL, MongoDB, Prisma), enterprise ICT system support, computer repair, networking, and professional branding & graphic design.",
    "Whether architecting a multi-tenant ISP management system, engineering productivity platforms, or executing high-end visual brand identities, my approach is rooted in solving real business problems without unnecessary complexity."
  ]
};
