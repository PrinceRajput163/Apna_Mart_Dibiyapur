# CLAUDE.md — Instructions for Claude on APNA MART DIBIYAPUR

## Quick Start

1. **Read `AGENTS.md`** for the documentation-first workflow and rules.
2. **Read `PROJECT_STATUS.md`** for current state and the exact next action.
3. Consult `PROJECT_CONTEXT.md` for requirements and `PROJECT_RULES.md` for rules — only when your task needs them.
4. Inspect relevant source code before editing. Do not re-read the entire codebase.
5. Continue from the recorded next action in `PROJECT_STATUS.md`.

## Key Points for Claude

- This project uses a **file-based memory system**. You cannot see Antigravity's chat history. The repository documentation is your shared context.
- Follow the **progress-maintenance protocol** defined in `AGENTS.md` — update `PROJECT_STATUS.md` and `PROGRESS.md` after every meaningful task.
- **Never fabricate** product data, prices, reviews, stock quantities, contact details, or test results.
- **Never silently replace** technologies in the locked stack without explicit user approval.
- **Do not use Lovable.** The user has explicitly excluded it.
- All detailed requirements, rules, architecture, and roadmap are in their respective files. Do not duplicate them here.

## File Reference

| File | Purpose |
|---|---|
| `PROJECT_STATUS.md` | Current state + next action (**start here**) |
| `AGENTS.md` | Workflow rules for all AI agents |
| `PROJECT_CONTEXT.md` | Durable business facts, location, contacts, and tech stack |
| `REQUIREMENTS.md` | Business, storefront, admin, and UI/UX requirements |
| `DECISIONS.md` | Confirmed and pending architectural & business decisions |
| `IMPLEMENTATION_PLAN.md` | Step-by-step implementation tasks for current phase |
| `ROADMAP.md` | Phased implementation checklist across all 10 phases |
| `ARCHITECTURE.md` | System design (planned vs. implemented) |
| `PROJECT_RULES.md` | Mandatory rules for code, security, data, and AI behaviour |
| `PROGRESS.md` | Chronological work log |
| `README.md` | Human-friendly setup guide |

