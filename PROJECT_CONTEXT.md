# PROJECT_CONTEXT.md — Source of Truth for APNA MART DIBIYAPUR

## Project Identity

- **Project Name**: APNA MART DIBIYAPUR
- **Subtitle / Store Title**: HOME & LIFESTYLE STORE
- **Tagline**: "Har Zaroorat, Ek Hi Jagah."
- **Owner**: Shyam Sundar Rajput
- **Business Type**: Physical home and lifestyle variety retail store with online e-commerce
- **Shop Address**: Phaphund Road, Durga Nagar, Pizza Point, Dibiyapur, Auraiya, Uttar Pradesh – 206244
- **Contact Numbers**:
  - `9756595920`
  - `9528869946`
  - `7500781379`
  *(Note: Specific assignment for primary customer support vs. WhatsApp Business number remains pending owner confirmation. Exact digits preserved from promotional artwork.)*
- **Website Goal**: Build a real, production-ready, premium bilingual e-commerce website with a secure owner admin panel

## Brand & Visual Identity

### Approved Logo & Artwork
- **Logo Status**: Original circular brand logo provided by owner and successfully integrated into project.
- **Asset Dependency**: Resolved. Original high-resolution circular logo asset placed byte-for-byte in `frontend/public/assets/branding/apna-mart-logo.jpg` and `frontend/src/assets/branding/apna-mart-logo.jpg`.
- **Logo Rule**: **Never** recreate the logo with AI, alter its artwork, or silently substitute a placeholder. Preserve original circular emblem containing green, orange, cream, and gold visual identity, house roofline, shopping cart, "APNA MART DIBIYAPUR", "HOME & LIFESTYLE STORE", and "Har Zaroorat, Ek Hi Jagah."
- **Verified Logo Path**: `frontend/public/assets/branding/apna-mart-logo.jpg` (servable via `/assets/branding/apna-mart-logo.jpg`).

### Approved Storefront Design Reference & Premium Palette
- **Primary Visual Reference**: Approved premium Indian home and lifestyle mobile & desktop e-commerce layout.
- **Palette (DEC-016)**:
  - Primary Page Background: Warm Ivory (`#FAF6ED`)
  - Primary UI & Action Buttons: Deep Forest Green (`#123B2A`)
  - Subtle Borders, Dividers & Accents: Champagne Gold (`#C5A45B`)
  - Secondary CTAs & Selective Highlights: Warm Orange (`#E8752E`)
  - Body & Heading Typography: Charcoal (`#252922`)
  - Card & Container Surfaces: Pure White (`#FFFFFF`) / Soft Warm Ivory
- **Typography**:
  - Hero & Display Headings: Playfair Display serif & Outfit bold
  - Body & UI Text: Outfit / sans-serif (clean, readable modern typography)
  - Hindi Script: Noto Sans Devanagari
- **Key Reference Components**:
  - Premium header featuring the authentic circular logo image, Dibiyapur location line, refined rounded search bar, cart badge, and account actions
  - Elegant hero lifestyle banner with Playfair Display headline, bilingual tagline, trust highlights, and Forest Green "Shop now ➔" CTA
  - Clean circular & card category shortcuts (Crockery, Plastic & Storage, Bags & Accessories, Cleaning & Home, Gift Items, Backpacks & More, Kitchen Essentials)
  - Festival & seasonal collection banners in rich forest green, gold, and warm orange
  - Clean product deal cards with consistent aspect ratios, real deal pricing (`₹599`, `₹299`), and Forest Green Add-to-Cart buttons
  - Verifiable service-benefit guarantee strip (physical store in Dibiyapur, genuine quality, counter pickup, friendly local support)
  - Shop by Collection pastel cards and New Arrivals grid
  - Store Intro, Contact section with working telephone links and Google Maps directions link
  - Premium brand footer with official circular logo, verified address, phone numbers, and owner credit
  - Fixed mobile bottom navigation with Deep Forest Green active indicator

## Target Users

1. **Customers**: Local residents in and around Dibiyapur shopping for home and lifestyle products online and for store pickup.
2. **Store Owner (Admin)**: Shyam Sundar Rajput — managing products, categories, verified selling prices, real stock, images, orders, and business summaries.

## Product Categories (Initial Structure)

1. Crockery
2. Plastic & Storage
3. Bags & Accessories
4. Cleaning & Home
5. Gift Items
6. Backpacks & More
7. Kitchen Essentials (where appropriate to real catalogue)

*(Categories may be expanded or refined only with owner approval. The owner will manage products via the admin panel.)*

## Locked Technology Stack

Do not change this stack without explicit owner approval:

| Layer | Technology | Status |
|---|---|---|
| Frontend framework | React 19 + Vite 8 | ✅ Installed & active in `frontend/` |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) | ✅ Configured |
| Animation | Motion for React (`motion`) | ✅ Configured |
| Backend | Node.js + Express | ⬜ Planned (`backend/`) |
| Database | PostgreSQL | ⬜ Planned |
| Security | Server-side auth, bcrypt/argon2, session/JWT, input sanitization, rate limiting | ⬜ Planned |
| Source control | Git + GitHub | ⚠️ Git init pending locally |
| Frontend hosting | Vercel | ⬜ Planned |
| Backend hosting | Compatible host (TBD) | ⬜ Planned |
| Database hosting | Managed PostgreSQL (TBD) | ⬜ Planned |
| Payments | Verified payment gateway / UPI / COD | ⬜ Pending owner selection |
| Product images | Managed cloud storage (TBD) | ⬜ Planned |
| Excluded tools | Lovable | 🚫 Explicitly excluded by owner |

## Domain

- A one-year `.tech` domain exists and is owned by the business.
- **Exact domain name**: PENDING OWNER CONFIRMATION.
- **Registrar**: PENDING OWNER CONFIRMATION.

## Development Environment (Verified 2026-10-13)

| Tool | Version |
|---|---|
| OS | Windows |
| Node.js | v24.18.0 |
| npm | 11.16.0 |
| Git | 2.55.0.windows.2 |
| Assistant | Google Antigravity / Claude |

## Pending Policies & Decisions

- Exact mapping of contact numbers to customer support vs. WhatsApp Business
- Delivery charges, minimum order value, and serviceable PIN codes
- Cash on Delivery (COD) eligibility terms
- Return and exchange policy
- Payment gateway provider choice
- Local logo asset upload from owner

