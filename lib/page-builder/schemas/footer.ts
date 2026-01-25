/**
 * ============================================================================
 * FOOTER COMPONENT SCHEMAS
 * ============================================================================
 *
 * Schema definitions for all Footer component variants.
 * These schemas drive the sidebar editor UI generation.
 */

import type { ComponentSchema } from "../types";
import type { Footer1Props, Footer2Props, Footer3Props } from "../component-props";

// ============================================================================
// SHARED FIELD DEFINITIONS
// ============================================================================

/**
 * Social platform options for select field.
 */
const socialPlatformOptions = [
  { value: "twitter", label: "Twitter / X" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
  { value: "github", label: "GitHub" },
  { value: "youtube", label: "YouTube" },
  { value: "tiktok", label: "TikTok" },
  { value: "discord", label: "Discord" },
  { value: "dribbble", label: "Dribbble" },
  { value: "behance", label: "Behance" },
];

/**
 * Link items array group for footer navigation columns.
 */
const linksArrayGroup = {
  kind: "array" as const,
  label: "Links",
  collapsible: true,
  itemLabel: "Link",
  minItems: 1,
  maxItems: 20,
  addLabel: "Add link",
  itemFields: {
    label: {
      type: "text" as const,
      label: "Label",
      placeholder: "Link text...",
    },
    href: {
      type: "url" as const,
      label: "URL",
      placeholder: "https://...",
    },
  },
};

// ============================================================================
// FOOTER 1
// ============================================================================

/**
 * Footer 1 Schema
 *
 * Modern footer layout with:
 * - Left: Logo + brand name + tagline + social icons
 * - Right: Dynamic link columns (1-4)
 * - Bottom: Divider + copyright + legal links
 */
export const footer1Schema: ComponentSchema<Footer1Props> = {
  type: "footer",
  variant: 1,
  label: "Footer 1",
  thumbnail: "/thumbnails/footer-1.png",

  groups: {
    config: {
      kind: "group",
      label: "Style",
      collapsible: true,
      fields: {
        bgColor: {
          type: "color",
          label: "Background",
        },
      },
    },

    logo: {
      kind: "group",
      label: "Logo",
      collapsible: true,
      fields: {
        url: {
          type: "image",
          label: "Image",
        },
        width: {
          type: "number",
          label: "Width",
          placeholder: "40",
        },
        height: {
          type: "number",
          label: "Height",
          placeholder: "40",
        },
      },
    },

    brandName: {
      kind: "group",
      label: "Brand",
      collapsible: true,
      fields: {
        label: {
          type: "text",
          label: "Name",
          placeholder: "Company name...",
        },
      },
    },

    description: {
      kind: "group",
      label: "Tagline",
      collapsible: true,
      fields: {
        content: {
          type: "textarea",
          label: "Text",
          placeholder: "Company tagline...",
        },
      },
    },

    socials: {
      kind: "array",
      label: "Social Media",
      collapsible: true,
      itemLabel: "Social",
      minItems: 0,
      maxItems: 6,
      addLabel: "Add social",
      itemFields: {
        platform: {
          type: "select",
          label: "Platform",
          options: socialPlatformOptions,
        },
        url: {
          type: "url",
          label: "URL",
          placeholder: "https://...",
        },
      },
    },

    linkColumns: {
      kind: "array",
      label: "Link Columns",
      collapsible: true,
      itemLabel: "Column",
      minItems: 1,
      maxItems: 4,
      addLabel: "Add column",
      itemFields: {
        heading: {
          type: "text",
          label: "Heading",
          placeholder: "Column title...",
        },
        // Note: links array is managed within the component
        // For now, links can be edited through default values
      },
    },

    legalLinks: {
      kind: "array",
      label: "Legal Links",
      collapsible: true,
      itemLabel: "Link",
      minItems: 0,
      maxItems: 4,
      addLabel: "Add link",
      itemFields: {
        label: {
          type: "text",
          label: "Label",
          placeholder: "Link text...",
        },
        href: {
          type: "url",
          label: "URL",
          placeholder: "https://...",
        },
      },
    },

    copyright: {
      kind: "group",
      label: "Copyright",
      collapsible: true,
      fields: {
        text: {
          type: "text",
          label: "Text",
          placeholder: "© 2024 Company Name",
        },
        color: {
          type: "color",
          label: "Text Color",
        },
      },
    },
  },

  defaults: {
    config: {
      bgColor: "#ffffff",
    },
    logo: {
      url: "",
      width: 40,
      height: 40,
    },
    brandName: {
      label: "Company",
    },
    description: {
      content: "Building amazing digital experiences.",
    },
    socials: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "github", url: "https://github.com" },
    ],
    linkColumns: [
      {
        heading: "Products",
        links: [
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
          { label: "Integrations", href: "/integrations" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Careers", href: "/careers" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Documentation", href: "/docs" },
          { label: "Help Center", href: "/help" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    legalLinks: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
    copyright: {
      text: "© 2024 Company. All rights reserved.",
      color: "#8d8d8d",
    },
  },
};

// ============================================================================
// FOOTER 2
// ============================================================================

/**
 * Footer 2 Schema
 *
 * Modern footer layout with:
 * - Top left: Logo (circle) + brand name
 * - Top right: 4 link columns (header + links each)
 * - Divider line
 * - Bottom: Centered social icons + copyright
 */
export const footer2Schema: ComponentSchema<Footer2Props> = {
  type: "footer",
  variant: 2,
  label: "Footer 2",
  thumbnail: "/thumbnails/footer-2.png",

  groups: {
    config: {
      kind: "group",
      label: "Style",
      collapsible: true,
      fields: {
        bgColor: {
          type: "color",
          label: "Background",
        },
      },
    },

    logo: {
      kind: "group",
      label: "Logo",
      collapsible: true,
      fields: {
        url: {
          type: "image",
          label: "Image",
        },
        width: {
          type: "number",
          label: "Width",
          placeholder: "40",
        },
        height: {
          type: "number",
          label: "Height",
          placeholder: "40",
        },
      },
    },

    brandName: {
      kind: "group",
      label: "Brand",
      collapsible: true,
      fields: {
        label: {
          type: "text",
          label: "Name",
          placeholder: "Company name...",
        },
      },
    },

    socials: {
      kind: "array",
      label: "Social Media",
      collapsible: true,
      itemLabel: "Social",
      minItems: 0,
      maxItems: 6,
      addLabel: "Add social",
      itemFields: {
        platform: {
          type: "select",
          label: "Platform",
          options: socialPlatformOptions,
        },
        url: {
          type: "url",
          label: "URL",
          placeholder: "https://...",
        },
      },
    },

    linkColumns: {
      kind: "array",
      label: "Link Columns",
      collapsible: true,
      itemLabel: "Column",
      minItems: 1,
      maxItems: 4,
      addLabel: "Add column",
      itemFields: {
        heading: {
          type: "text",
          label: "Heading",
          placeholder: "Column title...",
        },
      },
    },

    copyright: {
      kind: "group",
      label: "Copyright",
      collapsible: true,
      fields: {
        text: {
          type: "text",
          label: "Text",
          placeholder: "© 2024 Company Name",
        },
        color: {
          type: "color",
          label: "Text Color",
        },
      },
    },
  },

  defaults: {
    config: {
      bgColor: "#ffffff",
    },
    logo: {
      url: "",
      width: 40,
      height: 40,
    },
    brandName: {
      label: "Company",
    },
    socials: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "github", url: "https://github.com" },
    ],
    linkColumns: [
      {
        heading: "Products",
        links: [
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
          { label: "Integrations", href: "/integrations" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Careers", href: "/careers" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Documentation", href: "/docs" },
          { label: "Help Center", href: "/help" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: "Cookies", href: "/cookies" },
        ],
      },
    ],
    copyright: {
      text: "© 2024 Company. All rights reserved.",
      color: "#8d8d8d",
    },
  },
};

// ============================================================================
// FOOTER 3
// ============================================================================

/**
 * Footer 3 Schema
 *
 * Footer with newsletter section at top, then logo/links/copyright.
 */
export const footer3Schema: ComponentSchema<Footer3Props> = {
  type: "footer",
  variant: 3,
  label: "Footer 3",
  thumbnail: "/thumbnails/footer-3.png",

  groups: {
    config: {
      kind: "group",
      label: "Style",
      collapsible: true,
      fields: {
        bgColor: {
          type: "color",
          label: "Background",
        },
      },
    },

    newsletter: {
      kind: "group",
      label: "Newsletter",
      collapsible: true,
      fields: {
        title: {
          type: "text",
          label: "Title",
          placeholder: "Subscribe to our newsletter",
        },
        placeholder: {
          type: "text",
          label: "Input Placeholder",
          placeholder: "Enter your email",
        },
        buttonText: {
          type: "text",
          label: "Button Text",
          placeholder: "Subscribe",
        },
      },
    },

    logo: {
      kind: "group",
      label: "Logo",
      collapsible: true,
      fields: {
        url: {
          type: "image",
          label: "Image",
        },
        width: {
          type: "number",
          label: "Width",
          placeholder: "120",
        },
        height: {
          type: "number",
          label: "Height",
          placeholder: "40",
        },
      },
    },

    description: {
      kind: "group",
      label: "Description",
      collapsible: true,
      fields: {
        content: {
          type: "textarea",
          label: "Text",
          placeholder: "Company description...",
        },
      },
    },

    links: {
      ...linksArrayGroup,
      sharedFields: {
        color: {
          type: "color",
          label: "Link Color",
        },
      },
    },

    copyright: {
      kind: "group",
      label: "Copyright",
      collapsible: true,
      fields: {
        text: {
          type: "text",
          label: "Text",
          placeholder: "© 2024 Company Name",
        },
        color: {
          type: "color",
          label: "Text Color",
        },
      },
    },
  },

  defaults: {
    config: {
      bgColor: "#141414",
    },
    newsletter: {
      title: "Subscribe to our newsletter",
      placeholder: "Enter your email",
      buttonText: "Subscribe",
    },
    logo: {
      url: "",
      width: 120,
      height: 40,
    },
    description: {
      content: "Stay connected with us for the latest updates and news.",
    },
    links: {
      color: "#ffffff",
      items: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ],
    },
    copyright: {
      text: "© 2024 Company Name. All rights reserved.",
      color: "#8d8d8d",
    },
  },
};

// ============================================================================
// FOOTER 4
// ============================================================================

/**
 * Footer 4 Schema
 *
 * Footer with prominent newsletter section and simplified links.
 */
export const footer4Schema: ComponentSchema<Footer3Props> = {
  type: "footer",
  variant: 4,
  label: "Footer 4",
  thumbnail: "/thumbnails/footer-4.png",

  groups: {
    config: {
      kind: "group",
      label: "Style",
      collapsible: true,
      fields: {
        bgColor: {
          type: "color",
          label: "Background",
        },
      },
    },

    newsletter: {
      kind: "group",
      label: "Newsletter",
      collapsible: true,
      fields: {
        title: {
          type: "text",
          label: "Title",
          placeholder: "Join our newsletter",
        },
        placeholder: {
          type: "text",
          label: "Input Placeholder",
          placeholder: "Enter your email",
        },
        buttonText: {
          type: "text",
          label: "Button Text",
          placeholder: "Subscribe",
        },
      },
    },

    logo: {
      kind: "group",
      label: "Logo",
      collapsible: true,
      fields: {
        url: {
          type: "image",
          label: "Image",
        },
        width: {
          type: "number",
          label: "Width",
          placeholder: "120",
        },
        height: {
          type: "number",
          label: "Height",
          placeholder: "40",
        },
      },
    },

    description: {
      kind: "group",
      label: "Description",
      collapsible: true,
      fields: {
        content: {
          type: "textarea",
          label: "Text",
          placeholder: "Company description...",
        },
      },
    },

    links: {
      ...linksArrayGroup,
      sharedFields: {
        color: {
          type: "color",
          label: "Link Color",
        },
      },
    },

    copyright: {
      kind: "group",
      label: "Copyright",
      collapsible: true,
      fields: {
        text: {
          type: "text",
          label: "Text",
          placeholder: "© 2024 Company Name",
        },
        color: {
          type: "color",
          label: "Text Color",
        },
      },
    },
  },

  defaults: {
    config: {
      bgColor: "#ffffff",
    },
    newsletter: {
      title: "Join our newsletter",
      placeholder: "Enter your email address",
      buttonText: "Get Started",
    },
    logo: {
      url: "",
      width: 120,
      height: 40,
    },
    description: {
      content: "Join our newsletter and never miss an update.",
    },
    links: {
      color: "#141414",
      items: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    copyright: {
      text: "© 2024 Company Name. All rights reserved.",
      color: "#8d8d8d",
    },
  },
};
