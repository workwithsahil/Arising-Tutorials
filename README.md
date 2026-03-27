# Arising Tutorials — Official Web Platform

<div align="center">
  <h3>Premier Coaching for CBSE, ICSE, JEE & NEET in Andheri East, Mumbai</h3>
  <p>A modern, highly-optimized, fast, and SEO-friendly React application built with Vite and Tailwind CSS.</p>
</div>

---

## 📖 Table of Contents

1. [Domain & Contact Information](#-domain--contact-information)
2. [Detailed Page Sections](#-detailed-page-sections)
3. [Technology Stack](#-technology-stack)
4. [File & Directory Structure](#-file--directory-structure)
5. [Getting Started](#-getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Development Server](#running-the-development-server)
6. [Available Scripts](#-available-scripts)
7. [Environment Variables](#-environment-variables)
8. [Routing System](#-routing-system)
9. [Component Architecture](#-component-architecture)
10. [Styling & Design System](#-styling--design-system)
11. [Animations & Smooth Scrolling](#-animations--smooth-scrolling)
12. [SEO & Discoverability](#-seo--discoverability)
13. [Dynamic PDF Generation](#-dynamic-pdf-generation)
14. [Performance Optimization (Web Vitals)](#-performance-optimization-web-vitals)
15. [Deployment & Hosting](#-deployment--hosting)
16. [Future Roadmap](#-future-roadmap)
17. [Troubleshooting & FAQs](#-troubleshooting--faqs)
18. [License & Usage](#-license--usage)

---

## 🌐 Domain & Contact Information

- **Live Website URL**: [arisingtutorials.com](https://arisingtutorials.com/)
- **Domain Registrar**: Hostinger / GoDaddy (Admin Managed)
- **Domain Renewal Period**: Every 1 Year
- **Professional Email**: Not Applicable (Direct WhatsApp/Phone strictly used for admissions)

---

## 📄 Detailed Page Sections

### 1. Home Page (`HomePage.jsx`)

- **Hero**: High-impact introduction with primary value proposition.
- **Marquee**: Scrolling banner of active boards (SSC, CBSE, JEE, NEET).
- **Social Proof**: Trust indicators and quick enrollment highlights.
- **Features Preview**: Compact view of why Arising Tutorials is the best choice.
- **Results Preview**: Glimpse into the "Wall of Fame".
- **Testimonials**: Verified student and parent feedback slider.
- **CTA Banner**: Urgent "Book Demo" call to action.

### 2. Courses Page (`CoursesPage.jsx`)

- **Header**: Program overview and entry-level pricing info.
- **Courses Grid**: Categorized cards for Foundation (8-10), Board Prep, Science (11-12), and Entrance Exams (JEE/NEET).
- **Syllabus Section**: Interactive, tabbed interface to switch between JEE/NEET and Class 11/12 with real-time topic previews.
- **PDF Downloader**: Integrated button to generate a formal syllabus document on-demand.

### 3. Results Page (`ResultsPage.jsx`)

- **Header**: Celebration of academic success.
- **Key Stats**: Quick-glance metrics (Top Score: 96%, Batch Avg: 92.4%).
- **Wall of Fame**: Comprehensive grid of student result posters with names and percentages.
- **CTA**: Direct path for future achievers to enroll.

### 4. About Page (`AboutPage.jsx`)

- **Header**: The historical context of the institute.
- **Our Why (Mission)**: Core values and educational philosophy.
- **Our Values**: Bulleted list of commitment to elite education and expert faculty.
- **Our History (Timeline)**: Vertical milestone track from 2009 to present.
- **The Rules (Policies)**: Transparency regarding attendance and conduct.

### 5. Contact Page (`ContactPage.jsx`)

- **Header**: Support and outreach introduction.
- **Admission Alert**: Bright banner for closing deadlines (e.g., April 2026).
- **Contact Info Cards**: Direct Phone, WhatsApp, and Address quick-links.
- **Our Location**: Embedded interactive Google Maps for easy navigation to the Marol center.
- **Message Form**: Custom lead generation form that sends pre-filled data directly to the official WhatsApp.

---

## 🛠 Technology Stack

### Frontend Core Frameworks

- **[React 19](https://react.dev/)**: The core UI library powering the component lifecycle and virtual DOM.
- **[Vite 8](https://vitejs.dev/)**: Next-generation, blazing-fast module bundler and development server.
- **[React Router DOM 7](https://reactrouter.com/)**: Handling complex, nested, protected, and localized URL routing logic on the client.

### Styling & UI/UX Libraries

- **[Tailwind CSS v4](https://tailwindcss.com/)**: Rapid-prototyping utility-first CSS framework for deeply custom styling without bloated CSS files.
- **[Framer Motion 12](https://www.framer.com/motion/)**: For orchestrating complex layout transitions, gesture recognition, and scroll-based micro-animations.
- **[Lucide React](https://lucide.dev/)**: For a comprehensive set of beautiful, lightweight SVG icons.
- **[Lenis Smooth Scroll](https://lenis.studiofreight.com/)**: For achieving native-feeling inertia scroll mechanics replacing jagged default browser behavior.

### Utilities

- **[jsPDF](https://raw.githack.com/MrRio/jsPDF/master/docs/index.html)** & **[jsPDF AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable)**: Used for client-side document generation without requiring a backend rendering pipeline.
- **ESLint 9**: For robust JavaScript/JSX static analysis and automated code formatting enforcement.

---

## 📂 File & Directory Structure

```text
├── public/                 # Static assets copied directly to the build root
│   ├── sitemap.xml         # XML sitemap serving highly prioritized SEO routes
│   ├── robots.txt          # Crawler instructions allowing root-level indexing
│   ├── favicon.svg         # Tab visualization logo
│   └── site.webmanifest    # Essential progressive web app metadata
├── src/                    # Primary application source code directory
│   ├── components/         # Reusable encapsulated UI fragments
│   │   ├── Navbar.jsx      # Global sticky top navigation & mobile menu
│   │   ├── Footer.jsx      # Global base footer with structured corporate links
│   │   └── ScrollToTop.jsx # Router augmentation forcing page offset reset on load
│   ├── pages/              # Primary route-based view containers
│   │   ├── HomePage.jsx    # The root landing experience ('/')
│   │   ├── CoursesPage.jsx # Multi-layered curriculum breakdown ('/courses')
│   │   ├── ResultsPage.jsx # Student hall of fame & statistics ('/results')
│   │   ├── AboutPage.jsx   # Corporate background, values, & team ('/about')
│   │   └── ContactPage.jsx # Physical location matrix & communication forms ('/contact')
│   ├── data/               # Static mocked data or centralized configuration objects
│   ├── App.jsx             # The master parent component containing routing contexts
│   ├── main.jsx            # The React mounting endpoint invoking the DOM root
│   └── index.css           # Tailwind injection point and global custom classes
├── .gitignore              # Defines omitted artifacts from source control
├── eslint.config.js        # Linter rule parameters for CI/CD consistency
├── index.html              # The foundational HTML document and primary SEO vessel
├── package.json            # Node dependency registry and executable CLI scripts
├── vercel.json             # Host configuration file for Vercel deployment constraints
└── vite.config.js          # Build tool configuration mapping plugins and optimizations
```

---

## 🚀 Getting Started

To obtain a functional copy of the application running locally on your hardware, carefully follow the steps outlined below.

### Prerequisites
Before cloning the repository, verify that your machine is equipped with the following runtimes:
- **Node.js**: Minimum requirement `v18.x` or higher (LTS versions highly recommended).
- **Package Manager**: Either `npm` (v9+), `yarn`, or `pnpm`.

### Installation
1. Begin by securely cloning the repository to your local file system:
   ```bash
   git clone <repository-url> arising-tutorials
   ```
2. Navigate immediately into the cloned root directory:
   ```bash
   cd arising-tutorials
   ```
3. Initialize the installation of all required dependencies listed in the manifest:
   ```bash
   npm install
   ```

### Running the Development Server
With the node_modules successfully installed, spin up the local Vite environment:
```bash
npm run dev
```
By default, the Vite engine will orchestrate Hot Module Replacement (HMR) and serve your application to `http://localhost:5173/`. Any modifications to the `/src` files will instantaneously reflect locally without requiring manual browser refreshes.

---

## 📜 Available Scripts

Within the `package.json`, numerous automated scripts are exposed to ease your development lifecycle:

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Initializes the Vite local development server with optimized HMR. |
| `npm run build` | Transpiles, minifies, and chunks the React source code into static, highly optimal HTML/CSS/JS bundles aimed into the `/dist` output envelope. |
| `npm run preview` | Spins up a lightweight local static web server to test the `/dist` production output before deploying to edge infrastructure. |
| `npm run lint` | Triggers the ESLint engine to deeply parse all `.js` and `.jsx` files recursively, warning engineers of syntax errors or logic violations. |

---

## 🔌 Environment Variables

While current configurations rely heavily on static implementations, any external APIs should securely authenticate via environment files:

Create a `.env.local` file at the root:
```env
VITE_API_BASE_URL=https://api.arisingtutorials.com/v1
```
Variable names MUST strictly be prefixed with `VITE_` to successfully expose themselves statically to the frontend bundle via `import.meta.env`.

---

## 🗺 Routing System

The application employs `react-router-dom` structured via standard nested architectures. A custom invisible `<ScrollToTop />` component wraps the environment. Since React Router is fundamentally a single-page engine, browser scrolling positions don't reset automatically when switching routes. This custom utility binds to route path variations and forces a window behavior reset.

---

## 🎨 Component Architecture

To uphold clean code methodologies and ensure component reusability, avoid bloated monolithic `.jsx` files.
- **Dumb Components**: Used purely for presentational UI (e.g., stylized Buttons, Hero cards, Testimonial blocks). Keep these stateless where possible.
- **Smart Components**: Page-level components (`HomePage`, `CoursesPage`) orchestrate state mechanics, external data fetch requirements (hooks), and child propagation.

---

## 💅 Styling & Design System

The application styling heavily leverages **Tailwind CSS v4**. 
The configuration operates directly from the Vite plugins ecosystem. Common brand-specific design tokens exist inside the global setup. Do NOT deploy custom semantic CSS directly into component files; always maximize the usage of Tailwind utilities arrays.

---

## 🎬 Animations & Smooth Scrolling

Two significant pillars enforce premium-tier user experiences here:

1. **Framer Motion**: Elements smoothly arrive onto the DOM viewport when a user scrolls downwards. Wrappers like `<motion.div>` apply `initial`, `whileInView`, and `viewport={ { once: true } }` props so that animations do not retrigger annoyingly if developers scroll backwards.
2. **Lenis**: Found universally inside `App.jsx`, Lenis hijacks standard browser scrollbars injecting fluid interpolation easing math. This gives trackpad and wheel navigation a buttery feeling comparable to native mobile app usage.

---

## 🔎 SEO & Discoverability

Organic search optimization is arguably the strongest architectural enhancement implemented in the build:

- **Root `index.html`**: Heavily augmented manually to incorporate static descriptors, canonical URLs, and Open Graph content.
- **JSON-LD Schema**: Included a complete `EducationalOrganization` map encompassing addresses, telephone info, and social graph URLs. This directly feeds Google Local Maps packs.
- **Sitemap/Robots**: Stitched `sitemap.xml` dictating correct priority weighting for Google Crawler Bots alongside an open `robots.txt`.

---

## ⚡ Performance Optimization (Web Vitals)

By utilizing modern React standards built on the Vite ecosystem, Google Core Web Vital metrics are safeguarded:
- **First Contentful Paint (FCP)** is minimized utilizing tree-shaking compilation.
- **Cumulative Layout Shift (CLS)** is stabilized as image frames have exact bounds configured minimizing screen jitter.
- Fonts natively employ `display=swap`.

---

## 🌐 Deployment & Hosting

The architecture intends deployment onto Serverless or CDN edge infrastructures.
Currently engineered explicitly to run smoothly within **Vercel** (`vercel.json` included ensures SPA router configuration rules don't return 404 logic errors).

To push successfully inside Vercel, Netlify, or AWS Amplify platforms, configure your builder execution configuration precisely:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Environment**: Ensure minimal configuration of `Node 18.x` or newer.

---

## 🎯 Future Roadmap

*Proposed Enhancements post-v1.0.0 Launch:*
- Implement React Code-splitting (Lazy Loading Pages) for initial load reduction spanning poor 3G mobile environments.
- Introduce Headless CMS architectures (Sanity.io or Strapi) mapping into a data layer allowing administrators GUI access to text/image modifications.
- Multi-language Internationalization mapping.

---

## ⚠️ Troubleshooting & FAQs

**Q: I am receiving an ESLint 'React is not defined' error on `npm run dev`.**
*A: With newer React versions, importing React in scope is no longer required. Ensure you utilize the new JSX transform in your plugin configurations.*

**Q: Why do my URL routes return 404 when directly typing them into the browser window, but work via menu clicks?**
*A: This is the result of Single Page Application (SPA) architecture caching limitations. To fix it locally, utilize `vite preview`. When deployed, utilize the associated rewrite proxies listed inside `vercel.json`.*

---

## 📄 License & Usage

Copyright © 2026 Arising Tutorials. All rights strictly classified and reserved.
The source code within this repository embodies proprietary logic custom-built specifically targeting Arising Tutorials' business model. Cloning, redistribution, commercialization, or modifications of this base code are expressly forbidden without explicit written authorization from the Arising Tutorials organizational board.
