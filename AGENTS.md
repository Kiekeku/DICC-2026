# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds the React + TypeScript source (entry in `src/main.tsx`, root component in `src/App.tsx`).
- `src/assets/` contains bundled static assets referenced from components.
- `public/` is for static files served as-is (e.g., `/vite.svg`).
- Tooling and configs live at the repo root: `vite.config.ts`, `tsconfig*.json`, `eslint.config.js`.

## Build, Test, and Development Commands
- `npm run dev` starts the Vite dev server with HMR for local development.
- `npm run build` type-checks (`tsc -b`) and outputs a production build via Vite.
- `npm run lint` runs ESLint across the repo.
- `npm run preview` serves the production build locally for verification.

## Coding Style & Naming Conventions
- TypeScript + React with ES modules (`"type": "module"`).
- Use 2-space indentation and single quotes as shown in `src/App.tsx`.
- Prefer functional components and hooks; keep component files in `PascalCase` (e.g., `App.tsx`).
- Linting is enforced by ESLint with React Hooks and React Refresh rules (`eslint.config.js`).

## Testing Guidelines
- No test framework or scripts are configured yet.
- If you add tests, introduce a runner (e.g., Vitest or Jest), add a `test` script, and document file naming (commonly `*.test.ts` / `*.test.tsx`) and location.

## Commit & Pull Request Guidelines
- Git history is minimal and does not show a formal commit convention yet.
- Use short, imperative messages (e.g., “add header layout”, “fix button state”).
- PRs should include a clear description, linked issues (if any), and screenshots for UI changes.

## Configuration Tips
- Keep `tsconfig.app.json` and `tsconfig.node.json` aligned with new paths or aliases.
- Add new environment variables to `.env` and document required keys in README if introduced.
