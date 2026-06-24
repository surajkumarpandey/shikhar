# Shikhar — UKPCS Prep (deploy-ready)

A bilingual (हिंदी / English) Uttarakhand PCS prep app. Front-end is a React PWA;
the AI tutor runs through a serverless function so your API key stays server-side.

## What's inside
- `src/App.jsx` — all screens (Home + Journey, Syllabus tree, Topic detail with the
  connections graph, Practice/quiz, Progress, AI tutor).
- `src/data/content.js` — **all the content lives here**: the syllabus spine
  (`SYLLABUS_TREE`), the content store (`SUBJECTS`), current affairs, entity info,
  and the bilingual UI strings. Add topics/notes/MCQs by editing this one file.
- `api/tutor.js` — serverless proxy for the AI tutor (keeps your key secret).
- PWA config in `vite.config.js` → installable + offline.

## Run locally
```bash
npm install
npm run dev        # open the printed localhost URL
```
The tutor needs a key. Create `.env` from `.env.example` and add your free Gemini
key (https://aistudio.google.com/apikey). For local tutor testing, run via Vercel
CLI (`vercel dev`) so the `/api/tutor` function is served.

## Deploy free on Vercel (live in minutes)
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo (it auto-detects Vite).
3. Add an Environment Variable: `GEMINI_API_KEY = <your key>`.
4. Deploy. You get a live `https://<name>.vercel.app` URL.

Vercel serves the static app and runs `api/tutor.js` as a serverless function
automatically — no extra config needed. Netlify and Cloudflare Pages work the same
way (functions dir differs slightly).

## Installable app (no Play Store needed)
Open the URL on an Android phone → browser menu → **Add to Home screen**.
It installs as a standalone app and works offline.

## Later: Play Store listing
Wrap the same PWA as a Trusted Web Activity (e.g. with PWABuilder), pay Google's
one-time $25 developer fee, and submit. No rebuild required. (Skip iOS for now —
Apple charges $99/year.)

## Cost
- Hosting + serverless: free tier (≈ ₹0 at low scale).
- AI tutor: Gemini free tier; precompute everything else so only live tutor calls
  cost anything. Add rate limits before scaling.
- Only unavoidable cost: $25 once, *if* you later want a Play Store listing.

## Add content
Edit `src/data/content.js`:
- Add a node to a subject's `topics` in `SYLLABUS_TREE` (set `ready: true` once it has content).
- Add the matching object with the same `id` to `SUBJECTS` (note, pyq, graph, mcqs, source).
History is filled end-to-end as the worked example — copy its shape.

## Production hardening (next steps, not required to launch)
- Ground the tutor with retrieval over your own verified corpus (RAG) instead of
  the model's open knowledge — this is what keeps answers on-syllabus and accurate
  on Uttarakhand specifics.
- Move user progress from in-memory to localStorage (single device) or Supabase
  free tier (accounts + cross-device).
- Add per-IP/user rate limiting on `/api/tutor`.
