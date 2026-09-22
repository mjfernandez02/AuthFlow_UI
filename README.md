# WordWell frontend

WordWell is a React + Vite starter for a vocabulary-learning app. The UI uses JavaScript/JSX and Chakra UI v3. Authentication is already wired so the learning features can be built separately.

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local URL, normally `http://localhost:5173`. The app uses `HashRouter`, so routes look like `http://localhost:5173/#/practice`.

Create a production build with:

```bash
npm run build
```

## Current routes

- `/` — public home page
- `/login` — direct login and OAuth/PKCE login entry
- `/register` and `/signup` — registration
- `/callback` — OAuth authorization-code callback
- `/practice` — protected starter page
- `/dashboard` — protected compatibility redirect to `/practice`

## Authentication

The existing login, registration, OAuth callback, PKCE, refresh-token, protected-route, and API utilities are retained. API endpoints remain configured in `src/config/api.js`.

`REACT_APP_CLIENT_SECRET` remains available for the existing optional confidential-client test flow. Vite is configured to expose that prefix. Do not put a real client secret in a browser application.

For a HashRouter callback, register a redirect URI shaped like `http://localhost:5173/#/callback` with the backend/client configuration.

## Start building

Edit `src/pages/PracticePage.jsx` first. It intentionally contains only a heading and one Chakra button.
