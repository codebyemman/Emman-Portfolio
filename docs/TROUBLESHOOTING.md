# Troubleshooting Guide

## Common Issues & Resolutions

### 1. Port 3000 is already in use
If another local service is occupying port 3000, Vite will automatically switch to the next available port (e.g., `3001`). Check your terminal output for the correct local URL.

### 2. TypeScript compilation errors after editing content
If you modify `client/src/content/profile.ts` or `client/src/content/projects.ts`, ensure that all required properties match the defined TypeScript interfaces (`ProfileData` and `Project`). Run type checking via:
```bash
pnpm check
```

### 3. Missing image assets
Ensure that image paths referenced in `profile.ts` or `projects.ts` point to valid assets in `public/` or storage paths. All portraits and project mockups are fully replaceable by updating the image path string in the respective content file.
