/**
 * About2 Stories
 *
 * 2-column about section with image on left and text sections on right.
 * Includes a highlight section block below the main description.
 *
 * Key features:
 * - Configurable background color
 * - Image on left side
 * - Title and description on right
 * - Highlight section with border
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { About2 } from './About2';

const meta = {
  title: 'PageBuilder/Components/About2',
  component: About2,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A responsive 2-column about section component for landing pages.

## Features

- **Background Color**: Customizable section background
- **Featured Image**: Large image on left column
- **Title**: Section heading text
- **Description**: Main paragraph text
- **Highlight Section**: Bordered sub-section with title and description

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.
This ensures the component responds to its parent container width.

| Container Width | Layout |
|-----------------|--------|
| < 768px | Stacked (image top, content below) |
| ≥ 768px (@3xl) | Side-by-side columns |

## Props Structure

\`\`\`typescript
type About2Props = {
  config: {
    bgColor: HexColor;       // Section background
  };
  title: {
    label: string;           // Heading text
  };
  description: {
    content: string;         // Main paragraph
  };
  image: {
    url: string;             // Image URL (empty shows placeholder)
  };
  section: {
    title: string;           // Highlight block title
    description: string;     // Highlight block text
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
} satisfies Meta<typeof About2>;

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
      label: 'Who We Are',
    },
    description: {
      content: 'We\'re a team of designers, developers, and strategists who are passionate about creating digital products that make a difference.',
    },
    image: {
      url: '',
    },
    section: {
      title: 'Our Mission',
      description: 'To empower businesses with innovative digital solutions that drive growth and create lasting impact.',
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
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop',
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
 * Different highlight section content.
 */
export const VisionSection: Story = {
  args: {
    ...Default.args,
    section: {
      title: 'Our Vision',
      description: 'To be the leading platform for digital innovation, helping businesses of all sizes achieve their full potential in the digital economy.',
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
        story: 'Shows the tablet layout at 768px (@3xl breakpoint). Side-by-side columns activate.',
      },
    },
  },
};
