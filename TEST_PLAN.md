# TEST_PLAN.md — Testing Strategy & Verification Harness for APNA MART DIBIYAPUR

> **Status**: Active  
> **Version**: 1.0.0  
> **Target Application**: APNA MART DIBIYAPUR Frontend (React 19 + Vite 8 + Tailwind CSS v4)  
> **Last Updated**: 2026-10-13  

---

## 1. Executive Summary & Purpose

The purpose of this testing harness is to establish a rigorous, repeatable, and automated engineering verification system for APNA MART DIBIYAPUR. Every new UI component, feature, refactoring, or state change must be verified against explicit acceptance criteria before being marked complete.

This harness guarantees:
1. **Zero Unverified Claims**: No test or feature is claimed to pass without actual executed evidence.
2. **Strict Data Integrity**: Real store details (address, phone numbers, brand identity) are preserved, and unverified data (pricing, fake discounts, synthetic reviews) are strictly barred.
3. **Multi-Tier Quality Verification**: Build integrity, component unit behavior, semantic accessibility, mobile responsiveness, and documentation synchronization are tested systematically.
4. **Tool Agnostic Traceability**: Shared documentation (`TEST_CASES.md`, `TEST_RESULTS.md`) enables seamless handoff between developers, AI agents (Antigravity, Claude), and human reviewers.

---

## 2. Scope & Boundaries

### In Scope (Frontend Verification)
- **Build & Repository Integrity**: Dependency resolution, zero ESLint warnings/errors, production Vite bundling, asset integrity, and Git tracking rules.
- **Brand & Header Acceptance**: Logo rendering, store title (*"HOME & LIFESTYLE STORE"*), bilingual tagline (*"Har Zaroorat, Ek Hi Jagah"*), verified location excerpt, and interactive search and navigation affordances.
- **Category Browsing**: Rendering and interaction across all 7 approved initial categories (Crockery, Plastic & Storage, Bags & Accessories, Cleaning & Home, Gift Items, Backpacks & More, Kitchen Essentials).
- **Hero & Promotional Presentations**: Responsive typography, aspect ratio preservation, CTA navigation targets, and truthful copy without fabricated promotions.
- **Product Cards & Cart Interaction**: Accurate product metadata, non-fabricated pricing tags ("₹ In-Store"), wishlist toggling, and interactive cart notifications.
- **Service Benefits & Business Footer**: Verification of physical address (*Phaphund Road, Durga Nagar, Pizza Point, Dibiyapur*), contact numbers (`9756595920`, `9528869946`, `7500781379`), working `tel:` links, and map direction intents.
- **Mobile Bottom Navigation**: 5 persistent destinations (Home, Categories, Offers, Wishlist, Account), active state indicators, and desktop suppression (`md:hidden`).
- **Responsive Layout & Visual Quality**: Mobile viewports (320px–430px) and tablet/desktop viewports (768px–1440px), safe-area insets, and zero unintended horizontal scroll.
- **Semantic Accessibility & Motion**: Keyboard navigation, WCAG 2.1 AA focus indicators, ARIA attributes, semantic HTML tags, and reduced-motion compliance.
- **Documentation Harmonization**: Cross-file consistency across all project `.md` files.

### Out of Scope (Deferred to Later Phases)
- Backend API implementation and Express routing (Phase 5).
- PostgreSQL database schemas, migrations, and seeds (Phase 5).
- Server-side JWT/session authentication and admin privileges (Phase 6).
- Real payment gateway transactions (Razorpay / Cashfree webhook verification) (Phase 8).
- Real inventory transactions and atomic database locks (Phase 7).

---

## 3. Tooling Strategy & Stack

| Layer | Tool | Rationale |
|---|---|---|
| **Test Runner** | [Vitest](https://vitest.dev/) | Native Vite integration, ultra-fast ESM execution, instant startup, zero duplicate bundling overhead. |
| **Component Testing** | [React Testing Library](https://testing-library.com/) | User-centric testing querying semantic roles, labels, and text rather than brittle implementation details. |
| **DOM Environment** | [jsdom](https://github.com/jsdom/jsdom) | Reliable browser DOM simulation for fast in-process CI/CD and local execution on Windows. |
| **Assertions & Matchers** | `@testing-library/jest-dom` | Declarative DOM matchers (`toBeInTheDocument`, `toBeVisible`, `toHaveAttribute`). |
| **Linter** | ESLint 10 (`@eslint/js`, React Hooks) | Enforces clean syntax, zero unused variables, and React hook rules. |
| **Production Bundler** | Vite 8 + Rollup | Verifies bundle generation, asset optimization, chunk sizes, and minification. |
| **Local Preview Inspection** | Vite Preview Server (`localhost:4173`) | Serves production build for manual responsive viewport and visual regression inspections. |

---

## 4. Test Execution Classification

Every test case in the test suite is classified into one of four execution types:

1. **Automated (Unit / Component / Integration)**:
   - Executed via `npm test` (`vitest run`).
   - Asserts DOM elements, ARIA roles, event handling, component props, and state transitions.
2. **Automated (CLI / Static Analysis)**:
   - Executed via `npm run lint` and `npm run build`.
   - Asserts code quality, zero compilation errors, and bundle generation.
3. **Manual Visual / Responsive Inspection**:
   - Executed via browser preview (`http://localhost:4173/`) across target screen widths (320px, 360px, 390px, 430px, 768px, 1024px, 1280px).
   - Validates typography rendering, color contrast, touch target ergonomics, and safe-area padding.
4. **Blocked (Future Dependency)**:
   - Marked `BLOCKED` when dependent on external assets (official logo PNG upload), backend endpoints (Express `/api/products`), or merchant accounts (payment gateway).

---

## 5. Pass / Fail Criteria & Completion Gates

An automated or manual test case is marked:
- **PASS**: Only when directly executed with recorded evidence proving that actual result matches expected result.
- **FAIL**: When executed and actual result diverges from expected result, producing a non-zero exit code or visual defect.
- **BLOCKED**: When execution cannot occur due to a missing external prerequisite (e.g. backend API, official logo file, owner policy confirmation).
- **NOT RUN**: When scheduled for future phases and not yet targeted in the active sprint.

### Mandatory Harness Completion Gates
1. Test infrastructure (`vitest`, `jsdom`, `@testing-library/react`) cleanly installed.
2. Package scripts (`"test": "vitest run"`) added and verified.
3. Test suite covering all testable criteria authored in `frontend/src/__tests__/`.
4. `TEST_CASES.md` cataloging all 102 test cases created and maintained.
5. `TEST_RESULTS.md` documenting actual execution logs, counts, and blocker notes.
6. Zero fabricated test results, zero mock passes, and truthful reporting throughout.
