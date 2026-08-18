# Design Brainstorming & Architecture — Emman Karimi Portfolio

## Alternative Stylistic Approaches

### 1. Neo-Brutalist Terminal
* **Theme Name**: BrutalCode
* **Very Brief Intro**: High-contrast monochromatic brutalism with raw monospace typography, exposed grid borders, and utilitarian feedback loops.
* **Probability**: 0.04

### 2. Corporate Enterprise Minimal
* **Theme Name**: SaaS Corporate
* **Very Brief Intro**: Clean corporate blues, standard boxed cards, centered headings, and predictable SaaS landing page layout.
* **Probability**: 0.07

### 3. Crafted Dark Engineering (CHOSEN)
* **Theme Name**: Obsidian Craft
* **Very Brief Intro**: A refined, low-key dark interface inspired by Linear and high-end creative developer portfolios, featuring deep charcoal surfaces, vibrant electric orange accents, bespoke glassmorphism, and asymmetric editorial typography.
* **Probability**: 0.02

---

## Chosen Approach In-Depth: Obsidian Craft

* **Design Movement**: Modern Editorial Dark Mode & Technical Precisionism
* **Core Principles**: 
  1. *Intentional Hierarchy*: Every element guides the eye effortlessly from bold editorial statements to technical proofs.
  2. *Tactile Depth*: Subtle borders (`border-white/10`), layered frosted glass (`backdrop-blur-xl`), and controlled shadows replace flat cards.
  3. *Uncompromising Craft*: Handcrafted feel with precise micro-interactions, responsive grids, and clean separation of concerns.
* **Color Philosophy**: Low-key obsidian dark foundation (`#0a0a0c` to `#121216`) paired with a high-impact, ownable signature orange accent (`#f97316` / `#ea580c`), symbolizing energy, precision, and modern engineering. Text uses crisp off-white (`#f8fafc`) for primary and muted gray (`#94a3b8`) for secondary elements.
* **Layout Paradigm**: Asymmetric editorial layout with split hero sections, offset project showcases, floating glass navigation, and multi-column structured grid for skills and services.
* **Signature Elements**: 
  1. Live availability badge ("Available for select software engineering & ICT projects")
  2. Interactive Project Modal / Detail View with problem/solution breakdowns
  3. Professional editable content files (`content/profile.ts`, `content/projects.ts`) for 100% developer ownership.
* **Interaction Philosophy**: Snappy, physically intuitive micro-interactions. Buttons scale slightly (`scale-[0.98]`) on press; cards lift subtly with border illumination on hover.
* **Animation**: Butter-smooth entrance reveals using Framer Motion (`opacity: 0, y: 20` to `opacity: 1, y: 0`), staggered grid reveals, and hover transitions under 200ms.
* **Typography System**: 
  * *Display / Headings*: Plus Jakarta Sans or Outfit (bold, geometric, authoritative).
  * *Body*: Inter / SF Pro (clean, high legibility at all sizes).
  * *Monospace*: JetBrains Mono (for code snippets, tech tags, and metrics).
* **Brand Essence**: A multi-disciplinary software engineer, ICT systems expert, and graphic designer from Kenya who bridges robust system architecture with striking visual design.
* **Brand Voice**: Professional, direct, confident, and grounded in real-world problem solving.
  * *Example 1*: "Building resilient software and systems that scale with business reality."
  * *Example 2*: "From enterprise ICT infrastructure to polished web applications."
* **Wordmark & Logo**: Minimalist geometric monogram `EK` inside a precise rounded square with an orange accent dot.
* **Signature Brand Color**: Electric Amber / Burnt Orange (`#f97316`).

## Style Decisions

The portrait treatment will remain authentic to Kenya while being graded into the Obsidian Craft system through darker editorial contrast, consistent framing, and technical captions. The EK monogram is a primary brand asset and will recur at key transitions, not only in the navigation. Project imagery will be wrapped in one dark showcase treatment so bright external screenshots read as deliberate artefacts within the same brand world. Thin coordinate marks, crosshairs, and glassy edge illumination will continue through the middle sections to maintain engineering precision across the full page.

All future visual choices must answer: **Does this choice reinforce or dilute Obsidian Craft?**

### Visual Review Implementation Log

The first review identified four valuable refinements: deepen the portrait grading, increase monogram visibility, add tactile depth to the project and capability areas, and unify disparate project screenshots under one dark presentation frame. These are being applied together as a single art-direction pass so the page keeps its existing editorial rhythm while gaining stronger brand cohesion.

---

## Component-Level Reminder

Every page/component edit should preserve the following: a low-key obsidian base, electric amber as the only signal color, editorially asymmetric spacing, mono micro-labels, dark framed imagery, glass surfaces with restrained borders, and motion limited to purposeful reveal/hover behavior.
