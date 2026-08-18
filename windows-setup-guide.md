# Emman Karimi Portfolio — Windows Local Setup Guide

This document provides step-by-step instructions for downloading, extracting, installing, and running the Emman Karimi portfolio on a local Windows machine (Windows 10 or Windows 11).

## 1. Prerequisites for Windows
Before you begin, ensure you have the following software installed on your Windows PC:
- **Node.js (LTS version 20.19+ or 22.12+ recommended)**: Download and run the installer from [nodejs.org](https://nodejs.org/). Node.js includes `npm`. These versions are compatible with the included Vite toolchain.
- **pnpm (Recommended package manager)**: Open PowerShell and run the following command to enable pnpm globally:
  ```powershell
  corepack enable
  corepack prepare pnpm@latest --activate
  ```
- **Code Editor**: Visual Studio Code (recommended) or any modern text editor.

---

## 2. Step-by-Step Instructions After Downloading the ZIP File

### Step 1: Extract the ZIP Archive
1. Locate the downloaded ZIP file (`emman-karimi-portfolio.zip`) in your **Downloads** folder.
2. Right-click the ZIP file and select **Extract All...**.
3. Choose your destination folder (for example, `C:\Projects\emman-karimi-portfolio`) and click **Extract**. Ensure you extract directly into a dedicated folder rather than mixing files with other projects.

### Step 2: Open PowerShell or Command Prompt
1. Open the extracted project folder (`emman-karimi-portfolio`).
2. Click on the address bar at the top of File Explorer, type `cmd` or `powershell`, and press **Enter**. This opens your terminal directly inside the project directory.

### Step 3: Install Dependencies
Run the package installation command in your terminal:
```powershell
pnpm install
```
*(Note: If you prefer using npm, you can run `npm install`, though `pnpm` is recommended for optimal workspace locking).*

### Step 4: Run the Development Server
To launch the live development server with hot module replacement (HMR), run:
```powershell
pnpm dev
```
The terminal will output a local URL (normally `http://localhost:5173`). If that port is already in use, Vite will choose another available port and print it in the terminal. 

### Step 5: Open in Your Browser
Open your preferred web browser (Google Chrome, Microsoft Edge, or Firefox) and navigate to:
```url
http://localhost:5173
```
You will instantly see the fully interactive portfolio featuring the Obsidian Craft design system, portraits, case study modals, the contact system, the theme toggle, and the testimonials carousel.

---

## 3. Building for Production

If you want to test the production build locally on Windows, run:
```powershell
pnpm build
pnpm preview
```
This bundles the optimized static application into the `dist/` folder and starts a local preview server, normally at `http://localhost:4173`.

---

## 4. Troubleshooting Common Windows Issues

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **`pnpm` command not found** | Corepack not enabled or Node.js missing | Run `corepack enable` in PowerShell or install Node.js from nodejs.org. |
| **Script execution policy error in PowerShell** | Windows security restricting local scripts | Run PowerShell as Administrator and execute `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`, then retry. |
| **The default port is already in use** | Another local service is using Vite's default port | Vite will automatically suggest another available port, or you can stop the conflicting process. Always open the exact URL printed in the terminal. |

---
*Emman Karimi Portfolio · Built with intention.*
