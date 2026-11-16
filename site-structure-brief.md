# lukasziegler.com — Site Structure Brief
*Design brief for generating layout variations with placeholder content.*

---

## Identity

**Person:** Lukas Ziegler — Product Designer & Handpan Facilitator, based in Salzburg, Austria.
**Tone:** Warm, grounded, curious. Not esoteric. Not corporate. Personal without being self-indulgent.
**Two facets of one identity:** digital product work (≈10 years, B2B/B2C) + handpan teaching and sound facilitation.
**Primary goal:** Convince and inspire. Show versatility and depth. Distinct CTAs per section (sound → book a workshop; design → CV / case studies).
**Languages:** English (default) + German (`/de/` prefix). All layout variations in English.

**Color palette (Avenco theme):**
- Primary: `#4235d0` (indigo)
- Accent: `#f969cd` (pink)
- Dark background: `#120f3e`
- Text: near-black on white / near-white on dark

**Typography:** Nunito (self-hosted). Clean, rounded, approachable.

**Available images (real, use as placeholder references):**
- `/img/lukas-handpan-closeup@desktop.jpg` — close-up of hands on handpan
- `/img/lukas-handpan-orangerie@desktop.jpg` — full portrait in orangerie setting
- `/img/mockup-ipad.png`, `/img/mockup-iphone.png` — device mockups for design work
- `/img/iceland.jpg` — landscape/travel
- `/img/panel-bright.jpg`, `/img/panel-dark.jpg` — atmospheric background panels

---

## Navigation

```
Home  |  Design  |  Sound  |  Events  |  More ▾
                                          About
                                          Contact
                                          Imprint
                                          Privacy
```

- "Design" links to `/projects/` (portfolio)
- "More" is a dropdown
- No language switcher in nav yet (planned)

---

## Pages

---

### 1. Home `/`

**Purpose:** First impression. Establish who Lukas is, invite exploration of both worlds.

**Layout blocks (in order):**

| Block | Content |
|---|---|
| **Hero** | Full-width or split. Photo of Lukas (`lukas-handpan-closeup@desktop.jpg`). Name: "Lukas Ziegler". Title: "Product Designer & Handpan Facilitator". Bio: "For more than 20 years, I've followed my passion — and along the way, discovered new sides and interests of myself. I approach everything I do with an open and curious mind, learning and evolving with each step." CTA button: "See my work" → scrolls to projects grid. |
| **Projects grid** | Section label: "Selected Work". 6 cards in a 3-column grid (2-col on tablet, 1-col mobile). Each card: cover image, project title, subtitle (e.g. "Product Design", "UX Research"). "View all →" link to `/projects/`. |
| **Subscribe teaser** *(optional, disabled for now)* | Mailing list CTA. Placeholder: "Join my mailing list — get occasional updates on workshops and design thinking." Email input + subscribe button. |

**Primary CTA:** "See my work" (scroll to projects grid)
**Secondary CTA:** none on homepage

---

### 2. Projects / Design `/projects/`

**Purpose:** Full portfolio overview. Visual, browsable. Entry point from Design nav item.

**Layout blocks (in order):**

| Block | Content |
|---|---|
| **Page header** | Title: "Design". Optional subtitle: "Selected product design and UX work." |
| **Project grid** | All projects, paginated (6 per page). 3-column grid. Each card: cover image, title, subtitle tag (e.g. "UX Design", "Product Strategy", "Design System"). Clicking → project detail page. |
| **Pagination** | Previous / Next page controls. |

**Primary CTA:** Click project card to open detail
**Special UI:** Grid with hover state on cards (image zoom or overlay)

---

### 3. Project Detail `/projects/[slug]`

**Purpose:** Full case study or project overview. Convince design clients and recruiters.

**Layout blocks (in order):**

| Block | Content |
|---|---|
| **Page header** | Title: "[Project Name]". Subtitle tag: "[Category]" e.g. "Product Design – ClimatePartner". |
| **Cover image** | Full-width image. |
| **Case study body** | Long-form Markdown content: context, role, process, outcome. Supports images, galleries, embedded video. |
| **Project navigation** | "Next Project →" link with title. |

**Frontmatter fields available:** `title`, `subtitle`, `image`, `weight` (sort order), `description`, `draft`
**Primary CTA:** Next project navigation

---

### 4. Sound `/sound/`

**Purpose:** Landing page for the handpan / sound facilitation side. Inform, build trust, drive bookings.

**Layout blocks (in order):**

| Block | Content |
|---|---|
| **Hero image** | Full-width. `lukas-handpan-orangerie@desktop.jpg`. |
| **Page header** | Title: "Sound". Description: "Handpan workshops, retreats and private lessons — an intuitive, meditative approach to playing one of the world's most resonant instruments." |
| **Intro paragraph** | "The handpan is one of the most meditative instruments in the world — its resonance invites you to slow down, listen deeply, and play from the heart. I've been teaching handpan using the Malte Marten Method, an intuitive, pattern-based approach that gets complete beginners playing real music within a few hours." |
| **Beginner Workshops** | H2 section. 4-hour workshops. No experience or instrument needed. D-Kurd tuning. Instruments to borrow. |
| **Intermediate Workshops** | H2 section. 3-hour workshops. Builds on beginner foundation. |
| **Retreats** | H2 section. Multi-day immersions in the Austrian mountains. Two 2026 dates: April/May (experienced players) and September (beginners). |
| **Handpan Showroom** | H2 section. Small collection at Lukas's flat in Salzburg. Try-and-buy. Book via Calendly. |
| **Book a Spot** | H2 section. All workshops on TicketTailor. Contact: `anmeldung@lukasziegler.com` or WhatsApp. |

**Primary CTA:** "Book a Spot" → TicketTailor link
**Secondary CTA:** Calendly link for showroom

---

### 5. Events `/events/`

**Purpose:** List all upcoming and past sound events. Drive ticket sales.

**Layout blocks (in order):**

| Block | Content |
|---|---|
| **Page header** | Title: "Events". Description: "Upcoming workshops, sound journeys, and retreats." |
| **Toggle** | "Upcoming / Past" tab or toggle. Upcoming shown by default. |
| **Event cards (upcoming)** | Each card: date, title, event type badge (workshop / sound-journey / retreat / lesson), city, price, "Book Now →" CTA. |
| **Event cards (past)** | Same layout, subdued styling. No booking CTA. |

**Frontmatter fields:** `title`, `type` (workshop / sound-journey / retreat / lesson), `date`, `endDate`, `location`, `city`, `price`, `draft`
**Primary CTA:** "Book Now" → TicketTailor link per event

---

### 6. Event Detail `/events/[slug]`

**Purpose:** Full event info page. SEO value for local handpan searches.

**Layout blocks (in order):**

| Block | Content |
|---|---|
| **Event header** | Title. Type badge. Date + time. Duration. Location + city. Price. |
| **Body content** | Long-form description: what to expect, what to bring, who it's for. |
| **Booking CTA** | Prominent button: "Book your spot →" → TicketTailor. |
| **Contact note** | "Questions? [anmeldung@lukasziegler.com](mailto:anmeldung@lukasziegler.com) or WhatsApp." |

**Primary CTA:** "Book your spot →"

---

### 7. About `/more/about/`

**Purpose:** The full Lukas story. Builds personal connection and credibility across both worlds.

**Layout blocks (in order):**

| Block | Content |
|---|---|
| **Page header** | Title: "About". |
| **Intro paragraph** | "For more than 20 years, I've followed my passion — and along the way, discovered new sides and interests of myself. [...]" |
| **Work life** | H2. Career narrative: CS/Media Informatics → Red Bull Media House (Web Dev → UX Engineer) → sabbatical Nepal 2019 → Red Bull IT Innovation → ClimatePartner Product Designer 2022 → now: retreats, sound meditations, handpan workshops. |
| **Personal interests** | H2. Technology, arts, outdoor sports, nature, travel, mindfulness. |
| **Side projects** | H2. German Athletics Association, LMU Roomfinder, Climate Mind. |

**Primary CTA:** Implied → navigate to Sound or Design

---

### 8. Contact `/more/contact/`

**Purpose:** Simple, low-friction contact. No long form.

**Layout blocks (in order):**

| Block | Content |
|---|---|
| **Page header** | Title: "Contact". |
| **Contact options** | Email: `lukas@lukasziegler.com`. WhatsApp link. For workshop bookings → redirect to `anmeldung@lukasziegler.com`. |
| **Contact form** *(optional)* | Name, email, message. Handled via Formspree. |

**Primary CTA:** Email link

---

### 9. Imprint `/more/imprint/`

**Purpose:** Legal requirement (Austrian/German law). Minimal design.

**Layout blocks:** Page header + body text only. No images or CTAs. Maintained manually in EN and DE.

---

### 10. Privacy Policy `/more/privacy/`

**Purpose:** GDPR compliance. Minimal design.

**Layout blocks:** Page header + body text only. No images or CTAs. Maintained manually in EN and DE.

---

## Content Types (for reference)

### Project
```
title: "Project Name"
subtitle: "Category"          # e.g. "Product Design", "UX Research"
description: "One-liner"
image: "/img/projects/..."
weight: 10                    # lower = appears first
draft: true
```

### Event
```
title: "Handpan Beginner Workshop"
type: "workshop"              # workshop | sound-journey | retreat | lesson
date: 2026-09-12T14:00:00+02:00
endDate: 2026-09-12T17:00:00+02:00
location: "Studio Name"
city: "Salzburg"
price: "89 Euros"
draft: true
```

---

## Layout Variations Requested

Please generate **one distinct layout variation per page** (pages 1–8 above), using placeholder content drawn from the copy in this brief. Each variation should reflect the tone (warm, grounded, not corporate) and the dual identity (design + sound). Layouts should work at desktop width (1280px) with mobile consideration noted.

Pages needing the most design attention:
1. **Home** — sets the whole tone; the hero + projects grid is the critical composition
2. **Sound** — needs to feel distinct from the Design section; more atmospheric/sensory
3. **Events** — the upcoming/past toggle is a key UI moment
4. **Project Detail** — needs to feel like a proper case study, not a blog post
