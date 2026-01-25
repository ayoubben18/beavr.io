/**
 * About4 Stories
 *
 * Flipped version of About3.
 * Default: Content on left (LTR), image on right.
 * Supports LTR/RTL layout direction.
 *
 * Key features:
 * - Configurable background color
 * - LTR/RTL layout direction
 * - Content prioritized on left (in LTR mode)
 * - Title and two description paragraphs
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { About4 } from './About4';

const meta = {
  title: 'PageBuilder/Components/About4',
  component: About4,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A responsive about section with content-first layout (flipped About3).

## Features

- **Background Color**: Customizable section background
- **Direction**: LTR (content left) or RTL (content right)
- **Title**: Section heading text
- **Description 1 & 2**: Two paragraph blocks
- **Featured Image**: Image with aspect ratio placeholder

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.
This ensures the component responds to its parent container width.

| Container Width | Layout |
|-----------------|--------|
| < 768px | Stacked (image top, content below) |
| ≥ 768px (@3xl) | Side-by-side (respects direction) |

## Props Structure

\`\`\`typescript
type About4Props = {
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
} satisfies Meta<typeof About4>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default about section with LTR layout (content on left).
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: '#ffffff',
      direction: 'ltr',
    },
    title: {
      label: 'Why Choose Us',
    },
    description1: {
      content: 'With years of experience and a passion for excellence, we deliver solutions that exceed expectations and drive real results for our clients.',
    },
    image: {
      url: '',
    },
    description2: {
      content: 'Our dedicated team works closely with you to understand your unique needs and craft tailored solutions that help you achieve your goals.',
    },
  },
};

/**
 * RTL layout with content on the right.
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
        story: 'RTL (Right-to-Left) layout places image on the left and content on the right.',
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
      url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=500&fit=crop',
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
      direction: 'ltr',
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
      direction: 'ltr',
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
        story: 'Shows the mobile stacked layout. Image appears on top (preserved order), content below.',
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
