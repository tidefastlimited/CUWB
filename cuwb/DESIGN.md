---
name: CUWB
description: High-precision UWB RTLS, designed for transparent technical buying decisions.
colors:
  brand-signal-red: "#ef3a32"
  brand-signal-red-hover: "#d92f28"
  warm-instrument-bg: "#fffafa"
  warm-instrument-surface: "#fffcfb"
  calibration-panel: "#f8f3f1"
  polished-panel: "#fff6f4"
  graphite-ink: "#1f1717"
  steel-copy: "#5f5654"
  muted-steel: "#8a7f7c"
  hairline-red-gray: "#e8d8d5"
  signal-soft: "#fff0ef"
  signal-border: "#ffc7c3"
  signal-ink: "#7d1712"
  night-bg: "#120d0d"
  night-surface: "#1b1413"
  night-panel: "#241918"
  night-ink: "#f7eded"
typography:
  display:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6.5rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "normal"
  headline:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  title:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  xs: "2px"
  sm: "4px"
  md: "6px"
  lg: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "clamp(72px, 10vw, 132px)"
components:
  button-primary:
    backgroundColor: "{colors.brand-signal-red}"
    textColor: "{colors.warm-instrument-bg}"
    rounded: "{rounded.md}"
    padding: "12px 18px"
  button-primary-hover:
    backgroundColor: "{colors.brand-signal-red-hover}"
    textColor: "{colors.warm-instrument-bg}"
    rounded: "{rounded.md}"
    padding: "12px 18px"
  button-secondary:
    backgroundColor: "{colors.warm-instrument-surface}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.md}"
    padding: "12px 18px"
  card-standard:
    backgroundColor: "{colors.warm-instrument-surface}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: CUWB

## 1. Overview

**Creative North Star: "The Polished Calibration Bench"**

CUWB should feel like a precise technical buying system with the polish of a modern infrastructure startup: part spec sheet, part product console, part deployment-planning guide. The interface is light-first, structured, and commercially clear, built for people comparing expensive systems rather than browsing a glossy brochure.

The core language is Calibrated Industrial, Buyer-Clear, with a more polished tech-startup finish. It is rigorous without becoming cold, technical without hiding the commercial story, and premium without becoming generic SaaS. The system can flex by customer mode: industrial pages get operational proof and deployment diagrams, engineering pages get data-forward layouts, healthcare pages become calmer and more trust-led, and sports pages can show more movement while staying grounded in precision.

It rejects generic enterprise SaaS, blue startup UI, vague platform styling, decorative card grids, and rugged industrial theater.

**Key Characteristics:**
- Light, warm, product-grade surfaces.
- CUWB red used as signal and action, not decoration.
- Dense comparison-friendly components.
- Precise geometry with soft, intentional depth.
- Clear paths for cost, deployment, integration, and technology comparison.

## 2. Colors

The palette is warm technical neutrality with one disciplined signal red.

### Primary
- **Brand Signal Red** (#ef3a32): CTAs, active states, measurement accents, selected states, and key buyer proof. It should usually occupy less than 10% of a screen.
- **Signal Red Hover** (#d92f28): Hover and pressed state for primary actions.

### Neutral
- **Warm Instrument Background** (#fffafa): Default page background. It should feel like a lit workbench, not pure white.
- **Warm Instrument Surface** (#fffcfb): Navigation, footer, cards, and clean surfaces.
- **Calibration Panel** (#f8f3f1): Alternating section background, table headers, comparison bands, and callout panels.
- **Polished Panel** (#fff6f4): Warm premium tint for hero visuals, highlighted product surfaces, and high-value modules.
- **Graphite Ink** (#1f1717): Primary text.
- **Steel Copy** (#5f5654): Body and secondary text.
- **Muted Steel** (#8a7f7c): Metadata, captions, timestamps, and subdued labels.
- **Hairline Red-Gray** (#e8d8d5): Borders, dividers, grid lines, and table rules.

### Named Rules

**The Signal Rule.** Red marks action, emphasis, or measurement. If everything is red, nothing is signal.

**The Warm Neutral Rule.** Avoid pure white, pure black, and default zinc gray as the dominant visual language. Every neutral should carry a slight warm/red cast.

**The Vertical Mode Rule.** Industrial, engineering, healthcare, and sports pages share the same core palette, but each can shift emphasis: operational graphite for industrial, data red for engineering, softer neutrals for healthcare, and more kinetic red accents for sports.

## 3. Typography

**Display Font:** Geist with Arial and Helvetica fallback  
**Body Font:** Geist with Arial and Helvetica fallback  
**Label/Mono Font:** Geist Mono with system monospace fallback

**Character:** The type system is clean, technical, and direct. It uses weight, scale, and spacing discipline rather than decorative font pairing.

### Hierarchy
- **Display** (700, `clamp(3rem, 7vw, 6.5rem)`, 0.94): Homepage and major landing-page hero statements only.
- **Headline** (700, `clamp(2rem, 4vw, 3.75rem)`, 1): Section and page introductions.
- **Title** (650, 1.25rem, 1.25): Cards, table groups, proof blocks, and FAQ headings.
- **Body** (400, 1rem, 1.65): Explanatory content, capped at 65-75ch.
- **Label** (650, 0.75rem, 0.08em tracking): Short technical labels such as USE CASE, DEPLOYMENT, API, COST. Use uppercase only for labels, never paragraphs.

### Named Rules

**The Buyer Scan Rule.** Use labels, tables, short headings, and body copy blocks to help buyers scan for cost, deployment, integration, and fit.

**The No Costume Mono Rule.** Monospace is only for labels, code, coordinates, API examples, measurements, and compact technical metadata.

## 4. Elevation

The system is mostly flat, but not austere. Depth comes from tonal layering, hairline borders, precise spacing, and a restrained product-shadow vocabulary. Shadows should make key surfaces feel polished and intentional, not floaty.

### Shadow Vocabulary
- **Dropdown Lift** (`0 18px 40px rgba(31, 23, 23, 0.12)`): Navigation dropdowns and temporary panels.
- **Interactive Lift** (`0 10px 24px rgba(31, 23, 23, 0.08)`): Optional hover elevation for high-value interactive cards.
- **Product Console Lift** (`0 24px 70px rgba(31, 23, 23, 0.14)`): Hero product visual, deployment estimator modules, and decision dashboards.

### Named Rules

**The Product Polish Rule.** Key product visuals and decision modules may lift. Routine content stays grounded with borders and tonal surfaces.

## 5. Components

### Buttons
- **Shape:** Compact technical rectangle with a 6px radius, softened by stronger spacing and smoother hover transitions.
- **Primary:** Brand Signal Red background, warm text, medium weight, 12px x 18px padding.
- **Hover / Focus:** Darken to Signal Red Hover. Focus states use a visible red ring with an offset on light surfaces.
- **Secondary:** Warm surface with graphite text and a hairline border. It is for comparison, learning, and lower-commitment actions.

### Chips
- **Style:** Small uppercase labels with mono typography, warm panel background, red-gray border, and graphite or signal-red text.
- **State:** Selected chips may use Signal Soft with Signal Border and Signal Ink.

### Cards / Containers
- **Corner Style:** 8px maximum radius.
- **Background:** Warm Instrument Surface on page backgrounds, Calibration Panel for grouped content.
- **Shadow Strategy:** Flat for routine content; product modules can use Product Console Lift.
- **Border:** Hairline Red-Gray.
- **Internal Padding:** 24px for standard cards, 32px for proof or comparison modules.

### Inputs / Fields
- **Style:** Warm surface, graphite text, red-gray border, 6px radius.
- **Focus:** Signal red border and accessible focus ring.
- **Error / Disabled:** Error states should combine color, text, and iconography. Disabled states use muted steel text and calibration panel backgrounds.

### Navigation
- **Desktop:** Sticky, warm surface, hairline bottom border, compact labels.
- **Dropdowns:** Two-column lists when content is dense; use descriptions to expose buyer intent.
- **Mobile:** Accordion-style sections with clear tap targets and no hidden critical CTA.

### Tables / Comparison Blocks
- **Style:** Essential component for this brand. Use strong row rhythm, red-gray dividers, compact labels, and clear column headings.
- **Use Cases:** RTLS cost, UWB vs BLE/RFID/GPS, anchor planning, software fees, deployment checklist, best-fit/not-fit guidance.

### Proof Blocks
- **Style:** Structured modules with environment, area, anchors, tags, update rate, integration path, and outcome.
- **Purpose:** Replace vague claims with extractable, buyer-useful evidence.

## 6. Do's and Don'ts

**Do:**
- Use red as a signal for action, measurement, and decisive proof.
- Use product-style visuals, diagrams, and console-like modules to make the technology tangible.
- Make cost, deployment, local control, and integration easy to compare.
- Use tables, checklists, diagrams, and proof blocks as first-class brand elements.
- Keep page geometry precise: 6-8px radii, clear dividers, stable grids.
- Adapt customer pages by mode while preserving the same core system.

**Don't:**
- Do not use generic blue SaaS styling, gradient text, glassmorphism, or decorative icon-card grids.
- Do not mistake “tech startup” for vague neon dashboards, empty rounded cards, or blue-purple gradients.
- Do not make every section a card.
- Do not use rugged industrial imagery or styling unless it supports a real deployment context.
- Do not hide tradeoffs. “When CUWB may not fit” sections build trust.
- Do not use red as wallpaper or a background habit.
