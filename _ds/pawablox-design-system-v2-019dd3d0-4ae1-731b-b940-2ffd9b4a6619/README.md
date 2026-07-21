# pawabloX Design System

The official design system of **betPawa**, a leading sports-betting and gaming platform across Africa. pawabloX packages the brand's full visual language — colors, typography, icons, primitives, components, and templates — into a live, browsable surface that designers, developers, and AI tools can all consume from a single source of truth.

## Sources

This system was assembled from the following references:

- **Figma — pawabloX v2 Components Design System** (mounted as virtual filesystem). Pages: Foundations, Logotypes, Colors, Typography, Button, Icon-Button, Bet-Button, Deposit-Button, Shortcut-Button, Badge, Checkbox, Radio-Button, Switch, Input, List-Item, Alerts, Toast, Select, Tooltip, Segmented-Control, Chip, Header, Top-Nav, Bottom-nav, Sport-Card, Filter-panels, OSM-Notification, Tabs, Scoreboard, Bet-Markets, Section-Header, USP-Container, Modal, Bottom-Sheet, Backdrop, Button-Group, Footer, Templates-Pages, Homepage, Sports, MyBets, Event, Betslip, Post-Bet, Login-Register, Forgot-password, Account, Casino, Virtuals, Deposit-Withdraw, Statement, Notifications, Help, Responsible-Gambling, Select-Country, Skeletons, Native-Screens, News, Rules, T-C, Privacy-Policy, Cookies-Policy, Top-Search, Geo-Block, Something-went-wrong, 404-500-Error, Back-to-top, Progress-Bar, Empty-States.
- **Figma — pawaIconZ v02** — 126 SVG icons across 6 categories (pawaIconz, Brand-Custom, Color Icons, Sport Icons, Social Media, Payments) plus 207 country flags.
- **Reference site** — https://pawablo-x-or-v-2-components-design-system-cover-1.replit.app
- **Source repo** — `AlienGain/pawablox-design-system`. Imported subtrees: `packages/tokens/scss/vars/` (raw `_colors.scss`, semantic `_theme.css`, `_typography.scss`, `_spacing.scss`, `_shadows.scss`, `_other.scss`) and `packages/icons/src/icons/` (138 `IconXxx.tsx` files → bundled to `assets/icons/sprite.svg`).

## Product context

**betPawa** is a sports-betting and online-casino product available across Africa. The product is mobile-first (mobile-web is the dominant surface), with a structurally similar desktop layout. Core surfaces:

- **Sports** — pre-match and live betting on football, basketball, tennis and more. Markets, scoreboards, bet markets, sport cards.
- **Casino & Virtuals** — game tiles, providers, jackpots.
- **Bet experience** — Betslip, MyBets (open / won / lost / cashed-out / void), Post-Bet flow.
- **Account** — Login/Register, Deposit/Withdraw, Statement, Notifications, Help, Responsible Gambling, Forgot Password.
- **Discovery & info** — Homepage, News, Help, T&Cs, Privacy/Cookies policy, Geo-Block / Error states.

Tone is action-oriented and confident — punchy verbs ("Place Bet", "Cash Out", "Deposit"), no-nonsense numerics (odds, stakes, balance) and a strong promotional rhythm (boosted markets, USP banners, jackpots).

---

## Index — what's in this folder

| Path | Purpose |
|---|---|
| `colors_and_type.css` | All color tokens (brand, neutral, semantic), type scale, radii, spacing, shadows, motion. **Import this in every artifact.** |
| `assets/` | Logos (P-mark, full lockup), icon SVGs from pawaIconZ, social/payment marks. |
| `preview/` | Cards rendered in the Design System tab (colors, type, components, etc). |
| `ui_kits/betpawa/` | Click-thru hi-fi mock of the betPawa mobile experience (Homepage, Sports, Betslip, MyBets, Account). |
| `SKILL.md` | Skill manifest for use as an Agent Skill (e.g. in Claude Code). |
| `README.md` | This file. |

### Preview cards (Design System tab)

**Foundations · tokens** — `colors-brand.html` · `colors-neutral.html` · `colors-semantic.html` · `colors-semantic-tokens.html` · `type-scale.html` · `type-weights.html` · `spacing.html` · `radii.html` · `shadows.html`.
**Foundations · brand** — `brand-logo.html` · `iconography-sample.html` · `iconography-grid.html`.
**Foundations · primitives** — `buttons.html` · `inputs.html` · `form-controls.html` · `badges.html` · `chips.html` · `alerts.html` · `toasts.html` · `segmented.html` · `tabs.html`.
**Components** — `header.html` · `bottom-nav.html` · `bet-button.html` · `deposit-button.html` · `sport-card.html` · `bet-slip.html` · `filter-panels.html` · `osm-notification.html` · `list.html` · `league-selection-panel.html` · `tabs.html` · `scoreboard.html` · `bet-markets.html` · `section-header.html` · `modal.html` · `bottom-sheet.html` · `footer.html`.
**Pages** — `ui_kits/betpawa/index.html` (mobile homepage composition).

> Every card is built from the Figma .fig source and the production `_theme.css` tokens + `pIcon-*` sprite from `AlienGain/pawablox-design-system`. Adding more components as we go; this list grows.

---

## CONTENT FUNDAMENTALS

**Voice.** Direct, confident, transactional. The product moves money on every screen, so copy reads like a teller — short, factual, no flourish.

**Casing.**
- **Title Case** for primary CTAs and section headers: `Place Bet`, `Cash Out`, `Deposit`, `My Bets`, `Top Leagues`.
- **Sentence case** for inline labels, helper text and body: `Enter your phone number`, `You can change this later.`
- **UPPERCASE** for tiny tags only (12px / 10px) — `LIVE`, `BOOSTED`, `NEW`, `HOT`. Reserved for state badges.

**Person.** Second-person *you* for instructions and empty states (`You haven't placed any bets yet`); first-person *my* for personal sections (`My Bets`, `My Account`).

**Numbers.** Currency always shown with code, no symbol clash: `KES 1,250.00`, `NGN 500`. Odds shown to 2 decimals: `2.45`, `1.78`. Stake/winnings always show currency.

**Punctuation.** No trailing periods on labels, buttons or single-line empty states. Periods on full sentences in body and helpers only.

**No emoji** in product chrome. Emoji-style imagery is reserved for the **Modal-Illustrations** set (small spot illustrations in onboarding / empty states).

**Examples (lifted from the Figma):**
- Buttons: `Place Bet`, `Add to Betslip`, `Cash Out`, `Deposit`, `Withdraw`, `Continue`, `Log In`, `Register`.
- Empty: `No open bets`, `No notifications yet`, `You don't have any results to show`.
- Promo: `Boosted odds`, `Free bet`, `Jackpot`, `Today's specials`.
- Errors: `Something went wrong`, `Couldn't load events. Try again.`
- Status: `LIVE`, `HT`, `FT`, `WON`, `LOST`, `OPEN`, `VOID`, `CASHED OUT`.

---

## VISUAL FOUNDATIONS

**Color philosophy.** A single high-energy brand accent (lime `#9CE800`) drops into a near-monochrome neutral system. Color does work — semantic only — never decoration. Orange = warning/promo, Purple = special-promo/jackpot, Teal = info, Yellow = featured/boost, Red = danger/lost, Green-lime = brand/won/CTAs.

**Light + Dark are equal citizens.** Every component ships both. Dark mode flips surfaces to slate (`#171A1C` page, `#252A2D` surface, `#2F3437` surface-2), keeps brand lime identical, and shifts neutral text to white→slate-300.

**Typography.** **Roboto** is the only typeface. Only **Regular (400)** and **Bold (700)** are used in product UI (Black/900 reserved for display moments). The scale is tight: 10/12/14/16/18/20/24px with 4-pt line-height steps. Bold is used liberally — it's the brand's voice.

**Spacing.** 4-px base grid. Components hit `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64`. Tight on mobile, generous on desktop.

**Corner radii.**
- `8px` — buttons, inputs, badges, chips (the default).
- `12px` — cards, modals, sport cards.
- `30px` — pill buttons, segmented controls.
- `9999px` — avatars, dot badges, switches.

**Borders.** Hairline 1px in `--neutral-100` (light) / `--neutral-600` (dark). Rare. Most separation is by surface elevation, not strokes.

**Shadows.** Used sparingly. Bottom-sheets and modals get `shadow-lg`; sport cards get `shadow-sm`. **No glows, no colored shadows.** Dark mode mostly drops shadows in favor of surface-2 contrast.

**Backgrounds.** Flat. The page is solid `--bg-page`; surfaces stack via `--bg-surface` / `--bg-surface-2`. No gradients in chrome. The only gradients allowed are:
1. **Boosted-odds capsule** (purple → magenta, very small).
2. **Hero protection gradient** on full-bleed marketing imagery (bottom 30%, black → transparent).
No noise, no patterns, no textures.

**Imagery.** Sport photography is full-bleed, slightly cool/cinematic, often with team kits visible. Casino game art is high-saturation, brand-supplied. Illustrations (Modal-Illustrations) are flat, friendly, brand-lime accented.

**Iconography.** **pawaIconZ only** — see `ICONOGRAPHY` below. Strict rule: no Lucide, no Heroicons, no react-icons in product chrome.

**Motion.**
- Default: `200ms cubic-bezier(.4,0,.2,1)` for state changes.
- Entrance/exits: `320ms cubic-bezier(.16,1,.3,1)` (ease-out, no overshoot).
- Hover: `120ms` opacity/color cross-fade.
- Press: scale `0.97` + 80ms.
- Bottom sheets translate from below; modals fade + scale 0.96 → 1.

**Hover.** Opacity decrease on subtle items (`.85`); for filled buttons, swap `--brand-500` → `--brand-600`. Outline buttons: fill turns `--neutral-50` (light) / `--neutral-600` (dark).

**Press.** Scale 0.97 plus a faint inner shadow on filled buttons. Fast — 80ms in, 200ms back.

**Focus.** 2px outline in `--brand-500` with 2px offset. Always visible on keyboard focus.

**Transparency / blur.** Used only for **Backdrop** (modal/bottom-sheet scrim — `rgba(23,26,28,.5)` + 8px blur on iOS-style sheets). Otherwise opaque.

**Cards.**
- Sport card: `--bg-surface`, radius 12, `shadow-sm`, no border. 12-16px internal padding.
- List item: no card; hairline divider between rows in `--neutral-100`.
- Modal: `--bg-page`, radius 16 (top corners only on bottom-sheet), `shadow-lg`.

**Layout rules.**
- Header (top nav) is fixed at top. Bottom-nav is fixed at bottom on mobile.
- Safe-area: 16px horizontal padding on mobile, 40px on desktop ≥1024.
- Max content width 1280px.

**Density.** Mobile is dense by design — bookmakers reward fast information. List items are 44–56px tall. Tables of markets fit 3 outcome cells per row.

---

## ICONOGRAPHY

**System: pawaIconZ.** A custom 24×24 icon set drawn with a consistent 1.5–2px stroke, rounded line caps and joins, optical balance at 16/20/24 px sizes. All icons are SVG, single-color, fillable via `currentColor`. Source: pawaIconZ v02 Figma file (126 icons across pawaIconz / Brand-Custom / Color Icons / Sport Icons / Social Media / Payments).

In production, icons are rendered through a `<PawaIcon name="bell" size={20} />` component that uses CSS `mask-image` so they accept color via Tailwind/`currentColor`.

**Categories (counts from source):**
- `pawaIconz` (99) — chrome, controls, status, account.
- `Brand-Custom` (5) — proprietary marks (key-round, shield-check, fingerprint).
- `Color Icons` (2) — multi-color spots used in onboarding.
- `Sport Icons` (7) — football, basketball, tennis, etc.
- `Social Media` (5) — Facebook, Instagram, Telegram, X, YouTube.
- `Payments` (6) — MTN, Airtel, Orange, Vodafone, Mastercard, Visa.

**Country flags.** 207 SVG flags (`Flags/`) covering every market betPawa operates in plus all sport-relevant nations. Used in scoreboards, league lists, country pickers.

**Production sprite.** All 138 production icons are bundled into a single sprite at `assets/icons/sprite.svg`, generated from the `IconXxx.tsx` source in `pawablox-design-system/packages/icons/src/icons/`. Every glyph is a `<symbol>` with `id="pIcon-Name"` (PascalCase, e.g. `pIcon-Home`, `pIcon-FootballBall`, `pIcon-CircleDollarSign`). Use it like:

```html
<svg class="p-icon p-icon--md"><use href="../assets/icons/sprite.svg#pIcon-Home"/></svg>
```

The sprite paint themselves via `currentColor` (a couple legacy ones are hard-coded `#252A2D` — wrap those in a darker container if needed). The full name list is in `assets/icons/manifest.json`.

**No substitution allowed.** With the production sprite shipped, never hand-draw, render as emoji, swap to Lucide, or substitute a Unicode glyph. If you need a glyph that isn't in the 138, ask before adding.

**Logo.** `assets/logo-pmark.svg` is the standalone "P" mark. The full lockup `betpawa` is the same P glyph followed by the lowercase wordmark in Roboto Black. Light-mode logos are slate (`#252A2D`) on light backgrounds; dark-mode logos are white on slate. Brand-lime is **not** used as the logo color.

**No emoji** in product chrome. No Unicode arrows / dingbats / box-drawing as icons.

