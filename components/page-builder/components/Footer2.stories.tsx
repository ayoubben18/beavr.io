import type { Meta, StoryObj } from "@storybook/react";
import { Footer2 } from "./Footer2";

/**
 * Footer2 is a modern footer layout with:
 * - Top left: Circular logo + brand name
 * - Top right: Link columns (1-4 columns with header + links)
 * - Divider line
 * - Bottom: Centered social icons + copyright text
 *
 * ## Features
 * - Circular logo placeholder
 * - Brand name below logo
 * - Dynamic 1-4 link columns
 * - Social media icons (centered)
 * - Centered copyright text
 * - CSS Container Queries for responsiveness
 *
 * ## Props Structure
 * ```typescript
 * {
 *   config: { bgColor: string },
 *   logo: { url: string, width: number, height: number },
 *   brandName: { label: string },
 *   linkColumns: { heading: string, links: { label: string, href: string }[] }[],
 *   socials: { platform: string, url: string }[],
 *   copyright: { text: string, color: string }
 * }
 * ```
 *
 * ## Responsive Behavior
 * | Breakpoint | Layout |
 * |------------|--------|
 * | Default | Stacked: logo/brand, then columns, then socials/copyright |
 * | @3xl (1024px) | Side by side: logo/brand left, columns right |
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
 * Default light footer with 4 link columns and centered social icons.
 */
export const Default: Story = {
  args: {
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
    socials: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "github", url: "https://github.com" },
    ],
    copyright: {
      text: "© 2024 Company. All rights reserved.",
      color: "#8d8d8d",
    },
  },
};

/**
 * Dark background variant with 4 columns.
 */
export const DarkBackground: Story = {
  args: {
    config: {
      bgColor: "#141414",
    },
    logo: {
      url: "",
      width: 40,
      height: 40,
    },
    brandName: {
      label: "DarkCo",
    },
    linkColumns: [
      {
        heading: "Products",
        links: [
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
          { label: "API", href: "/api" },
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
          { label: "Docs", href: "/docs" },
          { label: "Support", href: "/support" },
          { label: "Status", href: "/status" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: "Security", href: "/security" },
        ],
      },
    ],
    socials: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "github", url: "https://github.com" },
      { platform: "discord", url: "https://discord.com" },
    ],
    copyright: {
      text: "© 2024 DarkCo. All rights reserved.",
      color: "#666666",
    },
  },
};

/**
 * Two columns variant - minimal layout.
 */
export const TwoColumns: Story = {
  args: {
    config: {
      bgColor: "#f5f5f5",
    },
    logo: {
      url: "",
      width: 40,
      height: 40,
    },
    brandName: {
      label: "MinimalCo",
    },
    linkColumns: [
      {
        heading: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
        ],
      },
    ],
    socials: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
    copyright: {
      text: "© 2024 MinimalCo.",
      color: "#8d8d8d",
    },
  },
};

/**
 * Three columns variant.
 */
export const ThreeColumns: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    logo: {
      url: "",
      width: 40,
      height: 40,
    },
    brandName: {
      label: "TripleCo",
    },
    linkColumns: [
      {
        heading: "Products",
        links: [
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
          { label: "Enterprise", href: "/enterprise" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Press", href: "/press" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Help Center", href: "/help" },
          { label: "Contact", href: "/contact" },
          { label: "Status", href: "/status" },
        ],
      },
    ],
    socials: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "instagram", url: "https://instagram.com" },
    ],
    copyright: {
      text: "© 2024 TripleCo. All rights reserved.",
      color: "#8d8d8d",
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
      width: 40,
      height: 40,
    },
    brandName: {
      label: "BrandCo",
    },
    linkColumns: [
      {
        heading: "Products",
        links: [
          { label: "Solutions", href: "/solutions" },
          { label: "Pricing", href: "/pricing" },
          { label: "Demo", href: "/demo" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Team", href: "/team" },
          { label: "Blog", href: "/blog" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Help", href: "/help" },
          { label: "FAQ", href: "/faq" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
        ],
      },
    ],
    socials: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "facebook", url: "https://facebook.com" },
      { platform: "instagram", url: "https://instagram.com" },
    ],
    copyright: {
      text: "© 2024 BrandCo. All rights reserved.",
      color: "#ffffff99",
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
