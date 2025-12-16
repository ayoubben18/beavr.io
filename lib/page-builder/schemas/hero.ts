/**
 * ============================================================================
 * HERO COMPONENT SCHEMAS
 * ============================================================================
 *
 * Schema definitions for all Hero component variants.
 * These schemas drive the sidebar editor UI generation.
 */

import type { ComponentSchema } from "../types";
import type { Hero1Props, Hero2Props, Hero3Props, Hero4Props } from "../component-props";

// ============================================================================
// SHARED FIELD DEFINITIONS
// ============================================================================

/**
 * Common CTA array group used across hero variants.
 */
const ctaArrayGroup = {
  kind: "array" as const,
  label: "Buttons",
  collapsible: true,
  itemLabel: "Button",
  minItems: 0,
  maxItems: 3,
  addLabel: "Add button",
  itemFields: {
    label: {
      type: "text" as const,
      label: "",
      placeholder: "Button text",
    },
    href: {
      type: "url" as const,
      label: "",
      placeholder: "URL",
    },
    bgColor: {
      type: "color" as const,
      label: "Background",
    },
    textColor: {
      type: "color" as const,
      label: "Text color",
    },
  },
};

// ============================================================================
// HERO 1
// ============================================================================

/**
 * Hero 1 Schema
 *
 * Full hero with title, description, CTAs, and image.
 * Supports LTR/RTL layout direction.
 */
export const hero1Schema: ComponentSchema<Hero1Props> = {
  type: "hero",
  variant: 1,
  label: "Hero 1",
  thumbnail: "/thumbnails/hero-1.png",

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
        direction: {
          type: "direction",
          label: "Layout",
        },
      },
    },

    title: {
      kind: "group",
      label: "Title",
      collapsible: true,
      fields: {
        label: {
          type: "text",
          label: "Text",
          placeholder: "Enter title...",
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
          placeholder: "Enter description...",
        },
      },
    },

    cta: ctaArrayGroup,

    image: {
      kind: "group",
      label: "Image",
      collapsible: true,
      deletable: true,
      fields: {
        url: {
          type: "image",
          label: "Asset",
        },
      },
    },
  },

  defaults: {
    config: {
      bgColor: "#ffffff",
      direction: "ltr",
    },
    title: {
      label: "Lorem ipsum doler",
    },
    description: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in est metus. Donec non ex in magna accumsan dictum.",
    },
    cta: {
      items: [
        {
          label: "Button 1",
          href: "#",
          bgColor: "#ffffff",
          textColor: "#141414",
        },
        {
          label: "Button 2",
          href: "#",
          bgColor: "#692e0e",
          textColor: "#ffffff",
        },
      ],
    },
    image: {
      url: "",
    },
  },
};

// ============================================================================
// HERO 2
// ============================================================================

/**
 * Hero 2 Schema
 *
 * Similar to Hero 1, different visual styling.
 */
export const hero2Schema: ComponentSchema<Hero2Props> = {
  type: "hero",
  variant: 2,
  label: "Hero 2",
  thumbnail: "/thumbnails/hero-2.png",

  groups: {
    ...hero1Schema.groups,
  },

  defaults: {
    config: {
      bgColor: "#f5f5f5",
      direction: "rtl",
    },
    title: {
      label: "Build something amazing",
    },
    description: {
      content:
        "Create stunning landing pages with our easy-to-use page builder. No coding required.",
    },
    cta: {
      items: [
        {
          label: "Get Started",
          href: "#",
          bgColor: "#692e0e",
          textColor: "#ffffff",
        },
        {
          label: "Learn More",
          href: "#",
          bgColor: "#ffffff",
          textColor: "#141414",
        },
      ],
    },
    image: {
      url: "",
    },
  },
};

// ============================================================================
// HERO 3
// ============================================================================

/**
 * Hero 3 Schema
 *
 * Text-only hero without image.
 * Centered content layout.
 */
export const hero3Schema: ComponentSchema<Hero3Props> = {
  type: "hero",
  variant: 3,
  label: "Hero 3",
  thumbnail: "/thumbnails/hero-3.png",

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

    title: {
      kind: "group",
      label: "Title",
      collapsible: true,
      fields: {
        label: {
          type: "text",
          label: "Text",
          placeholder: "Enter title...",
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
          placeholder: "Enter description...",
        },
      },
    },

    cta: ctaArrayGroup,
  },

  defaults: {
    config: {
      bgColor: "#692e0e",
    },
    title: {
      label: "Welcome to our platform",
    },
    description: {
      content:
        "Join thousands of satisfied customers who have transformed their business with our solution.",
    },
    cta: {
      items: [
        {
          label: "Start Free Trial",
          href: "#",
          bgColor: "#ffffff",
          textColor: "#692e0e",
        },
      ],
    },
  },
};

// ============================================================================
// HERO 4
// ============================================================================

/**
 * Hero 4 Schema
 *
 * Hero with image but fixed layout (no direction control).
 */
export const hero4Schema: ComponentSchema<Hero4Props> = {
  type: "hero",
  variant: 4,
  label: "Hero 4",
  thumbnail: "/thumbnails/hero-4.png",

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

    title: {
      kind: "group",
      label: "Title",
      collapsible: true,
      fields: {
        label: {
          type: "text",
          label: "Text",
          placeholder: "Enter title...",
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
          placeholder: "Enter description...",
        },
      },
    },

    cta: ctaArrayGroup,

    image: {
      kind: "group",
      label: "Image",
      collapsible: true,
      deletable: true,
      fields: {
        url: {
          type: "image",
          label: "Asset",
        },
      },
    },
  },

  defaults: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Powerful features for your business",
    },
    description: {
      content:
        "Our platform provides everything you need to grow and scale your business effectively.",
    },
    cta: {
      items: [
        {
          label: "Explore Features",
          href: "#features",
          bgColor: "#692e0e",
          textColor: "#ffffff",
        },
        {
          label: "View Pricing",
          href: "#pricing",
          bgColor: "#ffffff",
          textColor: "#141414",
        },
      ],
    },
    image: {
      url: "",
    },
  },
};
