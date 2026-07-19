# Launchly

A SaaS platform that turns business details into a polished, ready-to-publish
website. No coding required.

Built in phases. This README is the source of truth for what's done, what's
stubbed, and what to build next — read it first in any new session before
writing code.

---

## Tech stack

- **Next.js 15** (App Router) — see note on version below
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **NextAuth v4** (credentials provider, JWT sessions)
- **bcryptjs** for password hashing
- **Zod** for validation
- **lucide-react** for icons

## Getting started

```bash
npm install
cp .env.example .env
# generate a real secret: openssl rand -base64 32
# paste it into NEXTAUTH_SECRET in .env
npm run dev
```

Visit `http://localhost:3000`.

## Verifying the build

```bash
npm run typecheck   # tsc --noEmit
npm run build        # production build
```

Both were run and passed clean as of Phase 1 (Next.js 15.2.8, Node 22).

---

## ⚠️ Important: Next.js version note

Phase 1 was originally scoped against Next.js 14, but **Next.js 14 reached
End-of-Life in October 2025** and was hit by a wave of CVEs in Dec 2025,
including a critical RCE in the React Server Components protocol
(CVE-2025-66478) and a couple of follow-up DoS/source-exposure CVEs. Since
this is a new long-term project, I upgraded to **Next.js 15.2.8** (a
currently-supported, patched line) instead of building on an EOL version from
day one. React was kept at **18** (not 19) — this sidesteps the RSC-protocol
CVE class entirely, since those are React-19-specific.

**Action for future sessions:** before adding new dependencies or doing a
version bump, check https://nextjs.org/blog for newer security advisories —
this space moves fast. If the person asks to upgrade Next.js/React major
versions later, treat that as a deliberate decision to flag, not a silent
bump.

---

## Phase status

### ✅ Phase 1 — Auth, dashboard shell, landing page (DONE)

- Landing page: nav, hero, template showcase (Restaurant / Barber Shop /
  Hotel — visual only, no functionality yet), how-it-works, CTA, footer.
- Auth: `/signup` and `/login` pages, real NextAuth credentials flow with
  bcrypt-hashed passwords, Zod-validated forms, working logout (dashboard
  topbar user menu).
- Dashboard: protected layout (`getServerSession` + redirect if
  unauthenticated), sidebar with all 7 nav items (Dashboard, My Websites,
  Templates, Domains, Analytics, Billing, Settings), topbar with user menu.
- Main dashboard page: stat cards (Websites / Website status / Subscription
  / Visitors), "Create Website" button (**not wired to anything yet — no
  builder exists**), empty-state recent activity.
- All 6 remaining dashboard subpages exist as real routes with clean empty
  states — not fake links, but no real data or functionality behind them.
- Reusable UI primitives: `Button`, `Input`, `Label`, `Card`, `FormError`,
  `Logo` — built once in `src/components/ui/`, reused everywhere. Extend
  these rather than creating new one-off components in later phases.

**Known, deliberate placeholder:** `src/lib/user-store.ts` is an in-memory
`Map`, not a database. It's documented in the file itself. All account data
is lost on server restart and isn't shared across serverless instances. This
was intentional — Phase 1 scope was explicitly "auth pages + dashboard
layout," not the database. **Phase 2 replaces this.**

The contract `user-store.ts` exposes (`findUserByEmail`, `createUser`,
`findUserById`) is what the rest of the app (NextAuth config, signup route)
depends on. When Phase 2 swaps in Prisma/Postgres, keep those function
signatures stable so the swap doesn't ripple into `src/lib/auth.ts` or the
API routes.

### ⬜ Phase 2 — Database (NOT STARTED)

Per the original project brief, this should cover:
- Users, Websites, Templates, Images, Subscriptions, Analytics tables
- Swap `src/lib/user-store.ts` internals to Prisma + Postgres
- Migrate NextAuth to the Prisma adapter (or keep credentials + Prisma
  lookups — decide explicitly, don't default silently)

### ⬜ Phase 3 — Website builder system (NOT STARTED)

Explicitly out of scope for Phase 1 per instruction. Covers: template
placeholder system (`{{business_name}}`, `{{description}}`, etc.), the
website creation flow (select template → fill form → upload images →
preview → publish), and image upload/storage.

### ⬜ Later phases (not started)

Generated website management (edit/republish), deployment prep
(`businessname.launchly.site` subdomains), AI features — all explicitly
deferred per the original brief.

---

## Folder structure

```
src/
  app/
    (marketing)/          Landing page route group (nav + footer layout)
      page.tsx
      layout.tsx
    (auth)/                Auth route group (centered card layout)
      login/page.tsx
      signup/page.tsx
      layout.tsx
    (dashboard)/           Protected route group (sidebar + topbar layout)
      dashboard/
        page.tsx           Main dashboard (stat cards, Create Website)
        websites/page.tsx
        templates/page.tsx
        domains/page.tsx
        analytics/page.tsx
        billing/page.tsx
        settings/page.tsx
      layout.tsx            Session check + redirect happens here
    api/
      auth/[...nextauth]/route.ts
      signup/route.ts
    layout.tsx              Root layout (Inter font, SessionProvider)
    globals.css
  components/
    ui/                    Button, Input, Label, Card, FormError, Logo
    marketing/              Nav, footer, hero, sections, signup/login forms
    dashboard/               Sidebar, topbar, stat card, empty state
    session-provider.tsx     NextAuth SessionProvider client wrapper
  lib/
    auth.ts                  NextAuth config (credentials provider)
    user-store.ts             TEMP in-memory store — see Phase 2 note above
    validation.ts              Zod schemas (signup, login)
    utils.ts                    cn() class-merging helper
  types/
    user.ts                   AppUser / PublicUser types
```

## Design tokens (for consistency in later phases)

Defined in `tailwind.config.ts`:
- **Primary (blue):** `primary-600` (#2563EB) as the main action color
- **Success (green):** `success-600` (#16A34A)
- **Ink (text):** `ink-950` / `ink-900` / `ink-700`
- **Slate (secondary text):** `slate-500` / `slate-400`
- **Borders:** `border` (#E5E7EB), `border-strong` for dashed/emphasis
- **Radius:** `rounded-xl` (14px) is the default card/button radius,
  `rounded-2xl` for larger surfaces
- **Shadows:** `shadow-card` (resting), `shadow-card-hover`, `shadow-glow`
  (used sparingly — signup/login card, hero)

Stick to these tokens rather than introducing new one-off colors in later
phases — this is what keeps the Stripe/Linear/Vercel feel consistent as the
app grows.
