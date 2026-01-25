/**
 * Navbar4 Stories
 *
 * Simple horizontal navigation bar with dark background.
 * Logo left, links centered, single button right.
 * Clean minimal design with no floating container or border.
 *
 * Key features:
 * - Dark background for contrast
 * - Logo on the left side
 * - Navigation links centered (light colored)
 * - Single action button on right
 * - Mobile hamburger menu with Sheet component
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Navbar4 } from './Navbar4';

const meta = {
  title: 'PageBuilder/Components/Navbar4',
  component: Navbar4,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A simple horizontal navigation bar with dark background.

## Features

- **Dark Background**: Full-width navbar with dark background
- **Logo**: Left-aligned logo with customizable dimensions
- **Centered Links**: Light-colored navigation links in the center
- **Single Button**: Right-aligned CTA button
- **Mobile Menu**: Hamburger icon that opens a Sheet with vertical navigation

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.

| Container Width | Layout |
|-----------------|--------|
| < 1024px | Mobile (hamburger menu) |
| ≥ 1024px (@5xl) | Desktop (horizontal nav with centered links) |

## Props Structure

\`\`\`typescript
type Navbar4Props = {
  logo: {
    url: string;      // Image URL (empty shows placeholder)
    width: number;    // Display width in pixels
    height: number;   // Display height in pixels
  };
  links: {
    color: HexColor;  // Shared text color for all links (usually light)
    items: Array<{ label: string; href: string }>;
  };
  buttons: {
    items: Array<{
      label: string;
      href: string;
      textColor: HexColor;
      bgColor: HexColor;
      borderColor: HexColor;
    }>;
  };
};
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="@container">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Navbar4>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default navbar with dark background and light links.
 */
export const Default: Story = {
  args: {
    logo: {
      url: '',
      width: 45,
      height: 45,
    },
    links: {
      color: '#ffffff',
      items: [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'About', href: '/about' },
      ],
    },
    buttons: {
      items: [
        {
          label: 'Contact Us',
          href: '/contact',
          textColor: '#692e0e',
          bgColor: '#ffffff',
          borderColor: '#ffffff',
        },
      ],
    },
  },
};

/**
 * Navbar with more navigation links.
 */
export const MoreLinks: Story = {
  args: {
    ...Default.args,
    links: {
      color: '#ffffff',
      items: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  },
};

/**
 * Navbar with brand accent button.
 */
export const AccentButton: Story = {
  args: {
    ...Default.args,
    buttons: {
      items: [
        {
          label: 'Get Started',
          href: '/signup',
          textColor: '#ffffff',
          bgColor: '#692e0e',
          borderColor: '#692e0e',
        },
      ],
    },
  },
};

/**
 * Minimal navbar with fewer links.
 */
export const Minimal: Story = {
  args: {
    logo: {
      url: '',
      width: 40,
      height: 40,
    },
    links: {
      color: '#ffffff',
      items: [
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    buttons: {
      items: [
        {
          label: 'Sign up',
          href: '/signup',
          textColor: '#141414',
          bgColor: '#ffffff',
          borderColor: '#ffffff',
        },
      ],
    },
  },
};

/**
 * Navbar with muted link colors.
 */
export const MutedLinks: Story = {
  args: {
    ...Default.args,
    links: {
      color: '#a3a3a3',
      items: [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'About', href: '/about' },
      ],
    },
  },
};

/**
 * Mobile viewport simulation.
 * Container constrained to 375px to trigger mobile layout.
 */
export const MobileView: Story = {
  args: Default.args,
  decorators: [
    (Story) => (
      <div className="@container max-w-[375px] mx-auto border">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Shows the mobile hamburger menu layout. Container is constrained to 375px to trigger mobile view via container queries.',
      },
    },
  },
};

/**
 * Tablet viewport simulation.
 * Container at 768px still shows mobile layout (< 1024px breakpoint).
 */
export const TabletView: Story = {
  args: Default.args,
  decorators: [
    (Story) => (
      <div className="@container max-w-[768px] mx-auto border">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Shows the tablet layout at 768px. Still displays mobile menu since breakpoint is at 1024px (@5xl).',
      },
    },
  },
};
