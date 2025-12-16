/**
 * ============================================================================
 * NAVBAR COMPONENT SCHEMAS
 * ============================================================================
 *
 * Schema definitions for all Navbar component variants.
 * These schemas drive the sidebar editor UI generation.
 */

import type { ComponentSchema } from "../types";
import type { Navbar1Props, Navbar2Props, Navbar3Props, Navbar4Props } from "../component-props";

// ============================================================================
// NAVBAR 1
// ============================================================================

/**
 * Navbar 1 Schema
 *
 * Standard navigation bar with logo, links, and buttons.
 * - Logo: Image with dimensions
 * - Links: Shared color, multiple link items
 * - Buttons: Individual styling per button
 */
export const navbar1Schema: ComponentSchema<Navbar1Props> = {
  type: "navbar",
  variant: 1,
  label: "Navbar 1",
  thumbnail: "/thumbnails/navbar-1.png",

  groups: {
    logo: {
      kind: "group",
      label: "Logo",
      collapsible: true,
      deletable: true,
      fields: {
        url: {
          type: "image",
          label: "Asset",
        },
        width: {
          type: "number",
          label: "W",
          min: 10,
          max: 300,
        },
        height: {
          type: "number",
          label: "H",
          min: 10,
          max: 300,
        },
      },
    },

    links: {
      kind: "array",
      label: "Links",
      collapsible: true,
      itemLabel: "Link",
      minItems: 0,
      maxItems: 8,
      addLabel: "Add link",
      sharedFields: {
        color: {
          type: "color",
          label: "Color",
        },
      },
      itemFields: {
        label: {
          type: "text",
          label: "",
          placeholder: "Link text",
        },
        href: {
          type: "url",
          label: "",
          placeholder: "URL",
        },
      },
    },

    buttons: {
      kind: "array",
      label: "Buttons",
      collapsible: true,
      itemLabel: "Button",
      minItems: 0,
      maxItems: 3,
      addLabel: "Add button",
      itemFields: {
        label: {
          type: "text",
          label: "",
          placeholder: "Button text",
        },
        href: {
          type: "url",
          label: "",
          placeholder: "URL",
        },
        color: {
          type: "color",
          label: "Color",
        },
        bgColor: {
          type: "color",
          label: "Background color",
        },
        borderColor: {
          type: "color",
          label: "Border color",
        },
      },
    },
  },

  defaults: {
    logo: {
      url: "",
      width: 30,
      height: 30,
    },
    links: {
      color: "#141414",
      items: [
        { label: "Link 1", href: "#" },
        { label: "Link 2", href: "#" },
        { label: "Link 3", href: "#" },
        { label: "Link 4", href: "#" },
      ],
    },
    buttons: {
      items: [
        {
          label: "Button 1",
          href: "#",
          textColor: "#141414",
          bgColor: "#ffffff",
          borderColor: "#e3e3e3",
        },
        {
          label: "Button 2",
          href: "#",
          textColor: "#ffffff",
          bgColor: "#692e0e",
          borderColor: "#692e0e",
        },
      ],
    },
  },
};

// ============================================================================
// NAVBAR 2
// ============================================================================

/**
 * Navbar 2 Schema
 *
 * Variant of Navbar 1 with different styling.
 * Uses same structure but may have different defaults.
 */
export const navbar2Schema: ComponentSchema<Navbar2Props> = {
  type: "navbar",
  variant: 2,
  label: "Navbar 2",
  thumbnail: "/thumbnails/navbar-2.png",

  groups: {
    ...navbar1Schema.groups,
  },

  defaults: {
    logo: {
      url: "",
      width: 40,
      height: 40,
    },
    links: {
      color: "#141414",
      items: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ],
    },
    buttons: {
      items: [
        {
          label: "Get Started",
          href: "#",
          textColor: "#ffffff",
          bgColor: "#692e0e",
          borderColor: "#692e0e",
        },
      ],
    },
  },
};

// ============================================================================
// NAVBAR 3
// ============================================================================

/**
 * Navbar 3 Schema
 */
export const navbar3Schema: ComponentSchema<Navbar3Props> = {
  type: "navbar",
  variant: 3,
  label: "Navbar 3",
  thumbnail: "/thumbnails/navbar-3.png",

  groups: {
    ...navbar1Schema.groups,
  },

  defaults: {
    logo: {
      url: "",
      width: 35,
      height: 35,
    },
    links: {
      color: "#141414",
      items: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    buttons: {
      items: [
        {
          label: "Sign In",
          href: "/login",
          textColor: "#141414",
          bgColor: "#ffffff",
          borderColor: "#e3e3e3",
        },
        {
          label: "Sign Up",
          href: "/signup",
          textColor: "#ffffff",
          bgColor: "#692e0e",
          borderColor: "#692e0e",
        },
      ],
    },
  },
};

// ============================================================================
// NAVBAR 4
// ============================================================================

/**
 * Navbar 4 Schema
 */
export const navbar4Schema: ComponentSchema<Navbar4Props> = {
  type: "navbar",
  variant: 4,
  label: "Navbar 4",
  thumbnail: "/thumbnails/navbar-4.png",

  groups: {
    ...navbar1Schema.groups,
  },

  defaults: {
    logo: {
      url: "",
      width: 45,
      height: 45,
    },
    links: {
      color: "#ffffff",
      items: [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "About", href: "/about" },
      ],
    },
    buttons: {
      items: [
        {
          label: "Contact Us",
          href: "/contact",
          textColor: "#692e0e",
          bgColor: "#ffffff",
          borderColor: "#ffffff",
        },
      ],
    },
  },
};
