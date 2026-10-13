# README.md — APNA MART DIBIYAPUR

> **Home & Lifestyle Store** — *"Har Zaroorat, Ek Hi Jagah."*

A premium bilingual e-commerce website for Apna Mart Dibiyapur, a home and lifestyle retail store in Dibiyapur, Uttar Pradesh, India.

---

## Prerequisites

Verified versions (2026-10-13):

| Tool | Version | Install From |
|---|---|---|
| Node.js | v24.18.0 | [nodejs.org](https://nodejs.org/) |
| npm | 11.16.0 | Included with Node.js |
| Git | 2.55.0 | [git-scm.com](https://git-scm.com/) |

## Project Structure

```
Apna Mart Dibiyapur/
├── AGENTS.md                # AI agent workflow instructions
├── CLAUDE.md                # Claude-specific instructions
├── PROJECT_CONTEXT.md       # Master business facts, location, contacts, and tech stack
├── REQUIREMENTS.md          # Business, storefront, admin, and UI/UX requirements
├── DECISIONS.md             # Confirmed and pending architectural & business decisions
├── IMPLEMENTATION_PLAN.md   # Step-by-step implementation tasks for active phase
├── ROADMAP.md               # Phased implementation checklist across all 10 phases
├── ARCHITECTURE.md          # System architecture (planned vs. implemented)
├── PROJECT_RULES.md         # Mandatory coding, security, data, and agent rules
├── PROJECT_STATUS.md        # Current state and next action
├── PROGRESS.md              # Chronological append-only work log
├── README.md                # This file
└── frontend/                # React 19 + Vite 8 frontend
    ├── index.html           # Entry HTML with SEO meta
    ├── vite.config.js       # Vite + Tailwind CSS plugin config
    ├── package.json         # Dependencies and scripts
    ├── src/
    │   ├── main.jsx         # React entry point
    │   ├── App.jsx          # Homepage layout
    │   ├── index.css        # Tailwind v4 + design tokens
    │   └── components/
    │       ├── Navbar.jsx
    │       ├── Hero.jsx
    │       ├── Categories.jsx
    │       ├── FeaturedProducts.jsx
    │       ├── StoreIntro.jsx
    │       ├── ContactCTA.jsx
    │       └── Footer.jsx
    └── public/              # Static assets
```

## Quick Start

### 1. Install Dependencies

```powershell
cd frontend
npm install
```

### 2. Run Development Server

```powershell
npm run dev
```

Opens at `http://localhost:5173/` (or next available port).

### 3. Build for Production

```powershell
npm run build
```

Output goes to `frontend/dist/`.

### 4. Run Linting

```powershell
npm run lint
```

## Technology Stack

| Layer | Technology | Status |
|---|---|---|
| Frontend | React 19 + Vite 8 | ✅ Installed |
| Styling | Tailwind CSS v4 | ✅ Installed |
| Animation | Motion for React | ✅ Installed |
| Backend | Node.js + Express | 🔲 Not started |
| Database | PostgreSQL | 🔲 Not started |
| Hosting (frontend) | Vercel | 🔲 Not configured |
| Hosting (backend) | TBD | 🔲 Not started |
| Payments | TBD | 🔲 Not started |

## Environment Variables

No environment variables are required for the current frontend-only phase.

When backend development begins, a `.env.example` file will document required variables with safe placeholder values. **Never commit actual secrets.**

## Deployment

Deployment is not configured yet. See `ROADMAP.md` Phase 10 for the planned deployment steps.

## Documentation

See the project root for the documentation memory system:

- `PROJECT_STATUS.md` — Start here for current state
- `PROJECT_CONTEXT.md` — Requirements and decisions
- `PROJECT_RULES.md` — Mandatory rules
- `PROGRESS.md` — Work history
- `ROADMAP.md` — Implementation plan
- `ARCHITECTURE.md` — System design

## License

Private project. All rights reserved.
