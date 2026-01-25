import type { Meta, StoryObj } from "@storybook/react";
import { Footer1 } from "./Footer1";

/**
 * Footer1 is a modern footer layout with:
 * - Left: Logo (circle) + brand name + tagline + social icons
 * - Right: Dynamic link columns (1-4)
 * - Bottom: Divider + copyright + legal links
 *
 * ## Features
 * - Circular logo placeholder
 * - Brand name and tagline
 * - Social media icons (Twitter, LinkedIn, GitHub, etc.)
 * - Dynamic link columns (1-4 columns)
 * - Legal links in footer bottom
 * - CSS Container Queries for responsiveness
 *
 * ## Props Structure
 * ```typescript
 * {
 *   config: { bgColor: string },
 *   logo: { url: string, width: number, height: number },
 *   brandName: { label: string },
 *   description: { content: string },
 *   socials: Array<{ platform: string, url: string }>,
 *   linkColumns: Array<{ heading: string, links: Array<{ label: string, href: string }> }>,
 *   legalLinks: Array<{ label: string, href: string }>,
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
  title: "Page Builder/Footer/Footer1",
  component: Footer1,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer1>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default footer with brand, socials, and 3 link columns.
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
    description: {
      content: "Building amazing digital experiences.",
    },
    socials: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "github", url: "https://github.com" },
    ],
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
    ],
    legalLinks: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
    copyright: {
      text: "© 2024 Company. All rights reserved.",
      color: "#8d8d8d",
    },
  },
};

/**
 * Dark background variant.
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
      label: "TechCorp",
    },
    description: {
      content: "Innovating the future of technology.",
    },
    socials: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "github", url: "https://github.com" },
      { platform: "youtube", url: "https://youtube.com" },
    ],
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
        heading: "Resources",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Docs", href: "/docs" },
          { label: "API", href: "/api" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    legalLinks: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
    ],
    copyright: {
      text: "© 2024 TechCorp Inc. All rights reserved.",
      color: "#666666",
    },
  },
};

/**
 * Minimal with 2 columns.
 */
export const TwoColumns: Story = {
  args: {
    config: {
      bgColor: "#f5f5f5",
    },
    logo: {
      url: "",
      width: 36,
      height: 36,
    },
    brandName: {
      label: "Minimal",
    },
    description: {
      content: "Simple. Clean. Effective.",
    },
    socials: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "instagram", url: "https://instagram.com" },
    ],
    linkColumns: [
      {
        heading: "Products",
        links: [
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Help", href: "/help" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    legalLinks: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
    copyright: {
      text: "© 2024 Minimal Co.",
      color: "#8d8d8d",
    },
  },
};

/**
 * Full 4 columns layout.
 */
export const FourColumns: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    logo: {
      url: "",
      width: 44,
      height: 44,
    },
    brandName: {
      label: "Enterprise",
    },
    description: {
      content: "The complete platform for growing businesses.",
    },
    socials: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "github", url: "https://github.com" },
      { platform: "youtube", url: "https://youtube.com" },
      { platform: "discord", url: "https://discord.com" },
    ],
    linkColumns: [
      {
        heading: "Products",
        links: [
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
          { label: "Enterprise", href: "/enterprise" },
          { label: "Integrations", href: "/integrations" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Documentation", href: "/docs" },
          { label: "API Reference", href: "/api" },
          { label: "Blog", href: "/blog" },
          { label: "Guides", href: "/guides" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Press", href: "/press" },
          { label: "Partners", href: "/partners" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Terms", href: "/terms" },
          { label: "Privacy", href: "/privacy" },
          { label: "Security", href: "/security" },
          { label: "Compliance", href: "/compliance" },
        ],
      },
    ],
    legalLinks: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
    copyright: {
      text: "© 2024 Enterprise Inc. All rights reserved.",
      color: "#8d8d8d",
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
