/**
 * Hero3 Stories
 *
 * Centered hero section with vertical layout.
 * Title -> Description -> Image -> CTAs
 *
 * Key features:
 * - Configurable background color
 * - Centered title and description
 * - Full-width image with rounded corners
 * - Multiple CTA buttons with individual colors
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Hero3 } from './Hero3';

const meta = {
  title: 'PageBuilder/Components/Hero3',
  component: Hero3,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A centered hero section component with vertical layout.

## Features

- **Background Color**: Customizable section background
- **Title**: Bold centered headline text with responsive sizing
- **Description**: Supporting paragraph text, centered
- **Image**: Full-width image with rounded corners (16:9 aspect ratio)
- **CTA Buttons**: Up to multiple buttons with individual color customization

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.
This ensures the component responds to its parent container width.

| Container Width | Layout |
|-----------------|--------|
| < 768px | Smaller text, tighter spacing |
| ≥ 768px (@3xl) | Medium text |
| ≥ 1024px (@5xl) | Larger heading text |

## Props Structure

\`\`\`typescript
type Hero3Props = {
  config: {
    bgColor: HexColor;       // Section background
  };
  title: {
    label: string;           // Headline text
  };
  description: {
    content: string;         // Supporting text
  };
  image: {
    url: string;             // Image URL
  };
  cta: {
    items: Array<{
      label: string;
      href: string;
      textColor: HexColor;
      bgColor: HexColor;
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
} satisfies Meta<typeof Hero3>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default hero with white background and image.
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: '#ffffff',
    },
    title: {
      label: 'Welcome to the future of design',
    },
    description: {
      content: 'Create stunning, conversion-focused landing pages with our intuitive drag-and-drop builder. No coding required.',
    },
    image: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop',
    },
    cta: {
      items: [
        {
          label: 'Get Started',
          href: '/signup',
          textColor: '#ffffff',
          bgColor: '#692e0e',
        },
        {
          label: 'Learn More',
          href: '/features',
          textColor: '#141414',
          bgColor: '#f5f5f5',
        },
      ],
    },
  },
};

/**
 * Hero with primary brand background color.
 */
export const BrandBackground: Story = {
  args: {
    config: {
      bgColor: '#692e0e',
    },
    title: {
      label: 'Join thousands of happy customers',
    },
    description: {
      content: 'Our platform has helped businesses of all sizes achieve their goals faster and more efficiently.',
    },
    image: {
      url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=675&fit=crop',
    },
    cta: {
      items: [
        {
          label: 'Start Free Trial',
          href: '/trial',
          textColor: '#692e0e',
          bgColor: '#ffffff',
        },
        {
          label: 'Watch Demo',
          href: '/demo',
          textColor: '#ffffff',
          bgColor: 'transparent',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="@container [&_h1]:text-white [&_p]:text-white/80">
        <Story />
      </div>
    ),
  ],
};

/**
 * Hero with dark background.
 */
export const DarkBackground: Story = {
  args: {
    config: {
      bgColor: '#1f2937',
    },
    title: {
      label: 'The future of web design',
    },
    description: {
      content: 'Experience next-generation tools that make creating websites faster and more intuitive than ever before.',
    },
    image: {
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=675&fit=crop',
    },
    cta: {
      items: [
        {
          label: 'Explore Features',
          href: '/features',
          textColor: '#1f2937',
          bgColor: '#ffffff',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="@container [&_h1]:text-white [&_p]:text-gray-300">
        <Story />
      </div>
    ),
  ],
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
          label: 'Get Started Free',
          href: '/signup',
          textColor: '#ffffff',
          bgColor: '#692e0e',
        },
      ],
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
        story: 'Shows the mobile layout with smaller text and tighter spacing.',
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
        story: 'Shows the tablet layout at 768px (@3xl breakpoint).',
      },
    },
  },
};
