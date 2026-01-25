import type { Meta, StoryObj } from "@storybook/react";

import { Footer4 } from "./Footer4";

/**
 * Footer 4 Component
 *
 * Footer with a prominent newsletter section that spans the full width,
 * followed by logo, navigation links, and centered copyright.
 *
 * ## Features
 * - Large, prominent newsletter section with title and input
 * - Configurable background color (light or dark themes)
 * - Logo with customizable dimensions
 * - Navigation links with customizable color
 * - Centered copyright text
 *
 * ## Props Structure
 * - `config.bgColor`: Section background color
 * - `newsletter.title`: Large newsletter heading
 * - `newsletter.placeholder`: Email input placeholder text
 * - `newsletter.buttonText`: Subscribe button text
 * - `logo.url`: Logo image URL
 * - `logo.width`: Logo display width
 * - `logo.height`: Logo display height
 * - `description.content`: Description text shown below newsletter title
 * - `links.color`: Link text color
 * - `links.items[]`: Array of navigation links (label, url)
 * - `copyright.text`: Copyright text (centered)
 * - `copyright.color`: Copyright text color
 */
const meta: Meta<typeof Footer4> = {
  title: "Page Builder/Footer/Footer4",
  component: Footer4,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Footer4>;

/**
 * Default Footer4 with light background and prominent newsletter.
 */
export const Default: Story = {
  args: {
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

/**
 * Footer4 with dark background.
 */
export const DarkBackground: Story = {
  args: {
    config: {
      bgColor: "#141414",
    },
    newsletter: {
      title: "Stay Updated",
      placeholder: "Your email",
      buttonText: "Subscribe",
    },
    logo: {
      url: "",
      width: 120,
      height: 40,
    },
    description: {
      content: "Get the latest news and updates delivered to your inbox.",
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
 * Footer4 with brand-colored background.
 */
export const BrandBackground: Story = {
  args: {
    config: {
      bgColor: "#692e0e",
    },
    newsletter: {
      title: "Never Miss an Update",
      placeholder: "Enter your email",
      buttonText: "Join Now",
    },
    logo: {
      url: "",
      width: 120,
      height: 40,
    },
    description: {
      content: "Be the first to know about new features and updates.",
    },
    links: {
      color: "#ffffff",
      items: [
        { label: "Home", url: "/" },
        { label: "Features", url: "/features" },
        { label: "Pricing", url: "/pricing" },
        { label: "Contact", url: "/contact" },
      ],
    },
    copyright: {
      text: "© 2024 Brand Name. All rights reserved.",
      color: "rgba(255,255,255,0.7)",
    },
  },
};

/**
 * Footer4 with gray background.
 */
export const GrayBackground: Story = {
  args: {
    config: {
      bgColor: "#f5f5f5",
    },
    newsletter: {
      title: "Subscribe Today",
      placeholder: "name@email.com",
      buttonText: "Subscribe",
    },
    logo: {
      url: "",
      width: 120,
      height: 40,
    },
    description: {
      content: "Weekly insights delivered straight to your inbox.",
    },
    links: {
      color: "#141414",
      items: [
        { label: "Home", url: "/" },
        { label: "Blog", url: "/blog" },
        { label: "Contact", url: "/contact" },
      ],
    },
    copyright: {
      text: "© 2024 Company Name. All rights reserved.",
      color: "#666666",
    },
  },
};

/**
 * Footer4 with many navigation links.
 */
export const ManyLinks: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    newsletter: {
      title: "Get Weekly Updates",
      placeholder: "Enter your email address",
      buttonText: "Sign Up Free",
    },
    logo: {
      url: "",
      width: 140,
      height: 48,
    },
    description: {
      content:
        "Join thousands of subscribers who receive our weekly newsletter.",
    },
    links: {
      color: "#141414",
      items: [
        { label: "Home", url: "/" },
        { label: "About Us", url: "/about" },
        { label: "Services", url: "/services" },
        { label: "Products", url: "/products" },
        { label: "Blog", url: "/blog" },
        { label: "Careers", url: "/careers" },
        { label: "Contact", url: "/contact" },
        { label: "Privacy", url: "/privacy" },
      ],
    },
    copyright: {
      text: "© 2024 Company Name. All rights reserved.",
      color: "#8d8d8d",
    },
  },
};

/**
 * Footer4 with minimal links.
 */
export const MinimalLinks: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    newsletter: {
      title: "Newsletter",
      placeholder: "Email",
      buttonText: "Join",
    },
    logo: {
      url: "",
      width: 100,
      height: 36,
    },
    description: {
      content: "Stay in the loop.",
    },
    links: {
      color: "#141414",
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
