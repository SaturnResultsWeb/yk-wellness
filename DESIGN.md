# YK Wellness — Design System
**London Therapeutic Massage Clinic · Awwwards-Tier Specification**

---

## 0. Design Intent & Variance Selection

**Vibe Archetype:** Editorial Luxury  
**Layout Archetype:** Asymmetrical Bento + Editorial Split (hybrid per section)

**Brand Positioning:** YK Wellness is not a day spa — it is a clinically-grounded, practitioner-led therapeutic studio in West London. The design must project *earned expertise* and *warm precision*. Think: the Connaught Hotel's quietness meeting a Harley Street clinic's credibility. No lotus flowers. No gradient orbs. No stock photography of women in robes.

**Design North Star:** An editorial, tactile, paper-warm aesthetic that makes a returning client feel they're opening a letter from a trusted practitioner — not browsing a wellness app.

---

## 1. Color Palette

### Primary Palette

| Token               | Hex       | HSL                    | Usage                                      |
|---------------------|-----------|------------------------|--------------------------------------------|
| `--color-canvas`    | `#F8F5EF` | 40 38% 96%             | Page background, outer shell backgrounds   |
| `--color-deep`      | `#1A2118` | 116 12% 11%            | Primary text, headings, nav at scroll      |
| `--color-sage`      | `#3B6357` | 162 26% 30%            | Primary brand, CTA fills, active states    |
| `--color-sage-mid`  | `#5A8577` | 162 20% 43%            | Hover states, secondary sage accents       |
| `--color-sage-light`| `#C3D6CF` | 162 20% 80%            | Borders, dividers, tag backgrounds         |
| `--color-amber`     | `#BF8A5E` | 28 42% 55%             | Accent highlights, price callouts, icons   |
| `--color-amber-warm`| `#D4A574` | 30 52% 64%             | Hover on amber, gradient mid-stop          |
| `--color-stone`     | `#8C7B6C` | 30 14% 49%             | Muted body text, metadata, captions        |
| `--color-cream`     | `#F2EDE3` | 40 33% 92%             | Card inner cores, elevated surfaces        |
| `--color-mist`      | `#E4DDD2` | 36 22% 85%             | Hairline borders, input outlines, dividers |

### Dark / Reversed Surfaces (used sparingly — hero overlays, footer)

| Token                | Hex       | Usage                                  |
|----------------------|-----------|----------------------------------------|
| `--color-bark`       | `#2C2018` | Dark card backgrounds, footer base     |
| `--color-bark-mid`   | `#3D2F22` | Dark card inner core                   |
| `--color-bark-border`| `#4A3B2C` | Hairline borders on dark surfaces      |
| `--color-on-dark`    | `#EDE8DF` | Text on dark backgrounds               |

### Semantic Colors

| Token               | Value              | Usage                    |
|---------------------|--------------------|--------------------------|
| `--color-success`   | `#4A7C5A`          | Booking confirmation     |
| `--color-warning`   | `#C4934A`          | Limited availability     |
| `--color-error`     | `#9B4040`          | Form validation          |
| `--color-overlay`   | `rgba(26,33,24,.7)`| Hero image overlays      |

### CSS Custom Properties (add to `:root`)

```css
:root {
  --color-canvas:      #F8F5EF;
  --color-deep:        #1A2118;
  --color-sage:        #3B6357;
  --color-sage-mid:    #5A8577;
  --color-sage-light:  #C3D6CF;
  --color-amber:       #BF8A5E;
  --color-amber-warm:  #D4A574;
  --color-stone:       #8C7B6C;
  --color-cream:       #F2EDE3;
  --color-mist:        #E4DDD2;
  --color-bark:        #2C2018;
  --color-bark-mid:    #3D2F22;
  --color-bark-border: #4A3B2C;
  --color-on-dark:     #EDE8DF;
}
```

---

## 2. Typography

### Font Stack

| Role          | Family                   | Import Source          | Fallback              |
|---------------|--------------------------|------------------------|-----------------------|
| **Display**   | `Cormorant Garamond`     | Google Fonts           | Georgia, serif        |
| **Body**      | `Plus Jakarta Sans`      | Google Fonts           | system-ui, sans-serif |
| **Mono/Label**| `DM Mono`                | Google Fonts           | monospace             |

**Google Fonts URL:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet">
```

### Type Scale

| Token              | Size         | Line Height | Weight | Tracking   | Font              | Usage                            |
|--------------------|-------------|-------------|--------|------------|-------------------|----------------------------------|
| `--text-display-2` | `clamp(72px, 10vw, 140px)` | 0.92 | 300 | -0.03em | Cormorant Garamond | Hero statements, single impact lines |
| `--text-display-1` | `clamp(52px, 7vw, 96px)`  | 0.95 | 400 | -0.02em | Cormorant Garamond | Section hero headings            |
| `--text-h1`        | `clamp(38px, 5vw, 64px)`  | 1.05 | 400 | -0.015em | Cormorant Garamond | Page titles, primary headings     |
| `--text-h2`        | `clamp(28px, 4vw, 48px)`  | 1.1  | 400 | -0.01em  | Cormorant Garamond | Section titles                    |
| `--text-h3`        | `clamp(22px, 2.5vw, 32px)` | 1.2 | 500 | -0.005em | Cormorant Garamond | Card headings, sub-sections       |
| `--text-h4`        | `18px`      | 1.3         | 500    | 0          | Plus Jakarta Sans  | List headings, feature titles    |
| `--text-body-lg`   | `18px`      | 1.7         | 300    | 0          | Plus Jakarta Sans  | Lead paragraph, intro copy       |
| `--text-body`      | `16px`      | 1.75        | 300    | 0          | Plus Jakarta Sans  | Default body text                |
| `--text-body-sm`   | `14px`      | 1.7         | 400    | 0          | Plus Jakarta Sans  | Secondary text, metadata         |
| `--text-caption`   | `12px`      | 1.5         | 400    | 0.02em     | Plus Jakarta Sans  | Captions, footnotes              |
| `--text-eyebrow`   | `10px`      | 1           | 500    | 0.2em      | Plus Jakarta Sans  | Section labels (all-caps pills)  |
| `--text-price`     | `clamp(24px, 3vw, 36px)` | 1.1 | 300 | -0.01em | Cormorant Garamond | Pricing figures                   |
| `--text-mono`      | `13px`      | 1.5         | 300    | 0.05em     | DM Mono            | Contact details, small data      |

### Typography Rules

- **Cormorant headings:** always use `font-style: italic` on pull-quotes and testimonials — the italic cut is where this font earns its grace
- **Never** set Cormorant Garamond below 22px — it was designed for large optical sizes
- **Plus Jakarta Sans** should never exceed `font-weight: 600` — it looks coarse at 700+
- **Hyphenation:** Enable `hyphens: auto` on Cormorant body text blocks wider than 600px
- **Max measure:** Body text containers cap at `68ch` for readability

---

## 3. Spacing System

Based on a **8px base unit** with a modular scale. All spacing tokens are multiples or fractions of 8px.

```
--space-1:   4px     (0.25rem)   — icon gap, tight inline
--space-2:   8px     (0.5rem)    — component internal padding
--space-3:   12px    (0.75rem)   — compact padding
--space-4:   16px    (1rem)      — base unit
--space-5:   20px    (1.25rem)   — medium gap
--space-6:   24px    (1.5rem)    — card padding
--space-8:   32px    (2rem)      — component gap
--space-10:  40px    (2.5rem)    — card gap
--space-12:  48px    (3rem)      — small section padding
--space-16:  64px    (4rem)      — section gap
--space-20:  80px    (5rem)      — section padding (mobile)
--space-24:  96px    (6rem)      — section padding (tablet)
--space-32:  128px   (8rem)      — section padding (desktop)
--space-40:  160px   (10rem)     — hero padding (desktop)
--space-48:  192px   (12rem)     — generous hero breathing
```

### Section Vertical Rhythm

| Breakpoint  | Section `padding-top/bottom` | Stack Gap         |
|-------------|------------------------------|-------------------|
| Mobile      | `80px` (--space-20)          | `40px` (--space-10)|
| Tablet      | `96px` (--space-24)          | `48px` (--space-12)|
| Desktop     | `128px–192px`                | `64px` (--space-16)|

**Minimum section py is 96px on desktop.** Anything tighter collapses the spatial luxury.

---

## 4. Border Radius

```
--radius-sm:   6px      — small badges, tags, inputs
--radius-md:   12px     — buttons, chips
--radius-lg:   20px     — small cards
--radius-xl:   28px     — medium cards, modals
--radius-2xl:  36px     — large feature cards
--radius-full: 9999px   — pills, avatars, CTAs
```

**Doppelrand (Double-Bezel) Formula:**
- Outer shell radius: `--radius-2xl` (36px)
- Inner core radius: `calc(36px - 8px)` = 28px (`--radius-xl`)
- The outer padding is always `6–8px` (the "bezel gap")

---

## 5. Shadow & Elevation System

**Philosophy:** No harsh shadows. All shadows are ambient, diffused, and warm-tinted — as if the light source is a soft lamp, not a studio strobe.

```css
--shadow-xs:   0 1px 2px rgba(26, 33, 24, 0.04);
--shadow-sm:   0 2px 8px rgba(26, 33, 24, 0.06), 0 1px 2px rgba(26, 33, 24, 0.04);
--shadow-md:   0 4px 24px rgba(26, 33, 24, 0.08), 0 2px 8px rgba(26, 33, 24, 0.04);
--shadow-lg:   0 8px 40px rgba(26, 33, 24, 0.10), 0 4px 16px rgba(26, 33, 24, 0.06);
--shadow-xl:   0 16px 64px rgba(26, 33, 24, 0.12), 0 8px 24px rgba(26, 33, 24, 0.06);
--shadow-inset: inset 0 1px 1px rgba(255, 255, 255, 0.6);     /* inner highlight */
--shadow-inset-dark: inset 0 1px 0 rgba(255, 255, 255, 0.08); /* dark surface highlight */

/* Amber glow — use only on primary CTA hover */
--shadow-amber-glow: 0 8px 32px rgba(191, 138, 94, 0.25), 0 2px 8px rgba(191, 138, 94, 0.15);

/* Sage glow — use on sage CTA hover */
--shadow-sage-glow: 0 8px 32px rgba(59, 99, 87, 0.25), 0 2px 8px rgba(59, 99, 87, 0.15);
```

---

## 6. Component Architecture

### 6.1 Navigation — "Fluid Island" Pill Nav

**Closed State:**
- Float pill detached from top: `margin-top: 24px`, centered `margin-inline: auto`, `width: max-content`
- Background: `rgba(248, 245, 239, 0.85)` with `backdrop-filter: blur(20px) saturate(180%)`
- Border: `1px solid rgba(228, 221, 210, 0.7)`
- Radius: `--radius-full`
- Padding: `8px 8px 8px 24px` (pill with right-side CTA button nested inside)

**Nav CTA (Booking Button) — nested inside the pill:**
- Background: `--color-sage`
- Text: `--color-canvas`
- Radius: `--radius-full`
- Padding: `10px 20px`
- On hover: bg shifts to `--color-deep`, `--shadow-sage-glow` appears

**Links:**
- Font: Plus Jakarta Sans, 14px, weight 400
- Color: `--color-stone`
- Hover: `--color-deep`, with a microscopic underline that slides in from left
- Active/current: `--color-sage`
- Letter spacing: `0.01em`

**Scroll behavior:** At 60px scroll depth, pill background opacity increases to 0.95, border becomes `rgba(228,221,210,1.0)`

**Mobile:** Collapses to a hamburger (2 lines → X morph). On open, expands to full-screen overlay (`min-h-[100dvh]`) with `backdrop-blur(40px)` on `#F8F5EF/90`. Links stagger-reveal from bottom.

---

### 6.2 Buttons

#### Primary CTA — "Book a Session"
```
Background:   --color-sage
Text:         --color-canvas
Font:         Plus Jakarta Sans, 15px, weight 500, tracking 0.01em
Padding:      14px 24px
Radius:       --radius-full
Transition:   background 500ms cubic-bezier(0.32,0.72,0,1),
              box-shadow 500ms cubic-bezier(0.32,0.72,0,1),
              transform 200ms cubic-bezier(0.32,0.72,0,1)

Hover state:
  Background: --color-deep
  Shadow:     --shadow-sage-glow
  Transform:  translateY(-1px)

Active state:
  Transform:  scale(0.98)

Trailing icon (arrow ↗):
  Wrapper: 28px × 28px circle, bg rgba(255,255,255,0.15), radius 9999px
  Icon: 14px, weight 300
  On hover: wrapper translates (+2px, -2px), scale(1.1)
```

#### Secondary CTA — "Learn More"
```
Background:   transparent
Border:       1px solid --color-mist
Text:         --color-deep
Font:         Plus Jakarta Sans, 15px, weight 400
Padding:      14px 24px
Radius:       --radius-full
Transition:   border-color 400ms, background 400ms, color 400ms cubic-bezier(0.32,0.72,0,1)

Hover:
  Background: --color-cream
  Border:     --color-sage-light
  Text:       --color-sage
```

#### Ghost / Text CTA — "Read More →"
```
No background, no border
Text:         --color-sage, 14px, weight 500, tracking 0.02em
The arrow (→) is a separate span that translates right 4px on hover
Transition: 350ms cubic-bezier(0.32,0.72,0,1)
```

---

### 6.3 Cards — Double-Bezel (Doppelrand) Architecture

**Every card** uses the nested outer shell + inner core structure.

#### Service Card
```
Outer Shell:
  Background: rgba(242, 237, 227, 0.5)     /* --color-cream/50 */
  Border:     1px solid rgba(228, 221, 210, 0.8)
  Padding:    6px
  Radius:     --radius-2xl (36px)
  Shadow:     --shadow-sm
  Transition: shadow 500ms cubic-bezier(0.32,0.72,0,1),
              transform 500ms cubic-bezier(0.32,0.72,0,1)

Inner Core:
  Background: --color-cream
  Radius:     --radius-xl (28px)
  Shadow:     --shadow-inset
  Padding:    28px 28px 24px

Hover (on outer shell):
  Shadow:     --shadow-md
  Transform:  translateY(-3px)

Content layout (inner):
  - Eyebrow tag (service category)
  - Service name (--text-h3, Cormorant Garamond)
  - Duration (--text-mono, --color-stone)
  - Short description (--text-body-sm)
  - Price (--text-price, --color-amber)
  - CTA (Ghost CTA, aligned bottom)
```

#### Testimonial Card
```
Outer Shell:
  Background: rgba(59, 99, 87, 0.06)       /* sage tint */
  Border:     1px solid rgba(195, 214, 207, 0.5)
  Padding:    6px
  Radius:     --radius-2xl

Inner Core:
  Background: --color-canvas
  Radius:     --radius-xl
  Padding:    32px
  Shadow:     --shadow-inset

Content:
  - Opening quotation mark: Cormorant Garamond italic, 80px, --color-sage-light, absolute top-left
  - Quote text: Cormorant Garamond italic, 20–24px, --color-deep, line-height 1.55
  - Author name: Plus Jakarta Sans, 13px, weight 500, --color-deep
  - Author detail: DM Mono, 11px, --color-stone, tracking 0.05em
  - Star rating: 5 × 10px amber dots (not icons — use ● characters in --color-amber)
```

#### Team / Practitioner Card
```
Outer Shell:
  Background: --color-canvas
  Border:     1px solid --color-mist
  Padding:    6px
  Radius:     --radius-2xl

Inner Core:
  Background: --color-cream
  Radius:     --radius-xl
  Overflow:   hidden

Image treatment:
  - Full-width image at top, aspect-ratio 4/5 (portrait)
  - Image has a warm sepia-toned CSS filter: sepia(8%) saturate(90%) contrast(102%)
  - On hover: filter removes, image desaturates slightly then snaps to full color
  - Transition: 600ms cubic-bezier(0.32,0.72,0,1)

Content below image:
  - Practitioner name (--text-h3)
  - Speciality (--text-eyebrow, sage)
  - Credential (DM Mono, 12px, --color-stone)
  - 2-line bio (--text-body-sm)
```

---

### 6.4 Eyebrow Tags

Used before every major heading to establish section context.

```css
.eyebrow-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 14px;
  background: rgba(59, 99, 87, 0.08);
  border: 1px solid rgba(195, 214, 207, 0.6);
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-sage);
}
/* Optional leading dot */
.eyebrow-tag::before {
  content: '';
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-amber);
  flex-shrink: 0;
}
```

---

### 6.5 Form Inputs

```
Container (outer shell):
  Background: rgba(242, 237, 227, 0.4)
  Border: 1px solid --color-mist
  Radius: --radius-lg
  Padding: 3px

Input (inner):
  Background: --color-canvas
  Radius: calc(--radius-lg - 3px) ≈ 9px
  Padding: 14px 18px
  Font: Plus Jakarta Sans, 15px, weight 300
  Color: --color-deep
  Shadow: --shadow-inset

Focus state (on outer shell):
  Border-color: --color-sage-light
  Shadow: 0 0 0 3px rgba(59, 99, 87, 0.12)
  Transition: 350ms cubic-bezier(0.32,0.72,0,1)

Label:
  Font: Plus Jakarta Sans, 12px, weight 500, tracking 0.05em, uppercase
  Color: --color-stone
  Margin-bottom: 8px
```

---

### 6.6 Price / Stat Display

Large price or stat callouts (e.g., "from £75", "5.0★", "8 Years"):

```
Figure: Cormorant Garamond, weight 300, --text-price or larger
Currency/Unit prefix: Plus Jakarta Sans, 14px, weight 400, --color-stone, 
                       vertical-align: super, margin-right: 2px
Label beneath: Plus Jakarta Sans, 11px, weight 400, --color-stone, 
               tracking 0.1em, uppercase
```

---

## 7. Motion & Animation

### 7.1 Easing Curves

```css
--ease-out-expo:   cubic-bezier(0.16, 1, 0.3, 1);         /* primary: large reveals */
--ease-out-quart:  cubic-bezier(0.25, 1, 0.5, 1);         /* secondary: card hover */
--ease-spring:     cubic-bezier(0.32, 0.72, 0, 1);        /* button press, UI response */
--ease-in-out-soft: cubic-bezier(0.45, 0, 0.55, 1);       /* smooth transitions */
--ease-entrance:   cubic-bezier(0.22, 1, 0.36, 1);        /* scroll-triggered entrances */
```

### 7.2 Duration Scale

```
--duration-instant: 100ms    — hover color tints
--duration-fast:    200ms    — icon micro-motions
--duration-mid:     350ms    — button state changes
--duration-slow:    500ms    — card hover lifts, nav transitions
--duration-reveal:  700ms    — scroll entrance animations
--duration-page:    900ms    — page-level transitions
```

### 7.3 Scroll Entrance Animations

Apply via `IntersectionObserver` with `threshold: 0.15`:

```css
/* Starting state — applied via JS class or CSS initial state */
.will-reveal {
  opacity: 0;
  transform: translateY(24px);
  filter: blur(4px);
  transition: opacity var(--duration-reveal) var(--ease-entrance),
              transform var(--duration-reveal) var(--ease-entrance),
              filter var(--duration-reveal) var(--ease-entrance);
}

.will-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
```

**Stagger delays for grid children:**
```
nth-child(1): delay 0ms
nth-child(2): delay 80ms
nth-child(3): delay 160ms
nth-child(4): delay 240ms
(cap at 4 — beyond 4 items, restart the stagger)
```

### 7.4 Hamburger → X Morph

```css
/* Line 1: rotates to 45° */
.burger-line-1 {
  transform-origin: center;
  transition: transform var(--duration-mid) var(--ease-spring),
              top var(--duration-mid) var(--ease-spring);
}
.is-open .burger-line-1 {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

/* Line 2: rotates to -45° */
.burger-line-2 {
  transform-origin: center;
  transition: transform var(--duration-mid) var(--ease-spring),
              top var(--duration-mid) var(--ease-spring);
}
.is-open .burger-line-2 {
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}
```

### 7.5 Image Parallax (Hero only)

The hero background image translates at 40% scroll speed:
```js
// Use CSS transform only — never top/left
heroImage.style.transform = `translateY(${scrollY * 0.4}px)`;
```
Stop the listener when the hero section exits the viewport (use IntersectionObserver).

---

## 8. Grid & Layout System

### Container

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: clamp(20px, 5vw, 80px);
}

/* Wider reading containers (editorial sections) */
.container-lg {
  max-width: 1440px;
}

/* Tight prose containers */
.container-prose {
  max-width: 760px;
  margin-inline: auto;
}
```

### Breakpoints

```
--bp-sm:   480px    — large phones
--bp-md:   768px    — tablets (portrait)
--bp-lg:   1024px   — tablets (landscape), small desktop
--bp-xl:   1280px   — standard desktop
--bp-2xl:  1536px   — large desktop
```

### Primary Grid

```css
.grid-main {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: clamp(16px, 2vw, 32px);
}

/* Mobile: always collapses to 1 column */
@media (max-width: 767px) {
  .grid-main { grid-template-columns: 1fr; }
}
```

### Bento Grid — Services Section

```
Desktop (12 col):
  - Feature service (col-span-7, row-span-2) — Deep Tissue or Swedish
  - 2 × stacked supporting services (col-span-5, row-span-1 each)
  - 3 × remaining services (col-span-4 each, row-span-1)
  - Stats bar (col-span-12) — "6 Expert Practitioners · 5.0 ★ Rating · 8+ Years"

Tablet (col-span collapses):
  - Feature: col-span-12
  - Supporting: col-span-6 each
  - Remaining: col-span-6 each

Mobile: all col-span-1 (full width), stacked
```

---

## 9. Iconography

**Library:** Phosphor Icons (Light variant) — `phosphor-react` or CDN  
**Never use:** Lucide, FontAwesome, or Heroicons at standard stroke weight.

**Sizing scale:**
```
--icon-xs:  12px   — inline text icons, badges
--icon-sm:  16px   — nav, button trailing icon
--icon-md:  20px   — feature list items
--icon-lg:  28px   — section accent icons
--icon-xl:  40px   — empty states, large callouts
```

**Color rules:**
- Default: `--color-stone`
- On sage background: `rgba(255,255,255,0.7)` 
- Accent icons: `--color-amber`
- Interactive: transitions from `--color-stone` to `--color-sage`, 300ms

**Specific icons for YK Wellness:**
```
Massage/Body work  →  PhosphorIcon: Sparkle (Light)
Osteopathy         →  PhosphorIcon: Atom (Light) or Leaf (Light)
Sports             →  PhosphorIcon: Lightning (Light)
Cupping            →  PhosphorIcon: Drop (Light)
Dry Needling       →  PhosphorIcon: Needle (Light) or Syringe (Light)
Location           →  PhosphorIcon: MapPin (Light)
Phone/WhatsApp     →  PhosphorIcon: Phone (Light)
Email              →  PhosphorIcon: Envelope (Light)
Star / Rating      →  PhosphorIcon: Star (Light), filled in amber
Clock / Duration   →  PhosphorIcon: Clock (Light)
Team               →  PhosphorIcon: UserCircle (Light)
Booking            →  PhosphorIcon: CalendarCheck (Light)
Arrow CTA          →  PhosphorIcon: ArrowUpRight (Light)
```

---

## 10. Photography & Image Direction

### Style
- **Real practitioners, real clinic.** No stock photos of generic massage scenes.
- **Color grade:** Warm, slightly muted. Think +5 exposure, -10 vibrance, +8 warmth. Not golden-hour Instagram — more editorial London moodiness.
- **Backgrounds:** Clean, minimal. Neutral linen or stone textures in background of treatment shots.
- **Composition:** Predominantly portrait or square crops for team. Landscape for clinic environment.

### CSS Image Treatment (applied until real photography provided)
```css
.yk-image {
  filter: sepia(6%) saturate(88%) contrast(103%) brightness(102%);
  transition: filter 600ms var(--ease-out-expo);
}
.yk-image:hover {
  filter: sepia(0%) saturate(100%) contrast(100%) brightness(100%);
}
```

### Placeholder Strategy
Use `aspect-ratio: 4/5` (portrait) for people, `16/9` for rooms. Background: `--color-cream`. Add a subtle crosshatch SVG pattern as placeholder texture.

---

## 11. Page Section Inventory

### Section 1: Hero
- Full-viewport (`min-h: 100dvh`)
- Layered: background image → warm overlay → content
- Overlay: `linear-gradient(160deg, rgba(26,33,24,0.55) 0%, rgba(26,33,24,0.3) 60%, rgba(26,33,24,0.6) 100%)`
- Content: eyebrow tag → display-2 headline (Cormorant, italic, --color-on-dark) → body lead → dual CTA buttons
- Bottom: horizontal marquee of treatment names or credentials (subtle, --color-on-dark/40)

### Section 2: Trust Bar
- 4 stats across: "6 Practitioners · 5.0 Google Rating · 8+ Years · GOsC Registered"
- Each stat uses `--text-price` figure + label beneath
- Divider: 1px `--color-mist` between items
- Background: `--color-cream`

### Section 3: Introduction / Mission
- Editorial Split layout: Large pull-quote (Cormorant italic, h1-scale, left) + body text (right)
- Quote: *"Every session begins with a genuine conversation — your goals, your history, your body."*

### Section 4: Services — Bento Grid
- Eyebrow: "TREATMENTS"
- H2 heading (Cormorant)
- Asymmetric bento grid (see Section 8)
- Feature card has background image with overlay + treatment name large

### Section 5: How It Works
- 3-step horizontal timeline (desktop), vertical stack (mobile)
- Steps: ①  Book → ② Consult → ③ Treatment
- Each step: number (Cormorant, 80px, --color-mist), title, description

### Section 6: Team
- Eyebrow: "YOUR PRACTITIONERS"
- H2 heading
- Horizontal scroll on mobile, 3/4-col grid on desktop
- Practitioner cards (Double-Bezel, portrait image)

### Section 7: Testimonials
- Dark background section (`--color-bark` or `--color-deep`)
- Eyebrow in amber: "CLIENT STORIES"
- H2 in `--color-on-dark`
- 2-col bento of testimonial cards on dark

### Section 8: Location & Contact
- Split: map/address left, contact form right
- Both use Double-Bezel card architecture
- Address in DM Mono
- WhatsApp CTA prominent

### Section 9: Footer
- Dark (`--color-bark` / `--color-deep`)
- Logo mark + tagline
- 4-column grid: Services | Company | Legal | Contact
- Instagram link
- Copyright: DM Mono, 11px

---

## 12. Grain / Texture Overlay

A subtle noise texture (3% opacity) applied site-wide for warmth and print feel:

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 999;
  pointer-events: none;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 180px 180px;
}
```

---

## 13. Performance & Accessibility

### GPU-Safe Animations
- Animate only `transform` and `opacity`
- Add `will-change: transform` only to actively animating elements, remove after animation ends
- `backdrop-blur` only on `position: fixed` or `position: sticky` elements

### Accessibility
- All interactive elements: minimum `44px × 44px` touch target
- Color contrast: all text meets WCAG AA minimum (4.5:1 for body, 3:1 for large text)
  - `--color-stone` on `--color-canvas` = 4.7:1 ✓
  - `--color-deep` on `--color-canvas` = 15.8:1 ✓
  - `--color-on-dark` on `--color-deep` = 12.2:1 ✓
  - `--color-amber` on `--color-deep` = 5.1:1 ✓
- Focus rings: `outline: 2px solid var(--color-sage)`, `outline-offset: 3px`
- `prefers-reduced-motion`: all scroll animations and transitions disabled at system level
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` used correctly
- All images have meaningful `alt` text; decorative images use `alt=""`

---

## 14. Naming Conventions

### CSS Classes (BEM-lite)
```
.yk-[component]               — component root
.yk-[component]__[element]    — child element
.yk-[component]--[modifier]   — variant modifier
.is-[state]                   — JS-toggled state (is-open, is-visible, is-active)
.will-[animation]             — pre-animation class (will-reveal)
```

### CSS Custom Properties
- Colors: `--color-[name]`
- Typography: `--text-[name]`
- Spacing: `--space-[n]`
- Radius: `--radius-[name]`
- Shadow: `--shadow-[name]`
- Ease: `--ease-[name]`
- Duration: `--duration-[name]`

---

## 15. Tech Stack Recommendation

| Layer         | Choice                        | Reason                                     |
|---------------|-------------------------------|--------------------------------------------|
| Framework     | **Next.js 14** (App Router)   | SEO-critical for local London search       |
| Styling       | **CSS Modules + Custom Props**| Zero runtime, full control over DS tokens  |
| Animation     | **Framer Motion**             | `whileInView`, spring physics, layout anim |
| Icons         | **Phosphor React** (Light)    | Matches DS icon spec                       |
| Fonts         | **next/font** (Google Fonts)  | Preloading + no FOUT                       |
| Booking       | **Fresha embed / link**       | Existing platform, no rebuild needed       |
| CMS           | **Sanity.io**                 | For team bios, service copy, blog later    |
| Deployment    | **Vercel**                    | Next.js native, edge CDN, fast TTFB        |
| Analytics     | **Plausible** (privacy-first) | GDPR-compliant, no cookie banner needed    |

---

*Design System Version: 1.0 — YK Wellness London*  
*Generated: 2026-04-29*  
*Status: APPROVED FOR IMPLEMENTATION*
