# Backend fixes

## Do this first
Rotate your MongoDB Atlas password. It was pasted into this chat in plaintext
and should be treated as compromised even though it never touched GitHub.
MongoDB Atlas → Database Access → edit the `yshrestha2006_db_user` user →
set a new password → update your real `.env` (not `.env.example`) with it.

## What changed

- **`routes/contactRoutes.js`** — the `GET /api/contacts` and
  `GET /api/contacts/email/:email` routes had no auth, meaning anyone who
  found your API's base URL could read every message and email address
  ever submitted through your contact form. They now require a header
  `x-admin-key` matching an `ADMIN_KEY` you set in `.env`. The `POST`
  route (what your form actually calls) is untouched and still public.
- **`server.js`** — CORS now reads `FRONTEND_URL` from `.env` instead of
  allowing every origin. Locally it falls back to
  `http://localhost:3000`; set `FRONTEND_URL` to your real deployed
  frontend URL once that exists, or any site could POST fake messages to
  your database using your API. Also added a `GET /` health check route,
  useful for confirming the server is up once deployed.
- **`package.json`** — added `"start": "node server.js"` and
  `"dev": "nodemon server.js"`. Most hosts (Render, Railway, etc.) run
  `npm start` by default, and yours had no start script defined.
- **`.env.example`** — a template with no real values, safe to commit.
  Your actual `.env` should stay gitignored, which it already is.

## To check a message dump once deployed
```bash
curl -H "x-admin-key: your-admin-key-here" https://your-api-url/api/contacts
```

## Deploying
1. Push this to a GitHub repo (make sure the real `.env` is not included —
   check with `git status` before your first commit).
2. On Render or Railway: new Web Service → connect the repo → build
   command `npm install` → start command `npm start`.
3. Set `MONGO_URI`, `PORT`, `FRONTEND_URL`, and `ADMIN_KEY` as environment
   variables in the host's dashboard, not in a committed file.
4. Once you have the deployed API URL, set `REACT_APP_API_URL` in your
   frontend's environment to that URL.
