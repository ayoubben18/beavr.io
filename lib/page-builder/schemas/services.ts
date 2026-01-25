/**
 * ============================================================================
 * SERVICES COMPONENT SCHEMAS
 * ============================================================================
 *
 * Schema definitions for all Services component variants.
 * These schemas drive the sidebar editor UI generation.
 */

import type { ComponentSchema } from "../types";
import type {
  Services1Props,
  Services2Props,
  Services3Props,
  Services4Props,
} from "../component-props";

// ============================================================================
// SHARED FIELD DEFINITIONS
// ============================================================================

/**
 * Services array group with image, title, and description.
 */
const servicesArrayGroup = {
  kind: "array" as const,
  label: "Services",
  collapsible: true,
  itemLabel: "Service",
  minItems: 1,
  maxItems: 12,
  addLabel: "Add service",
  itemFields: {
    image: {
      type: "image" as const,
      label: "Image",
    },
    title: {
      type: "text" as const,
      label: "Title",
      placeholder: "Service title...",
    },
    description: {
      type: "textarea" as const,
      label: "Description",
      placeholder: "Service description...",
    },
  },
};

/**
 * Simple services array group without image (text-only).
 */
const servicesSimpleArrayGroup = {
  kind: "array" as const,
  label: "Services",
  collapsible: true,
  itemLabel: "Service",
  minItems: 1,
  maxItems: 12,
  addLabel: "Add service",
  itemFields: {
    title: {
      type: "text" as const,
      label: "Title",
      placeholder: "Service title...",
    },
    description: {
      type: "textarea" as const,
      label: "Description",
      placeholder: "Service description...",
    },
  },
};

/**
 * Navigation style group for carousel variants.
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
    textColor: {
      type: "color" as const,
      label: "Arrow Color",
    },
    borderColor: {
      type: "color" as const,
      label: "Border",
    },
  },
};

// ============================================================================
// SERVICES 1
// ============================================================================

/**
 * Services 1 Schema
 *
 * 2-column layout with title/description/CTA on one side,
 * 2x2 service cards grid on the other. Supports LTR/RTL direction.
 */
export const services1Schema: ComponentSchema<Services1Props> = {
  type: "services",
  variant: 1,
  label: "Services 1",
  thumbnail: "/thumbnails/services-1.png",

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

    services: servicesArrayGroup,

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
      label: "Our Services",
    },
    description: {
      content:
        "We offer a comprehensive range of solutions designed to help your business grow and succeed in the digital landscape.",
    },
    services: [
      {
        image: "",
        title: "Web Development",
        description:
          "Custom websites and web applications built with modern technologies.",
      },
      {
        image: "",
        title: "Mobile Apps",
        description:
          "Native and cross-platform mobile applications for iOS and Android.",
      },
      {
        image: "",
        title: "UI/UX Design",
        description:
          "User-centered design that creates engaging digital experiences.",
      },
      {
        image: "",
        title: "Cloud Solutions",
        description:
          "Scalable cloud infrastructure and deployment services.",
      },
    ],
    cta: {
      label: "View All Services",
      bgColor: "#692e0e",
      textColor: "#ffffff",
      borderColor: "#692e0e",
    },
  },
};

// ============================================================================
// SERVICES 2
// ============================================================================

/**
 * Services 2 Schema
 *
 * Carousel layout with title centered, cards in a row,
 * navigation arrows and dots. Similar to Testimonials1.
 */
export const services2Schema: ComponentSchema<Services2Props> = {
  type: "services",
  variant: 2,
  label: "Services 2",
  thumbnail: "/thumbnails/services-2.png",

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
        autoPlayInterval: {
          type: "number",
          label: "Auto-play (seconds)",
          placeholder: "0 to disable",
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

    services: servicesArrayGroup,
  },

  defaults: {
    config: {
      bgColor: "#ffffff",
      autoPlayInterval: 5,
    },
    title: {
      label: "What We Offer",
    },
    services: [
      {
        image: "",
        title: "Strategy & Consulting",
        description:
          "Expert guidance to define your digital strategy and roadmap.",
      },
      {
        image: "",
        title: "Product Design",
        description:
          "End-to-end product design from concept to polished interface.",
      },
      {
        image: "",
        title: "Development",
        description:
          "Full-stack development using the latest technologies and frameworks.",
      },
      {
        image: "",
        title: "Quality Assurance",
        description:
          "Comprehensive testing to ensure reliability and performance.",
      },
    ],
    navigation: {
      bgColor: "#ffffff",
      textColor: "#141414",
      borderColor: "#e3e3e3",
    },
  },
};

// ============================================================================
// SERVICES 3
// ============================================================================

/**
 * Services 3 Schema
 *
 * Title at top, 2 large service cards below with title,
 * description, and feature list with checkmarks.
 */
export const services3Schema: ComponentSchema<Services3Props> = {
  type: "services",
  variant: 3,
  label: "Services 3",
  thumbnail: "/thumbnails/services-3.png",

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

    services: servicesArrayGroup,
  },

  defaults: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Choose Your Plan",
    },
    services: [
      {
        image: "",
        title: "Starter Package",
        description:
          "Perfect for small businesses and startups looking to establish their online presence.",
      },
      {
        image: "",
        title: "Enterprise Package",
        description:
          "Comprehensive solutions for established businesses ready to scale.",
      },
    ],
  },
};

// ============================================================================
// SERVICES 4
// ============================================================================

/**
 * Services 4 Schema
 *
 * Title/description at top, list of text-only service items below.
 * Simple and clean without images.
 */
export const services4Schema: ComponentSchema<Services4Props> = {
  type: "services",
  variant: 4,
  label: "Services 4",
  thumbnail: "/thumbnails/services-4.png",

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

    services: servicesSimpleArrayGroup,
  },

  defaults: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "How We Can Help",
    },
    services: [
      {
        title: "Brand Strategy",
        description:
          "Define your brand identity, messaging, and market positioning to stand out from competitors.",
      },
      {
        title: "Digital Marketing",
        description:
          "Reach your target audience through SEO, social media, and paid advertising campaigns.",
      },
      {
        title: "Content Creation",
        description:
          "Engage your audience with compelling content across all digital channels.",
      },
      {
        title: "Analytics & Insights",
        description:
          "Data-driven decision making with comprehensive analytics and reporting.",
      },
    ],
  },
};
