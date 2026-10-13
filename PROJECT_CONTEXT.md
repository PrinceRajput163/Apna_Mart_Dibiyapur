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
- **Logo Status**: Original logo and promotional artwork provided by owner in print/promotional materials, but **not yet present locally in project files**.
- **Asset Dependency**: Owner must provide the original logo image file (to be placed in `frontend/src/assets/logo.png` or `frontend/public/logo.png`).
- **Logo Rule**: **Never** recreate the logo with AI, alter its artwork, or silently substitute a placeholder. Preserve original green, orange, cream, and gold visual identity.
- **Verified Logo Path**: PENDING OWNER FILE UPLOAD.

### Approved Storefront Design Reference (Mobile E-Commerce)
- **Primary Visual Reference**: Approved mobile e-commerce homepage layout.
- **Palette**:
  - Background: Warm cream / off-white (`#FAF7F2` / `#FDFCFA`)
  - Primary UI & Shopping Buttons: Deep burgundy / maroon (`#6B1D2F` / `#7A1C30`)
  - Highlights & Accents: Vibrant orange (`#E8602D`) and subtle gold details (`#D4A853`)
  - Text: Deep charcoal / espresso for contrast (`#1F1A1C` / `#2D2627`)
- **Typography**:
  - Hero & Display Headings: Elegant serif typography (e.g. Playfair Display / Cormorant / Cinzel)
  - Body & UI Text: Outfit / Inter (readable, clean modern sans-serif)
  - Hindi Script: Noto Sans Devanagari
- **Key Reference Components**:
  - Compact premium header with logo, hamburger menu, search, wishlist, account, and shopping cart
  - Prominent product search bar
  - Large lifestyle hero banner with headline and "Shop Now" CTA
  - Circular category shortcuts with clean iconography
  - Promotional collection banners (when approved data is available)
  - Product cards featuring product image, title, verified price, and Add to Cart action
  - Service-benefit strip (e.g. genuine products, local delivery, store pickup)
  - Mobile bottom navigation bar (Home, Categories, Offers, Wishlist, Account)
  - Responsive desktop navigation and layout

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

