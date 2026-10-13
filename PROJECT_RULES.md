# PROJECT_RULES.md — Mandatory Rules for APNA MART DIBIYAPUR

## 1. Architecture Rules

- **Do not replace** any technology in the locked stack without explicit user approval.
- **Do not add** unnecessary frameworks, libraries, or tools without explaining why.
- **Do not silently upgrade** major dependency versions.
- Keep the frontend and backend as separate directories (`frontend/`, future `backend/`).

## 2. Coding Standards

- Write modular, readable, beginner-friendly code.
- Use meaningful file and component names.
- Reuse components where appropriate; avoid copy-paste duplication.
- Add concise comments explaining non-obvious logic.
- Preserve existing comments and docstrings unrelated to your changes.
- Follow existing code conventions (naming, formatting, file structure).

## 3. Data Integrity

- **Never invent** product names, prices, stock quantities, customer reviews, ratings, or order data.
- **Never fabricate** business hours, delivery policies, store addresses, phone numbers, or payment results.
- Use clearly labelled placeholders when actual data is unavailable.
- All product prices, stock, and payment status must be verified server-side (when backend exists).
- Inventory changes must be atomic to prevent overselling.

## 4. Security

- **Never commit** credentials, API keys, passwords, private customer data, or production secrets.
- Use environment variables for all secrets; document only variable names and safe example placeholders.
- Require server-side authorization for all protected operations (admin, customer accounts, orders).
- Validate and sanitize all user input on both client and server.
- Use HTTPS in production.
- Do not claim the application is secure without appropriate testing and verification.

## 5. Privacy

- Do not collect unnecessary personal data.
- Store customer data securely with proper access controls.
- Do not expose customer information in client-side code, logs, or error messages.

## 6. Testing and Verification

- Never claim a build, lint, or test passed without actually running it and verifying the output.
- Never mark unverified work as completed in documentation.
- Run `npm run build` and `npm run lint` after meaningful code changes.
- Report actual test output, not assumed results.

## 7. Git and Version Control

- Write clear, descriptive commit messages.
- Do not commit `node_modules/`, `.env`, `dist/`, or other generated/secret files.
- Use `.gitignore` properly.
- Do not force-push to shared branches without approval.

## 8. Documentation

- Follow the progress-maintenance protocol in `AGENTS.md`.
- Always update `PROJECT_STATUS.md` and `PROGRESS.md` after meaningful work.
- Never rewrite history in `PROGRESS.md`; it is append-only.
- Keep `PROJECT_STATUS.md` concise and immediately actionable.

## 9. AI Agent Behaviour

- Read documentation before starting work (see `AGENTS.md`).
- Do not re-read the entire repository on every task.
- Inspect targeted source files relevant to the task.
- Do not perform deployments, payment setup, destructive operations, or other externally consequential actions without user approval.
- If a command or operation fails, stop and explain the actual error. Do not invent success.
- When uncertain about intent, ask for clarification rather than guessing.

## 10. Accessibility

- Use semantic HTML elements.
- Ensure interactive elements have accessible labels.
- Respect `prefers-reduced-motion` for animations.
- Maintain sufficient colour contrast.
- Ensure keyboard navigation works for all interactive elements.

## 11. Performance

- Optimise images and assets.
- Avoid unnecessary re-renders in React components.
- Use lazy loading where appropriate.
- Keep bundle sizes reasonable.
