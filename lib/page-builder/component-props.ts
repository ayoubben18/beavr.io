/**
 * ============================================================================
 * COMPONENT PROPS TYPE DEFINITIONS
 * ============================================================================
 *
 * This file contains TypeScript interfaces for all page builder components.
 * Each component variant has its own props type that defines exactly what
 * data it receives and renders.
 *
 * NAMING CONVENTION:
 * - {Category}{Variant}Props (e.g., Hero1Props, Navbar2Props)
 *
 * STRUCTURE CONVENTION:
 * Props are organized into logical groups that match the sidebar editor:
 * - config: General settings (bgColor, direction)
 * - logo: Logo-related props
 * - title: Title text
 * - description: Description/paragraph text
 * - cta: Call-to-action buttons
 * - image: Image assets
 * - items/testimonials/questions/services: Array data
 *
 * These props types are used by:
 * 1. React components (as the props interface)
 * 2. Schema defaults (must match the structure)
 * 3. Type safety when accessing component instance props
 */

import type { HexColor, Direction } from "./types";

// ============================================================================
// SHARED/REUSABLE TYPES
// ============================================================================

/**
 * Standard link item used in navbars and CTAs.
 *
 * @example
 * { label: "About Us", href: "/about" }
 */
export type LinkItem = {
  /** Display text for the link */
  label: string;
  /** URL destination (can be relative or absolute) */
  href: string;
};

/**
 * Button item with full styling options.
 *
 * Used in navbars, heroes, and CTAs where buttons need individual colors.
 *
 * @example
 * {
 *   label: "Get Started",
 *   href: "/signup",
 *   bgColor: "#692e0e",
 *   textColor: "#ffffff",
 *   borderColor: "#692e0e"
 * }
 */
export type ButtonItem = {
  /** Button text */
  label: string;
  /** URL destination */
  href: string;
  /** Button background color */
  bgColor: HexColor;
  /** Button text color */
  textColor: HexColor;
  /** Button border color */
  borderColor: HexColor;
};

/**
 * Simplified CTA button (without border color).
 *
 * Used in Hero and other sections where border isn't needed.
 */
export type CtaItem = {
  /** Button text */
  label: string;
  /** URL destination */
  href: string;
  /** Button background color */
  bgColor: HexColor;
  /** Button text color */
  textColor: HexColor;
};

/**
 * Testimonial item for testimonial sections.
 */
export type TestimonialItem = {
  /** Avatar/profile image URL */
  image: string;
  /** Testimonial text/quote */
  description: string;
  /** Person's name */
  name: string;
  /** Person's role/job title */
  role: string;
};

/**
 * Testimonial item with avatar image.
 */
export type TestimonialWithImageItem = {
  /** Avatar/profile image URL */
  image: string;
  /** Testimonial text/quote */
  description: string;
};

/**
 * FAQ question/answer pair.
 */
export type FaqItem = {
  /** The question */
  question: string;
  /** The answer */
  answer: string;
};

/**
 * Service item with image.
 */
export type ServiceItem = {
  /** Service icon/image URL */
  image: string;
  /** Service title */
  title: string;
  /** Service description */
  description: string;
};

/**
 * Service item without image.
 */
export type ServiceItemSimple = {
  /** Service title */
  title: string;
  /** Service description */
  description: string;
};

/**
 * Navigation button styling config.
 *
 * Used for carousel/slider navigation arrows.
 */
export type NavigationStyle = {
  /** Arrow button background color */
  bgColor: HexColor;
  /** Arrow icon color */
  iconColor: HexColor;
  /** Arrow button border color */
  borderColor: HexColor;
};

// ============================================================================
// NAVBAR COMPONENT PROPS
// ============================================================================

/**
 * Navbar 1 Props
 *
 * Standard navigation bar with logo, links, and buttons.
 * Links share a common text color, buttons have individual colors.
 *
 * Layout: [Logo] [Links...] [Buttons...]
 */
export type Navbar1Props = {
  /**
   * Logo configuration.
   */
  logo: {
    /** Logo image URL */
    url: string;
    /** Logo display width in pixels */
    width: number;
    /** Logo display height in pixels */
    height: number;
  };

  /**
   * Navigation links configuration.
   */
  links: {
    /** Shared text color for all links */
    color: HexColor;
    /** Array of link items */
    items: LinkItem[];
  };

  /**
   * Navigation buttons configuration.
   */
  buttons: {
    /** Array of button items with individual styling */
    items: ButtonItem[];
  };
};

/**
 * Navbar 2 Props
 *
 * Floating centered navbar with rounded container.
 * Includes config for container background and border colors.
 */
export type Navbar2Props = Navbar1Props & {
  /**
   * Container configuration.
   */
  config: {
    /** Container background color */
    bgColor: HexColor;
    /** Container border color */
    borderColor: HexColor;
  };
};

/**
 * Navbar 3 Props
 */
export type Navbar3Props = Navbar1Props;

/**
 * Navbar 4 Props
 */
export type Navbar4Props = Navbar1Props;

// ============================================================================
// HERO COMPONENT PROPS
// ============================================================================

/**
 * Hero 1 Props
 *
 * Full hero section with title, description, CTAs, and image.
 * Supports LTR/RTL layout direction.
 *
 * Layout (LTR): [Content | Image]
 * Layout (RTL): [Image | Content]
 */
export type Hero1Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
    /** Content/image layout direction */
    direction: Direction;
  };

  /**
   * Hero title.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * Hero description/subtitle.
   */
  description: {
    /** Description text */
    content: string;
  };

  /**
   * Call-to-action buttons.
   */
  cta: {
    /** Array of CTA buttons */
    items: CtaItem[];
  };

  /**
   * Hero image.
   */
  image: {
    /** Image URL */
    url: string;
  };
};

/**
 * Hero 2 Props
 *
 * Similar to Hero1, define specific differences.
 */
export type Hero2Props = Hero1Props;

/**
 * Hero 3 Props
 *
 * Centered hero with title, description, image, and CTAs.
 * Vertical layout: Title -> Description -> Image -> CTAs
 */
export type Hero3Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
  };

  /**
   * Hero title.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * Hero description/subtitle.
   */
  description: {
    /** Description text */
    content: string;
  };

  /**
   * Hero image.
   */
  image: {
    /** Image URL */
    url: string;
  };

  /**
   * Call-to-action buttons.
   */
  cta: {
    /** Array of CTA buttons */
    items: CtaItem[];
  };
};

/**
 * Hero 4 Props
 *
 * Hero with image but no direction control.
 * Fixed layout (image position determined by design).
 */
export type Hero4Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
  };

  /**
   * Hero title.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * Hero description/subtitle.
   */
  description: {
    /** Description text */
    content: string;
  };

  /**
   * Call-to-action buttons.
   */
  cta: {
    /** Array of CTA buttons */
    items: CtaItem[];
  };

  /**
   * Hero image.
   */
  image: {
    /** Image URL */
    url: string;
  };
};

// ============================================================================
// ABOUT COMPONENT PROPS
// ============================================================================

/**
 * About 1 Props
 *
 * About section with multiple description blocks.
 * Layout: Title, Description1, Image, Description2, Description3
 */
export type About1Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
  };

  /**
   * Section title.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * First description paragraph.
   */
  description1: {
    /** Description text */
    content: string;
  };

  /**
   * About image.
   */
  image: {
    /** Image URL */
    url: string;
  };

  /**
   * Second description paragraph.
   */
  description2: {
    /** Description text */
    content: string;
  };

  /**
   * Third description paragraph.
   */
  description3: {
    /** Description text */
    content: string;
  };
};

/**
 * About 2 Props
 *
 * About section with a highlight section block.
 */
export type About2Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
  };

  /**
   * Section title.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * Main description.
   */
  description: {
    /** Description text */
    content: string;
  };

  /**
   * About image.
   */
  image: {
    /** Image URL */
    url: string;
  };

  /**
   * Highlight section block.
   */
  section: {
    /** Section block description */
    description: string;
  };
};

/**
 * About 3 Props
 *
 * About section with image and two descriptions.
 * Supports LTR/RTL layout direction.
 */
export type About3Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
    /** Content/image layout direction */
    direction: Direction;
  };

  /**
   * Section title.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * First description paragraph.
   */
  description1: {
    /** Description text */
    content: string;
  };

  /**
   * About image.
   */
  image: {
    /** Image URL */
    url: string;
  };

  /**
   * Second description paragraph.
   */
  description2: {
    /** Description text */
    content: string;
  };
};

/**
 * About 4 Props
 *
 * Flipped version of About 3.
 * Same structure, different default direction (text left, image right).
 */
export type About4Props = About3Props;

// ============================================================================
// TESTIMONIAL COMPONENT PROPS
// ============================================================================

/**
 * Testimonial 1 Props
 *
 * Testimonial carousel with navigation arrows.
 * Text-only testimonials (name + quote).
 */
export type Testimonial1Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
    /** Auto-play interval in seconds (0 to disable) */
    autoPlayInterval: number;
  };

  /**
   * Section title.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * Navigation arrow styling.
   */
  navigation: NavigationStyle;

  /**
   * Testimonial items.
   */
  testimonials: TestimonialItem[];
};

/**
 * Testimonial 2 Props
 *
 * Testimonials with images, description, and CTA.
 * Supports LTR/RTL layout direction.
 */
export type Testimonial2Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
    /** Content layout direction */
    direction: Direction;
  };

  /**
   * Section title.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * Section description.
   */
  description: {
    /** Description text */
    content: string;
  };

  /**
   * Testimonial items with images.
   */
  testimonials: TestimonialWithImageItem[];

  /**
   * Call-to-action button.
   */
  cta: {
    /** Button text */
    label: string;
    /** Button background color */
    bgColor: HexColor;
    /** Button text color */
    textColor: HexColor;
    /** Button border color */
    borderColor: HexColor;
  };
};

/**
 * Testimonial 3 Props
 *
 * Testimonial carousel with images and navigation arrows.
 */
export type Testimonial3Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
    /** Auto-play interval in seconds (0 to disable) */
    autoPlayInterval: number;
  };

  /**
   * Section title.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * Testimonial items with avatar image.
   */
  testimonials: TestimonialWithImageItem[];
};

/**
 * Testimonial 4 Props
 *
 * Centered testimonial with overlapping avatars at top.
 * Shows all avatars stacked at top, single quote below.
 */
export type Testimonial4Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
  };

  /**
   * Three avatar images displayed in overlapping pill.
   */
  avatars: {
    /** First avatar image URL */
    image1: string;
    /** Second avatar image URL */
    image2: string;
    /** Third avatar image URL */
    image3: string;
  };

  /**
   * Badge/pill title text next to avatars.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * Quote/description text.
   */
  description: {
    /** Quote content */
    content: string;
  };
};

// ============================================================================
// FAQ COMPONENT PROPS
// ============================================================================

/**
 * FAQ 1 Props
 *
 * Simple FAQ accordion section.
 */
export type Faq1Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
  };

  /**
   * Section title.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * FAQ questions and answers.
   */
  questions: FaqItem[];
};

/**
 * FAQ 2 Props
 *
 * FAQ with description and CTA.
 * Supports LTR/RTL layout direction.
 */
export type Faq2Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
    /** Content layout direction */
    direction: Direction;
  };

  /**
   * Section title.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * Section description.
   */
  description: {
    /** Description text */
    content: string;
  };

  /**
   * Call-to-action button.
   */
  cta: {
    /** Button text */
    label: string;
    /** Button background color */
    bgColor: HexColor;
    /** Button text color */
    textColor: HexColor;
    /** Button border color */
    borderColor: HexColor;
  };

  /**
   * FAQ questions and answers.
   */
  questions: FaqItem[];
};

/**
 * FAQ 3 Props
 *
 * Another FAQ variant (define specific differences based on design).
 */
export type Faq3Props = Faq1Props;

// ============================================================================
// SERVICES COMPONENT PROPS
// ============================================================================

/**
 * Services 1 Props
 *
 * Services grid with description and CTA.
 * Supports LTR/RTL layout direction.
 */
export type Services1Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
    /** Content layout direction */
    direction: Direction;
  };

  /**
   * Section title.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * Section description.
   */
  description: {
    /** Description text */
    content: string;
  };

  /**
   * Call-to-action button.
   */
  cta: {
    /** Button text */
    label: string;
    /** Button background color */
    bgColor: HexColor;
    /** Button text color */
    textColor: HexColor;
    /** Button border color */
    borderColor: HexColor;
  };

  /**
   * Service items.
   */
  services: ServiceItem[];
};

/**
 * Services 2 Props
 *
 * Services carousel with navigation arrows.
 */
export type Services2Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
    /** Auto-play interval in seconds (0 to disable) */
    autoPlayInterval: number;
  };

  /**
   * Section title.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * Navigation arrow styling.
   */
  navigation: NavigationStyle;

  /**
   * Service items.
   */
  services: ServiceItem[];
};

/**
 * Services 3 Props
 *
 * Services grid with images.
 */
export type Services3Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
  };

  /**
   * Section title.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * Service items.
   */
  services: ServiceItem[];
};

/**
 * Services 4 Props
 *
 * Services grid without images (text-only cards).
 */
export type Services4Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
  };

  /**
   * Section title.
   */
  title: {
    /** Title text */
    label: string;
  };

  /**
   * Service items (no images).
   */
  services: ServiceItemSimple[];
};

// ============================================================================
// FOOTER COMPONENT PROPS
// ============================================================================

/**
 * Social media link item for footers.
 */
export type SocialItem = {
  /** Platform identifier (e.g., "twitter", "linkedin") */
  platform: string;
  /** URL to social profile */
  url: string;
};

/**
 * Link column for footer navigation.
 */
export type LinkColumn = {
  /** Column heading */
  heading: string;
  /** Links in this column */
  links: LinkItem[];
};

/**
 * Footer 1 Props
 *
 * Modern footer layout with:
 * - Left: Logo + brand name + tagline + social icons
 * - Right: Dynamic link columns (1-4)
 * - Bottom: Divider + copyright + legal links
 */
export type Footer1Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
  };

  /**
   * Logo configuration.
   */
  logo: {
    /** Logo image URL */
    url: string;
    /** Logo display width */
    width: number;
    /** Logo display height */
    height: number;
  };

  /**
   * Brand name displayed below logo.
   */
  brandName: {
    /** Brand name text */
    label: string;
  };

  /**
   * Footer description/tagline.
   */
  description: {
    /** Description text */
    content: string;
  };

  /**
   * Social media links.
   */
  socials: SocialItem[];

  /**
   * Dynamic link columns (1-4 columns).
   */
  linkColumns: LinkColumn[];

  /**
   * Legal links at bottom (Terms, Privacy, etc.).
   */
  legalLinks: LinkItem[];

  /**
   * Copyright text.
   */
  copyright: {
    /** Copyright text */
    text: string;
    /** Text color */
    color: HexColor;
  };
};

/**
 * Footer 2 Props
 *
 * Modern footer with:
 * - Top left: Logo (circle) + brand name
 * - Top right: 4 link columns (header + links each)
 * - Divider line
 * - Bottom: Centered social icons + copyright
 */
export type Footer2Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
  };

  /**
   * Logo configuration (displayed as circle).
   */
  logo: {
    /** Logo image URL */
    url: string;
    /** Logo display width */
    width: number;
    /** Logo display height */
    height: number;
  };

  /**
   * Brand name displayed below logo.
   */
  brandName: {
    /** Brand name text */
    label: string;
  };

  /**
   * Dynamic link columns (1-4 columns).
   */
  linkColumns: LinkColumn[];

  /**
   * Social media links (centered in bottom section).
   */
  socials: SocialItem[];

  /**
   * Copyright text.
   */
  copyright: {
    /** Copyright text */
    text: string;
    /** Text color */
    color: HexColor;
  };
};

/**
 * Footer 3 Props
 *
 * Footer with newsletter section at top.
 */
export type Footer3Props = {
  /**
   * General configuration.
   */
  config: {
    /** Section background color */
    bgColor: HexColor;
  };

  /**
   * Newsletter section.
   */
  newsletter: {
    /** Newsletter section title */
    title: string;
    /** Input placeholder text */
    placeholder: string;
    /** Subscribe button text */
    buttonText: string;
  };

  /**
   * Logo configuration.
   */
  logo: {
    /** Logo image URL */
    url: string;
    /** Logo display width */
    width: number;
    /** Logo display height */
    height: number;
  };

  /**
   * Footer description/tagline.
   */
  description: {
    /** Description text */
    content: string;
  };

  /**
   * Footer link columns.
   */
  links: {
    /** Link text color */
    color: HexColor;
    /** Array of link items */
    items: LinkItem[];
  };

  /**
   * Copyright text.
   */
  copyright: {
    /** Copyright text */
    text: string;
    /** Text color */
    color: HexColor;
  };
};

/**
 * Footer 4 Props
 *
 * Same as Footer3 with prominent newsletter variation.
 */
export type Footer4Props = Footer3Props;

// ============================================================================
// PROPS TYPE MAP
// ============================================================================

/**
 * Map of all component props types by category and variant.
 *
 * Use this for type-safe access to props types:
 *
 * @example
 * type MyHero = ComponentPropsMap["hero"][1]; // Hero1Props
 * type MyNavbar = ComponentPropsMap["navbar"][1]; // Navbar1Props
 */
export type ComponentPropsMap = {
  navbar: {
    1: Navbar1Props;
    2: Navbar2Props;
    3: Navbar3Props;
    4: Navbar4Props;
  };
  hero: {
    1: Hero1Props;
    2: Hero2Props;
    3: Hero3Props;
    4: Hero4Props;
  };
  about: {
    1: About1Props;
    2: About2Props;
    3: About3Props;
  };
  testimonials: {
    1: Testimonial1Props;
    2: Testimonial2Props;
    3: Testimonial3Props;
    4: Testimonial4Props;
  };
  faq: {
    1: Faq1Props;
    2: Faq2Props;
    3: Faq3Props;
  };
  services: {
    1: Services1Props;
    2: Services2Props;
    3: Services3Props;
    4: Services4Props;
  };
  footer: {
    1: Footer1Props;
    2: Footer2Props;
    3: Footer3Props;
    4: Footer4Props;
  };
};

/**
 * Union of all component props types.
 *
 * Useful when you need to accept any component's props.
 */
export type AnyComponentProps =
  | Navbar1Props
  | Navbar2Props
  | Navbar3Props
  | Navbar4Props
  | Hero1Props
  | Hero2Props
  | Hero3Props
  | Hero4Props
  | About1Props
  | About2Props
  | About3Props
  | Testimonial1Props
  | Testimonial2Props
  | Testimonial3Props
  | Testimonial4Props
  | Faq1Props
  | Faq2Props
  | Faq3Props
  | Services1Props
  | Services2Props
  | Services3Props
  | Services4Props
  | Footer1Props
  | Footer2Props
  | Footer3Props
  | Footer4Props;
