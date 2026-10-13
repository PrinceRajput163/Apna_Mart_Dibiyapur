# DECISIONS.md — Key Architectural & Business Decisions for APNA MART DIBIYAPUR

## Confirmed Decisions

| ID | Date | Decision | Context & Rationale | Status |
|---|---|---|---|---|
| DEC-001 | 2026-10-13 | React 19 + Vite 8 frontend | Fast modern toolchain with high performance and zero build-overhead | ✅ Implemented |
| DEC-002 | 2026-10-13 | Tailwind CSS v4 styling | `@tailwindcss/vite` plugin enables zero-config CSS imports and fast development | ✅ Implemented |
| DEC-003 | 2026-10-13 | Motion for React (`motion` package) | Hardware-accelerated animations, smooth scroll interactions, and entrance effects | ✅ Implemented |
| DEC-004 | 2026-10-13 | Documentation-First Memory System | Multi-file `.md` memory so Antigravity, Claude, and future agents stay in sync | ✅ Implemented |
| DEC-005 | 2026-10-13 | Business Identity & Location Locked | Owner: Shyam Sundar Rajput. Address: Phaphund Road, Durga Nagar, Pizza Point, Dibiyapur. Tagline: "Har Zaroorat, Ek Hi Jagah." | ✅ Confirmed |
| DEC-006 | 2026-10-13 | Logo Authenticity Rule | Must use original owner-provided logo file. No AI generation or synthetic substitution. Original identity: green, orange, cream, gold. | ✅ Confirmed |
| DEC-007 | 2026-10-13 | Storefront Visual Target (Mobile Reference) | Mobile e-commerce design target: warm cream background, deep burgundy/maroon shopping buttons, orange highlights, subtle gold accents, serif hero typography, compact header, search bar, circular categories, product cards, bottom navigation. | ✅ Approved |
| DEC-008 | 2026-10-13 | Initial 7 Product Categories | 1. Crockery, 2. Plastic & Storage, 3. Bags & Accessories, 4. Cleaning & Home, 5. Gift Items, 6. Backpacks & More, 7. Kitchen Essentials | ✅ Approved |
| DEC-009 | 2026-10-13 | No-Fabrication Policy | Real data only. When real data is unavailable, clearly mark as development placeholder. | ✅ Enforced |
| DEC-010 | 2026-10-13 | Stack Lock (Node.js + PostgreSQL) | Locked architecture for backend and database. No alternative frameworks without explicit approval. No Lovable. | ✅ Enforced |
| DEC-011 | 2026-10-13 | Playfair Display font + Cream & Burgundy Theme Tokens | Implemented in index.html & index.css for storefront header, search bar, and circular categories | ✅ Implemented |
| DEC-012 | 2026-10-13 | Lifestyle Hero Banner & Service-Benefit Strip | Implemented in Hero.jsx & ServiceBenefits.jsx using verified physical store facts and non-fabricated claims | ✅ Implemented |
| DEC-013 | 2026-10-13 | Product Cards, Mobile Bottom Navigation & Git Repo Init | Implemented FeaturedProducts.jsx (2-col mobile grid, Add to Cart interaction, in-store pricing tags), BottomNav.jsx (5 persistent mobile tabs), root .gitignore, and initialized Git repository | ✅ Implemented |



## Pending Decisions (Awaiting Owner Confirmation)

| ID | Topic | Description | Status |
|---|---|---|---|
| PEND-001 | Contact Number Mapping | Map `9756595920`, `9528869946`, `7500781379` to primary support vs. WhatsApp Business | ⏳ Pending Owner Confirmation |
| PEND-002 | Exact Domain & Registrar | Exact `.tech` domain name and registrar details for production DNS connection | ⏳ Pending Owner Confirmation |
| PEND-003 | Logo Image File Upload | Owner to provide the original PNG/SVG logo file into `frontend/src/assets/` | ⏳ Pending File Upload |
| PEND-004 | Serviceable PIN Codes & Rates | Delivery charge policies, serviceable PIN codes around Dibiyapur, minimum order values | ⏳ Pending Owner Confirmation |
| PEND-005 | Payment Gateway Provider | Selection of payment gateway (Razorpay / Cashfree / PhonePe / Paytm / Stripe) | ⏳ Pending Owner Confirmation |
| PEND-006 | COD Eligibility & Return Policy | Rules for Cash on Delivery and store return/exchange policy | ⏳ Pending Owner Confirmation |
