/**
 * About3 Stories
 *
 * About section with image and two description paragraphs.
 * Supports LTR/RTL layout direction.
 * Default: Image on left (RTL), content on right.
 *
 * Key features:
 * - Configurable background color
 * - LTR/RTL layout direction
 * - Image with placeholder fallback
 * - Title and two description paragraphs
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { About3 } from './About3';

const meta = {
  title: 'PageBuilder/Components/About3',
  component: About3,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A responsive about section with directional layout support.

## Features

- **Background Color**: Customizable section background
- **Direction**: RTL (image left) or LTR (image right)
- **Featured Image**: Image with aspect ratio placeholder
- **Title**: Section heading text
- **Description 1 & 2**: Two paragraph blocks

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.
This ensures the component responds to its parent container width.

| Container Width | Layout |
|-----------------|--------|
| < 768px | Stacked (image top, content below) |
| ≥ 768px (@3xl) | Side-by-side (respects direction) |

## Props Structure

\`\`\`typescript
type About3Props = {
  config: {
    bgColor: HexColor;         // Section background
    direction: 'ltr' | 'rtl';  // Layout direction
  };
  title: {
    label: string;             // Heading text
  };
  description1: {
    content: string;           // First paragraph
  };
  image: {
    url: string;               // Image URL (empty shows placeholder)
  };
  description2: {
    content: string;           // Second paragraph
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
} satisfies Meta<typeof About3>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default about section with RTL layout (image on left).
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: '#ffffff',
      direction: 'rtl',
    },
    title: {
      label: 'Our Story',
    },
    description1: {
      content: 'Every great company starts with a vision. Ours was to create tools that empower people to build their dreams without technical barriers.',
    },
    image: {
      url: '',
    },
    description2: {
      content: 'Today, we serve thousands of customers worldwide, helping them bring their ideas to life with our intuitive platform and dedicated support team.',
    },
  },
};

/**
 * LTR layout with image on the right.
 */
export const LTRLayout: Story = {
  args: {
    ...Default.args,
    config: {
      bgColor: '#ffffff',
      direction: 'ltr',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'LTR (Left-to-Right) layout places content on the left and image on the right.',
      },
    },
  },
};

/**
 * About section with actual image.
 */
export const WithImage: Story = {
  args: {
    ...Default.args,
    image: {
      url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop',
    },
  },
};

/**
 * About section with colored background.
 */
export const ColoredBackground: Story = {
  args: {
    ...Default.args,
    config: {
      bgColor: '#f5f5f5',
      direction: 'rtl',
    },
  },
};

/**
 * Brand-colored background.
 */
export const BrandBackground: Story = {
  args: {
    ...Default.args,
    config: {
      bgColor: '#fef3c7',
      direction: 'rtl',
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
        story: 'Shows the mobile stacked layout. Image appears on top, content below.',
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
