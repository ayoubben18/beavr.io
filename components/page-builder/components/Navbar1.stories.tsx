/**
 * Navbar1 Stories
 *
 * Standard navigation bar with logo, links, and buttons.
 * Features responsive design using CSS Container Queries for
 * proper behavior in the page builder preview.
 *
 * Key features:
 * - Logo with customizable dimensions
 * - Navigation links with shared color
 * - Action buttons with individual styling
 * - Mobile hamburger menu with Sheet component
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Navbar1 } from './Navbar1';

const meta = {
  title: 'PageBuilder/Components/Navbar1',
  component: Navbar1,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A responsive navigation bar component for landing pages.

## Features

- **Logo**: Displays an image or placeholder with customizable width/height
- **Navigation Links**: Horizontal list of links with shared text color and hover effects
- **Action Buttons**: Up to 3 buttons with individual color customization (text, background, border)
- **Mobile Menu**: Hamburger icon that opens a Sheet with vertical navigation

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.
This ensures the component responds to its parent container width, which is essential
for the page builder preview to work correctly at different viewport sizes.

| Container Width | Layout |
|-----------------|--------|
| < 1024px | Mobile (hamburger menu) |
| ≥ 1024px | Desktop (horizontal nav) |

## Props Structure

\`\`\`typescript
type Navbar1Props = {
  logo: {
    url: string;      // Image URL (empty shows placeholder)
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
} satisfies Meta<typeof Navbar1>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default navbar with logo placeholder, 4 links, and 2 buttons.
 */
export const Default: Story = {
  args: {
    logo: {
      url: '',
      width: 32,
      height: 32,
    },
    links: {
      color: '#141414',
      items: [
        { label: 'Home', href: '#' },
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    buttons: {
      items: [
        {
          label: 'Login',
          href: '/login',
          textColor: '#141414',
          bgColor: '#ffffff',
          borderColor: '#e3e3e3',
        },
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
 * Navbar with a logo image.
 */
export const WithLogo: Story = {
  args: {
    ...Default.args,
    logo: {
      url: 'https://via.placeholder.com/120x40?text=Logo',
      width: 120,
      height: 40,
    },
  },
};

/**
 * Navbar with custom brand colors.
 */
export const CustomColors: Story = {
  args: {
    logo: {
      url: '',
      width: 32,
      height: 32,
    },
    links: {
      color: '#1e40af',
      items: [
        { label: 'Products', href: '#' },
        { label: 'Solutions', href: '#' },
        { label: 'Resources', href: '#' },
        { label: 'Company', href: '#' },
      ],
    },
    buttons: {
      items: [
        {
          label: 'Sign In',
          href: '/signin',
          textColor: '#1e40af',
          bgColor: '#ffffff',
          borderColor: '#1e40af',
        },
        {
          label: 'Start Free Trial',
          href: '/trial',
          textColor: '#ffffff',
          bgColor: '#1e40af',
          borderColor: '#1e40af',
        },
      ],
    },
  },
};

/**
 * Minimal navbar with fewer links and single button.
 */
export const Minimal: Story = {
  args: {
    logo: {
      url: '',
      width: 28,
      height: 28,
    },
    links: {
      color: '#141414',
      items: [
        { label: 'About', href: '#about' },
        { label: 'Blog', href: '#blog' },
      ],
    },
    buttons: {
      items: [
        {
          label: 'Contact Us',
          href: '/contact',
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
 * Wrap in a narrow container to trigger mobile layout.
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
