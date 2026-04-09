# UI/UX Stack For YAGO

## Adopted Base

- `shadcn/ui` for open-code components already aligned with the repo.
- `Radix UI` for accessible primitives and interaction behavior.
- `Tailwind CSS` for fast implementation over a shared visual system.
- `framer-motion` for controlled premium motion.
- `Playwright` for browser-level UI validation.
- `axe-core` via `@axe-core/playwright` for accessibility checks.

## Local Design Skills Installed

- `UI/UX Pro Max`: `.opencode/skills/ui-ux-pro-max/`
- `Emil Kowalski design engineering`: `.agents/skills/emil-design-eng/`

## Design System Files

- Global rules: `design-system/yago/MASTER.md`
- Landing-specific overrides: `design-system/yago/pages/landing.md`

## Commands

```bash
npm run test:ui
npm run test:ui:headed
npm run test:a11y
npm run test:ui:install
```

## What These Checks Cover

- homepage renders correctly on desktop and mobile Chrome
- key conversion paths are visible and usable
- hash navigation to important sections still works
- homepage is checked against WCAG A/AA axe rules

## Workflow I Will Use On YAGO

1. Design against `design-system/yago/MASTER.md` first.
2. Apply landing overrides from `design-system/yago/pages/landing.md` when touching the homepage.
3. Use `framer-motion` only when motion improves clarity, focus, or perceived quality.
4. Validate changes with `npm run test:ui` and `npm run test:a11y`.
5. Use the Emil skill as a polish layer for motion, transitions, and interaction feel.

## Intentionally Deferred

- `magic-mcp`: not installed because there is no API key yet.
- `Storybook` / `Storybook MCP`: useful later if YAGO grows into a broader component system, but not the highest-ROI addition right now.
- `Playwright MCP`: useful for agent-driven browser inspection, but it does not become available to the current session automatically just by changing repo files.
