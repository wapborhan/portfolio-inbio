# WapBorhan — Personal Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-Deploy-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A modern, fast, and fully responsive personal portfolio website built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**. It showcases projects, technical skills, services, and client testimonials with interactive animations, multi-language support (English & Bengali), theme switching (Light / Dark), and dynamic data fetching.

🌐 **Live Website:** [https://wapborhan.com](https://wapborhan.com)

---

## ✨ Features

- **⚡ Next.js 14 App Router:** Built with Next.js 14 and configured with static export (`output: 'export'`) for lightning-fast delivery and zero-server hosting.
- **🎨 Modern & Responsive Design:** Crafted with Tailwind CSS, Material UI (MUI), and custom CSS to deliver a sleek experience across mobile, tablet, and desktop devices.
- **🌓 Theme Customizer:** Built-in Light and Dark theme toggler with persistent user preferences.
- **🌐 Internationalization (i18n):** Multi-language switching between English (`en`) and Bengali (`bn`) powered by `i18next` and `react-i18next`.
- **✨ Smooth Motion & Animations:** 
  - Scroll-triggered animations via [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll).
  - Smooth page and section navigation with `react-scroll`.
  - Typewriter hero banners using `react-simple-typewriter`.
  - Responsive project carousels using `slick-carousel` / `react-slick`.
- **📬 Contact Integration:** Functional contact form powered by [EmailJS](https://www.emailjs.com/) for direct inquiries.
- **🔥 Dynamic Project Loading:** Fetches portfolio showcase data dynamically from Firebase Realtime Database with fallback support.
- **🚀 Automated CI/CD:** GitHub Actions workflow configured for automated builds and deployment to GitHub Pages.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework & Core** | [Next.js 14](https://nextjs.org/), [React 18](https://reactjs.org/), [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling & UI** | [Tailwind CSS](https://tailwindcss.com/), [Material UI (MUI)](https://mui.com/), [Emotion](https://emotion.sh/), [PostCSS](https://postcss.org/) |
| **Icons & Media** | [React Icons](https://react-icons.github.io/react-icons/), [Slick Carousel](https://kenwheeler.github.io/slick/) |
| **Animations** | [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/), [React Simple Typewriter](https://www.npmjs.com/package/react-simple-typewriter), [React Scroll](https://www.npmjs.com/package/react-scroll) |
| **Internationalization** | [i18next](https://www.i18next.com/), [react-i18next](https://react.i18next.com/) |
| **Networking & Services** | [Axios](https://axios-http.com/), [@emailjs/browser](https://www.emailjs.com/) |
| **Deployment & CI/CD** | [GitHub Pages](https://pages.github.com/), [GitHub Actions](https://github.com/features/actions), [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```text
wapborhan-react/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment CI/CD workflow
├── public/
│   ├── images/                 # Static images, project screenshots, avatars
│   └── favicon.ico             # Site favicon and meta icons
├── src/
│   ├── app/                    # Next.js App Router pages and metadata
│   │   ├── layout.tsx          # Root layout and global providers
│   │   ├── page.tsx            # Home page entry
│   │   ├── about/              # About page route
│   │   ├── portfolio/          # Dedicated portfolio route
│   │   ├── services/           # Services route
│   │   └── whyme/              # Value proposition route
│   ├── assets/
│   │   └── css/                # Custom styles, vendor styling, and themes
│   ├── components/             # Reusable UI & section components
│   │   ├── layout/             # Header, Navigation, Footer
│   │   ├── pages/              # Section components (Banner, Info, Portfolio, etc.)
│   │   ├── theme/              # Theme context and switcher
│   │   └── translate/          # Localization components & helpers
│   ├── data/                   # Fallback and static JSON project data
│   ├── i18n/                   # i18next configuration & locale dictionaries
│   │   └── locales/
│   │       ├── bn.json         # Bengali translations
│   │       └── en.json         # English translations
│   ├── lib/                    # API clients and utilities (Firebase/Axios)
│   └── types/                  # TypeScript interface definitions
├── next.config.js              # Next.js build & export configuration
├── tailwind.config.js          # Tailwind CSS design system config
├── tsconfig.json               # TypeScript compiler config
└── package.json                # Project dependencies and npm scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.x or v20.x recommended)
- **npm** (v9+), **pnpm**, or **yarn**
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/wapborhan/wapborhan-react.git
   cd wapborhan-react
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: `--legacy-peer-deps` may be used to satisfy legacy React 18 peer dependencies.)*

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📜 Available Scripts

In the project root, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server at `http://localhost:3000`. |
| `npm run build` | Compiles the TypeScript code and produces a static HTML export in `./out`. |
| `npm run start` | Starts a production Next.js server (when not running static export). |
| `npm run lint` | Runs Next.js ESLint checks to identify formatting and code quality issues. |

---

## ⚙️ Configuration & Customization

### Static Base Path
For deployment to GitHub Pages under a subpath (e.g., `username.github.io/repo-name`), the base path is handled dynamically via `next.config.js` and the environment variable:
```env
NEXT_PUBLIC_BASE_PATH=/repo-name
```
For custom root domain deployment (e.g., `https://wapborhan.com`), leave `NEXT_PUBLIC_BASE_PATH` empty.

### Contact Form (EmailJS)
Update your EmailJS credentials inside the contact form component (`src/components/pages/contact/Contact.tsx` or similar):
- **Service ID**
- **Template ID**
- **Public Key**

### Translations
Update or add new translations in:
- `src/i18n/locales/en.json` (English)
- `src/i18n/locales/bn.json` (Bengali)

---

## 🚢 Deployment

### GitHub Pages (Automated)
This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that triggers on pushes to `main` or `master`. It builds the static export and automatically deploys the `./out` bundle to GitHub Pages.

To enable GitHub Pages:
1. Go to repository **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Push to `main` or trigger the workflow manually from the **Actions** tab.

### Vercel / Netlify
You can deploy directly to Vercel or Netlify by linking your GitHub repository:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `out` (or default for dynamic hosting)

---

## 👨‍💻 Author

**Borhan Uddin (WapBorhan)**
- 🌐 Website: [wapborhan.com](https://wapborhan.com)
- 💼 LinkedIn: [@wapborhan](https://www.linkedin.com/in/wapborhan/)
- 🐙 GitHub: [@wapborhan](https://github.com/wapborhan)
- ✉️ Email: contact@wapborhan.com

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - feel free to use it for personal learning or inspiration!
