# Page Builder Components - Implementation Plan

## Overview

Complete the page builder component library by implementing 25 new components across 7 categories: Navbar (2), Hero (3), About (4), Testimonials (4), FAQ (4), Services (4), and Footer (4). Each component will have full props configurability, schema definitions for the properties panel, Storybook stories, and will be tested via Playwriter on localhost:3000/pages/create.

## Problem Statement

The page builder currently only has Navbar1, Navbar2, and Hero1 implemented. Users need a complete library of landing page components to build professional websites.

## Users & Personas

- **Website Builders**: Non-technical users using the drag-and-drop page builder to create landing pages
- **Developers**: Technical users who may customize or extend components

---

## Phase 0: Properties Panel Field Upgrades (PREREQUISITE)

Before building components, upgrade the properties panel field types.

### Task 0.1: Image Uploader Field

**Reference Images:**
- `temp/image-uploader-image.png` - Upload tab with dropzone
- `temp/image-uploader-link.png` - URL tab with input field

**Current State:** Simple text input for image URL

**New Design:**
- Image preview area with delete button (X) in top-right corner
- Tab switcher: **Upload** | **URL**
- **Upload tab**: Dropzone with "Drop image or click to upload" placeholder
- **URL tab**: Text input for pasting image URL
- Preview updates when image is uploaded or URL is entered

**Files to Modify:**
- `/components/page-builder/builder/PropertiesPanel.tsx` - Replace `case "image":` implementation
- May need new component: `/components/page-builder/builder/ImageUploadField.tsx`

---

### Task 0.2: Link Selector Dropdown

**Purpose:** Replace simple URL text inputs with a smart link selector

**New Design:**
- Dropdown/popover with sections:
  1. **Sections** - List of sections on the current page (clickable to select `#section-id`)
  2. **Pages** - Empty for now, just shows title "Pages" (multi-page not yet implemented)
  3. **URL** - Text input for custom external URLs

**Behavior:**
- When user selects a Section, populate the field with `#section-id`
- When user types in URL field, use that value directly
- Pages section is placeholder only (disabled or shows "Coming soon")

**Files to Modify:**
- `/components/page-builder/builder/PropertiesPanel.tsx` - Add new field type or modify `case "url":`
- May need new component: `/components/page-builder/builder/LinkSelectorField.tsx`
- Need to read sections from page store to populate the Sections list

---

## Components to Build

### NAVBAR (2 components)

#### Navbar3 (Reference: navbar18)
- **Layout**: Centered navigation with logo left, links center, buttons right
- **Thumbnail**: `/public/thumbnails/navbar-3.png` - Rounded container with border
- **Features**: Dropdown menus, mobile sheet menu with accordion
- **Props**: Same as Navbar1Props (logo, links, buttons)

#### Navbar4 (Improvised)
- **Layout**: Simple horizontal bar, logo left, links center, button right, no floating/border
- **Thumbnail**: `/public/thumbnails/navbar-4.png` - Full-width simple bar
- **Features**: Clean minimal design, no dropdowns, mobile hamburger
- **Props**: Same as Navbar1Props

---

### HERO (3 components)

#### Hero2 (Variation of Hero1)
- **Layout**: Same as Hero1 but with image on LEFT by default (direction: rtl)
- **Thumbnail**: `/public/thumbnails/hero-2.png`
- **Features**: Title, description, 2 CTAs, image on left
- **Props**: Same as Hero1Props (config with direction, title, description, cta, image)

#### Hero3 (Reference: hero10 - without brands)
- **Layout**: Centered text, badge on top, headline, description, 2 buttons horizontal
- **Thumbnail**: `/public/thumbnails/hero-3.png` - Text-only centered hero
- **Features**: Badge/label, centered text alignment, dual CTAs, NO image
- **Props**: Hero3Props (config.bgColor, badge, title, description, cta array)

#### Hero4 (Reference: hero190)
- **Layout**: Centered with bordered sections, decorative diagonal patterns
- **Thumbnail**: `/public/thumbnails/hero-4.png`
- **Features**: Headline addressing pain points, description, single CTA with icon
- **Props**: Hero4Props (config.bgColor, title, description, cta, image optional)

---

### ABOUT (4 components)

#### About1 (Reference: about1)
- **Layout**: Title at top, large image below, text content below image
- **Thumbnail**: `/public/thumbnails/about-1.png` - Title, large image, text
- **Features**: Multi-section with mission statement, large hero image, descriptive text
- **Props**: About1Props (config.bgColor, title, description1, image, description2, description3)

#### About2 (Reference: about14)
- **Layout**: 2-column - image left, text sections right
- **Thumbnail**: `/public/thumbnails/about-2.png`
- **Features**: Image, title, description, additional section with sub-title
- **Props**: About2Props (config.bgColor, title, description, image, section.title, section.description)

#### About3 (Improvised)
- **Layout**: Image on left, text content on right
- **Thumbnail**: `/public/thumbnails/about-3.png`
- **Features**: Image, title, multiple text paragraphs
- **Props**: About3Props (config.bgColor, config.direction, title, description1, image, description2)

#### About4 (Improvised)
- **Layout**: Text on left, image on right
- **Thumbnail**: `/public/thumbnails/about-4.png`
- **Features**: Flipped version of About3
- **Props**: Same as About3Props with direction support

---

### TESTIMONIALS (4 components)

#### Testimonials1 (Reference: testimonial6)
- **Layout**: Title centered, 3 testimonial cards in a row, navigation dots
- **Thumbnail**: `/public/thumbnails/testimonials-1.png` - 3 cards with navigation
- **Features**: Carousel/grid of testimonial cards, each with quote text, navigation controls
- **Props**: Testimonial1Props (config.bgColor, title, navigation.bgColor/iconColor/borderColor, testimonials[])

#### Testimonials2 (Reference: testimonial15 - without brands)
- **Layout**: 2-column - left has title/description/CTA, right has stacked testimonial cards
- **Thumbnail**: `/public/thumbnails/testimonials-2.png`
- **Features**: Title, description, CTA button, testimonial cards with avatars
- **Props**: Testimonial2Props (config.bgColor/direction, title, description, testimonials[] with images, cta)

#### Testimonials3 (Reference: testimonial14 - without avatar)
- **Layout**: Large centered quote, centered text, pagination dots below
- **Thumbnail**: `/public/thumbnails/testimonials-3.png` - Single centered testimonial
- **Features**: Large quote, star rating optional, carousel dots
- **Props**: Testimonial3Props (config.bgColor, title, testimonials[] with images, navigation)

#### Testimonials4 (Reference: testimonial13)
- **Layout**: Centered with overlapping avatars at top, single quote below
- **Thumbnail**: `/public/thumbnails/testimonials-4.png` - Avatars + centered quote
- **Features**: Overlapping avatar images, centered testimonial quote, navigation dots
- **Props**: Similar to Testimonial3Props

---

### FAQ (4 components)

#### Faq1 (Reference: faq1)
- **Layout**: Title at top, accordion items below (full width)
- **Thumbnail**: `/public/thumbnails/faq-1.png` - Simple accordion
- **Features**: Accordion with expand/collapse, clean minimal design
- **Props**: Faq1Props (config.bgColor, title, questions[])

#### Faq2 (Reference: faq7)
- **Layout**: 2-column - left has title/description/CTA, right has accordion
- **Thumbnail**: `/public/thumbnails/faq-2.png`
- **Features**: Support CTA, accordion FAQ items
- **Props**: Faq2Props (config.bgColor/direction, title, description, cta, questions[])

#### Faq3 (Reference: faq6)
- **Layout**: Title centered, 2-column grid of FAQ items (not accordion)
- **Thumbnail**: `/public/thumbnails/faq-3.png` - Two columns of Q&A
- **Features**: Grid layout, numbered or plain Q&A pairs, always visible answers
- **Props**: Faq3Props (config.bgColor, title, questions[])

#### Faq4 (Reference: faq2)
- **Layout**: Title at top, simple rows with question/answer separated by borders
- **Thumbnail**: `/public/thumbnails/faq-4.png` - Simple bordered rows
- **Features**: Clean rows, question bold, answer muted, border separators
- **Props**: Same as Faq1Props

---

### SERVICES (4 components)

#### Services1 (Improvised - based on thumbnail)
- **Layout**: Title/description/CTA left, 4 service cards in 2x2 grid right
- **Thumbnail**: `/public/thumbnails/services-1.png`
- **Features**: Service cards with icon placeholder, title, description
- **Props**: Services1Props (config.bgColor/direction, title, description, cta, services[] with image/title/description)

#### Services2 (Like Testimonials1)
- **Layout**: Title centered, 4 cards in a row, navigation dots
- **Thumbnail**: `/public/thumbnails/services-2.png` - Card carousel
- **Features**: Horizontal scrolling cards, navigation controls
- **Props**: Services2Props (config.bgColor, title, navigation, services[])

#### Services3 (Reference: services1)
- **Layout**: Title at top, 2 large service cards below
- **Thumbnail**: `/public/thumbnails/services-3.png`
- **Features**: Large cards with title, description, feature list with checkmarks
- **Props**: Services3Props (config.bgColor, title, services[] with title/description)

#### Services4 (Reference: services3)
- **Layout**: Title/description at top, list of service items below
- **Thumbnail**: `/public/thumbnails/services-4.png` - Text-only list
- **Features**: Simple text list, no images, title + description per item
- **Props**: Services4Props (config.bgColor, title, services[] simple)

---

### FOOTER (4 components)

#### Footer1 (Reference: footer7)
- **Layout**: Logo/description left, 3 link columns right, socials + copyright bottom
- **Thumbnail**: `/public/thumbnails/footer-1.png`
- **Features**: Logo, company description, navigation link columns, social icons, copyright
- **Props**: Footer1Props (config.bgColor, logo, description, links[], socials[], copyright)

#### Footer2 (Variation of Footer1)
- **Layout**: Same as Footer1 but with socials and copyright centered
- **Thumbnail**: `/public/thumbnails/footer-2.png`
- **Features**: Centered bottom section
- **Props**: Same as Footer1Props

#### Footer3 (Improvised with newsletter)
- **Layout**: Newsletter section at top (input + button), then logo/links/socials/copyright
- **Thumbnail**: `/public/thumbnails/footer-3.png` - With newsletter
- **Features**: Email input, subscribe button, standard footer content
- **Props**: Footer3Props (config.bgColor, newsletter.title/placeholder/buttonText, logo, description, links[], socials[], copyright)

#### Footer4 (Improvised with newsletter variation)
- **Layout**: Similar to Footer3, newsletter prominent
- **Thumbnail**: `/public/thumbnails/footer-4.png`
- **Features**: Newsletter CTA, footer links, socials
- **Props**: Same as Footer3Props

---

## Technical Requirements

### For Each Component, Create:

1. **Component File**: `/components/page-builder/components/{Name}.tsx`
   - Use `"use client"` directive
   - Import props from `@/lib/page-builder/component-props`
   - Wrap in `<section className="@container">`
   - Use container queries (`@3xl:`, `@5xl:`) for responsive design
   - Implement mobile + desktop layouts
   - Use shadcn/ui components (Button, Sheet, Accordion, etc.)
   - Use Next.js Image and Link components

2. **Props Type**: Add to `/lib/page-builder/component-props.ts`
   - Follow existing patterns (config, title, description, etc.)
   - Use shared types (LinkItem, ButtonItem, CtaItem, etc.)

3. **Schema Definition**: Add to `/lib/page-builder/schemas/{category}.ts`
   - Define groups (FieldGroup or ArrayGroup)
   - Provide sensible defaults
   - Use appropriate field types (text, color, image, url, etc.)

4. **Registry Entry**: Add to `/lib/page-builder/registry.ts`
   - Import component and schema
   - Add to componentRegistry object

5. **Storybook Stories**: `/components/page-builder/components/{Name}.stories.tsx`
   - Default story with typical usage
   - MobileView and TabletView with constrained containers
   - Color/content variations as needed
   - Use `@container` decorator

### Patterns to Follow

- **Container Queries**: Use `@3xl` (768px) and `@5xl` (1024px) breakpoints
- **Colors**: Use hex values in defaults (`#ffffff`, `#692e0e`, `#141414`, etc.)
- **Mobile Menus**: Use shadcn Sheet component for hamburger menus
- **Accordions**: Use shadcn Accordion for FAQ/collapsible content
- **Images**: Use Next.js Image with proper width/height/alt props

### Testing Process

After implementing each component:
1. Run Storybook to verify component renders
2. Use Playwriter MCP to test on `http://localhost:3000/pages/create`
3. Verify component appears in marketplace
4. Test drag-and-drop to canvas
5. Test properties panel configuration

---

## Implementation Order

### Phase 0: Properties Panel Field Upgrades (PREREQUISITE)
0. **Image Uploader Field** - New tabbed image upload/URL component
1. **Link Selector Dropdown** - Smart link picker with Sections/Pages/URL

### Phase 1: Core Sections (Most Used)
2. Hero2, Hero3, Hero4
3. About1, About2, About3, About4

### Phase 2: Social Proof
4. Testimonials1, Testimonials2, Testimonials3, Testimonials4

### Phase 3: Information
5. Faq1, Faq2, Faq3, Faq4
6. Services1, Services2, Services3, Services4

### Phase 4: Navigation & Footer
7. Navbar3, Navbar4
8. Footer1, Footer2, Footer3, Footer4

---

## File Changes Summary

### New Files (25 components × 2 files each = 50 files)
- 25 component `.tsx` files
- 25 `.stories.tsx` files

### Modified Files
- `/lib/page-builder/component-props.ts` - Add new prop types
- `/lib/page-builder/schemas/index.ts` - Export new schemas
- `/lib/page-builder/schemas/hero.ts` - Add Hero2, Hero3, Hero4 schemas
- `/lib/page-builder/schemas/navbar.ts` - Add Navbar3, Navbar4 schemas
- `/lib/page-builder/schemas/about.ts` - New file with About1-4 schemas
- `/lib/page-builder/schemas/testimonials.ts` - New file with Testimonials1-4 schemas
- `/lib/page-builder/schemas/faq.ts` - New file with Faq1-4 schemas
- `/lib/page-builder/schemas/services.ts` - New file with Services1-4 schemas
- `/lib/page-builder/schemas/footer.ts` - New file with Footer1-4 schemas
- `/lib/page-builder/registry.ts` - Register all 25 new components

---

## Success Criteria

### Phase 0: Properties Panel
- [ ] Image Uploader shows tabbed UI (Upload | URL)
- [ ] Image Uploader supports drag-and-drop file upload
- [ ] Image Uploader shows preview with delete button
- [ ] Link Selector dropdown shows Sections from current page
- [ ] Link Selector has Pages section (placeholder)
- [ ] Link Selector has URL input for custom links

### Components
- [ ] All 25 components render correctly in Storybook
- [ ] All components appear in page builder marketplace
- [ ] All components can be dragged to canvas
- [ ] All component props are editable via properties panel
- [ ] All components are responsive (mobile/tablet/desktop)
- [ ] All components follow existing code patterns
- [ ] Playwriter tests pass on localhost:3000/pages/create

---

## Open Questions

None - all requirements captured from user input and reference designs.
