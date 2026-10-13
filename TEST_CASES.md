# TEST_CASES.md — Master Test Case Catalog for APNA MART DIBIYAPUR

> **Project**: APNA MART DIBIYAPUR  
> **Total Test Cases**: 102  
> **Last Updated**: 2026-10-13  
> **Status Legend**:  
> - `PASS` — Executed and verified matching expected outcome  
> - `FAIL` — Executed and failed  
> - `BLOCKED` — Blocked by missing external asset, backend API, or owner confirmation  
> - `NOT RUN` — Scheduled for future phase or visual check in progress  

---

## Group 1 — Build & Repository Integrity

| Test ID | Description | Preconditions | Action / Input | Expected Result | Status | Execution Type |
|---|---|---|---|---|---|---|
| **TC-001** | Dependency resolution | Node.js v24+, npm 11+ | Run `npm install` in `frontend/` | Dependencies resolve cleanly without unresolved peer dependency conflicts | PASS | Automated (CLI) |
| **TC-002** | ESLint static analysis | ESLint configured | Run `npm run lint` in `frontend/` | Passes with zero errors and zero warnings (exit code 0) | PASS | Automated (CLI) |
| **TC-003** | Production build completion | Vite 8 + Tailwind v4 | Run `npm run build` in `frontend/` | Generates minified production bundle in `frontend/dist` without errors | PASS | Automated (CLI) |
| **TC-004** | Home route loading | Build completed | Start preview server and load `/` | App mounts root container and renders without unhandled exceptions | PASS | Automated (Preview) |
| **TC-005** | File preservation | Existing components | Inspect git tree during edits | No unrelated config or working components deleted | PASS | Automated (Git) |
| **TC-006** | Component functionality preservation | Components mounted | Render root `<App />` | All 9 core homepage sections mount and render valid DOM nodes | PASS | Automated (Test) |
| **TC-007** | Git diff cleanliness | Git repo active | Run `git status --short` | Working tree contains only intentional, documented changes | PASS | Automated (Git) |
| **TC-008** | Build output ignore rules | Root `.gitignore` | Run `git check-ignore frontend/dist` | `frontend/dist` is ignored and never committed | PASS | Automated (Git) |

---

## Group 2 — Brand & Header

| Test ID | Description | Preconditions | Action / Input | Expected Result | Status | Execution Type |
|---|---|---|---|---|---|---|
| **TC-009** | Logo asset rendering | Store header loaded | Inspect header brand element | Renders authentic owner logo if available; uses styled text/emblem badge without synthetic AI substitution | PASS | Automated (Test) |
| **TC-010** | Brand title and tagline verification | Header rendered | Query brand title and announcement strip | Displays *"APNA MART DIBIYAPUR"* and tagline *"Har Zaroorat, Ek Hi Jagah"* / *"हर ज़रूरत, एक ही जगह"* | PASS | Automated (Test) |
| **TC-011** | Responsive header layout | Header rendered at 360px, 768px, 1280px | Inspect layout across breakpoints | Header remains compact and readable without text collision | PASS | Manual Visual |
| **TC-012** | Accessible header actions | Header rendered | Inspect cart, wishlist, and drawer buttons | Interactive controls have explicit `aria-label` or readable accessible names | PASS | Automated (Test) |
| **TC-013** | Cart counter integrity | Cart badge rendered | Inspect cart badge number | Reflects actual cart state (`0`), displaying no fabricated count | PASS | Automated (Test) |
| **TC-014** | Store location line | Top utility strip rendered | Query store location excerpt | Displays verified physical address info (*"Phaphund Road, Durga Nagar, Pizza Point, Dibiyapur"*) | PASS | Automated (Test) |
| **TC-015** | Header horizontal overflow | Mobile viewport (320px–430px) | Check bounding boxes in header | No horizontal overflow or viewport scrolling caused by header | PASS | Manual Visual |

---

## Group 3 — Search

| Test ID | Description | Preconditions | Action / Input | Expected Result | Status | Execution Type |
|---|---|---|---|---|---|---|
| **TC-016** | Search input accessibility | Navbar mounted | Query search input element | Input has accessible name/placeholder (*"Search essentials..."*) and keyboard focusable | PASS | Automated (Test) |
| **TC-017** | Search input typing | Search input rendered | Fire user input event with text | Input value updates reactively to typed string | PASS | Automated (Test) |
| **TC-018** | Search form submission | Query typed | Submit search form | Form handles submission cleanly without page reload or script errors | PASS | Automated (Test) |
| **TC-019** | Search clear restores state | Query submitted | Clear search input | UI resets state without broken components | PASS | Automated (Test) |
| **TC-020** | Empty search result handling | Catalog search active | Search non-existent item | Displays honest empty state rather than fabricated results | NOT RUN | Phase 4 (Catalog) |
| **TC-021** | Special characters & mixed-case queries | Search input rendered | Enter spaces, punctuation, mixed case | Component processes input safely without runtime exception | PASS | Automated (Test) |
| **TC-022** | Truthful voice search representation | Search bar rendered | Inspect microphone icon button | Marked as coming soon or disabled; does not claim active voice recognition | PASS | Automated (Test) |

---

## Group 4 — Categories

| Test ID | Description | Preconditions | Action / Input | Expected Result | Status | Execution Type |
|---|---|---|---|---|---|---|
| **TC-023** | Render 7 approved categories | Categories mounted | Query all rendered category items | Displays Crockery, Plastic & Storage, Bags & Accessories, Cleaning & Home, Gift Items, Backpacks & More, Kitchen Essentials | PASS | Automated (Test) |
| **TC-024** | Category icons alternative text | Categories rendered | Inspect emoji / SVG icon elements | Icons have appropriate ARIA role, label, or decorative attributes | PASS | Automated (Test) |
| **TC-025** | Category selection interaction | Categories rendered | Click category item | Triggers navigation anchor or category filter handler | PASS | Automated (Test) |
| **TC-026** | Category strip mobile usability | Mobile viewport | Check horizontal container | Smooth horizontal scroll with touch support and no clipped labels | PASS | Manual Visual |
| **TC-027** | Category text wrapping | Mobile viewport | Inspect category label containers | Text wraps cleanly without overlapping icons | PASS | Manual Visual |
| **TC-028** | "All Categories" shortcut | Category section rendered | Click "All Categories" | Jumps to full category section or opens catalogue drawer | PASS | Automated (Test) |

---

## Group 5 — Hero Banner

| Test ID | Description | Preconditions | Action / Input | Expected Result | Status | Execution Type |
|---|---|---|---|---|---|---|
| **TC-029** | Hero copy and CTA rendering | Hero mounted | Query headline and CTA | Displays display headline, bilingual tagline, and "Shop Categories" button | PASS | Automated (Test) |
| **TC-030** | Shop Now CTA navigation | Hero mounted | Click primary CTA | Navigates to valid `#categories` or catalogue anchor | PASS | Automated (Test) |
| **TC-031** | Aspect ratio preservation | Hero image rendered | Inspect responsive hero media | Preserves layout aspect ratios without distortion | PASS | Manual Visual |
| **TC-032** | Hero responsive readability | Viewports 320px to 1440px | Inspect text legibility | Text is legible across mobile, tablet, and desktop viewports | PASS | Manual Visual |
| **TC-033** | Motion accessibility in hero | User prefers reduced motion | Check motion animations | Animations obey `motion-safe` / `prefers-reduced-motion` | PASS | Automated (Test) |
| **TC-034** | Truthful promotional claims | Hero mounted | Inspect all promotional copy | Zero fabricated clearance percentages or fake sale countdowns | PASS | Automated (Test) |

---

## Group 6 — Product Cards & Pricing

| Test ID | Description | Preconditions | Action / Input | Expected Result | Status | Execution Type |
|---|---|---|---|---|---|---|
| **TC-035** | Product card metadata display | FeaturedProducts mounted | Query product card titles & categories | Displays verified title, category pill, and descriptive subtitle | PASS | Automated (Test) |
| **TC-036** | Non-fabricated price badges | Product cards rendered | Inspect price container | Displays truthful "₹ In-Store" badge; never displays fabricated rupee figures | PASS | Automated (Test) |
| **TC-037** | Discount badge integrity | Product cards rendered | Check discount tags | No fake discount badges (`-50%`, `-20%`) rendered without verified data | PASS | Automated (Test) |
| **TC-038** | Crossed-out price integrity | Product cards rendered | Check price elements | Never displays crossed-out fake MRPs | PASS | Automated (Test) |
| **TC-039** | Product image alternative text | Product cards rendered | Inspect product image/icon elements | Meaningful `aria-label` or descriptive text present | PASS | Automated (Test) |
| **TC-040** | Add to Cart interactive toast | Product cards rendered | Click "Add to Cart" button | Displays interactive confirmation toast notification | PASS | Automated (Test) |
| **TC-041** | Add to cart quantity rules | Product added | Click Add multiple times | Multiple adds handled gracefully without app crashing | PASS | Automated (Test) |
| **TC-042** | Cart quantity updates | Global cart active | Modify quantity in cart | Consistent cart state maintained | NOT RUN | Phase 7 (Cart) |
| **TC-043** | Out of stock enforcement | Out of stock product | Attempt Add to Cart | Disabled when marked unavailable | NOT RUN | Phase 7 (Inventory) |
| **TC-044** | Empty catalog fallback | Catalog empty | Render with 0 products | Clean empty state rendered | PASS | Automated (Test) |
| **TC-045** | Product card responsiveness | Viewports 320px–1280px | Inspect card grid | 2 columns on mobile, 3 on tablet, 6 on desktop without overflow | PASS | Manual Visual |

---

## Group 7 — Promotions, Collections & New Arrivals

| Test ID | Description | Preconditions | Action / Input | Expected Result | Status | Execution Type |
|---|---|---|---|---|---|---|
| **TC-046** | Festival banners verified content | Campaign strip | Render festival banner | Rendered only when approved campaign content exists | BLOCKED | Awaiting Owner Campaign |
| **TC-047** | Offers navigation integrity | Offers tab in BottomNav | Click Offers | Honest navigation to available offers or in-store specials | PASS | Automated (Test) |
| **TC-048** | Shop by Collection navigation | Collection cards | Click collection card | Navigates to corresponding category section | PASS | Automated (Test) |
| **TC-049** | New Arrivals data integrity | New Arrivals section | Inspect items | Contains only verified items or clearly labeled development fixtures | PASS | Automated (Test) |
| **TC-050** | View All navigation links | Section headers | Click "Inquire for Availability" | Navigates to `#contact` or store inquiry anchor | PASS | Automated (Test) |
| **TC-051** | Missing campaign fallback | No active campaign | Render page without campaign | Clean layout rendered without broken banner gaps | PASS | Automated (Test) |

---

## Group 8 — Service Benefits & Footer

| Test ID | Description | Preconditions | Action / Input | Expected Result | Status | Execution Type |
|---|---|---|---|---|---|---|
| **TC-052** | Factual service benefits | ServiceBenefits mounted | Query all 4 benefits | Verifiable claims only: Physical store, Genuine quality, Counter pickup, Local support | PASS | Automated (Test) |
| **TC-053** | Footer brand and tagline | Footer mounted | Query footer text | Displays *"APNA MART DIBIYAPUR"* and *"Har Zaroorat, Ek Hi Jagah"* | PASS | Automated (Test) |
| **TC-054** | Verified business address & phones | ContactCTA & Footer mounted | Query address & phone numbers | Exact address: *Phaphund Road, Durga Nagar, Pizza Point, Dibiyapur*; Numbers: `9756595920`, `9528869946`, `7500781379` | PASS | Automated (Test) |
| **TC-055** | Valid telephone links | Contact links rendered | Inspect `href` attributes | Format matches `tel:9756595920`, `tel:9528869946`, `tel:7500781379` | PASS | Automated (Test) |
| **TC-056** | WhatsApp routing integrity | WhatsApp button | Inspect WhatsApp intent | Links to confirmed WhatsApp number; clearly notes pending owner confirmation | PASS | Automated (Test) |
| **TC-057** | Store directions map link | ContactCTA rendered | Inspect directions link | Links to Google Maps search with verified Dibiyapur address without invented coordinates | PASS | Automated (Test) |

---

## Group 9 — Bottom Navigation

| Test ID | Description | Preconditions | Action / Input | Expected Result | Status | Execution Type |
|---|---|---|---|---|---|---|
| **TC-058** | Home tab navigation | BottomNav mounted | Click Home tab | Sets active state and points to `#home` | PASS | Automated (Test) |
| **TC-059** | Categories tab navigation | BottomNav mounted | Click Categories tab | Sets active state and points to `#categories` | PASS | Automated (Test) |
| **TC-060** | Offers tab navigation | BottomNav mounted | Click Offers tab | Points to `#featured` with "New" badge | PASS | Automated (Test) |
| **TC-061** | Wishlist tab navigation | BottomNav mounted | Click Wishlist tab | Points to `#featured` wishlist items | PASS | Automated (Test) |
| **TC-062** | Account tab navigation | BottomNav mounted | Click Account tab | Points to `#contact` store contact info | PASS | Automated (Test) |
| **TC-063** | Active tab visual indicator | Tab clicked | Click each tab | Active tab shows burgundy color and animated indicator dot | PASS | Automated (Test) |
| **TC-064** | Bottom navigation layout clearance | Root container | Check root padding-bottom | Root container has `pb-16 md:pb-0` preventing content obscuration | PASS | Automated (Test) |
| **TC-065** | Mobile safe-area insets | Mobile device view | Inspect bottom navigation CSS | Fixed position with backdrop blur and responsive safe margins | PASS | Manual Visual |
| **TC-066** | Desktop suppression | Viewport >= 768px | Inspect BottomNav visibility | Bottom navigation is hidden on desktop via `md:hidden` | PASS | Automated (Test) |

---

## Group 10 — Responsive Layout & Visual Quality

| Test ID | Description | Preconditions | Action / Input | Expected Result | Status | Execution Type |
|---|---|---|---|---|---|---|
| **TC-067** | Narrow mobile viewports | Viewports 320, 360, 390, 430px | Inspect preview in browser | Layout is clean, readable, and thumb-friendly | PASS | Manual Visual |
| **TC-068** | Tablet & desktop viewports | Viewports 768, 1024, 1280, 1440px | Inspect preview in browser | Multi-column grids expand cleanly with centered containers | PASS | Manual Visual |
| **TC-069** | Zero horizontal scroll | Viewports 320px–1440px | Inspect body overflow | `overflow-x-hidden` on root prevents horizontal spill | PASS | Automated (Test) |
| **TC-070** | No text clipping or button overlap | All breakpoints | Inspect headers, cards, buttons | Labels and icons wrap cleanly without truncation bugs | PASS | Manual Visual |
| **TC-071** | Consistent image aspect ratios | Product & category cards | Inspect aspect ratio classes | Consistent `aspect-square` containers applied | PASS | Manual Visual |
| **TC-072** | Grid column adaptation | Breakpoints changed | Inspect CSS grid classes | Adapts from 2-column mobile to multi-column desktop | PASS | Manual Visual |
| **TC-073** | Section reading hierarchy | Homepage loaded | Inspect DOM section ordering | Header → Hero → Categories → Benefits → Products → Intro → Contact → Footer | PASS | Automated (Test) |
| **TC-074** | Fixed element clearance | Sticky header and bottom nav | Scroll through entire page | Fixed elements never permanently block buttons or links | PASS | Manual Visual |
| **TC-075** | Zero missing image icons | Assets loaded | Check browser asset requests | No 404 broken image indicators rendered | PASS | Automated (Test) |
| **TC-076** | Zero uncaught console errors | App mounted and interacted | Inspect browser console log | Zero unhandled exceptions or React render warnings | PASS | Automated (Test) |
| **TC-077** | Consistent visual comparison | Preview running | Inspect mobile/desktop viewport | Renders harmonious warm cream and burgundy theme | PASS | Manual Visual |
| **TC-078** | Palette conflict recorded | Screenshot comparison | Compare burgundy vs green/yellow palette | Unresolved palette difference recorded in DECISIONS.md | PASS | Documentation |

---

## Group 11 — Accessibility & Motion

| Test ID | Description | Preconditions | Action / Input | Expected Result | Status | Execution Type |
|---|---|---|---|---|---|---|
| **TC-079** | Keyboard navigation | App rendered | Tab through interactive controls | All buttons, links, and inputs receive focus in logical order | PASS | Automated (Test) |
| **TC-080** | Visible focus indicators | Controls focused | Inspect focus outlines | Focused elements have distinct outline / ring styling | PASS | Manual Visual |
| **TC-081** | Accessible control names | App rendered | Inspect buttons and links | All interactive controls have text content or `aria-label` | PASS | Automated (Test) |
| **TC-082** | Image alternative text | App rendered | Inspect image elements | All images have meaningful `alt` text or decorative ARIA flags | PASS | Automated (Test) |
| **TC-083** | Color contrast compliance | Theme colors | Check cream bg vs burgundy text | WCAG AA contrast ratio (> 4.5:1) satisfied for body and headings | PASS | Manual Visual |
| **TC-084** | Reduced-motion compliance | Motion animations | Inspect motion configs | Transitions use graceful degradations and respect user motion settings | PASS | Automated (Test) |
| **TC-085** | Non-color state communication | Wishlist and active tabs | Check state indicators | State changes include icon fills, text changes, or indicator dots | PASS | Automated (Test) |
| **TC-086** | Mobile touch target sizing | Mobile viewport | Inspect touch targets | Buttons and tabs satisfy minimum touch height (~44px) | PASS | Manual Visual |

---

## Group 12 — Performance & Reliability

| Test ID | Description | Preconditions | Action / Input | Expected Result | Status | Execution Type |
|---|---|---|---|---|---|---|
| **TC-087** | Zero unnecessary dependencies | `package.json` | Inspect installed packages | Only locked packages (React, Vite, Tailwind v4, Motion, Vitest) | PASS | Automated (Test) |
| **TC-088** | Font preconnection & loading | `index.html` | Inspect Google Fonts links | `preconnect` headers used for `fonts.googleapis.com` | PASS | Automated (Test) |
| **TC-089** | Cumulative layout shift avoidance | Media containers | Inspect image/card wrappers | Explicit aspect ratios prevent unexpected layout jumps | PASS | Manual Visual |
| **TC-090** | Repeated interaction stability | Add to cart, drawer toggle | Click repeatedly in rapid sequence | State updates predictably without duplicate listeners | PASS | Automated (Test) |
| **TC-091** | Zero React render warnings | Tests run | Run test suite with React 19 | Zero React hydration or invalid prop warnings | PASS | Automated (Test) |
| **TC-092** | Graceful fallback on missing data | Components rendered | Pass empty props/arrays | Components degrade gracefully without runtime crashes | PASS | Automated (Test) |
| **TC-093** | Valid anchor navigation targets | Anchor links | Check href targets in DOM | All `#target` anchors match existing DOM IDs | PASS | Automated (Test) |

---

## Group 13 — Documentation Harness

| Test ID | Description | Preconditions | Action / Input | Expected Result | Status | Execution Type |
|---|---|---|---|---|---|---|
| **TC-094** | AGENTS.md workflow rules | Project root | Inspect `AGENTS.md` | Contains permanent workflow, memory system, and verification rules | PASS | Automated (Doc) |
| **TC-095** | REQUIREMENTS.md acceptance criteria | Project root | Inspect `REQUIREMENTS.md` | Records approved business, customer, admin, and UI requirements | PASS | Automated (Doc) |
| **TC-096** | ARCHITECTURE.md stack & boundaries | Project root | Inspect `ARCHITECTURE.md` | Records locked stack, component inventory, and planned backend | PASS | Automated (Doc) |
| **TC-097** | IMPLEMENTATION_PLAN.md tracking | Project root | Inspect `IMPLEMENTATION_PLAN.md` | Records granular step-by-step phases and current status | PASS | Automated (Doc) |
| **TC-098** | PROJECT_CONTEXT.md business facts | Project root | Inspect `PROJECT_CONTEXT.md` | Contains verified business identity, address, phone numbers, owner | PASS | Automated (Doc) |
| **TC-099** | DECISIONS.md architectural decisions | Project root | Inspect `DECISIONS.md` | Records all confirmed decisions (DEC-001–013) and pending items | PASS | Automated (Doc) |
| **TC-100** | PROGRESS.md chronological work log | Project root | Inspect `PROGRESS.md` | Chronological log updated after every task with verified commands | PASS | Automated (Doc) |
| **TC-101** | Documentation consistency | All `.md` files | Cross-check documentation | No conflicting business details, prices, or false claims | PASS | Automated (Doc) |
| **TC-102** | No verification without execution | Task completion | Review verification claims | No feature marked complete or test marked passed without execution | PASS | Automated (Doc) |
