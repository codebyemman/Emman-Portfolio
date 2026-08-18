# Local Setup Guide (Windows 10 / Git Bash)

## Prerequisites
Ensure the following tools are installed on your Windows 10 development machine:
- **Node.js** (LTS version recommended, v18 or higher)
- **pnpm** (Package manager, install via `npm install -g pnpm`)
- **Git / Git Bash**
- **Visual Studio Code**

## Installation Steps
1. Clone or extract the repository to your local machine.
2. Open **Git Bash** or your terminal inside the project root directory.
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start the local development server:
   ```bash
   pnpm dev
   ```
5. Open your browser at `http://localhost:3000`.

## Building for Production
To generate an optimized static production build:
```bash
pnpm build
```
The compiled output will be placed in the `dist/public/` directory.
