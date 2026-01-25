/**
 * Navbar3 Stories
 *
 * Centered navigation bar with rounded container and border.
 * Logo on left, links centered, buttons on right.
 *
 * Key features:
 * - Rounded container with border
 * - Logo on the left side
 * - Navigation links centered
 * - Action buttons on right
 * - Mobile hamburger menu with Sheet component
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Navbar3 } from './Navbar3';

const meta = {
  title: 'PageBuilder/Components/Navbar3',
  component: Navbar3,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A navigation bar with centered links and rounded container.

## Features

- **Rounded Container**: Full-width navbar with rounded corners and border
- **Logo**: Left-aligned logo with customizable dimensions
- **Centered Links**: Navigation links in the center with shared text color
- **Action Buttons**: Right-aligned buttons with individual styling
- **Mobile Menu**: Hamburger icon that opens a Sheet with vertical navigation

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.

| Container Width | Layout |
|-----------------|--------|
| < 1024px | Mobile (hamburger menu) |
| ≥ 1024px (@5xl) | Desktop (horizontal nav with centered links) |

## Props Structure

\`\`\`typescript
type Navbar3Props = {
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
} satisfies Meta<typeof Navbar3>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default navbar with centered links and two buttons.
 */
export const Default: Story = {
  args: {
    logo: {
      url: '',
      width: 35,
      height: 35,
    },
    links: {
      color: '#141414',
      items: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    buttons: {
      items: [
        {
          label: 'Sign In',
          href: '/login',
          textColor: '#141414',
          bgColor: '#ffffff',
          borderColor: '#e3e3e3',
        },
        {
          label: 'Sign Up',
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
 * Navbar with more navigation links.
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
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  },
};

/**
 * Navbar with single button.
 */
export const SingleButton: Story = {
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
 * Navbar with custom brand colors.
 */
export const CustomColors: Story = {
  args: {
    logo: {
      url: '',
      width: 35,
      height: 35,
    },
    links: {
      color: '#1e40af',
      items: [
        { label: 'Products', href: '#products' },
        { label: 'Solutions', href: '#solutions' },
        { label: 'Resources', href: '#resources' },
      ],
    },
    buttons: {
      items: [
        {
          label: 'Log In',
          href: '/login',
          textColor: '#1e40af',
          bgColor: '#ffffff',
          borderColor: '#93c5fd',
        },
        {
          label: 'Try Free',
          href: '/signup',
          textColor: '#ffffff',
          bgColor: '#1e40af',
          borderColor: '#1e40af',
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
      width: 32,
      height: 32,
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
