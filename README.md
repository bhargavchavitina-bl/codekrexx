# Codekrexx | Autonomous AI Solutions & Enterprise Automation

Clean, modern, production-grade frontend marketing website for **Codekrexx** — an AI startup engineering autonomous AI agents, enterprise business process automation, context-aware chatbots, automated outbound lead generation, and custom LLM integrations.

---

## 🎨 Unified Codekrexx Logo Palette

All brand gradients, shadows, text accents, and animations are strictly derived from the unified Codekrexx logo color system defined in `tailwind.config.js` and `src/index.css`:

- **Primary**: `#7C3AED` (Electric Violet)
- **Secondary**: `#06B6D4` (Cyber Cyan)
- **Accent**: `#3B82F6` (Electric Blue)
- **Dark Background**: `#07070E` (Deep space navy / near-black)
- **Light Mode Support**: `#F8FAFC` (Clean high-contrast theme toggle)

---

## 🚀 Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v3 + CSS Variables
- **Animation**: Framer Motion (scroll reveals, accordion, timeline draw, ambient drifting canvas)
- **Icons**: Lucide React + custom SVGs
- **Particles**: Lightweight HTML5 neural canvas (ambient drifting particle mesh with zero mouse interference)

---

## 📋 Section Layout (in exact order)

1. **Navbar**: Sticky glassmorphism header with active-section indicator (`useScrollSpy`), theme toggle, and booking CTA.
2. **Hero**: Headline with dynamic word rotator (*"Automate / Scale / Innovate / Accelerate / Solve"*), dual CTAs (*"Get Started"* & *"Our Services"*), and active agent node console.
3. **Problem to Solution**: 4 interactive 3D flip cards (problem bottleneck on front, automated Codekrexx fix on back).
4. **Services**: 6 capability cards with in-card expandable deliverables and full architectural blueprint modals.
5. **How We Work**: Animated 4-phase agile timeline (Discover, Design, Build, Deploy & Improve) with scrolling vertical line draw.
6. **Tech Stack**: Dual-row infinite scrolling logo marquee (*"Frontier AI & Enterprise Infrastructure Ecosystem"*) pausing on hover.
7. **Testimonials**: Auto-playing client feedback carousel with swipe support, indicator dots, and sample tags.
8. **FAQ**: Smooth animated accordion covering project pricing, timelines, data governance, and legacy system integration.
9. **Contact**: High-impact gradient banner with direct engineering access, one-click email copying, phone line, headquarters, and social channels.
10. **Footer**: Brand glyph, capability links, navigation shortcuts, security whitepaper notice, and smooth back-to-top button.

---

## 📁 Project File Structure

```text
codekrexx/
├── index.html                     # SEO metadata, Open Graph tags, Space Grotesk & Inter fonts
├── package.json                   # React 19, Vite, Tailwind CSS, Framer Motion, Lucide
├── tailwind.config.js             # Brand palette (#7C3AED, #06B6D4, #3B82F6) & shadows
├── postcss.config.js              # PostCSS with Tailwind & Autoprefixer
├── vercel.json                    # Single-page client routing rewrites for Vercel
├── README.md                      # Project documentation and customization guide
├── public/
│   ├── favicon.svg                # Custom brand-colored AI agent node SVG favicon
│   └── _redirects                 # Single-page client routing fallback for Netlify
└── src/
    ├── main.jsx                   # React 19 application entry point
    ├── App.jsx                    # Lazy-loaded router with suspense fallback & progress bar
    ├── index.css                  # CSS variables, grid pattern, scrollbar styling
    ├── hooks/
    │   ├── useTheme.jsx           # Dark / Light theme context & localStorage sync
    │   └── useScrollSpy.js        # Active section tracking for sticky navbar
    ├── components/
    │   ├── Button.jsx             # Gradient CTA, secondary, outline & ghost variants
    │   ├── GlassCard.jsx          # Clean glass card with hover glow and border styling
    │   ├── HeroCanvas.jsx         # Ambient drifting neural canvas (no mouse interference)
    │   ├── Logo.jsx               # Codekrexx logo mark with brand gradient
    │   ├── Modal.jsx              # Accessible backdrop-blur dialog
    │   ├── Reveal.jsx             # Scroll reveal wrapper respecting prefers-reduced-motion
    │   ├── ScrollProgressBar.jsx  # Top viewport scroll progress indicator
    │   ├── SectionHeading.jsx     # Glowing badge + gradient headline + subtext
    │   └── ThemeToggle.jsx        # Dark / Light mode toggle button with rotating sun/moon
    ├── data/                      # 100% of website copy in structured data files
    │   ├── blogData.js            # Sample research and insights
    │   ├── faqData.js             # Accordion Q&A (pricing, security, SLAs)
    │   ├── problemsData.js        # 4 Problem-to-Solution interactive flip card specs
    │   ├── processData.js         # 4-step agile timeline (Discover, Design, Build, Deploy)
    │   ├── servicesData.js        # 6 core service architectures & deliverables
    │   ├── siteConfig.js          # Brand metadata, nav items, socials, contact info
    │   └── techStackData.js       # Infinite marquee technology logos & categories
    │   └── testimonialsData.js    # Client reviews with sample badges & ratings
    ├── sections/                  # 10 Core Sections in sequential order
    │   ├── Navbar.jsx             # 1. Sticky glass navbar with active spy & theme toggle
    │   ├── Hero.jsx               # 2. Word rotator, 3D agent nodes, dual CTAs
    │   ├── ProblemToSolution.jsx  # 3. 4 3D flip cards (problem on front, fix on back)
    │   ├── Services.jsx           # 4. 6 cards with in-card expand & full modal
    │   ├── HowWeWork.jsx          # 5. Drawing vertical SVG scroll timeline (4 phases)
    │   ├── TechStackMarquee.jsx   # 6. Dual-row infinite marquee immediately after How We Work
    │   ├── Testimonials.jsx       # 7. Auto-playing carousel with swipe & sample tags
    │   ├── FAQ.jsx                # 8. Smooth animated accordion with full answers
    │   ├── Contact.jsx            # 9. Gradient banner + direct contact channels
    │   └── Footer.jsx             # 10. Brand links, SLA guarantees & back-to-top button
    └── pages/                     # Extra subpages built with code-splitting
        ├── HomePage.jsx           # Complete 10-section landing page with booking modal
        ├── ServiceDetailPage.jsx  # /services/:slug deep-dive architecture specs
        ├── AboutPage.jsx          # /about company vision, principles & mission
        ├── BlogPage.jsx           # /blog insights & research articles
        └── NotFoundPage.jsx       # 404 cyber error page with return link
```

---

## 🛠️ Setup & Local Development

1. Open your terminal in the project directory:
   ```bash
   cd c:\Users\bharg\Downloads\codekrexx
   ```

2. Start the Vite local development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

3. Run a production build:
   ```bash
   npm run build
   ```

4. Run code linter:
   ```bash
   npm run lint
   ```

---

## 🚀 Deployment Guide

### Deploying to Vercel
1. Push your repository to GitHub.
2. In [Vercel](https://vercel.com), click **"Add New Project"** and import the repository.
3. Framework Preset: **Vite** (Build Command: `npm run build`, Output Directory: `dist`).
4. `vercel.json` is already included to support client-side routing on refreshes.
5. Click **Deploy**.

### Deploying to Netlify
1. Link your repository in [Netlify](https://netlify.com).
2. Build command: `npm run build` | Publish directory: `dist`.
3. `public/_redirects` is already included to handle SPA routing.
4. Click **Deploy Site**.
