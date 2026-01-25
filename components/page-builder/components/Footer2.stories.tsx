import type { Meta, StoryObj } from "@storybook/react";
import { Footer2 } from "./Footer2";

/**
 * Footer2 is similar to Footer1 but with a centered bottom section.
 * The copyright text is centered instead of left-aligned.
 *
 * ## Features
 * - Logo with customizable dimensions
 * - Company description text
 * - Horizontal navigation links
 * - Centered copyright text at bottom
 * - CSS Container Queries for responsiveness
 * - Dark theme by default
 *
 * ## Props Structure
 * ```typescript
 * {
 *   config: { bgColor: string },
 *   logo: { url: string, width: number, height: number },
 *   description: { content: string },
 *   links: { color: string, items: { label: string, url: string }[] },
 *   copyright: { text: string, color: string }
 * }
 * ```
 *
 * ## Responsive Behavior
 * | Breakpoint | Layout |
 * |------------|--------|
 * | Default | Stacked layout |
 * | @3xl (1024px) | Side by side layout |
 */
const meta = {
  title: "Page Builder/Footer/Footer2",
  component: Footer2,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer2>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default dark footer with centered copyright.
 */
export const Default: Story = {
  args: {
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

/**
 * Light background variant with centered copyright.
 */
export const LightBackground: Story = {
  args: {
    config: {
      bgColor: "#f5f5f5",
    },
    logo: {
      url: "",
      width: 120,
      height: 40,
    },
    description: {
      content:
        "Building the future of digital experiences with innovative solutions.",
    },
    links: {
      color: "#141414",
      items: [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Services", url: "/services" },
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
 * Brand-colored background.
 */
export const BrandBackground: Story = {
  args: {
    config: {
      bgColor: "#692e0e",
    },
    logo: {
      url: "",
      width: 120,
      height: 40,
    },
    description: {
      content:
        "Your trusted partner for digital transformation and business growth.",
    },
    links: {
      color: "#ffffff",
      items: [
        { label: "Home", url: "/" },
        { label: "Services", url: "/services" },
        { label: "Portfolio", url: "/portfolio" },
        { label: "Blog", url: "/blog" },
        { label: "Contact", url: "/contact" },
      ],
    },
    copyright: {
      text: "© 2024 Brand Co. All rights reserved.",
      color: "#ffffff99",
    },
  },
};

/**
 * Minimal footer with fewer links.
 */
export const MinimalLinks: Story = {
  args: {
    config: {
      bgColor: "#141414",
    },
    logo: {
      url: "",
      width: 100,
      height: 32,
    },
    description: {
      content: "Simple. Elegant. Effective.",
    },
    links: {
      color: "#ffffff",
      items: [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Contact", url: "/contact" },
      ],
    },
    copyright: {
      text: "© 2024 Minimal Co.",
      color: "#8d8d8d",
    },
  },
};

/**
 * Extended links list demonstrating centered copyright with many links.
 */
export const ManyLinks: Story = {
  args: {
    config: {
      bgColor: "#1a1a1a",
    },
    logo: {
      url: "",
      width: 140,
      height: 45,
    },
    description: {
      content:
        "A comprehensive platform for all your digital needs. From design to development.",
    },
    links: {
      color: "#ffffff",
      items: [
        { label: "Home", url: "/" },
        { label: "Products", url: "/products" },
        { label: "Solutions", url: "/solutions" },
        { label: "Pricing", url: "/pricing" },
        { label: "Resources", url: "/resources" },
        { label: "Blog", url: "/blog" },
        { label: "Support", url: "/support" },
        { label: "Contact", url: "/contact" },
        { label: "Careers", url: "/careers" },
        { label: "Privacy", url: "/privacy" },
        { label: "Terms", url: "/terms" },
      ],
    },
    copyright: {
      text: "© 2024 Enterprise Corp. All rights reserved. Made with love.",
      color: "#666666",
    },
  },
};

/**
 * Mobile viewport simulation (375px container width).
 */
export const MobileView: Story = {
  args: Default.args,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "375px" }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Tablet viewport simulation (768px container width).
 */
export const TabletView: Story = {
  args: Default.args,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "768px" }}>
        <Story />
      </div>
    ),
  ],
};
