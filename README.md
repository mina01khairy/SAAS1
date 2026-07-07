# SupportFlow AI

A full-stack SaaS support platform UI built with **Next.js 15 (App Router)**,
**TypeScript**, **Tailwind CSS v4**, the **Context API**, **Font Awesome**,
**Formik + Yup**, and **Framer Motion** — generated from the Stitch design
export (`stitch_supportflow_ai_platform.zip`).

## Stack

This project was scaffolded to match the following `create-next-app` answers:

```
✔ Would you like to use the recommended Next.js defaults? … No, customize settings
✔ Would you like to use TypeScript? … Yes
✔ Which linter would you like to use? … ESLint
✔ Would you like to use React Compiler? … No
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like your code inside a `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No
✔ Would you like to include AGENTS.md to guide coding agents? … No
```

Additional libraries layered on top:

- **Font Awesome** (`@fortawesome/react-fontawesome` + solid/regular/brands icon sets) — every icon in the app.
- **Formik + Yup** — every form (login, register, forgot password, new ticket, ticket reply, account details, security/password change) with full client-side validation.
- **Framer Motion** — page/section transitions, staggered list reveals, the command palette, modals, mobile drawer, and the animated SVG ticket-volume chart.
- **React Context API** — `AuthContext`, `TicketsContext`, `NotificationsContext`, and `UIContext` (see `src/context`) provide global state instead of a heavier state library.

No external image hosting or Chart.js dependency is used — avatars are
generated from initials, and the dashboard chart is a custom lightweight SVG
component (`src/components/ui/LineChart.tsx`) animated with Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Log in or register with **any** email/password — authentication is mocked
client-side (see `src/context/AuthContext.tsx`) and persisted to
`localStorage` so refreshing the page keeps you signed in.

## Pages

| Route | Description |
| --- | --- |
| `/` | Marketing landing page (hero, social proof, features, pricing, CTA) |
| `/login`, `/register` | Combined auth screen with animated tab switching |
| `/forgot-password` | Two-step password recovery flow |
| `/dashboard` | Overview: KPIs, ticket volume chart, activity feed, AI insight, leaderboard |
| `/dashboard/tickets` | Filterable/searchable ticket list + "New Ticket" modal |
| `/dashboard/tickets/[id]` | Ticket detail with chat thread, reply composer, SLA/metadata sidebar |
| `/dashboard/knowledge-base` | Searchable help center with categories and articles |
| `/dashboard/settings` | Profile header + tabbed Account / Notifications / Security settings |
| `/dashboard/billing` | Plan usage, payment method, invoice history |
| `/dashboard/admin` | System metrics, deployments table, team leaderboard |
| `/dashboard/notifications` | Grouped, mark-as-read notification feed |

All `/dashboard/*` routes are protected by `RequireAuth` and share a common
shell (`DashboardShell`) with a responsive sidebar, top bar, mobile bottom
nav, and a `⌘K` command palette.

## Project structure

```
src/
  app/                  Route segments (App Router)
    (auth)/             Public auth routes + shared split-screen layout
    (dashboard)/         Authenticated routes + shared dashboard shell
  components/
    ui/                 Reusable primitives (Button, Card, Badge, FormField, etc.)
    layout/             Navbars, sidebar, footers, command palette
    landing/            Landing page sections
    auth/               Login/Register/ForgotPassword forms + RequireAuth guard
    dashboard/          Overview widgets
    tickets/            List, detail, chat thread, new-ticket modal
    knowledge-base/     Search hero, categories, article list
    settings/           Profile header, tabs, forms
    billing/            Plan, payment method, invoices
    admin/              Metrics, deployments, leaderboard
    notifications/      Notification feed
  context/              AuthContext, TicketsContext, NotificationsContext, UIContext
  lib/                  Types, mock data, Yup schemas, nav config, small utils
```

## Responsive design

Every page is built mobile-first with Tailwind breakpoints:

- **Mobile:** single-column layouts, a slide-in sidebar drawer, and a fixed
  bottom tab bar on dashboard routes.
- **Tablet:** two-column grids for stats/cards, sidebar still off-canvas.
- **Laptop/Desktop:** persistent sidebar, multi-column bento grids, and a
  max content width of 1440px to keep line lengths readable on very large
  screens.
