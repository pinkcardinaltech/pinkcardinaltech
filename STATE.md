# Workspace State & Session Ledger (`STATE.md`) — Pink Cardinal Technology

> **Single source of truth for active tasks, recent decisions, and cross-session handoffs.**  
> *Entity:* **Pink Cardinal Technology LLC**  
> *Target Domain:* [`https://pinkcardinal.tech`](https://pinkcardinal.tech)  
> *Last Updated:* 2026-09-21  

---

## 🎯 Current Objectives & Status

### Completed Milestones
- [x] **Entity & Brand Foundations:**
  - [x] Named corporate entity: **Pink Cardinal Technology LLC**.
  - [x] Sourced primary domain: `pinkcardinal.tech`.
  - [x] Finalized official visual identity: Concept 3 (Unicorn Cardinal in Flight with golden star horn crest and clean typography) stored at `assets/pink-cardinal-logo.jpg`.
  - [x] Initialized workspace scaffolding and established `AGENTS.md` invariants.

- [x] **Website — Minimal Splash Redesign (`v2.0`):**
  - [x] Stripped all unproven product/advisory detail sections.
  - [x] Logo as dominant hero centerpiece (~440px desktop, border ring removed).
  - [x] New font: Space Grotesk — single clean geometric sans-serif.
  - [x] Color system overhaul: cardinal red (`#9B1B30`) replaces decorative pink/gold in UI.
  - [x] Removed top header bar; shifted hero block to optical center to eliminate excess top whitespace.
  - [x] Under 60 words of copy site-wide; generic pillars ("We Build" / "We Advise") and new-tab `mailto:` links.
  - [x] Pushed to GitHub repository (`pinkcardinaltech/pinkcardinaltech`) and deployed to Vercel.
  - [x] `npm run verify` passes — zero TS errors, clean build.

- [x] **Website — Full Corporate Marketing Site (`v1.0`):**
  - [x] Scaffolded Next.js 15 App Router project with TypeScript strict mode, Tailwind CSS, Framer Motion, and Lucide React.
  - [x] Brand design system: custom Tailwind tokens (`cardinal.*` palette), glassmorphism utilities, glow utilities, gradient text utilities.
  - [x] **Header:** Sticky glassmorphic nav with logo, anchor links, mobile hamburger menu, and "Schedule Consultation" animated modal.
  - [x] **Hero:** Full-viewport with radial glow, headline/subtitle, dual CTAs, bouncing scroll indicator.
  - [x] **Venture Studio:** 3 animated product cards (Curbside Payments, 1-Tap MedPay, Route Dispatch) with staggered entrance and hover glow.
  - [x] **Advisory Services:** 4 offering cards (ERP Modernization, Cloud Migration, Payment Architecture, Fractional Engineering) + gold gradient CTA banner.
  - [x] **Philosophy:** 2-column layout — brand logo with glow ring + 3 identity pillars (Cardinal, Pink, Family).
  - [x] **Contact:** Full inquiry form with engagement type selector, async submit, loading state, and success confirmation.
  - [x] **Footer:** Link groups, location, email, legal entity + copyright.
  - [x] Logo asset: `public/images/logo.jpg` copied from `assets/pink-cardinal-logo.jpg`.
  - [x] `npm run verify` passes — zero TypeScript errors, clean production build (Next.js 15.5.25, 159 kB first load JS).

---

## 📌 Key Decisions Log

* **Entity Naming:** Selected **Pink Cardinal Technology LLC** (singular). Honors daughters (pink) and family cardinal heritage while using "Technology" to effortlessly accommodate both core software product engineering (Waste, MedPay, transit) and high-value technology/architecture advisory engagements.
* **Tech Stack:** Next.js 15 App Router, TypeScript (strict), Tailwind CSS, Framer Motion, Lucide icons.
* **Vercel Deployment:** Production deployment on Vercel connected to `pinkcardinal.tech`.
* **Architecture:** Single-page (all content on `/`) with smooth-scroll anchor nav — optimal for MVP launch. Server Component root (`page.tsx`), all interactivity pushed to `'use client'` children.
* **Next.js Version:** Upgraded from 14.2.5 to 15.5.25 to resolve known security vulnerabilities.

---

## 🔜 Next Steps (Recommended)

1. **Deploy to Vercel:** Connect GitHub repo to Vercel project targeting `pinkcardinal.tech`.
2. **Calendly / Cal.com integration:** Wire "Book Time" and "Schedule Consultation" CTAs to real booking link.
3. **Email backend:** Connect contact form to Resend or similar transactional email API.
4. **Analytics:** Add Vercel Analytics or Plausible.
5. **OG Image:** Generate proper 1200×630 OG image using `next/og` API route.
