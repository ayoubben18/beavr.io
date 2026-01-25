/**
 * ============================================================================
 * FOOTER COMPONENT SCHEMAS
 * ============================================================================
 *
 * Schema definitions for all Footer component variants.
 * These schemas drive the sidebar editor UI generation.
 */

import type { ComponentSchema } from "../types";
import type { Footer1Props, Footer3Props } from "../component-props";

// ============================================================================
// SHARED FIELD DEFINITIONS
// ============================================================================

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
    url: {
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
 * Classic footer layout with logo/description on the left,
 * navigation link columns on the right, and copyright at the bottom.
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
      fields: {
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
    logo: {
      url: "",
      width: 120,
      height: 40,
    },
    description: {
      content:
        "Building the future of digital experiences with innovative solutions and cutting-edge technology.",
    },
    links: {
      color: "#ffffff",
      items: [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Services", url: "/services" },
        { label: "Contact", url: "/contact" },
        { label: "Privacy Policy", url: "/privacy" },
        { label: "Terms of Service", url: "/terms" },
      ],
    },
    copyright: {
      text: "© 2024 Company Name. All rights reserved.",
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
 * Same as Footer1 but with socials and copyright centered at the bottom.
 */
export const footer2Schema: ComponentSchema<Footer1Props> = {
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
      fields: {
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
    logo: {
      url: "",
      width: 120,
      height: 40,
    },
    description: {
      content:
        "Empowering businesses with innovative digital solutions that drive growth and success.",
    },
    links: {
      color: "#ffffff",
      items: [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Services", url: "/services" },
        { label: "Blog", url: "/blog" },
        { label: "Contact", url: "/contact" },
      ],
    },
    copyright: {
      text: "© 2024 Company Name. All rights reserved.",
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
      fields: {
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
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Services", url: "/services" },
        { label: "Contact", url: "/contact" },
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
      fields: {
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
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Contact", url: "/contact" },
      ],
    },
    copyright: {
      text: "© 2024 Company Name. All rights reserved.",
      color: "#8d8d8d",
    },
  },
};
