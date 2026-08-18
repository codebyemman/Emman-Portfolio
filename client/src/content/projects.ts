export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  image: string;
  technologies: string[];
  metrics?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "netfusion-ai",
    title: "NetFusion AI",
    subtitle: "ISP Management Platform",
    category: "Software Engineering & Systems",
    description: "A comprehensive ISP management and network intelligence platform designed to streamline subscriber billing, bandwidth monitoring, and automated troubleshooting.",
    problem: "Regional ISPs struggle with manual subscriber provisioning, delayed payment reconciliations, and opaque network congestion monitoring leading to high churn.",
    solution: "Engineered a centralized dashboard integrating real-time traffic telemetry, automated M-Pesa / billing webhooks, and predictive bandwidth allocation algorithms.",
    image: "/assets/project-focusmate.png",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    metrics: ["99.9% Uptime", "30% Faster Provisioning", "Automated Billing"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "discipline-os",
    title: "Discipline OS",
    subtitle: "Productivity & Execution Platform",
    category: "Full-Stack Web App",
    description: "A rigorous daily execution and productivity tracker built for high-performing engineering teams and solo founders to conquer task inertia.",
    problem: "Traditional todo apps encourage endless list accumulation without forcing priority discipline or deep-work habit tracking.",
    solution: "Created a distraction-free command-line inspired interface with integrated time-blocking analytics, completion velocity tracking, and urgent task triage.",
    image: "/assets/project-nexus.png",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "MySQL", "Tailwind CSS"],
    metrics: ["40% Higher Task Completion", "Zero-Latency UI", "Advanced Time Analytics"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "trading-journal",
    title: "Trading Journal Pro",
    subtitle: "Financial Performance Analytics Dashboard",
    category: "Data Analytics & Dashboard",
    description: "An institutional-grade trading journal and risk analytics terminal that tracks trade setups, win/loss ratios, and macro correlation metrics.",
    problem: "Retail traders often fail due to undisciplined trade logging, lack of emotional accountability, and absence of granular statistical performance breakdowns.",
    solution: "Developed an advanced analytical dashboard featuring dynamic P&L charts, setup classification tags, risk-to-reward metrics, and automated journaling notes.",
    image: "/assets/project-omega.png",
    technologies: ["React", "Recharts", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    metrics: ["Real-time P&L Tracking", "Advanced Win-Rate Matrix", "Multi-Asset Support"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "freshvibe-graphics",
    title: "Freshvibe Graphics",
    subtitle: "Brand Identity & Corporate Design Suite",
    category: "Graphic Design & Branding",
    description: "A curated collection of commercial brand identities, promotional poster mockups, and visual design systems crafted for modern businesses.",
    problem: "Emerging businesses often suffer from disjointed visual identities and low-impact marketing collateral that fails to capture target audiences.",
    solution: "Designed cohesive brand guidelines, striking poster systems, and high-conversion marketing assets using Adobe Photoshop and advanced layout principles.",
    image: "/assets/project-terminal.png",
    technologies: ["Adobe Photoshop", "Brand Strategy", "Typography", "Print Production", "UI Design"],
    metrics: ["15+ Brands Developed", "High-Resolution Mockups", "Complete Visual Systems"],
    demoUrl: "#",
    githubUrl: "#"
  }
];
