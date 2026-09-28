# Afghan Remittance Platform

A professional prototype for remittance support and marketplace services for Afghan diaspora users.

> **Prototype boundary:** This project does not process real money, connect to banks, provide a digital wallet, or create financial transactions. No real financial data is included.

## Current scope

The initial codebase establishes a clean Next.js App Router and TypeScript foundation. It contains route placeholders and integration preparation only; business logic, database tables, authentication flows, and payment functionality will be added deliberately in later phases.

## System roles

- **Üye** — Uses the member-facing experience to review available support and marketplace features.
- **Operatör** — Supports operational workflows and assists members through the platform.
- **Sistem yöneticisi** — Manages platform configuration, access, and administration.

## Planned member navigation

- Ana Sayfa
- İşlemler
- Market
- Bildirimler
- Profil

## Development architecture

- **GitHub** — Source code, version control, collaboration, and change history.
- **Vercel** — Planned deployment platform for the Next.js application.
- **Supabase** — Planned authentication and database platform. The repository is prepared for future integration, but no tables or secrets are committed.
- **Manus** — Development and coding agent for implementation tasks.
- **ChatGPT** — Product planning, technical planning, and development orchestration.

## Local development

Prerequisites: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

Copy `.env.example` to `.env.local` when environment configuration is needed. Never commit `.env.local` or other secret environment files.

## Project structure

```text
app/                  Next.js App Router routes and layouts
  (auth)/              Authentication-related route group placeholder
  member/              Member area placeholder
  operator/            Operator area placeholder
  admin/               System administration area placeholder
components/            Shared UI components
lib/supabase/         Future Supabase client and server helpers
lib/utils/             Shared utility functions
types/                 Shared TypeScript types
public/                Static assets
supabase/migrations/  Future database migrations
supabase/seed/        Future seed scripts (no seed data currently)
docs/                  Architecture, workflows, and product documentation
```

## Safety and implementation principles

1. No real-money transactions or financial processing.
2. No bank API integrations.
3. No digital wallet.
4. No fake financial data.
5. Supabase secrets remain environment-only.
6. Database tables and business logic are intentionally deferred.
