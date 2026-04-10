# Your environment in plain English

This project uses **three main services** that work together. You do not need to memorize every detail—this page is a map so you know *what talks to what* and *why*.

---

## The big picture

| Piece | Job in one sentence |
|--------|---------------------|
| **GitHub** | Stores your **code** (the Next.js app, Studio config, schemas) and history of changes. |
| **Vercel** | **Builds** that code from GitHub and **hosts** the **public website** so anyone can visit it on the internet. |
| **Sanity** | Stores your **content** (text, images, events, etc.) in the cloud and gives you **Sanity Studio**—the admin UI where you create and edit that content. |

**Important distinction:**  

- **Code** = how the site looks and behaves (layouts, buttons, fetching logic). That lives in **GitHub** and is deployed by **Vercel**.  
- **Content** = the actual words, images, and structured data for your dance events. That lives in **Sanity** (your “headless CMS”).

---

## How GitHub fits in

- Your repository ([IsleOfManDanceEvents](https://github.com/zartyblartfast/IsleOfManDanceEvents)) is the **single place** your application source code is stored.
- When you **push** changes to GitHub, you are updating that source of truth.
- **Vercel** is connected to that repo: new commits on a branch can trigger new **deployments** (build + publish).

You can think of GitHub as “the filing cabinet for everything the developers (and tools) edit in the project.”

---

## How Vercel fits in

- Vercel takes the **Next.js** app from the **`frontend/`** folder, runs `npm install` / `npm run build`, and puts the result on their global network so users get a fast site.
- Your **production URL** looks like `https://<something>.vercel.app` unless you add a custom domain later.
- **Environment variables** you set in the Vercel project (project ID, dataset, API token, etc.) are injected **at build time** for `NEXT_PUBLIC_*` values and where the app needs them. They tell the Next.js app **which Sanity project** to read from and **how to authenticate** for safe server-side reads.

Vercel does **not** host your Sanity content database—it only hosts **your website code** that *reads* that content through Sanity’s API.

---

## How Sanity fits in

### Content and API

- Your **Sanity project** (with a **project ID** and **dataset**, e.g. `production`) holds documents: pages, posts, settings, and whatever your **schema** defines.
- The **Sanity Content API** is how the Next.js app asks for that data over HTTPS (using the official client and your configured **API version** date).

### Sanity Studio (where editors work)

- **Studio** is the React app in your repo under **`studio/`**. You run it locally with `npm run dev`, and you can also use **Sanity-hosted Studio** at a URL like `https://<your-subdomain>.sanity.studio`.
- Editors log in there to create and publish content. Published content becomes available to the website through the API (according to your schema and security rules).

### Tokens

- A **read token** (used as `SANITY_API_READ_TOKEN` on Vercel) lets the server fetch content that should not be fully public or that your setup expects to load with authentication. Treat it like a password: **never commit it**; only put it in Vercel (and local `.env`).

---

## Why we need CORS (simple version)

Browsers block random websites from calling APIs on your behalf unless the API owner allows it. **CORS** is a list of **allowed website origins** (your local dev URL, your Vercel URL, sometimes `*.vercel.app` for previews).

In **Sanity → API → CORS**, you list the origins that are allowed to talk to your Sanity project from the browser. Your **production Vercel URL** must be listed so the live site is not blocked when it uses browser-side requests to Sanity (depending on how your app is written).

---

## Your repo layout (monorepo)

```
IsleOfManDanceEvents/
  frontend/     ← Next.js public site (deployed to Vercel)
  studio/       ← Sanity Studio (edited locally; hosted at *.sanity.studio)
```

- **`frontend/`** — what visitors see; deployed to Vercel; reads content from Sanity.  
- **`studio/`** — where you structure content (schemas) and edit documents; **hosted by Sanity** for day-to-day editing, separate from Vercel.

---

## Typical flow when someone visits your live site

1. The visitor opens your **Vercel** URL.
2. The **Next.js** app (from GitHub, built by Vercel) runs in the browser and/or on the server.
3. The app requests content from **Sanity’s API** using your project ID, dataset, and (where needed) the read token.
4. Sanity returns JSON; the page renders.

When you **publish** new content in Studio, the next request from the site can show that content (depending on caching and how you fetch data—something you can tune later).

---

## Typical developer workflow (short)

1. Edit **code** locally → commit → push to **GitHub** → Vercel **builds and deploys** the site.  
2. Edit **content** in **Sanity Studio** → publish → content updates in Sanity → the site reads it via the API.

---

## Glossary (quick)

| Term | Meaning |
|------|--------|
| **Headless CMS** | A content system (Sanity) without a built-in public website; *your* site (Next.js) is the “head.” |
| **Dataset** | A named bucket of content inside a project (often `production`). |
| **Schema** | The definition of document types and fields (events, venues, etc.) in Studio. |
| **Deploy** | Publishing a new build of the site (Vercel) or a new build of Studio (Sanity). |
| **Environment variable** | A named secret or config value (e.g. project ID) supplied to the app at build/runtime. |

---

## Where to learn more (official)

- [Sanity documentation](https://www.sanity.io/docs)  
- [Vercel documentation](https://vercel.com/docs)  
- [Next.js documentation](https://nextjs.org/docs)  

This file is only an orientation; the exact env names and scripts in *this* repo are defined in `README.md`, `frontend/.env.example`, and the Sanity/Vercel dashboards you already used.
