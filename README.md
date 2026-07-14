# Portfolio site

A modern, minimal portfolio website built with React, Vite, and Tailwind CSS. Features animated SVG background beams, smooth scrolling, and fully responsive design.

## Tech Stack

- **React** — Component-based UI
- **Vite** — Lightning-fast dev server & build
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Smooth animations
- **Lucide React** — Crisp icons
- **React Scroll** — Smooth section navigation

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/        # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Work.jsx
│   ├── Connect.jsx
│   ├── Footer.jsx
│   ├── BackgroundBeams.jsx
│   ├── TechBadge.jsx
│   └── ExperienceCard.jsx
├── data/              # Content data (easy to edit)
│   ├── technologies.js
│   ├── experience.js
│   └── projects.js
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

All content is stored in `src/data/` — edit the data files to update your:
- Technologies & skills
- Work experience
- Projects

## Deployment

The project is pre-configured for deployment on:

### Vercel
```bash
npm run build
# Deploy the `dist/` folder
```

### Netlify
Set build command to `npm run build` and publish directory to `dist`.

### GitHub Pages
Use the GitHub Actions workflow in `.github/workflows/ci.yml` as a base and add a deployment step.
