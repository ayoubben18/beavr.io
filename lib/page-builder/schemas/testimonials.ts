/**
 * ============================================================================
 * TESTIMONIALS COMPONENT SCHEMAS
 * ============================================================================
 *
 * Schema definitions for all Testimonials component variants.
 * These schemas drive the sidebar editor UI generation.
 */

import type { ComponentSchema } from "../types";
import type {
  Testimonial1Props,
  Testimonial2Props,
  Testimonial3Props,
  Testimonial4Props,
} from "../component-props";

// ============================================================================
// SHARED FIELD DEFINITIONS
// ============================================================================

/**
 * Navigation styling group used across carousel variants.
 */
const navigationGroup = {
  kind: "group" as const,
  label: "Navigation",
  collapsible: true,
  fields: {
    bgColor: {
      type: "color" as const,
      label: "Background",
    },
    iconColor: {
      type: "color" as const,
      label: "Icon Color",
    },
    borderColor: {
      type: "color" as const,
      label: "Border",
    },
  },
};

/**
 * Testimonials array group with avatar, name, and role.
 */
const testimonialsArrayGroup = {
  kind: "array" as const,
  label: "Testimonials",
  collapsible: true,
  itemLabel: "Testimonial",
  minItems: 1,
  maxItems: 10,
  addLabel: "Add testimonial",
  itemFields: {
    image: {
      type: "image" as const,
      label: "Avatar",
    },
    description: {
      type: "textarea" as const,
      label: "Quote",
      placeholder: "Enter testimonial text...",
    },
    name: {
      type: "text" as const,
      label: "Name",
      placeholder: "Author name",
    },
    role: {
      type: "text" as const,
      label: "Role",
      placeholder: "Job title",
    },
  },
};

/**
 * Testimonials array group with images.
 */
const testimonialsWithImageArrayGroup = {
  kind: "array" as const,
  label: "Testimonials",
  collapsible: true,
  itemLabel: "Testimonial",
  minItems: 1,
  maxItems: 10,
  addLabel: "Add testimonial",
  itemFields: {
    image: {
      type: "image" as const,
      label: "Avatar",
    },
    description: {
      type: "textarea" as const,
      label: "Quote",
      placeholder: "Enter testimonial text...",
    },
  },
};

// ============================================================================
// TESTIMONIAL 1
// ============================================================================

/**
 * Testimonial 1 Schema
 *
 * Testimonial carousel with navigation arrows.
 * Shows 3 text-only testimonial cards in a row.
 */
export const testimonial1Schema: ComponentSchema<Testimonial1Props> = {
  type: "testimonials",
  variant: 1,
  label: "Testimonials 1",
  thumbnail: "/thumbnails/testimonials-1.png",

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

    navigation: navigationGroup,

    testimonials: testimonialsArrayGroup,
  },

  defaults: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "What Our Clients Say",
    },
    navigation: {
      bgColor: "#ffffff",
      iconColor: "#141414",
      borderColor: "#e3e3e3",
    },
    testimonials: [
      {
        image: "",
        description:
          "This product has completely transformed our workflow. The results speak for themselves.",
        name: "Sarah Johnson",
        role: "Tech Lead",
      },
      {
        image: "",
        description:
          "I was skeptical at first, but now I can't imagine running my business without it.",
        name: "Michael Chen",
        role: "Designer",
      },
      {
        image: "",
        description:
          "Exceptional quality and outstanding customer support. Highly recommended!",
        name: "Emily Davis",
        role: "Developer",
      },
    ],
  },
};

// ============================================================================
// TESTIMONIAL 2
// ============================================================================

/**
 * Testimonial 2 Schema
 *
 * 2-column layout with title/description/CTA on one side,
 * stacked testimonial cards with avatars on the other.
 * Supports LTR/RTL layout direction.
 */
export const testimonial2Schema: ComponentSchema<Testimonial2Props> = {
  type: "testimonials",
  variant: 2,
  label: "Testimonials 2",
  thumbnail: "/thumbnails/testimonials-2.png",

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

    testimonials: testimonialsWithImageArrayGroup,

    cta: {
      kind: "group",
      label: "Button",
      collapsible: true,
      fields: {
        label: {
          type: "text",
          label: "Text",
          placeholder: "Button text",
        },
        bgColor: {
          type: "color",
          label: "Background",
        },
        textColor: {
          type: "color",
          label: "Text Color",
        },
        borderColor: {
          type: "color",
          label: "Border",
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
      label: "Trusted by Thousands",
    },
    description: {
      content:
        "Join the growing community of satisfied customers who have transformed their businesses with our solutions.",
    },
    testimonials: [
      {
        image: "",
        description:
          "The team went above and beyond to ensure our success. Truly a game-changer for our organization.",
      },
      {
        image: "",
        description:
          "Fast, reliable, and incredibly effective. We've seen a 40% increase in productivity since implementing this solution.",
      },
    ],
    cta: {
      label: "Read More Stories",
      bgColor: "#692e0e",
      textColor: "#ffffff",
      borderColor: "#692e0e",
    },
  },
};

// ============================================================================
// TESTIMONIAL 3
// ============================================================================

/**
 * Testimonial 3 Schema
 *
 * Large centered quote with navigation dots.
 * Single testimonial displayed at a time (carousel).
 */
export const testimonial3Schema: ComponentSchema<Testimonial3Props> = {
  type: "testimonials",
  variant: 3,
  label: "Testimonials 3",
  thumbnail: "/thumbnails/testimonials-3.png",

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

    testimonials: testimonialsWithImageArrayGroup,

    navigation: navigationGroup,
  },

  defaults: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Customer Stories",
    },
    testimonials: [
      {
        image: "",
        description:
          "Working with this team has been an absolute pleasure. Their attention to detail and commitment to quality is unmatched in the industry.",
      },
      {
        image: "",
        description:
          "The level of professionalism and expertise exceeded all our expectations. We couldn't be happier with the results.",
      },
      {
        image: "",
        description:
          "A truly transformative experience. Our company has never been more efficient or productive.",
      },
    ],
    navigation: {
      bgColor: "#ffffff",
      iconColor: "#141414",
      borderColor: "#e3e3e3",
    },
  },
};

// ============================================================================
// TESTIMONIAL 4
// ============================================================================

/**
 * Testimonial 4 Schema
 *
 * Centered testimonial with overlapping avatars at top.
 * All avatars shown stacked/overlapping, single quote below.
 */
export const testimonial4Schema: ComponentSchema<Testimonial4Props> = {
  type: "testimonials",
  variant: 4,
  label: "Testimonials 4",
  thumbnail: "/thumbnails/testimonials-4.png",

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

    testimonials: testimonialsWithImageArrayGroup,

    navigation: navigationGroup,
  },

  defaults: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Loved by Customers",
    },
    testimonials: [
      {
        image: "",
        description:
          "An incredible experience from start to finish. The team truly understands what businesses need to succeed.",
      },
      {
        image: "",
        description:
          "We've tried many solutions, but this one stands head and shoulders above the rest. Absolutely recommend!",
      },
      {
        image: "",
        description:
          "The attention to detail and quality of service is unmatched. A true partner in our growth.",
      },
    ],
    navigation: {
      bgColor: "#ffffff",
      iconColor: "#141414",
      borderColor: "#e3e3e3",
    },
  },
};
