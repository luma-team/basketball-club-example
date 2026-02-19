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

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode, `@/*` path alias)
- **Styling**: Tailwind CSS v4
- **UI**: Custom components + Radix UI primitives

### Luma API Integration

`components/EventList.tsx` is an async server component that fetches events from `https://public-api.luma.com/v1/calendar/list-events` using the `LUMA_API_KEY` env var (set in `.env.local`, template in `.env.local.template`). Response shape: `{ entries: [{ api_id, event: { name, start_at, cover_url, url } }] }`.

`app/calendar/page.tsx` embeds a Luma calendar via iframe.
