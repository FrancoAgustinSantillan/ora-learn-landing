# ORA — Design System

ORA es una metodología de aceleración de inglés corporativo para equipos técnicos y profesionales, construida sobre 4 pilares: **Andragogía** (aprendizaje adulto, orientado a resultados laborales inmediatos), **Inteligencia Híbrida** (clases en vivo + IA que personaliza tareas y feedback), **Team Building** (clases colaborativas que generan confianza de equipo) y **Reporting Constante** (métricas en tiempo real de ROI y progreso lingüístico para líderes de equipo). Público: profesionales corporativos, HR managers, líderes de equipo y empresas.

Dirección de diseño pedida: **"human-brutalism"** — HUD / sci-fi mezclado con ecobrutalismo, mudando la parte "eco" por la parte humana. Técnico pero cercano; confiable para compradores B2B, motivador para los empleados que usan el producto día a día.

## Sources

- Figma file "canvas.fig" (mounted read-only), page **/Presentacion** — a 15-frame brand style guide/moodboard (colors, logo, fonts, grid/registration marks, info-card surfaces, imagery placeholders). No UI screens or reusable Figma components were defined in this file (0 local components) — this system's component library (see below) is an **intentional addition**, not extracted from source.
- Uploaded variable font files: `Raleway-VariableFont_wght.ttf`, `Raleway-Italic-VariableFont_wght.ttf`, `RobotoSerif-VariableFont_GRAD,opsz,wdth,wght.ttf`, `RobotoSerif-Italic-VariableFont_GRAD,opsz,wdth,wght.ttf` — copied into `fonts/`.
- Reference moodboard (Pinterest link provided by user) for aesthetic direction — human-brutalism / HUD glassmorphism.

## Content fundamentals

- **Language:** All copy in this system is Spanish (per source frames: "Que es ORA?", "Reticula", "Imagenes", "Fuentes").
- **Voice:** Direct, confident, and warm — first-person plural when speaking as the brand ("Combinamos clases en vivo…", "ORA respeta el tiempo del profesional"). Sentences are short and declarative; no hype-speak or exclamation marks in the source copy.
- **Casing:** Sentence case throughout headings and body — never all-caps except the acronym "ORA" itself and section eyebrows like "Brand Proposal".
- **Emphasis:** Key phrases are set in italic serif (Roboto Serif Semibold Italic) inline within a lighter sans paragraph — e.g. *metodología híbrida*, *clases en vivo*, *motor de IA*. Use this pattern to call out concepts, not full sentences.
- **Emoji:** none used anywhere in the source.
- **Vibe:** Precise and professional, but never cold — copy foregrounds the human side of the pillars (team trust, teacher empathy) even while describing the AI/data engine.

## Visual foundations

**Color.** Four brand colors, used deliberately as full-bleed backgrounds rather than accents: Lime Green `#E2FFD5` (light, high-energy background + inverse text-on-dark), Mint Green `#349375` (accent/interactive — hover states, active icons), Paper `#F9FAEF` (light neutral canvas), Deep Ocean `#003E47` (dark neutral canvas + primary text-on-light). Max two backgrounds per screen (one light + one dark mode), consistent with the source deck alternating Deep-Ocean and Lime/Paper backgrounds frame to frame.

**Type.** Three families, three jobs: **Raleway SemiBold** for all display type (hero numerals up to 180px, section titles, button labels) with tight tracking (-0.02em); **Roboto Serif Semibold Italic** exclusively as an inline accent inside body copy (never as its own heading); **Inter Light** for body paragraphs and captions. No other families belong in product UI — the other fonts logged in the file's metadata (SF Pro, IBM Plex Sans Hebrew, Poppins, Instrument Serif, etc.) come from pasted reference/mood imagery, not the brand's own type system.

**Backgrounds.** Full-bleed flat color, no photography inside product UI (the only imagery in-scope was two placeholder wallpaper crops, and their source bytes weren't included in the .fig export — treated as absent, see Iconography below). Radial soft-glow blooms (mint-green radial gradient fading to transparent) sit behind hero titles on both light and dark backgrounds — this is the system's one "sci-fi HUD" flourish.

**Signature surface — the "glass pill."** Every content panel (info cards, color swatch trays, font specimens) is a very-low-opacity tinted fill + heavy backdrop blur (21.6px) + a dual inset shadow (light-catching sheen top-left, dark falloff bottom-right) + a soft outer drop shadow. Corners are large: 25px on standalone panels, 80px on hero/full-width panels, 15px on small nested cards. This is the literal fusion of "HUD glass" and "brutalist mass" the brief asked for — transparent and techy, but heavy and confident rather than glossy.

**Grid / registration marks.** The Reticula frame uses dashed guide lines, dashed circles, and tiny "K"/"Y" print-registration-mark glyphs (a printer's crop-mark motif) in Lime Green over Deep Ocean. Use sparingly as a decorative overlay on section-header or divider moments — never as a functional UI grid.

**Corners.** 15px (small components: buttons, inputs, chips-as-squares), 25px (cards, standard panels), 80px (hero panels, pill-shaped feature bands).

**Shadows.** No plain drop shadows on their own — shadows always pair with the glass treatment above (inset sheen + soft outer blur), rgba(0,0,0,0.05–0.1). Component-level shadows (toasts, dialogs) use a simple soft outer shadow only, no glass.

**Motion.** Not specified in source frames (a static brand deck). This system's components use short, standard-easing transitions (120–200ms, ease-standard) for hover/press only — kept deliberately minimal, consistent with the deck's calm, confident tone rather than a flashy HUD.

**Hover / press states.** Hover: background shifts one step toward Mint Green (primary buttons) or a faint glass tint (secondary/ghost); a 1px lift (`translateY(-1px)`). Press/disabled: flattens to Glass Gray `#D9D9D9` at reduced opacity — no color, no shrink.

**Borders.** Hairline only (1–1.5px), always a translucent brand color (never pure black), used on secondary buttons, inputs, and tags.

**Transparency & blur.** Reserved for the glass-pill surface and the modal scrim — not used decoratively elsewhere.

## Iconography

The source deck defines exactly **4 custom line icons** — one per pillar (Andragogía, Inteligencia Híbrida, Team Building, Reporting) — vector-extracted at full fidelity from the Figma nodes into `assets/icons/` (`andragogy.svg`, `hybrid-intelligence.svg`, `team-building.svg`, `reporting.svg`). They are solid single-path glyphs (`fill="currentColor"`), monochrome, geometric and slightly abstract (not literal pictograms) — recolor via CSS `color`. No icon font, no emoji, and no other icon set is defined in source. **No general-purpose UI icon set (menu, close, chevron, search, etc.) exists in source** — the few used inside components (close ✕, checkmark) were drawn as minimal single-path SVGs matching the same geometric language; treat those as intentional additions, and prefer swapping in the real pillar icons wherever the concept applies.

**Logo.** One asset: the ORA wordmark (`assets/logo/ora-mark.svg`, `fill="currentColor"` — recolor freely). No separate icon-only mark exists in source; use the full wordmark at all sizes.

**Missing imagery.** The source frame "Imagenes" referenced two full-bleed wallpaper photos and the "Colores" frame referenced one saturation-blended texture image — none of their bytes were included in the mounted .fig export (re-export with "Include images" to recover them). No image was fabricated; product screens should use `image-slot` placeholders until real photography is supplied.

## Components

No component library existed in the source Figma (a brand moodboard only) — per design-system policy, a standard primitive set was authored from scratch, styled to the visual foundations above. All under `components/`:

**Forms** (`components/forms/`): Button, IconButton, Input, Select, Checkbox, Radio, Switch
**Feedback** (`components/feedback/`): Badge, Tag, Toast, Tooltip
**Navigation** (`components/navigation/`): Tabs
**Overlay** (`components/overlay/`): Dialog
**Data display** (`components/data-display/`): Card (the "glass pill" surface, componentized)

### Intentional additions
- The entire component set above (no components were defined in source).
- Close (✕) and checkmark glyphs used inside Tag/Toast/Checkbox — minimal single-path SVGs matching the pillar icons' geometric style.

## What's not included

- **No UI kit / product screens.** The source Figma contained only brand-guideline frames — no app, dashboard, or website screens to recreate. Per design-system policy, no new product UI was invented. Once real product screens (app, website, or internal tool) are shared, a UI kit should be added under `ui_kits/`.
- **No secondary/full imagery** — see Iconography above.

## Index

- `styles.css` — root stylesheet, imports everything below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css` (glass-surface + motion tokens).
- `fonts/` — Raleway & Roboto Serif variable `.ttf` files (Inter loaded from Google Fonts CDN — no local files were provided for it).
- `assets/logo/` — `ora-mark.svg` wordmark.
- `assets/icons/` — the 4 pillar icons.
- `guidelines/` — foundation specimen cards (colors, type, glass surface, grid marks, spacing, radii, logo, icons) shown in the Design System tab.
- `components/` — the 14 UI primitives listed above, each `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, with one `*.card.html` per directory.
- `thumbnail.html` — project homepage tile.
- `SKILL.md` — portable Claude Code skill wrapper for this system.

## Caveats & next steps

1. **Font substitution:** Inter (body text) has no uploaded font file — it's loaded live from Google Fonts. If you have licensed Inter files, share them and I'll self-host.
2. **No product screens exist yet** — this system is brand foundations + a generic component kit, not a validated product UI. Share real app/website screens (or a Figma link to them) and I'll build a proper UI kit on top of these foundations.
3. **Two background photos + one texture image are unrecoverable** from the current .fig export (bytes weren't bundled) — re-export from Figma with "Include images" if you'd like them restored.
4. Component set (Button, Input, Card, etc.) is a **standard starting kit**, not extracted from a real UI — please flag anything that should look or behave differently once you see it in context.

**I'd love your help getting this exactly right** — tell me if the "glass pill" treatment, the button shapes, or the color pairings feel off, and point me at any real product screens so the component kit can be tuned to how ORA's app actually works.
