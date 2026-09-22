# AGENTS.md — Workspace Guidelines & Operating System: Pink Cardinal Technology

> **Company Philosophy:** Build an agent workplace, not a prompt library. Judgment stays human, state lives on disk, context loads only when needed, and dangerous actions are harness-gated. Models and IDEs will churn; this operating system will not.
>
> **Entity:** **Pink Cardinal Technology LLC**  
> **Primary Domain:** `pinkcardinal.tech`  
> **Brand Identity:** The "Pink Cardinal" honors family heritage, daughters (pink), and the rare real-world biological pink cardinal / unicorn metaphor. Balances playful warmth with elite software engineering & enterprise technology architecture advisory.

---

## 1. System & Architecture Standards

### Tech Stack Invariants
* **Framework:** Next.js 14 with App Router (`src/app/`).
* **Language:** TypeScript with strict mode enabled (`tsconfig.json`). Zero `any` types allowed—use `unknown`, strict type guards, and discriminated unions.
* **Styling & Motion:** Tailwind CSS (`tailwind.config.js`) + Lucide React (`lucide-react`) + Framer Motion (`framer-motion`).
* **Visual Palette:**
  * Primary Pink / Magenta: `#E11D74` / `#D91B5C` / `#BE185D`
  * Warm Coral & Gold Accents: `#F472B6`, `#F59E0B`, `#FBBF24`
  * Deep Slate Foundation: `#0F172A`, `#020617`, `#F8FAFC`
* **Deployment:** Vercel serverless platform connected to GitHub repository deploying to `pinkcardinal.tech`.

### Brand Assets
* **Official Primary Logo:** `assets/pink-cardinal-logo.jpg` (Origami geometric pink cardinal in upward flight with subtle golden star horn crest and bold typography reading "PINK CARDINAL TECHNOLOGY").

---

## 2. Core Business Practice Areas

Pink Cardinal Technology operates across two complementary pillars:

1. **Venture Software Studio (Building):**
   * High-converting 1-tap mobile payment and SMS self-service portals overlaying legacy ERPs.
   * Active products: Municipal & Residential Waste Portals, 1-Tap MedPay (pediatric & surgical clinics), Winter Snow Dispatch, and SafeRoute K-12 Transit.
2. **Technology & Architecture Advisory (Consulting):**
   * Enterprise modernization, system integration architecture, cloud serverless migration, and fractional engineering leadership.

---

## 3. Artifact Taxonomy & Storage Rules

```
AGENTS.md          ← Workspace invariants & operating rules (always active)
WORKFLOW.md        ← Human-Agent operational playbook (on demand)
ARCHITECTURE.md    ← Living system architecture & design diagrams (on demand)
STATE.md           ← Active session ledger & single source of truth (always read on resume)
scripts/verify.sh  ← Deterministic quality gate (executed before completion)
assets/            ← Official branding, logos, and vector assets
```

### Flow of Truth (Precedence Rule)
* **Code & Types (`src/`)** reflect the executable reality.
* **`STATE.md`** reflects the active work status, open tasks, recent decisions, and immediate next steps.
* **Rule:** If code changes alter the architecture or task status, the corresponding documentation must be updated in the same Git commit.

---

## 4. Quality Gates & Verification

### Before Marking ANY Task Complete
Never declare a task complete without running the deterministic quality gate:

```bash
npm run verify
```

`scripts/verify.sh` deterministically enforces:
1. `npx tsc --noEmit` — Zero TypeScript compilation or type errors.
2. `npm run build` — Successful Next.js production build with clean static page generation.

If `npm run verify` fails, the task is **not** done. Fix all issues before requesting review or committing.

---

## 5. Git Hygiene & Continuous Deployment

* **Commit Format:** `<type>(<scope>): <description>`
  * Types: `feat`, `fix`, `refactor`, `perf`, `docs`, `chore`, `test`
  * Example: `feat(marketing): implement responsive hero section with pink cardinal branding`
* **Clean Working Tree:** Never leave uncommitted scratch files or broken states.

---

## 6. Human–Agent Contract

### Ownership Split
> **You (Human) own:** Intent, architectural approval, and merge/deploy decisions.  
> **The Agent owns:** Exploration, implementation, and rigorous verification.

### RPI: Review Plan before Implementation
For non-trivial changes:
1. Produce an implementation plan artifact.
2. Stop and obtain human review.
3. Implement strictly against the approved plan.
4. Execute `npm run verify` yourself to prove the build passes.
