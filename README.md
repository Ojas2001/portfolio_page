# Ojas Deodhar - Personal Portfolio Website

A modern, responsive, high-performance personal portfolio website engineered for **GitHub Pages**.

## 🌟 Features
- **Dark AI Aesthetic:** Deep space theme with glassmorphic panels, glowing radial gradients, and subtle grid lines.
- **Dynamic Typing Effect:** Interactive hero headline cycling through core competencies.
- **Interactive 7-System Explorer:** Dedicated interactive architecture switcher showcasing all 7 systems engineered at ASU Decision Theater Network.
- **Expanded GitHub Projects Showcase:** 10 curated open-source projects direct from GitHub with interactive category filters (LLM Systems & RAG, Computer Vision & Generative, Classical & Deep ML, Hardware & Systems).
- **Expanded Skills Arsenal:** 6-category technical skillset covering hardware acceleration, LLM frameworks, computer vision, classical ML, and cloud infrastructure.
- **Light/Dark Mode Toggle:** Seamless theme toggle with local storage persistence and crisp high-contrast vector social links (GitHub & LinkedIn).
- **Zero Build Dependencies:** Works directly in any browser using vanilla JS and Tailwind CSS CDN.

---

## 🚀 How to Deploy on GitHub Pages in 2 Minutes

### Method A: Host at `Ojas2001.github.io` (Recommended as your primary personal domain)
1. On GitHub, create a new public repository named:
   ```text
   Ojas2001.github.io
   ```
2. In your local terminal, navigate to this portfolio folder and push the files:
   ```bash
   cd /Users/ojasdeodhar/.gemini/antigravity/scratch/portfolio
   git init
   git add .
   git commit -m "Initial release of portfolio website"
   git branch -M main
   git remote add origin https://github.com/Ojas2001/Ojas2001.github.io.git
   git push -u origin main
   ```
3. Your website will be live automatically at:
   ```text
   https://Ojas2001.github.io
   ```

---

### Method B: Host as a project subpath (e.g. `Ojas2001.github.io/portfolio`)
1. Create a repository named `portfolio`.
2. Push this folder to `main`:
   ```bash
   cd /Users/ojasdeodhar/.gemini/antigravity/scratch/portfolio
   git init
   git add .
   git commit -m "Deploy portfolio website"
   git branch -M main
   git remote add origin https://github.com/Ojas2001/portfolio.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings** -> **Pages** -> Under **Build and deployment / Source**, select `Deploy from a branch`, choose `main` branch, and folder `/ (root)`. Click **Save**.
4. Your website will be live in 60 seconds at `https://Ojas2001.github.io/portfolio/`.
