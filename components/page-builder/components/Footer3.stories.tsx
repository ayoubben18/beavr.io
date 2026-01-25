import type { Meta, StoryObj } from "@storybook/react";

import { Footer3 } from "./Footer3";

/**
 * Footer 3 Component
 *
 * Footer with newsletter section at the top, followed by logo/description,
 * navigation links, and copyright at the bottom.
 *
 * ## Features
 * - Newsletter signup section with email input and subscribe button
 * - Configurable background color
 * - Logo with customizable dimensions
 * - Company description
 * - Navigation links with customizable color
 * - Copyright text with customizable color
 *
 * ## Props Structure
 * - `config.bgColor`: Section background color
 * - `newsletter.title`: Newsletter section heading
 * - `newsletter.placeholder`: Email input placeholder text
 * - `newsletter.buttonText`: Subscribe button text
 * - `logo.url`: Logo image URL
 * - `logo.width`: Logo display width
 * - `logo.height`: Logo display height
 * - `description.content`: Company description/tagline
 * - `links.color`: Link text color
 * - `links.items[]`: Array of navigation links (label, url)
 * - `copyright.text`: Copyright text
 * - `copyright.color`: Copyright text color
 */
const meta: Meta<typeof Footer3> = {
  title: "Page Builder/Footer/Footer3",
  component: Footer3,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Footer3>;

/**
 * Default Footer3 with dark background and newsletter section.
 */
export const Default: Story = {
  args: {
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
      content:
        "Stay connected with us for the latest updates, news, and exclusive content.",
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

/**
 * Footer3 with light background for light theme pages.
 */
export const LightBackground: Story = {
  args: {
    config: {
      bgColor: "#f5f5f5",
    },
    newsletter: {
      title: "Get updates delivered to your inbox",
      placeholder: "Your email address",
      buttonText: "Join Now",
    },
    logo: {
      url: "",
      width: 120,
      height: 40,
    },
    description: {
      content: "Join thousands of subscribers and stay informed.",
    },
    links: {
      color: "#141414",
      items: [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Blog", url: "/blog" },
        { label: "Contact", url: "/contact" },
      ],
    },
    copyright: {
      text: "© 2024 Company Name. All rights reserved.",
      color: "#666666",
    },
  },
  decorators: [
    (Story) => (
      <div>
        <style>
          {`
            .@container input {
              background-color: white !important;
              border-color: #e3e3e3 !important;
              color: #141414 !important;
            }
            .@container input::placeholder {
              color: #8d8d8d !important;
            }
          `}
        </style>
        <Story />
      </div>
    ),
  ],
};

/**
 * Footer3 with brand-colored background.
 */
export const BrandBackground: Story = {
  args: {
    config: {
      bgColor: "#692e0e",
    },
    newsletter: {
      title: "Stay in the loop",
      placeholder: "Enter your email",
      buttonText: "Subscribe",
    },
    logo: {
      url: "",
      width: 120,
      height: 40,
    },
    description: {
      content: "Get exclusive updates and offers delivered straight to your inbox.",
    },
    links: {
      color: "#ffffff",
      items: [
        { label: "Home", url: "/" },
        { label: "Features", url: "/features" },
        { label: "Pricing", url: "/pricing" },
        { label: "Support", url: "/support" },
      ],
    },
    copyright: {
      text: "© 2024 Brand Name. All rights reserved.",
      color: "rgba(255,255,255,0.7)",
    },
  },
};

/**
 * Footer3 with minimal links.
 */
export const MinimalLinks: Story = {
  args: {
    config: {
      bgColor: "#141414",
    },
    newsletter: {
      title: "Newsletter",
      placeholder: "Email",
      buttonText: "Sign up",
    },
    logo: {
      url: "",
      width: 100,
      height: 36,
    },
    description: {
      content: "Simple, clean, and effective.",
    },
    links: {
      color: "#ffffff",
      items: [
        { label: "Home", url: "/" },
        { label: "Contact", url: "/contact" },
      ],
    },
    copyright: {
      text: "© 2024 Company.",
      color: "#8d8d8d",
    },
  },
};

/**
 * Footer3 with many navigation links.
 */
export const ManyLinks: Story = {
  args: {
    config: {
      bgColor: "#141414",
    },
    newsletter: {
      title: "Don't miss out on updates",
      placeholder: "Your email address",
      buttonText: "Subscribe Now",
    },
    logo: {
      url: "",
      width: 140,
      height: 48,
    },
    description: {
      content:
        "We're committed to bringing you the latest news and resources to help you succeed.",
    },
    links: {
      color: "#ffffff",
      items: [
        { label: "Home", url: "/" },
        { label: "About Us", url: "/about" },
        { label: "Services", url: "/services" },
        { label: "Products", url: "/products" },
        { label: "Blog", url: "/blog" },
        { label: "Careers", url: "/careers" },
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

/**
 * Mobile view - simulates a small container width.
 */
export const MobileView: Story = {
  args: {
    ...Default.args,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "375px" }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Tablet view - simulates a medium container width.
 */
export const TabletView: Story = {
  args: {
    ...Default.args,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "768px" }}>
        <Story />
      </div>
    ),
  ],
};
