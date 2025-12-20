/**
 * Hero1 Stories
 *
 * Full hero section with title, description, CTAs, and image.
 * Supports LTR/RTL layout direction for content positioning.
 *
 * Key features:
 * - Configurable background color
 * - LTR/RTL layout direction toggle
 * - Title and description text
 * - Multiple CTA buttons with individual colors
 * - Hero image with placeholder fallback
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Hero1 } from './Hero1';

const meta = {
  title: 'PageBuilder/Components/Hero1',
  component: Hero1,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A responsive hero section component for landing pages.

## Features

- **Background Color**: Customizable section background
- **Direction**: LTR (content left, image right) or RTL (image left, content right)
- **Title**: Bold headline text with responsive sizing
- **Description**: Supporting paragraph text
- **CTA Buttons**: Up to multiple buttons with individual color customization
- **Hero Image**: Featured image with aspect ratio placeholder

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.
This ensures the component responds to its parent container width.

| Container Width | Layout |
|-----------------|--------|
| < 768px | Stacked (image below content, centered text) |
| ≥ 768px (@3xl) | Side-by-side (content + image) |
| ≥ 1024px (@5xl) | Larger heading text |

## Props Structure

\`\`\`typescript
type Hero1Props = {
  config: {
    bgColor: HexColor;       // Section background
    direction: 'ltr' | 'rtl'; // Layout direction
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
    url: string;             // Image URL (empty shows placeholder)
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
} satisfies Meta<typeof Hero1>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default hero with LTR layout (content left, image right).
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: '#ffffff',
      direction: 'ltr',
    },
    title: {
      label: 'Build beautiful landing pages in minutes',
    },
    description: {
      content: 'Create stunning, conversion-focused landing pages with our intuitive drag-and-drop builder. No coding required.',
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
    image: {
      url: '',
    },
  },
};

/**
 * RTL layout with image on the left, content on the right.
 */
export const RTLLayout: Story = {
  args: {
    ...Default.args,
    config: {
      bgColor: '#ffffff',
      direction: 'rtl',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'RTL (Right-to-Left) layout places the image on the left and content on the right.',
      },
    },
  },
};

/**
 * Hero with a colored background.
 */
export const ColoredBackground: Story = {
  args: {
    config: {
      bgColor: '#fef3c7',
      direction: 'ltr',
    },
    title: {
      label: 'Transform your workflow today',
    },
    description: {
      content: 'Join thousands of teams who have streamlined their processes and boosted productivity with our platform.',
    },
    cta: {
      items: [
        {
          label: 'Start Free Trial',
          href: '/trial',
          textColor: '#ffffff',
          bgColor: '#b45309',
        },
      ],
    },
    image: {
      url: '',
    },
  },
};

/**
 * Hero with dark background.
 */
export const DarkBackground: Story = {
  args: {
    config: {
      bgColor: '#1f2937',
      direction: 'ltr',
    },
    title: {
      label: 'The future of web design',
    },
    description: {
      content: 'Experience next-generation tools that make creating websites faster and more intuitive than ever before.',
    },
    cta: {
      items: [
        {
          label: 'Explore Features',
          href: '/features',
          textColor: '#1f2937',
          bgColor: '#ffffff',
        },
        {
          label: 'Watch Demo',
          href: '/demo',
          textColor: '#ffffff',
          bgColor: '#1f2937',
        },
      ],
    },
    image: {
      url: '',
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
 * Hero with actual image.
 */
export const WithImage: Story = {
  args: {
    ...Default.args,
    image: {
      url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
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
 * Container constrained to 375px to show stacked layout.
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
        story: 'Shows the mobile stacked layout. Content is centered and image appears below.',
      },
    },
  },
};

/**
 * Tablet viewport simulation.
 * Container at 768px shows the side-by-side layout.
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
        story: 'Shows the tablet layout at 768px (@3xl breakpoint). Side-by-side layout activates.',
      },
    },
  },
};
