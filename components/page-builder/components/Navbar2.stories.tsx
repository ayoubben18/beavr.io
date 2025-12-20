/**
 * Navbar2 Stories
 *
 * Floating centered navigation bar with rounded bottom corners.
 * Logo on left, links in center, button on right.
 *
 * Key features:
 * - Centered floating design with configurable background/border
 * - Rounded bottom corners only
 * - Logo with customizable dimensions
 * - Navigation links with shared color
 * - Single action button with pill shape
 * - Mobile hamburger menu with Sheet component
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Navbar2 } from './Navbar2';

const meta = {
  title: 'PageBuilder/Components/Navbar2',
  component: Navbar2,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A floating centered navigation bar component for landing pages.

## Features

- **Floating Design**: Centered navbar with rounded bottom corners
- **Configurable Container**: Background and border colors
- **Logo**: Displays an image or default beavr logo with customizable width/height
- **Navigation Links**: Horizontal list of links with shared text color
- **Action Button**: Single pill-shaped button with individual color customization
- **Mobile Menu**: Hamburger icon that opens a Sheet with vertical navigation

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.
This ensures the component responds to its parent container width.

| Container Width | Layout |
|-----------------|--------|
| < 1024px | Mobile (hamburger menu, full-width container) |
| ≥ 1024px (@5xl) | Desktop (horizontal nav, auto-width container) |

## Props Structure

\`\`\`typescript
type Navbar2Props = {
  config: {
    bgColor: HexColor;      // Container background
    borderColor: HexColor;  // Container border
  };
  logo: {
    url: string;      // Image URL (empty shows default logo)
    width: number;    // Display width in pixels
    height: number;   // Display height in pixels
  };
  links: {
    color: HexColor;  // Shared text color for all links
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
} satisfies Meta<typeof Navbar2>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default navbar with light gray background, 3 links, and login button.
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: '#f5f5f5',
      borderColor: '#e3e3e3',
    },
    logo: {
      url: '',
      width: 32,
      height: 32,
    },
    links: {
      color: '#141414',
      items: [
        { label: 'Products', href: '#products' },
        { label: 'Resources', href: '#resources' },
        { label: 'Integration', href: '#integration' },
      ],
    },
    buttons: {
      items: [
        {
          label: 'Log in',
          href: '/login',
          textColor: '#141414',
          bgColor: '#ffffff',
          borderColor: '#e3e3e3',
        },
      ],
    },
  },
};

/**
 * Navbar with white background and subtle border.
 */
export const WhiteBackground: Story = {
  args: {
    ...Default.args,
    config: {
      bgColor: '#ffffff',
      borderColor: '#e3e3e3',
    },
  },
};

/**
 * Navbar with custom brand colors.
 */
export const CustomColors: Story = {
  args: {
    config: {
      bgColor: '#fef3c7',
      borderColor: '#fcd34d',
    },
    logo: {
      url: '',
      width: 32,
      height: 32,
    },
    links: {
      color: '#92400e',
      items: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'About', href: '#about' },
      ],
    },
    buttons: {
      items: [
        {
          label: 'Get Started',
          href: '/signup',
          textColor: '#ffffff',
          bgColor: '#b45309',
          borderColor: '#b45309',
        },
      ],
    },
  },
};

/**
 * Navbar with dark theme.
 */
export const DarkTheme: Story = {
  args: {
    config: {
      bgColor: '#1f2937',
      borderColor: '#374151',
    },
    logo: {
      url: '',
      width: 32,
      height: 32,
    },
    links: {
      color: '#f3f4f6',
      items: [
        { label: 'Products', href: '#products' },
        { label: 'Solutions', href: '#solutions' },
        { label: 'Developers', href: '#developers' },
      ],
    },
    buttons: {
      items: [
        {
          label: 'Sign in',
          href: '/login',
          textColor: '#1f2937',
          bgColor: '#ffffff',
          borderColor: '#ffffff',
        },
      ],
    },
  },
};

/**
 * Navbar with more links.
 */
export const MoreLinks: Story = {
  args: {
    ...Default.args,
    links: {
      color: '#141414',
      items: [
        { label: 'Home', href: '/' },
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  },
};

/**
 * Minimal navbar with fewer links.
 */
export const Minimal: Story = {
  args: {
    config: {
      bgColor: '#f5f5f5',
      borderColor: '#e3e3e3',
    },
    logo: {
      url: '',
      width: 28,
      height: 28,
    },
    links: {
      color: '#141414',
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
          textColor: '#ffffff',
          bgColor: '#141414',
          borderColor: '#141414',
        },
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
        story: 'Shows the mobile hamburger menu layout. The container is constrained to 375px width to trigger the mobile view via container queries.',
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
