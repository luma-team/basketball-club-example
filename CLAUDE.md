# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js application that demonstrates integration with the Luma API for a fictional basketball club in NYC. The project shows how to fetch and display event data from Luma's calendar API.

## Development Commands

```bash
# Install dependencies (using bun)
bun install

# Run development server
bun dev

# Build for production
bun build

# Start production server
bun start

# Run linting
bun lint
```

## Architecture

### Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS-in-JS utilities
- **UI Components**: Custom components with Radix UI primitives

### Project Structure

- `app/`: Next.js App Router pages and layouts
  - `page.tsx`: Root page that renders HomePage component
  - `layout.tsx`: Root layout with metadata and global styles
- `components/`: React components
  - `HomePage.tsx`: Main homepage layout
  - `EventList.tsx`: Server component that fetches and displays Luma events
- `lib/`: Utility functions
  - `utils.ts`: Contains `cn()` helper for className merging

### Key Integration Points

**Luma API Integration** (`components/EventList.tsx`):

- Server-side data fetching using native fetch
- API endpoint: `https://api.lu.ma/public/v1/calendar/list-events`
- Requires `LUMA_API_KEY` environment variable
- Returns event data with structure: `{ api_id, event: { name, start_at, url, ... } }`

### Environment Configuration

Create `.env.local` from `.env.local.template`:

- `LUMA_API_KEY`: Required for Luma API access

### TypeScript Configuration

- Path alias: `@/*` maps to project root
- Strict mode enabled
- Next.js plugin configured
