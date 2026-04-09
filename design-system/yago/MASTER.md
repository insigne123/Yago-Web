# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/yago/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.
>
> **Note:** `UI/UX Pro Max` is installed locally in `.opencode/skills/ui-ux-pro-max/`, but this file was authored manually because Python is not available in the current environment.

---

**Project:** YAGO
**Generated:** 2026-04-08
**Basis:** UI/UX Pro Max recommendations + current implementation in `src/app/globals.css`, `src/app/layout.tsx`, and `src/components/landing/Hero.tsx`

---

## Global Rules

### Product Positioning

- YAGO should feel like a serious B2B AI automation partner, not an experimental AI startup.
- The visual tone should communicate clarity, speed, trust, and operational maturity.
- The page should sell implementation credibility before visual novelty.

### Visual Direction

- **Primary pattern:** Hero-Centric + Trust & Authority + Feature-Rich Showcase.
- **Core style:** dark premium, operational, restrained, modern Swiss influence.
- **Secondary flavor:** subtle dimensional layering and controlled motion.
- **Do not mix** multiple loud styles on the same page.

### Color Palette

| Role | Value | Usage |
|------|-------|-------|
| Primary | `#5EC6FF` | Main highlights, interactive focus, trust accents |
| Secondary | `#707FD6` | Supporting gradients, premium depth, section accents |
| Accent | `#E8B567` | Premium emphasis, OCR/product highlights, selective metric accents |
| Background | `#070B13` | Main page background |
| Surface Strong | `#0F1724` | Dense cards, modules, pricing-like blocks, previews |
| Surface Soft | `#0B111B` | Transitional sections, softer content bands |
| Foreground | `#F8FAFC` | Primary text |
| Muted | `#94A3B8` | Secondary text |
| Border | `rgba(255,255,255,0.10)` | Card borders and dividers |
| Ring | `rgba(94,198,255,0.55)` | Focus ring and active states |

### Color Notes

- Cyan is the trust and systems color, not a neon gimmick.
- Indigo adds depth and premium structure, not a futuristic cyberpunk vibe.
- Amber is reserved for product or high-value emphasis. Use sparingly.
- Most sections should stay dark and contrast-driven; avoid lifting the whole site into mid-gray.

### Typography

- **Heading Font:** `Instrument Sans`
- **Body Font:** `Manrope`
- **Headline mood:** condensed, decisive, low-friction, direct.
- **Body mood:** clear, operational, commercially legible.
- Headlines should usually be short and stacked in 2-4 visual beats.
- Paragraphs should stay compact. Prefer 1-3 sharp clauses over long promotional copy.

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Micro gaps |
| `--space-sm` | `8px` | Inline spacing |
| `--space-md` | `16px` | Standard padding |
| `--space-lg` | `24px` | Card padding |
| `--space-xl` | `32px` | Block spacing |
| `--space-2xl` | `48px` | Section internal spacing |
| `--space-3xl` | `64px` | Large section rhythm |

### Radius & Surfaces

- Default radius should feel premium and composed: `16px` to `32px`.
- Dense cards should use strong contrast, subtle blur, and visible border separation.
- Soft sections can use more atmospheric glow, but content containers must stay readable.
- Glass effects are allowed only when contrast stays high.

### Motion Rules

- Use `framer-motion` only. Do not add another animation library.
- Prioritize `opacity`, `transform`, and occasional `layout` transitions.
- Section reveal duration should usually stay between `0.45s` and `0.60s`.
- Hover and press feedback should stay between `0.18s` and `0.28s`.
- Ambient infinite motion is allowed only for low-amplitude background effects.
- Always respect `prefers-reduced-motion`.
- Motion should make the interface feel more intentional, not more busy.

### Component Specs

#### Buttons

- Primary CTA should feel high-confidence and high-contrast on dark backgrounds.
- Primary CTA shape should stay pill-like or softly rounded.
- Secondary CTA should read as supportive, not equally dominant.
- Above the fold, use one clear primary CTA and one secondary CTA.

#### Cards

- Cards should emphasize hierarchy through contrast, border, and spacing before relying on blur.
- Metric cards should be compact and scannable.
- Feature cards should stay outcome-focused, not overloaded with copy.

#### Icons

- Use `lucide-react` consistently.
- No emojis as UI icons.
- Keep icon containers simple and aligned with the system tone.

#### Copy

- Lead with outcome, then mechanism.
- Prefer "what changes in the operation" over abstract AI language.
- Avoid filler adjectives like "revolutionary", "innovative", or "cutting-edge" unless clearly earned.

---

## Page Pattern

- Hero with clear business promise and one operational preview.
- Immediate trust/proof strip under the first message.
- Services and products separated clearly: custom capability vs packaged offer.
- OCR Master should read as a flagship or premium anchor, not just another block.
- Process should reduce perceived implementation risk.
- FAQ should remove friction around scope, integration, and rollout.
- CTA and contact should close with confidence, not pressure.

---

## Anti-Patterns (Do NOT Use)

- Generic AI purple-pink gradients as the main brand expression.
- Glass cards with low contrast or unreadable text.
- Loud futuristic effects that reduce credibility.
- More than two CTA styles competing in the same viewport.
- Overly playful blobs or floating decorations in dense business sections.
- Long paragraphs where bullets or chips would scan better.
- Layout-shifting hover states.
- Inconsistent icon sizes or mixed icon languages.

---

## Implementation Notes

- Reuse and extend existing primitives such as `SectionReveal`, `DividerGlow`, and the surface patterns already present in the landing.
- Prefer adjusting tokens in `src/app/globals.css` before inventing local one-off colors inside components.
- Preserve the current font setup in `src/app/layout.tsx`.
- Use `strong` surfaces for dense conversion sections and `soft` surfaces for breathing room.
- Treat the right side of the hero as a productized operating preview, not as decorative filler.

---

## Pre-Delivery Checklist

- [ ] No emoji icons
- [ ] High contrast on all primary copy and CTA states
- [ ] Visible keyboard focus states
- [ ] `cursor-pointer` on interactive cards and controls
- [ ] Motion respects `prefers-reduced-motion`
- [ ] Mobile layout remains premium and readable, not compressed
- [ ] OCR Master remains visually differentiated as a premium offer
