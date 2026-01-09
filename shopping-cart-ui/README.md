# Shopping Cart UI

A sleek, modern frontend-only shopping cart UI built with React + Vite + TypeScript + Tailwind CSS.

Features:
- Product listing with sample data
- Smooth cart drawer with add, increment, decrement
- Unit tests (Vitest + Testing Library)
- E2E tests (Playwright)

Setup & Commands

- Install dependencies:
  npm install

- Run dev server:
  npm run dev

- Run unit tests:
  npm run test:unit
  (or `npx vitest run`)

- Run E2E tests:
  npx playwright test

- Run all tests:
  npm test

Logs (from the run performed during project creation):

- npm install: added packages, audited packages (no fatal errors)

- Unit tests (Vitest):
  ✓ src/components/ProductCard.test.tsx (1)
  ✓ src/App.test.tsx (1)
  Test Files  2 passed (2)
  Tests  2 passed (2)

- Playwright E2E:
  1 passed (6.6s)

- Dev server started:
  VITE v5.4.21  ready in 406 ms
  Port 5173 is in use, trying another one...

Notes & Design choices:
- Focused on accessibility and crisp UI with Tailwind.
- Tests are simple but demonstrate key flows (adding items, cart content, checkout visible).

Enjoy exploring the UI and tests!
