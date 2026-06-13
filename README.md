# XRP Tokyo 2026 Website

A high-end, dark Web3 event website for **XRP Tokyo 2026**.  
Built with Next.js, TypeScript, Tailwind CSS, and next-intl.

## Features

- Animated neon “X” hero background
- Multi-section event layout (Hub, Highlights, Speakers, Sponsors, CTA)
- Dynamic speakers and sponsors from `public/data.json`
- Responsive design optimized for mobile and desktop
- i18n support (English / Japanese)

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- next-intl (localization)
- Motion (Framer Motion)
- Radix UI / Headless UI

## Getting Started

### Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io/) 11.x (see `packageManager` in `package.json`)

### Install

```bash
pnpm install
```

### Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
pnpm build
pnpm start
```

## Content Management (Speakers & Sponsors)

Data is stored in:

```
public/data.json
```

Update this file to add or remove speakers and sponsors. The home page loads this data on the server and passes it to section components.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Run production server |
| `pnpm lint` | Run Biome linter |
| `pnpm format` | Format with Biome |
