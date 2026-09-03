# Shaheer Ali — Backend Developer Portfolio

A personal portfolio website for **Shaheer Ali**, a backend developer based in Karachi, specializing in Node.js, NestJS, REST APIs, Firebase, and scalable systems.

## Live Demo

Hosted at: `https://shaheer-ali.vercel.app`

## Tech Stack

- **React 19** — UI framework
- **Vite 7** — build tool & dev server
- **Tailwind CSS 4** — styling & responsive design
- **React Router Dom 7** — routing
- **react-icons / lucide-react** — icons
- **Swiper** — carousels/sliders
- **i18next / react-i18next** — internationalization
- **react-to-print** — print utilities
- **axios** — HTTP client

## Sections / Pages

The site is a single-page app composed of the following sections (in `src/components/`):

| Section | Component | Description |
|---------|-----------|-------------|
| Navigation | `Navbar.jsx` | Sticky nav with desktop & mobile (hamburger) menus |
| Hero / About | `Hero.jsx` | Name, title, email/call/resume buttons, GitHub & LinkedIn icons |
| Skills | `Skills.jsx` | Grid of tech skills (JS, TS, SQL, Express, NestJS, MongoDB, PostgreSQL, Docker, AWS, Firebase, Stripe, etc.) |
| Experience | `Experience.jsx` | Timeline of work history (LaunchBox Pakistan, Indus Valley Technologies) |
| Projects | `Projects.jsx` | Cards for real projects with descriptions, tech stacks & live links |
| Education | `Education.jsx` | Academic background (B.Sc. Computer Science, UIT Karachi) |
| Footer / Contact | `Footer.jsx` | Email, phone, social links & copyright |

## Projects Featured

1. **Perfect Boat** — complete boat management system (owner/manager portals + mobile apps)
2. **TERA** — ride booking platform (user, driver & scanner apps)
3. **Brisbon Notary** — notary service booking app
4. **Scavenger Hunt** — adventure challenge web app with leaderboard
5. **Sweep Stake** — spinning-wheel game with admin/vendor portals
6. **Kacheri Law** — legal practice management app
7. **Carveeps** — car dealer/customer subscription platform
8. **Fitness by Faith** — fitness app with workouts, meals & subscriptions
9. **WingX** — dating app with unique "wing" recommendation feature

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

# Lint
npm run lint
```

## Project Structure

```
├── index.html              # HTML entry + SEO/OG meta tags
├── public/                 # Static assets (icons, resume PDF)
│   ├── node-js-seeklogo.png
│   ├── node-js-seeklogo.svg
│   ├── Shaheer-ali(backend-Dev).pdf
│   └── vite.svg
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Root component composing all sections
│   ├── index.css           # Global styles (Tailwind)
│   ├── App.css
│   ├── assets/
│   ├── utils/
│   │   └── axios.js        # Axios instance (API base URL)
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Skills.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       ├── Education.jsx
│       ├── Footer.jsx
│       ├── About.jsx       # (empty placeholder)
│       └── Resume.jsx      # (empty placeholder)
└── vite.config.js         # Vite + Tailwind config
```

## Contact

- **Email:** shaheeralirahoo555@gmail.com
- **Phone:** +92 310 8573210
- **GitHub:** [shaheeralirahoo](https://github.com/shaheeralirahoo)
- **LinkedIn:** [Shaheer Ali](https://www.linkedin.com/in/shaheer-ali-25b400253/)

## Author

**Shaheer Ali** — Backend Developer
