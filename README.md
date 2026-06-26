# DataFlow AI — FrontEnd Battle 3.0 Submission

> AI-driven data automation platform landing page built for the VibeCoding Competition.

## 🔗 Links
- **Live Demo:** [https://dataflow-ai.vercel.app](https://dataflow-ai.vercel.app)
- **Demo Video:** [Google Drive Link]

## 🛠 Tech Stack
- React 18 + Vite
- Tailwind CSS v3
- Vanilla CSS Animations / Web Animations API
- Zero UI libraries (no Radix, Shadcn, Framer Motion)

## ⚡ Core Features

### Feature 1 — Matrix Pricing Engine
Dynamic pricing computed via a multi-dimensional config object — never hardcoded. Formula: `base × billing_multiplier × currency_tariff`. State isolation via `useSyncExternalStore` + a custom pub/sub store ensures only the price leaf node re-renders on toggle — no parent reflows.

### Feature 2 — Bento-to-Accordion with Context Transfer
Desktop renders a hover-interactive Bento Grid. Mobile renders a touch-optimized Accordion. A `ResizeObserver` on `<html>` detects breakpoint crossings and programmatically transfers the active bento index to the accordion open state — zero dependency, pure CSS `max-height` transitions.

## 🎨 Design Tokens (from provided assets)
| Token | Value |
|---|---|
| Forsythia | `#FFC801` |
| Oceanic Noir | `#172B36` |
| Nocturnal Expedition | `#114C5A` |
| Arctic Powder | `#F1F6F4` |
| Deep Saffron | `#FF9932` |
| Heading Font | JetBrains Mono |
| Body Font | Inter |

## 🚀 Running Locally
```bash
npm install
npm run dev
```

## 📦 Build
```bash
npm run build
```
