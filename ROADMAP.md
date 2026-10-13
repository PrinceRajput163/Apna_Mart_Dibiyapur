# ROADMAP.md — Phased Implementation Checklist for APNA MART DIBIYAPUR

> Mark tasks as ✅ only when actual evidence confirms completion.
> Use ⚠️ for partially complete or unverified. Use ⬜ for not started.

---

## Phase 1 — Planning and Environment Verification

- ✅ Define project identity, branding, and requirements
- ✅ Confirm and lock technology stack
- ✅ Verify Node.js, npm, and Git on Windows
- ✅ Create documentation memory system (9 files)
- ⬜ Initialize Git repository and make first commit
- ⬜ Create GitHub repository and push

## Phase 2 — Project Scaffold and Initial Foundation

- ✅ Scaffold React + Vite project (`frontend/`)
- ✅ Install and configure Tailwind CSS v4 (`@tailwindcss/vite`)
- ✅ Install Motion for React (`motion`)
- ✅ Build initial homepage components
- ✅ Initial build & lint pass (`npm run build`, `npm run lint`)

## Phase 2B — Mobile E-Commerce Reference Design Alignment (Completed)

- ✅ Master business context, address, phone numbers, and owner details updated in documentation
- ✅ Mobile reference design tokens and requirements locked (cream, burgundy, orange, gold)
- ✅ Update design tokens and serif font loading in `frontend/src/index.css` and `frontend/index.html`
- ✅ Rebuild lifestyle hero banner with serif headline and "Shop Now" CTA
- ✅ Implement 7 circular category shortcuts (Crockery, Plastic & Storage, Bags & Accessories, Cleaning & Home, Gift Items, Backpacks & More, Kitchen Essentials)
- ✅ Add service-benefit highlight strip (Physical store, Genuine, Pickup, Local support)
- ✅ Enhance product cards with Add to Cart action and verified in-store pricing tags
- ✅ Implement persistent mobile bottom navigation bar (Home, Categories, Offers, Wishlist, Account)
- ✅ Update contact and footer sections with exact verified shop address and contact numbers
- ✅ Initialize Git repository (`git init`) and root `.gitignore`
- ✅ Run verification builds, lints, and local preview validation (`npm run build`, `npm run lint`)

## Phase 3 — Responsive UI and Premium Motion

- ⬜ User review and feedback on mobile and desktop layout
- ⬜ Refine responsive breakpoints across mobile, tablet, and desktop
- ⬜ Polish micro-animations and smooth interactions
- ⬜ Keyboard navigation and WCAG accessibility audit
- ⬜ Integrate original owner-provided logo asset once placed in project
- ⬜ Implement working Hindi/English bilingual toggle


## Phase 4 — Product Catalogue and Bilingual Support

- ⬜ Design product listing page
- ⬜ Design individual product detail page
- ⬜ Build category filtering and search
- ⬜ Implement Hindi/English translation system
- ⬜ Create bilingual content structure
- ⬜ Add product image gallery component

## Phase 5 — Backend and PostgreSQL

- ⬜ Scaffold Node.js + Express backend (`backend/`)
- ⬜ Set up PostgreSQL database and connection
- ⬜ Design database schema (products, categories, orders, users)
- ⬜ Build product CRUD API
- ⬜ Build category API
- ⬜ Connect frontend to backend APIs
- ⬜ Seed database with initial categories

## Phase 6 — Authentication and Secure Admin

- ⬜ Implement secure server-side authentication
- ⬜ Build owner admin panel (product management, order viewing)
- ⬜ Implement role-based authorization (owner vs. customer)
- ⬜ Secure admin routes and API endpoints
- ⬜ Session management and token security

## Phase 7 — Cart, Checkout, and Order Management

- ⬜ Build shopping cart (client-side with server validation)
- ⬜ Build checkout flow
- ⬜ Build order creation and management
- ⬜ Implement inventory deduction (atomic, server-side)
- ⬜ Order status tracking
- ⬜ Order notification system

## Phase 8 — Payment Integration

- ⬜ Select and configure verified payment gateway
- ⬜ Set up merchant account
- ⬜ Implement server-side payment verification
- ⬜ Handle payment success, failure, and webhook callbacks
- ⬜ Test with sandbox/test payments

## Phase 9 — Security, Accessibility, and Performance Testing

- ⬜ Security audit (input validation, SQL injection, XSS, CSRF)
- ⬜ Accessibility audit (WCAG compliance)
- ⬜ Performance audit (Lighthouse, bundle analysis)
- ⬜ Cross-browser testing
- ⬜ Mobile device testing
- ⬜ Load testing

## Phase 10 — Deployment, Domain Connection, and Production Verification

- ⬜ Deploy frontend to Vercel
- ⬜ Deploy backend to hosting provider
- ⬜ Deploy PostgreSQL to managed hosting
- ⬜ Confirm domain name and registrar
- ⬜ Connect `.tech` domain to Vercel
- ⬜ Configure SSL/HTTPS
- ⬜ Set up environment variables in production
- ⬜ Production smoke testing
- ⬜ Monitor and verify live site
