# Architecture Overview

## Design Philosophy
The portfolio is architected around the **Obsidian Craft** design system, combining editorial dark mode aesthetics with rigorous engineering precision.

## Directory Structure
```
emman-karimi-portfolio/
├── client/
│   ├── public/         # Static configuration files
│   ├── src/
│   │   ├── content/    # Editable profile.ts and projects.ts data
│   │   ├── pages/      # Home.tsx and NotFound.tsx
│   │   ├── App.tsx     # Route management
│   │   ├── main.tsx    # React mount entry
│   │   └── index.css   # Obsidian Craft design tokens & styles
│   └── index.html      # Document head and metadata
├── proof/              # Engineering audit reports
├── docs/               # Technical documentation
├── package.json        # Dependencies & scripts
└── vite.config.ts      # Vite build configuration
```

## Data Flow & Editable Content
To update site content without modifying UI components:
1. **Profile Information**: Edit `client/src/content/profile.ts` to update headline, bio, location, education, or skill groups.
2. **Projects**: Edit `client/src/content/projects.ts` to add or modify project case studies, metrics, problem/solution statements, and technologies.
3. **Portraits & Media**: Replace image files referenced in the content files or static asset directories.
