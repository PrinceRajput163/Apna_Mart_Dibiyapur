# REQUIREMENTS.md — Business & Functional Requirements for APNA MART DIBIYAPUR

## 1. Business Requirements

- **Business Name**: APNA MART DIBIYAPUR
- **Store Title**: HOME & LIFESTYLE STORE
- **Tagline**: "Har Zaroorat, Ek Hi Jagah."
- **Owner**: Shyam Sundar Rajput
- **Business Model**: Physical retail variety store + local online e-commerce.
- **Physical Store Location**: Phaphund Road, Durga Nagar, Pizza Point, Dibiyapur, Auraiya, Uttar Pradesh – 206244.
- **Verified Contact Numbers**: `9756595920`, `9528869946`, `7500781379`.
- **Delivery Scope**: Local delivery in Dibiyapur and surrounding areas (subject to owner-confirmed serviceability).
- **Payment Methods Intended**:
  - Online payments (verified payment gateway & UPI)
  - Cash on Delivery (COD) where approved
  *(Specific gateway provider, fees, and rules pending owner confirmation)*

## 2. Customer Capabilities (Storefront)

- **Browse & Search**:
  - Browse catalogue by categories (7 initial categories)
  - Quick-search products by keyword / title
  - Filter products by category and availability
- **Product Details**:
  - View real product images, verified price, SKU, specifications, and descriptions
  - Clear stock status indicator
- **Cart & Order Flow**:
  - Add to cart, adjust quantities, remove items
  - Client-side cart state with strict server-side validation upon submission
  - Seamless checkout flow for local delivery or store pickup
- **Customer Accounts**:
  - Registration and login
  - View personal order history and order tracking status
- **Contact & Support**:
  - Contact store via verified phone numbers, store address, and dedicated inquiry links

## 3. Store Owner / Admin Capabilities

- **Catalogue Management**:
  - Add, edit, and delete products
  - Manage product categories
  - Set and update verified selling prices and MRP
  - Manage real stock quantities (with atomic inventory updates to prevent overselling)
  - Upload and manage product photographs
- **Order Management**:
  - View incoming orders in real time
  - Update order statuses (e.g. Received, Confirmed, Out for Delivery, Delivered, Cancelled)
- **Store Overview & Analytics**:
  - View order volume, sales totals, and inventory levels derived strictly from database records

## 4. Visual & UI/UX Requirements (Approved Reference Target)

- **Mobile-First Experience**:
  - Compact header with brand logo, hamburger menu, search icon, wishlist, user account, and cart
  - Prominent search input field
  - Large lifestyle hero banner with headline and "Shop Now" call to action
  - Circular category shortcut buttons with clear labels
  - Promotional collection banners (for verified campaigns)
  - Product grid with clean product cards (image, name, verified price, Add to Cart)
  - Service-benefit highlight strip (genuine products, quick local delivery, in-store pickup)
  - Persistent mobile bottom navigation bar (Home, Categories, Offers, Wishlist, Account)
- **Desktop & Tablet Responsiveness**:
  - Full desktop navigation header
  - Responsive multi-column grid layouts
  - Polished hover states, micro-interactions, and accessible keyboard navigation
- **Color & Style Aesthetics**:
  - Warm cream / off-white background (`#FAF7F2`)
  - Deep burgundy / maroon primary shopping buttons and key accents (`#6B1D2F`)
  - Orange highlights and subtle gold accents
  - Elegant serif typography for hero / display headings paired with clean, readable sans-serif body text

## 5. Strict Constraints & Non-Functional Requirements

- **No-Fabrication Policy**: Never publish or commit fake product data, fake reviews, imaginary prices, or unconfirmed opening hours/policies.
- **Security & Authorization**:
  - Server-side authentication for admin operations
  - Input validation, SQL injection prevention, XSS prevention, and CSRF protection
  - Safe handling of environment variables (never commit credentials)
- **Accessibility & Motion**:
  - Semantic HTML5 structure with ARIA labels
  - Strict compliance with `prefers-reduced-motion`
- **Performance**:
  - Fast bundle loading via Vite
  - Optimized image assets
