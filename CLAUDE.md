# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js app demonstrating the Luma API for a fictional NYC basketball club. Fetches and displays event data from Luma's calendar API.

## Development Commands

```bash
bun install    # Install dependencies
bun dev        # Dev server
bun build      # Production build
bun start      # Production server
bun lint       # ESLint
```

## Architecture

- **Framework**: Next.js 16 (Pages Router)
- **Language**: TypeScript (strict mode, `@/*` path alias)
- **Styling**: Tailwind CSS v4

### Luma API Integration

`components/EventList.tsx` exports `fetchEvents()` which calls `https://public-api.luma.com/v1/calendar/list-events` using the `LUMA_API_KEY` env var (set in `.env.local`, template in `.env.local.template`). On API failure it logs and returns an empty array so the build still succeeds. Response shape: `{ entries: [{ api_id, event: { name, start_at, cover_url, url } }] }`.

`pages/index.tsx` calls `fetchEvents()` from `getStaticProps` with `revalidate: 60`. `pages/calendar.tsx` and `pages/iframe.tsx` are static pages embedding Luma via iframe.
