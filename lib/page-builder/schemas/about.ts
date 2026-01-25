/**
 * ============================================================================
 * ABOUT COMPONENT SCHEMAS
 * ============================================================================
 *
 * Schema definitions for all About component variants.
 * These schemas drive the sidebar editor UI generation.
 */

import type { ComponentSchema } from "../types";
import type { About1Props, About2Props, About3Props, About4Props } from "../component-props";

// ============================================================================
// ABOUT 1
// ============================================================================

/**
 * About 1 Schema
 *
 * About section with title, image, and multiple description blocks.
 * Layout: Title at top, image below, text sections below image.
 */
export const about1Schema: ComponentSchema<About1Props> = {
  type: "about",
  variant: 1,
  label: "About 1",
  thumbnail: "/thumbnails/about-1.png",

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

    description1: {
      kind: "group",
      label: "Description 1",
      collapsible: true,
      fields: {
        content: {
          type: "textarea",
          label: "Text",
          placeholder: "Enter first description...",
        },
      },
    },

    image: {
      kind: "group",
      label: "Image",
      collapsible: true,
      fields: {
        url: {
          type: "image",
          label: "Image URL",
        },
      },
    },

    description2: {
      kind: "group",
      label: "Description 2",
      collapsible: true,
      fields: {
        content: {
          type: "textarea",
          label: "Text",
          placeholder: "Enter second description...",
        },
      },
    },

    description3: {
      kind: "group",
      label: "Description 3",
      collapsible: true,
      fields: {
        content: {
          type: "textarea",
          label: "Text",
          placeholder: "Enter third description...",
        },
      },
    },
  },

  defaults: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "About Our Company",
    },
    description1: {
      content: "We are a team of passionate individuals dedicated to creating exceptional digital experiences. Our mission is to help businesses grow and succeed in the digital age.",
    },
    image: {
      url: "",
    },
    description2: {
      content: "Founded in 2020, we have been at the forefront of innovation, constantly pushing the boundaries of what's possible in web design and development.",
    },
    description3: {
      content: "Our commitment to quality and customer satisfaction has made us a trusted partner for businesses of all sizes. We believe in building long-term relationships based on trust and mutual success.",
    },
  },
};

// ============================================================================
// ABOUT 2
// ============================================================================

/**
 * About 2 Schema
 *
 * 2-column about section with image left, text sections right.
 * Includes a highlight section block.
 */
export const about2Schema: ComponentSchema<About2Props> = {
  type: "about",
  variant: 2,
  label: "About 2",
  thumbnail: "/thumbnails/about-2.png",

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

    image: {
      kind: "group",
      label: "Image",
      collapsible: true,
      fields: {
        url: {
          type: "image",
          label: "Image URL",
        },
      },
    },

    section: {
      kind: "group",
      label: "Highlight Section",
      collapsible: true,
      fields: {
        description: {
          type: "textarea",
          label: "Description",
          placeholder: "Section description...",
        },
      },
    },
  },

  defaults: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Who We Are",
    },
    description: {
      content: "We're a team of designers, developers, and strategists who are passionate about creating digital products that make a difference.",
    },
    image: {
      url: "",
    },
    section: {
      description: "To empower businesses with innovative digital solutions that drive growth and create lasting impact.",
    },
  },
};

// ============================================================================
// ABOUT 3
// ============================================================================

/**
 * About 3 Schema
 *
 * About section with image and two descriptions.
 * Supports LTR/RTL layout direction.
 * Default: Image on left, content on right.
 */
export const about3Schema: ComponentSchema<About3Props> = {
  type: "about",
  variant: 3,
  label: "About 3",
  thumbnail: "/thumbnails/about-3.png",

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

    description1: {
      kind: "group",
      label: "Description 1",
      collapsible: true,
      fields: {
        content: {
          type: "textarea",
          label: "Text",
          placeholder: "Enter first description...",
        },
      },
    },

    image: {
      kind: "group",
      label: "Image",
      collapsible: true,
      fields: {
        url: {
          type: "image",
          label: "Image URL",
        },
      },
    },

    description2: {
      kind: "group",
      label: "Description 2",
      collapsible: true,
      fields: {
        content: {
          type: "textarea",
          label: "Text",
          placeholder: "Enter second description...",
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
      label: "Our Story",
    },
    description1: {
      content: "Every great company starts with a vision. Ours was to create tools that empower people to build their dreams without technical barriers.",
    },
    image: {
      url: "",
    },
    description2: {
      content: "Today, we serve thousands of customers worldwide, helping them bring their ideas to life with our intuitive platform and dedicated support team.",
    },
  },
};

// ============================================================================
// ABOUT 4
// ============================================================================

/**
 * About 4 Schema
 *
 * Flipped version of About 3.
 * Default: Text on left, image on right.
 */
export const about4Schema: ComponentSchema<About4Props> = {
  type: "about",
  variant: 4,
  label: "About 4",
  thumbnail: "/thumbnails/about-4.png",

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

    description1: {
      kind: "group",
      label: "Description 1",
      collapsible: true,
      fields: {
        content: {
          type: "textarea",
          label: "Text",
          placeholder: "Enter first description...",
        },
      },
    },

    image: {
      kind: "group",
      label: "Image",
      collapsible: true,
      fields: {
        url: {
          type: "image",
          label: "Image URL",
        },
      },
    },

    description2: {
      kind: "group",
      label: "Description 2",
      collapsible: true,
      fields: {
        content: {
          type: "textarea",
          label: "Text",
          placeholder: "Enter second description...",
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
      label: "Why Choose Us",
    },
    description1: {
      content: "With years of experience and a passion for excellence, we deliver solutions that exceed expectations and drive real results for our clients.",
    },
    image: {
      url: "",
    },
    description2: {
      content: "Our dedicated team works closely with you to understand your unique needs and craft tailored solutions that help you achieve your goals.",
    },
  },
};
