/**
 * About1 Stories
 *
 * About section with title at top, large image below, and multiple
 * description blocks below the image.
 *
 * Key features:
 * - Configurable background color
 * - Title text
 * - First description (intro paragraph)
 * - Large featured image
 * - Second and third descriptions in columns
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { About1 } from './About1';

const meta = {
  title: 'PageBuilder/Components/About1',
  component: About1,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A responsive about section component for landing pages.

## Features

- **Background Color**: Customizable section background
- **Title**: Section heading text with responsive sizing
- **Description 1**: Intro paragraph centered at top
- **Featured Image**: Large image below intro text
- **Description 2 & 3**: Two-column text below image

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.
This ensures the component responds to its parent container width.

| Container Width | Layout |
|-----------------|--------|
| < 768px | Stacked, centered text, single column |
| ≥ 768px (@3xl) | Two-column descriptions |

## Props Structure

\`\`\`typescript
type About1Props = {
  config: {
    bgColor: HexColor;       // Section background
  };
  title: {
    label: string;           // Heading text
  };
  description1: {
    content: string;         // Intro paragraph
  };
  image: {
    url: string;             // Image URL (empty shows placeholder)
  };
  description2: {
    content: string;         // Left column text
  };
  description3: {
    content: string;         // Right column text
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
} satisfies Meta<typeof About1>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default about section with placeholder image.
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: '#ffffff',
    },
    title: {
      label: 'About Our Company',
    },
    description1: {
      content: 'We are a team of passionate individuals dedicated to creating exceptional digital experiences. Our mission is to help businesses grow and succeed in the digital age.',
    },
    image: {
      url: '',
    },
    description2: {
      content: 'Founded in 2020, we have been at the forefront of innovation, constantly pushing the boundaries of what\'s possible in web design and development.',
    },
    description3: {
      content: 'Our commitment to quality and customer satisfaction has made us a trusted partner for businesses of all sizes. We believe in building long-term relationships based on trust and mutual success.',
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
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
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
    },
  },
};

/**
 * About section with brand background.
 */
export const BrandBackground: Story = {
  args: {
    ...Default.args,
    config: {
      bgColor: '#fef3c7',
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
        story: 'Shows the mobile stacked layout. Text is centered, descriptions stack in single column.',
      },
    },
  },
};

/**
 * Tablet viewport simulation.
 * Container at 768px shows the two-column layout.
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
        story: 'Shows the tablet layout at 768px (@3xl breakpoint). Two-column descriptions activate.',
      },
    },
  },
};
