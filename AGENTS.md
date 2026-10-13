# AGENTS.md — AI Agent Instructions for APNA MART DIBIYAPUR

## Purpose

This file tells any AI coding agent (Antigravity, Claude, or others) how to work on this project efficiently without re-reading the entire codebase every time.

## Documentation-First Workflow

This project uses a file-based memory system. The repository documentation is the shared project memory between all agents and tools. No agent can see another tool's chat history.

### Before Starting Any Task

1. **Read this file** (`AGENTS.md`) for workflow rules.
2. **Read `PROJECT_STATUS.md`** to discover current state and the exact next action.
3. **Read the relevant section** of `PROJECT_CONTEXT.md` or `PROJECT_RULES.md` if the task involves requirements, branding, or rules.
4. **Inspect only the code files relevant** to the requested task. Do not dump the entire repository.
5. **Do not re-read every documentation file** or the full `PROGRESS.md` history unless specifically needed.

### After Completing Any Meaningful Task

Update these files as applicable:

| File | When to Update |
|---|---|
| `PROJECT_STATUS.md` | **Always** — current state + next action |
| `PROGRESS.md` | **Always** — append a truthful chronological entry |
| `IMPLEMENTATION_PLAN.md` | When step-by-step implementation changes or completes |
| `ROADMAP.md` | When task completion or scope changes affect the roadmap |
| `ARCHITECTURE.md` | When architecture or implementation details change |
| `REQUIREMENTS.md` | When functional or business requirements change |
| `DECISIONS.md` | When durable architectural or business decisions are made |
| `PROJECT_CONTEXT.md` | Only when durable requirements, contact info, or business facts change |
| `PROJECT_RULES.md` | Only when the user explicitly changes a rule |
| `README.md` | When setup, commands, configuration, or usage change |
| `AGENTS.md` / `CLAUDE.md` | Only when the agent workflow itself changes |

### Before Finishing a Task

- Verify documentation changes were saved.
- Report files changed and commands run.
- Report tests actually run and their actual results.
- Identify anything not verified.
- State the exact next action.

## Authoritative Files

| File | Role |
|---|---|
| `PROJECT_STATUS.md` | Current state, next action — **read first for context recovery** |
| `PROJECT_CONTEXT.md` | Durable source of truth for business identity, location, contacts, and tech stack |
| `REQUIREMENTS.md` | Approved business, customer, admin, and UI/UX requirements |
| `DECISIONS.md` | Confirmed and pending architectural & business decisions |
| `IMPLEMENTATION_PLAN.md` | Granular step-by-step implementation plan for active phase |
| `ROADMAP.md` | Phased implementation checklist across all 10 phases |
| `ARCHITECTURE.md` | System design — planned vs. implemented |
| `PROJECT_RULES.md` | Mandatory rules for code, security, data, and AI behaviour |
| `PROGRESS.md` | Append-only chronological work log — historical reference |
| `README.md` | Human-friendly setup and usage guide |


## Verification Requirements

- Never claim a build, lint, or test passed without actually running it.
- Never claim a feature is complete without verifying it works.
- Never fabricate business data (prices, stock, reviews, contact details, hours).
- Never commit secrets, API keys, or passwords.
- Mark unverified items explicitly.

## Token Efficiency

- Use `PROJECT_STATUS.md` as the single entry point for resuming work.
- Read only relevant sections of larger files.
- Do not load all documentation files on every task.
- Use `PROGRESS.md` for history lookup, not routine reading.
- Inspect targeted source files, not the entire repository.

## Tool Switching Handoff

When switching between Antigravity and Claude:
1. Ensure `PROJECT_STATUS.md` is current.
2. The receiving agent reads `AGENTS.md` → `PROJECT_STATUS.md` → relevant files.
3. No chat history transfer is needed — the repository is the shared memory.
