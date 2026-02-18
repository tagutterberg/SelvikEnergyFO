---
name: ui-ux-design
description: Design guidelines and component patterns for the VoyageCRM application.
---

# VoyageCRM UI/UX Design System

This skill outlines the design philosophy, color palette, and component patterns for the VoyageCRM application. Use these guidelines when creating new UI elements to maintain a consistent, premium, and meaningful aesthetic.

## 1. Design Philosophy

**"Premium Maritime Financial"**

*   **Dark Mode First**: The application is natively dark mode to reduce eye strain in ops rooms and convey a modern, technical feel.
*   **High Contrast & Precision**: Key data (financials, status) must be legible and pop against the dark background.
*   **Glassmorphism**: Use subtle transparency and blurs to create depth and hierarchy without solid blocks.
*   **Neon Accents**: Use the signature "Neon Lime" (`#ccff00`) to guide user attention to primary actions and critical statuses.

## 2. Color Palette

### Primary Colors
*   **Neon Lime**: `#ccff00` (Tailwind `text-primary`, `bg-primary`, `border-primary`)
    *   *Usage*: Primary buttons, active states, key metrics, focus rings.
*   **Cyber Black**: `#050505` (Tailwind `bg-background`)
    *   *Usage*: Main page background.
*   **Deep Slate**: `#0f172a` (Slate 900)
    *   *Usage*: Card backgrounds, Sidebar.

### Status Colors
*   **Success**: `#22c55e` (Green-500) or `#4ade80` (Green-400)
*   **Warning**: `#facc15` (Yellow-400) or `#fbbf24` (Amber-400)
*   **Error**: `#ef4444` (Red-500) or `#f87171` (Red-400)
*   **Info**: `#3b82f6` (Blue-500)

### UI Elements
*   **Borders**: `#1e293b` (Slate 800) or `#334155` (Slate 700)
*   **Text Muted**: `#94a3b8` (Slate 400)
*   **Text Body**: `#e2e8f0` (Slate 200)

## 3. Typography

**Font Family**: `Inter`, system-ui, sans-serif.

*   **Headings**: Font-bold, generally white or slate-200.
*   **Data/Numbers**: Monospace (optional) or standard Inter with tabular-nums if aligning currency.
*   **Labels**: Uppercase, tracking-wider, text-xs, text-slate-500 (e.g., table headers, minimal labels).

## 4. Component Patterns

### Cards (Glassmorphism)
Use the `.glass-card` utility or manual Tailwind classes for container elements.

```tsx
<div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 shadow-sm">
  <h3 className="text-lg font-semibold text-slate-200">Card Title</h3>
  {/* Content */}
</div>
```

### Buttons

**Primary Action**:
```tsx
<button className="bg-primary text-black font-bold hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors">
  Create Order
</button>
```

**Secondary/Ghost**:
```tsx
<button className="text-slate-300 hover:text-white hover:bg-slate-800/50 px-3 py-2 rounded-lg transition-colors">
  Cancel
</button>
```

**Destructive**:
```tsx
<button className="bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 px-4 py-2 rounded-lg">
  Delete
</button>
```

### Inputs
Dark backgrounds with subtle borders that light up with the primary color on focus.

```tsx
<input
  className="bg-slate-950/50 border border-slate-800 text-slate-200 rounded-lg px-3 py-2
             focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary
             placeholder:text-slate-600"
/>
```

### Tables
*   **Header**: `bg-slate-950/50 text-slate-500 uppercase text-xs tracking-wider`.
*   **Rows**: `border-b border-slate-800/60 hover:bg-slate-800/30`.
*   **Cells**: `text-sm text-slate-300`.

## 5. Layout & Spacing

*   **Global Padding**: Generally `p-4` or `p-6` for main content areas.
*   **Gap**: Use `gap-4` or `gap-6` for grids.
*   **Rounded Corners**: `rounded-xl` or `rounded-2xl` for cards; `rounded-lg` for inner elements like inputs/buttons.

## 6. Iconography
Use **Lucide React**.
*   Size: Generally `w-4 h-4` (small controls) or `w-5 h-5` (nav inputs).
*   Color: `text-slate-400` (inactive), `text-primary` (active/highlight).

## 7. Dos and Don'ts

*   **DO** use the `bg-slate-900/50` opacity to allow background gradients/blurs to show through.
*   **DO** use strict flex/grid layouts for responsiveness.
*   **DO** use `text-primary` for the most important number on a card (e.g., Total Profit).
*   **DON'T** use solid white backgrounds anywhere.
*   **DON'T** use generic blue buttons (replace with Lime primary or Slate secondary).
*   **DON'T** clutter interfaces; use "View More" or collapsible sections (accordions) for dense data.
