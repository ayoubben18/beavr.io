/**
 * Hero4 Stories
 *
 * Centered hero with bordered sections and decorative elements.
 * Features a boxed design with optional image.
 *
 * Key features:
 * - Bordered container with rounded corners
 * - Decorative diagonal line elements
 * - Title, description, and CTAs
 * - Optional image (shows placeholder when empty)
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Hero4 } from './Hero4';

const meta = {
  title: 'PageBuilder/Components/Hero4',
  component: Hero4,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A bordered hero section component with decorative elements.

## Features

- **Background Color**: Customizable section background
- **Bordered Container**: Rounded border with decorative patterns
- **Title**: Bold headline text with responsive sizing
- **Description**: Supporting paragraph text
- **CTA Buttons**: Multiple buttons with individual color customization
- **Image**: Optional image with placeholder fallback

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.
This ensures the component responds to its parent container width.

| Container Width | Layout |
|-----------------|--------|
| < 768px | Stacked layout, centered text |
| ≥ 768px (@3xl) | Side-by-side layout |

## Props Structure

\`\`\`typescript
type Hero4Props = {
  config: {
    bgColor: HexColor;       // Section background
  };
  title: {
    label: string;           // Headline text
  };
  description: {
    content: string;         // Supporting text
  };
  cta: {
    items: Array<{
      label: string;
      href: string;
      textColor: HexColor;
      bgColor: HexColor;
    }>;
  };
  image: {
    url: string;             // Image URL (optional)
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
} satisfies Meta<typeof Hero4>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default hero with bordered container and placeholder image.
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: '#ffffff',
    },
    title: {
      label: 'Powerful features for your business',
    },
    description: {
      content: 'Our platform provides everything you need to grow and scale your business effectively. Start building something amazing today.',
    },
    cta: {
      items: [
        {
          label: 'Explore Features',
          href: '/features',
          textColor: '#ffffff',
          bgColor: '#692e0e',
        },
        {
          label: 'View Pricing',
          href: '/pricing',
          textColor: '#141414',
          bgColor: '#ffffff',
        },
      ],
    },
    image: {
      url: '',
    },
  },
};

/**
 * Hero with an actual image.
 */
export const WithImage: Story = {
  args: {
    ...Default.args,
    image: {
      url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=450&fit=crop',
    },
  },
};

/**
 * Hero with light gray background.
 */
export const GrayBackground: Story = {
  args: {
    ...Default.args,
    config: {
      bgColor: '#f5f5f5',
    },
  },
};

/**
 * Single CTA button variant.
 */
export const SingleCTA: Story = {
  args: {
    ...Default.args,
    cta: {
      items: [
        {
          label: 'Get Started Now',
          href: '/signup',
          textColor: '#ffffff',
          bgColor: '#692e0e',
        },
      ],
    },
  },
};

/**
 * No CTA buttons - content only.
 */
export const NoCTA: Story = {
  args: {
    ...Default.args,
    cta: {
      items: [],
    },
  },
};

/**
 * Mobile viewport simulation.
 * Container constrained to 375px.
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
        story: 'Shows the mobile layout with stacked content and centered text.',
      },
    },
  },
};

/**
 * Tablet viewport simulation.
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
        story: 'Shows the tablet layout at 768px (@3xl breakpoint) with side-by-side layout.',
      },
    },
  },
};
