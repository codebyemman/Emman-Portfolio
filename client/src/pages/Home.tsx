/**
 * Obsidian Craft page rules: low-key technical editorialism, asymmetric composition,
 * tactile glass surfaces, electric amber hierarchy, and purposeful motion only.
 */
import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
  Zap,
} from "lucide-react";
import { profileData } from "@/content/profile";
import { projectsData, type Project } from "@/content/projects";
import { contactData } from "@/content/contact";
import { socialLinks } from "@/content/social";
import { skillCategories } from "@/content/skills";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const socialUrl = (platform: string) => socialLinks.find((link) => link.platform === platform)?.url ?? "#";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-label__index">{index}</span>
      <span>{children}</span>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (project: Project) => void }) {
  return (
    <motion.article variants={fadeUp} className={`project-card project-card--${index + 1}`}>
      <button className="project-card__visual" onClick={() => onOpen(project)} aria-label={`Open ${project.title} details`}>
        <img src={project.image} alt={`${project.title} interface preview`} />
        <div className="project-card__coords" aria-hidden="true"><span>EK / 0{index + 1}</span><span>CASE STUDY</span></div>
        <div className="project-card__overlay">
          <span>View case study</span>
          <ArrowUpRight size={17} strokeWidth={1.5} />
        </div>
      </button>
      <div className="project-card__body">
        <div>
          <p className="eyebrow">0{index + 1} / {project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-card__subtitle">{project.subtitle}</p>
        </div>
        <button className="text-link" onClick={() => onOpen(project)}>
          Explore <ArrowUpRight size={15} />
        </button>
      </div>
      <div className="project-card__tags">
        {project.technologies.slice(0, 4).map((technology) => <Pill key={technology}>{technology}</Pill>)}
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.div className="project-modal" initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.98 }} transition={{ duration: 0.3, ease: "easeOut" }} onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={onClose} aria-label="Close project details"><X size={20} /></button>
            <div className="project-modal__image"><img src={project.image} alt={`${project.title} interface preview`} /></div>
            <div className="project-modal__content">
              <p className="eyebrow">{project.category}</p>
              <h2>{project.title}</h2>
              <p className="project-modal__subtitle">{project.subtitle}</p>
              <p className="project-modal__description">{project.description}</p>
              <div className="project-modal__columns">
                <div><span className="modal-label">The problem</span><p>{project.problem}</p></div>
                <div><span className="modal-label">The solution</span><p>{project.solution}</p></div>
              </div>
              <div className="project-modal__footer">
                <div className="project-modal__tags">{project.technologies.map((technology) => <Pill key={technology}>{technology}</Pill>)}</div>
                <div className="project-modal__links">
                  {project.githubUrl && <a href={project.githubUrl} aria-label="Open GitHub" className="icon-link"><Github size={18} /></a>}
                  {project.demoUrl && <a href={project.demoUrl} aria-label="Open live demo" className="icon-link"><ExternalLink size={18} /></a>}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("ek-theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const nextTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : prefersLight ? "light" : "dark";
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("ek-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navigateTo = (id: string) => {
    closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    document.documentElement.classList.add("theme-transitioning");
    setTheme((current) => current === "dark" ? "light" : "dark");
    window.setTimeout(() => document.documentElement.classList.remove("theme-transitioning"), 320);
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Emman Karimi home">
          <img src="/assets/ek-monogram.png" alt="EK monogram" />
          <span><strong>EMMAN</strong><small>Karimi / Portfolio</small></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "desktop-nav--open" : ""}`} aria-label="Primary navigation">
          {[['about', 'About'], ['projects', 'Projects'], ['testimonials', 'Trust'], ['skills', 'Skills'], ['contact', 'Contact']].map(([id, label], index) => (
            <button key={id} onClick={() => navigateTo(id)}><span>0{index + 1}</span>{label}</button>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-talk" href={contactData.emailUrl}><span className="status-dot" /> Let's talk <ArrowUpRight size={14} /></a>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}<span>{theme === "dark" ? "Light" : "Dark"}</span></button>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="hero-grid">
            <motion.div className="hero-copy" initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="availability"><span className="status-dot" />{profileData.availability}</motion.div>
              <motion.p variants={fadeUp} className="eyebrow">Software Engineer <span>/</span> ICT Professional <span>/</span> Graphic Designer</motion.p>
              <motion.h1 variants={fadeUp}>Building software<br /><em>that moves</em> business<br />forward<span className="accent-mark">.</span></motion.h1>
              <motion.p variants={fadeUp} className="hero-description">{profileData.tagline}</motion.p>
              <motion.div variants={fadeUp} className="hero-actions">
                <button className="button button--primary" onClick={() => navigateTo("projects")}>View selected work <ArrowDownRight size={17} /></button>
                <button className="button button--ghost" onClick={() => navigateTo("contact")}>Let's work together <ArrowUpRight size={17} /></button>
              </motion.div>
              <motion.div variants={fadeUp} className="hero-footnote"><span className="mono">Based in</span><span className="line" /><span>Kenya · EAT</span></motion.div>
            </motion.div>
            <motion.div className="hero-portrait-wrap" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}>
              <div className="hero-portrait-frame"><img src={profileData.heroImage} alt="Emman Karimi in a white shirt and tie" /></div>
              <div className="hero-portrait-meta"><span>Portrait / 01</span><span>Emman Karimi</span></div>
              <div className="hero-cross hero-cross--one" /><div className="hero-cross hero-cross--two" />
            </motion.div>
          </div>
          <div className="hero-marquee" aria-hidden="true"><div>SOFTWARE ENGINEERING <span>✦</span> SYSTEMS THINKING <span>✦</span> VISUAL DESIGN <span>✦</span> REAL WORLD IMPACT <span>✦</span> SOFTWARE ENGINEERING <span>✦</span></div></div>
        </section>

        <section id="about" className="about-section section-pad">
          <div className="section-intro"><SectionLabel index="01">About the work</SectionLabel><p className="section-aside">Technical thinking, human outcomes.<br />Built from Kenya, shipped everywhere.</p></div>
          <div className="about-grid">
            <motion.div className="about-image-wrap" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}><img src={profileData.aboutImage} alt="Emman Karimi standing outdoors" /><div className="about-stamp" aria-hidden="true"><img src="/assets/ek-monogram.png" alt="" /><span>craft / systems</span></div><span className="image-caption">Field notes / 2026</span></motion.div>
            <motion.div className="about-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
              <motion.p variants={fadeUp} className="eyebrow">A practical approach to technology</motion.p>
              <motion.h2 variants={fadeUp}>Good software earns<br /><span>its place.</span></motion.h2>
              {profileData.bio.map((paragraph) => <motion.p key={paragraph} variants={fadeUp} className="body-copy">{paragraph}</motion.p>)}
              <motion.div variants={fadeUp} className="about-details"><div><span className="detail-label">Education</span><span>{profileData.education}</span></div><div><span className="detail-label">Location</span><span>{profileData.location}</span></div></motion.div>
            </motion.div>
          </div>
        </section>

        <section id="testimonials" className="testimonials-wrap section-pad">
          <div className="section-intro"><SectionLabel index="02">Client feedback</SectionLabel><p className="section-aside">Trust is earned in the details.<br />No invented proof, ever.</p></div>
          <TestimonialsSection />
        </section>

        <section id="projects" className="projects-section section-pad">
          <div className="section-intro"><SectionLabel index="03">Selected work</SectionLabel><p className="section-aside">A few systems, interfaces, and identities<br />built with intent.</p></div>
          <motion.div className="projects-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>{projectsData.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={setSelectedProject} />)}</motion.div>
        </section>

        <section id="skills" className="skills-section section-pad">
          <div className="section-intro"><SectionLabel index="04">Capabilities</SectionLabel><p className="section-aside">The tools I use to turn<br />complexity into clarity.</p></div>
          <div className="skills-layout">
            <div className="skills-statement"><p className="eyebrow">The toolkit</p><h2>Built across<br /><span>the stack.</span></h2><p className="body-copy">A cross-disciplinary practice means fewer hand-offs, more context, and a closer line between the original idea and the final product.</p><div className="skills-signature"><Zap size={16} /> precision over noise</div></div>
            <div className="skills-list">{skillCategories.map((group, index) => <motion.div key={group.code} className="skill-group" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: index * 0.08 }}><div className="skill-group__top"><span className="mono">{group.code}</span><h3>{group.title}</h3><ChevronRight size={17} /></div><div className="skill-items">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></motion.div>)}</div>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="contact-card"><div className="contact-card__texture" aria-hidden="true" /><div className="contact-card__copy"><p className="eyebrow">05 / Start a conversation</p><h2>Have a problem<br />worth solving<span className="accent-mark">?</span></h2><p>Tell me what you're building, where it's stuck, or what needs to work better. I'll bring the right mix of engineering, systems thinking, and visual craft.</p><a className="button button--primary" href={contactData.whatsappUrl} target="_blank" rel="noreferrer">Start a Project <ArrowUpRight size={17} /></a></div><div className="contact-card__signal"><span className="signal-ring signal-ring--one" /><span className="signal-ring signal-ring--two" /><span className="signal-core" /><span className="mono">EK / 01</span></div></div>
          <div className="contact-details"><div><SectionLabel index="06">Direct lines</SectionLabel><p className="section-aside">Choose the channel that<br />fits the conversation.</p></div><ContactSection /></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><img src="/assets/ek-monogram.png" alt="EK monogram" /><span>Emman Karimi</span></div><p>Software engineer · ICT professional · graphic designer</p><div className="footer-links"><a href={socialUrl("GitHub")} aria-label="GitHub"><Github size={17} /></a><a href={socialUrl("LinkedIn")} aria-label="LinkedIn"><Linkedin size={17} /></a><a href={contactData.emailUrl} aria-label="Email"><Mail size={17} /></a></div><p className="footer-copyright">© {new Date().getFullYear()} Emman Karimi. Built with intention.</p></footer>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
