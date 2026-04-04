# Apple-Inspired Design Context

## Product Context

- Project: `Yago Web`
- Current product shape: marketing/consulting website for AI automation services and products, not a literal SaaS dashboard yet.
- Audience: business teams evaluating AI automation, integrations, and custom product work.
- Desired perception: premium, calm, trustworthy, sharp, technically credible.

## Design Goal

Use an Apple-inspired web SaaS direction without copying iOS or macOS literally.

This means:

- clarity over decoration
- strong information hierarchy
- subtle depth and materials
- calm motion with clear purpose
- compact and legible actions
- consistent spacing and alignment
- accessible contrast, focus, and labels

This does **not** mean:

- fake iPhone UI
- heavy glass everywhere
- oversized blur for its own sake
- neon-first cyberpunk styling
- decorative controls that fight readability

## Repo-Specific Direction

The current site already has:

- Next.js App Router
- Tailwind CSS + shadcn/ui
- dark surfaces and animated atmospheric backgrounds
- strong fuchsia/cyan/emerald accents

When polishing or redesigning screens, keep the premium feel but move the visual language toward a calmer enterprise aesthetic:

- reduce visual noise before adding new effects
- keep backgrounds atmospheric, but less loud
- prefer graphite, ink, fog, silver, soft cyan, and restrained emerald accents
- avoid a purple-heavy palette as the default choice
- use gradients as support, not as the main content structure

## Visual Principles

### 1. Content over chrome

- Headings, proof, product value, and CTAs should read first.
- Decorative layers must never compete with copy.
- Fewer visible actions is better; move secondary actions into menus, sheets, or lower-emphasis placements.

### 2. Depth with restraint

- Use soft surfaces, thin borders, subtle translucency, and layered elevation.
- Prefer one clean material system across the page instead of many competing card styles.
- Shadows should feel diffused, not dramatic.

### 3. Typography with hierarchy

- Keep display type clean and confident.
- Favor a system or SF-like reading experience for body text.
- Use font size, weight, and spacing for hierarchy before using more color.
- Avoid loud gradient text except for rare emphasis moments.

### 4. Motion with meaning

- Use motion to stage entry, explain hierarchy, or reinforce interaction.
- Prefer a few shared motion patterns over many unrelated animations.
- Always support reduced motion.

### 5. Semantic color first

- Prefer tokens from `src/app/globals.css` and `tailwind.config.ts`.
- Add or refine semantic tokens before introducing more hardcoded utility colors.
- Light and dark behavior should remain coherent.

## Component Rules

- Use existing shadcn/ui components before custom markup.
- Favor `Card`, `Badge`, `Button`, `Accordion`, `Sheet`, `Dialog`, `Tabs`, `Table`, and `Separator` composition over raw `div` styling.
- Keep action density low inside cards and rows.
- Prefer compact dropdowns/selects over large filter grids.
- Preserve visible focus states on every interactive element.

## Layout Guardrails

- Avoid global horizontal overflow.
- In dense layouts, always check `min-w-0`, encapsulated scroll regions, and table wrappers.
- Use generous spacing, but keep sections disciplined and aligned.
- Navigation should be grouped and easy to scan.

## Accessibility Baseline

- WCAG AA contrast as the minimum target.
- Clear heading hierarchy.
- Labels for all form controls.
- `aria-*` only when native HTML is not enough.
- Keyboard navigation and visible focus are mandatory.
- Respect `prefers-reduced-motion`.

## Current Codebase Opportunities

These are the main places to improve over time:

- `src/app/globals.css`: many hardcoded effect colors and large visual FX systems; simplify and tokenize where possible.
- `src/components/landing/Hero.tsx`: strong foundation, but future polish should reduce neon emphasis and sharpen hierarchy.
- `src/components/landing/Navbar.tsx`: keep the premium sticky header, but prefer subtler materials over decorative gradients.
- `src/components/landing/Section.tsx`: maintain atmosphere, but ensure separators and section framing stay quiet.

## Working Workflow

For future UI work in this repo:

1. Inspect the existing screen and components first.
2. Reuse shadcn/ui building blocks before inventing structure.
3. Apply Apple-inspired principles through hierarchy, spacing, materials, and restraint.
4. Check accessibility and responsive behavior during implementation, not after.
5. Run `npm run lint` and `npm run typecheck` after meaningful UI changes.
6. If available, use visual testing and a second polish pass after the first implementation.
