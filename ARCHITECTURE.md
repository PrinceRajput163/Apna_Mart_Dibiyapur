# ARCHITECTURE.md — System Architecture for APNA MART DIBIYAPUR

> **Convention**: Sections marked **[PLANNED]** describe intended architecture. Sections marked **[IMPLEMENTED]** describe what exists and has been verified. Sections marked **[VERIFIED]** have been tested and confirmed working.

---

## High-Level Overview [PLANNED]

```
┌─────────────────────────────────────────────────┐
│                   CLIENT                        │
│         React + Vite + Tailwind CSS             │
│         (Hosted on Vercel)                      │
└──────────────────────┬──────────────────────────┘
                       │ HTTPS / REST API
┌──────────────────────▼──────────────────────────┐
│                   SERVER                        │
│           Node.js + Express                     │
│     (Hosted on compatible provider)             │
│                                                 │
│   ┌───────────┐  ┌───────────┐  ┌───────────┐  │
│   │   Auth    │  │ Products  │  │  Orders   │  │
│   │  Module   │  │   API     │  │   API     │  │
│   └───────────┘  └───────────┘  └───────────┘  │
│                                                 │
│   ┌───────────┐  ┌───────────┐                  │
│   │  Admin    │  │ Payments  │                  │
│   │   API     │  │  Module   │                  │
│   └───────────┘  └───────────┘                  │
└──────────────────────┬──────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
┌───────▼──────┐ ┌─────▼─────┐ ┌─────▼──────┐
│  PostgreSQL  │ │  Image    │ │  Payment   │
│  (Managed)   │ │  Storage  │ │  Gateway   │
└──────────────┘ └───────────┘ └────────────┘
```

## Frontend Architecture [IMPLEMENTED / ACTIVE]

### Technology

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Animation**: Motion for React (`motion` package)
- **Fonts**:
  - Hero & Display: Playfair Display (`font-serif`)
  - UI & Body: Outfit (`font-body` / `font-sans`)
  - Hindi Script: Noto Sans Devanagari (`font-hindi`)

### Design System (Mobile E-Commerce Reference Alignment) [IMPLEMENTED]

Configured via Tailwind v4 `@theme` tokens in `frontend/src/index.css`:

| Token Group | Values / Examples | Role |
|---|---|---|
| Background & Surfaces | `#faf7f2` (`cream-50`), `#f5efeb` (`cream-100`), `#ffffff` | Warm, inviting e-commerce canvas |
| Primary Action / Brand | `#541220` (`burgundy-900`), `#6b1d2f` (`burgundy-800`), `#84243a` | Shopping buttons, key accents, headers |
| Accent Highlights | `#e8602d` (`orange-500`), `#d4a853` (`gold-400`), `#c9952e` | Badges, discount indicators, rating accents |
| Text & Contrast | `#1f1a1c` (charcoal primary), `#4b4044`, `#665a5e` | High readability on light surfaces |
| Fonts | `font-serif`, `font-sans` (`Outfit`), `font-hindi` (`Noto Sans Devanagari`) | Refined aesthetic matching reference |

Utility classes: `.serif-title`, `.burgundy-btn`, `.subtle-shadow`, `.card-shadow`, `.no-scrollbar`

### Component Status (Reference Alignment)

```
App.jsx (root layout)
├── Navbar.jsx          — [IMPLEMENTED] Compact mobile header: logo, search input, wishlist, cart, account, drawer
├── Hero.jsx            — [IMPLEMENTED] Lifestyle presentation: serif headline, burgundy CTA, trust highlights
├── Categories.jsx      — [IMPLEMENTED] 7 circular category shortcuts with horizontal mobile touch-scroll
├── ServiceBenefits.jsx — [IMPLEMENTED] 4 verifiable store highlights (Physical store, Genuine, Pickup, Local support)
├── PromoBanner.jsx     — [PLANNED] Promotional campaign strip (owner-verified)
├── FeaturedProducts.jsx — [IMPLEMENTED] Product grid with category pill, wishlist toggle, verified price tag, and burgundy Add to Cart
├── StoreIntro.jsx      — [IMPLEMENTED] Store introduction and local identity
├── ContactCTA.jsx      — [IMPLEMENTED] Verified shop address, contact numbers, direct inquiry
├── Footer.jsx          — [IMPLEMENTED] Complete footer with verified business details
└── BottomNav.jsx       — [IMPLEMENTED] Persistent mobile bottom navigation (Home, Categories, Offers, Wishlist, Account)
```


### Routing

- **Current**: Single-page (no router). All sections on one page with anchor links.
- **Planned**: React Router for product pages, category pages, cart, checkout, admin panel.


## Backend Architecture [PLANNED]

### API Design (REST)

| Endpoint Group | Purpose | Auth Required |
|---|---|---|
| `GET /api/products` | List products (with filters, pagination) | No |
| `GET /api/products/:id` | Product details | No |
| `GET /api/categories` | List categories | No |
| `POST /api/auth/login` | Owner login | No |
| `POST /api/auth/logout` | Owner logout | Yes (owner) |
| `POST /api/admin/products` | Create product | Yes (owner) |
| `PUT /api/admin/products/:id` | Update product | Yes (owner) |
| `DELETE /api/admin/products/:id` | Delete product | Yes (owner) |
| `POST /api/orders` | Create order | Yes (customer) |
| `GET /api/orders/:id` | Order details | Yes (customer/owner) |
| `GET /api/admin/orders` | List all orders | Yes (owner) |
| `POST /api/payments/verify` | Verify payment callback | Server-only |

### Middleware

- Authentication (session or JWT — TBD)
- Authorization (role-based: owner, customer)
- Input validation and sanitization
- Rate limiting
- CORS configuration
- Error handling

## Database Schema [PLANNED]

### Core Entities

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Category   │     │   Product    │     │   Product    │
│              │────<│              │────<│   Image      │
│ id           │     │ id           │     │ id           │
│ name_en      │     │ name_en      │     │ product_id   │
│ name_hi      │     │ name_hi      │     │ url          │
│ slug         │     │ description_en│    │ alt_text     │
│ icon         │     │ description_hi│    │ sort_order   │
│ sort_order   │     │ price        │     └──────────────┘
└──────────────┘     │ stock        │
                     │ category_id  │     ┌──────────────┐
                     │ is_active    │     │   Order      │
                     │ created_at   │     │              │
                     │ updated_at   │     │ id           │
                     └──────────────┘     │ customer_name│
                                          │ customer_phone│
┌──────────────┐                          │ status       │
│   User       │                          │ total_amount │
│              │                          │ payment_status│
│ id           │                          │ created_at   │
│ email        │                          └──────┬───────┘
│ password_hash│                                 │
│ role         │                          ┌──────▼───────┐
│ created_at   │                          │  OrderItem   │
└──────────────┘                          │              │
                                          │ id           │
                                          │ order_id     │
                                          │ product_id   │
                                          │ quantity     │
                                          │ unit_price   │
                                          └──────────────┘
```

### Key Constraints

- Product prices and stock verified server-side before order creation.
- Inventory deduction is atomic (database transaction).
- Payment status updated only via verified server-side callback.
- Bilingual fields (`name_en`, `name_hi`) on products and categories.

## Authentication & Authorization [PLANNED]

- **Method**: Secure server-side authentication (exact mechanism TBD)
- **Roles**: Owner (admin), Customer
- **Owner capabilities**: Full product CRUD, view all orders, update order status
- **Customer capabilities**: Browse products, place orders, view own orders
- **Public access**: Browse products and categories, view store information

## Payment Flow [PLANNED]

```
Customer → Checkout → Server creates order (status: pending)
                    → Server initiates payment with gateway
                    → Customer completes payment on gateway page
                    → Gateway sends webhook/callback to server
                    → Server verifies payment signature
                    → Server updates order status + deducts inventory
                    → Customer sees confirmation
```

- Payment gateway: TBD (after merchant account setup)
- All payment verification happens server-side
- Never trust client-side payment status

## Image Storage [PLANNED]

- Product images stored in managed image storage (provider TBD)
- Images optimised and served via CDN
- Multiple images per product supported
- Admin can upload/reorder/delete images

## Deployment Topology [PLANNED]

| Component | Host | Status |
|---|---|---|
| Frontend (React) | Vercel | ⬜ Not configured |
| Backend (Express) | TBD | ⬜ Not started |
| Database (PostgreSQL) | Managed PostgreSQL (TBD) | ⬜ Not started |
| Image storage | TBD | ⬜ Not started |
| Domain | `.tech` domain (name unconfirmed) | ⬜ Not connected |
| SSL | Via hosting provider | ⬜ Not configured |
