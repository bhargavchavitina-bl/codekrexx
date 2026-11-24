# Codekrexx | Autonomous AI Solutions & Enterprise Automation

Production-grade, award-winning frontend marketing website for **Codekrexx** — an AI startup engineering autonomous AI agents, enterprise business process automation, context-aware chatbots, automated outbound lead generation, and custom LLM integrations.

---

## 🚀 Live Demo & Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v3 + CSS Variables (Dark theme by default with light-mode toggle)
- **Animation**: Framer Motion (3D cards, scroll reveals, timeline drawing, modal popups, word rotators)
- **Icons**: Lucide React + custom inline SVGs
- **Particles / Canvas**: Custom interactive neural-network canvas responding to mouse physics
- **Effects**: `canvas-confetti` celebration on demo lead submissions, glassmorphism cards, glowing cursor follower

---

## 📁 Project File Structure

```text
codekrexx/
├── public/
│   └── favicon.svg           # Custom glowing neon hexagon SVG icon mark
├── src/
│   ├── assets/               # Static images & graphics
│   ├── components/           # Reusable UI primitives
│   │   ├── AnimatedCounter.jsx   # Counts up numbers smoothly on scroll into view
│   │   ├── Button.jsx            # Shimmer gradient CTA, secondary, outline, ghost
│   │   ├── CursorFollower.jsx    # Glowing desktop mouse follower (disabled on touch)
│   │   ├── GlassCard.jsx         # 3D tilt/parallax card with ambient hover glow
│   │   ├── HeroCanvas.jsx        # Neural particle mesh reacting to mouse proximity
│   │   ├── Logo.jsx              # Stylized Codekrexx SVG mark + gradient typography
│   │   ├── Modal.jsx             # Accessible backdrop-blur popup with keyboard trap
│   │   ├── Reveal.jsx            # Scroll reveal fade/slide with reduced-motion support
│   │   ├── ScrollProgressBar.jsx # Top viewport scroll progress indicator
│   │   ├── SectionHeading.jsx    # Pill badge + gradient headline + subtext
│   │   └── ThemeToggle.jsx       # Dark / Light theme toggle with animated icons
│   ├── data/                 # All copy & content in structured data files
│   │   ├── aiDemoData.js         # Simulator prompt chips, responses & LLM API hook
│   │   ├── blogData.js           # Insights & research posts
│   │   ├── differentiatorsData.js# 4 key pillars & animated stats counters
│   │   ├── faqData.js            # Accordion Q&A (pricing, security, SLAs)
│   │   ├── problemsData.js       # 4 Problem-to-Solution interactive 3D flip cards
│   │   ├── processData.js        # 4-step agile timeline (Discover, Design, Build, Deploy)
│   │   ├── projectsData.js       # 6 realistic filterable case studies with metrics
│   │   ├── servicesData.js       # 6 core service architectures & deliverables
│   │   ├── siteConfig.js         # Brand metadata, nav items, socials, contact info
│   │   └── techStackData.js      # Infinite marquee tech logos
│   ├── hooks/
│   │   ├── useScrollSpy.js       # Highlights active navbar section while scrolling
│   │   └── useTheme.jsx          # Dark / Light theme context & localStorage sync
│   ├── pages/                # Main landing page + optional subpages
│   │   ├── AboutPage.jsx         # /about - Principles, mission, team
│   │   ├── BlogPage.jsx          # /blog - Articles & technical research
│   │   ├── HomePage.jsx          # / - Complete 13-section landing page
│   │   ├── NotFoundPage.jsx      # 404 - Cyber-styled not found page
│   │   ├── ProjectsPage.jsx      # /projects - Full filterable portfolio
│   │   └── ServiceDetailPage.jsx # /services/:slug - Deep-dive architecture specs
│   ├── sections/             # 13 Core Sections in sequential order
│   │   ├── 01. Navbar.jsx        # Sticky glass blur, nav links, CTA, mobile drawer
│   │   ├── 02. Hero.jsx          # Word rotator, 3D agent nodes, dual CTAs
│   │   ├── 03. ProblemToSolution.jsx # 4 3D flip cards (problem front / fix back)
│   │   ├── 04. Services.jsx      # 6 cards with in-card expansion & full modal
│   │   ├── 05. HowWeWork.jsx     # Drawing SVG scroll timeline (4 phases)
│   │   ├── 06. LiveAiDemo.jsx    # Chat simulator with prompt chips & mock LLM
│   │   ├── 07. Projects.jsx      # Filterable case study cards with metrics
│   │   ├── 08. WhyCodekrexx.jsx  # 4 differentiators + animated counters
│   │   ├── 09. TechStackMarquee.jsx # Dual-row infinite pause-on-hover marquee
│   │   ├── 10. Testimonials.jsx  # Auto-playing carousel with swipe & sample tags
│   │   ├── 11. FAQ.jsx           # Animated smooth accordion with full answers
│   │   ├── 12. Contact.jsx       # Gradient banner + validated form + demo state
│   │   └── 13. Footer.jsx        # Brand links, SLA guarantees, back to top
│   ├── App.jsx               # Lazy-loaded router with suspense fallback
│   ├── index.css             # Tailwind layers, scrollbars, gradients, neon glows
│   └── main.jsx              # React 19 application entry point
├── index.html                # SEO meta tags, OpenGraph, Space Grotesk & Inter fonts
├── tailwind.config.js        # Electric violet, cyan, magenta neon palette & animations
└── vite.config.js            # Vite build configuration
```

---

## 🛠️ Setup & Local Development

1. Open your terminal in the project directory:
   ```bash
   cd c:\Users\bharg\Downloads\codekrexx
   ```

2. Dependencies are already installed! If you ever need to reinstall:
   ```bash
   npm install
   ```

3. Start the Vite local development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. Run a production build:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 🎨 How to Customize Content & Brand Colors

### 1. Editing Website Content
All copy is isolated in `/src/data/` so you never have to touch JSX files to edit text:
- **Brand Info & Links**: Edit `src/data/siteConfig.js`.
- **Services & Deliverables**: Edit `src/data/servicesData.js`.
- **Flip Cards**: Edit `src/data/problemsData.js`.
- **Process Steps**: Edit `src/data/processData.js`.
- **AI Demo Responses**: Edit `src/data/aiDemoData.js`.
- **Case Studies**: Edit `src/data/projectsData.js`.
- **Metrics & Differentiators**: Edit `src/data/differentiatorsData.js`.
- **FAQs**: Edit `src/data/faqData.js`.
- **Testimonials**: Edit `src/data/testimonialsData.js`.

### 2. Changing Brand Colors
Brand colors are defined in `tailwind.config.js`:
```javascript
colors: {
  brand: {
    violet: '#8B5CF6',  // Primary electric violet
    purple: '#A855F7',
    cyan: '#06B6D4',    // High-contrast accent cyan
    sky: '#38BDF8',
    magenta: '#EC4899', // Highlight magenta
    fuchsia: '#D946EF',
  }
}
```

---

## 🔌 Connecting Real Backend & APIs

### 1. Contact Form (EmailJS, Formspree, or Webhook)
Open `src/sections/Contact.jsx`. Inside `handleSubmit`, replace the `console.log` demo block with your live service:
```javascript
// Example using Formspree / Custom API
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### 2. Live AI Demo (Real OpenAI, Anthropic, or Gemini)
Open `src/data/aiDemoData.js`. Replace `simulateAiResponse`:
```javascript
export async function generateRealAiSolution(prompt) {
  const res = await fetch('/api/ai-architect', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });
  return await res.json();
}
```

---

## 🚀 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel automatically detects **Vite**.
4. Set Build Command: `npm run build` and Output Directory: `dist`.
5. Create a `vercel.json` in the root for React Router single-page support:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
6. Click **Deploy**.

### Deploying to Netlify
1. Create a `_redirects` file in `public/_redirects`:
```text
/*    /index.html   200
```
2. In Netlify, link your repository with:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Click **Deploy Site**.
