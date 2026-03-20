# Test Assignment: Package Explorer (Monorepo)

Package Explorer project with Angular and Nestjs

This repository contains a small full‑stack test assignment built as a **monorepo**.
It includes:

- **Angular frontend**
- **NestJS backend**
- **Shared TypeScript models** used by both apps

The project is intended for development only (no production builds).

---

## Project Structure

apps/
test-assignment-package-explorer-api/ # Backend (NestJS)
test-assignment-package-explorer-frontend/ # Frontend (Angular)
libs/
models/ # Shared interfaces
package.json # Root workspace config
tsconfig.base.json

## Installation

Run this once from the **root**:

npm install

## Running

### Backend (NestJS, dev mode)

npm run start:backend

### Frontend (Angular)

npm run start:frontend

### Run both at the same time

npm run start:all

## Tests

npm run test:backend
npm run test:frontend

## Notes

- Uses npm workspaces (single `node_modules` at root).
- Shared models are imported via path aliases.
- Backend runs with `ts-node-dev` (no build step).
- This is a **test assignment**, not a production project.

## Todo (future)

- Testing
- Linting
- Dockerization
