/**
 * Hero2 Stories
 *
 * Variation of Hero1 with image on the LEFT by default (direction: rtl).
 * Full hero section with title, description, CTAs, and image.
 *
 * Key features:
 * - Configurable background color
 * - RTL layout by default (image left, content right)
 * - Title and description text
 * - Multiple CTA buttons with individual colors
 * - Hero image with placeholder fallback
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Hero2 } from './Hero2';

const meta = {
  title: 'PageBuilder/Components/Hero2',
  component: Hero2,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A responsive hero section component with image on the left by default.

## Features

- **Background Color**: Customizable section background
- **Direction**: RTL by default (image left, content right), can flip to LTR
- **Title**: Bold headline text with responsive sizing
- **Description**: Supporting paragraph text
- **CTA Buttons**: Up to multiple buttons with individual color customization
- **Hero Image**: Featured image with aspect ratio placeholder

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.

| Container Width | Layout |
|-----------------|--------|
| < 768px | Stacked (image below content, centered text) |
| ≥ 768px (@3xl) | Side-by-side (image left, content right) |
| ≥ 1024px (@5xl) | Larger heading text |

## Props Structure

\`\`\`typescript
type Hero2Props = {
  config: {
    bgColor: HexColor;       // Section background
    direction: 'ltr' | 'rtl'; // Layout direction (default: rtl)
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
} satisfies Meta<typeof Hero2>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default hero with RTL layout (image left, content right).
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: '#f5f5f5',
      direction: 'rtl',
    },
    title: {
      label: 'Build something amazing',
    },
    description: {
      content: 'Create stunning landing pages with our easy-to-use page builder. No coding required.',
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
 * LTR layout with image on the right, content on the left.
 */
export const LTRLayout: Story = {
  args: {
    ...Default.args,
    config: {
      bgColor: '#f5f5f5',
      direction: 'ltr',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'LTR (Left-to-Right) layout places the content on the left and image on the right.',
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
      direction: 'rtl',
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
        story: 'Shows the tablet layout at 768px (@3xl breakpoint). Side-by-side layout activates with image on left.',
      },
    },
  },
};
