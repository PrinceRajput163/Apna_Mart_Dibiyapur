# IMPLEMENTATION_PLAN.md — Step-by-Step Implementation Plan for APNA MART DIBIYAPUR

## Current Objective

Redesign the storefront to eliminate the yellow-heavy appearance and implement the owner-approved premium Indian home and lifestyle aesthetic (Deep Forest Green, Warm Ivory, Champagne Gold, and Warm Orange) while integrating the official circular APNA MART DIBIYAPUR logo image asset and maintaining 100% test suite passing.

---

## Phase 2C: Premium UI Redesign & Official Logo Integration (Completed)

### Step 1: Logo Asset Integration (`public/assets/branding/apna-mart-logo.jpg`)
- [x] Received official circular APNA MART DIBIYAPUR logo file from owner.
- [x] Placed original image asset byte-for-byte in `frontend/public/assets/branding/apna-mart-logo.jpg` and `frontend/src/assets/branding/apna-mart-logo.jpg`.
- [x] Integrated original logo into `Navbar.jsx`, `Hero.jsx`, and `Footer.jsx` without alteration, cropping, or recolouring.

### Step 2: Design Tokens & Palette Update (`index.css` & `index.html`)
- [x] Updated `@theme` tokens in `frontend/src/index.css`:
  - Primary Background: Warm Ivory (`#FAF6ED`)
  - Primary Actions: Deep Forest Green (`#123B2A`)
  - Subtle Borders & Dividers: Champagne Gold (`#C5A45B`)
  - Secondary CTAs & Accents: Warm Orange (`#E8752E`)
  - Body Typography: Charcoal (`#252922`)
  - Surfaces: Pure White (`#FFFFFF`) / Warm Ivory
- [x] Updated theme-color in `frontend/index.html` to `#123B2A`.

### Step 3: Component Harmonization
- [x] `Navbar.jsx`: Warm Ivory canvas, official circular logo, Forest Green brand title, refined rounded search bar.
- [x] `Hero.jsx`: Warm Ivory card, Champagne Gold accents, Playfair Display headline, Forest Green "Shop now ➔" button.
- [x] `Categories.jsx`: 2x4 grid with pure white/ivory cards and Champagne Gold borders.
- [x] `OfferBanners.jsx`: Festive celebratory card & Deep Forest Green special value banner.
- [x] `FeaturedProducts.jsx`: White cards with subtle Champagne Gold borders and Deep Forest Green ADD buttons.
- [x] `ServiceBenefits.jsx`: White pill strip with Warm Ivory icon circles and Champagne Gold borders.
- [x] `ShopByCollection.jsx`: Refined white cards with diagonal arrows and gold borders.
- [x] `NewArrivals.jsx`: Product cards matching the premium aesthetic.
- [x] `StoreIntro.jsx` & `ContactCTA.jsx`: Harmonized with verified phone numbers and directions link.
- [x] `Footer.jsx`: Official circular logo, verified store address, phone numbers, and owner credit.
- [x] `BottomNav.jsx`: Warm Ivory bar with Forest Green active tab.

### Step 4: Quality & Test Harness Verification
- [x] `npm test`: 30 / 30 tests passed across all 8 test files.
- [x] `npm run lint`: 0 errors, 0 warnings.
- [x] `npm run build`: 437 modules transformed, built in 515ms.
- [x] Live development server running on `http://localhost:5173/`.
- [x] Add serif font import (Playfair Display) to `frontend/index.html` alongside Outfit and Noto Sans Devanagari.
- [x] Update `@theme` tokens in `frontend/src/index.css`:
  - Background: Warm cream (`--color-cream-50: #faf7f2`, `--color-cream-card: #ffffff`)
  - Primary UI & CTA: Deep burgundy / maroon (`--color-burgundy-900: #541220`, `--color-burgundy-800: #6b1d2f`, `--color-burgundy-700: #84243a`)
  - Accent colors: Vibrant orange (`--color-orange-500: #e8602d`) and subtle gold (`--color-gold-400: #d4a853`, `--color-gold-500: #c9952e`)
  - Text: Deep charcoal/espresso (`--color-charcoal-900: #1f1a1c`, `--color-charcoal-600: #665a5e`)
  - Font tokens: `--font-serif` for hero/display titles, `--font-sans` for UI text.
- [x] Reconfigure base body styles to default to the warm cream background and dark readable typography.

### Step 2: Compact Mobile Header & Desktop Navigation (`Navbar.jsx`)
- [x] Implement compact mobile header matching reference:
  - Hamburger menu icon on left
  - Apna Mart brand logo / typography in center (with preserved green & gold emblem badge)
  - Quick utility icons on right: wishlist, user account, shopping cart with counter badge
- [x] Integrate prominent product search input (inline on desktop, sticky directly below top bar on mobile)
- [x] Maintain responsive desktop header bar with full navigation links, language toggle, and contact CTA
- [x] Expandable mobile drawer with store address and phone numbers

### Step 3: Lifestyle Hero Banner & Call to Action (`Hero.jsx`)
- [x] Refactor hero section to feature a warm lifestyle banner presentation
- [x] Display elegant serif display headline: "Elevate Your Home with Everyday Elegance" with bilingual tagline "हर ज़रूरत, एक ही जगह।"
- [x] Prominent deep burgundy "Shop Categories" call-to-action button with micro-interactions
- [x] Visual category mosaic showcase card (crockery, storage, bags, gifts) with in-person visit callout

### Step 4: Circular Category Shortcuts (`Categories.jsx`)
- [x] Update categories to display 7 approved categories:
  1. Crockery
  2. Plastic & Storage
  3. Bags & Accessories
  4. Cleaning & Home
  5. Gift Items
  6. Backpacks & More
  7. Kitchen Essentials
- [x] Render circular category shortcut badges matching the reference layout
- [x] Add smooth horizontal scroll on mobile with touch-scrollable strip and centered layout on desktop

### Step 5: Service-Benefit Strip (`ServiceBenefits.jsx`)
- [x] Add service-benefit highlight strip:
  - 🏬 Physical Store in Dibiyapur (Durga Nagar, Pizza Point on Phaphund Road)
  - ✨ 100% Genuine Quality (Hand-selected crockery, plastics, bags, home essentials)
  - 🛍️ Easy Counter Pickup (Order or inquire online for quick in-store pickup)
  - 🤝 Friendly Local Support (Direct assistance via phone or in-store)
- [ ] Add promotional banner strip (for verified future owner campaigns)


### Step 6: Product Grid & Cards with Add-to-Cart (`FeaturedProducts.jsx`)
- [x] Update product cards to match reference layout:
  - Clean card container with rounded corners and subtle shadow on cream background
  - Product image area with category badge and wishlist heart toggle
  - Product title and clear placeholder price badge ("₹ In-Store")
  - Deep burgundy "Add to Cart" button with cart icon and interactive notification toast
- [x] Ensure no fake prices or fake customer reviews are presented

### Step 7: Mobile Bottom Navigation Bar (`BottomNav.jsx`)
- [x] Implement fixed bottom navigation bar for mobile devices:
  - Home (icon + label)
  - Categories (icon + label)
  - Offers (icon + label + "New" badge)
  - Wishlist (icon + label)
  - Account (icon + label)
- [x] Hide on desktop (`md:hidden`)
- [x] Add padding-bottom on root layout (`pb-16 md:pb-0`) to prevent bottom-nav overlap

### Step 8: Verified Business Contact & Store Info in Footer (`ContactCTA.jsx` & `Footer.jsx`)
- [x] Display exact verified shop address:
  *Phaphund Road, Durga Nagar, Pizza Point, Dibiyapur, Auraiya, Uttar Pradesh – 206244*
- [x] Display exact contact numbers:
  *9756595920 / 9528869946 / 7500781379* (with note that WhatsApp/support routing is pending)
- [x] Add working call and inquiry links

### Step 9: Testing & Verification
- [x] Run `npm run lint` and verify zero errors
- [x] Run `npm run build` and verify production bundle generation
- [x] Run local preview server (`http://localhost:4173/`) to verify viewports
- [x] Initialize Git repository (`git init`) and root `.gitignore`
- [x] Update all documentation files

---

## Future Phases Overview (Cross-referenced with `ROADMAP.md`)

- **Phase 3**: Responsive UI polish, interaction testing, and keyboard accessibility
- **Phase 4**: Product Catalogue & Bilingual UI support (Hindi/English switch)
- **Phase 5**: Backend scaffolding (Node.js + Express) & PostgreSQL database setup
- **Phase 6**: Secure Server-Side Authentication & Owner Admin Panel
- **Phase 7**: Shopping Cart, Checkout flow & Atomic Inventory Management
- **Phase 8**: Payment Gateway Integration & Webhook Verification
- **Phase 9**: Comprehensive Security, Accessibility, and Performance Audits
- **Phase 10**: Vercel & Backend Deployment, Domain Connection, and Production Smoke Testing
