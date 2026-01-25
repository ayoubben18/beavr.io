/**
 * Testimonials1 Stories
 *
 * Testimonial carousel with title and navigation arrows.
 * Displays 3 text-only testimonial cards in a row.
 *
 * Key features:
 * - Configurable background color
 * - Navigation arrows with custom styling
 * - Pagination dots for multiple pages
 * - Responsive grid layout (1 → 2 → 3 columns)
 * - Container query responsive (not viewport-based)
 */

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Testimonials1 } from "./Testimonials1";

const meta = {
  title: "PageBuilder/Components/Testimonials1",
  component: Testimonials1,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A testimonial carousel component displaying customer quotes.

## Features

- **Background Color**: Customizable section background
- **Title**: Section heading with responsive sizing
- **Navigation**: Arrow buttons with customizable colors
- **Testimonials**: Array of text-only quotes with author names
- **Pagination**: Dots indicator for multiple pages

## Responsive Behavior

Uses **CSS Container Queries** (\`@container\`) instead of viewport media queries.

| Container Width | Layout |
|-----------------|--------|
| < 768px | Single column, centered |
| 768px - 1024px (@3xl) | 2-column grid |
| ≥ 1024px (@5xl) | 3-column grid |

## Props Structure

\`\`\`typescript
type Testimonial1Props = {
  config: {
    bgColor: HexColor;
  };
  title: {
    label: string;
  };
  navigation: {
    bgColor: HexColor;
    iconColor: HexColor;
    borderColor: HexColor;
  };
  testimonials: Array<{
    description: string;  // Quote text
    name: string;         // Author name
  }>;
};
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="@container">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Testimonials1>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default testimonials with 3 cards.
 */
export const Default: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "What Our Clients Say",
    },
    navigation: {
      bgColor: "#ffffff",
      iconColor: "#141414",
      borderColor: "#e3e3e3",
    },
    testimonials: [
      {
        description:
          "This product has completely transformed our workflow. The results speak for themselves.",
        name: "Sarah Johnson",
      },
      {
        description:
          "I was skeptical at first, but now I can't imagine running my business without it.",
        name: "Michael Chen",
      },
      {
        description:
          "Exceptional quality and outstanding customer support. Highly recommended!",
        name: "Emily Davis",
      },
    ],
  },
};

/**
 * Gray background variant.
 */
export const GrayBackground: Story = {
  args: {
    config: {
      bgColor: "#f5f5f5",
    },
    title: {
      label: "Trusted by Industry Leaders",
    },
    navigation: {
      bgColor: "#ffffff",
      iconColor: "#141414",
      borderColor: "#e3e3e3",
    },
    testimonials: [
      {
        description:
          "The best investment we've made for our company. ROI was visible within the first month.",
        name: "David Wilson",
      },
      {
        description:
          "Their team went above and beyond to ensure our success. Truly a partner, not just a vendor.",
        name: "Lisa Thompson",
      },
      {
        description:
          "Simple, intuitive, and powerful. Everything we needed in one platform.",
        name: "James Martin",
      },
    ],
  },
};

/**
 * Brand colored background.
 */
export const BrandBackground: Story = {
  args: {
    config: {
      bgColor: "#fef3c7",
    },
    title: {
      label: "Customer Success Stories",
    },
    navigation: {
      bgColor: "#ffffff",
      iconColor: "#b45309",
      borderColor: "#fde68a",
    },
    testimonials: Default.args.testimonials,
  },
};

/**
 * Multiple pages (6 testimonials).
 */
export const MultiplePages: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "What Our Clients Say",
    },
    navigation: {
      bgColor: "#ffffff",
      iconColor: "#141414",
      borderColor: "#e3e3e3",
    },
    testimonials: [
      {
        description: "First testimonial - Page 1",
        name: "Person One",
      },
      {
        description: "Second testimonial - Page 1",
        name: "Person Two",
      },
      {
        description: "Third testimonial - Page 1",
        name: "Person Three",
      },
      {
        description: "Fourth testimonial - Page 2",
        name: "Person Four",
      },
      {
        description: "Fifth testimonial - Page 2",
        name: "Person Five",
      },
      {
        description: "Sixth testimonial - Page 2",
        name: "Person Six",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "With 6 testimonials, pagination shows 2 pages. Use arrows or dots to navigate.",
      },
    },
  },
};

/**
 * Single testimonial (no navigation).
 */
export const SingleTestimonial: Story = {
  args: {
    config: {
      bgColor: "#ffffff",
    },
    title: {
      label: "Featured Review",
    },
    navigation: {
      bgColor: "#ffffff",
      iconColor: "#141414",
      borderColor: "#e3e3e3",
    },
    testimonials: [
      {
        description:
          "A truly transformative experience. Our company has never been more efficient or productive. I cannot recommend this solution highly enough to anyone looking to take their business to the next level.",
        name: "Robert Anderson",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "With only one testimonial, navigation arrows are hidden automatically.",
      },
    },
  },
};

/**
 * Dark navigation arrows.
 */
export const DarkNavigation: Story = {
  args: {
    ...Default.args,
    navigation: {
      bgColor: "#141414",
      iconColor: "#ffffff",
      borderColor: "#141414",
    },
  },
};

/**
 * Mobile viewport simulation.
 * Container constrained to 375px to show single column layout.
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
        story: "Shows the mobile single-column layout with stacked cards.",
      },
    },
  },
};

/**
 * Tablet viewport simulation.
 * Container at 768px shows 2-column layout.
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
        story: "Shows the tablet 2-column layout at 768px (@3xl breakpoint).",
      },
    },
  },
};
